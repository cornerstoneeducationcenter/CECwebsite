import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Please provide a valid amount' },
        { status: 400 }
      )
    }

    // Convert amount to cents/smallest currency unit
    const amountInCents = Math.round(amount * 100)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'kes',
            product_data: {
              name: 'Donation to Cornerstone Education Centre',
              description: 'Thank you for supporting our mission',
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL!,
      cancel_url: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL!,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

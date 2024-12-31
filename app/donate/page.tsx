'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function DonatePage() {
  const [amount, setAmount] = useState("")
  const [isCustomAmount, setIsCustomAmount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDonation = async () => {
    if (!amount || isNaN(parseFloat(amount))) {
      alert('Please enter a valid amount')
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
        }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (!stripe) {
        throw new Error('Stripe failed to initialize')
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to process donation. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const predefinedAmounts = [1000, 2500, 5000, 10000, 50000]

  const handleAmountSelect = (preset: number) => {
    setAmount(preset.toString())
    setIsCustomAmount(false)
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d*$/.test(value)) {
      setAmount(value)
      setIsCustomAmount(true)
    }
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-trueblue">Support Our Mission</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>
              Your support helps us provide quality education to more students.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset.toString() && !isCustomAmount ? "default" : "outline"}
                    onClick={() => handleAmountSelect(preset)}
                    className="w-full"
                  >
                    KES {preset.toLocaleString()}
                  </Button>
                ))}
                <Button
                  variant={isCustomAmount ? "default" : "outline"}
                  onClick={() => {
                    setIsCustomAmount(true)
                    setAmount("")
                  }}
                  className="w-full"
                >
                  Custom Amount
                </Button>
              </div>

              {isCustomAmount && (
                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium mb-2">
                    Enter Amount (KES)
                  </label>
                  <Input
                    id="customAmount"
                    type="text"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleCustomAmountChange}
                    className="text-lg"
                  />
                </div>
              )}

              <Button
                onClick={handleDonation}
                disabled={!amount || isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? 'Processing...' : `Donate KES ${amount ? parseInt(amount).toLocaleString() : '0'}`}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  All donations are secure and encrypted
                </p>
                <p className="text-xs text-muted-foreground">
                  Powered by Stripe
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4 text-trueblue">Why Support Us?</h2>
          <p className="text-muted-foreground">
            Your donation helps us provide quality education, improve our facilities, 
            and offer scholarships to deserving students. Together, we can make a 
            difference in the lives of our students and community.
          </p>
        </div>
      </div>
    </div>
  )
}

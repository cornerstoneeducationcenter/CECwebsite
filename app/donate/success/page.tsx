import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DonationSuccessPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-green-600">Thank You!</CardTitle>
            <CardDescription className="text-center text-lg">
              Your donation has been received successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Your support helps us continue our mission of providing quality education.
              We&apos;ve sent you a confirmation email with the details of your donation.
            </p>
            <Link href="/">
              <Button>Return to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

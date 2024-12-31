import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DonationCancelPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Donation Cancelled</CardTitle>
            <CardDescription className="text-center text-lg">
              Your donation process was cancelled.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              If you experienced any issues or have questions, please don&apos;t hesitate to contact us.
            </p>
            <div className="space-x-4">
              <Link href="/donate">
                <Button variant="default">Try Again</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Return to Homepage</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

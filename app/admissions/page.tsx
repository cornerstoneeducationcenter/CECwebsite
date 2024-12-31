import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Calendar, Clock } from 'lucide-react'

export default function AdmissionsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Admissions</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Admission Requirements</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Medical Insurance</h3>
                      <p className="text-muted-foreground">All children must have their family health insurance cover</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">School Fees</h3>
                      <p className="text-muted-foreground">All fees must be cleared before the beginning of each term</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Personal Effects</h3>
                      <p className="text-muted-foreground">Students must have all required personal effects and scholastic materials</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <a href="/admissions/apply">Start Application</a>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  For any queries, contact our admissions office
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6">
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Documentation</h3>
            <p className="text-muted-foreground">
              Ensure all required documents are properly filled and submitted
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Term Dates</h3>
            <p className="text-muted-foreground">
              Check our academic calendar for important dates and deadlines
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">School Hours</h3>
            <p className="text-muted-foreground">
              Classes run from 7:30 AM to 4:30 PM Monday through Friday
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">School Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Uniform Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Complete school uniform is mandatory</li>
                  <li>All items must be properly labeled</li>
                  <li>Maintain neat and clean appearance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Attendance Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Regular attendance is mandatory</li>
                  <li>Arrive by 7:25 AM</li>
                  <li>Follow term dates strictly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


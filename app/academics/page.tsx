import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, GraduationCap, Calendar } from 'lucide-react'

export default function AcademicsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Academics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
              <p className="text-muted-foreground mb-4">
                We offer the Competency Based Curriculum (CBC) from Pre-Primary to Junior Secondary School. Our curriculum is designed to develop well-rounded individuals with both academic and practical skills.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                <span>CBC Aligned</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Extra-Curricular Activities</h2>
              <p className="text-muted-foreground mb-4">
                We offer various clubs and activities including:
              </p>
              <ul className="space-y-2">
                <li>Red Cross</li>
                <li>Debating and Writing</li>
                <li>Scouts</li>
                <li>Home Management</li>
                <li>Young Environmentalists and Farmers club</li>
                <li>Music and Dance club</li>
                <li>Scripture Union</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Small Class Sizes</h3>
            <p className="text-muted-foreground">
              We maintain small class sizes to ensure individual attention for each student
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <GraduationCap className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Qualified Teachers</h3>
            <p className="text-muted-foreground">
              Our teachers are highly qualified and experienced professionals
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-bold mb-2">Structured Learning</h3>
            <p className="text-muted-foreground">
              Well-planned daily schedules from 7:30 AM to 4:30 PM
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Academic Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Learning Resources</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Modern library facility</li>
                  <li>Computer laboratory</li>
                  <li>Science laboratory</li>
                  <li>Art and craft center</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Support Services</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Academic counseling</li>
                  <li>Remedial classes</li>
                  <li>Career guidance</li>
                  <li>Parent-teacher consultations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


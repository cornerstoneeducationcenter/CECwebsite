import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Heart, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="School building"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Cornerstone Education Centre
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A centre of educational excellence for holistic child growth and development based on Christian principles
          </p>
          <Button size="lg" asChild>
            <a href="/admissions">Apply Now</a>
          </Button>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Christian Spirituality</h3>
                  <p className="text-muted-foreground">
                    Founded on Christian faith and fostering teaching from a Christian worldview
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    Upholding high standards of behavior with honesty and transparency
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Professionalism</h3>
                  <p className="text-muted-foreground">
                    Professional approach to teaching, learning, and service delivery
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Human Dignity</h3>
                  <p className="text-muted-foreground">
                    Treating every individual with respect and dignity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A centre of educational excellence for holistic child growth and development based on Christian principles
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To provide quality education to all children through creative methods of mentoring and spiritual formation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-muted-foreground mb-4">
              Cornerstone Education Centre was founded by Rev Prof Diphus Chemorion and Rev Dr Edith Chemorion on January 12, 2015. The centre was fully registered by the State Department of Education on May 20, 2021.
            </p>
            <p className="text-muted-foreground">
              Located in Cheptais Township on the slopes of Mt. Elgon, Bungoma County, our institution is founded on Christian Principles aligned to the doctrines of the Reformed Church and Christian values.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="School building"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-xl mb-2">Our Identity</h3>
              <p className="text-muted-foreground">
                The name is derived from Acts 4:11 where Jesus is described as the cornerstone. We welcome pupils from all faiths while maintaining our Christian foundation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-xl mb-2">Our Philosophy</h3>
              <p className="text-muted-foreground">
                We believe in providing quality education through creative methods of mentoring and spiritual formation, fostering both academic excellence and character development.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-xl mb-2">Our Commitment</h3>
              <p className="text-muted-foreground">
                We are committed to maintaining high standards of education while nurturing each student's God-given talents in a safe and supportive environment.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Objectives</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            <li>Offer quality transformative education at an affordable cost</li>
            <li>Provide a conducive and safe Christian learning environment</li>
            <li>Foster academic excellence and Spiritual growth</li>
            <li>Discover and nurture God-given talents of learners</li>
            <li>Provide academic testimonials to learners</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplicationPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Application Form</h1>

        <Card>
          <CardContent className="pt-6">
            <form className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Student Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" required />
                </div>

                <div>
                  <Label>Gender</Label>
                  <RadioGroup defaultValue="male" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="grade">Applying for Grade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pp1">Pre-Primary 1</SelectItem>
                      <SelectItem value="pp2">Pre-Primary 2</SelectItem>
                      <SelectItem value="g1">Grade 1</SelectItem>
                      <SelectItem value="g2">Grade 2</SelectItem>
                      <SelectItem value="g3">Grade 3</SelectItem>
                      <SelectItem value="g4">Grade 4</SelectItem>
                      <SelectItem value="g5">Grade 5</SelectItem>
                      <SelectItem value="g6">Grade 6</SelectItem>
                      <SelectItem value="js1">Junior Secondary 1</SelectItem>
                      <SelectItem value="js2">Junior Secondary 2</SelectItem>
                      <SelectItem value="js3">Junior Secondary 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Parent/Guardian Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Full Name</Label>
                    <Input id="parentName" required />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship to Student</Label>
                    <Input id="relationship" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Physical Address</Label>
                  <Input id="address" required />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">Submit Application</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


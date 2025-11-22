import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, FileText, ArrowLeft } from "lucide-react";

export default function CandidateDetail() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Link href="/candidates">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Candidates
          </Button>
        </Link>

        <Card className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">SJ</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">Sarah Johnson</h1>
                  <Badge>Active</Badge>
                </div>
                <p className="text-xl text-muted-foreground mb-3">Software Engineer</p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    sarah@example.com
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Edit</Button>
              <Button>Contact</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">Senior Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">TechCorp • 2021 - Present</p>
                  <p className="text-muted-foreground mt-2">Leading frontend development team, building scalable React applications.</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h3 className="font-semibold">Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">StartupXYZ • 2019 - 2021</p>
                  <p className="text-muted-foreground mt-2">Developed web applications using React and Node.js.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h2>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-muted-foreground">Stanford University • 2015 - 2019</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "PostgreSQL"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

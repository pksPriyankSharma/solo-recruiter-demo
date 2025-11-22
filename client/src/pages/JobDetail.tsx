import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRoute } from "wouter";
import { Briefcase, MapPin, DollarSign, Clock, Users, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function JobDetail() {
  const [, params] = useRoute("/jobs/:id");
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Link href="/jobs">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
        </Link>

        <Card className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Senior React Developer</h1>
                <Badge>Active</Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  TechCorp
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Remote
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  $120k-$150k
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Posted 2 days ago
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Edit</Button>
              <Button>Close Job</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Job Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are looking for an experienced React Developer to join our growing team. You will be responsible for developing and maintaining web applications using React, TypeScript, and modern frontend technologies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>5+ years of experience with React and TypeScript</li>
                <li>Strong understanding of modern frontend architecture</li>
                <li>Experience with state management (Redux, Zustand)</li>
                <li>Excellent problem-solving skills</li>
                <li>Strong communication skills</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Applicants (24)</h2>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">View all applicants</span>
                <Link href="/candidates">
                  <Button variant="outline" size="sm">Go to Candidates</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

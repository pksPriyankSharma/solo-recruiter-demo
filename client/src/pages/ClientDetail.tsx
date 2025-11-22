import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Building2, Mail, Phone, MapPin, Briefcase, TrendingUp, ArrowLeft } from "lucide-react";

export default function ClientDetail() {
  const activeJobs = [
    { id: 1, title: "Senior React Developer", applicants: 24, posted: "2 days ago" },
    { id: 2, title: "Product Manager", applicants: 18, posted: "5 days ago" },
    { id: 3, title: "DevOps Engineer", applicants: 15, posted: "3 days ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Link href="/clients">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Clients
          </Button>
        </Link>

        <Card className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-lg bg-orange-50 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">TechCorp</h1>
                <p className="text-xl text-muted-foreground mb-3">John Manager - Hiring Manager</p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    john@techcorp.com
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    +1 (555) 111-2222
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

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">Active Jobs</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-purple-50 border-purple-200">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Total Placements</div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Active Job Openings</h2>
            <div className="space-y-3">
              {activeJobs.map((job) => (
                <Card key={job.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href={`/jobs/${job.id}`}>
                        <a className="font-semibold hover:text-primary transition-colors">{job.title}</a>
                      </Link>
                      <p className="text-sm text-muted-foreground">{job.applicants} applicants • Posted {job.posted}</p>
                    </div>
                    <Link href={`/jobs/${job.id}`}>
                      <Button variant="outline" size="sm">View Job</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

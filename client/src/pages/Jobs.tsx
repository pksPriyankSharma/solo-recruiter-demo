import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Briefcase, MapPin, DollarSign, Clock, Plus } from "lucide-react";

export default function Jobs() {
  const jobs = [
    { id: 1, title: "Senior React Developer", company: "TechCorp", location: "Remote", salary: "$120k-$150k", status: "active", applicants: 24, posted: "2 days ago" },
    { id: 2, title: "Product Manager", company: "StartupXYZ", location: "San Francisco", salary: "$130k-$160k", status: "active", applicants: 18, posted: "5 days ago" },
    { id: 3, title: "UX Designer", company: "DesignCo", location: "New York", salary: "$90k-$120k", status: "active", applicants: 31, posted: "1 week ago" },
    { id: 4, title: "DevOps Engineer", company: "CloudTech", location: "Remote", salary: "$110k-$140k", status: "active", applicants: 15, posted: "3 days ago" },
    { id: 5, title: "Marketing Manager", company: "GrowthInc", location: "Austin", salary: "$95k-$125k", status: "closed", applicants: 42, posted: "2 weeks ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Jobs</h1>
            <p className="text-muted-foreground">Manage your job postings</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Post New Job
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="default" size="sm">All Jobs</Button>
          <Button variant="outline" size="sm">Active</Button>
          <Button variant="outline" size="sm">Closed</Button>
          <Button variant="outline" size="sm">Draft</Button>
        </div>

        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Link href={`/jobs/${job.id}`}>
                      <a className="text-xl font-semibold hover:text-primary transition-colors">{job.title}</a>
                    </Link>
                    <Badge variant={job.status === "active" ? "default" : "secondary"}>
                      {job.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </div>
                  </div>
                </div>
                <Link href={`/jobs/${job.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
              </div>
              <div className="text-sm text-muted-foreground">
                {job.applicants} applicants
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

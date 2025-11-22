import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  Plus,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const metrics = [
    { label: "Active Jobs", value: "24", icon: Briefcase, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Total Candidates", value: "156", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
    { label: "Placements", value: "18", icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-50" },
    { label: "Clients", value: "12", icon: Building2, color: "text-orange-600", bgColor: "bg-orange-50" },
  ];

  const recentActivity = [
    { action: "New candidate added", detail: "Sarah Johnson - Software Engineer", time: "2 hours ago" },
    { action: "Job posted", detail: "Senior React Developer at TechCorp", time: "5 hours ago" },
    { action: "Placement successful", detail: "John Doe placed at StartupXYZ", time: "1 day ago" },
    { action: "Client added", detail: "Acme Corporation", time: "2 days ago" },
    { action: "Candidate interview", detail: "Mike Smith - Product Manager", time: "3 days ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your recruitment overview.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Card>
            );
          })}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <Plus className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Post a Job</h3>
              <p className="text-muted-foreground mb-4">Create a new job opening</p>
              <Link href="/jobs">
                <Button className="w-full">
                  Go to Jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-50">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <Plus className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Candidate</h3>
              <p className="text-muted-foreground mb-4">Add a new candidate profile</p>
              <Link href="/candidates">
                <Button className="w-full">
                  Go to Candidates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-50">
                  <Building2 className="h-6 w-6 text-orange-600" />
                </div>
                <Plus className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Client</h3>
              <p className="text-muted-foreground mb-4">Manage client contacts</p>
              <Link href="/clients">
                <Button className="w-full">
                  Go to Clients
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="p-2 rounded-lg bg-blue-50 mt-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{activity.action}</div>
                    <div className="text-sm text-muted-foreground">{activity.detail}</div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">{activity.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Building2, Calendar } from "lucide-react";

export default function Placements() {
  const placements = [
    { id: 1, candidate: "John Doe", role: "DevOps Engineer", client: "StartupXYZ", date: "2025-01-15", salary: "$110k" },
    { id: 2, candidate: "Sarah Johnson", role: "Software Engineer", client: "TechCorp", date: "2025-01-10", salary: "$120k" },
    { id: 3, candidate: "Mike Smith", role: "Product Manager", client: "Acme Corp", date: "2024-12-20", salary: "$130k" },
    { id: 4, candidate: "Emily Davis", role: "UX Designer", client: "DesignCo", date: "2024-12-15", salary: "$95k" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Placements</h1>
          <p className="text-muted-foreground">Track your successful placements and metrics</p>
        </div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div>
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">Total Placements</div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Building2 className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Placements List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Placements</h2>
          <div className="space-y-4">
            {placements.map((placement) => (
              <Card key={placement.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{placement.candidate}</h3>
                      <Badge>Placed</Badge>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{placement.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{placement.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{placement.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>{placement.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

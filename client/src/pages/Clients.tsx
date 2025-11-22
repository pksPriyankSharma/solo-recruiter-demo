import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Building2, Mail, Phone, Briefcase, Plus } from "lucide-react";

export default function Clients() {
  const clients = [
    { id: 1, name: "TechCorp", contact: "John Manager", email: "john@techcorp.com", phone: "+1 (555) 111-2222", activeJobs: 5, totalPlacements: 12 },
    { id: 2, name: "StartupXYZ", contact: "Jane Director", email: "jane@startupxyz.com", phone: "+1 (555) 222-3333", activeJobs: 3, totalPlacements: 8 },
    { id: 3, name: "Acme Corporation", contact: "Bob Smith", email: "bob@acme.com", phone: "+1 (555) 333-4444", activeJobs: 2, totalPlacements: 15 },
    { id: 4, name: "DesignCo", contact: "Alice Johnson", email: "alice@designco.com", phone: "+1 (555) 444-5555", activeJobs: 4, totalPlacements: 6 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Clients</h1>
            <p className="text-muted-foreground">Manage your client relationships</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Client
          </Button>
        </div>

        <div className="grid gap-4">
          {clients.map((client) => (
            <Card key={client.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <Link href={`/clients/${client.id}`}>
                        <a className="text-xl font-semibold hover:text-primary transition-colors">{client.name}</a>
                      </Link>
                      <p className="text-muted-foreground">{client.contact}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground ml-14">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {client.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {client.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {client.activeJobs} active jobs
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="secondary">{client.totalPlacements} placements</Badge>
                    </div>
                  </div>
                </div>
                <Link href={`/clients/${client.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

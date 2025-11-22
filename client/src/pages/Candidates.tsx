import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Users, Mail, Phone, MapPin, Plus } from "lucide-react";

export default function Candidates() {
  const candidates = [
    { id: 1, name: "Sarah Johnson", role: "Software Engineer", location: "San Francisco", email: "sarah@example.com", phone: "+1 (555) 123-4567", status: "active", experience: "5 years" },
    { id: 2, name: "Mike Smith", role: "Product Manager", location: "New York", email: "mike@example.com", phone: "+1 (555) 234-5678", status: "interviewing", experience: "7 years" },
    { id: 3, name: "Emily Davis", role: "UX Designer", location: "Austin", email: "emily@example.com", phone: "+1 (555) 345-6789", status: "active", experience: "4 years" },
    { id: 4, name: "John Doe", role: "DevOps Engineer", location: "Remote", email: "john@example.com", phone: "+1 (555) 456-7890", status: "placed", experience: "6 years" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Candidates</h1>
            <p className="text-muted-foreground">Manage your candidate database</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Candidate
          </Button>
        </div>

        <div className="grid gap-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <Link href={`/candidates/${candidate.id}`}>
                        <a className="text-xl font-semibold hover:text-primary transition-colors">{candidate.name}</a>
                      </Link>
                      <p className="text-muted-foreground">{candidate.role} • {candidate.experience}</p>
                    </div>
                    <Badge variant={candidate.status === "placed" ? "default" : "secondary"}>
                      {candidate.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground ml-14">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {candidate.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {candidate.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {candidate.phone}
                    </div>
                  </div>
                </div>
                <Link href={`/candidates/${candidate.id}`}>
                  <Button variant="outline">View Profile</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

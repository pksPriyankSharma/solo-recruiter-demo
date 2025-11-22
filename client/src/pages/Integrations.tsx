import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Check, ArrowRight, Zap, Shield, RefreshCw } from "lucide-react";

export default function Integrations() {
  const integrations = [
    { name: "Workday", logo: "W", description: "Enterprise HR management system", status: "available", category: "HR System" },
    { name: "SAP SuccessFactors", logo: "S", description: "Cloud-based HCM suite", status: "available", category: "HR System" },
    { name: "BambooHR", logo: "B", description: "HR software for small & medium businesses", status: "available", category: "HR System" },
    { name: "Greenhouse", logo: "G", description: "Applicant tracking system", status: "available", category: "ATS" },
    { name: "Lever", logo: "L", description: "Talent acquisition suite", status: "available", category: "ATS" },
    { name: "Custom API", logo: "API", description: "RESTful API for custom integrations", status: "available", category: "API" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">HR System Integrations</h1>
          <p className="text-muted-foreground">Connect with company HR systems to streamline recruitment workflows</p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Automated Job Sync</h3>
            <p className="text-sm text-muted-foreground">
              Automatically receive job requirements from client HR systems in real-time
            </p>
          </Card>
          <Card className="p-6">
            <RefreshCw className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Candidate Submission</h3>
            <p className="text-sm text-muted-foreground">
              Submit candidate profiles directly to client systems with one click
            </p>
          </Card>
          <Card className="p-6">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure & Compliant</h3>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade security with OAuth 2.0 and data encryption
            </p>
          </Card>
        </div>

        {/* Integration Flow */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">Authorize integration with client's HR system</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-semibold mb-2">Sync Jobs</h3>
              <p className="text-sm text-muted-foreground">Receive job requirements automatically</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-semibold mb-2">Submit Candidates</h3>
              <p className="text-sm text-muted-foreground">Send qualified candidates to client</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">4</div>
              <h3 className="font-semibold mb-2">Track Status</h3>
              <p className="text-sm text-muted-foreground">Monitor application progress in real-time</p>
            </div>
          </div>
        </Card>

        {/* Available Integrations */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Integrations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {integrations.map((integration) => (
              <Card key={integration.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{integration.logo}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                        <Badge variant="secondary">{integration.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Check className="h-4 w-4" />
                        <span>Available</span>
                      </div>
                    </div>
                  </div>
                  <Button>
                    Connect
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* API Documentation */}
        <Card className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <Globe className="h-12 w-12 text-primary" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Custom API Integration</h2>
              <p className="text-muted-foreground">
                Build custom integrations using our RESTful API. Perfect for proprietary HR systems or unique workflows.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Key API Endpoints:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded">POST /api/jobs/sync</code> - Receive job requirements</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded">POST /api/candidates/submit</code> - Submit candidate profiles</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded">GET /api/applications/status</code> - Track application status</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded">POST /api/webhooks/configure</code> - Set up webhooks for real-time updates</li>
              </ul>
            </div>
            <Button variant="outline">View API Documentation</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

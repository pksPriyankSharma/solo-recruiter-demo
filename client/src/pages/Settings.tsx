import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Building2, CreditCard, Bell } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Profile Settings */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Profile</h2>
          </div>
          <div className="space-y-4 max-w-xl">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Recruiter" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>

        {/* Organization Settings */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Organization</h2>
          </div>
          <div className="space-y-4 max-w-xl">
            <div>
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" defaultValue="My Recruitment Agency" />
            </div>
            <div>
              <Label htmlFor="org-email">Organization Email</Label>
              <Input id="org-email" type="email" defaultValue="contact@agency.com" />
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>

        {/* Subscription */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Subscription</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Current Plan</p>
              <p className="text-2xl font-bold">Professional</p>
              <p className="text-sm text-muted-foreground">$49/month • Renews on Feb 15, 2025</p>
            </div>
            <div className="flex gap-2">
              <Button>Upgrade Plan</Button>
              <Button variant="outline">Billing History</Button>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Job Applications</p>
                <p className="text-sm text-muted-foreground">Get notified when candidates apply</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Placement Updates</p>
                <p className="text-sm text-muted-foreground">Updates on successful placements</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

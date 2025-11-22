import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { Link } from "wouter";
import {
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">{APP_TITLE}</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/dashboard">
                <a className="text-sm font-medium hover:text-primary transition-colors">Dashboard</a>
              </Link>
              <Link href="/pricing">
                <a className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              </Link>
              <Link href="/integrations">
                <a className="text-sm font-medium hover:text-primary transition-colors">Integrations</a>
              </Link>
              <Link href="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Streamline Your Recruitment Process
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The all-in-one platform for solo recruiters and hiring agencies to manage jobs, candidates, and clients efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8">
                  View Demo Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  See Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed specifically for recruitment professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Job Management</h3>
              <p className="text-muted-foreground">
                Post, track, and manage job openings with ease. Keep all your active positions organized in one place.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Candidate Database</h3>
              <p className="text-muted-foreground">
                Build and maintain a comprehensive database of candidates with profiles, resumes, and application history.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client Management</h3>
              <p className="text-muted-foreground">
                Manage relationships with hiring managers and companies. Track active requirements and placements.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">HR System Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate with company HR systems via API. Sync job requirements and candidate submissions automatically.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Placement Tracking</h3>
              <p className="text-muted-foreground">
                Monitor successful placements and track your recruitment metrics. Visualize your success over time.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
              <p className="text-muted-foreground">
                Fast-track common tasks with quick actions. Post jobs, add candidates, and update statuses in seconds.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Solo Recruiter?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-muted-foreground">
                    Your data is protected with enterprise-grade security. Multi-tenant architecture ensures complete data isolation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Built with modern technology for blazing-fast performance. Spend less time waiting and more time recruiting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
                  <p className="text-muted-foreground">
                    Access your recruitment dashboard from anywhere. Fully responsive design works perfectly on all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Recruitment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of recruiters who trust Solo Recruiter for their business
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Explore Demo Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">{APP_TITLE}</span>
              </div>
              <p className="text-sm">
                Empowering recruiters with modern tools for success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/dashboard"><a className="hover:text-primary transition-colors">Dashboard</a></Link></li>
                <li><Link href="/pricing"><a className="hover:text-primary transition-colors">Pricing</a></Link></li>
                <li><Link href="/integrations"><a className="hover:text-primary transition-colors">Integrations</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/jobs"><a className="hover:text-primary transition-colors">Job Management</a></Link></li>
                <li><Link href="/candidates"><a className="hover:text-primary transition-colors">Candidates</a></Link></li>
                <li><Link href="/clients"><a className="hover:text-primary transition-colors">Clients</a></Link></li>
                <li><Link href="/placements"><a className="hover:text-primary transition-colors">Placements</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 {APP_TITLE}. All rights reserved. This is a demo website.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


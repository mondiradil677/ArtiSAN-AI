import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Wand2, TrendingUp } from "lucide-react";
import heroArtisan from "@/assets/hero-artisan.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Storytelling</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Your Craft into
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Compelling Stories</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empower your traditional artistry with AI. Generate beautiful product stories, 
                reach global audiences, and grow your craft business—all from one simple platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="text-lg px-8 py-6">
                <Wand2 className="h-5 w-5" />
                Start Creating Stories
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Artisans Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Average Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Languages Supported</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image & Demo Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroArtisan} 
                alt="Traditional artisan crafting with AI assistance" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Demo Card */}
              <Card className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm border-primary/20 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-success">AI Story Generated</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "This handwoven textile captures centuries of Rajasthani tradition. 
                    Each thread tells a story of heritage, crafted with techniques passed down 
                    through generations..."
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-xs text-accent font-medium">+67% engagement increase</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
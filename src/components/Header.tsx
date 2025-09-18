import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import artisanLogo from "@/assets/artisan-logo.png";

const Header = () => {
  const { toast } = useToast();

  const handleSignIn = () => {
    toast({
      title: "Sign In",
      description: "Sign in functionality coming soon! For now, try the AI Story Weaver below.",
    });
  };

  const handleGetStarted = () => {
    const storyWeaverSection = document.getElementById('story-weaver');
    if (storyWeaverSection) {
      storyWeaverSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Let's Get Started!",
      description: "Scroll down to try our AI Story Weaver and create your first compelling product story.",
    });
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={artisanLogo} alt="ArtiSAN.ai" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-foreground">ArtiSAN.ai</h1>
              <p className="text-xs text-muted-foreground">Weave Your Story. Expand Your Reach.</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleSignIn}>Sign In</Button>
            <Button variant="hero" onClick={handleGetStarted}>Get Started Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
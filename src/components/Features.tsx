import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wand2, 
  TrendingUp, 
  Camera, 
  ShoppingBag, 
  Globe, 
  BarChart3,
  Sparkles,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI Story Weaver",
      description: "Transform simple descriptions into compelling, culturally-rich product narratives that resonate with global audiences.",
      benefits: ["Multi-language support", "Cultural context awareness", "SEO optimization"],
      status: "Available"
    },
    {
      icon: TrendingUp,
      title: "Market Insight Engine",
      description: "Get real-time trends and recommendations tailored to your craft. Know what's selling and when to create it.",
      benefits: ["Trend predictions", "Seasonal insights", "Competition analysis"],
      status: "Coming Soon"
    },
    {
      icon: Camera,
      title: "Visual Enhancer",
      description: "Professional-quality product photos with AI-powered background removal and enhancement in seconds.",
      benefits: ["Background removal", "Lighting optimization", "Multiple formats"],
      status: "Coming Soon"
    },
    {
      icon: ShoppingBag,
      title: "Unified Listings Manager",
      description: "Create once, publish everywhere. Manage your products across all major marketplaces from one dashboard.",
      benefits: ["Multi-platform sync", "Automated updates", "Inventory tracking"],
      status: "Coming Soon"
    }
  ];

  const stats = [
    { label: "Average Sales Increase", value: "40%", icon: TrendingUp },
    { label: "Time Saved on Marketing", value: "75%", icon: BarChart3 },
    { label: "Global Reach Expansion", value: "300%", icon: Globe },
    { label: "Customer Engagement", value: "85%", icon: Sparkles }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Platform Features
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Scale Your Craft
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From AI-powered storytelling to market insights, our platform bridges 
            traditional craftsmanship with modern digital marketing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft border-primary/10">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-medium border-primary/10 hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge 
                    variant={feature.status === "Available" ? "default" : "secondary"}
                    className={feature.status === "Available" ? "bg-success" : ""}
                  >
                    {feature.status === "Available" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature.status}
                      </>
                    ) : (
                      feature.status
                    )}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
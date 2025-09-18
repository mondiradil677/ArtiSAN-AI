import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  Wand2, 
  Copy, 
  Sparkles, 
  Globe, 
  Heart, 
  Star,
  CheckCircle 
} from "lucide-react";

const StoryWeaver = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStories, setGeneratedStories] = useState<string[]>([]);
  const [productName, setProductName] = useState("");
  const [craftDetails, setCraftDetails] = useState("");
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const { toast } = useToast();

  const handleGenerateStories = async () => {
    if (!productName.trim() || !craftDetails.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both product name and craft details to generate stories.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI story generation
    setTimeout(() => {
      const stories = [
        `Discover the timeless elegance of ${productName}, a masterpiece rooted in centuries of traditional craftsmanship. ${craftDetails} Each piece embodies the soul of our artisan's heritage, where ancient techniques meet contemporary appeal. This isn't just a product—it's a story of cultural preservation, sustainable artistry, and the passionate dedication of skilled hands that have perfected their craft through generations.`,
        
        `Meet ${productName}—where tradition whispers and beauty speaks. ${craftDetails} Our artisan's journey began in childhood, learning sacred techniques from elders who understood that true craft transcends mere creation. Every curve, every texture, every carefully chosen detail reflects not just skill, but a deep connection to ancestral wisdom and the natural world that inspires each unique piece.`,
        
        `${productName} represents more than exquisite craftsmanship—it's a bridge between past and future. ${craftDetails} Handcrafted with materials sourced from local communities, each piece supports sustainable practices while preserving endangered artistic traditions. When you choose this creation, you're not just acquiring beauty; you're becoming part of a movement that honors heritage and empowers artisan communities.`
      ];
      
      setGeneratedStories(stories);
      setIsGenerating(false);
      toast({
        title: "Stories Generated!",
        description: "Your AI-powered product stories are ready. Choose your favorite!",
      });
    }, 3000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setUploadedImages(prev => [...prev, ...newImages]);
      toast({
        title: "Images Uploaded!",
        description: `${newImages.length} image(s) added to your craft story.`,
      });
    }
  };

  const copyToClipboard = (story: string, index: number) => {
    navigator.clipboard.writeText(story);
    setSelectedStory(index);
    toast({
      title: "Story Copied!",
      description: "Your story has been copied to clipboard and is ready to use.",
    });
  };

  return (
    <section id="story-weaver" className="py-20 bg-gradient-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            AI Story Weaver
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Transform Your Craft into Compelling Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simply describe your product and craft process. Our AI will weave beautiful, 
            culturally-rich narratives that connect with customers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-medium border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-primary" />
                Create Your Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  id="product-name"
                  placeholder="e.g., Handwoven Pashmina Shawl"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="craft-details">Tell us about your craft (2-3 sentences)</Label>
                <Textarea
                  id="craft-details"
                  placeholder="e.g., I use traditional bamboo looms from my village in Assam. The silk is hand-spun using techniques my grandmother taught me. Each piece takes 5 days to complete with intricate paisley patterns."
                  value={craftDetails}
                  onChange={(e) => setCraftDetails(e.target.value)}
                  className="min-h-32 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <div 
                className="border-2 border-dashed border-primary/20 rounded-lg p-6 text-center space-y-2 cursor-pointer hover:border-primary/40 transition-colors"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Upload className="h-8 w-8 text-primary mx-auto" />
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">Upload photos</span> of your craft process
                </div>
                <div className="text-xs text-muted-foreground">
                  {uploadedImages.length > 0 ? `${uploadedImages.length} image(s) selected` : "Optional: Add images to enhance your story"}
                </div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>

              <Button 
                onClick={handleGenerateStories}
                disabled={isGenerating}
                className="w-full"
                variant="hero"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="h-4 w-4 animate-spin" />
                    Weaving Your Stories...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4" />
                    Generate AI Stories
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Stories */}
          <div className="space-y-6">
            {generatedStories.length === 0 ? (
              <Card className="shadow-soft border-muted">
                <CardContent className="p-12 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center gap-4">
                      <Heart className="h-8 w-8 text-primary/40" />
                      <Globe className="h-8 w-8 text-accent/40" />
                      <Star className="h-8 w-8 text-primary/40" />
                    </div>
                    <p className="text-muted-foreground">
                      Your AI-generated stories will appear here. 
                      Fill in the details and let our AI weave your craft's narrative!
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="text-center mb-4">
                  <Badge variant="outline" className="border-success text-success">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Stories Generated Successfully
                  </Badge>
                </div>
                {generatedStories.map((story, index) => (
                  <Card 
                    key={index} 
                    className={`shadow-soft cursor-pointer transition-all duration-300 ${
                      selectedStory === index 
                        ? 'border-primary bg-primary/5 shadow-glow' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          Story Option {index + 1}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(story, index)}
                          className="hover:bg-primary/10"
                        >
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                      <p className="text-foreground leading-relaxed text-sm">
                        {story}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryWeaver;
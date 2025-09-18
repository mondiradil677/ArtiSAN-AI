import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoryWeaver from "@/components/StoryWeaver";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StoryWeaver />
        <Features />
      </main>
    </div>
  );
};

export default Index;
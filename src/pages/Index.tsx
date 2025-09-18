import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoryWeaver from "@/components/StoryWeaver";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StoryWeaver />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
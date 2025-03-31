import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="font-opensans text-dark bg-light min-h-screen">
      <Header />
      <HeroSection />
      <SubscriptionBanner />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;

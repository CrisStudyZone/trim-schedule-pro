import HeroSection from "@/components/HeroSection";
import ActionButtons from "@/components/ActionButtons";
import ServicesPreview from "@/components/ServicesPreview";
import QuickStats from "@/components/QuickStats";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section con logo y mensaje principal */}
      <HeroSection />
      
      {/* Botones de acción principales */}
      <ActionButtons />
      
      {/* Preview de servicios */}
      <ServicesPreview />
      
      {/* Estadísticas de confianza */}
      <QuickStats />
      
      {/* Navegación inferior fija */}
      <BottomNavigation />
    </div>
  );
};

export default Index;

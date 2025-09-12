import { Calendar, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActionButtons = () => {
  return (
    <section className="px-6 py-8 space-y-6">
      {/* Botón principal de reserva */}
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Button 
          size="lg" 
          className="btn-barberia w-full h-16 text-xl font-bold text-white relative group"
        >
          <Calendar className="w-6 h-6 mr-3 icon-glow" />
          Reservar Turno
          <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>

      {/* Grid de acciones secundarias */}
      <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Button 
          variant="outline" 
          size="lg" 
          className="card-barberia h-20 flex-col gap-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
        >
          <MapPin className="w-6 h-6 text-primary icon-glow" />
          <span className="text-sm font-semibold">Cerca de ti</span>
        </Button>

        <Button 
          variant="outline" 
          size="lg" 
          className="card-barberia h-20 flex-col gap-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
        >
          <Clock className="w-6 h-6 text-primary icon-glow" />
          <span className="text-sm font-semibold">Disponibles</span>
        </Button>
      </div>

      {/* Botón de valoraciones */}
      <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full h-14 bg-secondary-container/50 hover:bg-secondary-container text-secondary-foreground border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
        >
          <Star className="w-5 h-5 mr-3 text-yellow-500 fill-yellow-500" />
          Ver Reseñas y Calificaciones
        </Button>
      </div>
    </section>
  );
};

export default ActionButtons;
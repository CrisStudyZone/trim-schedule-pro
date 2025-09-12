import { Calendar, UserPlus, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActionButtons = () => {
  return (
    <section className="px-6 py-8 space-y-6">
      {/* Botón principal de agendar */}
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Button 
          size="lg" 
          className="btn-barberia w-full h-16 text-xl font-bold text-white relative group"
        >
          <Calendar className="w-6 h-6 mr-3 icon-glow" />
          Agendar Cita
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
          <UserPlus className="w-6 h-6 text-primary icon-glow" />
          <span className="text-sm font-semibold">Agregar Profesional</span>
        </Button>

        <Button 
          variant="outline" 
          size="lg" 
          className="card-barberia h-20 flex-col gap-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
        >
          <Clock className="w-6 h-6 text-primary icon-glow" />
          <span className="text-sm font-semibold">Turnos del Día</span>
        </Button>
      </div>

      {/* Botón de todos los turnos */}
      <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full h-14 bg-secondary-container/50 hover:bg-secondary-container text-secondary-foreground border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
        >
          <Users className="w-5 h-5 mr-3 text-primary" />
          Ver Todos los Turnos Asignados
        </Button>
      </div>
    </section>
  );
};

export default ActionButtons;
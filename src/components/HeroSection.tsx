import cutsLogo from "@/assets/cuts-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-glow/10 to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-light))_0%,transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-30" />
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto">
        {/* Logo con animación */}
        <div className="flex justify-center animate-bounce-in">
          <div className="relative">
            <img 
              src={cutsLogo} 
              alt="Cuts Appointment" 
              className="w-32 h-32 object-contain animate-float filter drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Título y subtítulo */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl font-bold text-foreground leading-tight">
            Panel
            <span className="block text-primary font-extrabold">Profesional</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gestiona tu barbería de manera eficiente. Control total de turnos y clientes.
          </p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="flex justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Turnos Hoy</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="text-sm text-muted-foreground">Clientes</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Confirmados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
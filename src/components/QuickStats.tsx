import { Calendar, Clock, Users, TrendingUp } from "lucide-react";

const QuickStats = () => {
  const stats = [
    {
      icon: Calendar,
      value: "24",
      label: "Turnos Hoy",
      trend: "+3 vs ayer",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "156",
      label: "Clientes Activos",
      trend: "+18 este mes",
      color: "text-primary"
    },
    {
      icon: Clock,
      value: "4.2h",
      label: "Promedio/Cliente",
      trend: "Optimizado",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "+18%",
      label: "Crecimiento",
      trend: "Mes anterior",
      color: "text-primary"
    }
  ];

  return (
    <section className="px-6 py-8 bg-gradient-to-r from-primary-glow/5 to-accent/5 mx-4 rounded-3xl">
      <div className="animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <h2 className="text-xl font-bold text-center mb-6 text-foreground">
          Resumen del Negocio
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center space-y-2 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20"
                style={{ animationDelay: `${2 + index * 0.1}s` }}
              >
                <div className="flex justify-center">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                  <div className="text-xs text-primary font-medium mt-1">{stat.trend}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
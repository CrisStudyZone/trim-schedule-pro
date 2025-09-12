import { TrendingUp, Clock, Users, Award } from "lucide-react";

const QuickStats = () => {
  const stats = [
    {
      icon: Users,
      value: "12.5K+",
      label: "Clientes Satisfechos",
      trend: "+15%",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      value: "< 5min",
      label: "Tiempo de Reserva",
      trend: "Promedio",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: "4.9★",
      label: "Calificación Media",
      trend: "+0.2",
      color: "text-yellow-600"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Turnos Confirmados",
      trend: "+3%",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="px-6 py-8 bg-gradient-to-r from-primary-glow/5 to-accent/5 mx-4 rounded-3xl">
      <div className="animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <h2 className="text-xl font-bold text-center mb-6 text-foreground">
          Confianza y Calidad
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
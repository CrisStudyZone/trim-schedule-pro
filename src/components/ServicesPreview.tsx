import { Calendar, Users, Clock, Bell } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Calendar,
      title: "Próximos Turnos",
      subtitle: "Ver agenda del día",
      count: "8 turnos",
      color: "text-primary",
      urgent: false
    },
    {
      icon: Users,
      title: "Clientes Activos",
      subtitle: "Gestionar perfiles",
      count: "156 clientes",
      color: "text-primary",
      urgent: false
    },
    {
      icon: Clock,
      title: "Turnos Pendientes",
      subtitle: "Confirmar citas",
      count: "3 pendientes",
      color: "text-destructive",
      urgent: true
    },
    {
      icon: Bell,
      title: "Notificaciones",
      subtitle: "Recordatorios auto",
      count: "5 enviadas",
      color: "text-primary",
      urgent: false
    }
  ];

  return (
    <section className="px-6 py-8">
      <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Acciones Rápidas
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={`card-barberia text-center space-y-3 hover:scale-105 transition-transform duration-300 cursor-pointer relative ${
                  service.urgent ? 'ring-2 ring-destructive/30' : ''
                }`}
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                {service.urgent && (
                  <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Urgente
                  </div>
                )}
                
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full ${service.urgent ? 'bg-destructive/20' : 'bg-primary/20'}`}>
                    <Icon className={`w-6 h-6 ${service.color} icon-glow`} />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{service.subtitle}</p>
                  <div className="mt-2">
                    <span className={`font-bold text-lg ${service.urgent ? 'text-destructive' : 'text-primary'}`}>
                      {service.count}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
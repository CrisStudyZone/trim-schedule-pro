import { Scissors, Users, Crown, Zap } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte Clásico",
      price: "$15.000",
      duration: "30 min",
      color: "text-primary"
    },
    {
      icon: Crown,
      title: "Corte Premium",
      price: "$25.000",
      duration: "45 min",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Barba & Bigote",
      price: "$12.000",
      duration: "25 min",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Combo Completo",
      price: "$35.000",
      duration: "60 min",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="px-6 py-8">
      <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Servicios Populares
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="card-barberia text-center space-y-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full bg-gradient-to-br from-${service.color.split('-')[1]}-100 to-${service.color.split('-')[1]}-200`}>
                    <Icon className={`w-6 h-6 ${service.color} icon-glow`} />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{service.title}</h3>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground">{service.duration}</span>
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
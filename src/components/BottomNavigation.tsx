import { Home, Calendar, Users, UserCheck, Settings } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Calendar, label: "Turnos", active: false },
    { icon: Users, label: "Profesionales", active: false },
    { icon: UserCheck, label: "Clientes", active: false },
    { icon: Settings, label: "Config", active: false }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border px-4 py-3 animate-slide-in">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all duration-300 ${
                item.active 
                  ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
              style={{ animationDelay: `${2.2 + index * 0.1}s` }}
            >
              <Icon className={`w-5 h-5 ${item.active ? 'icon-glow' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
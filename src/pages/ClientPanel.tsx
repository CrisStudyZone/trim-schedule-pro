import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Scissors, Bell, History } from "lucide-react";

const ClientPanel = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const upcomingAppointments = [
    {
      id: 1,
      date: "2024-01-20",
      time: "10:00 AM",
      professional: "Carlos Mendez",
      service: "Corte + Barba",
      status: "confirmed"
    },
    {
      id: 2,
      date: "2024-02-15",
      time: "2:30 PM", 
      professional: "Ana García",
      service: "Corte Clásico",
      status: "pending"
    }
  ];

  const appointmentHistory = [
    {
      id: 1,
      date: "2023-12-15",
      professional: "Carlos Mendez",
      service: "Corte + Barba",
      photo: "/api/placeholder/150/150"
    },
    {
      id: 2,
      date: "2023-11-10",
      professional: "Ana García", 
      service: "Corte Fade",
      photo: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-lg border-b border-border p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
              <Scissors className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">Mi Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 bg-muted/50 p-1 rounded-lg">
          <Button
            variant={activeTab === "appointments" ? "default" : "ghost"}
            className="flex-1"
            onClick={() => setActiveTab("appointments")}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Citas
          </Button>
          <Button
            variant={activeTab === "history" ? "default" : "ghost"}
            className="flex-1"
            onClick={() => setActiveTab("history")}
          >
            <History className="w-4 h-4 mr-2" />
            Historial
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            className="flex-1"
            onClick={() => setActiveTab("profile")}
          >
            <User className="w-4 h-4 mr-2" />
            Perfil
          </Button>
        </div>

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mis Citas</h2>
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Nueva Cita
              </Button>
            </div>

            <div className="grid gap-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{appointment.service}</p>
                        <p className="text-muted-foreground">con {appointment.professional}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge 
                        variant={appointment.status === "confirmed" ? "default" : "secondary"}
                        className="capitalize"
                      >
                        {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Reagendar</Button>
                        <Button size="sm" variant="destructive">Cancelar</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Historial de Cortes</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {appointmentHistory.map((appointment) => (
                <Card key={appointment.id} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden">
                        <img 
                          src={appointment.photo} 
                          alt="Foto del corte"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{appointment.service}</p>
                        <p className="text-muted-foreground text-sm">por {appointment.professional}</p>
                        <p className="text-muted-foreground text-sm">{appointment.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Repetir Este Corte
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Mi Perfil</h2>
            
            <Card className="p-6">
              <div className="flex items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/api/placeholder/100/100" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">Juan Pérez</h3>
                    <p className="text-muted-foreground">juan.perez@email.com</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Cliente desde</p>
                      <p>Enero 2023</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total de citas</p>
                      <p>12 citas</p>
                    </div>
                  </div>
                  <Button variant="outline">Editar Perfil</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Preferencias</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Recordatorios por email</span>
                  <Badge>Activo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Recordatorios por SMS</span>
                  <Badge variant="secondary">Inactivo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Promociones especiales</span>
                  <Badge>Activo</Badge>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPanel;
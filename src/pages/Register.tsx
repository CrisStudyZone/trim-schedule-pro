import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, User, Mail, Phone, MapPin, Calendar, Camera, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const registerSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono debe tener al menos 10 dígitos"),
  birthDate: z.string().min(1, "Fecha de nacimiento requerida"),
  address: z.string().min(5, "Dirección debe tener al menos 5 caracteres"),
  preferences: z.string().optional(),
  userType: z.enum(["cliente", "profesional"], {
    required_error: "Selecciona un tipo de usuario",
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const [profileImage, setProfileImage] = useState<string>("");
  const [documents, setDocuments] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
      address: "",
      preferences: "",
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      toast({
        title: "Foto cargada",
        description: "Tu foto de perfil se ha cargado correctamente",
      });
    }
  };

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setDocuments(prev => [...prev, ...files]);
    toast({
      title: "Documentos cargados",
      description: `${files.length} documento(s) cargado(s) correctamente`,
    });
  };

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Datos del registro:", data);
    console.log("Foto de perfil:", profileImage);
    console.log("Documentos:", documents);
    
    toast({
      title: "Registro exitoso",
      description: "Tu cuenta ha sido creada correctamente",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Registro
          </h1>
          <p className="text-muted-foreground">
            Completa tu información para crear tu cuenta
          </p>
        </div>

        {/* Profile Image Upload */}
        <Card className="card-barberia">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Foto de Perfil
            </CardTitle>
            <CardDescription>
              Sube una foto para tu perfil profesional
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profileImage} />
              <AvatarFallback>
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="profile-upload"
              />
              <Button variant="outline" className="relative">
                <Upload className="h-4 w-4 mr-2" />
                Subir Foto
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card className="card-barberia">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
            <CardDescription>
              Completa todos los campos para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* User Type Selection */}
                <FormField
                  control={form.control}
                  name="userType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Usuario</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu tipo de usuario" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cliente">Cliente</SelectItem>
                          <SelectItem value="profesional">Profesional</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Nombre
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu apellido" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="+54 9 11 1234-5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Birth Date */}
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Fecha de Nacimiento
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Dirección
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Tu dirección completa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Preferences */}
                <FormField
                  control={form.control}
                  name="preferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferencias / Notas</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos sobre tus preferencias de corte, alergias o cualquier información relevante..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Esta información nos ayudará a brindarte un mejor servicio
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full btn-barberia">
                  Crear Cuenta
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Document Upload */}
        <Card className="card-barberia">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Documentos Adicionales
            </CardTitle>
            <CardDescription>
              Sube documentos adicionales si eres profesional (certificados, títulos, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleDocumentUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="documents-upload"
              />
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Subir Documentos
              </Button>
            </div>
            
            {documents.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Documentos cargados:</p>
                <ul className="space-y-1">
                  {documents.map((doc, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <FileText className="h-3 w-3" />
                      {doc.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Terms */}
        <Card className="card-barberia">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              Al crear tu cuenta, aceptas nuestros{" "}
              <span className="text-primary cursor-pointer hover:underline">
                Términos de Servicio
              </span>{" "}
              y{" "}
              <span className="text-primary cursor-pointer hover:underline">
                Política de Privacidad
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
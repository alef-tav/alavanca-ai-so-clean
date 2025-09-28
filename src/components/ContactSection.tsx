import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Pronto para Alavancar o seu Potencial?
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como a inteligência artificial pode 
            transformar seu negócio.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-border/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-poppins font-medium text-primary">
                    Nome Completo
                  </Label>
                  <Input 
                    id="name"
                    placeholder="Seu nome completo"
                    className="font-poppins"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins font-medium text-primary">
                    E-mail
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="font-poppins"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-poppins font-medium text-primary">
                    Telefone
                  </Label>
                  <Input 
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="font-poppins"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-poppins font-medium text-primary">
                    Empresa
                  </Label>
                  <Input 
                    id="company"
                    placeholder="Nome da sua empresa"
                    className="font-poppins"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="font-poppins font-medium text-primary">
                  Mensagem
                </Label>
                <Textarea 
                  id="message"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  className="font-poppins min-h-32"
                />
              </div>
              
              <Button size="lg" className="w-full font-poppins font-medium">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
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
        
        <div className="max-w-4xl mx-auto">
          <div className="w-full rounded-lg overflow-hidden border border-border/50 bg-card">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeTCMJjuRJqYtMCPB6GQa7j1dqXnegJreU7QldzgaJpfMLkvQ/viewform?embedded=true" 
              className="w-full h-[956px] border-0"
              title="Formulário de Contato"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e mensagem.",
        variant: "destructive",
      });
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const appsScriptURL =
      "https://script.google.com/macros/s/AKfycbw0lFYk5rAARm1I2-YEQOdbBze3SST6UYDFj2NqCoDoJyeMe5tOJ8l2OHzu7lr9ZZ11Rw/exec";

    const dadosParaPlanilha = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      empresa: empresa.trim(),
      mensagem: mensagem.trim(),
    };

    try {
      const resposta = await fetch(appsScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaPlanilha),
      });

      if (resposta.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Em breve entraremos em contato.",
        });

        // Limpar formulário
        setNome("");
        setEmail("");
        setTelefone("");
        setEmpresa("");
        setMensagem("");
      } else {
        throw new Error("Erro na resposta do servidor");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-poppins font-medium text-primary">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    className="font-poppins"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins font-medium text-primary">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="font-poppins"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
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
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-poppins font-medium text-primary">
                  Mensagem *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  className="font-poppins min-h-32"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-poppins font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
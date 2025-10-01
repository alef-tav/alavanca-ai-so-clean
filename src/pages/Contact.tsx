import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !email || !mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e mensagem.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw0lFYk5rAARm1I2-YEQOdbBze3SST6UYDFj2NqCoDoJyeMe5tOJ8l2OHzu7lr9ZZ11Rw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            email,
            telefone,
            empresa,
            mensagem,
          }),
        }
      );

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve!",
      });

      setNome("");
      setEmail("");
      setTelefone("");
      setEmpresa("");
      setMensagem("");
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
                Entre em Contato
              </h1>
              <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
                Pronto para transformar seu negócio com inteligência artificial? 
                Vamos conversar sobre como podemos ajudar você.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-primary mb-6">
                    Fale Conosco
                  </h2>
                  <p className="font-poppins text-foreground/80 text-lg leading-relaxed mb-8">
                    Estamos aqui para ajudar você a descobrir como a inteligência artificial 
                    pode revolucionar seu negócio. Entre em contato conosco e vamos criar 
                    algo extraordinário juntos.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-primary">E-mail</h3>
                      <p className="font-poppins text-foreground/80">contato@alavancaia.online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-primary">WhatsApp</h3>
                      <p className="font-poppins text-foreground/80">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-primary">Website</h3>
                      <p className="font-poppins text-foreground/80">alavancaia.online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-primary">Horário de Atendimento</h3>
                      <p className="font-poppins text-foreground/80">Segunda à Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="p-8 border-border/50">
                  <h3 className="font-poppins font-bold text-xl text-primary mb-6">
                    Envie sua Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-poppins font-medium text-primary">
                          Nome Completo
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
                          E-mail
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
                        Mensagem
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
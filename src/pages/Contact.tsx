import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Contact = () => {
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
                      <Label htmlFor="service" className="font-poppins font-medium text-primary">
                        Serviço de Interesse
                      </Label>
                      <Input 
                        id="service"
                        placeholder="Ex: Chatbot, Automação, Vídeos IA..."
                        className="font-poppins"
                      />
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: "🤖",
      title: "Chatbots Inteligentes",
      description: "Automatize o atendimento ao cliente com chatbots que compreendem contexto e oferecem respostas personalizadas 24/7.",
      features: ["Processamento de linguagem natural", "Integração com CRM", "Aprendizado contínuo", "Suporte multilíngue"]
    },
    {
      icon: "📊",
      title: "Análise Preditiva",
      description: "Antecipe tendências de mercado e comportamento do cliente com modelos de machine learning avançados.",
      features: ["Previsão de demanda", "Análise de churn", "Segmentação inteligente", "Otimização de preços"]
    },
    {
      icon: "⚙️",
      title: "Automação de Processos",
      description: "Otimize operações repetitivas e libere sua equipe para focar em atividades estratégicas de maior valor.",
      features: ["RPA com IA", "Workflows inteligentes", "Detecção de anomalias", "Automação de documentos"]
    },
    {
      icon: "👁️",
      title: "Visão Computacional",
      description: "Implemente sistemas de reconhecimento visual para controle de qualidade, segurança e análise de dados visuais.",
      features: ["Reconhecimento facial", "Detecção de objetos", "Análise de qualidade", "Monitoramento em tempo real"]
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      description: "Transforme dados brutos em insights acionáveis com dashboards inteligentes e relatórios automatizados.",
      features: ["Dashboards interativos", "Relatórios automáticos", "KPIs inteligentes", "Análise de ROI"]
    },
    {
      icon: "🎯",
      title: "Consultoria Estratégica",
      description: "Desenvolvemos roadmaps personalizados para implementação de IA alinhados aos objetivos do seu negócio.",
      features: ["Auditoria de processos", "Roadmap de IA", "Treinamento de equipes", "Suporte contínuo"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      {/* Hero Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-primary mb-6 leading-tight">
              Soluções Inteligentes para um Mercado Competitivo
            </h1>
            <p className="font-poppins text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Oferecemos um portfólio completo de serviços de IA para impulsionar 
              sua empresa ao próximo nível. Transforme desafios em oportunidades 
              com nossa expertise em inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-8 border-border/50 hover:shadow-xl transition-all hover:border-accent/30 hover:scale-105 duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl">{solution.icon}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
                    {solution.title}
                  </h3>
                  <p className="font-poppins text-foreground/80 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-poppins font-medium text-primary text-sm mb-3">
                      Recursos principais:
                    </h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="font-poppins text-foreground/70 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Nossa equipe está pronta para desenvolver a solução de IA perfeita 
              para suas necessidades específicas. Vamos conversar sobre como 
              podemos impulsionar seu crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                className="font-poppins font-semibold text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Consulta Gratuita
              </Button>
              <Button 
                onClick={() => navigate('/portfolio')}
                variant="outline"
                size="lg" 
                className="font-poppins font-semibold text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
              >
                Ver Nosso Portfólio
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
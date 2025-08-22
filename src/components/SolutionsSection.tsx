import { Card } from "@/components/ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: "🤖",
      title: "Chatbots Inteligentes",
      description: "Automatize o atendimento ao cliente com chatbots que compreendem contexto e oferecem respostas personalizadas 24/7."
    },
    {
      icon: "📊",
      title: "Análise Preditiva",
      description: "Antecipe tendências de mercado e comportamento do cliente com modelos de machine learning avançados."
    },
    {
      icon: "⚙️",
      title: "Automação de Processos",
      description: "Otimize operações repetitivas e libere sua equipe para focar em atividades estratégicas de maior valor."
    },
    {
      icon: "👁️",
      title: "Visão Computacional",
      description: "Implemente sistemas de reconhecimento visual para controle de qualidade, segurança e análise de dados visuais."
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      description: "Transforme dados brutos em insights acionáveis com dashboards inteligentes e relatórios automatizados."
    },
    {
      icon: "🎯",
      title: "Consultoria Estratégica",
      description: "Desenvolvemos roadmaps personalizados para implementação de IA alinhados aos objetivos do seu negócio."
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Soluções Inteligentes para um Mercado Competitivo
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de IA para impulsionar 
            sua empresa ao próximo nível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 border-border/50 hover:shadow-lg transition-all hover:border-accent/30">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{solution.icon}</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                {solution.title}
              </h3>
              <p className="font-poppins text-foreground/80 leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
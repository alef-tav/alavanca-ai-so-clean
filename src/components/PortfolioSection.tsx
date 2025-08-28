import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dashboardImage from "@/assets/dashboard-analytics.png";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Dashboards Personalizados",
      description: "Transforme dados em insights e gerencie vendas, clientes e suporte em painéis feitos sob medida para o seu negócio",
      image: dashboardImage,
      category: "Business Intelligence"
    },
    {
      title: "Chatbot AI Assistant", 
      description: "Assistente virtual inteligente com processamento de linguagem natural avançado",
      image: "/api/placeholder/400/300",
      category: "Chatbots"
    },
    {
      title: "Automação Industrial",
      description: "Sistema de visão computacional para controle de qualidade automatizado",
      image: "/api/placeholder/400/300", 
      category: "Automação"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Resultados que Falam por Si
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram 
            resultados extraordinários para nossos clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative overflow-hidden">
                {index === 0 ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl opacity-20">{index === 1 ? "🤖" : "🏭"}</div>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm font-poppins font-medium text-accent mb-2">
                  {item.category}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-foreground/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="font-poppins font-medium">
            Ver Todos os Vídeos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
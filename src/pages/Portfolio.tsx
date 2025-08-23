import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const portfolioVideos = [
    {
      id: 1,
      title: "Vídeo Institucional IA",
      category: "Institucional",
      description: "Vídeo corporativo criado com inteligência artificial para apresentação empresarial",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Vídeo de Vendas IA",
      category: "Vendas",
      description: "Pitch de vendas automatizado com apresentador virtual gerado por IA",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Influenciadora Virtual",
      category: "Marketing",
      description: "Conteúdo de marketing com influenciadora digital criada por IA",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Apresentação Corporativa",
      category: "Corporativo",
      description: "Vídeo de apresentação de resultados com narração em IA",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Tutorial Interativo",
      category: "Educacional", 
      description: "Vídeo educativo com assistente virtual inteligente",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Campanha Publicitária",
      category: "Publicidade",
      description: "Comercial criativo com personagens e cenários gerados por IA",
      thumbnail: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
                Portfólio de Vídeos IA
              </h1>
              <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
                Conheça alguns dos vídeos criados com inteligência artificial que desenvolvemos 
                para nossos clientes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {portfolioVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-xl bg-muted/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl opacity-20">🎬</div>
                    
                    {/* Hover overlay with gradient border effect */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <h3 className="font-poppins font-semibold text-white text-lg">
                          {video.title}
                        </h3>
                        <p className="font-poppins text-white/80 text-sm px-4">
                          {video.description}
                        </p>
                        <Button 
                          className="bg-primary hover:bg-primary/90 text-white border-2 border-transparent bg-gradient-to-r from-primary to-accent p-[2px] rounded-lg"
                        >
                          <span className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-md">
                            Ver Detalhes
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm font-poppins font-medium text-accent mb-2">
                      {video.category}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Detailed showcase section like in the third image */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex space-x-4 mb-6">
                    <div className="w-24 h-16 bg-black rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xs">📱</span>
                    </div>
                    <div className="w-32 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-600 text-sm">💻</span>
                    </div>
                    <div className="w-28 h-18 bg-black rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xs">📱</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="font-poppins font-bold text-3xl text-primary">
                  Vídeos Multi-dispositivo Responsivos
                </h2>
                <p className="font-poppins text-foreground/80 text-lg leading-relaxed">
                  Criamos vídeos com inteligência artificial otimizados para todos os dispositivos, 
                  garantindo a melhor experiência visual em smartphones, tablets e desktops.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {["IA Generativa", "Vídeo 4K", "Múltiplos Formatos", "Responsivo", "Automação"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-poppins font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="font-poppins text-foreground/80 leading-relaxed">
                  Nossos projetos envolvem a criação completa de conteúdo audiovisual utilizando 
                  as mais avançadas tecnologias de IA. O principal desafio é manter a qualidade 
                  cinematográfica enquanto automatizamos o processo criativo, resultando em 
                  vídeos profissionais e personalizados.
                </p>
                
                <Button size="lg" className="font-poppins font-medium">
                  Ver Demonstração
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
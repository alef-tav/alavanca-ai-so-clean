import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const Portfolio = () => {
  const featuredVideos = [
    {
      id: 1,
      title: "trafego pagod",
      author: "Fernando B Cerqueira",
      thumbnail: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "werkaj erje a",
      author: "Fernando B Cerqueira", 
      thumbnail: "/api/placeholder/600/400",
      featured: true
    }
  ];

  const portfolioVideos = [
    {
      id: 3,
      title: "trafego pagod",
      author: "Fernando B Cerqueira",
      category: "Institucional",
      thumbnail: "/api/placeholder/400/300",
      rating: 2
    },
    {
      id: 4,
      title: "werkaj erje a",
      author: "Fernando B Cerqueira",
      category: "Vendas",
      thumbnail: "/api/placeholder/400/300",
      rating: 2
    },
    {
      id: 5,
      title: "My Home",
      author: "Borges Midias",
      category: "Marketing",
      thumbnail: "/api/placeholder/400/300",
      rating: 2
    },
    {
      id: 6,
      title: "tiktok",
      author: "Fernando B Cerqueira",
      category: "Corporativo",
      thumbnail: "/api/placeholder/400/300",
      rating: 2
    },
    {
      id: 7,
      title: "Bartzen",
      author: "Fernando B Cerqueira",
      category: "Educacional",
      thumbnail: "/api/placeholder/400/300",
      rating: 2
    },
    {
      id: 8,
      title: "Video teste dois",
      author: "Fernando B Cerqueira",
      category: "Publicidade",
      thumbnail: "/api/placeholder/400/300",
      rating: 2
    }
  ];

  const recentVideos = [
    {
      id: 9,
      title: "teste2",
      author: "Marcelo Silva",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 10,
      title: "teste",
      author: "Marcelo Silva",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 11,
      title: "desenho",
      author: "Fernando B Cerqueira",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      id: 12,
      title: "dfad",
      author: "Fernando B Cerqueira",
      thumbnail: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-black font-poppins text-white">
      <Header />
      <main className="pt-16">
        {/* Featured Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-poppins font-bold text-3xl text-white">
                Em Destaque
              </h1>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white font-poppins font-medium flex items-center gap-2"
                size="lg"
              >
                <Upload className="w-5 h-5" />
                Upload de Vídeo
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center z-10">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="font-poppins font-semibold text-xl text-white mb-1">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-sm">
                        por {video.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Most Liked Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-poppins font-bold text-2xl text-white">
                Mais Curtidos
              </h2>
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white font-poppins"
              >
                Ver todos
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {portfolioVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center relative">
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-white text-sm">{video.rating}</span>
                    </div>
                    
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg">▶</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-poppins font-semibold text-white text-sm mb-1">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-xs">
                        {video.author}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs px-3 py-1 rounded border-2 border-transparent hover:border-purple-400 transition-all duration-300"
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Videos Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-poppins font-bold text-2xl text-white">
                Mais Recentes
              </h2>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white"
                  size="sm"
                >
                  ◀
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white"
                  size="sm"
                >
                  ▶
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {recentVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center relative">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-poppins font-medium text-white text-xs mb-1">
                        {video.title}
                      </h3>
                      <p className="font-poppins text-gray-300 text-xs">
                        {video.author}
                      </p>
                    </div>
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
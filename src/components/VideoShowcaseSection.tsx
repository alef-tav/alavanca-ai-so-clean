import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoShowcaseSection = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Side */}
              <div className="relative bg-muted/30 flex items-center justify-center min-h-[400px]">
                <div className="relative group cursor-pointer">
                  {/* Video Placeholder with Play Button */}
                  <div className="w-80 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-primary/20">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white font-poppins font-medium text-sm">
                        História do Seu Zé - IA vs Realidade
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary mb-6">
                  Não seja como o Seu Zé!
                </h2>
                
                <p className="font-poppins text-lg text-foreground/80 leading-relaxed mb-8">
                  Seu Zé precisou casar com oito mulheres para descobrir que, na verdade, 
                  estava se relacionando com uma inteligência artificial. Com a gente, você 
                  não perde tempo! Produza vídeos incríveis para sua empresa com a nossa IA 
                  e impressione de verdade.
                </p>

                <Button 
                  onClick={handleDemoClick}
                  size="lg" 
                  className="font-poppins font-semibold text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-fit"
                >
                  Ver Demonstração
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
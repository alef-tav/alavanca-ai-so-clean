import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const VideoShowcaseSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showcaseVideo, setShowcaseVideo] = useState(null);

  useEffect(() => {
    fetchShowcaseVideo();
  }, []);

  const fetchShowcaseVideo = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .eq('category', 'showcase')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw error;
      
      if (data && data.length > 0) {
        setShowcaseVideo(data[0]);
      }
    } catch (error) {
      console.error('Error fetching showcase video:', error);
    }
  };

  const handleDemoClick = () => {
    navigate('/portfolio');
  };

  const handlePlayVideo = () => {
    if (showcaseVideo) {
      // Lógica para reproduzir o vídeo pode ser implementada aqui
      console.log('Playing video:', showcaseVideo);
    }
  };

  const handleDeleteVideo = async (event) => {
    event.stopPropagation();
    
    if (!showcaseVideo) return;
    
    try {
      const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', showcaseVideo.id);

      if (error) throw error;

      setShowcaseVideo(null);
      
      toast({
        title: "Sucesso!",
        description: "Vídeo removido com sucesso!",
      });
    } catch (error) {
      console.error('Error deleting video:', error);
      toast({
        title: "Erro",
        description: "Erro ao remover vídeo. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Side */}
              <div className="relative bg-muted/30 flex items-center justify-center min-h-[400px]">
                <div className="relative group cursor-pointer" onClick={handlePlayVideo}>
                  {/* Botão de remoção transparente - só admins sabem que está aqui */}
                  {showcaseVideo && (
                    <button
                      onClick={handleDeleteVideo}
                      className="absolute top-2 right-2 z-10 w-6 h-6 bg-transparent hover:bg-transparent rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200"
                      title="Remover vídeo"
                    >
                      <X className="w-3 h-3 text-transparent" />
                    </button>
                  )}
                  
                  {showcaseVideo ? (
                    <>
                      {/* Video Thumbnail */}
                      <div className="w-80 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden border-2 border-primary/20">
                        {showcaseVideo.thumbnail_url ? (
                          <img 
                            src={showcaseVideo.thumbnail_url} 
                            alt={showcaseVideo.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <div className="text-4xl opacity-30">🎬</div>
                          </div>
                        )}
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Play className="w-6 h-6 text-primary-foreground ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Video Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-white font-poppins font-medium text-sm">
                            {showcaseVideo.title}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Default Video Placeholder */}
                      <div className="w-80 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-primary/20">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      {/* Default Video Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-white font-poppins font-medium text-sm">
                            História do Seu Zé - IA vs Realidade
                          </p>
                        </div>
                      </div>
                    </>
                  )}
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
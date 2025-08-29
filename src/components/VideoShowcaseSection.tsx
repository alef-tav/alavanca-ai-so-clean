import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import VideoModal from "@/components/VideoModal";

const VideoShowcaseSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showcaseVideo, setShowcaseVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
    setIsVideoModalOpen(true);
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
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Video Side - Takes up 3 columns */}
              <div className="lg:col-span-3 relative bg-muted/30 flex items-center justify-center min-h-[500px] p-8">
                <div className="relative group cursor-pointer w-full max-w-lg" onClick={handlePlayVideo}>
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
                      <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden border-2 border-primary/20 shadow-xl">
                        {showcaseVideo.thumbnail_url ? (
                          <img 
                            src={showcaseVideo.thumbnail_url} 
                            alt={showcaseVideo.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <div className="text-6xl opacity-30">🎬</div>
                          </div>
                        )}
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
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
                      <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border-2 border-primary/20 shadow-xl">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      {/* Default Video Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                          <p className="text-white font-poppins font-medium text-base">
                            Vídeo Demonstrativo - Móveis de Escritório
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Content Side - Takes up 2 columns */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-background">
                <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary mb-6 leading-tight">
                  Dê vida à sua marca com a Alavanca AI
                </h2>
                
                <p className="font-poppins text-lg text-foreground/80 leading-relaxed mb-8">
                  Cansado de comerciais genéricos? Mostre seus móveis de escritório de uma forma que realmente encanta e converte. Com a inteligência artificial, criamos vídeos dinâmicos, que destacam cada detalhe e design, conectando-se diretamente com o seu público-alvo. Deixe a IA contar a história da sua marca de forma única e impactante, transformando simples produtos em grandes desejos.
                </p>

                <p className="font-poppins text-xl font-semibold text-primary mb-8">
                  Pronto para transformar sua comunicação?
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

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        video={showcaseVideo ? {
          id: showcaseVideo.id,
          title: showcaseVideo.title,
          author: 'Alavanca AI',
          video_url: showcaseVideo.url || 'https://player.vimeo.com/video/1112165351?autoplay=1',
          thumbnail_url: showcaseVideo.thumbnail_url,
          description: showcaseVideo.description || 'Demonstração da criação de vídeos com IA para móveis de escritório'
        } : {
          id: 'demo',
          title: 'Vídeo Demonstrativo - Móveis de Escritório',
          author: 'Alavanca AI',
          video_url: 'https://player.vimeo.com/video/1112165351?autoplay=1',
          thumbnail_url: '/lovable-uploads/9a2654ff-36bc-47ed-a328-82782ae7fb33.png',
          description: 'Demonstração da criação de vídeos com IA para móveis de escritório'
        }}
      />
    </section>
  );
};

export default VideoShowcaseSection;
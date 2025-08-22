import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1112165351?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: '100vw',
              height: '100vh',
              transform: 'scale(1.1)', // Slight scale to avoid borders
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/60"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="text-primary-foreground">Transforme o seu negócio.</span>{" "}
            <span className="text-accent">Automatize</span>{" "}
            <span className="text-primary-foreground">com sofisticação.</span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            A Alavanca AI implementa soluções de inteligência artificial que 
            impulsionam o seu crescimento de forma elegante e eficiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-poppins font-medium text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-primary border-0">
              Agendar Consultoria Gratuita
            </Button>
            <Button variant="outline" size="lg" className="font-poppins font-medium text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Ver Nosso Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
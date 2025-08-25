import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsSection from "@/components/SolutionsSection";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
                Nossas Soluções
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubra como a Alavanca AI pode transformar seu negócio com soluções inovadoras de inteligência artificial.
              </p>
            </div>
            <SolutionsSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
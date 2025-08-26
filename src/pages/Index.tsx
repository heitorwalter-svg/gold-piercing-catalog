import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <div className="min-h-screen bg-background">
      <Header 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <main>
        <ProductGrid 
          products={products} 
          selectedCategory={selectedCategory} 
        />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-light tracking-[0.2em] text-foreground">
              TRINITY GOLD BRASIL
            </h3>
            <p className="text-sm text-muted-foreground tracking-wide max-w-md mx-auto">
              Especialistas em piercings de ouro 18k artesanais. 
              Qualidade premium para expressar sua individualidade.
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <span className="hover:text-accent cursor-pointer transition-colors">CONTATO</span>
              <span className="hover:text-accent cursor-pointer transition-colors">ENTREGA</span>
              <span className="hover:text-accent cursor-pointer transition-colors">CUIDADOS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

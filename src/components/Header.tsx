import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["Todos", "Brincos", "Piercings Nasais", "Piercings Labiais", "Piercings de Orelha"];

interface HeaderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Header = ({ selectedCategory, onCategoryChange }: HeaderProps) => {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <p className="text-xs text-muted-foreground text-center tracking-wide">
            ENTREGA GRATUITA PARA TODO O BRASIL • PEÇAS ARTESANAIS EM OURO 18K
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground tracking-wide">
            CONTATO
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-light tracking-[0.2em] text-foreground">
              TRINITY GOLD BRASIL
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="tracking-wide cursor-pointer hover:text-foreground transition-colors">
              CONTA
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => onCategoryChange(category)}
                className={`text-sm font-light tracking-wide hover:text-accent transition-colors px-4 py-2 ${
                  selectedCategory === category 
                    ? "text-accent border-b-2 border-accent" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
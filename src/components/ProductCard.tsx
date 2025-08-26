import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  material: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-border hover:border-accent/30 transition-all duration-300 bg-card">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted/20 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
            <div className="text-6xl text-gold/20">✦</div>
          </div>
        </div>
        
        <div className="p-6 space-y-3">
          <div className="space-y-2">
            <h3 className="font-light text-lg tracking-wide text-foreground group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground tracking-wide">
              {product.material}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <Badge 
                key={size} 
                variant="outline" 
                className="text-xs font-light bg-transparent border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {size}
              </Badge>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-xl font-light tracking-wide text-foreground">
              R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
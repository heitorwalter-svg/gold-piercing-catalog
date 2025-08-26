import ProductCard, { Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
}

const ProductGrid = ({ products, selectedCategory }: ProductGridProps) => {
  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm font-light tracking-[0.2em] text-muted-foreground text-center">
          {selectedCategory === "Todos" ? "TODOS OS PRODUTOS" : selectedCategory.toUpperCase()}
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mt-4"></div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground font-light tracking-wide">
            Nenhum produto encontrado nesta categoria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
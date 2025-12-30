import ProductCard from "../../components/cards/ProductCard";

interface ProductProps {
    data: any;
}

const Product: React.FC<ProductProps> = ({ data }) => {
    const products = data?.products || [];

    return (
        <section id="products" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    {data.subTitle && (
                        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                            {data.subTitle}
                        </h2>
                    )}
                    {data.title && (
                        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
                            {data.title}
                        </h3>
                    )}
                    {data.description && (
                        <p className="text-lg text-slate-600">
                            {data.description}
                        </p>
                    )}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product: any, index: number) => (
                        <ProductCard
                            key={product.id || index}
                            {...product}
                            variant={data.cardVariant}
                            hoverEffect={data.cardHoverEffect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;


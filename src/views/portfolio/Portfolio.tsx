import React from "react";
import PortfolioCard from "../../components/cards/PortfolioCard";

interface PortfolioProps {
    data: any;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    const portfolios = data?.portfolios || [];

    return (
        <section id="portfolio" className="section-padding bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-3">
                        {data.subTitle || "Our Work"}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
                        {data.title || "Crafting Digital Excellence"}
                    </h3>
                    <p className="text-lg text-slate-400">
                        {data.description || "Explore our latest projects where design meets functionality to create exceptional user experiences."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((item: any, index: number) => (
                        <PortfolioCard
                            key={item.id || index}
                            {...item}
                            variant={data.cardVariant}
                            hoverEffect={data.cardHoverEffect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

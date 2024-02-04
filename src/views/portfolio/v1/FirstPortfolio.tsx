import { useContext, useEffect, useState } from "react";
import PortfolioCard from "../../../components/cards/PortfolioCard";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Portfolio } from "../../../modal/Section";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import { ThemeContext } from "../../../themes/ThemeProvider";


export default function FirstPortfolio(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [portfolioData, setPortfolioData] = useState<any>({
        title: "",
        description: "",
        portfolios: [],
    });
    useEffect(() => {
        setPortfolioData(props.data);
    }, [props.data]);
    if (!portfolioData.portfolios) {
        return <SectionShimmer title={portfolioData.title}></SectionShimmer>;
    }

    return (
        <section className={`bg-${theme.colors.primary}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <TitleCover title={portfolioData.title} titleColor={`${textColor}`}
                        subtitle={portfolioData.subTitle} subtitleColor={`${textColor}`}></TitleCover>
                    <div className="mt-6 space-y-12 lg:space-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {portfolioData.portfolios.map((callout: Portfolio) => (
                            <PortfolioCard id={callout.name} name={callout.name} description={callout.description}
                                href={callout.href} imageSrc={callout.imageSrc}
                                imageAlt={callout.imageAlt}></PortfolioCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

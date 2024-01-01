import { useContext, useEffect, useState } from "react";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Package } from "../../../modal/Section";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor";
import { ThemeContext } from "../../../themes/ThemeProvider";
import PackageCard from "../components/PackageCard";
import SecondPackageCard from "../components/SecondPackageCard";
import React from "react";


export default function FirstPackage(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    const [packageData, setPackageData] = useState<any>({
        title: "",
        description: "",
        packages: [],
    });
    useEffect(() => {
        setPackageData(props.data);
    }, [props.data]);
    if (!packageData.packages) {
        return <SectionShimmer title={packageData.title}></SectionShimmer>;
    }

    return (
        <section className={`bg-${theme.colors.primary}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <TitleCover title={packageData.title} subtitle={packageData.subTitle} subtitleColor={`${textColor}`} titleColor={`${textColor}`}></TitleCover>
                    <div className="mt-6 space-y-12 lg:space-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {packageData.version === "v1" ? (
                            packageData.packages.map((callout: Package) => (
                                <React.Fragment key={callout.id}>
                                    <PackageCard
                                        id={callout.id}
                                        name={callout.name}
                                        description={callout.description}
                                        href={callout.href}
                                        imageSrc={callout.imageSrc}
                                        imageAlt={callout.imageAlt}
                                        price={callout.price}
                                        duration={callout.duration}
                                        destination={callout.destination}
                                    />
                                </React.Fragment>
                            ))
                        ) : (
                            // Render SecondPackageCard for other versions
                            packageData.packages.map((callout: Package) => (
                                <React.Fragment key={callout.id}>
                                    <SecondPackageCard
                                        id={callout.id}
                                        name={callout.name}
                                        description={callout.description}
                                        href={callout.href}
                                        imageSrc={callout.imageSrc}
                                        imageAlt={callout.imageAlt}
                                        price={callout.price}
                                        duration={callout.duration}
                                        destination={callout.destination}
                                    />
                                </React.Fragment>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

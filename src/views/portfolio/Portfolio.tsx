import React from "react";
import FirstPortfolio from "./v1/FirstPortfolio";

interface PortfolioProps {
    data: any;
    version: "v1";
}

const productComponents = {
    v1: FirstPortfolio,
};

const Portfolio: React.FC<PortfolioProps> = ({data, version}) => {
    const ProductComponent = productComponents[version];

    // return <ProductComponent data={data}/>;
    return <ProductComponent />;
};

export default Portfolio;

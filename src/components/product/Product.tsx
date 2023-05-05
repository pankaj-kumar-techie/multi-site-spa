import React from "react";
import FirstProductList from "./v1/FirstProductList";

interface ProductProps {
    data: any;
    version: "v1"| "v2" ;
}

const productComponents = {
    v1: FirstProductList,
    v2: FirstProductList,
};

const Product: React.FC<ProductProps> = ({data, version}) => {
    const ProductComponent = productComponents[version];

    return <ProductComponent data={data}/>;
};

export default Product;

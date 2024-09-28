import React from "react";
import FirstProductList from "./v1/FirstProductList";
import SecondProductList from "./v2/SecondProductList";
import ThirdProductList from "./v3/ThirdProductList";

interface ProductProps {
    data: any;
    version: "v1" | "v2" | "v3";
}

const productComponents = {
    v1: FirstProductList,
    v2: SecondProductList,
    v3: ThirdProductList
};

const Product: React.FC<ProductProps> = ({ data, version }) => {
    const ProductComponent = productComponents[version];

    return <ProductComponent data={data} />;
};

export default Product;

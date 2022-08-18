import React from "react";
import FirstProductList from "./v1/FirstProductList";


interface Product{
    childComp?: React.ReactNode;
}

const ParentComp: React.FC<Product> = (props) => {
    const {childComp} = props;
    return <div>{childComp}</div>;
};

export const Product = (props: any) => {
    // <ParentComp childComp={<FirstProductList data={props.data}></FirstProductList>}></ParentComp>
    <ParentComp childComp={<FirstProductList data={props.data}></FirstProductList>}></ParentComp>

}
export default Product;

import React, {useState} from "react";
import ShowProducts from "./Components/ShowProducts/ShowProducts";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import "./App.css";
const simpleProducts = [
    {
        id: "p1",
        title: "Cola",
        price: 2000,
    },
    {
        id: "p2",
        title: "Max+",
        price: 1500,
    },
    {
        id: "p3",
        title: "Vito",
        price: 1800,
    },
    {
        id: "p4",
        title: "Coke",
        price: 2500,
    },
    {
        id: "p5",
        title: "Sponsor",
        price: 600,
    },
    {
        id: "p6",
        title: "VeVe",
        price: 1000,
    },
    {
        id: "p7",
        title: "Spy",
        price: 3000,
    },
    {
        id: "p8",
        title: "Tea",
        price: 400,
    },
];
const App = () => {
    const [allProducts,setAllProducts] = useState(simpleProducts);
    const productHandler = getNewProduct => {
        setAllProducts((preventProducts) => {
            return[getNewProduct, ...preventProducts]
        });
    };
    return(
        <div>
            <div className="row">
                <div className ="col-1 border-right p-0">
                    <h1>First Part</h1>
                </div>
                <div className="col-2 border-right product_background_color">
                    <ShowProducts products ={allProducts} />
                </div>
               <CreateProduct 
               allProducts = {allProducts}
               productHandler = {productHandler}
                />
            </div>
        </div>
    );
}
export default App;
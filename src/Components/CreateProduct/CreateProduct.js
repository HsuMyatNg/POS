import ProductForm from "./ProductForm";
import "./CreateProduct.css";
const CreateProduct = (props) => {
      const saveNewProduct = (enterNewProduct) => {
        const addNewProduct = {
            ...enterNewProduct,
            id:`p${props.allProducts.length + 1}`,
        };
        props.productHandler(addNewProduct);
      };
    return(
        <div className="col-1"><ProductForm addProduct = {saveNewProduct} /></div>
    );
};
export default CreateProduct;
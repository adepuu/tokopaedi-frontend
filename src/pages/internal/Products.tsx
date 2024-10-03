import axios from "axios";
import {
  Field,
  Formik,
  Form,
  FormikHelpers,
} from "formik";
import * as Yup from "yup"
import { FC } from "react";
import {Product} from "../../types/product";

const InternalProducts: FC = () => {
  const initialValues: Product = {
    name: "",
    weight: 0,
    category: "",
    imageUrl: "",
    price: 0,
    id: "",
  }
  
  const handleAddProduct = async (values: Product, formikHelpers: FormikHelpers<Product>) => {
    console.log("Adding Product");
    console.log(values);
    
    const { status } = await axios.post("http://localhost:8081/products", values);
    if (status !== 201) {
      console.error("Failed to add product");
    }
    
    formikHelpers.resetForm();
    alert("Product added successfully");
    return;
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Product Name is required"),
    weight: Yup.number().required("Product Weight is required").min(1, "Product Weight must be greater than 0"),
    category: Yup.string().required("Product Category is required"),
    imageUrl: Yup.string().required("Product Image URL is required"),
    price: Yup.number().required("Product Price is required").min(1, "Product Price must be greater than 0"),
  });
  
  return (
    <div className="p-4 relative">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleAddProduct}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <div>
              <label className="font-bold" htmlFor="name">
                Product Name
              </label>
              <Field
                name="name"
                placeholder="Product Name"
                className="w-full p-2 border border-gray-500 rounded"
              />
              {touched && errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>
            <div>
              <label className="font-bold" htmlFor="weight">
                Product Weight
              </label>
              <Field
                name="weight"
                placeholder="Product Weight"
                className="w-full p-2 border border-gray-500 rounded"
                type="number"
              />
              {touched && errors.weight && <span className="text-xs text-red-500">{errors.weight}</span>}
            </div>
            <div>
              <label className="font-bold" htmlFor="category">
                Product Category
              </label>
              <Field
                name="category"
                placeholder="Product Category"
                className="w-full p-2 border border-gray-500 rounded"
              />
              {touched && errors.category && <span className="text-xs text-red-500">{errors.category}</span>}
            </div>
            <div>
              <label className="font-bold" htmlFor="imageUrl">
                Product Image URL
              </label>
              <Field
                name="imageUrl"
                placeholder="Product Image URL"
                className="w-full p-2 border border-gray-500 rounded"
              />
              {touched && errors.imageUrl && <span className="text-xs text-red-500">{errors.imageUrl}</span>}
            </div>
            <div>
              <label className="font-bold" htmlFor="price">
                Product Price
              </label>
              <Field
                name="price"
                placeholder="Product Price"
                className="w-full p-2 border border-gray-500 rounded"
                type="number"
              />
              {touched && errors.price && <span className="text-xs text-red-500">{errors.price}</span>}
            </div>
            <button className="py-2 w-full border border-black" type="submit">Save Product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InternalProducts;

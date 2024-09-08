import "./AddProduct.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    description: "",
    discount: 0,
    price: 0,
    image: "",
    catagory: "",
    color: "",
    more: "",
    rating: 0,
    company: "",
    sizes: [],
    additionalInfo: [
      {
        description: "",
        details: [
          {
            typeOfPacking: "",
            color: "",
            quantityPerCase: "",
          },
        ],
        PackagingDelivery: "",
        SuggestedUse: "",
        Ingredients: "",
        warnings: "",
      },
    ],
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/products", inputData).then((res) => {
      navigate("/shop");
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "price" || name === "discount" || name === "rating") {
      const isValidNumber = /^\d+(\.\d{1,2})?$/.test(value);
      if (isValidNumber) {
        setInputData({ ...inputData, [name]: parseFloat(value) });
      } else {
        console.error("Invalid input value");
      }
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };

  const handleSizeChange = (event, index) => {
    const { value } = event.target;
    const sizes = [...inputData.sizes];
    sizes[index] = value;
    setInputData({ ...inputData, sizes });
  };
  let originalPrice;
  if (
    !isNaN(parseFloat(inputData.price)) &&
    !isNaN(parseFloat(inputData.discount))
  ) {
    originalPrice =
      parseFloat(inputData.price) -
      (parseFloat(inputData.price) * parseFloat(inputData.discount)) / 100;
  } else {
    originalPrice = 0;
  }
  const handleAdditionalInfoChange = (event, index, subIndex) => {
    const { name, value } = event.target;
    const additionalInfo = [...inputData.additionalInfo];
    if (name === "description") {
      additionalInfo[index].description = value;
    } else if (
      name === "typeOfPacking" ||
      name === "color" ||
      name === "quantityPerCase"
    ) {
      additionalInfo[index].details[subIndex][name] = value;
    } else {
      additionalInfo[index][name] = value;
    }
    setInputData({ ...inputData, additionalInfo });
  };

  const addSize = () => {
    setInputData({
      ...inputData,
      sizes: [...inputData.sizes, ""],
    });
  };

  const addAdditionalInfo = () => {
    setInputData({
      ...inputData,
      additionalInfo: [
        ...inputData.additionalInfo,
        {
          description: "",
          details: [
            {
              typeOfPacking: "",
              color: "",
              quantityPerCase: "",
            },
          ],
          PackagingDelivery: "",
          SuggestedUse: "",
          Ingredients: "",
          warnings: "",
        },
      ],
    });
  };

  return (
  
  );
};

export default AddProduct;

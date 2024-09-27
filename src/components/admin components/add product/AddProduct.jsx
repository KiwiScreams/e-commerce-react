import "./AddProduct.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const AddProduct = () => {
  const [inputData, setInputData] = useState({
    id: uuidv4(),
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
    sizes: [{ value: "", unit: "" }],

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
  const categories = [
    { value: "milk&dairies", label: "Milks & Dairies" },
    { value: "wines&alcohol", label: "Wines & Alcohol" },
    { value: "clothing&beauty", label: "Clothing & Beauty" },
    { value: "pet", label: "Pet Foods & Toy" },
    { value: "fastfood", label: "Packaged fast food" },
    { value: "bakingmaterial", label: "Baking material" },
    { value: "vegetables&tubers", label: "Vegetables & tubers" },
    { value: "freshseafood", label: "Fresh Seafood" }
  ];
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
      const isValidNumber = /^\d+(\.\d+)?$/.test(value);
      if (isValidNumber) {
        const trimmedValue = value.replace(/^0/, "");
        if (name === "rating") {
          const ratingValue = parseFloat(trimmedValue);
          if (ratingValue < 0 || ratingValue > 5) {
            console.error("Rating must be between 0 and 5");
            return;
          }
        }
        setInputData({ ...inputData, [name]: parseFloat(trimmedValue) });
      } else {
        console.error("Invalid input value");
      }
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };

  const handleSizeChange = (event, index) => {
    const { name, value } = event.target;
    const sizes = [...inputData.sizes];
    if (name === "value") {
      sizes[index].value = parseFloat(value);
    } else if (name === "unit") {
      sizes[index].unit = value;
    }
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
      sizes: [...inputData.sizes, { value: "", unit: "" }],
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
    <section className="add-product-section">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={inputData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={inputData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="discount">Discount:</label>
          <input
            type="number"
            name="discount"
            step="0.01"
            placeholder="Enter product discount"
            value={inputData.discount}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            step={0.01}
            name="price"
            placeholder="Enter product price"
            value={inputData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            placeholder="Enter product image URL"
            value={inputData.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            value={inputData.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            placeholder="Enter product color"
            value={inputData.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="more">More:</label>
          <input
            type="text"
            name="more"
            placeholder="Enter more information"
            value={inputData.more}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            placeholder="Enter product rating"
            value={inputData.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            placeholder="Enter product company"
            value={inputData.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Sizes:</label>
          {inputData.sizes.map((size, index) => (
            <div key={index}>
              <input
                type="number"
                value={size.value}
                onChange={(event) => handleSizeChange(event, index)}
                name="value"
              />
              <select
                name="unit"
                value={size.unit}
                onChange={(event) => handleSizeChange(event, index)}
              >
                <option value="">Select unit</option>
                <option value="ml">ml</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="oz">oz</option>
                <option value="lb">lb</option>
              </select>
              <span>
                {size.value} {size.unit}
              </span>
            </div>
          ))}
          <button type="button" onClick={addSize}>
            Add Size
          </button>
        </div>
        <div className="input-container">
          <label>Additional Info:</label>
          {inputData.additionalInfo.map((info, index) => (
            <div key={index}>
              <label>Description:</label>
              <input
                type="text"
                value={info.description}
                onChange={(event) => handleAdditionalInfoChange(event, index)}
                name="description"
              />
              <label>Details:</label>
              {info.details.map((detail, subIndex) => (
                <div key={subIndex}>
                  <label>Type of Packing:</label>
                  <input
                    type="text"
                    value={detail.typeOfPacking}
                    onChange={(event) =>
                      handleAdditionalInfoChange(event, index, subIndex)
                    }
                    name="typeOfPacking"
                  />
                  <label>Color:</label>
                  <input
                    type="text"
                    value={detail.color}
                    onChange={(event) =>
                      handleAdditionalInfoChange(event, index, subIndex)
                    }
                    name="color"
                  />
                  <label>Quantity Per Case:</label>
                  <input
                    type="text"
                    value={detail.quantityPerCase}
                    onChange={(event) =>
                      handleAdditionalInfoChange(event, index, subIndex)
                    }
                    name="quantityPerCase"
                  />
                </div>
              ))}
              <label>Packaging Delivery:</label>
              <input
                type="text"
                value={info.PackagingDelivery}
                onChange={(event) => handleAdditionalInfoChange(event, index)}
                name="PackagingDelivery"
              />
              <label>Suggested Use:</label>
              <input
                type="text"
                value={info.SuggestedUse}
                onChange={(event) => handleAdditionalInfoChange(event, index)}
                name="SuggestedUse"
              />
              <label>Ingredients:</label>
              <input
                type="text"
                value={info.Ingredients}
                onChange={(event) => handleAdditionalInfoChange(event, index)}
                name="Ingredients"
              />
              <label>Warnings:</label>
              <input
                type="text"
                value={info.warnings}
                onChange={(event) => handleAdditionalInfoChange(event, index)}
                name="warnings"
              />
            </div>
          ))}
          <button type="button" onClick={addAdditionalInfo}>
            Add Additional Info
          </button>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddProduct;

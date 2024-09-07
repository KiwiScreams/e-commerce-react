import "./RelatedProducts.css";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <section className="related">
      <h2>Related Products</h2>
      <div className="related-products">
        {relatedProducts && relatedProducts.length > 0 ? (
          relatedProducts.map((product, index) => (
            <div key={product.id} className="related-product">
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <h1>{product.id}</h1>
            </div>
          ))
        ) : (
          <p>No similar products found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;

import Detail from "../../components/detail/Detail";
import RelatedProducts from "../../components/related products/RelatedProducts";
import SideBar from "../../components/side bar/SideBar";
import "./DetailContainer.css";
import { useState, useEffect } from "react";
const DetailContainer = () => {
    
  return (
    <>
      <section className="detail-container-section">
        <div>
          <Detail />
          <RelatedProducts />
        </div>
        <SideBar />
      </section>
    </>
  );
};

export default DetailContainer;

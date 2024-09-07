import Detail from "../../components/detail/Detail";
import SideBar from "../../components/side bar/SideBar";
import "./DetailContainer.css";
const DetailContainer = () => {
  return (
    <>
      <section className="detail-container-section">
        <Detail />
        <SideBar />
      </section>
    </>
  );
};

export default DetailContainer;

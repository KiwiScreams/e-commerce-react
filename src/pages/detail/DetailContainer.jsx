import Detail from "../../components/detail/Detail";
import SideBar from "../../components/side bar/SideBar";
import SubscribePanel from "../../components/subscribe panel/SubscribePanel";
import "./DetailContainer.css";
const DetailContainer = () => {
  return (
    <>
      <section className="detail-container-section">
        <div>
          <Detail />
        </div>
        <SideBar />
      </section>
      <SubscribePanel />
    </>
  );
};

export default DetailContainer;

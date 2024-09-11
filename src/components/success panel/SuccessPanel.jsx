import "./SuccessPanel.css";
const SuccessPanel = ({ email }) => {
  return (
    <>
      <div className="success-panel">
        <div className="success-message">
          <h2>Thank you for subscribing!</h2>
          <p>We'll send updates to {email}.</p>
        </div>
      </div>
    </>
  );
};

export default SuccessPanel;

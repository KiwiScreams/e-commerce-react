import "./SuccessPanel.css";
const SuccessPanel = ({ email }) => {
  return (
    <>
      <div className="success-panel">
        <h2>Success!</h2>
        <p>
          Your email is: <span>{email}</span>
        </p>
      </div>
    </>
  );
};

export default SuccessPanel;

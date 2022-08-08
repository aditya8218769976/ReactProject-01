import "./ErrorModal.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.removeErrorHandler} />
      <Card className="modal-style">
        <header className="header-style">
          <h2>{props.title}</h2>
        </header>
        <div className="content-style">
          <p>{props.message}</p>
        </div>
        <footer className="footer-actions-style">
          <Button onClick={props.removeErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

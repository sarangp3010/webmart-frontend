import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const center: Record<string, string> = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  };

  return (
    <div style={center}>
      <h1 className="text-success"> Order Successfully Placed!!!</h1>
      <button className="btn btn-primary" onClick={() => navigate("/home")}>Home</button>
    </div>
  );
};

export default PageNotFound;

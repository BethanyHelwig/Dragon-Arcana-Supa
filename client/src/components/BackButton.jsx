import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // fallback route
    }
  };

  return (
    <button onClick={handleBack} className="back-btn">
      ← Back
    </button>
  );
}
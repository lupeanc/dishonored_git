import { useEffect } from "react";
import ImagePreview from "../components/ImagePreview";
import "./SilliesPage.css";

const SilliesPage = () => {
  useEffect(() => {
    fetch("https://localhost:7018/Silly")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  return (
    <>
      <div className="main-div-sillies-page">
        <div className="sillies-page-container">
          <h2 className="title-sillies">SILLIES</h2>
          <div className="sillies-container">
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
            <div>
              <ImagePreview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SilliesPage;

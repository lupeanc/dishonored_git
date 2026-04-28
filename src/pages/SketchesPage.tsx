import { useEffect } from "react";
import ImagePreview from "../components/ImagePreview";
import "./SketchesPage.css";

const SketchesPage = () => {
  useEffect(() => {
    fetch("https://localhost:7018/Sketch")
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
      <div className="main-div-sketches-page">
        <div className="sketches-page-container">
          <h2 className="title-sketches">SKETCHES</h2>
          <div className="sketches-container">
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

export default SketchesPage;

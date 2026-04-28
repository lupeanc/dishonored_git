import { useEffect } from "react";
import NewestPage from "../components/NewestPage";
import NewestSilliesSketch from "../components/NewestSilliesSketch";
import "./HomePage.css";
// import REACT_APP_API_URL from "../../.env";

const HomePage = () => {
  useEffect(() => {
    fetch("https://localhost:7018/ChapterPage")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        },
      );
    // const fetchJobs = async () => {
    //   try {
    //     const res = await fetch("https://localhost:7018/ChapterPage");
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchJobs();
  }, []);
  return (
    <>
      <div className="main-div-home-page">
        <div className="home-page-container">
          <NewestPage />

          <div className="silly-sketch-div">
            <NewestSilliesSketch divType={"silly"} />
            <NewestSilliesSketch divType={"sketch"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import "./CharacterIndexPage.css";
import { useEffect, useState } from "react";

const CharacterIndexPage = ({ isAdmin }) => {
  // const characters: Array<CharacterType> = [
  //   {
  //     name: "Knightu ba",
  //     nickname: "Knightu ba",
  //     age: 28,
  //     job: "..knight gen",
  //     image: "../assets/hero.png",
  //   },
  //   {
  //     name: "Knightu ba",
  //     nickname: "Knightu ba",
  //     age: 28,
  //     job: "..knight gen",
  //     image: "../assets/hero.png",
  //   },
  //   {
  //     name: "Knightu ba",
  //     nickname: "Knightu ba",
  //     age: 28,
  //     job: "..knight gen",
  //     image: "../assets/hero.png",
  //   },
  //   {
  //     name: "Knightu ba",
  //     nickname: "Knightu ba",
  //     age: 28,
  //     job: "..knight gen",
  //     image: "../assets/hero.png",
  //   },
  // ];
  // var characters = Array<CharacterType>();

  // const [characters, setCharacters] = useState([]);
  const [charactersOfPage, setCharactersOfPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesTotal, setPagesTotal] = useState(0);

  // get number of pages
  useEffect(() => {
    fetch(`https://localhost:7018/Character/GetPagesNumber`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPagesTotal(result.pagesTotal);
          console.log(result);
          // pagesTotal = result;
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  // get number of results per page
  useEffect(() => {
    fetch(`https://localhost:7018/Character/page/${currentPage}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.length > 0) {
            setCharactersOfPage(result);
          }
          // console.log(characters);
        },
        (error) => {
          console.log(error);
        },
      );
  }, [currentPage]);

  return (
    <>
      <div className="main-div-character-index ">
        <div className="edit-div">
          {isAdmin ? (
            <Link
              to="/character-index-table"
              className="edit-button-character-index-admin"
            >
              Edit
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="characters-container">
          {charactersOfPage.map((character) => (
            <CharacterCard character={character} />
          ))}
        </div>
      </div>
      <div className="pagination-nav-container">
        <div className="pagination-nav-buttons-container">
          <button
            className="pagination-nav-button"
            onClick={() => {
              setCurrentPage((page) => page - 1);
            }}
            disabled={currentPage == 1}
          >
            Previous
          </button>

          <div className="pagination-nav-outof">
            {currentPage} of {pagesTotal}
          </div>

          <button
            className="pagination-nav-button"
            onClick={() => {
              setCurrentPage((page) => page + 1);
            }}
            disabled={currentPage >= pagesTotal}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default CharacterIndexPage;

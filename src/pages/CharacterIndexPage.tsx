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

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7018/Character")
      .then((res) => res.json())
      .then(
        (result) => {
          // setCharacters(result.Name);
          setCharacters(result);
          // console.log(characters);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  // const characters = characterList;

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
          {characters.map((character) => (
            <CharacterCard character={character} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CharacterIndexPage;

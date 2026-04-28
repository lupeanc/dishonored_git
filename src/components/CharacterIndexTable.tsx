import type { CharacterType } from "../types/CharacterType";
import "./CharacterIndexTable.css";
import React, { useEffect, useState } from "react";

const CharacterIndexTable = () => {
  // const characters: Array<CharacterType> = [
  //   {
  //     name: "Knightu ba",
  //     nickname: "Knightu ba",
  //     age: 28,
  //     job: "..knight gen",
  //     image: "../assets/hero.png",
  //   },
  // ];

  const [characters, setCharacters] = useState<CharacterType[]>([]);

  useEffect(() => {
    fetch("https://localhost:7018/Character")
      .then((res) => res.json())
      .then(
        (result) => {
          setCharacters(result);
          // console.log(result);
          // console.log(characters);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  // console.log(characters);

  const [error, setError] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [imagePath, setImagePath] = useState("");

  const updateCharacter = (name: string, updatedCharacter: CharacterType) => {
    // console.log(JSON.stringify({ updatedCharacter }));
    fetch(`https://localhost:7018/Character/UpdateCharacter/${name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updatedCharacter,
      }),
    });
  };

  const addCharacter = (newCharacter: CharacterType) => {
    fetch(`https://localhost:7018/Character/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newCharacter,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(age) <= 0 || Number(age) > 100) {
      setError("Age must be greater than 0, and smaller than 100 (cmon bro.)");
      return;
    }

    setError("");

    const newCharacter: CharacterType = {
      name: name,
      nickname: nickname,
      age: Number(age),
      job: job,
      imagePath: imagePath,
    };

    // if in edit mode: ... if not => add
    // this way i can also check the inputs from the edits.
    if (editIndex !== null) {
      const updatedCharacterName = characters[editIndex].name;

      const updated = [...characters];
      updated[editIndex] = newCharacter;

      const updatedCharacter = updated[editIndex];
      updateCharacter(updatedCharacterName, updatedCharacter);
      setCharacters(updated);
      setEditIndex(null);
    } else {
      addCharacter(newCharacter);
      setCharacters([...characters, newCharacter]);
    }

    // clear form
    setName("");
    setNickname("");
    setAge("");
    setJob("");
    setImagePath("");
  };

  const removeCharacter = (name: string) => {
    fetch(`https://localhost:7018/Character/DeleteCharacter/${name}`, {
      method: "DELETE",
    });
  };

  const handleRemove = (index: number) => {
    const updated = characters.filter((_, i) => i !== index);
    setCharacters(updated);
    const removedCharacterName = characters[index].name;
    // console.log(removedCharacterName);
    removeCharacter(removedCharacterName);
  };

  const handleEdit = (index: number) => {
    const character = characters[index];
    // const updatedCharacterName = character.name;

    setName(character.name);
    setNickname(character.nickname);
    setAge(String(character.age));
    setJob(character.job);
    setImagePath(character.imagePath);

    // const updatedCharacter = characters[index];

    // updateCharacter(updatedCharacterName, updatedCharacter);

    setEditIndex(index);
  };

  return (
    <>
      {/* if error has value, show */}
      <div className="character-index-table-container">
        {error && <p style={{ color: "red", fontSize: "15px" }}>{error}</p>}
        <div className="form-div">
          <form onSubmit={handleAdd}>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Nickname"
              className="form-field"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />

            <input
              type="number"
              placeholder="Enter Age"
              className="form-field"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Job"
              className="form-field"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Image Path"
              className="form-field"
              value={imagePath}
              onChange={(e) => setImagePath(e.target.value)}
            />
            <button
              type="submit"
              className="action-button"
              disabled={!name || !age || !job || !imagePath}
            >
              Add
            </button>
          </form>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Nickname</th>
              <th>Age</th>
              <th>Job</th>
              <th>Image Link</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {characters.map((character, index) => (
              <tr key={index}>
                <td>{character.name}</td>
                <td>{character.nickname}</td>
                <td>{character.age}</td>
                <td>{character.job}</td>
                <td>{character.imagePath}</td>
                <td>
                  <button
                    className="action-button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="action-button"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CharacterIndexTable;

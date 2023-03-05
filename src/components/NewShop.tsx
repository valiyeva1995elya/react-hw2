import React, { useState } from "react";
import { IStor } from "../type";
import { FC } from "react";

interface IShops {
  arrStors: IStor[];
  create: (newShop:object) => void;
}

const NewShops: FC<IShops> = ({ create }) => {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [distance, setDistance] = useState("");
  const [special, setSpecial] = useState(Boolean);
  const addNewShop = (e:any) => {
    let newShop = {
      id: Date.now(),
      name,
      start,
      finish,
      distance,
      special,
    };
    create(newShop);
    setName("");
    setStart("");
    setFinish("");
    setDistance("");
    setSpecial(false)

    console.log(newShop);

    e.preventDefault();
  };

  return (
    <form className="block-NewShop">
      <h1>Добавить новый магазин:</h1>
      <input
        type="text"
        placeholder="Название магазина"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="time"
        placeholder="Начало работы"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="time"
        placeholder="Окончание работы"
        value={finish}
        onChange={(e) => setFinish(e.target.value)}
      />
      <input
        type="number"
        placeholder="Удаленность от центра"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <label htmlFor="">Важность для поставщика</label>
      <input type="checkbox" onChange={() => setSpecial(!special)} />
      <button onClick={addNewShop}>Добавить</button>
    </form>
  );
};

export default NewShops;

import { useState } from "react";
import { PersonType } from "./PersonInfo";

type AddPersonFormType = { onAddPerson: (newPerson: PersonType) => void, usedTel: Array<number> };

export const AddPersonForm = ({ onAddPerson, usedTel }: AddPersonFormType) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPerson({ name, tel: +tel, city });
      }}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Imię"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          name="tel"
          placeholder="Telefon"
          onChange={(e) => {
            if (e.target.value)
            setTel(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          placeholder="Miasto"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      {usedTel.includes(+tel) ?<p>Numer telefonu musi być unikalny</p>: ''}
      {!(tel.toString().length > 8) ? <p>Numer telefonu nie może być krótszy niż 9 cyfr</p>: ''}
      {!(name.length > 2) ? <p>Imię musi być dłuższe niż 3 litery</p> : ''}
      <button disabled={!(name.length > 2 && tel.toString().length > 8) || usedTel.includes(+tel)}>
        Wyślij
      </button>
    </form>
  );
};
crypto.randomUUID()
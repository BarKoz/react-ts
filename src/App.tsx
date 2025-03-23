import { useState } from "react";
import { AddPersonForm } from "./components/AddPersonForm";
import { PersonInfo, PersonType } from "./components/PersonInfo";

const initialPersons: Array<PersonType> = [
  {
    name: "Filip",
    tel: 123123123,
    city: "warszawa",
  },
  {
    name: "Bartek",
    tel: 321321321,
    city: "katowice",
  },
  {
    name: "kacper",
    tel: 231231231,
  },
];

function App() {
  const [isAddPersonFormShow, setIsAddPersonFormShow] = useState(false);
  const [personList, setPersonList] = useState(initialPersons);

  const handleAddPersonFormShow = () =>
    setIsAddPersonFormShow(true);

  const addPerson = (newPerson: PersonType) => {
    setPersonList([...personList, newPerson]);
    setIsAddPersonFormShow(false);
  };

  const deletePerson = ({ name, tel, city }: PersonType) => {
    setPersonList(personList.filter((el) => el.name !== name && el.tel !== tel && el.city !== city));
  };

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isAddPersonFormShow ? (
        <AddPersonForm onAddPerson={addPerson} usedTel={personList.map(({tel}) => tel)} />
      ) : (
        <button onClick={handleAddPersonFormShow}>Dodaj</button>
      )}

      {personList.map((person) => (
        <PersonInfo person={person} key={person.tel} onDeletePerson={deletePerson} />
      ))}
    </>
  );
}

export default App;

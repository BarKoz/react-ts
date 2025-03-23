import { useState } from "react";
import { Tel } from "./Tel.tsx";

// componenty zaczynamy ZAWSZE z dużej litery i umieszczamy w nowym folderze
// fragmentem nazywamy pusty tag
// zwrotką z każdego komponentu musi być pojedyńczy nadrzędny tag

// useState odświerza komponent przy zmianie stanu
// isExpanded po wywołaniu setIsExpanded z odpowiednią wartością

export type PersonType = { name: string; tel: number; city?: string };
type PersonInfoPropsType = { person: PersonType, onDeletePerson: (personToDelete: PersonType) => void };

export const PersonInfo = ({ person, onDeletePerson }: PersonInfoPropsType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandButton = (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? "Schowaj" : "Pokaż"}
    </button>
  );

  const deleteButton = (
    <button onClick={() => onDeletePerson(person)}>Usuń</button>
  );

  return (
    <>
      <h1>{person.name}</h1>
      {expandButton}
      {isExpanded && (
        <>
          <h2>
            <Tel tel={person.tel} />
          </h2>
          {person.city && <h3>miasto: {person.city}</h3>}
          {deleteButton}
        </>
      )}
    </>
  );
};

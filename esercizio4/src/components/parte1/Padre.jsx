import Figlio from "./Figlio";

export default function Padre() {
  const lista = ["Laurence", "Mike", "John", "Larry", "Kim","Joanne","Lisa","Janet","Jane"];

  return (
    <>
        <h2>Esercizio 1</h2>
      <Figlio listaAmici={lista} />
    </>
  );
}

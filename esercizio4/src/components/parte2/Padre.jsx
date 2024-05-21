import Figlio1 from "./Figlio1";
import Figlio2 from "./Figlio2";



export default function Padre() {

    const functionCalledInFiglio1 = (value) => {
        alert("Valore:" + value )
    }

  return (
    <>
        <h2>Esercizio 2</h2>
      <Figlio1 callBacFunctionFiglio1={functionCalledInFiglio1} />
      <Figlio2 callBacFunctionFiglio1={functionCalledInFiglio1} />
    </>
  );
}

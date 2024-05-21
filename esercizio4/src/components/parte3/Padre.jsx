import Figlio1 from './Figlio1';
import {useState} from 'react';

export default function Padre() {
  const lista = [
    {name: "Davide", count: 5},
    {name: "Luca", count: 2},
    {name: "Piero", count: 1}
  ];

  const[friends, setFriends] = useState(lista);

  const[inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddFriend = () =>{
    //alert(inputValue);
    lista.forEach();
  }

  return (
    <>
        <h3>Esercizio 3</h3>
        {friends.map((friend, index)=> (<p>{index+1}. {friend.name} {friend.count}</p>))}
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Aggiungi amico"/>
        <button onClick={handleAddFriend}>Add Friend</button>
    </>
  );
}

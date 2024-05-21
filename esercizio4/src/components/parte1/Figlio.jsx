export default function Figlio(props){

    return(<>
        
        <ul>My friends list
        {props.listaAmici.map((element, index)=>(
            
            <li className="list-group-item">{element} {index+1}</li>
        )) }
        </ul>
        

        </>
    )

}
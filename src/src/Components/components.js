import './style.scss'


export default function Components(props){
    return(
        <div className='quadro'>
            <img src={props.src} alt={props.titulo}></img>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
        </div>
    )
}


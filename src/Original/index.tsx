import './style.css'
import { useEffect, useState } from 'react'

interface Personaje {
    id: number
    name: string
    image: string
    species: string
    status: string
}

function Original() {

    const [personaje, setPersonaje] = useState<Personaje | null>(null)

    const cargarPersonaje = async () => {

        const id = Math.floor(Math.random() * 826) + 1
        const res =await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json()
        setPersonaje(data)
    }
    useEffect(() => {cargarPersonaje()}, [])

    return (
        <div className="original">
            <h2>Personaje Aleatorio</h2>
            {personaje &&
                <>
                    <img src={personaje.image}/>
                    <h3>{personaje.name}</h3>
                    <p>Especie: {personaje.species}</p>
                    <p>Estado: {personaje.status}</p>
                </>
            }
            <button onClick={cargarPersonaje}>
                Cambiar personaje
            </button>
        </div>
    )
}

export default Original
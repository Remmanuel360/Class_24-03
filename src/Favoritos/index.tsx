import { useState, useEffect } from 'react'
import './style.css'

interface Personajes {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image: string
}

function Favoritos() {

    const [favoritos, setFavoritos] = useState<Personajes[]>([])

    useEffect(() => {

        setFavoritos(
            JSON.parse(
                localStorage.getItem('favoritos') || '[]'
            )
        )

    }, [])
    return (
        <>
            <h2>Favoritos</h2>
            {
                favoritos.length === 0
                    ? <p>No tienes favoritos</p>
                    : <div className="lista-favoritos">
                        {favoritos.map(p =>
                            <div
                                key={p.id}
                                className="tarjeta-favorito"
                            ><img src={p.image} />
                                <p>{p.name}</p>
                            </div>
                        )}
                    </div>
            }
        </>
    )

}

export default Favoritos
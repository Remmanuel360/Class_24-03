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

function Home() {

  const [personajes, setPersonajes] = useState<Personajes[]>([])
  const [favoritos, setFavoritos] = useState<Personajes[]>([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {

    fetch('https://rickandmortyapi.com/api/character')
      .then(r => r.json())
      .then(data => setPersonajes(data.results))

    setFavoritos(
      JSON.parse(
        localStorage.getItem('favoritos') || '[]'
      )
    )

  }, [])

  const toggleFavorito = (personaje: Personajes) => {

    const existe =
      favoritos.some(
        f => f.id === personaje.id
      )

    const nuevos =
      existe
        ? favoritos.filter(f => f.id !== personaje.id)
        : [...favoritos, personaje]

    setFavoritos(nuevos)

    localStorage.setItem(
      'favoritos',
      JSON.stringify(nuevos)
    )

  }

  const personajesFiltrados =
    personajes.filter(p =>
      busqueda.length < 3
        ? true
        : p.name.toLowerCase().includes(busqueda.toLowerCase())
    )

  return (
    <>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}/>
      <div className="tabla-container">
        <h2>Personajes de Rick and Morty</h2>
        <table className="tabla-personajes">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Estado</th>
              <th>Género</th>
              <th>⭐</th>
            </tr>
          </thead>
          <tbody>
            {personajesFiltrados.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <img src={p.image} width="50" />
                </td>
                <td>{p.name}</td>
                <td>{p.species}</td>
                <td>{p.status}</td>
                <td>{p.gender}</td>
                <td>
                  <button
                    type="button"
                    className={favoritos.some(f => f.id === p.id) ? 'favorito-activo' : 'favorito'}
                    onClick={() => toggleFavorito(p)}
                  >★</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default Home
import { useState, useEffect } from 'react'

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
  const [title, setTitle] = useState('')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`)
        const data = await res.json()

        setPersonajes(data.results)
        setTitle("Personajes de Rick and Morty")
      } catch (error) { 
        console.error('Error cargando datos:', error)
      }
    }

    fetchData()
  }, [])

  const personajesFiltrados = personajes.filter((p) =>
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
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="tabla-container">
        <h2>{title}</h2>

        <table className="tabla-personajes">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Estado</th>
              <th>Género</th>
            </tr>
          </thead>
          <tbody>
            {personajesFiltrados.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <img src={p.image} width="50" />
                </td>
                <td>{p.name}</td>
                <td>{p.species}</td>
                <td>{p.status}</td>
                <td>{p.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
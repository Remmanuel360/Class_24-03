import { useParams } from "react-router";
import { useState, useEffect } from 'react'
import "./style.css"


interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}

function Equipo(){

    const [ranking, setRanking] = useState<TeamData[]>([])
    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://raw.githubusercontent.com/sdtibata/dataliga/refs/heads/main/posiciones.json')
        const data = await res.json()

        setRanking(data.standings[0].ranking)

      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }

    fetchData()
  }, [])

    const {equipo} = useParams<{equipo:string}>()

    if(!ranking) return <p>Cargando...</p>
    return(
        
        <>
            <p>{equipo}</p>
            <p>{ranking.team.name}</p>            
        </>
    )
}

export default Equipo
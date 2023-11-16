import { DriverCard } from './components/DriverCard'
import { useEffect, useState } from "react"
import call_api from "./services/call_api"
import './App.css'
import Logo from './assets/formula-1-logo.png'

const pilots = {
  'Max Verstappen' : {
    'pais': 'Países Bajos',
    'prefijo': 'NL'
  },
  'Sergio Perez' : {
    'pais': 'México',
    'prefijo': 'MX'
  },
  'Lewis Hamilton' : {
    'pais': 'Reino Unido',
    'prefijo': 'GB'
  },
  'Carlos Sainz Jr' : {
    'pais': 'España',
    'prefijo': 'ES'
  },
  'Fernando Alonso' : {
    'pais': 'España',
    'prefijo': 'ES'
  },
  'Lando Norris' : {
    'pais': 'Reino Unido',
    'prefijo': 'GB'
  },
  'Charles Leclerc' : {
    'pais': 'Mónaco',
    'prefijo': 'MC'
  },
  'George Russell' : {
    'pais': 'Reino Unido',
    'prefijo': 'GB'
  },
  'Oscar Piastri' : {
    'pais': 'Australia',
    'prefijo': 'AU'
  },
  'Pierre Gasly' : {
    'pais': 'Francia',
    'prefijo': 'FR'
  },
  'Lance Stroll' : {
    'pais': 'Canadá',
    'prefijo': 'CA'
  },
  'Esteban Ocon' : {
    'pais': 'Francia',
    'prefijo': 'FR'
  },
  'Alexander Albon' : {
    'pais': 'Tailandia',
    'prefijo': 'TH'
  },
  'Valtteri Bottas' : {
    'pais': 'Finlandia',
    'prefijo': 'FI'
  },
  'Nico Hulkenberg' : {
    'pais': 'Alemania',
    'prefijo': 'DE'
  },
  'Yuki Tsunoda' : {
    'pais': 'Japón',
    'prefijo': 'JP'
  },
  'Daniel Ricciardo' : {
    'pais': 'Australia',
    'prefijo': 'AU'
  },
  'Guanyu Zhou' : {
    'pais': 'China',
    'prefijo': 'CN'
  },
  'Kevin Magnussen' : {
    'pais': 'Dinamarca',
    'prefijo': 'DK'
  },
  'Liam Lawson' : {
    'pais': 'Nueva Zelanda',
    'prefijo': 'NZ'
  },
  'Logan Sargeant' : {
    'pais': 'Estados Unidos',
    'prefijo': 'US'
  },
  'Nyck De Vries' : {
    'pais': 'Países Bajos',
    'prefijo': 'NL'
  }
}
function App() {
  const [rankData, setRankData] = useState(null)
  
  useEffect( () => {
    const fetchData = async () => {
      const res = await call_api('rankings/drivers', {season: 2023 })
      const dataWithFlags = res.response.map(element => {
        const pilotInfo = pilots[element.driver.name];
        if (pilotInfo) {
          const flagURL = `https://www.banderas-mundo.es/data/flags/w702/${pilotInfo.prefijo.toLowerCase()}.webp`
          return {...element, driver: {...element.driver, flag : flagURL}}
        }
        return element;
      });
      setRankData(dataWithFlags);
    }
    
    fetchData();
  } , [pilots]);
  
  
  console.log(rankData);

    return (
      <>
      <main>
        <section>
        <div className='rank-title'>
          <img src={Logo} alt="F1 logo" className='main-logo'/>
          <h1>Drivers Standings</h1>
        </div>
        <ol className='container'>
          { 
            rankData ? (
              rankData.map((position) => {
                return <DriverCard key={position.driver.id} data={position} />
              })
              ) : (<li>No hay info</li>)
            }
        </ol>
              </section>
      </main>
    </>
  )
}

export default App

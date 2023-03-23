import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCounties() {
//   const [countries, setCountries] = useState([])
//   useEffect( ()=> {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return (
//     <div className="LoadCounties">
//       <h1>Visiting Every Country Of The World!!!</h1>
//       <h3>Name: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} popu={country.population}/>)
//       }
//     </div>
//   );
// }

// function Country (props) {
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h4>Population: {props.popu}</h4>
//     </div>
//   );
// }



export default App;

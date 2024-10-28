import './App.css'
import BasicNav from './Components/BasicNav/BasicNav'
import PriceOption from './Components/Navbar/PriceOption/PriceOption'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'
// import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      
      <BasicNav></BasicNav>
      {/* <Navbar></Navbar> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App

import './App.css'
import BasicNav from './Components/Navbar/BasicNav/BasicNav'
import PriceOption from './Components/Navbar/PriceOption/PriceOption'
// import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      
      <BasicNav></BasicNav>
      {/* <Navbar></Navbar> */}
      <h1 className='text-2xl bg-fuchsia-400'>Vite + React</h1>
      <PriceOption></PriceOption>
      
    </>
  )
}

export default App

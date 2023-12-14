import './App.css'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App

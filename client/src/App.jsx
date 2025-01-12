//import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateUser from './component/UpdateUser'
import CreateUser from './component/CreateUser'
import Users from './component/Users'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Users/>}></Route>
        <Route path="/create" element= {<CreateUser/>}></Route>
        <Route path='/update/:id' element= {<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

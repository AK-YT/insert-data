
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'


  function App(){

  return (
    <div>
      <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<Users />}></Route>
            <Route path='/create' element={<CreateUser />}></Route>
           
        </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from './pages/Dashboard';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

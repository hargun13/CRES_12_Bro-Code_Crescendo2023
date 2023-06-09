import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import {Route, Routes} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Doctors from './pages/Doctors/Doctors';


function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Dashboard' element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>} />
          <Route path='/Doctors' element={<Doctors />} />
        </Routes>
      </AuthContextProvider>



    </div>
  );
}

export default App;

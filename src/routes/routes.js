import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../containers/login';
import Cadastro from '../containers/cadastro';
import Main from '../components/paciente';
import PrivateRoute from './privateRoute';
import '../sass/index.scss'
import { useRef } from 'react';
import { Toast } from 'primereact/toast';

function NewRoutes() {
   const toast = useRef(null);
  return (
    <Router>
      <Toast ref={toast} position="top-center" className="global-toast" baseZIndex={10000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/paciente"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default NewRoutes;

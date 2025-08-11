import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../containers/login';
import Cadastro from '../containers/cadastro';

function NewRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default NewRoutes;

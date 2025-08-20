import './../../../sass/paciente/dashboard.scss';
import "primeicons/primeicons.css";
import PropTypes from "prop-types";


function Dashboard({setSelectedMenu}) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">

       
        <div className="dashboard-card">
          <h3>
            <i className="pi pi-calendar-plus"></i> Consultas Hoje
          </h3>
          <p>12</p>
          <span className="dashboard-info">Último mês</span>
        </div>

        
        <div className="dashboard-card">
          <h3>
            <i className="pi pi-clock"></i> Exames
          </h3>
          <p>5</p>
          <span className="dashboard-info">Último mês</span>
        </div>

        
        <div className="dashboard-card">
          <h3>
            <i className="pi pi-user-md"></i> Médicos Disponíveis
          </h3>
          <div className="dashboard-extra">
            <span><i className="pi pi-user"></i> Dra. Mariana Souza</span>
            <span><i className="pi pi-briefcase"></i> Cardiologia</span>
            <span><i className="pi pi-clock"></i> 09:00 - 17:00</span>
          </div>
        </div>

      
        <div className="dashboard-card">
          <h3>
            <i className="pi pi-video"></i> Teleconsultas
          </h3>
          <p>3</p>
          <button className="dashboard-btn" onClick={() => setSelectedMenu('Teleconsultas')}>
            <i className="pi pi-play"></i> Iniciar
          </button>
        </div>

       
        <div className="dashboard-card">
          <h3>
            <i className="pi pi-bell"></i> Notificações
          </h3>
          <p>7</p>
          <span className="dashboard-info">Novas atualizações do sistema</span>
        </div>

       
        <div className="dashboard-card">
          <h3>
            <i className="pi pi-book"></i> Histórico Médico
          </h3>
          <p>20</p>
          <span className="dashboard-info">Acesse seu histórico médico</span>
          <button className="dashboard-btn" onClick={() => setSelectedMenu('Históricos')}>
            <i className="pi pi-search"></i> Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
    setSelectedMenu: PropTypes.func.isRequired,
};

export default Dashboard;

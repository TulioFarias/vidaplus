

 function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Consultas Hoje</h3>
          <p>12</p>
        </div>

        <div className="dashboard-card">
          <h3>Agendamentos Pendentes</h3>
          <p>5</p>
        </div>

        <div className="dashboard-card">
          <h3>Médicos Disponíveis</h3>
          <p>8</p>
        </div>

        <div className="dashboard-card">
          <h3>Teleconsultas</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3>Notificações</h3>
          <p>7</p>
        </div>

        <div className="dashboard-card">
          <h3>Histórico de Pacientes</h3>
          <p>20</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

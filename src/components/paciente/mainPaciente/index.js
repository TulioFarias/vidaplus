import React from 'react';
import PropTypes from 'prop-types';
import '../../../sass/paciente/mainpaciente.scss';
import Consultas from './consultas';
import Dashboard from './dashboard';
import Teleconsulta from './telecunsulta';
import MedicosDisponiveis from './medicos';
import HistoricoMedico from './historicos';
import Agendamentos from './agendamentos';

function MainSystem({ selectedMenu, setSelectedMenu }) {

    const menuTitles = {
        Dashboard: "Painel de Controle",
        Consultas: "Consultas",
    };

    const renderMain = () => {
        switch (selectedMenu) {
            case "Dashboard":
                return <Dashboard setSelectedMenu={setSelectedMenu} />;
            case "Consultas":
                return <Consultas />;
            case "Teleconsultas":
                return <Teleconsulta />;
            case "Médicos Disponíveis":
                return <MedicosDisponiveis />;
            case "Históricos":
                return <HistoricoMedico />;
            case "Agendamentos":
                return <Agendamentos />;
            default:
                return <div>Em breve...</div>;
        }
    };

    return (
        <div className='ContainerMain'>
            <h2>{menuTitles[selectedMenu] || selectedMenu}</h2>
            {renderMain()}
        </div>
    );
}

MainSystem.propTypes = {
    selectedMenu: PropTypes.string.isRequired,
    setSelectedMenu: PropTypes.func.isRequired,
};

export default MainSystem;

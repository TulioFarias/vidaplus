import React from 'react';
import PropTypes from 'prop-types';
import '../../../sass/paciente/mainpaciente.scss';
import Consultas from './consultas';
import Dashboard from './dashboard';

function MainSystem({ selectedMenu }) {

    const renderMain = () => {
        switch(selectedMenu) {
            case "Dashboard":
                return <Dashboard />;
            case "Consultas":
                return <Consultas />;
            // Adicione outros casos quando tiver componentes prontos
            default:
                return <div>Em breve...</div>;
        }
    }

    return(
        <div className='ContainerMain'>
            <h2>{selectedMenu}</h2> 
            {renderMain()}
        </div>
    )
}

MainSystem.propTypes = {
    selectedMenu: PropTypes.string.isRequired,
};

export default MainSystem;

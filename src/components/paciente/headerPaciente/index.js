import HeaderPaciente from "./HeaderPaciente";
import PropTypes from 'prop-types';
function HeaderSystem({setVisibleSideBar}) {
    
    return(
        <>
        <HeaderPaciente setVisibleSideBar={setVisibleSideBar}/>
        </>
    )
}

HeaderSystem.propTypes = {
  setVisibleSideBar: PropTypes.func.isRequired, 
};

export default HeaderSystem;
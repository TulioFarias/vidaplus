import MenuSystem from "./menuSystem";
import PropTypes from "prop-types";

function Menu({ visibleSideBar, setVisibleSideBar }){

    return(
        <>
        <MenuSystem visibleSideBar={visibleSideBar} setVisibleSideBar={setVisibleSideBar}/>
        </>
    )
}
Menu.propTypes = {
  visibleSideBar: PropTypes.bool.isRequired,
  setVisibleSideBar: PropTypes.func.isRequired,
};

export default Menu;
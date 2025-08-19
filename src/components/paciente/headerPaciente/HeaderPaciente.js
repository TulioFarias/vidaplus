import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { auth, db } from '../../../services/firebase';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import vidalogo from '../../../assets/img/logo-vida.png'
import '../../../sass/paciente/headerpaciente.scss';
import PropTypes from 'prop-types';

function HeaderPaciente({setVisibleSideBar}) {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const email = auth.currentUser?.email;
                if (!email) return;

        
                const usuariosRef = collection(db, "usuarios");
                const q = query(usuariosRef, where("email", "==", email));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
                    setUserName(userData.nome);
                }
            } catch (err) {
                console.error('Erro ao buscar usuário no Firebase:', err);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        auth.signOut();
        navigate('/');
    };

    return (
        <div className="ContainerHeader">
            <div className="logoContainer">
                <Button
                    icon="pi pi-bars"
                    className="p-button-text p-button-lg"
                    onClick={() => setVisibleSideBar(true)} 
                />
                <img src={vidalogo} alt="VidaPlus Logo" className="logoHeader" />
            </div>

            <div className="userContainer">
                <Avatar icon="pi pi-user" shape="circle" style={{ backgroundColor: '#0d9488', color: '#ffffff' }} />
                <p>{userName}</p>
                <Button
                    icon="pi pi-sign-out"
                    className="p-button-rounded p-button-text p-button-danger"
                    onClick={handleLogout}
                />
            </div>
        </div>
    );
}

HeaderPaciente.propTypes = {
  setVisibleSideBar: PropTypes.func.isRequired, 
};

export default HeaderPaciente;

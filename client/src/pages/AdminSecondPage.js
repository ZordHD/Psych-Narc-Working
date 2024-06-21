import React, { useState, useContext } from 'react';
import {Button, Container} from "react-bootstrap";
import Logo2 from '../assets/Logo2.png';
import { NavLink, useNavigate } from "react-router-dom";
import CreateDocuments from "../components/modals/CreateDocuments";
import CreateAdministrators from "../components/modals/CreateAdministrators";
import CreateDepartments from "../components/modals/CreateDepartments";
import CreateMassMedia from "../components/modals/CreateMassMedia";
import { Context } from "..";
import AdminUsersPanel from '../components/modals/AdminUsersPanel';
import { MAINPAGE_ROUTE } from '../utils/consts';

const AdminSecondPage = () => {
    const [documentsVisible, setDocumentsVisible] = useState(false)
    const [administratorsVisible, setAdministratorsVisible] = useState(false)
    const [departmentsVisible, setDepartmentsVisible] = useState(false)
    const [massmediaVisible, setMassMediaVisible] = useState(false)
    const [usersPanelVisible, setUsersPanelVisible] = useState(false);
    const { user } = useContext(Context);

    if (!user.isAuth || user.user.permission !== 'ADMIN') {
        alert("у вас нет доступа"); 
        window.location.href = "http://localhost:3000"; 
        return null;
    }

    return (
        <Container className="d-flex flex-column">
            <Button 
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setDocumentsVisible(true)}
            >
                Добавить документ
            </Button>
            <Button 
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setAdministratorsVisible(true)}
            >
                Добавить врача в администрацию
            </Button>
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setDepartmentsVisible(true)}
            >
                Добавить отделение
            </Button>
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setMassMediaVisible(true)}
            >
                Добавить новость из сми
            </Button>
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setUsersPanelVisible(true)}
            >
                Управление пользователями
            </Button>
            <AdminUsersPanel show={usersPanelVisible} onHide={() => setUsersPanelVisible(false)} />
            <CreateDocuments show={documentsVisible} onHide={() => setDocumentsVisible(false)}/>
            <CreateAdministrators show={administratorsVisible} onHide={() => setAdministratorsVisible(false)}/>
            <CreateDepartments show={departmentsVisible} onHide={() => setDepartmentsVisible(false)}/>
            <CreateMassMedia show={massmediaVisible} onHide={() => setMassMediaVisible(false)}/>

            <div className='block-Standart'>
                        <NavLink to={MAINPAGE_ROUTE}>
                            <img src={Logo2} alt="Логотип" style={{marginTop:'200px', marginRight:'10px'}}/>
                        </NavLink>
                    </div>
        </Container>
    );
};

export default AdminSecondPage;
import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap"
import Logo2 from '../assets/Logo2.png';
import { NavLink, useNavigate } from "react-router-dom";
import CreateVacancies from '../components/modals/CreateVacancies';
import { MAINPAGE_ROUTE } from '../utils/consts';

const AdminVacancies = () => {
    const [vacanciesVisible, setVacanciesVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setVacanciesVisible(true)}
            >
                Добавить вакансию
            </Button>
            <CreateVacancies show={vacanciesVisible} onHide={() => setVacanciesVisible(false)}/>
            
            <div className='block-Standart'>
                        <NavLink to={MAINPAGE_ROUTE}>
                            <img src={Logo2} alt="Логотип" style={{marginTop:'200px', marginRight:'10px'}}/>
                        </NavLink>
                    </div>
        </Container>
    );
};

export default AdminVacancies;
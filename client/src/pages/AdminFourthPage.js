import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import Logo2 from '../assets/Logo2.png';
import { NavLink, useNavigate } from "react-router-dom";
import CreateServicesRB from '../components/modals/CreateServicesRB';
import CreateOtherServices from "../components/modals/CreateOtherServices";
import CreateForeignServices from "../components/modals/CreateForeignServices";
import { MAINPAGE_ROUTE } from '../utils/consts';

const AdminFourthPage = () => {
    const [servicesRBVisible, setServicesRBVisible] = useState(false)
    const [otherservicesVisible, setOtherServicesVisible] = useState(false)
    const [foreignservicesVisible, setForeignServicesVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setServicesRBVisible(true)}
            >
                Добавить сервис для граждан РБ
            </Button>
            <Button 
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setForeignServicesVisible(true)}
            >
                Добавить сервис для иностранных граждан
            </Button>
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setOtherServicesVisible(true)}
            >
                Добавить другой сервис
            </Button>
            <CreateServicesRB show={servicesRBVisible} onHide={() => setServicesRBVisible(false)}/>
            <CreateOtherServices show={otherservicesVisible} onHide={() => setOtherServicesVisible(false)}/>
            <CreateForeignServices show={foreignservicesVisible} onHide={() => setForeignServicesVisible(false)}/>

            <div className='block-Standart'>
                        <NavLink to={MAINPAGE_ROUTE}>
                            <img src={Logo2} alt="Логотип" style={{marginTop:'200px', marginRight:'10px'}}/>
                        </NavLink>
                    </div>
        </Container>
    );
};

export default AdminFourthPage;
import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import Logo2 from '../assets/Logo2.png';
import { NavLink, useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from '../utils/consts';
import CreateHallOfFame from '../components/modals/CreateHallOfFame';

const AdminThirdPage = () => {
    const [halloffameVisible, setHallOfFameVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
               style={{border:'none'}}  
               className="mt-4 p-2 button-3"
                onClick={() => setHallOfFameVisible(true)}
            >
                Добавить персонал на доску почёта
            </Button>
            <CreateHallOfFame show={halloffameVisible} onHide={() => setHallOfFameVisible(false)}/>
            
            <div className='block-Standart'>
                        <NavLink to={MAINPAGE_ROUTE}>
                            <img src={Logo2} alt="Логотип" style={{marginTop:'200px', marginRight:'10px'}}/>
                        </NavLink>
                    </div>
        </Container>
    );
};

export default AdminThirdPage;
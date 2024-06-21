import React, { useState, useContext } from 'react';
import Logo2 from '../assets/Logo2.png';
import { NavLink, useNavigate } from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import CreateNews from "../components/modals/CreateNews";
import CreateServices from "../components/modals/CreateServices";
import CreatePartners from "../components/modals/CreatePartners";
import CreateGallery from "../components/modals/CreateGallery";
import CreateLine from '../components/modals/CreateLine';
import { Context } from "..";
import AdminUsersPanel from '../components/modals/AdminUsersPanel';
import { MAINPAGE_ROUTE } from '../utils/consts';

const AdminMainPage = () => {
    const [newsVisible, setNewsVisible] = useState(false)
    const [servicesVisible, setServicesVisible] = useState(false)
    const [partnersVisible, setPartnersVisible] = useState(false)
    const [galleryVisible, setGalleryVisible] = useState(false)
    const [lineVisible, setLineVisible] = useState(false)
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
                onClick={() => setNewsVisible(true)}
            >
                Добавить новость
            </Button>
            <Button
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setServicesVisible(true)}
            >
                Добавить услуги
            </Button>
            <Button
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setPartnersVisible(true)}
            >
                Добавить партнёра
            </Button>
            <Button
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setGalleryVisible(true)}
            >
                Добавить фото в галерею
            </Button>
            <Button
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setLineVisible(true)}
            >
                Добавить текст в бегущую строку
            </Button>
            <Button
                style={{border:'none'}}  
                className="mt-4 p-2 button-3"
                onClick={() => setUsersPanelVisible(true)}
            >
                Управление пользователями
            </Button>
            <AdminUsersPanel show={usersPanelVisible} onHide={() => setUsersPanelVisible(false)} />
            <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)}/>
            <CreateServices show={servicesVisible} onHide={() => setServicesVisible(false)}/>
            <CreatePartners show={partnersVisible} onHide={() => setPartnersVisible(false)}/>
            <CreateGallery show={galleryVisible} onHide={() => setGalleryVisible(false)}/>
            <CreateLine show={lineVisible} onHide={() => setLineVisible(false)}/>

            <div className='block-Standart'>
                        <NavLink to={MAINPAGE_ROUTE}>
                            <img src={Logo2} alt="Логотип" style={{marginTop:'200px', marginRight:'10px'}}/>
                        </NavLink>
                    </div>
        </Container>
    );
};

export default AdminMainPage;
import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { 
    ADMIN_MAIN_PAGE_ROUTE, 
    ADMIN_SECOND_PAGE_ROUTE, 
    ADMIN_THIRD_PAGE_ROUTE, 
    ADMIN_VACANCIES_ROUTE, 
    ADMIN_FOURTH_PAGE_ROUTE 
} from "../utils/consts";
import { useNavigate } from "react-router-dom";

const FloatingAdminButton = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    if (!user.isAuth || user.user.permission !== 'ADMIN') {
        return null;
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="floating-button" style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1000
            }}>
                Админ-панель
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate(ADMIN_MAIN_PAGE_ROUTE)}>Главная страница</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate(ADMIN_SECOND_PAGE_ROUTE)}>Структура</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate(ADMIN_THIRD_PAGE_ROUTE)}>Новости коллектива</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate(ADMIN_VACANCIES_ROUTE)}>Вакансии</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate(ADMIN_FOURTH_PAGE_ROUTE)}>Сервисы</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default FloatingAdminButton;
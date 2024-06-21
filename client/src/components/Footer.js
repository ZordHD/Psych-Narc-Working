import React, { useContext } from "react";
import { Context } from "../http";
import Container from 'react-bootstrap/Container';
import '../styles/utility-styles.css';
import { Col, Row } from "react-bootstrap";
import VKwhiteIcon from '../assets/VKWhiteIcon.svg';
import FacebookIcon from '../assets/FacebookIcon.svg';
import InstagramIcon from '../assets/InstagramIcon.svg';
import OKIcon from '../assets/OKIcon.svg';

const Footer = () => {
    return(
        <div className="footer">
            <div className="block-Standart" style={{fontSize:'24px', fontWeight:'500', color:'white', paddingTop:'10px'}}>
                УЗ “Психиатрия-Наркология”
            </div>
            <Container style={{width:'100vw'}}>
                <Row xs={1} md={4} lg={4} className='g-5' style={{paddingTop:'70px'}}>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Контактная информация
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                        Республика Беларусь, г. Гродно ул. Обухова 15
                        Индекс: 230003
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                        <span style={{fontWeight:'700'}}>Реквизиты:</span> Р/с бюджет ВY35 АКВВ 36040000008784000000,
                        Р/с внебюджет BY96 AKBB 36320000008794000000 ГОУ №400 ОАО “СБ Беларусбанк”, БИК АКВВВY2X УНН 590645878, ОКПО 29205059
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                        Нужна помощь?
                        Если вам нужна помощь с чем-то еще воспользуйтесь для поиска <span style={{fontWeight:'700', color:'#00FFAF', cursor:'pointer'}}>FAQs (часто задаваемые вопросы)</span> или напишите нам на mmc@mail.grodno.by и мы будем рады помочь вам!
                        </div>
                    </Col>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Горячая линия
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                        9.00 до 16.00 действует "горячая" телефонная линия для обращений граждан:
                        <p style={{color:'#00FFAF', fontWeight:'700'}}>+375 152 72-13-45</p>

                        Начальник главного управления здравоохранения Гродненского облисполкома - Кеда Людмила Николаевна
                        <p style={{color:'#00FFAF', fontWeight:'700'}}>+375 152 45-07-02</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Телефоны
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                        Регистратура психиатрии: <span style={{fontWeight:'700', color:'#00FFAF', cursor:'pointer'}}>+375 152 39-83-44</span>
        
                        <p>Факс регистратуры: <span style={{fontWeight:'700', color:'#00FFAF', cursor:'pointer'}}>8(0152) 39-83-32</span></p>

                        <p>Регистратура наркологии: <span style={{fontWeight:'700', color:'#00FFAF', cursor:'pointer'}}>+375 152 39-83-62</span></p>

                        <p>Факс: <span style={{fontWeight:'700', color:'#00FFAF', cursor:'pointer'}}>8(0152) 71-69-00</span></p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{color:'white', fontWeight:'600', fontSize:'16px'}}>
                            Email
                        </div>
                        <div style={{color:'white', fontSize:'14px', paddingTop:'10px'}}>
                        Email: centr@mmcgrodno.by-Приемная главного врача

                        <p>Email: omts@mmcgrodno.by-Отдел материально-технического снабжения</p>

                        <p>Email: omko@mmcgrodno.by-Организационно-методический отдел</p>

                        <p>Email: prog@mmcgrodno.by-Специалисты по сопровождению ПО</p>

                        <p>Email: zapros@mmcgrodno.by-Одно окно</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="line-Footer" />
            <div className="block-Standart">
                <div className="me-auto" style={{fontWeight:'400', fontSize:'14px', color:'white', paddingLeft:'37px', opacity:'70%', marginTop:'30px'}}>
                    Copyright © 2020. All rights reserved.
                </div>
                <div style={{paddingRight:'44%', marginTop:'30px'}}>
                    <img src= {OKIcon} alt="" className='icons' style={{marginRight:'20px'}}/>
                    <img src= {VKwhiteIcon} alt="" className='icons' style={{marginRight:'20px'}}/>
                    <img src= {FacebookIcon} alt="" className='icons' style={{marginRight:'20px'}}/>
                    <img src= {InstagramIcon} alt=""  className='icons'style={{marginRight:'20px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
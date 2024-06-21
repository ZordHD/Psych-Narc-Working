import React from "react";
import NavBar from "../components/NavBar";
import Documents from "../components/Documents";
import { Card, Col, Container, Row } from "react-bootstrap";
import '../styles/images-styles.css'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import Building from '../assets/Building.png'
import Mission from '../assets/Mission.png'
import PlayIcon from '../assets/PlayIcon.svg'
import Administration from "../components/Administration";
import Departments from "../components/Departments";
import MassMedia from "../components/MassMedia";
import Footer from "../components/Footer";
import FloatingAdminButton from "../components/FloatingAdminButton";

const Structure = () => {
    return (
        <>
        <NavBar/>
        <div className="display-1 mt-4">О центре</div>
        <section id="History">
            <Container className="mt-5" style={{width:'80vw'}}>
                <Row xs={1}>
                    <Col className="col-md-10 col-lg-4">
                        <Card style={{border:'none', height:'100%'}}>
                        <Card.Img variant="top" src={Building} style={{maxWidth:'100%', height:'100%'}}alt='Здание'/>
                        <div className="image-Deco">
                            <div className="flex-wrap block-Standart">
                                    <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                </div>
                            </div>
                            </Card>
                    </Col>
                    <Col className="block-Standart col-md-1 col-lg-1" style={{maxWidth:'50px'}}>
                        <div className="lineDiv-2"/>
                    </Col>
                    <Col className="col-md-12 col-lg-7">
                        <div className="display-2" style={{textAlign:'left'}}>
                            История
                        </div>
                        <div className="body-Semibold mt-3" style={{color:'#3D9378'}}>
                        Гродненский областной психоневрологический диспансер создан  10 февраля 1962 года (приказ по Гродненскому областному отделу здравоохранения № 22-з от 10.02.1962г.). Фактически открыт в мае 1962 года, в приспособленном здании по адресу: ул.К.Маркса, 21. 

                        Первый главный врач диспансера – Киселева Лидия Владимировна.  Диспансер стал первым специализированным учреждением в области, оказывавшим внебольничную психиатрическую помощь населению. Штаты диспансера составляли 13 должностей, в том числе 3 должности врачей-психиатров, 3,5 должности среднего медперсонала, 3 должности младшего медперсонала. Вместе с Киселевой Л.В. первыми врачами в диспансере были Бородулина Л.А., Аносова Н.Д., Тарнапович М.Я. Среди первых  медицинских сестер -  Фролович А.К., Деусова Н.Л., Чигринская Л.А., Буть Я.К., Кизюкевич Е.А., Зинковец А.Н., Петровичева Т.А., Петрякова Е.И.
                        </div>
                    </Col>
                </Row>
            </Container>
            <FloatingAdminButton/>
            <Container className="mt-3" style={{width:'80vw'}}>
                <Row>
                    <Col className="body-Semibold" style={{color:'#3D9378'}}>
                    В 1965 году стационар был переведен  в здание бывшего Бригитского монастыря по адресу: ул.К.Маркса, 27, которое ранее занимала областная клиническая больница.  В структуре диспансера появились КДЛ, рентгенкабинет, физкабинет, аптека. В июне 1966 года к стационару присоединилось и диспансерное отделение. Административно-хозяйственные службы размещались в отдельных приспособленных зданиях на территории бывшего монастыря, включая лямус, являющийся архитектурным памятником деревянного зодчества.
                    </Col>
                </Row>
            </Container>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section className="Mission-And-Politics">
            <div className="display-2">Миссия и политика</div>
            <Container className="block-Standart mt-3">
                <Row>
                    <Col>
                        <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={Mission} style={{maxWidth:'100%', height:'100%'}}alt='Миссия'/>
                            <img src={PlayIcon} alt="Запуск" className="icon-Container icons"/>
                            <div className="image-Deco-2">
                                <div className="flex-wrap block-Standart">
                                    <div className="gradient mb-3" style={{height:'15px', width:'50%'}}/>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3" style={{width:'76vw'}}>
                <Row>
                    <Col className="body-Semibold" style={{color:'#3D9378', textAlign:'center'}}>
                    Оказание специализированной психиатрической, наркологической,
психотерапевтической и психологической помощи взрослому и детскому
населению г. Гродно и Гродненской области, осуществляемой в условиях
государственных гарантий по обеспечению медицинским обслуживанием
граждан Республики Беларусь за счет средств бюджета и других источни-
ков финансирования, организационно методической и экспертной помощи
организациям здравоохранения области на современном уровне развития
медицины. Участие в выполнении государственных программ и комплексов
мер, направленных на снижение уровня психических и поведенческих расстройств и их последствий в обществе.
                    </Col>
                </Row>
            </Container>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Documents">
            <div className="display-2">Документы</div>
            <Documents/>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Administration">
            <div className="display-2">Администрация</div>
            <Administration/>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Departments">
            <div className="display-2">Отделения</div>
            <Departments/>
            <div className="section-Divider mt-4 mb-3"/>
        </section>

        <section id="Mass-Media">
            <div className="display-2">Мы в СМИ</div>
            <MassMedia/>
        </section>

        <Footer/>
        </>
    );
};

export default Structure;
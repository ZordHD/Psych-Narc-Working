import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Container, Col, Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import appealsOrder from '../assets/appealsOrder.png'
import hotline from '../assets/hotline.png'
import '../styles/text-styles.css'
import '../styles/utility-styles.css'
import '../styles/images-styles.css'
import Footer from "../components/Footer";
import AskQuestion from "../components/modals/AskQuestion";
import LeaveFeedback from "../components/modals/LeaveFeedback";
import LeaveThanks from "../components/modals/LeaveThanks";

const Appeals = () => {
    const [AskQuestionVisible, setAskQuestionVisible] = useState(false)
    const [LeaveFeedbackVisible, setLeaveFeedbackVisible] = useState(false)
    const [LeaveThanksVisible, setLeaveThanksVisible] = useState(false)
    return (
        <>
        <NavBar/>

        <section id="Appeals-Order">
            <Container className="mt-5" style={{width:'80vw'}}>
                    <Row xs={1} className="g-5">
                        <Col className="col-md-4 col-lg-4">
                            <Card style={{border:'none', height:'90%'}}>
                            <Card.Img variant="top" src={appealsOrder} style={{maxWidth:'100%', height:'100%'}}alt='Вакансия'/>
                            <div className="image-Deco">
                                <div className="flex-wrap block-Standart">
                                        <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                    </div>
                                </div>
                                </Card>
                        </Col>
                        <Col className="col-md-8 col-lg-8">
                            <div className="display-2" style={{textAlign:'left'}}>
                                Порядок обращения граждан
                            </div>
                            <div className="body-Semibold mt-3" style={{color:'#3D9378'}}>
                            При поступлении письменных и электронных обращений, содержащих вопросы, решение которых не относится к компетенции, в течение пяти рабочих дней такие обращения направляются для рассмотрения организациям в соответствии с их компетенцией с уведомлением заявителей в тот же срок либо в тот же срок, оставляют обращения без рассмотрения по существу и уведомляют об этом заявителей с разъяснением, в какую организацию и в каком порядке следует обратиться для решения вопросов, изложенных в обращениях.

Обязательному приему и регистрации подлежат обращения, поданные в порядке, установленном Законом Республики Беларусь от 18 июля 2011 года «Об обращениях граждан и юридических лиц».
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-3" style={{width:'80vw'}}>
                    <Row>
                        <Col className="body-Semibold" style={{color:'#3D9378'}}>
                        Обращения подаются заявителями на белорусском или русском языке в письменной или электронной форме, а также излагаются в устной форме. Письменные обращения подаются нарочным (курьером), по почте, в ходе личного приема, путем внесения замечаний и (или) предложений в книгу замечаний и предложений. Устные обращения излагаются в ходе личного приема.
                        </Col>
                    </Row>
                </Container>
                <div className="section-Divider mt-5 mb-1"/>
            </section>

            <section id="Hotline">
                <Container className="mt-5" style={{width:'80vw'}}>
                    <Row xs={1} className="g-5">
                        <Col className="col-md-8 col-lg-8">
                            <div className="display-2" style={{textAlign:'left'}}>
                                Телефон доверия
                            </div>
                            <div className="body-Semibold mt-3" style={{color:'#3D9378'}}>
                            Каждый человек может столкнуться с ситуацией, которая выбивает из привычного ритма, кажется непереносимой и неразрешимой. В подобных ситуациях народная мудрость советует найти сопереживающего собеседника и «излить ему душу». Такой собеседник теперь есть!

Служба дистанционной психологической помощи "Телефон доверия" оказывает круглосуточную бесплатную анонимную психологическую помощь людям и их семьям, пострадавшим от насилия.
                            </div>
                        </Col>
                        <Col className="col-md-4 col-lg-4" style={{marginTop:'70px'}}>
                            <Card style={{border:'none', height:'100%'}}>
                            <Card.Img variant="top" src={hotline} style={{maxWidth:'100%', height:'100%'}}alt='Вакансия'/>
                            <div className="image-Deco">
                                <div className="flex-wrap block-Standart">
                                        <div className="gradient mb-3" style={{height:'9px', width:'50%'}}/>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="section-Divider mt-5 mb-3"/>
            </section>

            <section id="Commentary">
                <div className="block-Standart">
                <Button onClick={() => setLeaveFeedbackVisible(true)} className="display-2" onCl style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px', border:'none'}}>
                    Оставить отзыв
                </Button>
                </div>
                <div className="section-Divider mt-1 mb-3"/>

                <div className="block-Standart">
                <Button onClick={() => setLeaveThanksVisible(true)} className="display-2" style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px', border:'none'}}>
                    Оставить благодарность
                </Button>
                </div>
                <div className="section-Divider mt-1 mb-3"/>

                <div className="block-Standart">    
                <Button onClick={() => setAskQuestionVisible(true)} className="display-2" style={{textDecoration:"underline #3D9378", textDecorationThickness:'2px', textUnderlineOffset:'4.5px', border:'none'}}>
                    Задать вопрос
                </Button>
                </div>
                <div className="section-Divider mt-1"/>
                <AskQuestion show={AskQuestionVisible} onHide={() => setAskQuestionVisible(false)}/>
                <LeaveFeedback show={LeaveFeedbackVisible} onHide={() => setLeaveFeedbackVisible(false)}/>
                <LeaveThanks show={LeaveThanksVisible} onHide={() => setLeaveThanksVisible(false)}/>
            </section>
            <Footer/>
        </>
    );
};

export default Appeals;
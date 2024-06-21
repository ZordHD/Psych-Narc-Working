import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Context } from '../..';
import { createMassMedia } from '../../http/massmediaAPI';
import MassMediaList from './MassMediaList'; // Предполагается, что такой компонент существует

const CreateMassMedia = ({ show, onHide }) => {
    const { massmedia } = useContext(Context);
    const [massmImg, setMassmImg] = useState(null);
    const [massmName, setMassmName] = useState('');
    const [massmDate, setMassmDate] = useState('');
    const [massmText, setMassmText] = useState('');
    const [massmFullText, setMassmFullText] = useState('')
    const [showMassMediaList, setShowMassMediaList] = useState(false);

    const selectFile = e => {
        setMassmImg(e.target.files[0]);
    };

    const addMassMedia = () => {
        const formData = new FormData();
        formData.append('name', massmName);
        formData.append('text', massmText);
        formData.append('date', massmDate);
        formData.append('image', massmImg);
        formData.append('fulltext', massmFullText)
        createMassMedia(formData).then(data => onHide());
    };

    const handleShowMassMediaList = () => {
        setShowMassMediaList(true);
    };

    const handleCloseMassMediaList = () => {
        setShowMassMediaList(false);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новость
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите заголовок публикации"
                        value={massmName}
                        onChange={e => setMassmName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите текст публикации"
                        value={massmText}
                        onChange={e => setMassmText(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите дату и имя автора"
                        value={massmDate}
                        onChange={e => setMassmDate(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Выберите файл"
                        type="file"
                        onChange={selectFile}
                    />
                    <Form.Group className="mt-3">
                    <Form.Control
                        value={massmFullText} 
                        onChange={e => setMassmFullText(e.target.value)}
                        as="textarea" 
                        rows={5} 
                        placeholder="Введите полное описание публикации"/>
                    </Form.Group>
                </Form>
                <Button className='mt-5 button-3' style={{border:'none'}}  onClick={handleShowMassMediaList}>Новости</Button>
                <MassMediaList show={showMassMediaList} onHide={handleCloseMassMediaList} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addMassMedia}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMassMedia;
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateServicesRB } from '../../http/servicesRBAPI';

const EditOtherServicesModal = ({ show, onHide, servicesRB }) => {
  const [name, setName] = useState(servicesRB ? servicesRB.name : '');
  const [text, setText] = useState(servicesRB ? servicesRB.text : '');
  const [date, setDate] = useState(servicesRB ? servicesRB.date : '');
  const [image, setImage] = useState(null);

  useEffect(() => {
    setName(servicesRB ? servicesRB.name : '');
    setText(servicesRB ? servicesRB.text : '');
    setDate(servicesRB ? servicesRB.date : '');
    setImage(null);
  }, [servicesRB]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('text', text);
    formData.append('date', date);
    if (image) {
      formData.append('image', image);
    }
    await updateServicesRB(servicesRB.id, formData);
    onHide();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Редактировать новость</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Текст</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Дата</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Изображение</Form.Label>
            <Form.Control
              type="file"
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditOtherServicesModal;
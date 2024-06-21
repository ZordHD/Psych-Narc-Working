import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateMassMedia } from '../../http/massmediaAPI';

const EditMassMediaModal = ({ show, onHide, massmedia }) => {
  const [name, setName] = useState(massmedia ? massmedia.name : '');
  const [text, setText] = useState(massmedia ? massmedia.text : '');
  const [date, setDate] = useState(massmedia ? massmedia.date : '');
  const [image, setImage] = useState(null);

  useEffect(() => {
    setName(massmedia ? massmedia.name : '');
    setText(massmedia ? massmedia.text : '');
    setDate(massmedia ? massmedia.date : '');
    setImage(null);
  }, [massmedia]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('text', text);
    formData.append('date', date);
    if (image) {
      formData.append('image', image);
    }
    await updateMassMedia(massmedia.id, formData);
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

export default EditMassMediaModal;
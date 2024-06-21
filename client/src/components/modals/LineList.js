import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { fetchLine, deleteLine } from '../../http/lineAPI'; // Импорт функции fetchLine
import EditLineModal from './EditLineModal';

const LineList = ({ show, onHide }) => {
  const [lineList, setLineList] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (show) {
      fetchLineForPage(currentPage);
    }
  }, [show, currentPage]);

  const fetchLineForPage = async () => {
        const data = await fetchLine();
        setLineList(data);
      
  };

  const handleDelete = async (id) => {
    await deleteLine(id);
    // Обновляем список новостей, удалив удаленную новость
    setLineList(lineList.filter((line) => line.id !== id));
  };

  const handleEdit = (line) => {
    setSelectedLine(line);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Список новостей</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {lineList.map((line) => (
          <div key={line.id}>
            <h2>{line.text}</h2>
            <Button variant="danger" onClick={() => handleDelete(line.id)}>
              Удалить
            </Button>
            <Button variant="primary" onClick={() => handleEdit(line)}>
              Редактировать
            </Button>
          </div>
        ))}
        <div>
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Предыдущая страница
          </Button>
          <span> Страница {currentPage} из {totalPages}</span>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Следующая страница
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
      <EditLineModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        line={selectedLine}
      />
    </Modal>
  );
};

export default LineList;
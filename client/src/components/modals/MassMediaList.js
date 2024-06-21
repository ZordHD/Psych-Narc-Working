import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { fetchMassMedia, deleteMassMedia } from '../../http/massmediaAPI'; // Импорт функции fetchMassMedia
import EditMassMediaModal from './EditMassMediaModal';

const MassMediaList = ({ show, onHide }) => {
  const [massmediaList, setMassMediaList] = useState([]);
  const [selectedMassMedia, setSelectedMassMedia] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (show) {
      fetchMassMediaForPage(currentPage);
    }
  }, [show, currentPage]);

  const fetchMassMediaForPage = async (page) => {
    const data = await fetchMassMedia();
    setMassMediaList(data); // Предполагается, что limit равен 3
  };

  const handleDelete = async (id) => {
    await deleteMassMedia(id);
    // Обновляем список новостей, удалив удаленную новость
    setMassMediaList(massmediaList.filter((massmedia) => massmedia.id !== id));
  };

  const handleEdit = (massmedia) => {
    setSelectedMassMedia(massmedia);
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
        {massmediaList.map((massmedia) => (
          <div key={massmedia.id}>
            <h2>{massmedia.name}</h2>
            <Button variant="danger" onClick={() => handleDelete(massmedia.id)}>
              Удалить
            </Button>
            <Button variant="primary" onClick={() => handleEdit(massmedia)}>
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
      <EditMassMediaModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        massmedia={selectedMassMedia}
      />
    </Modal>
  );
};

export default MassMediaList;
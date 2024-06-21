import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { fetchServicesRB, deleteServicesRB } from '../../http/servicesRBAPI'; // Импорт функции fetchOtherServices
import EditOtherServicesModal from './EditOtherServicesModal';

const OtherServicesList = ({ show, onHide }) => {
  const [servicesRBList, setOtherServicesList] = useState([]);
  const [selectedOtherServices, setSelectedOtherServices] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (show) {
      fetchOtherServicesForPage(currentPage);
    }
  }, [show, currentPage]);

  const fetchOtherServicesForPage = async (page) => {
    const data = await fetchServicesRB(page);
    setOtherServicesList(data.rows);
    setTotalPages(Math.ceil(data.count / 3)); // Предполагается, что limit равен 3
  };

  const handleDelete = async (id) => {
    await deleteServicesRB(id);
    // Обновляем список новостей, удалив удаленную новость
    setOtherServicesList(servicesRBList.filter((servicesRB) => servicesRB.id !== id));
  };

  const handleEdit = (servicesRB) => {
    setSelectedOtherServices(servicesRB);
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
        {servicesRBList.map((servicesRB) => (
          <div key={servicesRB.id}>
            <h2>{servicesRB.name}</h2>
            <Button variant="danger" onClick={() => handleDelete(servicesRB.id)}>
              Удалить
            </Button>
            <Button variant="primary" onClick={() => handleEdit(servicesRB)}>
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
      <EditOtherServicesModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        servicesRB={selectedOtherServices}
      />
    </Modal>
  );
};

export default OtherServicesList;
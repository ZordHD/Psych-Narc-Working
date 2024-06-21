import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { fetchVacancies, deleteVacancies } from '../../http/vacanciesAPI'; // Импорт функции fetchVacancies
import EditVacanciesModal from './EditVacanciesModal';

const VacanciesList = ({ show, onHide }) => {
  const [vacanciesList, setVacanciesList] = useState([]);
  const [selectedVacancies, setSelectedVacancies] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (show) {
      fetchVacanciesForPage(currentPage);
    }
  }, [show, currentPage]);

  const fetchVacanciesForPage = async (page) => {
    const data = await fetchVacancies();
    setVacanciesList(data); // Предполагается, что limit равен 3
  };

  const handleDelete = async (id) => {
    await deleteVacancies(id);
    // Обновляем список новостей, удалив удаленную новость
    setVacanciesList(vacanciesList.filter((vacancies) => vacancies.id !== id));
  };

  const handleEdit = (vacancies) => {
    setSelectedVacancies(vacancies);
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
        {vacanciesList.map((vacancies) => (
          <div key={vacancies.id}>
            <h2>{vacancies.name}</h2>
            <Button variant="danger" onClick={() => handleDelete(vacancies.id)}>
              Удалить
            </Button>
            <Button variant="primary" onClick={() => handleEdit(vacancies)}>
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
      <EditVacanciesModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        vacancies={selectedVacancies}
      />
    </Modal>
  );
};

export default VacanciesList;
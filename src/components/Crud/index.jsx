import { useRef, useState } from 'react';
import { CrudList } from './CrudList';
import CrudForm from './CrudForm';
import CommanModal from '../modal/CommanModal';

function Crud() {
  const modalRef = useRef();
  const [updateItem, setUpdateItem] = useState(null);
  // const onAddNeweList = () => {
  //   console.log('clicked');
  // };

  const onShowModal = () => {
    setUpdateItem(null);
    modalRef.current.openModal();
  };

  const onCloseModal = () => {
    modalRef.current.closeModal();
  };
  const handleEdit = (currentEditItem) => {
    setUpdateItem(currentEditItem);
  };

  return (
    <>
      <div>
        <h2 className="text-3xl text-center p-4 mb-3 font-semibold">
          React reduc crud web app.
        </h2>
        <button
          type="button"
          className="bg-pink-500 text-white text-sm mx-auto block mb-5"
          onClick={onShowModal}
        >
          Add New User
        </button>

        <div className="text-center">
          <CrudList
            className="inline-block"
            onShowModal={onShowModal}
            onHandleEdit={handleEdit}
          />
        </div>
      </div>
      <CommanModal ref={modalRef}>
        <CrudForm onClick={() => onCloseModal()} updateItem={updateItem} />
      </CommanModal>
    </>
  );
}

export default Crud;

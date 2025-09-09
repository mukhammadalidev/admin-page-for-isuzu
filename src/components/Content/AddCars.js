import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {FaPlus} from "react-icons/fa6";
import CarForm from "../../pages/CarForm";
const AddCars = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type={'primary'} onClick={showModal}>Mashina Qo'shish <FaPlus /></Button>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <CarForm />
            </Modal>
        </>
    );
};
export default AddCars;
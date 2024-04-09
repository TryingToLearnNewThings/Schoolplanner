import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    // For now, just log the values
    console.log("Task:", task);
    console.log("Time:", time);
    console.log("Description:", description);

    // Close the modal
    toggleModal();
  };

  return (
    <>
      <Button onClick={toggleModal}>Add Task</Button>
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control"
              id="task"
              value={task}
              onChange={handleTaskChange}
              placeholder="Enter task"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              type="text"
              className="form-control"
              id="time"
              value={time}
              onChange={handleTimeChange}
              placeholder="Enter time"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter description"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalButton;

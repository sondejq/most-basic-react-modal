import React, { useState } from "react";
import "./App.css";
import Modal from "react-modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)} className="modal-button">Open modal</button>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal title</h2>
        <p>Modal body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;

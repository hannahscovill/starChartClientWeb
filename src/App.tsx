import { useEffect, useRef, useState } from 'react'
import './App.css'

const Modal = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const clickedOutsideOfTartget = (event: Event) => {
    if (isOpen && modalRef.current === event.target) closeModal()
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickedOutsideOfTartget)
    return () => document.removeEventListener('mousedown', clickedOutsideOfTartget)
  }, [isOpen])

  const mdl = <div id="myModal" className="modal" style={{ display: 'block' }} ref={modalRef}>
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>

  return (<>{isOpen ? mdl : null}</>)
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Show Modal</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  )
}

export default App

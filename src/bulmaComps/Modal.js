import React from 'react'
import FaqComponent from '../Faq/FaqComponent'

const Modal = ({active, setActive}) => {

  function closeModal() {
    setActive(false)
  }

  if(!active) {
    return null
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">FAQs</p>
        </header>
        <section className="modal-card-body">
          <div className="content">
            <FaqComponent 
              siteAddress={'payment.growpad.io'}
              grouped={false}
            />
          </div>
        </section>
        <footer className="modal-card-foot flex-end">
          <a href="#faq" className="button" onClick={closeModal}>Go Back</a>
        </footer>
      </div>
    </div>
  )
}

export default Modal

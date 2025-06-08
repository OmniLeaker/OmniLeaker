import React from 'react'
import ReactModal from 'react-modal'


const customStyles_z: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  content: {
    position: 'relative',
    top: '40%',
    transform: 'translateY(-60%)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none'
  }
}


ReactModal.setAppElement('#root')

export interface ModalProps extends ReactModal.Props {
  isOpen: boolean
  title?: string
  onClose(): void
  children: React.ReactNode
}

const Modal_z: React.FC<ModalProps> = ({ isOpen, title, onClose, children, ...props }) => {
  return (
      <ReactModal
          isOpen={isOpen}
          style={customStyles}
          className='sans-serif lh-copy f6 bn br3 w-80 mw7 h-75 h-auto-ns center pa4 pt3 pr3 mh4 mv5 bg-white shadow-4 charcoal'
          shouldCloseOnOverlayClick={true}
          contentLabel="Modal"
          {...props}
      >
          <div className="tr">
          <button
            onClick={onClose}
            className='bn bg-transparent pointer ma0 pa0'
          >
            <svg width="18" className='fill-gray' xmlns="http:
          </button>
          </div>
          { title != null ? <h2 className='f3 fw4 mt0 montserrat lh-title pr4'>{title}</h2> : null }
          <div className='pr3'>
            { children }
          </div>
      </ReactModal>
  )
}

export default Modal

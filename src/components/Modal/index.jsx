import './modal.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export default function Modal({closeModal}){
    return(
        <div className='modal-container'>
            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={18} color='#000'/>
                </button>
            </div>
            <span>https://sujeitoprogramador.com</span>
            <button className='modal-link'>
                https://bit.ly/1234
                <FiClipboard size={20} color='#fff'/>
            </button>
        </div>
    )
}
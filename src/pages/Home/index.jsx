import './home.css'
import {FiLink} from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Modal from '../../components/Modal'
import { useState } from 'react'
import api from '../../services/api'

export default function Home(){
    const [link, setLink] = useState('')
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data)
            setShowModal(true)
            setLink('')

        }catch{
            alert('Ops, parece que algo deu errado!')
            setLink('')
        }
    }

    return (
    <div className="container-home">
        <div className="logo">
            <img src="/slave.png" alt="link logo" />
            <h1>Meu Link</h1>
            <span>Cole seu link para encurtar</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color='#fff'/>
                <input 
                    type="text"
                    placeholder='Cole seu link aqui...'
                    value={link}    
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <button onClick={handleShortLink}>Encurtar Link</button>
        </div>
        <Navbar/>
        
        {showModal && (
            <Modal
                closeModal={ () => setShowModal(false)}
                content={data}
            />
        )}
    </div>
    )
}
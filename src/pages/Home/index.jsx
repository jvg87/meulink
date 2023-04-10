import {FiLink} from 'react-icons/fi'
import './home.css'

export default function Home(){
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
                />
            </div>
            <button>Encurtar Link</button>
        </div>
    </div>
    )
}
//React
import { useNavigate } from 'react-router-dom';

//Images
import failed from './Failed-icon.png';

//CSS
import './Failed.css';

export default function Failed() {
    const navigate = useNavigate()

    return (
        <div className="container-failed">
            <div className="message-failed">
                <img src={failed} alt="failed Icon" />
                <h1>Infelizmente não foi possivel adicionar seu post...</h1>
                <div className="button-failed">
                    <button onClick={() => navigate('/')}>
                        Pagina Inicial
                    </button>
                    <button onClick={() => navigate('/Cadastrar')}>
                        Cadastrar outro post
                    </button>
                </div>
            </div>
        </div>
    )
}
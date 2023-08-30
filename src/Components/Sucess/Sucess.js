//React
import { useNavigate } from 'react-router-dom'

//CSS
import './Sucess.css'

//Icon
import iconSucess from './icon-sucess.jpg'

export default function Sucess() {
    const navigate = useNavigate()

    return (
        <div className="container-sucess">
            <div className="message-sucess">
                <img src={iconSucess} alt="Sucess Icon" />
                <h1>Sua postagem foi adicionada com sucesso!</h1>
                <div className="button-sucess">
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
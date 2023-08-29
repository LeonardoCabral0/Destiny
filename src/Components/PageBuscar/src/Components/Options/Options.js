import './Options.css'

import { Link } from 'react-router-dom'

export default function Options() {
    return (
        <div className="container-nav">
            <nav>
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="/">Buscar</Link></li>
                    <li><Link to="/Cadastrar">Cadastrar</Link></li>
                </ul>
            </nav>
        </div>
    )
}
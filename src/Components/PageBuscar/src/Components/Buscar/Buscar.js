import './Buscar.css'

import lupa from '/home/leonardo/Destiny/destiny/src/lupa.png'

export default function Buscar() {
    return (
        <div className="buscar">
            <input type="text" placeholder="O que deseja buscar?" />
            <button className="button-input">
                <img
                    src={lupa}
                    alt="lupa"
                />
            </button>
        </div>
    )
}
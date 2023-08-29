import './FormButtons.css';

export default function FormButtons({ requestAddPost, refButton }) {
    return (
        <div className="sec-buttons">
            <button>Voltar</button>
            <input className="cadastrar-button" ref={refButton} onClick={requestAddPost} type="submit" value="Cadastrar" />
        </div>
    )
}
import './FormNome.css'

export default function FormNome({ handleAddPost, value, nomeRef }) {
    return (
        <div className="sec-nome">
            <label htmlFor="nome">Nome:</label>
            <input ref={nomeRef} onChange={handleAddPost} value={value} name="nome" id="nome" type="text" placeholder="Nome da localização" />
            {(value.length>50) ? <p className="error">Nome da localização muito grande!</p> : ''}
        </div>
    )
}
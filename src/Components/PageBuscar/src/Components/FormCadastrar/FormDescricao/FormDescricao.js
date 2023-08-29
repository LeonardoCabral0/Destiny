import './FormDescricao.css'

export default function FormDescricao({ handleAddPost, value }) {
    return (
        <div className="sec-descricao">
            <label htmlFor="descricao">Descrição</label>
            <textarea onChange={handleAddPost} value={value} id="descricao" name="descricao"></textarea>
            {(value.length>100) ? <p className="error">Mensagem muito grande!</p> : ''}
        </div>
    )
}
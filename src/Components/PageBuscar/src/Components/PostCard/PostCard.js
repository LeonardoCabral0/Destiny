//CSS
import './PostCard.css'

export default function PostCard({ nome, uf, cidade, referencia, descricao }) {
    return (
        <article>
            <section className="post-card">
                <h1 className="card-titulo">{nome} - {cidade}/{uf}</h1>
                {!referencia || (<h2 className="card-referencia">{referencia}</h2>)}
                <p className="card-descricao">{descricao}</p>
            </section>
        </article>
    )
}
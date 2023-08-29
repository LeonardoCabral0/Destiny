//CSS
import './PostCard.css'

export default function PostCard({ nome, uf, cidade, referencia, descricao, data }) {
    return (
        <article>
            <section className="post-card">
                <h1 className="card-titulo">{nome} <br /> {cidade}/{uf}</h1>
                {!referencia || (<h2 className="card-referencia">{referencia}</h2>)}
                <p className="card-descricao">{descricao}</p>
                <p className="data">{data.slice(0, 10)}</p>
            </section>
        </article>
    )
}
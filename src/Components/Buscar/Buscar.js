import './Buscar.css'

export default function Buscar({ handleChangeSearchValue, value, handleInversePosts }) {
    return (
        <div className="buscar">
            <input onChange={handleChangeSearchValue} type="text" placeholder="O que deseja buscar?" value={value} />
            <select onClick={handleInversePosts}>
                <option value="Decrescente">Decrescente</option>
                <option value="Crescente">Crescente</option>
            </select>
        </div>
    )
}
import './PageCadastrar.css'

import FormCadastrar from "../FormCadastrar/FormCadastrar";
import Header from '../Header/Header';


export default function PageCadastrar() {
    return (
        <>
            <Header />
            <div className="container-cadastrar">
                <FormCadastrar />
            </div>
        </>
    )
}
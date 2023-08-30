//React
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

//CSS
import './FormCadastrar.css'

//Component
import FormButtons from './FormButtons/FormButtons'
import FormDescricao from './FormDescricao/FormDescricao'
import FormLocalizacao from './FormLocalizacao/FormLocalizacao'
import FormNome from './FormNome/FormNome'

export default function FormCadastrar() {
    const buttonRef = useRef(null)
    const formRef = useRef(null)
    const navigate = useNavigate();

    const dataNow = new Date().toISOString()

    const [addPost, setAddPost] = useState(
        {
            nome: '',
            uf: 'AC',
            cidade: '',
            referencia: '',
            descricao: '',
            data:dataNow
        })

    useEffect(() => {
        const error = document.querySelector('.error')
        if (error) {
            buttonRef.current.classList.add("blocked")
            buttonRef.current.classList.remove("cadastrar-button")
        } else {
            buttonRef.current.classList.add("cadastrar-button")
            buttonRef.current.classList.remove("blocked")
        }
    }, [addPost])

    const handleAddPost = e => {
        const { name, value } = e.target
        setAddPost({ ...addPost, [name]: value})
        console.log(addPost)
    }

    const requestAddPost = e => {
        e.preventDefault()
        if (!(addPost.cidade && addPost.nome && addPost.descricao && addPost.referencia)) {
            formRef.current.classList.add('obrigatorio')
            return
        }
        else {
            formRef.current.classList.remove('obrigatorio')
        }
        fetch('https://localhost:44397/Post', {
            method: "POST",
            body: JSON.stringify(addPost),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => { 
                if(response.status === 400){
                    navigate('/Cadastrar/Failed')
                    return
                }
                return response.json()
            })
            

        setAddPost({
            nome: '',
            uf: 'AC',
            cidade: '',
            referencia: '',
            descricao: ''
        })
        navigate('/Cadastrar/Sucess')
    }

    return (
        <form ref={formRef} className="cadastrar-content">
            <FormNome
                handleAddPost={handleAddPost}
                value={addPost.nome}
            />
            <FormLocalizacao
                handleAddPost={handleAddPost}
                valueCidade={addPost.cidade}
                valueReferencia={addPost.referencia}
            />
            <FormDescricao
                handleAddPost={handleAddPost}
                value={addPost.descricao}
            />
            <FormButtons
                refButton={buttonRef}
                requestAddPost={requestAddPost}
            />
        </form>
    )
}
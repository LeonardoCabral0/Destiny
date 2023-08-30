//React
import React from 'react';

//CSS
import './PageBusca.css'

//Components
import Buscar from "../Buscar/Buscar";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

export default class PageBuscar extends React.Component {
    state = {
        allPosts: [],
        searchValue: '',
        order: 'Decrescente'
    }

    handleChangeSearchValue = e => {
        const { value } = e.target
        this.setState({ searchValue: value })
    }

    handleInversePosts = e => {
        const { value } = e.target

        this.setState({ order: value }, () => console.log(this.state.order))
    }

    requestAllPost = () => {
        fetch('https://localhost:44397/Post')
            .then(response => response.json())
            .then(data => {
                
                this.setState({ allPosts: data })
            })
    }

    componentDidMount() {
        this.requestAllPost()
    }

    filtredAllPosts = () => {
        const { allPosts, searchValue } = this.state
        let allFiltredPosts,filtredNome, filtredDescricao, filtredEstado, filtredCidade;

        filtredNome = allPosts.filter(post => {
            return post.nome.toLowerCase().includes(searchValue.toLowerCase())
        })

        filtredDescricao = allPosts.filter(post => {
            return post.descricao.toLowerCase().includes(searchValue.toLowerCase())
        })

        filtredEstado = allPosts.filter(post => {
            return post.uf.toLowerCase().includes(searchValue.toLowerCase())
        })

        filtredCidade = allPosts.filter(post => {
            return post.cidade.toLowerCase().includes(searchValue.toLowerCase())
        })

        allFiltredPosts = new Set([...filtredNome, ...filtredDescricao, ...filtredEstado, ...filtredCidade])

        return [...allFiltredPosts]
        
    }

    render() {
        let { allPosts } = this.state
        const { searchValue, order } = this.state

        if (order !== "Decrescente") {
            allPosts = [...allPosts.reverse()]
        }

        let filtredPosts = !!searchValue ?
            (
                this.filtredAllPosts()
            )
            : allPosts

        return (
            <>
                <Header />
                <Buscar
                    handleInversePosts={this.handleInversePosts}
                    value={searchValue}
                    handleChangeSearchValue={this.handleChangeSearchValue}
                />
                <Posts allPosts={filtredPosts} />
                {filtredPosts.length === 0 && (<h1 className="notfound">Nenhum resultado foi encontrado...</h1>)}
            </>
        )
    }
}
import React, { useState ,useRef, useEffect} from 'react'
import {Form} from 'react-bootstrap'

const CategoriasAdd = ({setCategoria}) => {

    const [search, setSearch] = useState('')
    const searchref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault() 
        setCategoria(categorias=>[search, ...categorias])
        setSearch('')
    }

    useEffect(() => {
        searchref.current.focus()
    }, [])

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
           
            <input
                name="search"
                ref={searchref}
                placeholder="categories"
                value={search}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default CategoriasAdd
import React from 'react'
import Cards from './Cards'

const CategoriasList = ({ categoria }) => {
    return (
        <div>
            <h1>Categorias lista</h1>
            {
                categoria.map((cate, index) => {
                    return (
                        <Cards cate={cate} key={cate-index}/>
                    )
                    
                })
            }
        </div>
    )
}

export default CategoriasList

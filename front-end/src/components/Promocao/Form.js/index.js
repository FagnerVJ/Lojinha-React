import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Form.scss'
import axios from 'axios';
const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
}

const PromocaoForm = () =>{
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

    function onChange(event){
        const { name, value } = event.target;
        setValues({...values, [name]: value})
    }

    function onSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:5000/promotions', values)
        .then((resposta) =>{
            navigate('/');
        })
    }

    return(
        <div>
            <h1>
                Promoção
            </h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promocao-form">
                    <label htmlFor="title">Titulo</label>
                    <input 
                        name="title"
                        id="title" 
                        type="text"
                        onChange={onChange}
                    />

                    <label htmlFor="url">Link</label>
                    <input 
                        name="url"
                        id="url" 
                        type="text"
                        onChange={onChange}
                    />

                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input 
                        name="imageUrl"
                        id="imageUrl" 
                        type="text"
                        onChange={onChange}
                    />
                    <label htmlFor="price">Preço</label>
                    <input 
                        name="price"
                        id="price" 
                        type="number"
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PromocaoForm
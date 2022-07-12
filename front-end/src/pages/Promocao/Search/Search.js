import React, {useEffect, useState}from 'react';
import PromocaoCartao from '../../../components/Promocao/Cartao/Cartao';
import axios from 'axios';


const PaginasPromocaoSearch = () =>{
    const [promotions, setPromotions] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:5000/promotions?_embed=comments')
        .then((res)=>{
          setPromotions(res.data);
          console.log(res.data)
        })
        .catch((err) =>{
          console.log('Erro: ',err)
        })
    },[])
    
    return(
        <div className="App"
        style={{
          maxWidth: 800,
          margin: '30px auto'
        }}
        >
        {promotions.map((promotion) => (
          <PromocaoCartao promocao={promotion}/>
        ))}
        
      </div>
    );
}
export default PaginasPromocaoSearch;
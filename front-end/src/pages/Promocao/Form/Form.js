import React from 'react';
import { useParams } from 'react-router-dom';

const PaginasPromocaoForm = () =>{
    const  {id} = useParams();
    return(
        <div>
            Form
            {id && <div>id:{id}</div>}
        </div>
    )
}
export default PaginasPromocaoForm;
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PaginasPromocaoSearch from './Promocao/Search';
import PaginasPromocaoForm from "./Promocao/Form";
const Root = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/create" element={<PaginasPromocaoForm />}/>
                <Route path="/edit/:id" element={<PaginasPromocaoForm />}/>
                <Route path="/" element={<PaginasPromocaoSearch />} />
                
            </Routes>
        </Router>
    )
}
export default Root;

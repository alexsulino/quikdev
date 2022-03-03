import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Contato from './pages/Contato';

function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/contato" component={Contato} />
            </Routes>        
        </BrowserRouter>
    );
};

export default Routes;
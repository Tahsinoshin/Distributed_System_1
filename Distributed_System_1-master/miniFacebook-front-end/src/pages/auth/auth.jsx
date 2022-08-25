import React from 'react'
import { useState } from 'react'; 

import Login from '../login/Login';
import Register from '../register/Register';

export default function Auth( { setIsAuthenticated , setFullName } ) {
    const [type, setType] = useState('login');    

    if(type === 'login')
        return <Login setType={ setType } setFullName = { setFullName } setIsAuthenticated={ setIsAuthenticated } />;
    else
        return <Register setType={ setType } />;
}
import React, {useContext} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";

const Login = () => {

    const{isAuth,setIsAuth}=useContext(AuthContext)
    const login =event =>{
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
    return (
        <div>
            <h1>Страница авторизации</h1>
            <form onSubmit={login}>
                <label>Логин</label>
                <MyInput type="text" placeholder="Логин"/>
                <label>Пароль</label>
                <MyInput type="password" placeholder="Пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
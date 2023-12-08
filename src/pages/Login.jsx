import React from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
    return (
        <div>
            <h1>Страница авторизации</h1>
            <form>
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
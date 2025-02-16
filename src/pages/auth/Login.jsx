import React, { useState } from "react";
import '../../styles/Login.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Logging in with:", formData.email, formData.password);
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert("Las contraseñas no coinciden");
                return;
            }
            console.log("Registering with:", formData.email, formData.password);
        }
    };

    return (
        <div>
        <Header />
        <div className="background-container">
            <div className="login-register-container">
                <img className="logol" src="/images/logo2.png" alt="Logo" />
                <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
                <form onSubmit={handleSubmit} className="login-register-form">
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="btn-submit">
                        {isLogin ? "Iniciar Sesión" : "Registrarse"}
                    </button>
                </form>
                <p className="toggle-text">
                    {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                    <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                        {isLogin ? " Regístrate" : " Inicia Sesión"}
                    </span>
                </p>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Login
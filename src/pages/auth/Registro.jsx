import React, { useState } from "react"
import '../../styles/Registro.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Registro = () => {
    const [formData, setFormData] = useState({
        tipoDocumento: "",
        id: "",
        primerNombre: "",
        primerApellido: "",
        celular: "",
        nacionalidad: "",
        profesion: "",
        edad: "",
        fechaDisponibilidad: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
    };

    return (
        <div>
            <Header />
            <div className="formulario">
            <div className="form-container">
                <h2>Reservación</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>Tipo de Documento *</label>
                        <select
                            name="tipoDocumento"
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="DNI">Cédula</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Id *</label>
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Primer Nombre *</label>
                        <input
                            type="text"
                            name="primerNombre"
                            value={formData.primerNombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Primer Apellido *</label>
                        <input
                            type="text"
                            name="primerApellido"
                            value={formData.primerApellido}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Celular *</label>
                        <input
                            type="tel"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Nacionalidad *</label>
                        <input
                            type="text"
                            name="nacionalidad"
                            value={formData.nacionalidad}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Profesión *</label>
                        <input
                            type="text"
                            name="profesion"
                            value={formData.profesion}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Edad *</label>
                        <input
                            type="number"
                            name="edad"
                            value={formData.edad}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Consultar Disponibilidad *</label>
                        <input
                            type="date"
                            name="fechaDisponibilidad"
                            value={formData.fechaDisponibilidad}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};



export default Registro
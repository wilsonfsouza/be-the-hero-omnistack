import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, SetTitle] = useState('');
    const [description, SetDescription] = useState('');
    const [value, SetValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push("/profile");
        } catch (err) {
            alert("It wasn't possible to create a new incident, please try again.");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Register new incident</h1>
                    <p>Write a detailed description of your incident to find the hero to solve it.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Incident Title"
                        value={title}
                        onChange={e => SetTitle(e.target.value)}

                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => SetDescription(e.target.value)}

                    />

                    <input
                        placeholder="Amout in BRL"
                        value={value}
                        onChange={e => SetValue(e.target.value)}

                    />


                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
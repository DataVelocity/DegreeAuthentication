import React, { useState } from 'react';
import axios from 'axios';

function VerificationForm() {
    const [formData, setFormData] = useState({ name: '', registrationNumber: '', certificateNumber: '' });
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:1820/api/certificates/verify", formData);
            setResponse(res.data.message);
        } catch (error) {
            setResponse('Error verifying certificate.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="text" name="registrationNumber" placeholder="Registration Number" onChange={handleChange} />
                <input type="text" name="certificateNumber" placeholder="Certificate Number" onChange={handleChange} />
                <button type="submit">Verify</button>
            </form>
            <p>{response}</p>
        </div>
    );
}

export default VerificationForm;

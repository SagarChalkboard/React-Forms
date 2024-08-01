import { useState } from "react";
import "./Form.css"
export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                    placeholder="Enter full name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    id="fullName"
                    name="fullName"
                />
                <br />
                <br />
                <label htmlFor="username">Username</label>
                <input
                    placeholder="Enter username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    placeholder="Enter password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

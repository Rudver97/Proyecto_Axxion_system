import { useState } from "react";

export default function useAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    // Usuario y contraseña fijos
    const USER = "usuario@gmail.com";
    const PASS = "123456";
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === USER && password === PASS) {
            window.location.href = "/home";
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return { handleSubmit, email, setEmail, password, setPassword, error };
}

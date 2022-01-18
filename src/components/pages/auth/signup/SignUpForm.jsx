import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { createNewUser } from '../../../../service/authentication/useAuth';

export default function SignUpForm(){
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        username: "",
        password: "",
        cPassword: ""
    });

    function handleChange(e) {
        setValues({...values, [e.target.id]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(isLoading) return;

        if(!values.username.trim() || !values.password.trim()) {
            setError("Please fill all fields.");
            setIsLoading(false);
            return;
        };
        if(values.password !== values.cPassword){
            setError("Password doesn't match.");
            return;
        }

        handleSignup();
    }

    async function handleSignup() {
        setIsLoading(true);
        setError(false);

        let data = {
            username: values.username.toLowerCase(),
            password: values.password.toLowerCase()
        }
        const status = createNewUser(data);

        if(status){
            window.localStorage.setItem("loggedIn", true);
            window.localStorage.setItem("loggedInUser", JSON.stringify(data));
            navigate("/");
            setIsLoading(false);
        }

    };

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <TextField fullWidth label="Username" onChange={handleChange} value={values.username} id="username" className="py-2" required />
            <TextField fullWidth type="password" label="Password" onChange={handleChange} value={values.password} id="password" className="py-2" required />
            <TextField fullWidth type="password" label="Retype Password" onChange={handleChange} value={values.cPassword} id="cPassword" className="py-2" required />
            <div className='small mb-3'>
                Already a user? <Link to="/auth/login" className='primary_color text-start'>Sign In</Link>
            </div>
            {
                isLoading &&
                <div className="spinner-border primary_color mt-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                error && 
                <div className="alert p-2 alert-danger mt-3" role="alert">
                    {error}
                </div>
            }
            <div className="d-grid d-md-block mt-3">
                <button type='submit' className="btn primary_bg_color_gradient btn_text px-md-5 py-2 text-white text-uppercase">Register</button>
            </div>
        </form>
  );
}
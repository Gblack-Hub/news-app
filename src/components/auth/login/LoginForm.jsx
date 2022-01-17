import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../../service/api';

export default function LoginForm(){
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        username: "testuser",
        password: "test"
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
        postLogin();
    }

    async function postLogin() {
        setIsLoading(true);
        setError(false);

        try {
            const data = await postData(`${process.env.REACT_APP_API_URL}users/authenticate`, values)
            window.localStorage.setItem("userData", JSON.stringify(data));
            window.localStorage.setItem("loggedIn", true);
            navigate("/");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return (
        <form
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <TextField fullWidth label="Email/Username" onChange={handleChange} value={values.username} className="py-2" id="username" required />
            <TextField fullWidth label="Password" onChange={handleChange} value={values.password} className="py-2" id="password" required />
            <div className='d-flex justify-content-between small'>
                <Link to="/auth/register" className='primary_color text-start'>Register here</Link>
            </div>
            {
                isLoading &&
                <div className="spinner-border primary_color mt-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                error && 
                <div className="alert p-3 alert-danger mt-3" role="alert">
                    {error}
                </div>
            }
            <div className="d-grid d-md-block mt-4">
                <button type='submit' disabled={isLoading} className="btn primary_bg_color btn_text px-md-5 py-2 text-white text-uppercase">Log in</button>
            </div>
        </form>
  );
}
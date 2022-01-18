import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { checkUser } from '../../../service/authentication/useAuth';

export default function LoginForm(){
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        username: "test",
        password: "test"
    });

    function handleChange(e) {
        setValues({...values, [e.target.id]: e.target.value.toLowerCase()})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(isLoading) return;
        if(!values.username.trim() || !values.password.trim()) {
            setError("Please fill all fields.");
            return;
        };
        handleLogin();
    }

    async function handleLogin() {
        setIsLoading(true);
        setError("");

        const status = checkUser(values);

        if(!status.status){
            setIsLoading(false);
            setError(status.message);
            return;
        }
        
        if(status.status){
            setIsLoading(false);
            navigate("/");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <TextField fullWidth label="Username" onChange={handleChange} value={values.username} className="py-2" id="username" required />
            <TextField fullWidth label="Password" onChange={handleChange} value={values.password} className="py-2" id="password" required />
            <div className='small mb-3'>
                Not registered yet? <Link to="/auth/register" className='primary_color text-start'>Create account here</Link>
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
                <button type='submit' disabled={isLoading} className="btn primary_bg_color_gradient btn_text px-md-5 py-2 text-white text-uppercase">Log in</button>
            </div>
        </form>
  );
}
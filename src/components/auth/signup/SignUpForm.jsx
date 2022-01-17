import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export default function SignUpForm(){

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form
            component="form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <TextField fullWidth label="Email/Username" className="py-2" id="fullWidth" required />
            <TextField fullWidth label="Password" className="py-2" id="fullWidth" required />
            <div className='d-flex justify-content-between small mb-5'>
                <Link to="/" className='primary_color text-start'>Already a user?</Link>
                <Link to="/" className='primary_color text-end'>Login</Link>
            </div>
            <div className="d-grid d-md-block">
                <button type='submit' className="btn primary_bg_color btn_text px-md-5 py-2 text-white text-uppercase">Log in</button>
            </div>
        </form>
  );
}
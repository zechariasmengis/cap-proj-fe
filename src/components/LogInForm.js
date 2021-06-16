import { useState } from 'react'
import '../css/SignUpForm.css'
import {Link} from 'react-router-dom'

function LogInForm(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{ 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { username, password } })
        })
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                console.error(result.error);
            } else {
                localStorage.setItem('token', result.token);
                props.handleLogin();
            }
        });
    };

    return (
        <div className="card">
            <div className="card-content">
            <div className="card-title">
                <h2>LOGIN</h2>
                <div className="underline-title"></div>
            </div>
            <form method="post" className="form" onSubmit={handleSubmit}>
        {/* ////////// USERNAME /////////// */}
                    <label for="username">
                        Username
                    </label>
                    <input 
                        className='form-content'
                        type='text' 
                        name='username'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <div className="form-border"></div>
        {/* ////////// PASSWORD /////////// */}
                    <label for="password">Password
                    </label>
                    <input 
                        className='form-content'
                        type='password' 
                        name='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="form-border"></div>

                <input className="submit-btn" type="submit" name="submit" value="Log In" />
                <Link to="/signup" className="signup"> Create an account.</Link>
            </form>
            </div>
        </div>
    )
}

export default LogInForm;
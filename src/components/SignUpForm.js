import { useState } from 'react'
import '../css/SignUpForm.css'
import {Link} from 'react-router-dom'

function SignUpForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:{ 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { email, username, password } })
        })
        .then(response => response.json())
        .then(result => console.log(result))
    };

    return (
     <div className="card">
        <div className="card-content">
          <div className="card-title">
            <h2>SIGNUP</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form" onSubmit={handleSubmit}>
    {/* ////////// EMAIL /////////// */}
                <label for="email">
                    Email
                </label>
                <input
                    className='form-content'
                    type='email' 
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className="form-border"></div>
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

            <input className="submit-btn" type="submit" name="submit" value="Create Account" />
            <Link to="/login" className="signup"> Already have an account? Log-in.</Link>
          </form>
        </div>
     </div>
    )
}

export default SignUpForm;
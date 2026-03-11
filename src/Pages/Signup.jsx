import { Link } from 'react-router-dom';
import CreateAccountImg from '../assets/CreateAccount.jpg';
import './signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <img src={CreateAccountImg} alt="" className="signup-page__img" />
      <div className="signup-page__form-wrap">
        <div className="signup-page__head">
          <h2>Create account</h2>
          <p>Sign up to book campus resources</p>
        </div>
        <form className="signup-page__form">
          <label htmlFor="signup-username">Username</label>
          <input type="text" id="signup-username" className="signup-page__input" />
          <label htmlFor="signup-email">Email</label>
          <input type="email" id="signup-email" className="signup-page__input" />
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" className="signup-page__input" />
          <button type="submit" className="signup-page__button">
            Create account
          </button>
        </form>
        <p className="signup-page__footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

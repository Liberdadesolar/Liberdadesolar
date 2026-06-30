import React, { useState } from 'react';
import styled from 'styled-components';
import { pb } from '../lib/pb';

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || '/dashboard';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await pb.collection('users').authWithPassword(email, password);
      window.location.href = REDIRECT_URL;
    } catch (err) {
      setError('E-mail ou senha incorretos. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      {/* raios geometricos (elemento da marca) */}
      <svg className="sun-rays" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g fill="none" stroke="#f44a00" strokeWidth={1.2} strokeLinecap="round">
          <line x1="50" y1="50" x2="50" y2="2" />
          <line x1="50" y1="50" x2="82" y2="8" />
          <line x1="50" y1="50" x2="98" y2="50" />
          <line x1="50" y1="50" x2="82" y2="92" />
          <line x1="50" y1="50" x2="18" y2="8" />
          <line x1="50" y1="50" x2="2" y2="50" />
          <line x1="50" y1="50" x2="18" y2="92" />
          <line x1="50" y1="50" x2="50" y2="98" />
        </g>
      </svg>

      <div className="form-container">
        <div className="brand">
          {/* Logo Liberdade Solar */}
          <svg className="brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 675.87 75.56" role="img" aria-label="Liberdade Solar">
            <path fill="#f44a00" d="M140.87,62.53v12.51h-61.88v-10.3c0-2.35-.96-4.48-2.51-6.03-1.55-1.55-3.69-2.51-6.04-2.51-4.7,0-8.54,3.84-8.54,8.54v10.3H0v-12.51l44.25,3.12c1.04.08,1.97-.6,2.25-1.61,0-.01,0-.03,0-.04.27-1.01-.21-2.06-1.14-2.52L5.49,42.06l7.9-13.68,36.77,24.83c.86.58,2.01.46,2.75-.27l.03-.03c.74-.74.85-1.89.26-2.75L28.38,13.39l13.67-7.9,19.43,39.88c.46.94,1.51,1.41,2.52,1.14,0,0,.02-.01.03-.01,1.01-.27,1.69-1.21,1.61-2.25L62.53,0h15.8l-3.12,44.25c-.07,1.04.61,1.97,1.61,2.25.01,0,.03.01.03.01,1.01.27,2.06-.2,2.52-1.14L98.81,5.49l13.68,7.9-24.82,36.77c-.58.86-.46,2.01.27,2.75l.03.03c.74.74,1.89.85,2.75.27l36.78-24.83,7.9,13.68-39.9,19.42c-.94.46-1.41,1.51-1.14,2.52,0,.01.01.03.01.04.27,1.01,1.21,1.68,2.25,1.61l44.25-3.12Z" />
            <path fill="#f44a00" d="M506.99,74.44v-8.65h16.2c3.27,0,5.46-.89,5.46-3.18,0-2.78-1.76-3.8-5.37-3.8h-4.7c-7.38,0-12.03-4.94-12.03-11.36s5.23-11.35,12.17-11.35h17.83v8.58h-16.55c-2.24,0-3.37,1.57-3.37,3.14,0,1.28,1.49,2.68,3.43,2.68h5.15c9.1,0,13.29,4.84,13.29,11.41s-4.63,12.53-13.8,12.53h-17.68Z" />
            <path fill="#f44a00" d="M562.79,35.05c-12.38,0-21.11,8.8-21.11,20.14s8.73,20.37,21.11,20.37,21.11-8.81,21.11-20.37-8.73-20.14-21.11-20.14ZM562.79,66.08c-6.41,0-11.04-4.7-11.04-10.89s4.63-10.66,11.04-10.66,11.04,4.69,11.04,10.66-4.63,10.89-11.04,10.89Z" />
            <rect fill="#f44a00" x="589.42" y="23.07" width="10.67" height="51.37" />
            <path fill="#f44a00" d="M636.11,36.09v6.4c-2.92-4.69-7.54-7.46-12.83-7.46-9.92,0-17.75,8.66-17.75,20.14s7.83,20.37,17.75,20.37c5.3,0,9.93-2.76,12.83-7.53v6.41h10.37v-38.34h-10.37ZM636.11,59.58c-1.79,3.44-5.67,6.34-10.29,6.34-5.45,0-9.85-4.39-9.85-10.74s4.4-10.59,9.85-10.59c4.63,0,8.43,2.92,10.29,6.34v8.64Z" />
            <path fill="#f44a00" d="M663.41,50.79v23.65h-10.67v-38.35h10.67v6.19c2.76-4.25,7.09-7.23,12.46-7.23v11.78c-5.29,0-10.22,2.09-12.46,3.95" />
            <rect fill="#f44a00" x="161.53" y="23.06" width="10.67" height="51.37" />
            <polygon fill="#f44a00" points="179.48 74.43 177.95 36.09 190.14 36.09 188.61 74.43 179.48 74.43" />
            <path fill="#f44a00" d="M219.11,35.04c-5.22,0-9.85,2.75-12.83,7.46v-19.44h-10.36v51.37h10.36v-6.49c2.92,4.78,7.54,7.61,12.83,7.61h0c9.92,0,17.83-8.64,17.83-20.36s-7.91-20.14-17.83-20.14ZM216.57,65.92c-4.63,0-8.43-2.91-10.29-6.41v-8.43c1.79-3.51,5.67-6.49,10.29-6.49,5.51,0,9.92,4.4,9.92,10.59s-4.39,10.74-9.92,10.74Z" />
            <path fill="#f44a00" d="M261.41,66.59c-5.89,0-10.15-3.73-10.89-9.92h30.52c0-10.96-6.87-21.63-19.77-21.63-11.34,0-20.07,8.87-20.07,19.99,0,11.78,8.58,20.51,20.21,20.51,9.17,0,17.07-5.59,19.09-14.54h-9.47c-1.56,3.51-5.51,5.59-9.62,5.59ZM261.33,43.62c4.93,0,8.28,2.68,9.47,7.09h-19.69c1.42-4.4,5.29-7.09,10.22-7.09Z" />
            <path fill="#f44a00" d="M296.91,50.78v23.65h-10.66v-38.34h10.67v6.19c2.76-4.25,7.09-7.23,12.46-7.23v11.78c-5.29,0-10.22,2.09-12.46,3.95" />
            <path fill="#f44a00" d="M340.77,23.06v19.42c-2.92-4.69-7.54-7.46-12.83-7.46-9.92,0-17.75,8.66-17.75,20.14s7.83,20.37,17.75,20.37c5.3,0,9.93-2.76,12.83-7.53v6.42h10.37V23.06h-10.37ZM340.77,59.57c-1.79,3.44-5.67,6.34-10.29,6.34-5.45,0-9.85-4.39-9.85-10.74s4.4-10.59,9.85-10.59c4.63,0,8.43,2.92,10.29,6.34v8.64Z" />
            <path fill="#f44a00" d="M387.02,36.09v6.39c-2.92-4.69-7.54-7.46-12.83-7.46-9.92,0-17.75,8.66-17.75,20.14s7.83,20.37,17.75,20.37c5.3,0,9.93-2.76,12.83-7.53v6.42h10.37v-38.34h-10.37ZM387.02,59.57c-1.79,3.44-5.67,6.34-10.29,6.34-5.45,0-9.85-4.39-9.85-10.74s4.4-10.59,9.85-10.59c4.63,0,8.43,2.92,10.29,6.34v8.64Z" />
            <path fill="#f44a00" d="M433.27,23.06v19.42c-2.92-4.69-7.54-7.46-12.83-7.46-9.92,0-17.75,8.66-17.75,20.14s7.83,20.37,17.75,20.37c5.3,0,9.93-2.76,12.83-7.53v6.42h10.37V23.06h-10.37ZM433.27,59.57c-1.79,3.44-5.67,6.34-10.29,6.34-5.45,0-9.85-4.39-9.85-10.74s4.4-10.59,9.85-10.59c4.63,0,8.43,2.92,10.29,6.34v8.64Z" />
            <path fill="#f44a00" d="M469.14,66.59c-5.89,0-10.15-3.73-10.89-9.92h30.52c0-10.96-6.87-21.63-19.77-21.63-11.34,0-20.07,8.87-20.07,19.99,0,11.78,8.58,20.51,20.21,20.51,9.17,0,17.07-5.59,19.09-14.54h-9.47c-1.56,3.51-5.51,5.59-9.62,5.59ZM469.07,43.62c4.93,0,8.28,2.68,9.47,7.09h-19.69c1.42-4.4,5.29-7.09,10.22-7.09Z" />
            <path fill="#f44a00" d="M189.79,28.31c0,3.18-2.58,5.75-5.75,5.75s-5.75-2.58-5.75-5.75,2.57-5.75,5.75-5.75,5.75,2.58,5.75,5.75" />
          </svg>
          <p className="brand-tagline">o sol nasce pra todos.</p>
        </div>

        <h1 className="title">Que bom te ver de novo</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="email-input">E-mail</label>
            <input
              type="email"
              className="input"
              id="email-input"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password-input">Senha</label>
            <input
              type="password"
              className="input"
              id="password-input"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="page-link">
            <a className="page-link-label">Esqueceu a senha?</a>
          </p>
          <button className="form-btn" type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          <p className="error-msg">{error}</p>
        </form>

        <p className="sign-up-label">
          Ainda não tem conta?<a className="sign-up-link">Cadastre-se</a>
        </p>

        <div className="divider">ou</div>

        <div className="buttons-container">
          <button type="button" className="social-btn">
            <span className="social-icon">
              <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
            </span>
            Entrar com Google
          </button>
          <button type="button" className="social-btn">
            <span className="social-icon">
              <svg width="17" height="17" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000">
                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
              </svg>
            </span>
            Entrar com Apple
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  --ls-orange: #f44a00;
  --ls-orange-dark: #d63f00;
  --ls-ink: #2b2118;
  --ls-muted: #8a7f76;
  --ls-border: #ecdfd5;

  .sun-rays {
    position: fixed;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 560px;
    height: 560px;
    pointer-events: none;
    opacity: 0.28;
    z-index: 0;
  }

  .form-container {
    position: relative;
    z-index: 1;
    width: 360px;
    max-width: 100%;
    background-color: #fff;
    box-shadow: rgba(244, 74, 0, 0.1) 0px 18px 40px, rgba(0, 0, 0, 0.06) 0px 5px 15px;
    border-radius: 18px;
    padding: 30px 30px 26px;
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 22px;
  }

  .brand-logo { width: 215px; height: auto; }

  .brand-tagline {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--ls-muted);
    letter-spacing: 0.2px;
  }

  .title {
    text-align: center;
    margin: 0 0 22px 0;
    font-size: 21px;
    font-weight: 700;
    color: var(--ls-ink);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 10px;
  }

  .field { display: flex; flex-direction: column; gap: 6px; }

  .label {
    font-size: 12px;
    font-weight: 600;
    color: var(--ls-ink);
    padding-left: 4px;
  }

  .input {
    width: 100%;
    border-radius: 12px;
    border: 1.5px solid var(--ls-border);
    outline: 0;
    padding: 13px 15px;
    font-family: inherit;
    font-size: 14px;
    color: var(--ls-ink);
    background: #fffaf6;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  .input::placeholder { color: #c4b8ad; }

  .input:focus {
    border-color: var(--ls-orange);
    box-shadow: 0 0 0 3px rgba(244, 74, 0, 0.12);
    background: #fff;
  }

  .page-link { margin: 2px 0 6px; text-align: right; }

  .page-link-label {
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: var(--ls-muted);
    text-decoration: none;
  }

  .page-link-label:hover { color: var(--ls-orange); }

  .form-btn {
    padding: 13px 15px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    border-radius: 12px;
    border: 0;
    outline: 0;
    background: var(--ls-orange);
    color: #fff;
    cursor: pointer;
    box-shadow: rgba(244, 74, 0, 0.3) 0px 6px 16px;
    transition: background 0.15s, transform 0.05s;
  }

  .form-btn:hover { background: var(--ls-orange-dark); }
  .form-btn:active { transform: translateY(1px); box-shadow: none; }
  .form-btn:disabled { opacity: 0.7; cursor: not-allowed; }

  .error-msg {
    color: #d62828;
    font-size: 12.5px;
    text-align: center;
    min-height: 1.2em;
    margin: 8px 0 0;
    font-weight: 500;
  }

  .sign-up-label {
    margin: 14px 0 0;
    text-align: center;
    font-size: 13px;
    color: var(--ls-muted);
  }

  .sign-up-link {
    margin-left: 4px;
    font-weight: 700;
    color: var(--ls-orange);
    cursor: pointer;
    text-decoration: none;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 22px 0 16px;
    color: #c4b8ad;
    font-size: 12px;
  }

  .divider::before, .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--ls-border);
  }

  .buttons-container { display: flex; flex-direction: column; gap: 11px; }

  .social-btn {
    border-radius: 12px;
    padding: 12px 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 13.5px;
    font-weight: 600;
    gap: 9px;
    background: #fff;
    border: 1.5px solid var(--ls-border);
    color: var(--ls-ink);
    transition: border-color 0.15s, background 0.15s;
  }

  .social-btn:hover { border-color: #d8c8bb; background: #fffaf6; }
  .social-icon { display: flex; }
`;

export default LoginForm;

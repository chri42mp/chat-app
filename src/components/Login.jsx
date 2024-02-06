import "../style.scss";

export default function Login() {
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <span>Opret bruger</span>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>Har du ikke en bruger? Login</p>
      </div>
    </div>
  );
}

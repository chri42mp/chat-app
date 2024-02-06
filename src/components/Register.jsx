import "../style.scss";
import Add from "/add-avatar.png";

export default function Register() {
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <span>Opret bruger</span>
        <form>
          <input type="text" placeholder="Navn" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <input
            style={{ display: "none" }}
            type="file"
            placeholder="file"
            id="file"
          />
          <label htmlFor="file">
            <img width={"30px"} src={Add} alt="" />
            <span>Tilføj en avatar</span>
          </label>
          <button>Tilmed dig</button>
        </form>
        <p>Har du ikke en bruger? Login</p>
      </div>
    </div>
  );
}

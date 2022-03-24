/* eslint-disable array-callback-return */
import "./assets/App.css";
import { Home } from "./pages/Home";
import { Navegacion } from "./pages/Navigation";
import { Cabecera } from "./pages/Header";
import { Aside } from "./pages/Aside";
import { Footer } from "./pages/Footer";

function Contenido() {
  return (
    <>
      <Home />
    </>
  );
}

export default function App() {
  return (
    <div className="Container">
      <Cabecera />
      <div className="Container-body border-gradient border-gradient-purple">
        <div className="Container-body-top">
          <Navegacion />
        </div>
        <div className="Container-body-under">
          <main className="Container-content">
            <Contenido />
          </main>
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

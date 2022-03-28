import { Outlet, Link } from "react-router-dom";
import { Cabecera } from "./Header";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import listado from "./Listado";

export default function Layout() {
  return (
    <>
      <div className="Container">
        <Cabecera />
        <div className="Container-body border-gradient border-gradient-purple">
          <div className="Container-body-top">
            <nav className="Container-nav">
              {listado.map((item, index) => (
                <label key={index}>
                  <Link to={item.path}>{item.titulo}</Link>
                </label>
              ))}
            </nav>
          </div>
          <div className="Container-body-under">
            <main className="Container-content">
              <Outlet />
            </main>
          </div>
          <Aside />
        </div>
        <Footer />
      </div>
    </>
  );
}

export function Navegacion() {
  const enlaces = [
    { id: "#sobremi", text: "Sobre mi" },
    { id: "#miproyecto", text: "Mi Proyecto" },
    { id: "#contacto", text: "Contáctame" },
  ];

  return (
    <>
      <nav className="Container-nav">
        {enlaces.map((item, i) => {
          return (
            <a href={item.id} key={i}>
              {item.text}
            </a>
          );
        })}
      </nav>
    </>
  );
}

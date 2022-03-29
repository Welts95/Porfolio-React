export function Footer() {
  return (
    <>
      <footer className="Container-footer">
        Página web creada con React
        <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/icons/react.svg"}
            alt="Logo React"
            className="SocialIcons React-logo"
          />
        </a>
      </footer>
    </>
  );
}

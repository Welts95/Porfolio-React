import "../assets/Icons.css";

export function Aside() {
  const icons = [
    {
      id: "github",
      source: "/icons/github.svg",
      alt: "Icono de Github",
      link: "https://github.com/Welts95",
    },
    {
      id: "linkedin",
      source: "/icons/linkedin.svg",
      alt: "Icono de Linkedin",
      link: "",
    },
    {
      id: "facebook",
      source: "/icons/facebook.svg",
      alt: "Icono de Facebook",
      link: "",
    },
    {
      id: "instagram",
      source: "/icons/instagram.svg",
      alt: "Icono de Instagram",
      link: "https://www.instagram.com/gh.designs.slot/",
    },
    {
      id: "Dropbox",
      source: "/icons/dropbox.svg",
      alt: "Icono de Dropbox",
      link: "",
    },
    {
      id: "googleMas",
      source: "/icons/google-plus.svg",
      alt: "Icono de Google Mas",
      link: "",
    },
  ];
  return (
    <>
      <aside className="Container-ads">
        {icons.map((item, i) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer">
              <img
                id={item.id}
                className="SocialIcons"
                src={process.env.PUBLIC_URL + item.source}
                key={i}
                alt={item.alt}
              />
            </a>
          );
        })}
      </aside>
    </>
  );
}

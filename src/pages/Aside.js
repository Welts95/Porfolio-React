import "../assets/Icons.css";

export function Aside() {
  const icons = [
    {
      id: "instagram",
      link: "/icons/instagram.svg",
      alt: "Icono de Instagram",
    },

    {
      id: "facebook",
      link: "/icons/facebook.svg",
      alt: "Icono de Facebook",
    },
    {
      id: "github",
      link: "/icons/github.svg",
      alt: "Icono de Github",
    },
    {
      id: "linkedin",
      link: "/icons/linkedin.svg",
      alt: "Icono de Linkedin",
    },

    {
      id: "Dropbox",
      link: "/icons/dropbox.svg",
      alt: "Icono de Dropbox",
    },
    {
      id: "googleMas",
      link: "/icons/google-plus.svg",
      alt: "Icono de Google Mas",
    },
  ];
  return (
    <>
      <aside className="Container-ads">
        {icons.map((item, i) => {
          return (
            <img
              id={item.id}
              className="SocialIcons"
              src={process.env.PUBLIC_URL + item.link}
              key={i}
              alt={item.alt}
            >
              {item.text}
            </img>
          );
        })}
      </aside>
    </>
  );
}
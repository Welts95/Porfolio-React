export default function Contacto() {
  const FORM_ENDPOINT = "";
  const handleSubmit = () => {};

  return (
    <>
      <h1>Contacto</h1>
      <h2>
        Si tienes cualquier pregunta o sugerencia no dudes en enviarme un
        mensaje y te responderé antes de que te des cuenta!
      </h2>
      <div className="ContactForm-Container">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="ContactForm">
            <label>Nombre </label>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              className="ContactForm-input"
              required
            />
          </div>
          <div className="ContactForm">
            <label>Email </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="ContactForm-input"
              required
            />
          </div>
          <div className="ContactForm">
            <label>Mensaje </label>
            <textarea
              placeholder="Mensaje"
              name="message"
              className="ContactForm-input message"
              required
            />
          </div>
          <div className="ContactForm">
            <button className="ContactForm Button" type="submit">
              Envia un mensaje
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

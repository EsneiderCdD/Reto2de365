import { useState } from "react"; // Importamos useState para manejar el estado

function App() {
  // Definimos los estados iniciales para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Manejo de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target; // Extraemos el nombre y el valor del campo
    setFormData({ ...formData, [name]: value }); // Actualizamos el estado dinámicamente
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario
    console.log("Datos ingresados:", formData); // Verificamos los datos en consola
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Crea una contraseña"
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default App;

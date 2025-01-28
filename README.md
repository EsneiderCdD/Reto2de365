# Formulario de Registro en React

Este proyecto tiene como objetivo construir un formulario de registro en React que valide la información ingresada antes de enviarla. Este reto permite reforzar conocimientos sobre formularios, validaciones básicas, manejo de estado y eventos en React.

## Estructura del Proyecto

El proyecto consta de los siguientes componentes principales:
- **Formulario de Registro**: Incluye campos para el nombre, correo electrónico y contraseña.
- **Validaciones**: Reglas básicas para garantizar que los datos ingresados sean correctos antes de enviarse.
- **Mensajes de Error**: Informan al usuario cuando un campo no cumple con las validaciones.

---

## ¿Qué aprendimos?

### 1. Manejo de Formularios en React
- **useState**: Para manejar el estado de los campos del formulario.
- **onChange**: Para capturar los cambios en los campos de entrada y actualizar el estado correspondiente.
- **onSubmit**: Para manejar el evento de envío del formulario y realizar las validaciones antes de procesar los datos.

### 2. Validaciones Básicas
- Verificar que los campos no estén vacíos usando `trim()`.
- Validar el formato de un correo electrónico con una expresión regular.
- Comprobar la longitud mínima de la contraseña.

### 3. Manejo de Errores
- **Estado de errores (`errors`)**:
  - Permite almacenar mensajes de error asociados a cada campo.
  - Se muestra en el formulario como texto en color rojo cuando ocurre un error.
- **Prevención del envío**:
  - Si las validaciones fallan, evitamos el envío utilizando `e.preventDefault()` en el manejador del formulario.

---

## Código Principal

```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registro exitoso:\n" + JSON.stringify(formData, null, 2));
      setFormData({ name: "", email: "", password: "" }); // Limpiar formulario
      setErrors({});
    }
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
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default App;
```

---

## Preguntas Frecuentes (FAQs)

### 1. ¿Cómo funciona la validación del correo?
Usamos una expresión regular `/\S+@\S+\.\S+/` para verificar que el correo tenga un formato válido como "usuario@dominio.com".

### 2. ¿Qué pasa si intento enviar el formulario con campos vacíos?
Se mostrará un mensaje de error en rojo debajo del campo correspondiente, y el formulario no se enviará.

### 3. ¿Cómo limpio los datos del formulario después de enviarlo?
Utilizamos `setFormData` con valores vacíos para restablecer los campos una vez que el formulario se ha enviado correctamente.

---

## Conocimientos Extra

### Librerías útiles para formularios en proyectos futuros:
1. **Formik**: Simplifica la gestión de formularios y validaciones en React.
2. **React Hook Form**: Ofrece una forma optimizada de manejar formularios con soporte para validaciones.
3. **Yup**: Una librería popular para definir esquemas de validación.

### Ideas de exploración futura:
- Incorporar validaciones en tiempo real (mientras el usuario escribe).
- Manejo de formularios más complejos con múltiples pasos.
- Integrar APIs externas para guardar los datos ingresados.

---

## Próximos Pasos

Si ya dominas este reto, considera explorar validaciones avanzadas o crear un formulario de registro más completo. ¡Continúa practicando y mejorando tus habilidades! 🚀

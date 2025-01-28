import { useState } from "react"; //importamos useState

function App() { 
  const [formData, setFormData] = useState({ //inicializamos formData
    name: "", //inicializamos name en una cadena vacia
    email: "", //inicializamos email en una cadena vacia
    password: "", //inicializamos password en una cadena vacia
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

  {/* EJERCICIO 1 */}
  {/*Creamos los estados para almacenar entradas y errores */}
  const [nameExercise1, setNameExercise1] = useState("");
  const [errorExercise1, setErrorExercise1] = useState("");

  {/* Creamos el manejador de cambios para el input */}
  const handleChangeExercise1 = (e) => {
    setNameExercise1(e.target.value);
    if (errorExercise1) setErrorExercise1("");
  };

  {/* Creamos el manejador de envio del formulario */}
  const handleSubmitExercise1 = (e) => {
    e.preventDefault();
    if (nameExercise1.trim() === "") {
      setErrorExercise1("El nombre no puede estar vacío"); 
      return; 
    }
    alert (`¡Registro exitoso! Nombre ingresado: ${nameExercise1} `);
    setNameExercise1("");
  }

  {/* EJERCICIO 2 */}
  {/* Creamos los estados para almacenar entradas y errores */}
  const [emailExercise2, setEmailExercise2] = useState("");
  const [errorEmailExercise2, setErrorEmailExercise2] = useState (""); 

  {/* Creamos el manejador de cambios para el input */}
  const handleChangeExercise2 = (e) => { 
    setEmailExercise2(e.target.value);
    if (errorEmailExercise2) setErrorEmailExercise2("");
  };

  {/* Creamos el manejador de envio del formulario */}
  const handleSubmitEmailExercise2 = (e) => {
    e.preventDefault();

  //Expresion regular para valida correos electronicos
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   {/*
    /^ y $
    ^: Marca el incio de la cadena
    $: Marca el final de la cadena

    [^\s@]+
    [ ]: Define el conjunto de caracteres que se aceptan
     ^ dentro de []: niega el conjunto, es decir permite todo excepto lo que sigue.
     \s: Espacios en blanco.
     @: Caracter @
     +: Repetir 1 o mas veces

     En conjunto, [^\s@]+ significa:
     "Cualquier combinación de caracteres, excepto espacios y el símbolo arroba, repetida una o más veces."

     ejemplos invalidos: 
     @gmail.com
     usuario@dominio
     usuario@@dominio.com
     usuario dominio.com

    */}

  if (!emailExercise2.trim()) {
    setErrorEmailExercise2("El correo no puede estar vacío");
    return;
  }

  if (!emailRegex.test(emailExercise2)) {
    setErrorEmailExercise2("El correo ingresado no es valido");
    return;
  }

  alert (`¡Correo valido! Correo ingresado: ${emailExercise2}`);
  setEmailExercise2("");
  };

  {/* EJERCICIO 3 */}

  {/* Creamos los estados para almacenar entradas y errores */}

  const [passwordExercise3, setPasswordExercise3] = useState ("");
  const [errorPasswordExercise3, setErrorPasswordExercise3] = useState("");

  {/* Crear la funcion para manejar cambios en el campo de la contraseña */}

  const handleChangeExercise3 = (e) => {
    setPasswordExercise3(e.target.value);

    //limpiar el error si ya existe uno
    if (errorPasswordExercise3) {
      setErrorExercise3("");
    }
  };

  {/* Creamos el manejador de envio del formulario */}

  const handleSubmitExercise3 = (e) => {
    e.preventDefault();

    if (passwordExercise3.length < 6) {
      setErrorPasswordExercise3("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert ("Contraseña enviada con exito");
    setPasswordExercise3("");  // Limpiamos el campo después de un envío exitoso
  };

  {/* EJERCICIO 4 */}

  const [nameExercise4, setNameExercise4] = useState("");
  const [emailExercise4, setEmailExercise4] = useState("");
  const [errorCombinedExercise4, setErrorCombinedExercise4] = useState("");
  
  const handleChangeNameExercise4 = (e) => {
    setNameExercise4(e.target.value);
    
    if (errorCombinedExercise4) {
      setErrorCombinedExercise4("");
    }
  };

  const handleChangeEmailExercise4 = (e) => {
    setEmailExercise4(e.target.value);

    if (errorCombinedExercise4) {
      setErrorCombinedExercise4("");
    }
  };

  //Crear funcion para manejo de envios

  const handleSubmitExercise4 = (e) => {
    e.preventDefault();

    let errors = [];

    //validar nombre

    if (!nameExercise4.trim()) {
      errors.push("El nombre es obligatorio");
    }
    {/*El método .push pertenece a los arrays en JavaScript y se utiliza para agregar un nuevo elemento al final del array. */}

    //validar correo  

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailExercise4)) {
      errors.push("El correo ingresado no es valido");
    }

    //Si hay errores, mostramos un mensaje combinado
    
    {/* En este ejercicio, después de llenar el array errors con mensajes de error, necesitamos mostrarlos como un único mensaje en la interfaz. */}
    if (errors.length > 0) {
      setErrorCombinedExercise4(errors.join(" "));
      return;
  }
 
  //Si no hay errores, mostramos un mensaje de exito

  alert ("Formulario enviado con exito");
  setNameExercise4("");
  setEmailExercise4("");
};

  {/* En este ejemplko usamo un array errors para acumular errores de validacion
    
  si errors tiene elementos, los unimos con join (" ") y los mostramos en el estado errorCombinedExercise4 
  */}
  

     

  

  return (
    <div>
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

      <div> {/*EJERCICIO 1 */}
        <h2>Ejercicio 1: Validacion de Nombre</h2>
        <form onSubmit = {handleSubmitExercise1}>
          <div style={{marginBottom:"20px"}}>
            <label htmlForm="nameExercise1">Nombre:</label>
            <input
              type="text"
              id="nameExercise1"
              value={nameExercise1}
              onChange={handleChangeExercise1}
              placeholder="Ingresa tu nombre"
            />
            {errorExercise1 && <p style={{color:"red" }}>{errorExercise1}</p>
            }
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div> {/*EJERCICIO 2 */}
        <h2>Ejercicio 2: Validacion de Correo</h2>
        <form onSubmit={handleSubmitEmailExercise2}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="emailExercise2">Correo:</label>
            <input 
              type="text"
              id="emailExercise2"
              name="emailExercise2"
              value={emailExercise2}
              onChange={handleChangeExercise2}
              placeholder="Ingresa tu correo"
            />
            {errorEmailExercise2 && <p style={{ color: "red" }}>{errorEmailExercise2}</p>}

          </div>
          <button type="submit">Validar Correo</button>
        </form>

      </div>

      <div> {/*EJERCICIO 3 */}
        <h2>Ejercicio 3: Validacion de Contraseña</h2>

        <div style={{ maxWidth: "400px", margin: "50px auto", }}>
          <label htmlFor ="passwordExercise3">Contraseña</label>
          <input
            type="password"
            value={passwordExercise3}
            onChange={handleChangeExercise3}
            placeholder="Contraseña"
          />
        

          {errorPasswordExercise3 && <p style={{ color: "red" }}>{errorPasswordExercise3}</p>}

          <button onClick={handleSubmitExercise3}>Enviar Contraseña</button>
          </div>
      </div>


      <div> {/*EJERCICIO 4 */}
        <h2>Ejercicio 4: Validacion de Nombre y Correo</h2>
        <input 
          type="text"
          value={nameExercise4}
          onChange={handleChangeNameExercise4}
          placeholder="Ingresa tu nombre"
        />

        <input
          type="text"
          value={emailExercise4}
          onChange={handleChangeEmailExercise4}
          placeholder="Ingresa tu correo"
        />

        {errorCombinedExercise4 && <p style={{ color: "red" }}>{errorCombinedExercise4}</p>}

        <button onClick={handleSubmitExercise4}>Enviar</button>
      </div>



      
 
    </div>
  );
}

export default App;

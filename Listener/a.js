    // JavaScript utilizando funciones flechas y let

    // Selección del botón por su ID
    let button = document.getElementById("myButton");

    // Función flecha que se ejecuta cuando se hace clic en el botón
    let handleClick = () => {
      alert("¡Haz hecho clic!");
    };

    // Agregar el evento click al botón
    button.addEventListener("click", handleClick);
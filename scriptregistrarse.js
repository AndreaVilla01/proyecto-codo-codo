document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const nombreUsuario = document.getElementById("nombre-usuario");
        const contrasenia = document.getElementById("contrasenia");
        const email = document.getElementById("email");
        
        // Validar que el Nombre no esté vacío
        
        if (nombre.value === "") {
            alert("El nombre no puede estar vacío.");
            nombre.focus()
            return false;
        }

        // Validar que el Nombre no tenga números
        if (nombre.value.match(/\d/)) {
            alert("El nombre no debe contener números.");
            nombre.focus()
            return false;
        }

        // Validar que el Apellido no esté vacío
        if (apellido.value === "") {
            alert("El Apellido no puede estar vacío.");
            apellido.focus()
            return false;
        }
        // Validar que el Apellido no tenga números
        if (apellido.value.match(/\d/)) {
            alert("El Apellido no debe contener números.");
            apellido.focus()
            return false;
        }

        if (nombreUsuario.value === "") {
            alert("Nombre de Usuario no puede estar vacío.");
            nombreUsuario.focus();
            return;
        }

        if (contrasenia.value === "") {
            alert("Contraseña no puede estar vacío.");
            contrasenia.focus();
            return;
        }

        
        // Validar formato de correo electrónico
        const emailValue = email.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailRegex.test(emailValue)) {
            alert("El correo electrónico no es válido.");
            email.focus();
            return false;
        }
        
        // Si todos los campos son válidos, puedes enviar el formulario aquí
        form.submit();

    });
});


const pantalla = document.querySelector('.Pantalla')
const botones = document.querySelectorAll('.btn')

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c" ) {
            pantalla.textContent = "0"
            return;
        }

        if (boton.id === "restar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";
                return;
            }
            else {
                pantalla.textContent = pantalla.textContent.slice(0,-1);
                return;
            }
        }

        if (boton.id === "masMenos") {
            // Verificamos si el primer carácter es un signo negativo
            if (pantalla.textContent.startsWith("-")) {
                // Si ya tiene un signo negativo, lo quitamos
                pantalla.textContent = pantalla.textContent.slice(1);
            } else {
                // Si no tiene signo negativo, lo agregamos
                if (pantalla.textContent !== "0") {
                    pantalla.textContent = "-" + pantalla.textContent;
                }
            }
            return;
        }

        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch {
                pantalla.textContent = "Error"
            }
           
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado;
        }
        else {
            pantalla.textContent += botonApretado;
        }
    })
})
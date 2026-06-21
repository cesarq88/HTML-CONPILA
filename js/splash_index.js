document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");
    const login = document.getElementById("login-screen");
    const loginForm = document.getElementById('loginForm');
    const passIcon = document.querySelector(".conpila_password-icon");

    // Función auxiliar para pausar la ejecución cronológicamente
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Lógica secuencial para la transición de pantallas
    if (splash && login) {
        (async () => {
            // 1. Mostrar el splash screen durante 4 segundos
            await delay(4000); 
            
            // 2. Transición de salida para desvanecer el splash
            splash.style.transition = "opacity 0.6s ease";
            splash.style.opacity = "0";
            
            // 3. Esperar que termine de desvanecer para quitarlo del flujo
            await delay(600); 
            splash.style.display = "none";
            
            /*// 4. Inyectar el login de manera invisible para preparar su transición
            login.style.display = "flex"; 
            login.style.transition = "opacity 0.6s ease";
            
            // 5. Micro-delay para forzar el redibujado (reflow) del navegador
            await delay(50); 
            login.style.opacity = "1";
            */
        })();
    }

    // Funcionalidad para Alternar Mostrar/Ocultar Contraseña
    if (passIcon) {
        passIcon.addEventListener("click", function() {
            // Encuentra el input que está en el mismo grupo de contraseña
            const container = this.closest(".conpila_password-container");
            const input = container ? container.querySelector("input") : null;
            
            if (input) {
                const isPassword = input.type === "password";
                input.type = isPassword ? "text" : "password";
                
                // Intercambiar clases de FontAwesome para el diseño del ojo
                this.classList.toggle("fa-regular", !isPassword);
                this.classList.toggle("fa-solid", isPassword);
            }
        });
    }

    // Control de envío del formulario
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simula el redireccionamiento exitoso tras validar campos del HTML5
            window.location.href = loginForm.getAttribute("action");
        });
    }
});

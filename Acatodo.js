// Este código maneja el inicio de sesión existente
document.getElementById('login-button').addEventListener('click', function() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if(!email || !password){
        alert('Por favor ingrese su correo y contraseña');
        return;
    }
    
    if (email.endsWith("@pcpuma.acatlan.unam.mx")) {
        // Redirige a la página principal
        window.location.href = "index.html";
    } else {
        alert("El correo electrónico no es válido. Por favor, ingrese un correo pcpuma.");
    }
});

// Manejador de eventos para el botón de registro, si existe en la misma página
if (document.getElementById('register-button')) {
    document.getElementById('register-button').addEventListener('click', function() {
        window.location.href = "registro.html";
    });
}
   
//REPORTES
function confirmarEnvio() {
    if (confirm('¿Estás seguro de enviar el reporte?')) {
        var form = document.getElementById('form-reporte');
        // Aquí podrías enviar el formulario, por ejemplo:
        // form.submit();
        // Por ahora, solo mostraremos un mensaje
        alert('Reporte enviado.');
    }
}

// ENCARGOS


// Asegúrate de que los IDs sean correctos y existan en el HTML
const products = [
    { name: "Cuadernos 2x1", image: "img/encargos/2x1.jpg", price: "55" },
    { name: "Regla T", image: "img/encargos/reglat.jpg", price: "100" },
    // Añade más productos aquí si es necesario
];

let currentIndex = 0;

function updatePromotion(product) {
    const productImage = document.getElementById("promoImage");
    const productName = document.getElementById("promoName");
    const productPrice = document.getElementById("promoPrice");

    productImage.src = product.image;
    productName.innerText = product.name;
    productPrice.innerText = `Precio: $${product.price}`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % products.length;
    updatePromotion(products[currentIndex]);
}, 5000);

// Inicia con la primera promoción al cargar la página
window.onload = () => {
    updatePromotion(products[currentIndex]);
};


// pumabus

document.addEventListener('DOMContentLoaded', function() {
    const timers = [
        { id: 'timer1', seconds: 5 * 60 },
        { id: 'timer2', seconds: 12 * 60 },
        { id: 'timer3', seconds: 22 * 60 },
        { id: 'timer4', seconds: 30 * 60 + 1 } // Un poco más de 30 minutos
    ];

    timers.forEach(timer => {
        setInterval(() => {
            if (timer.seconds > 0) {
                timer.seconds--;
                const minutes = Math.floor(timer.seconds / 60);
                const seconds = timer.seconds % 60;
                const timeString = `${minutes} min ${seconds} sec`;
                document.getElementById(timer.id).textContent = `Hora de salida: en ${timeString}`;
            } else {
                document.getElementById(timer.id).textContent = "El bus ha salido.";
            }
        }, 1000);
    });
});


//acafe
document.getElementById('btnPrecios').addEventListener('click', function() {
    var cafeteriaSeleccionada = document.getElementById('cafeterias').value;
    switch (cafeteriaSeleccionada) {
        case 'mi_cuais':
            window.open('paginas/precios_mi_cuais.html', '_blank');
            break;
        case 'cafe8':
            window.open('paginas/precios_cafe8.html', '_blank');
            break;
        case 'kiosko4':
            window.open('paginas/precios_kiosko4.html', '_blank');
            break;
        case 'cafeteria_teatro':
            window.open('paginas/precios_cafeteria_teatro.html', '_blank');
            break;
        case 'cafeteria_libreria':
            window.open('paginas/precios_cafeteria_libreria.html', '_blank');
            break;
        case 'unisnacks':
            window.open('paginas/precios_unisnacks.html', '_blank');
            break;
        default:
            alert('Por favor, selecciona una cafetería.');
    }
});

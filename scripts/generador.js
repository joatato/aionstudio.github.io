// Rutas de las imágenes
const imageBannerPublicidad = [
    "ORIGINAL 3.png",
    "ORIGINAL 6.png",
    "ORIGINAL 8.png",
    "ORIGINAL 9.png",
];
const imageModel3D = [
    "5.png",
    "Ceramica.png",
    "JARRON PARA LAPICES 1.jpg",
    "JARRON PARA LAPICES ILUMINADO 2.png",
    "JARRON PARA LAPICES.2010.png",
    "PLIEGUE PARA FOTOS.2806.png",
    "TERMO 2.2239.png",
    "TERMO CON QUARZO - BOTELLAS ACOSTADAS.png",
    "TERMO CON QUARZO 4 botellas.jpg",
    "TERMO CON QUARZO JARRON - bajo contraste.png",
    "TERMO CON QUARZO.2178.png",
];
const videoAnimacion = [
    "2.mp4",
    "pantalon.mp4",
    "pantalon2.mp4",
    "pantalon3.mp4",
    "tela1.mp4",
    "tela2.mp4"
];
const modelado3DBanner = ["15.png", "HECHO PARA TI.305.png", "LAMINA 1 sin sombra 2.png", "LAMINA 2.png", "LAMINA ZEN CORE 2.png"];
const diseñoInterioresExteriores = [
    "CURSO JACOBSEN 1 - (2000x2000).png",
    "CURSO JACOBSEN 1 (clay).jpg",
    "ESCALERA ESPIRAL 1.727.png",
    "ESCALERA ESPIRAL 1.739.png",
    "ESCALERA RECTA 2.jpg",
    "ESCALERA RECTA 2b.png",
    "INTERIOR NICO.580.png",
    "INTERIOR NICO.581.png",
    "INTERIOR NICO.583.png"
];

const fotoMontages = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg"
]

var imagePaths = [];

function filterImages(category) {
    switch (category) {
        case "animaciones":
            imagePaths = videoAnimacion;
            break;
        case "modelado3D":
            imagePaths = imageModel3D;
            break;
        case "bannerPublicidad":
            imagePaths = imageBannerPublicidad;
            break;
        case "modelado3DBanner":
            imagePaths = modelado3DBanner;
            break;
        case "fotoMontages":
            imagePaths = fotoMontages;
            break;
        case "diseñoInterioresExteriores":
            imagePaths = diseñoInterioresExteriores;
            break;
        default:
            imagePaths = imageModel3D;
            break;
    }
    generatePortfolioItems(category);
}

// Función para generar elementos de imagen dinámicamente
function generatePortfolioItems(category) {
    const portfolioContainer = document.getElementById("portfolioContainer");

    // Limpiar el contenedor antes de agregar nuevas imágenes
    portfolioContainer.innerHTML = "";

    imagePaths.forEach((path) => {
        let html = ``
        if (category == "animaciones") {
            html = `
                <div class="portfolio-item">
                    <video src="./files/proyects/${category}/${path}" alt="3D Design" autoplay loop>
                </div>
            `;
        } else {
            html = `
                <div class="portfolio-item">
                    <img src="./files/proyects/${category}/${path}" alt="3D Design">
                </div>
            `;
        }

        // Crear un elemento div temporal para convertir la cadena HTML en nodos DOM
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // Agregar los nodos DOM al contenedor de portafolio
        portfolioContainer.appendChild(tempDiv.firstElementChild);
    });
}

// Llama a la función para generar las imágenes
filterImages("modelado3D")




//LECTURA DE BOTONES CON EVENTLISTENER xd todo porque no funciona llamar a una funcion
// onclick="filterImages()"
document.getElementById('animaciones').addEventListener('click', function () {
    filterImages('animaciones');
});
document.getElementById('bannerPublicidad').addEventListener('click', function () {
    filterImages('bannerPublicidad');
});
document.getElementById('diseñoInterioresExteriores').addEventListener('click', function () {
    filterImages('diseñoInterioresExteriores');
});
document.getElementById('fotoMontages').addEventListener('click', function () {
    filterImages('fotoMontages');
});
document.getElementById('modelado3D').addEventListener('click', function () {
    filterImages('modelado3D');
});
document.getElementById('modelado3DBanner').addEventListener('click', function () {
    filterImages('modelado3DBanner');
});

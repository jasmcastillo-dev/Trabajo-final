document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".projects-scroll");

    // Solo ejecutar el scroll si estamos en la página principal
    if (scrollContainer) {
        //  Clonar los elementos para hacer loop
        const cards = Array.from(scrollContainer.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.classList.add("clone");
            scrollContainer.appendChild(clone);
        });

        // Scroll horizontal con rueda del mouse
        scrollContainer.addEventListener("wheel", e => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY * 3; // velocidad aumentada
        });

        //  Loop infinito
        function loopScroll() {
            const maxScroll = scrollContainer.scrollWidth / 2;

            if (scrollContainer.scrollLeft >= maxScroll) {
                scrollContainer.scrollLeft = 0;
            }

            requestAnimationFrame(loopScroll);
        }
        loopScroll();
    }

    // PROYECTOS

    const projectsData = {
        "yo-mujer": {
            title: "Sitio web Yo Mujer",
            category: "Rediseño sitio web • UX/UI • 2025",
            mainImage: "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/yomujer1.webp",
            info: {
                cliente: "Yo Mujer",
                rol: "UX/UI Designer",
                year: "2025",
                tools: "Figma, Maze, HotJar, Notion"
            },
            content: {
                intro: "El rediseño del sitio web Yo Mujer representó un desafío integral de experiencia de usuario y diseño visual. El objetivo principal fue modernizar la plataforma manteniendo la esencia y los valores de la marca, mientras se mejoraba significativamente la usabilidad y el engagement de las usuarias.",
                sections: [
                    {
                        title: "El desafío",
                        text: "El sitio web existente presentaba varios problemas críticos que afectaban la experiencia del usuario:",
                        list: [
                            "Navegación confusa que dificultaba encontrar contenido relevante.",
                            "Diseño visual desactualizado que no reflejaba la identidad moderna de la marca.",
                            "Baja accesibilidad en dispositivos móviles.",
                            "Tiempos de carga lentos que aumentaban la tasa de rebote."
                        ]
                    },
                    {
                        title: "Proceso de investigación",
                        text: "Realizamos una fase exhaustiva de investigación que incluyó:",
                        list: [
                            "Entrevistas con usuarias actuales para entender sus necesidades y puntos de dolor.",
                            "Análisis de métricas y comportamiento de usuario en el sitio actual.",
                            "Benchmarking con sitios similares en la industria.",
                            "Creación de personas y user journeys."
                        ]
                    },
                    {
                        title: "La solución",
                        text: "Desarrollamos un diseño completamente renovado que prioriza:",
                        list: [
                            "<strong>Navegación intuitiva:</strong> Restructuración del menú y categorías basada en las necesidades reales de las usuarias.",
                            
                            "<strong>Identidad visual moderna:</strong> Paleta de colores renovada, tipografía mejorada y sistema de diseño coherente.",
                            "<strong>Contenido organizado y emocional:</strong> Estructura de información nueva con mayor conexión emocional para las usuarias."
                        ]
                    },
                ]
            },
            gallery: [
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/yomujer2.webp",
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/yomujer3.webp"
            ],
            navigation: {
                prev: null,
                next: "medigo"
            }
        },
        "medigo": {
            title: "Plataforma MediGo!",
            category: "Diseño de plataforma medica • Product Design • 2024",
            mainImage: "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Medigo1.webp",
            info: {
                cliente: "4ID science",
                rol: "UX/UI Designer",
                year: "2024",
                tools: "Figma, Maze, Notion"
            },
            content: {
                intro: "Plataforma digital orientada a mejorar el diagnóstico de enfermedades genéticas con IA. Este proyecto fue ganador del 1er lugar en la categoría de diseño UX/UI de los Premios DD 2024 y de la Mención Honrosa en los Premios Chile Diseño 2025.",
                sections: [
                    {
                        title: "El desafío",
                        text: "Solo hay 37 genetistas en Chile lo que no da abasto para responder entorno a la necesidad de un examen genético  de un paciente y su posterior análisis. Por ende se vuelve necesario generar un sistema rápido y eficiente que tenga como foco el usuario médico no especializado.",
                    },
                    {
                        title: "Proceso de diseño",
                        text: "",
                        list: [
                            "Investigamos el funcionamiento de otra plataformas y como estas se ven, gráficamos el viaje del usuario actual para entender sus dolores y los encuestamos para entender su posición frente a la utilización de la IA.",
                            "Una vez realizada la investigación comenzamos a gráficar la experiencia a partir de mapas de navegación de la plataforma y diagramas de flujo del funcionamiento de la IA como asistente del médico. Este proceso fue iterativo junto con el cliente y luego con los usuarios.",
                            "Generamos propuestas de diseño y dimos vida a la plataforma con un look simple enfocado en el usuario. ",
                        ]
                    },
                    {
                        title: "Resultados",
                        text: "Plataforma digital integrada con Inteligencia artificial que permite a médicos consultar la realización del examen y su posterior análisis. Este proyecto permitió a nuestros clientes ganar un fondo para el desarrollo de la plataforma.",
                    
                    }
                ]
            },
            gallery: [
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/medigo2.webp",
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/medigo3.webp",
            ],
            navigation: {
                prev: "yo-mujer",
                next: "paginas-amarillas"
            }
        },
        "paginas-amarillas": {
            title: "App Páginas Amarillas",
            category: "Diseño Móvil • UX/UI • 2024",
            mainImage: "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Pamarillas2.webp",
            info: {
                cliente: "Proyecto Independiente",
                rol: "UX/UI Designer",
                year: "2024",
                tools: "Figma, Maze"
            },
            content: {
                intro: "Páginas amarillas nace de la necesidad de centralizar y digitalizar el proceso de búsqueda de diferentes servicios domésticos en Chile. Inspirado en la eficacia de las antiguas Guías impresas, el proyecto simplifica el proceso de encontrar profesionales confiables, ofreciendo una plataforma única que combina la rapidez tradicional con la tecnología actual.",
                sections: [
                    {
                        title: "El desafío",
                        text: "La búsqueda de servicios domésticos confiables es actualmente un proceso fragmentado y de baja confianza:",
                        list: [
                            "Falta de una base de datos centralizada y específica para servicios domésticos.",
                            "Dificultad para encontrar profesionales confiables.",
                            "Escasa información sobre cómo resolver problemas domésticos comunes.",
                        ]
                    },
                    {
                        title: "Proceso de diseño",
                        text: " A través de User Flows mapeamos la experiencia ideal del usuario y estructuramos la aplicación con Wireframes, transformando los requisitos en una arquitectura de navegación funcional y accesible.",
                        list: []
                    },
                    {
                        title: "Resultados",
                        text: "Páginas Amarillas es una plataforma digital centralizada que ofrece una base de datos verificada y un sistema de puntuación detallado para generar confianza y simplificar la búsqueda de servicios.",
                    }
                ]
            },
            gallery: [
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/pamarillas.webp",
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Pamarillas1.webp"
            ],
            navigation: {
                prev: "medigo",
                next: "rojo-carmin"
            }
        },
        "rojo-carmin": {
            title: "Libro Rojo Carmín",
            category: "Diseño Editorial • Identidad Visual • 2024",
            mainImage: "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Rcarmin.webp",
            info: {
                cliente: "Proyecto Independiente",
                rol: "Diseñador Editorial",
                year: "2024",
                tools: "InDesign, Illustrator, Photoshop"
            },
            content: {
                intro: "Rojo Carmín es un libro tipo photobook que explora la historia y simbolismo del labial rojo e invita al lector a reflexionar sobre como el contexto puede cambiar la connotación de un simple objeto. ",
                sections: [
                    {
                        title: "El desafío",
                        text: "Este proyecto fue tanto escrito como diseñado y luego encuadernado por mi, fue un proceso largo que requirío tiempo desde la elección del tema y la conceptualización hasta la impresión y encuadernación.",
                        
                    },
                    {
                        title: "La solución",
                        text: "Desarrollé un diseño minimalista pero impactante. La portada utiliza un color gris claro con un cuño de bajo relieve para el nombre, con tipografía sans serif pero elegante. El diseño interior privilegia el espacio en blanco y las imagenes, se utiliza una tipografía amigable para lectura en negro, rojo para destacados. Como acabado final las páginas están teñidas de rojo en el borde. ",
                    },

                ]
            },
            gallery: [
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Rojo.webp",
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Rojo1.webp",
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Rojo2.webp",
                "https://raw.githubusercontent.com/jasmcastillo-dev/Trabajo-final/main/Img/Rojo3.webp"
            ],
            navigation: {
                prev: "paginas-amarillas",
                next: null
            }
        }
    };

    // ============================================
    // CARGAR PROYECTO DINÁMICAMENTE
    // ============================================
    
    // Verificar si estamos en una página de proyecto
    const projectDetailContainer = document.querySelector('.proyecto-detalle');
    
    if (projectDetailContainer) {
        // Obtener el ID del proyecto desde la URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        
        if (projectId && projectsData[projectId]) {
            loadProject(projectId);
        } else {
            // Redirigir al inicio si no se encuentra el proyecto
            window.location.href = 'index.html';
        }
    }

    function loadProject(projectId) {
        const project = projectsData[projectId];
        
        // Actualizar título de la página
        document.title = `${project.title} - Jasmín Castillo`;
        
        // Hero
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-category').textContent = project.category;
        
        // Imagen principal
        const mainImage = document.getElementById('project-main-image');
        mainImage.src = project.mainImage;
        mainImage.alt = project.title;
        
        // Información del proyecto
        document.getElementById('project-cliente').textContent = project.info.cliente;
        document.getElementById('project-rol').textContent = project.info.rol;
        document.getElementById('project-year').textContent = project.info.year;
        document.getElementById('project-tools').textContent = project.info.tools;
        
        // Contenido
        const contentContainer = document.getElementById('project-content');
        let contentHTML = `<h2>Sobre el proyecto</h2><p>${project.content.intro}</p>`;
        
        project.content.sections.forEach(section => {
            contentHTML += `<h3>${section.title}</h3>`;
            if (section.text) {
                contentHTML += `<p>${section.text}</p>`;
            }
            if (section.list && section.list.length > 0) {
                contentHTML += '<ul>';
                section.list.forEach(item => {
                    contentHTML += `<li>${item}</li>`;
                });
                contentHTML += '</ul>';
            }
        });
        
        contentContainer.innerHTML = contentHTML;
        
        // Galería
        const galleryContainer = document.getElementById('project-gallery');
        galleryContainer.innerHTML = '';
        project.gallery.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = project.title;
            img.loading = 'lazy';
            galleryContainer.appendChild(img);
        });
        
        // Navegación
        const navContainer = document.getElementById('project-navigation');
        let navHTML = '';
        
        if (project.navigation.prev) {
            const prevProject = projectsData[project.navigation.prev];
            navHTML += `
                <a href="proyecto.html?id=${project.navigation.prev}" class="nav-proyecto">
                    <span>← Anterior</span>
                    <h3>${prevProject.title}</h3>
                </a>
            `;
        } else {
            navHTML += `
                <a href="index.html#proyectos" class="nav-proyecto">
                    <span>← Volver</span>
                    <h3>Todos los proyectos</h3>
                </a>
            `;
        }
        
        if (project.navigation.next) {
            const nextProject = projectsData[project.navigation.next];
            navHTML += `
                <a href="proyecto.html?id=${project.navigation.next}" class="nav-proyecto">
                    <span>Siguiente →</span>
                    <h3>${nextProject.title}</h3>
                </a>
            `;
        } else {
            navHTML += `
                <a href="index.html#proyectos" class="nav-proyecto">
                    <span>Ver todos</span>
                    <h3>Todos los proyectos</h3>
                </a>
            `;
        }
        
        navContainer.innerHTML = navHTML;
    }
});

/* =============== ANIMACIÓN SCROLL: FADE UP =============== */

function setupScrollAnimations() {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) return;

    // Fallback si el navegador no soporta IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // solo una vez
                }
            });
        },
        {
            threshold: 0.15 // 15% visible para activar
        }
    );

    elements.forEach(el => observer.observe(el));
}

// No choca con tu otro DOMContentLoaded, se suman
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

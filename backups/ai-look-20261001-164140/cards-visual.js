(() => {

    const categorias = {
        "Procesadores": {
            imagen: "img/productos/core-ultra-7-265k.webp",
            descripcion: "Rendimiento, núcleos, generaciones y precios."
        },

        "Tarjetas Madre": {
            imagen: "img/productos/b850-gaming-plus-wifi.png",
            descripcion: "Chipsets, formatos, características y compatibilidad."
        },

        "Memoria RAM": {
            imagen: "img/productos/fury-beast-ddr5-32gb.png",
            descripcion: "Capacidad, velocidad, latencias y compatibilidad."
        },

        "SSD NVMe": {
            imagen: "img/productos/990-pro-2tb.jpg",
            descripcion: "Velocidad, capacidad y relación precio-rendimiento."
        },

        "Discos Duros HDD": {
            imagen: "img/productos/barracuda-2tb.jpg",
            descripcion: "Capacidad, velocidad, caché y almacenamiento."
        },

        "Tarjetas Gráficas": {
            imagen: "img/productos/geforce-rtx-5070.jpg",
            descripcion: "Gaming, memoria gráfica, tecnologías y consumo."
        },

        "Fuentes de Poder": {
            imagen: "img/productos/rm850x.png",
            descripcion: "Potencia, eficiencia, certificación y modularidad."
        },

        "Refrigeración CPU": {
            imagen: "img/productos/hyper-212-halo-black.png",
            descripcion: "Temperaturas, ruido, rendimiento y compatibilidad."
        },

        "Gabinetes": {
            imagen: "img/productos/h5-flow.png",
            descripcion: "Flujo de aire, espacio interno y diseño."
        },

        "Tarjetas Wi-Fi": {
            imagen: "img/productos/archer-txe75e.jpg",
            descripcion: "Wi-Fi 6E, Bluetooth, velocidad y conectividad."
        },

        "Monitores": {
            imagen: "img/productos/odyssey-g5-27.jpg",
            descripcion: "Resolución, frecuencia, panel y respuesta."
        },

        "Teclados": {
            imagen: "img/productos/g-pro-x-tkl-rapid.png",
            descripcion: "Formato, switches, iluminación y respuesta."
        },

        "Mouse": {
            imagen: "img/productos/g502-x.png",
            descripcion: "Sensor, DPI, botones, peso y ergonomía."
        },

        "Audífonos": {
            imagen: "img/productos/pro-x-2-lightspeed.png",
            descripcion: "Audio, conectividad, micrófono y comodidad."
        },

        "Bocinas": {
            imagen: "img/productos/z407.jpg",
            descripcion: "Potencia, configuración, conectividad y sonido."
        },

        "Webcams": {
            imagen: "img/productos/brio-500.png",
            descripcion: "Resolución, FPS, enfoque y calidad de imagen."
        },

        "Micrófonos": {
            imagen: "img/productos/yeti.png",
            descripcion: "Calidad de captura, patrones y conectividad."
        },

        "Impresoras": {
            imagen: "img/productos/smart-tank-580.jpg",
            descripcion: "Impresión, conectividad, rendimiento y costo."
        },

        "Almacenamiento Externo": {
            imagen: "img/productos/t7-shield-2tb.webp",
            descripcion: "Velocidad, resistencia, capacidad y portabilidad."
        },

        "UPS": {
            imagen: "img/productos/back-ups-pro-br1500ms2.jpg",
            descripcion: "Potencia, autonomía, protección y regulación."
        }
    };


    const emojis = new Set([
        "🧠", "🖥️", "⌨️", "🖱️", "🎧", "🎙️",
        "🔊", "📷", "🖨️", "💾", "🔌", "📡",
        "🧊", "⚡", "🗄️", "💿", "🎮"
    ]);


    function encontrarTarjeta(elemento) {

        let actual = elemento;

        for (let i = 0; i < 8 && actual; i++) {

            const texto = actual.textContent || "";

            if (
                texto.includes("Ver comparación") &&
                (
                    texto.includes("COMPLETO") ||
                    texto.includes("INTERNO") ||
                    texto.includes("EXTERNO")
                )
            ) {
                return actual;
            }

            actual = actual.parentElement;
        }

        return null;
    }


    function decorarTarjetas() {

        Object.entries(categorias).forEach(
            ([nombre, datos]) => {

                const candidatos = [
                    ...document.querySelectorAll(
                        "h1, h2, h3, h4, strong"
                    )
                ];

                const titulo = candidatos.find(
                    el => el.textContent.trim() === nombre
                );

                if (!titulo) return;

                const tarjeta = encontrarTarjeta(titulo);

                if (!tarjeta) return;

                if (
                    tarjeta.classList.contains(
                        "hl-category-card"
                    )
                ) {
                    return;
                }

                tarjeta.classList.add(
                    "hl-category-card"
                );

                tarjeta.style.setProperty(
                    "--hl-category-image",
                    `url("${datos.imagen}")`
                );


                const visual =
                    document.createElement("div");

                visual.className =
                    "hl-category-visual";

                visual.innerHTML = `
                    <img
                        src="${datos.imagen}"
                        alt="${nombre}"
                        loading="lazy"
                    >
                `;


                const top = tarjeta.firstElementChild;

                if (top && top.nextSibling) {

                    tarjeta.insertBefore(
                        visual,
                        top.nextSibling
                    );

                } else {

                    tarjeta.prepend(
                        visual
                    );
                }


                /* Ocultar emojis o iconos antiguos */
                tarjeta
                    .querySelectorAll(
                        "span, div, p"
                    )
                    .forEach(el => {

                        const txt =
                            el.textContent.trim();

                        if (
                            emojis.has(txt)
                        ) {
                            el.classList.add(
                                "hl-old-icon"
                            );
                        }
                    });


                /* Descripción adicional */
                if (
                    !tarjeta.querySelector(
                        ".hl-category-description"
                    )
                ) {

                    const desc =
                        document.createElement("p");

                    desc.className =
                        "hl-category-description";

                    desc.textContent =
                        datos.descripcion;

                    titulo.parentNode.insertBefore(
                        desc,
                        titulo.nextSibling
                    );
                }


                /* Mejorar enlace inferior */
                const ver = [
                    ...tarjeta.querySelectorAll("*")
                ].find(
                    el =>
                        el.children.length === 0 &&
                        el.textContent
                            .trim()
                            .toLowerCase() ===
                        "ver comparación"
                );

                if (ver) {

                    ver.classList.add(
                        "hl-card-cta-text"
                    );
                }
            }
        );
    }


    function iniciar() {

        decorarTarjetas();

        const observer =
            new MutationObserver(
                decorarTarjetas
            );

        observer.observe(
            document.body,
            {
                childList: true,
                subtree: true
            }
        );
    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            iniciar
        );

    } else {

        iniciar();
    }

})();

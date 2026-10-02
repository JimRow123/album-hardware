(() => {
    const categorias = {
        "Procesadores": {
            desc: "Rendimiento, núcleos, generaciones y eficiencia.",
            code: "CPU",
            icon: "cpu"
        },
        "Tarjetas Madre": {
            desc: "Chipset, expansión, conectividad y compatibilidad.",
            code: "MB",
            icon: "motherboard"
        },
        "Memoria RAM": {
            desc: "Capacidad, velocidad y respuesta multitarea.",
            code: "RAM",
            icon: "ram"
        },
        "SSD NVMe": {
            desc: "Velocidad extrema, capacidad y almacenamiento moderno.",
            code: "SSD",
            icon: "ssd"
        },
        "Discos Duros HDD": {
            desc: "Gran capacidad para respaldo y almacenamiento masivo.",
            code: "HDD",
            icon: "disk"
        },
        "Tarjetas Gráficas": {
            desc: "Potencia gráfica para juegos, diseño y renderizado.",
            code: "GPU",
            icon: "gpu"
        },
        "Fuentes de Poder": {
            desc: "Energía estable, certificación y eficiencia eléctrica.",
            code: "PSU",
            icon: "power"
        },
        "Refrigeración CPU": {
            desc: "Temperatura, flujo de aire y disipación térmica.",
            code: "COOL",
            icon: "cooler"
        },
        "Gabinetes": {
            desc: "Diseño, espacio interno y flujo de aire.",
            code: "CASE",
            icon: "case"
        },
        "Tarjetas Wi‑Fi": {
            desc: "Conectividad inalámbrica, Bluetooth y velocidad.",
            code: "NET",
            icon: "wifi"
        },
        "Monitores": {
            desc: "Resolución, panel, frecuencia y experiencia visual.",
            code: "MON",
            icon: "monitor"
        },
        "Teclados": {
            desc: "Precisión, switches y comodidad al escribir.",
            code: "KEY",
            icon: "keyboard"
        },
        "Mouse": {
            desc: "Precisión, ergonomía, DPI y velocidad de respuesta.",
            code: "MSE",
            icon: "mouse"
        },
        "Audífonos": {
            desc: "Audio inmersivo, micrófono y comodidad prolongada.",
            code: "AUD",
            icon: "headphones"
        },
        "Bocinas": {
            desc: "Potencia, graves, conectividad y sonido envolvente.",
            code: "SPK",
            icon: "speaker"
        },
        "Webcams": {
            desc: "Videollamadas, enfoque y calidad de imagen.",
            code: "CAM",
            icon: "webcam"
        },
        "Micrófonos": {
            desc: "Captura de voz, claridad y versatilidad de uso.",
            code: "MIC",
            icon: "microphone"
        },
        "Impresoras": {
            desc: "Impresión, conectividad y rendimiento por página.",
            code: "PRN",
            icon: "printer"
        },
        "Almacenamiento Externo": {
            desc: "Portabilidad, resistencia y transferencia rápida.",
            code: "EXT",
            icon: "external"
        },
        "UPS": {
            desc: "Respaldo eléctrico y protección ante apagones.",
            code: "UPS",
            icon: "battery"
        }
    };

    function getIconSvg(name) {
        const icons = {
            cpu: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="25" y="25" width="50" height="50" rx="8"></rect>
                    <rect x="37" y="37" width="26" height="26" rx="4"></rect>
                    <line x1="35" y1="12" x2="35" y2="24"></line>
                    <line x1="50" y1="12" x2="50" y2="24"></line>
                    <line x1="65" y1="12" x2="65" y2="24"></line>
                    <line x1="35" y1="76" x2="35" y2="88"></line>
                    <line x1="50" y1="76" x2="50" y2="88"></line>
                    <line x1="65" y1="76" x2="65" y2="88"></line>
                    <line x1="12" y1="35" x2="24" y2="35"></line>
                    <line x1="12" y1="50" x2="24" y2="50"></line>
                    <line x1="12" y1="65" x2="24" y2="65"></line>
                    <line x1="76" y1="35" x2="88" y2="35"></line>
                    <line x1="76" y1="50" x2="88" y2="50"></line>
                    <line x1="76" y1="65" x2="88" y2="65"></line>
                </svg>
            `,
            motherboard: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="20" y="20" width="60" height="60" rx="8"></rect>
                    <rect x="30" y="30" width="20" height="20" rx="3"></rect>
                    <rect x="56" y="30" width="14" height="8" rx="2"></rect>
                    <rect x="56" y="42" width="14" height="8" rx="2"></rect>
                    <rect x="30" y="56" width="40" height="14" rx="3"></rect>
                    <line x1="50" y1="20" x2="50" y2="10"></line>
                    <line x1="65" y1="20" x2="65" y2="10"></line>
                    <line x1="35" y1="20" x2="35" y2="10"></line>
                </svg>
            `,
            ram: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="16" y="38" width="68" height="24" rx="4"></rect>
                    <rect x="24" y="44" width="8" height="12"></rect>
                    <rect x="36" y="44" width="8" height="12"></rect>
                    <rect x="48" y="44" width="8" height="12"></rect>
                    <rect x="60" y="44" width="8" height="12"></rect>
                    <line x1="24" y1="62" x2="24" y2="72"></line>
                    <line x1="34" y1="62" x2="34" y2="72"></line>
                    <line x1="44" y1="62" x2="44" y2="72"></line>
                    <line x1="54" y1="62" x2="54" y2="72"></line>
                    <line x1="64" y1="62" x2="64" y2="72"></line>
                    <line x1="74" y1="62" x2="74" y2="72"></line>
                </svg>
            `,
            ssd: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="18" y="42" width="64" height="16" rx="6"></rect>
                    <circle cx="26" cy="50" r="2"></circle>
                    <circle cx="74" cy="50" r="2"></circle>
                    <line x1="82" y1="46" x2="90" y2="46"></line>
                    <line x1="82" y1="50" x2="90" y2="50"></line>
                    <line x1="82" y1="54" x2="90" y2="54"></line>
                </svg>
            `,
            disk: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="24" y="18" width="52" height="64" rx="8"></rect>
                    <circle cx="50" cy="44" r="10"></circle>
                    <circle cx="50" cy="44" r="2"></circle>
                    <line x1="38" y1="68" x2="62" y2="68"></line>
                </svg>
            `,
            gpu: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="18" y="34" width="64" height="32" rx="6"></rect>
                    <circle cx="38" cy="50" r="8"></circle>
                    <circle cx="62" cy="50" r="8"></circle>
                    <line x1="82" y1="40" x2="90" y2="40"></line>
                    <line x1="82" y1="46" x2="90" y2="46"></line>
                    <line x1="82" y1="52" x2="90" y2="52"></line>
                    <line x1="82" y1="58" x2="90" y2="58"></line>
                </svg>
            `,
            power: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="24" y="24" width="52" height="52" rx="8"></rect>
                    <circle cx="40" cy="42" r="5"></circle>
                    <circle cx="60" cy="42" r="5"></circle>
                    <polyline points="52,52 42,66 52,66 46,78 62,60 52,60"></polyline>
                </svg>
            `,
            cooler: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="22" y="22" width="56" height="56" rx="8"></rect>
                    <circle cx="50" cy="50" r="16"></circle>
                    <path d="M50 34 Q56 42 50 50 Q44 42 50 34Z"></path>
                    <path d="M66 50 Q58 56 50 50 Q58 44 66 50Z"></path>
                    <path d="M50 66 Q44 58 50 50 Q56 58 50 66Z"></path>
                    <path d="M34 50 Q42 44 50 50 Q42 56 34 50Z"></path>
                </svg>
            `,
            case: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="32" y="18" width="36" height="64" rx="6"></rect>
                    <circle cx="50" cy="32" r="2.5"></circle>
                    <rect x="42" y="42" width="16" height="22" rx="3"></rect>
                    <line x1="38" y1="72" x2="62" y2="72"></line>
                </svg>
            `,
            wifi: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M22 44 Q50 22 78 44"></path>
                    <path d="M30 54 Q50 38 70 54"></path>
                    <path d="M40 64 Q50 56 60 64"></path>
                    <circle cx="50" cy="74" r="3"></circle>
                </svg>
            `,
            monitor: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="20" y="24" width="60" height="38" rx="4"></rect>
                    <line x1="50" y1="62" x2="50" y2="74"></line>
                    <line x1="36" y1="74" x2="64" y2="74"></line>
                </svg>
            `,
            keyboard: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="16" y="36" width="68" height="28" rx="6"></rect>
                    <line x1="24" y1="44" x2="24" y2="44"></line>
                    <line x1="32" y1="44" x2="32" y2="44"></line>
                    <line x1="40" y1="44" x2="40" y2="44"></line>
                    <line x1="48" y1="44" x2="48" y2="44"></line>
                    <line x1="56" y1="44" x2="56" y2="44"></line>
                    <line x1="64" y1="44" x2="64" y2="44"></line>
                    <line x1="72" y1="44" x2="72" y2="44"></line>
                    <line x1="24" y1="52" x2="24" y2="52"></line>
                    <line x1="32" y1="52" x2="32" y2="52"></line>
                    <line x1="40" y1="52" x2="40" y2="52"></line>
                    <line x1="48" y1="52" x2="48" y2="52"></line>
                    <line x1="56" y1="52" x2="56" y2="52"></line>
                    <line x1="64" y1="52" x2="64" y2="52"></line>
                    <line x1="72" y1="52" x2="72" y2="52"></line>
                    <line x1="32" y1="60" x2="68" y2="60"></line>
                </svg>
            `,
            mouse: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M50 18 C64 18 74 30 74 46 V58 C74 72 64 82 50 82 C36 82 26 72 26 58 V46 C26 30 36 18 50 18 Z"></path>
                    <line x1="50" y1="22" x2="50" y2="40"></line>
                </svg>
            `,
            headphones: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M24 54 V48 C24 34 35 24 50 24 C65 24 76 34 76 48 V54"></path>
                    <rect x="22" y="50" width="12" height="22" rx="5"></rect>
                    <rect x="66" y="50" width="12" height="22" rx="5"></rect>
                </svg>
            `,
            speaker: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="20" y="24" width="22" height="52" rx="6"></rect>
                    <rect x="58" y="24" width="22" height="52" rx="6"></rect>
                    <circle cx="31" cy="40" r="6"></circle>
                    <circle cx="31" cy="58" r="8"></circle>
                    <circle cx="69" cy="40" r="6"></circle>
                    <circle cx="69" cy="58" r="8"></circle>
                </svg>
            `,
            webcam: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="20" y="34" width="60" height="24" rx="12"></rect>
                    <circle cx="50" cy="46" r="8"></circle>
                    <line x1="50" y1="58" x2="50" y2="72"></line>
                    <line x1="36" y1="72" x2="64" y2="72"></line>
                </svg>
            `,
            microphone: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="38" y="20" width="24" height="38" rx="12"></rect>
                    <path d="M30 48 C30 60 38 68 50 68 C62 68 70 60 70 48"></path>
                    <line x1="50" y1="68" x2="50" y2="82"></line>
                    <line x1="38" y1="82" x2="62" y2="82"></line>
                </svg>
            `,
            printer: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="30" y="20" width="40" height="20" rx="4"></rect>
                    <rect x="22" y="40" width="56" height="24" rx="5"></rect>
                    <rect x="28" y="56" width="44" height="20" rx="4"></rect>
                    <line x1="64" y1="48" x2="68" y2="48"></line>
                </svg>
            `,
            external: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="28" y="20" width="44" height="60" rx="8"></rect>
                    <circle cx="50" cy="68" r="2.5"></circle>
                    <line x1="40" y1="28" x2="60" y2="28"></line>
                </svg>
            `,
            battery: `
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <rect x="24" y="30" width="48" height="40" rx="6"></rect>
                    <rect x="72" y="42" width="6" height="16" rx="2"></rect>
                    <polyline points="50,36 42,52 50,52 46,64 58,46 50,46"></polyline>
                </svg>
            `
        };

        return icons[name] || icons.cpu;
    }

    function encontrarTarjeta(elemento) {
        let actual = elemento;
        for (let i = 0; i < 8 && actual; i++) {
            const texto = (actual.textContent || "").toLowerCase();
            if (texto.includes("ver comparación")) return actual;
            actual = actual.parentElement;
        }
        return null;
    }

    function limpiarIconosViejos(tarjeta) {
        tarjeta.querySelectorAll(".hl-category-visual, .hl-ai-visual").forEach(el => el.remove());

        tarjeta.querySelectorAll("span, div, p").forEach(el => {
            const txt = (el.textContent || "").trim();
            if (
                txt === "🧠" || txt === "🖥️" || txt === "⌨️" || txt === "🖱️" ||
                txt === "🎧" || txt === "🎙️" || txt === "🔊" || txt === "📷" ||
                txt === "🖨️" || txt === "💾" || txt === "🔌" || txt === "📡" ||
                txt === "🧊" || txt === "⚡" || txt === "🗄️"
            ) {
                el.remove();
            }
        });
    }

    function decorarTarjetas() {
        Object.entries(categorias).forEach(([nombre, datos]) => {
            const headings = [...document.querySelectorAll("h1, h2, h3, h4, strong")];
            const titulo = headings.find(el => el.textContent.trim() === nombre);
            if (!titulo) return;

            const tarjeta = encontrarTarjeta(titulo);
            if (!tarjeta) return;

            limpiarIconosViejos(tarjeta);

            tarjeta.classList.add("hl-ai-card");
            tarjeta.setAttribute("data-ai-code", datos.code);

            if (!tarjeta.querySelector(".hl-ai-visual")) {
                const visual = document.createElement("div");
                visual.className = "hl-ai-visual";
                visual.innerHTML = `
                    <div class="hl-ai-orb"></div>
                    <div class="hl-ai-panel">
                        <div class="hl-ai-code">${datos.code}</div>
                        <div class="hl-ai-icon">
                            ${getIconSvg(datos.icon)}
                        </div>
                        <div class="hl-ai-lines"></div>
                    </div>
                `;

                const top = tarjeta.firstElementChild;
                if (top && top.nextSibling) {
                    tarjeta.insertBefore(visual, top.nextSibling);
                } else {
                    tarjeta.prepend(visual);
                }
            }

            let desc = tarjeta.querySelector(".hl-category-description");
            if (!desc) {
                desc = document.createElement("p");
                desc.className = "hl-category-description";
                titulo.insertAdjacentElement("afterend", desc);
            }
            desc.textContent = datos.desc;

            const lineas = [...tarjeta.querySelectorAll("p, div, span")];
            const marcaVs = lineas.find(el => {
                const t = (el.textContent || "").trim();
                return t.includes(" vs ");
            });

            if (marcaVs) {
                marcaVs.classList.add("hl-vs-line");
            }
        });
    }

    function iniciar() {
        decorarTarjetas();

        const observer = new MutationObserver(() => {
            decorarTarjetas();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciar);
    } else {
        iniciar();
    }
})();

const componentsGrid =
    document.getElementById("componentsGrid");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const emptyState =
    document.getElementById("emptyState");

const header =
    document.querySelector(".header");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const modal =
    document.getElementById("comparisonModal");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");

let filtroActual = "todos";



function renderizarCategorias() {

    const busqueda =
        searchInput.value
            .toLowerCase()
            .trim();

    const resultados =
        categoriasHardware.filter(
            categoria => {

                const coincideFiltro =
                    filtroActual === "todos" ||
                    categoria.tipo === filtroActual;

                const coincideBusqueda =
                    categoria.nombre
                        .toLowerCase()
                        .includes(busqueda)
                    ||
                    categoria.marcas
                        .toLowerCase()
                        .includes(busqueda);

                return (
                    coincideFiltro &&
                    coincideBusqueda
                );
            }
        );

    componentsGrid.innerHTML = "";

    if (resultados.length === 0) {

        emptyState.classList.remove("hidden");

        return;
    }

    emptyState.classList.add("hidden");

    resultados.forEach(
        categoria => {

            const tarjeta =
                document.createElement("article");

            tarjeta.className =
                "component-card";

            tarjeta.innerHTML = `

                <div class="card-top">

                    <span class="card-type">
                        ${categoria.tipo}
                    </span>

                    ${
                        categoria.completa
                            ? `<span class="card-ready">✓ COMPLETO</span>`
                            : `<span class="card-pending">PRÓXIMAMENTE</span>`
                    }

                </div>

                <div class="card-icon">
                    ${categoria.icono}
                </div>

                <h3>
                    ${categoria.nombre}
                </h3>

                <p>
                    ${categoria.marcas}
                </p>

                <div class="card-footer">

                    <span>
                        ${
                            categoria.completa
                                ? "Ver comparación"
                                : "Vista previa"
                        }
                    </span>

                    <span>
                        →
                    </span>

                </div>

            `;

            tarjeta.addEventListener(
                "click",
                () =>
                    abrirComparacion(
                        categoria
                    )
            );

            componentsGrid.appendChild(
                tarjeta
            );
        }
    );
}



function crearSpecs(producto) {

    return producto.specs.map(
        spec => `

            <div class="spec-row">

                <span>
                    ${spec[0]}
                </span>

                <strong>
                    ${spec[1]}
                </strong>

            </div>

        `
    ).join("");
}



function crearProducto(producto, numero) {

    return `

        <article class="product-compare-card">

            <div class="product-number">
                0${numero}
            </div>

            <div class="product-brand-row">

                <span class="product-badge">
                    ${producto.badge}
                </span>

                <span class="product-brand">
                    ${producto.marca}
                </span>

            </div>


            <div class="product-visual">

                <div class="product-visual-glow"></div>

                ${
                    (
                        typeof window.imagenesProductos !== "undefined" &&
                        window.imagenesProductos[producto.nombre]
                    )
                    ? `
                        <img
                            src="${window.imagenesProductos[producto.nombre]}"
                            alt="${producto.nombre}"
                            class="product-real-image"
                        >
                    `
                    : `
                        <div class="product-logo-letter">
                            ${producto.marca.charAt(0)}
                        </div>
                    `
                }

                <div class="product-visual-name">
                    ${producto.marca}
                </div>

            </div>


            <div class="product-info">

                <span class="product-manufacturer">
                    ${producto.marca}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="product-highlight">
                    ${producto.destacado}
                </p>


                <div class="product-price">

                    <span>
                        PRECIO DE REFERENCIA
                    </span>

                    <strong>
                        ${producto.precio}
                    </strong>

                    <small>
                        ${producto.precioNota}
                    </small>

                </div>


                <div class="spec-list">
                    ${crearSpecs(producto)}
                </div>


                <a
                    href="${producto.fuente}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="source-link"
                >
                    Ver fuente oficial ↗
                </a>

            </div>

        </article>

    `;
}



function abrirComparacion(categoria) {

    if (!categoria.completa) {

        modalContent.innerHTML = `

            <div class="comparison-heading">

                <span class="section-label">
                    ${categoria.tipo.toUpperCase()}
                </span>

                <h2>
                    ${categoria.nombre}
                </h2>

                <p>
                    ${categoria.marcas}
                </p>

            </div>


            <div class="coming-soon">

                <div class="coming-icon">
                    ${categoria.icono}
                </div>

                <span>
                    SIGUIENTE COMPARACIÓN
                </span>

                <h3>
                    ${categoria.marcas}
                </h3>

                <p>
                    Esta categoría ya forma parte del álbum.
                    En el siguiente avance agregaremos los productos,
                    precios, especificaciones, imágenes y recomendación.
                </p>

            </div>

        `;

    } else {

        modalContent.innerHTML = `

            <div class="comparison-heading">

                <span class="section-label">
                    COMPARATIVA DE HARDWARE
                </span>

                <h2>
                    ${categoria.nombre}
                </h2>

                <p>
                    ${categoria.marcas}
                </p>

            </div>


            <div class="versus-header">

                <span>
                    PRODUCTO 01
                </span>

                <strong>
                    VS
                </strong>

                <span>
                    PRODUCTO 02
                </span>

            </div>


            <div class="comparison-grid">

                ${crearProducto(
                    categoria.producto1,
                    1
                )}

                ${crearProducto(
                    categoria.producto2,
                    2
                )}

            </div>


            <section class="recommendation-box">

                <div class="recommendation-icon">
                    ★
                </div>

                <div>

                    <span class="recommendation-label">
                        NUESTRA RECOMENDACIÓN
                    </span>

                    <h3>
                        ${categoria.recomendacion.ganador}
                    </h3>

                    <p>
                        ${categoria.recomendacion.texto}
                    </p>

                </div>

            </section>


            <div class="price-warning">

                <strong>
                    Nota sobre precios:
                </strong>

                Los precios mostrados son referencias y pueden variar
                según país, tienda, disponibilidad, promociones,
                impuestos y fecha de consulta.

            </div>

        `;
    }

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";
}



filterButtons.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );

                boton.classList.add(
                    "active"
                );

                filtroActual =
                    boton.dataset.filter;

                renderizarCategorias();
            }
        );
    }
);



searchInput.addEventListener(
    "input",
    renderizarCategorias
);



function cerrarModal() {

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}



modalClose.addEventListener(
    "click",
    cerrarModal
);



modal.addEventListener(
    "click",
    evento => {

        if (
            evento.target === modal
        ) {

            cerrarModal();
        }
    }
);



document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape"
        ) {

            cerrarModal();
        }
    }
);



window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 40
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );
        }
    }
);



menuToggle.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );
    }
);



document
    .querySelectorAll(".nav-links a")
    .forEach(
        enlace => {

            enlace.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );
                }
            );
        }
    );



renderizarCategorias();

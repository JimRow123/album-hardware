(() => {

    const TIPO_CAMBIO = 7.64;

    function dineroGTQ(valor) {
        return new Intl.NumberFormat(
            "es-GT",
            {
                style: "currency",
                currency: "GTQ",
                minimumFractionDigits: 2
            }
        ).format(valor);
    }

    function extraerUSD(texto) {

        const limpio = texto
            .replace(/,/g, "")
            .replace(/\s+/g, " ");

        const numeros = [
            ...limpio.matchAll(
                /(?:US\$|\$)\s*([0-9]+(?:\.[0-9]+)?)/gi
            )
        ].map(x => Number(x[1]));

        return numeros;
    }

    function aplicarConversion() {

        document
            .querySelectorAll(".product-price")
            .forEach(caja => {

                if (
                    caja.querySelector(
                        ".precio-gtq"
                    )
                ) {
                    return;
                }

                const precio = caja.querySelector(
                    "strong"
                );

                if (!precio) {
                    return;
                }

                const texto =
                    precio.textContent.trim();

                const numeros =
                    extraerUSD(texto);

                if (!numeros.length) {
                    return;
                }

                const conversion =
                    document.createElement("div");

                conversion.className =
                    "precio-gtq";

                if (numeros.length >= 2) {

                    conversion.innerHTML = `
                        <span>≈</span>
                        ${dineroGTQ(
                            numeros[0] * TIPO_CAMBIO
                        )}
                        —
                        ${dineroGTQ(
                            numeros[1] * TIPO_CAMBIO
                        )}
                    `;

                } else {

                    conversion.innerHTML = `
                        <span>≈</span>
                        ${dineroGTQ(
                            numeros[0] * TIPO_CAMBIO
                        )}
                    `;
                }

                const nota =
                    document.createElement("small");

                nota.className =
                    "precio-cambio-nota";

                nota.textContent =
                    "Conversión aproximada · US$1 = Q7.64";

                caja.appendChild(
                    conversion
                );

                caja.appendChild(
                    nota
                );
            });
    }

    aplicarConversion();

    const observer =
        new MutationObserver(
            aplicarConversion
        );

    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

})();

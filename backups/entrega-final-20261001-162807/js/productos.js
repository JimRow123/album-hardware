const categoriasHardware = [

    {
        id: 1,
        nombre: "Procesadores",
        tipo: "interno",
        icono: "🧠",
        marcas: "Intel vs AMD",
        completa: true,

        producto1: {
            marca: "Intel",
            nombre: "Core Ultra 7 265K",
            precio: "US$394 - US$404",
            precioNota: "Precio recomendado por Intel",
            badge: "SERIES 2",
            specs: [
                ["Núcleos", "20"],
                ["Hilos", "20"],
                ["Frecuencia máxima", "5.5 GHz"],
                ["Caché", "30 MB Smart Cache"],
                ["Potencia base", "125 W"],
                ["Socket", "LGA1851"],
                ["Memoria", "DDR5 hasta 6400 MT/s"],
                ["Arquitectura", "Arrow Lake"]
            ],
            destacado: "20 núcleos combinando núcleos de rendimiento y eficiencia.",
            fuente: "https://www.intel.com/content/www/us/en/products/sku/241063/intel-core-ultra-7-processor-265k-30m-cache-up-to-5-50-ghz/specifications.html"
        },

        producto2: {
            marca: "AMD",
            nombre: "Ryzen 7 9700X",
            precio: "US$359 aprox.",
            precioNota: "Precio de referencia",
            badge: "ZEN 5",
            specs: [
                ["Núcleos", "8"],
                ["Hilos", "16"],
                ["Frecuencia máxima", "5.5 GHz"],
                ["Caché L3", "32 MB"],
                ["TDP", "65 W"],
                ["Socket", "AM5"],
                ["Memoria", "DDR5"],
                ["Arquitectura", "Zen 5"]
            ],
            destacado: "Excelente equilibrio entre rendimiento y consumo energético.",
            fuente: "https://www.amd.com/es/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html"
        },

        recomendacion: {
            ganador: "AMD Ryzen 7 9700X",
            texto: "Nuestra recomendación es el AMD Ryzen 7 9700X para un equipo equilibrado. Ambos alcanzan hasta 5.5 GHz, pero el Ryzen ofrece 8 núcleos y 16 hilos con un TDP de solamente 65 W. Esto permite construir una computadora potente con menor consumo energético. El Intel Core Ultra 7 265K sobresale cuando se necesitan más núcleos y cargas de trabajo intensivas."
        }
    },



    {
        id: 2,
        nombre: "Tarjetas Madre",
        tipo: "interno",
        icono: "🔲",
        marcas: "ASUS vs MSI",
        completa: true,

        producto1: {
            marca: "ASUS",
            nombre: "ROG Strix B850-F Gaming WiFi",
            precio: "US$299.99",
            precioNota: "Precio oficial ASUS",
            badge: "B850",
            specs: [
                ["Socket", "AMD AM5"],
                ["Chipset", "AMD B850"],
                ["Procesadores", "Ryzen 7000 / 8000 / 9000"],
                ["Memoria", "DDR5"],
                ["Capacidad RAM", "Hasta 256 GB"],
                ["Velocidad RAM", "Hasta 8000+ MT/s OC"],
                ["Formato", "ATX"],
                ["Conectividad", "Wi-Fi"]
            ],
            destacado: "Tarjeta madre de gama alta para procesadores AMD AM5 con DDR5 y funciones orientadas al gaming.",
            fuente: "https://rog.asus.com/us/motherboards/rog-strix/rog-strix-b850-f-gaming-wifi/spec/"
        },

        producto2: {
            marca: "MSI",
            nombre: "B850 Gaming Plus WiFi",
            precio: "US$229.99",
            precioNota: "Precio observado en tienda oficial MSI",
            badge: "B850",
            specs: [
                ["Socket", "AMD AM5"],
                ["Chipset", "AMD B850"],
                ["Procesadores", "Ryzen 7000 / 8000 / 9000"],
                ["Memoria", "DDR5"],
                ["Capacidad RAM", "Hasta 256 GB"],
                ["Velocidad RAM", "Hasta 8200+ MT/s OC"],
                ["Formato", "ATX"],
                ["Conectividad", "Wi-Fi 7 / Bluetooth 5.4"]
            ],
            destacado: "Placa AM5 moderna con Wi-Fi 7, red 5G y soporte para memoria DDR5 de alta velocidad.",
            fuente: "https://latam.msi.com/Motherboard/B850-GAMING-PLUS-WIFI/Specification"
        },

        recomendacion: {
            ganador: "MSI B850 Gaming Plus WiFi",
            texto: "Nuestra recomendación es la MSI B850 Gaming Plus WiFi por ofrecer una plataforma AM5 moderna, soporte DDR5, Wi-Fi 7 y características muy competitivas a un precio menor. ASUS ofrece una alternativa más premium dentro de la familia ROG."
        }
    },



    {
        id: 3,
        nombre: "Memoria RAM",
        tipo: "interno",
        icono: "▥",
        marcas: "Kingston vs Corsair",
        completa: true,

        producto1: {
            marca: "Kingston",
            nombre: "FURY Beast DDR5 32GB",
            precio: "US$429.00 aprox.",
            precioNota: "Precio de mercado · consultado oct. 2026",
            badge: "DDR5",
            specs: [
                ["Capacidad", "32 GB"],
                ["Configuración", "2 × 16 GB"],
                ["Velocidad", "6000 MT/s"],
                ["Latencia", "CL30"],
                ["Voltaje", "1.4 V"],
                ["Formato", "288-pin DIMM"],
                ["Perfil", "AMD EXPO / Intel XMP"],
                ["Tipo", "DDR5"]
            ],
            destacado: "Kit DDR5 rápido compatible con perfiles de rendimiento AMD EXPO e Intel XMP.",
            fuente: "https://www.kingston.com/en/memory/search?partid=KF560C30BBEK2-32"
        },

        producto2: {
            marca: "Corsair",
            nombre: "Vengeance DDR5 32GB",
            precio: "US$469.99",
            precioNota: "Precio de referencia Corsair · oct. 2026",
            badge: "DDR5",
            specs: [
                ["Capacidad", "32 GB"],
                ["Configuración", "2 × 16 GB"],
                ["Velocidad", "6000 MT/s"],
                ["Latencia", "CL30"],
                ["Voltaje", "1.4 V"],
                ["Formato", "288-pin UDIMM"],
                ["Perfil", "AMD EXPO / Intel XMP"],
                ["Disipador", "Aluminio"]
            ],
            destacado: "Memoria de alto rendimiento con disipador de aluminio y amplia compatibilidad.",
            fuente: "https://www.corsair.com/es/es/p/memory/cmk32gx5m2b6000z30/vengeance-32gb-2x16gb-ddr5-dram-6000mt-s-cl30-amd-expo-memory-black-cmk32gx5m2b6000z30"
        },

        recomendacion: {
            ganador: "Kingston FURY Beast DDR5",
            texto: "Los dos kits ofrecen 32 GB, 6000 MT/s y latencia CL30, por lo que su rendimiento es muy similar. Recomendamos Kingston FURY Beast porque ofrece perfiles AMD EXPO e Intel XMP en este modelo y combina buenas especificaciones con un diseño compacto. El precio final será un factor importante para decidir entre ambos."
        }
    },



    {
        id: 4,
        nombre: "SSD NVMe",
        tipo: "interno",
        icono: "▰",
        marcas: "Samsung vs Western Digital",
        completa: true,

        producto1: {
            marca: "Samsung",
            nombre: "990 PRO 2TB",
            precio: "US$389.00 aprox.",
            precioNota: "Precio de mercado · 2 TB · oct. 2026",
            badge: "NVMe",
            specs: [
                ["Capacidad", "2 TB"],
                ["Interfaz", "PCIe 4.0"],
                ["Formato", "M.2 NVMe"],
                ["Lectura", "Hasta 7,450 MB/s"],
                ["Escritura", "Hasta 6,900 MB/s"],
                ["Tipo", "SSD"],
                ["Uso", "Gaming / productividad"],
                ["Software", "Samsung Magician"]
            ],
            destacado: "Uno de los SSD PCIe 4.0 de mayor rendimiento de Samsung.",
            fuente: "https://www.samsung.com/us/memory-storage/nvme-ssd/990-pro-2tb-nvme-pcie-gen-4-mz-v9p2t0b-am/"
        },

        producto2: {
            marca: "Western Digital",
            nombre: "WD_BLACK SN850X 2TB",
            precio: "US$389.90 aprox.",
            precioNota: "Precio de mercado · 2 TB · oct. 2026",
            badge: "NVMe",
            specs: [
                ["Capacidad", "2 TB"],
                ["Interfaz", "PCIe 4.0"],
                ["Formato", "M.2 2280"],
                ["Lectura", "Hasta 7,300 MB/s"],
                ["Escritura", "Alta velocidad"],
                ["Tipo", "SSD"],
                ["Uso", "Gaming"],
                ["Familia", "WD_BLACK"]
            ],
            destacado: "SSD de alto rendimiento especialmente orientado al gaming.",
            fuente: "https://www.westerndigital.com/products/internal-drives/wd-black-sn850x-nvme-ssd"
        },

        recomendacion: {
            ganador: "Samsung 990 PRO 2TB",
            texto: "Recomendamos el Samsung 990 PRO porque alcanza velocidades de lectura de hasta 7,450 MB/s y escritura de hasta 6,900 MB/s. Es una excelente opción para juegos, edición de contenido y aplicaciones que requieren transferencias rápidas. El WD_BLACK SN850X continúa siendo una alternativa muy competitiva."
        }
    },



    {
        id: 5,
        nombre: "Discos Duros HDD",
        tipo: "interno",
        icono: "💾",
        marcas: "Seagate vs Western Digital",
        completa: true,

        producto1: {
            marca: "Seagate",
            nombre: "BarraCuda 2TB",
            precio: "US$149.99 aprox.",
            precioNota: "Precio de referencia · ST2000DM008",
            badge: "HDD",
            specs: [
                ["Capacidad", "2 TB"],
                ["Formato", "3.5 pulgadas"],
                ["Interfaz", "SATA 6 Gb/s"],
                ["Velocidad", "7200 RPM"],
                ["Caché", "256 MB"],
                ["Transferencia", "Hasta 220 MB/s"],
                ["Tecnología", "SMR"],
                ["Garantía", "2 años"]
            ],
            destacado: "Disco duro de escritorio de alta capacidad con 7200 RPM y caché de 256 MB.",
            fuente: "https://www.seagate.com/la/es/support/internal-hard-drives/desktop-hard-drives/barracuda-3-5/"
        },

        producto2: {
            marca: "Western Digital",
            nombre: "WD Blue 2TB",
            precio: "US$68.00 aprox.",
            precioNota: "Precio de referencia · WD20EZBX",
            badge: "HDD",
            specs: [
                ["Capacidad", "2 TB"],
                ["Formato", "3.5 pulgadas"],
                ["Interfaz", "SATA"],
                ["Velocidad", "7200 RPM"],
                ["Caché", "256 MB"],
                ["Transferencia", "Hasta 215 MB/s"],
                ["Tecnología", "SMR"],
                ["Garantía", "2 años"]
            ],
            destacado: "Unidad diseñada para computadoras de escritorio con buena capacidad y rendimiento para almacenamiento general.",
            fuente: "https://www.westerndigital.com/es-la/products/internal-drives/wd-blue-desktop-sata-hdd?sku=WD20EZBX"
        },

        recomendacion: {
            ganador: "Seagate BarraCuda 2TB",
            texto: "Ambos discos ofrecen 2 TB, 7200 RPM y 256 MB de caché. Recomendamos ligeramente el Seagate BarraCuda por alcanzar una transferencia sostenida indicada de hasta 220 MB/s frente a aproximadamente 215 MB/s del WD Blue. Para almacenamiento cotidiano, ambos son opciones muy similares."
        }
    },



    {
        id: 6,
        nombre: "Tarjetas Gráficas",
        tipo: "interno",
        icono: "🎮",
        marcas: "NVIDIA vs AMD",
        completa: true,

        producto1: {
            marca: "NVIDIA",
            nombre: "GeForce RTX 5070",
            precio: "US$549 MSRP",
            precioNota: "Precio de lanzamiento de referencia",
            badge: "RTX",
            specs: [
                ["Memoria", "12 GB GDDR7"],
                ["Arquitectura", "Blackwell"],
                ["Tecnología", "Ray Tracing"],
                ["Escalado", "DLSS"],
                ["Interfaz", "PCI Express"],
                ["Uso", "Gaming"],
                ["Generación", "RTX 50"],
                ["Resolución objetivo", "1440p / alta calidad"]
            ],
            destacado: "GPU moderna con memoria GDDR7 y tecnologías de inteligencia artificial para gráficos.",
            fuente: "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070-family/"
        },

        producto2: {
            marca: "AMD",
            nombre: "Radeon RX 9070 XT",
            precio: "US$599 MSRP",
            precioNota: "Precio de lanzamiento de referencia",
            badge: "RADEON",
            specs: [
                ["Memoria", "16 GB GDDR6"],
                ["Procesadores Stream", "4096"],
                ["Frecuencia", "Hasta 2970 MHz"],
                ["Interfaz memoria", "256-bit"],
                ["Infinity Cache", "64 MB"],
                ["Potencia", "304 W"],
                ["PSU recomendada", "750 W"],
                ["Interfaz", "PCIe 5.0 x16"]
            ],
            destacado: "16 GB de memoria gráfica y gran ancho de banda para gaming de alta resolución.",
            fuente: "https://www.amd.com/es/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070xt.html"
        },

        recomendacion: {
            ganador: "AMD Radeon RX 9070 XT",
            texto: "Para esta comparación recomendamos la Radeon RX 9070 XT cuando se busca una mayor cantidad de memoria gráfica, ya que incorpora 16 GB frente a los 12 GB de la RTX 5070. La RTX 5070, por otro lado, destaca por el ecosistema de tecnologías NVIDIA como DLSS y Ray Tracing. La elección puede variar según los programas y juegos utilizados."
        }
    },



    {
        id: 7,
        nombre: "Fuentes de Poder",
        tipo: "interno",
        icono: "⚡",
        marcas: "Corsair vs EVGA",
        completa: true,

        producto1: {
            marca: "Corsair",
            nombre: "RM850x",
            precio: "US$139.99",
            precioNota: "Precio Corsair · 850 W · oct. 2026",
            badge: "80+ GOLD",
            specs: [
                ["Potencia", "850 W"],
                ["Certificación", "80 PLUS Gold"],
                ["Cableado", "Totalmente modular"],
                ["Formato", "ATX"],
                ["Ventilador", "135 mm"],
                ["Modo silencioso", "Zero RPM"],
                ["MTBF", "100,000 horas"],
                ["Garantía", "10 años"]
            ],
            destacado: "Fuente de alto rendimiento con certificación Gold, cableado modular y garantía extensa.",
            fuente: "https://www.corsair.com/us/en/p/psu/cp-9020200-na/rmx-series-rm850x-850-watt-80-plus-gold-fully-modular-atx-psu-cp-9020200-na"
        },

        producto2: {
            marca: "EVGA",
            nombre: "SuperNOVA 850 GT",
            precio: "US$160.86 aprox.",
            precioNota: "Equivalente de precio local de referencia",
            badge: "80+ GOLD",
            specs: [
                ["Potencia", "850 W"],
                ["Certificación", "80 PLUS Gold"],
                ["Cableado", "Totalmente modular"],
                ["Formato", "ATX"],
                ["Uso", "Gaming / alto rendimiento"],
                ["Protecciones", "Múltiples protecciones eléctricas"],
                ["Marca", "EVGA"],
                ["Serie", "SuperNOVA GT"]
            ],
            destacado: "Fuente de alimentación modular orientada a equipos gaming y configuraciones de alto rendimiento.",
            fuente: "https://www.evga.com/products/product.aspx?pn=220-GT-0850-Y1"
        },

        recomendacion: {
            ganador: "Corsair RM850x",
            texto: "Recomendamos la Corsair RM850x por sus 850 W, certificación 80 PLUS Gold, funcionamiento Zero RPM y una garantía de 10 años. Su diseño totalmente modular también facilita considerablemente el manejo de cables dentro del gabinete."
        }
    },



    {
        id: 8,
        nombre: "Refrigeración CPU",
        tipo: "interno",
        icono: "❄",
        marcas: "Cooler Master vs Noctua",
        completa: true,

        producto1: {
            marca: "Cooler Master",
            nombre: "Hyper 212 Halo Black",
            precio: "US$39.14 aprox.",
            precioNota: "Precio de referencia en Guatemala",
            badge: "AIR",
            specs: [
                ["Tipo", "Refrigeración por aire"],
                ["Ventilador", "120 mm"],
                ["Velocidad", "650 - 2050 RPM"],
                ["Flujo de aire", "51.88 CFM"],
                ["Ruido máximo", "27 dBA"],
                ["Heatpipes", "4"],
                ["Altura", "154 mm"],
                ["Iluminación", "ARGB"]
            ],
            destacado: "Versión moderna del conocido Hyper 212 con iluminación ARGB y compatibilidad Intel y AMD.",
            fuente: "https://www.coolermaster.com/es-global/products/hyper-212-halo-black.html"
        },

        producto2: {
            marca: "Noctua",
            nombre: "NH-U12S redux",
            precio: "US$49.90 MSRP",
            precioNota: "Precio sugerido por fabricante",
            badge: "AIR",
            specs: [
                ["Tipo", "Refrigeración por aire"],
                ["Ventilador", "120 mm"],
                ["Velocidad", "Hasta 1700 RPM"],
                ["Flujo de aire", "70.75 CFM"],
                ["Ruido máximo", "25.1 dBA"],
                ["Heatpipes", "4"],
                ["Altura", "158 mm"],
                ["Garantía", "6 años"]
            ],
            destacado: "Disipador diseñado para combinar refrigeración eficiente, bajo nivel de ruido y gran compatibilidad.",
            fuente: "https://www.noctua.at/en/products/nh-u12s-redux/specifications"
        },

        recomendacion: {
            ganador: "Noctua NH-U12S redux",
            texto: "Recomendamos el Noctua NH-U12S redux por su flujo de aire de hasta 70.75 CFM, bajo nivel de ruido máximo y garantía de 6 años. El Cooler Master Hyper 212 Halo Black es especialmente atractivo cuando también se busca iluminación ARGB."
        }
    },



    {
        id: 9,
        nombre: "Gabinetes",
        tipo: "interno",
        icono: "▣",
        marcas: "NZXT vs Corsair",
        completa: true,

        producto1: {
            marca: "NZXT",
            nombre: "H5 Flow",
            precio: "US$94.99",
            precioNota: "Precio mostrado por NZXT",
            badge: "MID-TOWER",
            specs: [
                ["Tipo", "Mid-Tower"],
                ["Placas", "E-ATX / ATX / mATX / Mini-ITX"],
                ["GPU máxima", "410 mm"],
                ["Cooler CPU", "Hasta 170 mm"],
                ["Ventiladores incluidos", "2 × 120 mm"],
                ["Radiador frontal", "Hasta 360 mm"],
                ["USB-C frontal", "Sí"],
                ["Panel lateral", "Cristal templado"]
            ],
            destacado: "Gabinete compacto orientado al flujo de aire con gran espacio para tarjetas gráficas modernas.",
            fuente: "https://nzxt.com/products/h5-flow"
        },

        producto2: {
            marca: "Corsair",
            nombre: "4000D Airflow",
            precio: "US$104.99",
            precioNota: "Precio mostrado por Corsair",
            badge: "MID-TOWER",
            specs: [
                ["Tipo", "Mid-Tower"],
                ["Placas", "ATX y formatos menores"],
                ["GPU máxima", "Hasta 340 mm con AIO frontal"],
                ["Ventiladores", "Hasta 6 × 120 mm"],
                ["Ventiladores incluidos", "2 × 120 mm"],
                ["Radiador frontal", "Hasta 360 mm"],
                ["Gestión cables", "RapidRoute"],
                ["Panel lateral", "Cristal templado"]
            ],
            destacado: "Gabinete de alto flujo de aire con sistema dedicado para facilitar una instalación limpia de cables.",
            fuente: "https://www.corsair.com/us/en/p/pc-case/cc-9011200-ww/4000d-airflow-tempered-glass-mid-tower-atx-case-cc-9011200-ww"
        },

        recomendacion: {
            ganador: "NZXT H5 Flow",
            texto: "Recomendamos el NZXT H5 Flow porque ofrece excelente flujo de aire, soporte para tarjetas gráficas de hasta 410 mm y un precio oficial ligeramente menor en esta comparación. El Corsair 4000D Airflow destaca especialmente por su sistema RapidRoute para gestión de cables."
        }
    },



    {
        id: 10,
        nombre: "Tarjetas Wi-Fi",
        tipo: "interno",
        icono: "◉",
        marcas: "TP-Link vs ASUS",
        completa: true,

        producto1: {
            marca: "TP-Link",
            nombre: "Archer TXE75E",
            precio: "US$49.99",
            precioNota: "Precio de referencia · Wi-Fi 6E",
            badge: "WI-FI 6E",
            specs: [
                ["Estándar", "Wi-Fi 6E"],
                ["6 GHz", "Hasta 2402 Mbps"],
                ["5 GHz", "Hasta 2402 Mbps"],
                ["2.4 GHz", "Hasta 574 Mbps"],
                ["Bluetooth", "5.3"],
                ["Interfaz", "PCIe"],
                ["Seguridad", "WPA3"],
                ["Antenas", "2 externas"]
            ],
            destacado: "Adaptador tribanda Wi-Fi 6E con Bluetooth 5.3 y acceso a la banda de 6 GHz.",
            fuente: "https://www.tp-link.com/us/home-networking/pci-adapter/archer-txe75e/"
        },

        producto2: {
            marca: "ASUS",
            nombre: "PCE-AXE59BT",
            precio: "US$73.44 aprox.",
            precioNota: "Precio de mercado · Wi-Fi 6E",
            badge: "WI-FI 6E",
            specs: [
                ["Estándar", "Wi-Fi 6E"],
                ["6 GHz", "Hasta 2402 Mbps"],
                ["5 GHz", "Hasta 2402 Mbps"],
                ["2.4 GHz", "Hasta 574 Mbps"],
                ["Bluetooth", "5.2"],
                ["Interfaz", "PCIe x1"],
                ["Seguridad", "WPA3"],
                ["Antenas", "2 externas"]
            ],
            destacado: "Tarjeta inalámbrica PCIe con Wi-Fi 6E, antena externa y soporte para WPA3.",
            fuente: "https://www.asus.com/us/networking-iot-servers/wireless-adapters/all-series/pce-axe59bt/techspec/"
        },

        recomendacion: {
            ganador: "TP-Link Archer TXE75E",
            texto: "Los dos adaptadores alcanzan velocidades muy similares mediante Wi-Fi 6E. Recomendamos el TP-Link Archer TXE75E porque incorpora Bluetooth 5.3 frente a Bluetooth 5.2 del modelo ASUS, manteniendo velocidades máximas de hasta 2402 Mbps en las bandas de 5 y 6 GHz."
        }
    },



    {
        id: 11,
        nombre: "Monitores",
        tipo: "externo",
        icono: "🖥️",
        marcas: "Samsung vs LG",
        completa: true,

        producto1: {
            marca: "Samsung",
            nombre: "Odyssey G5 27”",
            precio: "US$299.99",
            precioNota: "Precio Samsung · G55C 27”",
            badge: "ODYSSEY",
            specs: [
                ["Pantalla", "27 pulgadas"],
                ["Resolución", "QHD"],
                ["Uso", "Gaming"],
                ["Formato", "16:9"],
                ["Tecnología", "Adaptive Sync"],
                ["Conexión", "DisplayPort / HDMI"],
                ["Categoría", "Gaming"],
                ["Marca", "Samsung"]
            ],
            destacado: "Monitor QHD orientado a juegos con alta frecuencia de actualización.",
            fuente: "https://www.samsung.com/us/computing/monitors/gaming/"
        },

        producto2: {
            marca: "LG",
            nombre: "UltraGear 27GS75Q-B",
            precio: "US$199.99 aprox.",
            precioNota: "Precio de referencia LG · oct. 2026",
            badge: "ULTRAGEAR",
            specs: [
                ["Pantalla", "27 pulgadas"],
                ["Resolución", "2560 × 1440"],
                ["Panel", "IPS"],
                ["Frecuencia", "Hasta 200 Hz"],
                ["Respuesta", "1 ms GtG"],
                ["Color", "sRGB 99%"],
                ["HDR", "HDR10"],
                ["Sync", "FreeSync / G-SYNC Compatible"]
            ],
            destacado: "Panel IPS QHD de 200 Hz con respuesta de 1 ms y excelente reproducción de color.",
            fuente: "https://www.lg.com/es/monitores/monitores-ultragear-gaming/27gs75q-b/"
        },

        recomendacion: {
            ganador: "LG UltraGear 27GS75Q-B",
            texto: "Recomendamos el LG UltraGear 27GS75Q-B por su combinación de resolución QHD, panel IPS, frecuencia de hasta 200 Hz y tiempo de respuesta de 1 ms. Además, es compatible con AMD FreeSync y NVIDIA G-SYNC, características muy útiles para videojuegos."
        }
    },



    {
        id: 12,
        nombre: "Teclados",
        tipo: "externo",
        icono: "⌨️",
        marcas: "Logitech vs HyperX",
        completa: true,

        producto1: {
            marca: "Logitech",
            nombre: "G PRO X TKL RAPID",
            precio: "US$189.99",
            precioNota: "Precio oficial de referencia",
            badge: "TKL",
            specs: [
                ["Formato", "Tenkeyless"],
                ["Switches", "Magnético-analógicos"],
                ["Rapid Trigger", "Sí"],
                ["Actuación", "Ajustable"],
                ["Iluminación", "LIGHTSYNC RGB"],
                ["Conexión", "Cableada"],
                ["Configuración", "G HUB"],
                ["Orientación", "Gaming competitivo"]
            ],
            destacado: "Teclado gaming avanzado con switches magnéticos y punto de actuación ajustable.",
            fuente: "https://www.logitechg.com/en-us/shop/p/pro-x-tkl-rapid"
        },

        producto2: {
            marca: "HyperX",
            nombre: "Alloy Origins Core",
            precio: "US$104.99 MSRP",
            precioNota: "Precio oficial de referencia",
            badge: "TKL",
            specs: [
                ["Formato", "Tenkeyless"],
                ["Switches", "Mecánicos HyperX"],
                ["Estructura", "Aluminio"],
                ["Iluminación", "RGB"],
                ["Cable", "USB-C desmontable"],
                ["Ángulos", "3 posiciones"],
                ["Software", "NGENUITY"],
                ["Anti-Ghosting", "Sí"]
            ],
            destacado: "Teclado mecánico compacto con cuerpo completo de aluminio y cable USB-C desmontable.",
            fuente: "https://hyperx.com/collections/gaming-keyboards/products/hyperx-alloy-origins-core-mechanical-gaming-keyboard"
        },

        recomendacion: {
            ganador: "HyperX Alloy Origins Core",
            texto: "Recomendamos el HyperX Alloy Origins Core si se busca una excelente relación entre precio, construcción y rendimiento. El Logitech PRO X TKL RAPID incorpora tecnología más avanzada con switches magnéticos y Rapid Trigger, pero también tiene un precio considerablemente mayor."
        }
    },



    {
        id: 13,
        nombre: "Mouse",
        tipo: "externo",
        icono: "🖱️",
        marcas: "Logitech vs Razer",
        completa: true,

        producto1: {
            marca: "Logitech",
            nombre: "G502 X",
            precio: "US$99.99",
            precioNota: "Precio oficial de referencia",
            badge: "HERO 25K",
            specs: [
                ["Sensor", "HERO 25K"],
                ["Peso", "89 g"],
                ["Switches", "LIGHTFORCE"],
                ["Conectividad", "Cableada"],
                ["Diseño", "Mano derecha"],
                ["Uso", "Gaming"],
                ["Sensor", "Óptico"],
                ["Software", "Logitech G HUB"]
            ],
            destacado: "Versión modernizada del popular G502 con menor peso y switches óptico-mecánicos.",
            fuente: "https://www.logitechg.com/en-us/shop/p/g502-x-wired-lightforce"
        },

        producto2: {
            marca: "Razer",
            nombre: "Basilisk V3",
            precio: "US$69.99",
            precioNota: "Precio Razer · modelo Basilisk V3",
            badge: "26K DPI",
            specs: [
                ["Sensor", "Óptico"],
                ["Sensibilidad", "26,000 DPI"],
                ["Peso", "101 g"],
                ["Botones", "11 programables"],
                ["Switches", "Ópticos Gen 2"],
                ["Durabilidad", "70 millones de clics"],
                ["Iluminación", "11 zonas RGB"],
                ["Conectividad", "Cableada"]
            ],
            destacado: "Mouse altamente configurable con 11 botones programables y rueda HyperScroll.",
            fuente: "https://www.razer.com/latam-es/gaming-mice/razer-basilisk-v3"
        },

        recomendacion: {
            ganador: "Logitech G502 X",
            texto: "Recomendamos el Logitech G502 X por su menor peso de 89 gramos, su sensor HERO 25K y los switches LIGHTFORCE. El Razer Basilisk V3 destaca si se prefieren más botones programables y una iluminación RGB mucho más completa."
        }
    },



    {
        id: 14,
        nombre: "Audífonos",
        tipo: "externo",
        icono: "🎧",
        marcas: "HyperX vs Logitech",
        completa: true,

        producto1: {
            marca: "HyperX",
            nombre: "Cloud III",
            precio: "US$99.99 aprox.",
            precioNota: "Precio de referencia",
            badge: "53 MM",
            specs: [
                ["Drivers", "53 mm"],
                ["Respuesta", "10 Hz - 21 kHz"],
                ["Impedancia", "64 Ω"],
                ["Micrófono", "Desmontable"],
                ["Cancelación mic.", "Sí"],
                ["Conexiones", "3.5 mm / USB-C / USB-A"],
                ["Diseño", "Over-ear"],
                ["Compatibilidad", "PC / consola / móvil"]
            ],
            destacado: "Headset gaming orientado a comodidad, durabilidad y compatibilidad multiplataforma.",
            fuente: "https://hyperx.com/products/hyperx-cloud-iii-wired-gaming-headset"
        },

        producto2: {
            marca: "Logitech",
            nombre: "PRO X 2 LIGHTSPEED",
            precio: "US$249.99 aprox.",
            precioNota: "Precio de referencia",
            badge: "WIRELESS",
            specs: [
                ["Conexión", "LIGHTSPEED"],
                ["Bluetooth", "Sí"],
                ["Drivers", "Grafeno de 50 mm"],
                ["Micrófono", "Cardioide"],
                ["Tecnología", "Blue VO!CE"],
                ["Diseño", "Inalámbrico"],
                ["Uso", "Gaming competitivo"],
                ["Compatibilidad", "PC / consola"]
            ],
            destacado: "Headset inalámbrico premium con conexión LIGHTSPEED, Bluetooth y tecnología Blue VO!CE.",
            fuente: "https://www.logitechg.com/en-us/products/gaming-audio/pro-x-2-wireless-headset.html"
        },

        recomendacion: {
            ganador: "HyperX Cloud III",
            texto: "Recomendamos el HyperX Cloud III para la mayoría de usuarios porque ofrece buena calidad de audio, comodidad y compatibilidad con varias plataformas a un precio considerablemente menor. El Logitech PRO X 2 LIGHTSPEED es más avanzado por su conectividad inalámbrica y tecnologías adicionales, pero también es mucho más costoso."
        }
    },



    {
        id: 15,
        nombre: "Bocinas",
        tipo: "externo",
        icono: "🔊",
        marcas: "Logitech vs Creative",
        completa: true,

        producto1: {
            marca: "Logitech",
            nombre: "Z407",
            precio: "US$129.99",
            precioNota: "Precio oficial de referencia",
            badge: "2.1",
            specs: [
                ["Potencia", "80 W"],
                ["Sistema", "2.1"],
                ["Subwoofer", "Sí"],
                ["Bluetooth", "Sí"],
                ["DSP", "Sí"],
                ["Control", "Dial inalámbrico"],
                ["Alcance control", "Hasta 20 m"],
                ["Uso", "PC / multimedia"]
            ],
            destacado: "Sistema 2.1 con subwoofer, 80 W de potencia y control inalámbrico.",
            fuente: "https://www.logitech.com/en-us/shop/p/z407-bluetooth-computer-speakers"
        },

        producto2: {
            marca: "Creative",
            nombre: "Pebble Pro",
            precio: "US$59.99 aprox.",
            precioNota: "Precio de referencia según región",
            badge: "2.0",
            specs: [
                ["Sistema", "2.0"],
                ["Conexión", "USB-C"],
                ["Bluetooth", "5.3"],
                ["Iluminación", "RGB"],
                ["Tecnología", "BassFlex"],
                ["Audio USB", "Sí"],
                ["Diseño", "Compacto"],
                ["Uso", "Escritorio"]
            ],
            destacado: "Sistema compacto USB-C con Bluetooth 5.3, RGB y tecnología BassFlex.",
            fuente: "https://us.creative.com/p/speakers/creative-pebble-pro"
        },

        recomendacion: {
            ganador: "Creative Pebble Pro",
            texto: "Recomendamos Creative Pebble Pro para un escritorio donde se busque buena conectividad, tamaño compacto y menor costo. Logitech Z407 es preferible cuando se desea mayor potencia y graves más fuertes gracias a su subwoofer dedicado."
        }
    },



    {
        id: 16,
        nombre: "Webcams",
        tipo: "externo",
        icono: "📷",
        marcas: "Logitech vs Razer",
        completa: true,

        producto1: {
            marca: "Logitech",
            nombre: "Brio 500",
            precio: "US$129.99",
            precioNota: "Precio oficial de referencia",
            badge: "1080P",
            specs: [
                ["Resolución", "1080p"],
                ["FPS 1080p", "30 FPS"],
                ["FPS 720p", "60 FPS"],
                ["Campo de visión", "90° / 78° / 65°"],
                ["Zoom", "4x digital"],
                ["Enfoque", "Automático"],
                ["Micrófonos", "Estéreo"],
                ["Conexión", "USB-C"]
            ],
            destacado: "Webcam Full HD con corrección automática de iluminación, autoencuadre y Show Mode.",
            fuente: "https://www.logitech.com/en-us/shop/p/brio-500-webcam"
        },

        producto2: {
            marca: "Razer",
            nombre: "Kiyo Pro",
            precio: "US$179.00 aprox.",
            precioNota: "Precio de referencia · Razer Kiyo Pro",
            badge: "1080P 60",
            specs: [
                ["Resolución", "1080p"],
                ["FPS máximo", "60 FPS"],
                ["HDR", "1080p a 30 FPS"],
                ["Sensor", "Sony STARVIS"],
                ["Campo de visión", "103° / 90° / 80°"],
                ["Enfoque", "Automático"],
                ["Conexión", "USB 3.0"],
                ["Micrófonos", "Estéreo"]
            ],
            destacado: "Webcam pensada para streaming con 1080p a 60 FPS y sensor adaptativo de luz.",
            fuente: "https://www.razer.com/latam-es/streaming-cameras/razer-kiyo-pro"
        },

        recomendacion: {
            ganador: "Razer Kiyo Pro",
            texto: "Recomendamos la Razer Kiyo Pro para creación de contenido y streaming porque puede grabar Full HD 1080p a 60 FPS e incorpora HDR a 30 FPS. La Logitech Brio 500 resulta excelente para videollamadas y reuniones gracias a su autoencuadre y Show Mode."
        }
    },



    {
        id: 17,
        nombre: "Micrófonos",
        tipo: "externo",
        icono: "🎙️",
        marcas: "HyperX vs Logitech",
        completa: true,

        producto1: {
            marca: "HyperX",
            nombre: "QuadCast 2",
            precio: "US$149.99 MSRP",
            precioNota: "Precio regular de referencia",
            badge: "24-BIT",
            specs: [
                ["Grabación", "24-bit / 96 kHz"],
                ["Respuesta", "20 Hz - 20 kHz"],
                ["Patrones", "4"],
                ["Conexión", "USB-C"],
                ["Salida audífonos", "3.5 mm"],
                ["Tap-to-Mute", "Sí"],
                ["Montura", "Antivibración"],
                ["Software", "NGENUITY"]
            ],
            destacado: "Micrófono USB de alta resolución con cuatro patrones polares y sensor táctil para silenciar.",
            fuente: "https://hyperx.com/products/hyperx-quadcast-2-usb-microphone"
        },

        producto2: {
            marca: "Logitech",
            nombre: "Yeti",
            precio: "US$139.99",
            precioNota: "Precio regular oficial de referencia",
            badge: "BLUE VO!CE",
            specs: [
                ["Tipo", "USB"],
                ["Patrones", "Múltiples"],
                ["Software", "Blue VO!CE"],
                ["Uso", "Podcast / streaming"],
                ["Monitoreo", "Sí"],
                ["Conexión", "USB"],
                ["Controles", "Integrados"],
                ["Software PC", "G HUB"]
            ],
            destacado: "Uno de los micrófonos USB más conocidos para streaming y podcasting, con múltiples patrones.",
            fuente: "https://www.logitechg.com/en-us/shop/p/yeti-premium-usb-microphone"
        },

        recomendacion: {
            ganador: "HyperX QuadCast 2",
            texto: "Recomendamos el HyperX QuadCast 2 porque ofrece grabación de hasta 24-bit y 96 kHz, cuatro patrones polares y un sistema antivibración incluido. El Logitech Yeti sigue siendo una opción muy versátil, especialmente por su integración con Blue VO!CE."
        }
    },



    {
        id: 18,
        nombre: "Impresoras",
        tipo: "externo",
        icono: "🖨️",
        marcas: "HP vs Epson",
        completa: true,

        producto1: {
            marca: "HP",
            nombre: "Smart Tank 580",
            precio: "US$196.20 aprox.",
            precioNota: "Equivalente de Q1,499 · referencia Guatemala",
            badge: "SMART TANK",
            specs: [
                ["Funciones", "Imprime / copia / escanea"],
                ["Negro ISO", "Hasta 12 ppm"],
                ["Resolución negro", "1200 × 1200 dpi"],
                ["Color", "Hasta 4800 × 1200 dpi"],
                ["Wi-Fi", "Sí"],
                ["Wi-Fi Direct", "Sí"],
                ["Bandeja entrada", "100 hojas"],
                ["Tecnología", "HP Thermal Inkjet"]
            ],
            destacado: "Multifuncional de tanque continuo con conexión inalámbrica y compatibilidad con impresión móvil.",
            fuente: "https://support.hp.com/us-en/product/product-specs/hp/2100426104"
        },

        producto2: {
            marca: "Epson",
            nombre: "EcoTank L3250",
            precio: "US$227.75 aprox.",
            precioNota: "Equivalente de Q1,740 · referencia Guatemala",
            badge: "ECOTANK",
            specs: [
                ["Funciones", "Imprime / copia / escanea"],
                ["Negro ISO", "10 ppm"],
                ["Color ISO", "5 ppm"],
                ["Velocidad borrador", "33 ppm negro"],
                ["Resolución", "5760 × 1440 dpi"],
                ["Wi-Fi", "Sí"],
                ["Wi-Fi Direct", "Sí"],
                ["Tecnología", "MicroPiezo Heat-Free"]
            ],
            destacado: "Impresora EcoTank de bajo costo por página con conectividad Wi-Fi y sistema sin cartuchos.",
            fuente: "https://epson.com.ec/Para-el-hogar/Impresoras/Inyecci%C3%B3n-de-tinta/Impresora-Multifuncional-Inl%C3%A1mbrica-EcoTank-L3250/p/C11CJ67301"
        },

        recomendacion: {
            ganador: "Epson EcoTank L3250",
            texto: "Recomendamos la Epson EcoTank L3250 cuando se imprimen grandes cantidades debido a su sistema EcoTank y su enfoque en un bajo costo por página. HP Smart Tank 580 también es una excelente alternativa y ofrece una velocidad ISO en negro ligeramente superior."
        }
    },



    {
        id: 19,
        nombre: "Almacenamiento Externo",
        tipo: "externo",
        icono: "▱",
        marcas: "Samsung vs SanDisk",
        completa: true,

        producto1: {
            marca: "Samsung",
            nombre: "T7 Shield 2TB",
            precio: "US$574.99",
            precioNota: "Precio Samsung US · 2 TB · oct. 2026",
            badge: "IP65",
            specs: [
                ["Capacidad", "2 TB"],
                ["Lectura", "Hasta 1050 MB/s"],
                ["Escritura", "Hasta 1000 MB/s"],
                ["Interfaz", "USB 3.2 Gen 2"],
                ["Resistencia", "IP65"],
                ["Caídas", "Hasta 3 metros"],
                ["Cifrado", "AES 256-bit"],
                ["Garantía", "3 años"]
            ],
            destacado: "SSD portátil resistente al agua, polvo y caídas con velocidades superiores a 1 GB/s.",
            fuente: "https://www.samsung.com/us/memory-storage/portable-ssd/portable-ssd-t7-shield-usb-3-2-2tb-black-sku-mu-pe2t0s-am/"
        },

        producto2: {
            marca: "SanDisk",
            nombre: "Extreme Portable SSD 2TB",
            precio: "US$595.95 aprox.",
            precioNota: "Precio de referencia · SanDisk 2 TB",
            badge: "IP65",
            specs: [
                ["Capacidad", "2 TB"],
                ["Lectura", "Hasta 1050 MB/s"],
                ["Escritura", "Hasta 1000 MB/s"],
                ["Interfaz", "USB 3.2 Gen 2"],
                ["Resistencia", "IP65"],
                ["Caídas", "Hasta 3 metros"],
                ["Conector", "USB-C"],
                ["Garantía", "5 años"]
            ],
            destacado: "SSD NVMe portátil compacto, resistente y diseñado para transportar archivos de gran tamaño.",
            fuente: "https://www.sandisk.com/products/ssd/external-ssd/portable-ssd-sandisk-extreme-usb-3-2"
        },

        recomendacion: {
            ganador: "SanDisk Extreme Portable SSD 2TB",
            texto: "Los dos SSD alcanzan hasta 1050 MB/s de lectura y 1000 MB/s de escritura, además de contar con protección IP65. Recomendamos SanDisk Extreme porque su garantía limitada es de 5 años, mientras que Samsung especifica 3 años para el T7 Shield."
        }
    },



    {
        id: 20,
        nombre: "UPS",
        tipo: "externo",
        icono: "🔋",
        marcas: "APC vs CyberPower",
        completa: true,

        producto1: {
            marca: "APC",
            nombre: "Back-UPS Pro BR1500MS2",
            precio: "US$339.99 aprox.",
            precioNota: "Precio de referencia · APC 1500 VA",
            badge: "1500 VA",
            specs: [
                ["Capacidad", "1500 VA"],
                ["Potencia", "900 W"],
                ["Voltaje", "120 V"],
                ["Tomacorrientes", "10"],
                ["AVR", "Sí"],
                ["Pantalla", "LCD"],
                ["USB", "USB-A + USB-C"],
                ["Batería", "Reemplazable"]
            ],
            destacado: "UPS de 1500 VA con regulación automática de voltaje y batería reemplazable.",
            fuente: "https://www.apc.com/us/en/product/BR1500MS2/"
        },

        producto2: {
            marca: "CyberPower",
            nombre: "CP1500PFCLCD",
            precio: "US$274.95 MSRP",
            precioNota: "Precio oficial de referencia",
            badge: "1500 VA",
            specs: [
                ["Capacidad", "1500 VA"],
                ["Potencia", "1000 W"],
                ["Topología", "Line Interactive"],
                ["Onda", "Senoidal"],
                ["Tomacorrientes", "12"],
                ["USB", "2 puertos"],
                ["Pantalla", "LCD"],
                ["Garantía", "3 años"]
            ],
            destacado: "UPS de onda senoidal orientado a computadoras de alto rendimiento y fuentes con PFC activo.",
            fuente: "https://www.cyberpowersystems.com/product/ups/pfc-sinewave/cp1500pfclcd/"
        },

        recomendacion: {
            ganador: "CyberPower CP1500PFCLCD",
            texto: "Recomendamos el CyberPower CP1500PFCLCD porque ofrece 1500 VA y hasta 1000 W, superando los 900 W del APC comparado. Además dispone de 12 tomacorrientes y salida de onda senoidal. APC sigue destacando por su reconocida línea Back-UPS Pro y batería reemplazable."
        }
    }

];

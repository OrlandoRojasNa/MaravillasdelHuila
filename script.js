// Datos de municipios y categorías
const municipalities = [
    {
        title: "Acevedo",
        categories: [
            {
                name: 'Petroglifos en el Municipio de Acevedo',
                description: 'Los petroglifos muestran figuras zoomorfas, en las que se aprecian aves, serpientes, lagartos y caracoles. Hay también representaciones del sol, la vida, la fertilidad, la muerte y algunas son fantasmagóricas. Los petroglifos son grabados sobre roca realizados por pueblos prehistóricos, en los que dejaron registro sobre sus vidas y sociedades humanas De acuerdo con Podestá, Fernández Scheinsohn y Sánchez, “El arte rupestre es una parte importante del patrimonio cultural, es un testimonio del pasado que brinda no solo un placer estético para quien lo observe actualmente sino una invalorable información sobre los grupos humanos del pasado”.Los estudios sobre petroglifos son escasos, solo son de carácter descriptivo, no conectan con la estructura social y económica de la región.',
                image1: 'images/acevedo/1.png',
                image2: 'images/acevedo/2.png',
                image3: 'images/acevedo/2.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.9264196837676!2d-75.89982534487824!3d1.7645232987408135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25a9f829bf017f%3A0x3fc7b5ee9a2a220b!2sPetroglifos%20Acevedo!5e0!3m2!1ses!2sco!4v1726765541907!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Parque Nacional Cueva de los Guácharos',
                description: 'La Cueva de los Guácharos en 1960, junto con las demás cuevas formadas por el río Suaza en su parte alta, se convirtieron en el primer Parque Nacional Natural creado en Colombia. Esta área protegida es una de las últimas extensiones de selva andina bien conservadas del sur del Huila, donde se protegen especies vegetales amenazadas de extinción.Este parque natural toma su nombre de los Guácharos, aves que pasan el día en cuevas oscuras y profundas y salen durante la noche a buscar frutos, orientándose mediante un sistema de ecolocalización que recuerda al de los murciélagos.',
                image1: 'images/guacharos/1.png',
                image2: 'images/guacharos/2.png',
                image3: 'images/guacharos/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1717652295918!2d-76.22538033045235!3d1.3644336999139204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25eefffffffd87%3A0x168acf244bf73bb0!2sParque%20Nacional%20Cueva%20de%20los%20Guacharos!5e0!3m2!1ses!2sco!4v1726766072536!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Reserva Natural y Ecoturística La Avispa',
                description: "La Reserva Natural y Eco turística La Avispa, es un espacio natural dedicado a la conservación, en donde se realizan actividades de naturaleza. Combinamos la majestuosidad del bosque con aventura, para crear una cultura de amor, amigable con el medio ambiente",
                image1: 'images/avispa/1.png',
                image2: 'images/avispa/2.png',
                image3: 'images/avispa/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2252996832826!2d-75.67176432503372!3d1.6191467983657863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e244d78cc9e974b%3A0xc681a9c8ca5f4c49!2sQu%C3%A9%20hacer%20en%20Caquet%C3%A1%20-%20Reserva%20Natural%20Y%20Ecoturistica%20La%20Avispa!5e0!3m2!1ses!2sco!4v1726766373271!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Centro Cultural, Artesanal y Gastronómico El Tribuno del Pueblo',
                description: "El Tribuno del Pueblo es un edén para los amantes del arte y la cultura, un lugar donde la tradición se fusiona con la modernidad. Sus paredes, adornadas con vibrantes obras de arte y artesanías locales, cuentan las historias de Acevedo a través de los siglos. La fragancia de las flores y el aroma de la comida casera crean una atmósfera única que invita a la relajación y la contemplación. Además de disfrutar de una deliciosa gastronomía preparada con ingredientes frescos de la región, los visitantes pueden sumergirse en la vida cultural de Acevedo a través de conciertos en vivo, exposiciones y talleres artísticos. No pierdas la oportunidad de visitar este tesoro escondido y descubrir por qué El Tribuno del Pueblo es un referente cultural en la región.",
                image1: 'images/triunfo/1.png',
                image2: 'images/triunfo/2.png',
                image3: 'images/triunfo/3.png',
                location: ''
            },
            {
                name: 'Balneario El Poira: Un Refugio Natural en Acevedo, Huila',
                description: "El Balneario El Poira es un verdadero paraíso para los amantes de la naturaleza y los deportes acuáticos. Ubicado en el hermoso municipio de Acevedo, Huila, este balneario se destaca por sus aguas cristalinas, su exuberante vegetación y su ambiente tranquilo y relajante. El balneario ofrece paisajes encantadores, actividades actuaticas, zona de camping, senderos ecológicos y zona de comidas",
                image1: 'images/balneareo/1.png',
                image2: 'images/balneareo/2.png',
                image3: 'images/balneareo/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.337567470155!2d-75.8898759893119!3d1.8069330989873174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25064a30e6e833%3A0x6cbab2f743781d0e!2sBalneario%20El%20Poira!5e0!3m2!1ses!2sco!4v1726767158724!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Aipe",
        categories: [
            {
                name: 'Cañón del Pipilicua',
                description: 'El Cañón del Pipilicua, ubicado en el municipio de Aipe, Huila, es un destino imperdible para los amantes de la naturaleza y la aventura. Este impresionante cañón, formado por la erosión del río Pipilicua, te ofrece un paisaje espectacular donde podrás conectar con la naturaleza de una manera única. ¿Qué te espera en el Cañón del Pipilicua? Senderos exuberantes: Recorre senderos que te llevarán a través de una vegetación exuberante, con una gran variedad de flora y fauna. Cascadas cristalinas: Disfruta del sonido relajante del agua al caer por las cascadas y refréscate en sus piscinas naturales. Formaciones rocosas únicas: Admira las impresionantes formaciones rocosas que han sido esculpidas por la naturaleza a lo largo de los años. Aventura y emoción: Realiza actividades como senderismo, rappel y escalada, siempre bajo la supervisión de guías expertos. Paz y tranquilidad: Conéctate con la naturaleza y disfruta de la tranquilidad de este entorno mágico. ¿Qué hacer en el Cañón del Pipilicua? Senderismo: Explora los diferentes senderos que te llevarán a los rincones más escondidos del cañón. Camping: Pasa la noche bajo las estrellas y disfruta de la naturaleza en estado puro. Fotografía: Captura momentos inolvidables con tu cámara y comparte las bellezas del cañón con tus amigos. Observación de aves: Si eres amante de la observación de aves, el cañón te ofrece la oportunidad de avistar diversas especies. Bañarse en las piscinas naturales: Refrescante y revitalizante, nada mejor que un baño en las cristalinas aguas de las piscinas naturales del cañón. Recomendaciones: Lleva ropa y calzado cómodos: El terreno puede ser irregular, así que asegúrate de llevar calzado adecuado para caminar. Hidrátate bien: Lleva suficiente agua para mantenerte hidratado durante la caminata. Utiliza protector solar y repelente de insectos: Protégete del sol y los insectos. Respeta el medio ambiente: No dejes basura y evita dañar la flora y fauna. Contrata un guía local: Un guía te puede mostrar los mejores lugares y te puede contar historias sobre el cañón.',
                image1: 'images/canon/1.png',
                image2: 'images/canon/2.png',
                image3: 'images/canon/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509858.0148823923!2d-75.68490494375!3d3.284177799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3bbfcb74b23379%3A0xe7e4eb9a21c6e4d9!2sEstrecho%20de%20Pipilicua!5e0!3m2!1ses!2sco!4v1726768787468!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },

        ]
    },
    {
        title: "Algeciras",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Altamira",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Baraya",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Campoalegre",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Colombia",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Elías",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "El Agrado",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Garzón",
        categories: [
            {
                name: 'El Balcón del Huila',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'La Jagua',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador de Totoy',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Salto Las Damas',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },

        ]
    },
    {
        title: "Gigante",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Guadalupe",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Hobo",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Iquira",
        categories: [
            {
                name: 'Mirador La Loma de la Cruz',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador del Parque Principal',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Isnos",
        categories: [
            {
                name: 'Mirador Mayú',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador del Magdalena',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador El Salto del Mortiño',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador La Chaquira',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "La Argentina",
        categories: [
            {
                name: 'Mirador Pegassus',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador El Alto de la Virgen',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador La Cabaña',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "La Plata",
        categories: [
            {
                name: 'Mirador Panorama 360o',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador Mocca',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador La Playa',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador El Salto de la Vieja',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador San Juan',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Nátaga",
        categories: [
            {
                name: 'Mirador El Copey',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Santuario de Nuestra Señora de las Mercedes',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador La Virgen',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador El Alto del Cuchillo',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador La Cabaña',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Neiva",
        categories: [
            {
                name: 'Mirador Mohán',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador Malecón',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador la Chaquira',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador del Parque Isla de San Pedro',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }, {
                name: 'Mirador Cerro Neiva',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Oporapa",
        categories: [
            {
                name: 'Mirador El Cañón',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador La Loma',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador El Alto de la Cruz',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador Las Palmas',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Paicol",
        categories: [
            {
                name: 'Mirador La Caja de Agua',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Rafting en el río Páez',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Senderismo',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Palermo",
        categories: [
            {
                name: 'Mirador La calera',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Palestina",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Pital",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Pitalito",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Rivera",
        categories: [
            {
                name: 'Termales de San Francisco',
                description: "Existen dos tipos de aguas termales de acuerdo a su origen geológico, las magmáticas y las telúricas. Las de Termales de San Francisco son Telúricas, estas tienen menor temperatura que las magmáticas y contienen sales, bicarbonato y cloruros. Servicios: 🏊‍♂️ Dos piscinas y un mini jacuzzi de agua termal. 💦 Una piscina de agua natural fría. 🛏️ Cinco Habitaciones con baño privado, aire acondicionado, TV LCD, WIFI. 🍽️ Restaurante. 🍺 Bar. 🅿️ Parqueadero gratis.",
                image1: 'images/rivera/1.png',
                image2: 'images/rivera/2.png',
                image3: 'images/rivera/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.21698884427!2d-75.24076132503039!3d2.7519755972251994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b695ae7e0f21f%3A0xae325dc6ed6aff23!2sTermales%20San%20Francisco%20-%20Casa%20Hotel!5e0!3m2!1ses!2sco!4v1727757303573!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Granja Integral Modelo Experimental',
                description: "La Granja Integral Modelo Experimental (GIME), tiene como objetivo principal, brindar los espacios necesarios para las buenas prácticas agrícolas, ganaderas científicas y ambientales con el único fin de sensibilizar y direccionar al buen uso y manejo de estas actividades a la comunidad en general.",
                image1: 'images/granja/1.png',
                image2: 'images/granja/2.png',
                image3: 'images/granja/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.1832477357484!2d-75.25733062503035!3d2.762049097215086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b6bf8c492797d%3A0x34bf6ee67cdf272e!2sGranja%20Integral%20Modelo%20Experimental%20(GIME)!5e0!3m2!1ses!2sco!4v1727757643763!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Finca Miraflores',
                description: "Colombia – Depto. del Huila – (Subregión Norte) – Municipio de Rivera – Vereda El Arrayanal Metros sobre el nivel del mar: 1.624. Destacar: Un área de la finca esta dentro del Parque Natural Regional La Siberia. Fue uno de los lugares de encuentro en el Huila para contribuir al evento internacional sobre avistamiento de aves Global Big Day. La finca promueve y aplica la conservación de los recursos naturales y la conservación de la Biodiversidad. El PNR La Siberia alberga 186 especies de aves.",
                image1: 'images/granja/4.png',
                image2: 'images/granja/5.png',
                image3: 'images/granja/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020358.6814731655!2d-76.39104734465398!3d2.5793350625600544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257737ba8d6fa3%3A0x35c67111f65df00a!2sFinca%20Miraflores!5e0!3m2!1ses!2sco!4v1727757895485!5m2!1ses!2sco" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Saladoblanco",
        categories: [
            {
                name: 'Termales de Morelia',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'El Arco de Las Jarras',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Cascada El Socorro',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Salto de Bordones',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }

        ]
    },
    {
        title: "Santa María",
        categories: [
            {
                name: 'Cerro de la Cruz ',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Cascadas La Marsella y Yarumal',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Cascada ‘Las Golondrinas’',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'La Morada Del Viento',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "San Agustín",
        categories: [
            {
                name: 'Mirador del Doble Yo',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Eco Reserva Waka Willka',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Reserva Natural Portal del Oso',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'PAOCOS',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador El Estrecho',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Suaza",
        categories: [
            {
                name: 'Parque Natural Regional Cueva de los Guácharos',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Cascadas del Río Suaza',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Iglesia de Nuestra Señora de la Asunción',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Tarqui",
        categories: [
            {
                name: 'Bosque Turístico Los Pinos de Tarqui',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador San Esteban',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Tello",
        categories: [
            {
                name: 'Parque Municipal de Tello',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },

        ]
    },
    {
        title: "Teruel",
        categories: [
            {
                name: 'Centro Recreacional El Paraiso Teruel Huila',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Parque turístico de Teruel',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Tesalia",
        categories: [
            {
                name: 'Mirador del Águila',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'La cafetería sobre el Valle Escondido, Brisas del Cafetal',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Cañón del Simio',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Ecoposada La Victoria',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Mirador del Águila',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Timana",
        categories: [
            {
                name: 'Parque Principal Timana Huila',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Yaguara y el embalse de Betania',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Parque Ángel María Paredes',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Villavieja",
        categories: [
            {
                name: 'Museo de Historia Natural La Tatacoa',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Museo Paleontológico',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Desierto de la tatacoa',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Observatorio Astronómico de la Tatacoa',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            },
            {
                name: 'Museo Artesanal Casa del Totumo',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "Yaguara",
        categories: [
            {
                name: '',
                description: "",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },
    {
        title: "inicio",
        categories: [
            {
                name: 'inicio 1',
                description: "esta es la descripicon del inciio u1",
                image1: 'images//1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: ''
            }
        ]
    },

];


// Referencias a elementos 
const municipalityList = document.getElementById('municipality-list');
const categoryList = document.getElementById('category-list');
const categoryDetails = document.getElementById('category-details');

// Función para cargar los municipios
function loadMunicipalities() {
    municipalities.forEach((municipality, index) => {
        const li = document.createElement('li');
        li.textContent = municipality.title;
        li.classList.add('municipality-item');
        li.addEventListener('click', () => loadCategories(index));
        municipalityList.appendChild(li);
    });
}

// Función para cargar las categorías de un municipio con botones horizontales
function loadCategories(municipalityIndex) {
    const selectedMunicipality = municipalities[municipalityIndex];

    // Limpiar las listas anteriores
    categoryList.innerHTML = '';
    categoryDetails.innerHTML = '';

    selectedMunicipality.categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.textContent = category.name;
        button.classList.add('category-btn');
        button.addEventListener('click', () => showCategoryDetails(municipalityIndex, index));
        categoryList.appendChild(button);
    });
}

// Función para mostrar los detalles de una categoría
function showCategoryDetails(municipalityIndex, categoryIndex) {
    const category = municipalities[municipalityIndex].categories[categoryIndex];

    categoryDetails.innerHTML = `
        <h2>${category.name}</h2>
        <p>${category.description}</p>

        <!-- Contenedor de galería -->
        <div class="image-gallery">
            <div class="image-wrapper">
                <img src="${category.image1}" alt="${category.name} Image 1">
            </div>
            <div class="image-wrapper">
                <img src="${category.image2}" alt="${category.name} Image 2">
            </div>
            <div class="image-wrapper">
                <img src="${category.image3}" alt="${category.name} Image 3">
            </div>
        </div>

        <div class="location-details">${category.location}</div>
    `;

    // Actualizar la selección de botón
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => button.classList.remove('selected'));
    buttons[categoryIndex].classList.add('selected');
}

// Función para mostrar/ocultar el menú lateral en móviles (si aplica)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Cargar los municipios al cargar la página
loadMunicipalities();

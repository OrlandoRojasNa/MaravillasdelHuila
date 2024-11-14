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
                image3: 'images/acevedo/3.png',
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
                name: 'Mirador TerraLuz: Una Ventana al Paisaje Huilense',
                description: "Mirador TerraLuz: Una Ventana al Paisaje Huilense El Mirador TerraLuz es un punto estratégico en Altamira, Huila, que ofrece una vista panorámica impresionante de la región. Su ubicación privilegiada permite a los visitantes apreciar la belleza natural del departamento, con sus montañas, valles y la inmensidad del cielo huilense. ¿Qué hace especial a este mirador? Vista panorámica: Desde el Mirador TerraLuz, podrás disfrutar de una vista de 360 grados que abarca gran parte del paisaje huilense. Es el lugar perfecto para tomar fotografías y apreciar la majestuosidad de la naturaleza. Tranquilidad y paz: El ambiente es ideal para relajarse y desconectarse de la rutina. El sonido de la naturaleza y la brisa fresca te envolverán en una atmósfera de tranquilidad. Accesibilidad: El mirador es de fácil acceso y cuenta con espacios adecuados para disfrutar de la vista. Actividades: Además de admirar el paisaje, puedes realizar actividades como senderismo en los alrededores y disfrutar de un picnic en compañía de amigos o familiares. ¿Qué puedes ver desde el mirador? Paisajes campestres: La vista se extiende por campos verdes, cultivos y pequeñas poblaciones, ofreciendo un panorama típico de la región. Montañas: Las montañas que rodean Altamira se aprecian en todo su esplendor, creando un paisaje majestuoso. Cielo despejado: En días claros, podrás observar un cielo inmenso y apreciar la belleza de las nubes.",
                image1: 'images/altamira/1.png',
                image2: 'images/altamira/2.png',
                image3: 'images/altamira/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.843704141707!2d-75.1777388!3d2.8614489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b711bbe826e55%3A0x72e853c01474b676!2sMirador%20TerraLuz!5e0!3m2!1ses!2sco!4v1729176434670!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
                description: "Ubicado a tan solo 14 kilómetros del casco urbano de Garzón, Huila, y a 1.600 metros sobre el nivel del mar, El Balcón del Huila es un mirador que te ofrece una vista panorámica impresionante de la región. Este lugar es perfecto para los amantes de la naturaleza y aquellos que buscan conectar con el entorno. ¿Qué puedes encontrar en El Balcón del Huila? Paisajes espectaculares: Disfruta de una vista inigualable de los cafetales, montañas y la represa de El Quimbo. La naturaleza te envolverá con su belleza y tranquilidad. Zonas de descanso: Relájate en los espacios diseñados para que te desconectes de la rutina y disfrutes del momento. Actividades para todos: Tanto si viajas solo, en pareja o en familia, encontrarás actividades que se adaptan a tus intereses. Puedes hacer senderismo, disfrutar de un picnic o simplemente contemplar el paisaje. Gastronomía local: Degusta los sabores del Huila en el restaurante del lugar, donde podrás probar platos típicos y disfrutar de un delicioso café de la región. Observatorio de aves: Si eres amante de la observación de aves, este es el lugar ideal para ti. La diversidad de aves que habitan en la zona te sorprenderá.",
                image1: 'images/garzon/1.png',
                image2: 'images/garzon/2.png',
                image3: 'images/garzon/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0383026126174!2d-75.63574312527349!3d2.1389964978419544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24df1f47e8cedf%3A0xb9ae72efeb8e93a4!2sBalc%C3%B3n%20del%20Huila!5e0!3m2!1ses!2sco!4v1726770975444!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'La Jagua',
                description: "La Jagua es un corregimiento ubicado en el departamento del Huila, Colombia, que ha ganado fama por sus leyendas y tradiciones ancestrales. Este pintoresco pueblo, con sus casas de bahareque y techos de teja, te transportará a otra época. ¿Qué hace especial a La Jagua? Leyendas y brujería: La Jagua es conocida como el Pueblo de las Brujas. Su historia está envuelta en mitos y leyendas sobre hechicería y prácticas ancestrales. Aunque estas historias son parte del folclore local, han convertido a La Jagua en un destino único para aquellos interesados en lo esotérico. Arquitectura colonial: El casco urbano de La Jagua conserva gran parte de su arquitectura colonial, con casas de bahareque y calles empedradas. Fiestas tradicionales: A lo largo del año, La Jagua celebra diversas fiestas tradicionales, como el Festival de las Brujas, donde se realizan actividades culturales, desfiles y muestras gastronómicas. Naturaleza: A pesar de su fama mística, La Jagua también ofrece hermosos paisajes naturales, ideales para realizar caminatas y disfrutar de la tranquilidad del campo. Gastronomía: La cocina huilense es famosa por sus sabores auténticos. En La Jagua podrás degustar platos típicos como el tamal huilense, el asado y el tradicional café colombiano. ¿Qué puedes hacer en La Jagua? Visitar la plaza principal: Este es el corazón del pueblo, donde se encuentra la iglesia y donde se realizan las principales actividades. Explorar las calles: Camina por las calles empedradas y admira la arquitectura colonial. Conocer el museo: El museo local guarda objetos y documentos que cuentan la historia del pueblo. Asistir al Festival de las Brujas: Si tienes la oportunidad, no te pierdas este evento lleno de magia y tradición. Realizar actividades al aire libre: Disfruta de la naturaleza en los alrededores del pueblo, como caminatas y paseos en bicicleta.",
                image1: 'images/garzon/4.png',
                image2: 'images/garzon/5.png',
                image3: 'images/garzon/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.830766646433!2d-75.68889265656456!3d2.169790314974772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24d8dcb150875f%3A0x6453acf7e7d287b3!2sLa%20Jagua%2C%20Garz%C3%B3n%2C%20Huila!5e0!3m2!1ses!2sco!4v1726774158231!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador de Totoy',
                description: "El Mirador de Totoy es mucho más que un simple mirador. Es un refugio natural que te invita a desconectar de la rutina y sumergirte en la belleza del paisaje huilense. Ubicado en la vereda La Cabana, cerca de Garzón, este lugar te ofrece una vista panorámica impresionante de la represa del Quimbo, el gigante Matambo, y los municipios vecinos. ¿Qué hace especial al Mirador de Totoy? Paisaje único: Las vistas desde el mirador son simplemente espectaculares. Podrás apreciar la inmensidad de la represa, la majestuosidad de las montañas y la tranquilidad del entorno natural. Glamping de lujo: Si buscas una experiencia aún más especial, puedes hospedarte en las cabañas de glamping que ofrecen jacuzzi climatizado, wifi y todas las comodidades para que disfrutes al máximo tu estancia. Actividades al aire libre: Además de disfrutar de las vistas, puedes realizar diversas actividades como senderismo por senderos ecológicos, observación de aves y simplemente relajarte en la naturaleza. Tranquilidad y privacidad: El Mirador de Totoy es un lugar ideal para escapar del bullicio de la ciudad y disfrutar de momentos de paz y tranquilidad. ¿Qué puedes esperar de tu visita? Un amanecer o atardecer inolvidable: Las primeras luces del día o los últimos rayos del sol tiñen el paisaje de colores mágicos, creando una atmósfera única. Un contacto directo con la naturaleza: Rodeado de cafetales y vegetación, podrás respirar aire puro y conectar con la naturaleza. Una experiencia relajante: El jacuzzi climatizado de las cabañas te permitirá relajarte y disfrutar de las vistas en un ambiente cálido y acogedor. Fotografías espectaculares: Las vistas panorámicas del mirador te permitirán tomar fotos increíbles que querrás compartir con todos tus amigos y familiares. ¿Qué debes tener en cuenta? Reservar con anticipación: Si deseas hospedarte en las cabañas, te recomendamos reservar con anticipación, especialmente en temporada alta. Llevar ropa cómoda: El clima en la zona es agradable, pero es recomendable llevar ropa cómoda para caminar y explorar los alrededores. Respetar el entorno natural: Evita dejar basura y cuida la flora y fauna del lugar.",
                image1: 'images/garzon/7.png',
                image2: 'images/garzon/8.png',
                image3: 'images/garzon/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53640.566521113!2d-75.63027421426177!3d2.2069212893218824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24dbf0243c3b87%3A0x4bcbd9270621f68c!2sEl%20mirador%20de%20TOTOY!5e0!3m2!1ses!2sco!4v1726774308185!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Salto Las Damas',
                description: "Salto Las Damas Una joya escondida en el municipio de Garzón, Huila, que enamora a quienes buscan conectar con la naturaleza. Esta imponente cascada, con una altura aproximada de 20 metros, es el resultado de la fuerza de la quebrada Las Damas, que nace en el Parque Natural Regional Cerro Páramo de Miraflores. ¿Por qué visitar el Salto Las Damas? Naturaleza exuberante: El sendero que conduce a la cascada te sumerge en un entorno lleno de vegetación, aves y sonidos de la naturaleza. Refrescante baño natural: La piscina natural formada por la caída del agua es el lugar perfecto para refrescarte y disfrutar del paisaje. Aventura moderada: El sendero es accesible para la mayoría de las personas y ofrece una caminata agradable en medio de la naturaleza. Fotografías espectaculares: El entorno y la cascada misma ofrecen múltiples oportunidades para tomar fotos inolvidables. Tranquilidad y relajación: Alejarte del ruido de la ciudad y conectar con la naturaleza te permitirá recargar energías. ¿Qué debes saber antes de ir? Cómo llegar: Desde Garzón, puedes llegar al Salto Las Damas en vehículo particular o contratando un servicio de transporte. El camino está bien señalizado. Recomendaciones: Calzado cómodo: El sendero es un poco empinado en algunos tramos, por lo que se recomienda usar calzado adecuado para caminar. Repelente de insectos: Es recomendable llevar repelente, especialmente en la temporada de lluvias. Protector solar: Si visitas el lugar en horas de sol, no olvides llevar protector solar. Agua: Lleva suficiente agua para mantenerte hidratado durante la caminata. Respeta el entorno: Evita dejar basura y cuida la flora y fauna del lugar. Actividades que puedes realizar Senderismo: El sendero que conduce a la cascada es una excelente opción para los amantes del senderismo. Fotografía: Captura la belleza del paisaje y la cascada en diferentes ángulos. Picnic: Disfruta de un picnic junto a la cascada y rodeado de naturaleza. Observación de aves: Si eres amante de la observación de aves, podrás disfrutar de diversas especies en este entorno natural.",
                image1: 'images/garzon/10.png',
                image2: 'images/garzon/11.png',
                image3: 'images/garzon/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510335.3342140267!2d-76.23071961093748!3d2.155669900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24d955624da6fb%3A0x5f951582e3f87ef7!2sCascadas%20Las%20Damas!5e0!3m2!1ses!2sco!4v1726774006013!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Makuna Centro Turístico',
                description: "Makuna Centro Turístico es un destino que promete diversión y aventura para todas las edades. Ubicado en un entorno natural privilegiado, este parque temático ofrece una amplia variedad de actividades y atracciones que te permitirán conectar con la naturaleza y disfrutar de momentos inolvidables en familia o con amigos. ¿Qué puedes encontrar en Makuna Centro Turístico? Actividades al aire libre: Disfruta de emocionantes actividades como tirolesas, puentes colgantes, escalada, paseos en cuatrimoto y mucho más. Contacto con la naturaleza: Sumérgete en la belleza de la naturaleza a través de senderos ecológicos, zonas de picnic y áreas verdes donde podrás relajarte y disfrutar del aire puro. Atracciones acuáticas: Refrescante piscina, toboganes y otras atracciones acuáticas para pasar un día divertido bajo el sol. Gastronomía: Disfruta de una deliciosa variedad de platos típicos y opciones internacionales en los restaurantes del parque. Eventos y espectáculos: Makuna Centro Turístico organiza regularmente eventos y espectáculos para toda la familia, como conciertos, fiestas temáticas y presentaciones culturales. ¿Por qué visitar Makuna Centro Turístico? Diversión para todas las edades: Desde los más pequeños hasta los adultos, encontrarán actividades que se adapten a sus intereses y gustos. Un día diferente: Escapa de la rutina y vive una experiencia única rodeado de naturaleza y aventura. Facilidades y servicios: El parque cuenta con todas las comodidades necesarias para que tu visita sea lo más agradable posible, como baños, vestidores, estacionamiento y áreas de descanso. Compromiso con el medio ambiente: Makuna Centro Turístico promueve la conservación del medio ambiente y la educación ambiental. ¿Qué debes tener en cuenta? Reserva con anticipación: Especialmente si planeas visitar el parque en fines de semana o temporada alta, te recomendamos reservar tu entrada con anticipación para evitar largas filas. Lleva ropa y calzado cómodos: Las actividades al aire libre requieren ropa y calzado adecuados para caminar y realizar actividades físicas. Protégete del sol: Utiliza bloqueador solar, sombrero y gafas de sol para protegerte de los rayos del sol. Respeta las normas del parque: Sigue las indicaciones del personal y respeta el medio ambiente.",
                image1: 'images/garzon/13.png',
                image2: 'images/garzon/4.png',
                image3: 'images/garzon/15.png',
                location: ''
            }

        ]
    },
    {
        title: "Gigante",
        categories: [
            {
                name: 'Mirador La Mano del Gigante',
                description: "El Mirador La Mano del Gigante es una maravilla natural que ha cautivado a visitantes de todo el mundo. Ubicado en el departamento del Huila, Colombia, este lugar ofrece una experiencia única que combina la belleza de la naturaleza con una obra de arte que desafía la imaginación. ¿Qué hace especial a este mirador? Una obra de arte natural: La formación rocosa que le da nombre al mirador es una obra maestra esculpida por la naturaleza a lo largo de millones de años. Su forma, que recuerda a una mano gigante apuntando hacia el cielo, es simplemente impresionante y ha generado diversas interpretaciones y leyendas. Vistas panorámicas: Desde el mirador, podrás disfrutar de una vista panorámica de los valles y montañas circundantes. El paisaje es tan vasto y hermoso que te sentirás pequeño en comparación con la naturaleza. Experiencia única: Visitar el Mirador La Mano del Gigante es una experiencia única que te conectará con la naturaleza de una manera profunda. Es un lugar ideal para reflexionar, encontrar la paz interior y tomar fotografías inolvidables. ¿Qué puedes hacer en el Mirador La Mano del Gigante? Senderismo: Para llegar al mirador, deberás realizar una caminata corta pero gratificante. El sendero es bien señalizado y ofrece la oportunidad de disfrutar de la naturaleza. Fotografía: El mirador es un lugar perfecto para capturar imágenes espectaculares. La formación rocosa, el paisaje y la vegetación crean un escenario ideal para tus fotos. Contemplación: Simplemente siéntate, relájate y disfruta de la vista. El mirador es un lugar ideal para encontrar la paz interior y conectar con la naturaleza. Aventura: Para los más aventureros, existen opciones de camping en los alrededores del mirador, lo que te permitirá disfrutar de la naturaleza durante toda la noche.",
                image1: 'images/gigante/1.png',
                image2: 'images/gigante/2.png',
                image3: 'images/gigante/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90200.94438946442!2d-75.58178574177497!3d2.3870559050057416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b732f828b7489%3A0xed9122917193e4b3!2sMirador%20La%20Mano%20del%20Gigante%20(Gigante%20-%20Huila)!5e0!3m2!1ses!2sco!4v1728516168349!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador Aluna',
                description: "El Mirador Aluna es un verdadero paraíso para los amantes de la naturaleza y la aventura. Ubicado en las alturas del departamento del Huila, Colombia, este mirador ofrece una vista panorámica impresionante que te dejará sin aliento. ¿Qué hace especial a este mirador? Vistas de 360 grados: Desde el Mirador Aluna podrás disfrutar de una vista de 360 grados que abarca valles, montañas y el cielo infinito. Es como estar en la cima del mundo. Tranquilidad y paz: El ambiente en el Mirador Aluna es sumamente tranquilo y relajante. Es el lugar perfecto para escapar del ruido de la ciudad y conectar con la naturaleza. Flora y fauna: Alrededor del mirador podrás encontrar una gran variedad de flora y fauna, lo que lo convierte en un destino ideal para los amantes de la observación de aves y la naturaleza en general. ¿Qué puedes hacer en el Mirador Aluna? Senderismo: Para llegar al mirador, deberás realizar una caminata por un sendero rodeado de naturaleza. Es una excelente oportunidad para hacer ejercicio y disfrutar del aire puro. Fotografía: El mirador es un lugar perfecto para capturar imágenes espectaculares. La vista panorámica y la belleza natural del entorno te permitirán tomar fotos inolvidables. Picnic: Lleva una canasta de picnic y disfruta de un momento de relax mientras contemplas el paisaje. Observación de aves: Si eres amante de la observación de aves, el Mirador Aluna es el lugar ideal para ti. La variedad de aves que habitan en la zona te sorprenderá.",
                image1: 'images/gigante/4.png',
                image2: 'images/gigante/5.png',
                image3: 'images/gigante/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.545770167295!2d-75.52159572527286!3d2.3207796976589536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24cd5acd166a49%3A0xc758cbf5e3fed785!2sTIERRA%20DE%20GIGANTES!5e0!3m2!1ses-419!2sco!4v1728516562858!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador La Morra',
                description: "El Mirador La Morra es un lugar privilegiado que te ofrece una vista panorámica de gran parte del departamento del Huila. Ubicado en una zona estratégica, este mirador te permitirá apreciar la belleza de los paisajes naturales y la magnitud de la región. ¿Qué hace especial a este mirador? Vista panorámica: Desde el Mirador La Morra podrás disfrutar de una vista panorámica de los valles del río Magdalena, las represas de Betania y El Quimbo, y algunos municipios del centro y sur del departamento del Huila. Paisajes diversos: La vista desde el mirador abarca una gran variedad de paisajes, desde zonas cafeteras hasta montañas y zonas rurales. Tranquilidad y paz: El ambiente en el Mirador La Morra es sumamente tranquilo y relajante. Es el lugar perfecto para escapar del ruido de la ciudad y conectar con la naturaleza. ¿Qué puedes hacer en el Mirador La Morra? Contemplación: Simplemente siéntate, relájate y disfruta de la vista. El mirador es un lugar ideal para encontrar la paz interior y conectar con la naturaleza. Fotografía: El mirador es un lugar perfecto para capturar imágenes espectaculares. La vista panorámica y la belleza natural del entorno te permitirán tomar fotos inolvidables. Senderismo: Algunos miradores cercanos ofrecen senderos para explorar los alrededores y disfrutar de la naturaleza. Picnic: Lleva una canasta de picnic y disfruta de un momento de relax mientras contemplas el paisaje.",
                image1: 'images/gigante/7.png',
                image2: 'images/gigante/8.png',
                image3: 'images/gigante/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.542992609327!2d-75.53608462503189!3d2.321764497657945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24d3e0b7c18ee9%3A0x5cb3cabbe5ca31f2!2sLA%20MORRA!5e0!3m2!1ses!2sco!4v1731613048728!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
                description: "Es un mirador ubicado a tal solo () del caso urbano de el corregimiento de Iquira el cual esta dedicado al Patrono de San Francisco de Asís quien es el cuidador de todas sus tierras cercanas, la llegada allí no es tan compleja solo debes manejar unos 5 minutos para luego tomar una caminata de aproximadamente 15 minutos por senderos, allí encontraremos un gran momento representativo de este mirador construido por la alcaldía municipal en petición de los habitantes.",
                image1: 'images/iquira/1.png',
                image2: 'images/iquira/2.png',
                image3: 'images/iquira/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9479.286291205357!2d-75.64988993344113!3d2.6508350240607634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b2183eb2a4811%3A0x298917e4d3b14bb!2sSan%20Francisco!5e0!3m2!1ses!2sco!4v1728181203345!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador del Parque Principal',
                description: "Ubicado en el centro de Iquira, este mirador ofrece una vista directa del parque principal y sus alrededores. Es un lugar popular entre los locales y turistas para relajarse y disfrutar del ambiente del pueblo. Desde aquí, se puede observar la arquitectura local y el bullicio cotidiano de la comunidad",
                image1: 'images/iquira/4.png',
                image2: 'images/iquira/5.png',
                image3: 'images/iquira/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5545904714354!2d-75.63760546942261!3d2.649077077202229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b2176936b6d93%3A0xe87259f88175be66!2sParque%20Principal%20%C3%8Dquira%2C%20Huila!5e0!3m2!1ses!2sco!4v1728181190480!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Isnos",
        categories: [
            {
                name: 'Mirador Mayú',
                description: "Ubicado en la vereda El Mortiño, el Mirador Mayú ofrece impresionantes vistas del cañón del río Magdalena. Este lugar es ideal para disfrutar de la naturaleza y la biodiversidad de la zona, además de contar con servicios como glamping y actividades interactivas con animales. Es un espacio que rinde homenaje a la arqueología y las raíces campesinas, proporcionando una experiencia única en un entorno natural.",
                image1: 'images/isnos/1.png',
                image2: 'images/isnos/2.png',
                image3: 'images/isnos/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.661278082946!2d-76.23981812603883!3d1.8841260980987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25715d63e7866b%3A0xcf90aae55a6069ab!2sMAYU%20Aventura%20Ancestral!5e0!3m2!1ses!2sco!4v1728181160305!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador del Magdalena',
                description: "Este mirador se encuentra en el Hotel y Glamping Mirador del Magdalena, donde los visitantes pueden disfrutar de vistas panorámicas del río Magdalena y sus alrededores. El lugar combina hospedaje con experiencias al aire libre, permitiendo a los visitantes conectarse con la naturaleza mientras disfrutan de la belleza del paisaje.",
                image1: 'images/isnos/4.png',
                image2: 'images/isnos/5.png',
                image3: 'images/isnos/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.411294307145!2d-76.30457959377323!3d1.90948710102961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257b9a1647c005%3A0xb9fac2ce4ca9bb14!2sMirador%20del%20Magdalena!5e0!3m2!1ses!2sco!4v1728181135170!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador El Salto del Mortiño',
                description: "Este mirador ofrece vistas espectaculares de la cascada del Mortiño, una de las atracciones naturales más impresionantes de la región. Desde aquí, los visitantes pueden disfrutar de la belleza del agua cayendo y del entorno natural que lo rodea. Además, hay un puente de cristal que proporciona una experiencia única para tomar fotografías y apreciar el paisaje.",
                image1: 'images/isnos/7.png',
                image2: 'images/isnos/8.png',
                image3: 'images/isnos/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21915.50307693521!2d-76.21485348381556!3d1.8796786471022684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2571dee8f135df%3A0x456a785ffa705528!2sMirador%20%235%20Salto%20del%20Morti%C3%B1o!5e0!3m2!1ses!2sco!4v1728181113229!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador La Chaquira',
                description: "Ubicado cerca de Isnos, este mirador es famoso por sus vistas panorámicas del cañón del río Magdalena. Es un lugar ideal para los amantes de la naturaleza y la fotografía, ya que ofrece una vista impresionante de la geografía del Huila. La Chaquira también es conocida por su valor arqueológico, lo que añade un interés cultural a la visita",
                image1: 'images/isnos/10.png',
                image2: 'images/isnos/11.png',
                image3: 'images/isnos/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.8087152144003!2d-76.26882790131033!3d1.9031814512091654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2570777ca1bda7%3A0x6ee530227a606312!2sLa%20Chaquira!5e0!3m2!1ses!2sco!4v1728181076702!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
                description: "Ubicación Colombia – Depto. del Huila – (Subregión Sur) – Municipio de Saladoblanco – Corregimiento de Morelia Altitud: 1.700 metros sobre el nivel del mar. Distancia desde Saladoblanco: 29 kilómetros. Servicios: 💦 Entrada al lugar: $5.000 COP (Precio en marzo de 2022). 🍽️ Restaurante: Almuerzos con trucha, cachama, carnes rojas o vegetariano previa reservación. ⛺ Camping.Las Termales de Morelia está ubicado a 29 Kilometros de la poblacion de Saladoblanco en el Parque Nacional Natural Puracé en el Departamento del Huila Colombia. Donde podrá disfrutar de caminatas ecológicas, cascadas, avistamiento de aves, con la  visita  a la finca Vegonia donde encontrara estatuas talladas en piedra por la población indígena el Yalcón, tumbas de cancel cerámicas y un excelente plato de trucha ahumada con puré de yota.",
                image1: 'images/saladoblanco/1.png',
                image2: 'images/saladoblanco/2.png',
                image3: 'images/saladoblanco/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.2236471229044!2d-76.18890882552918!3d2.066454958854582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25698972355135%3A0xcb0aef427fc29044!2sTermales%20de%20Morelia!5e0!3m2!1ses!2sco!4v1728560133380!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'El Arco de Las Jarras',
                description: "Ubicación Colombia – Depto. del Huila – (Subregión Sur) – Municipio de Saladoblanco – Vereda Vista Hermosa Aproximadamente a 29 kilómetros de San José de Isnos. En carro, nos tomo 40 minutos desde el casco urbano de Isnos hasta el Salto de Bordones y 20 minutos hasta donde se puede llegar con el vehículo (Justo en el letrero del Parque Natural Puracé), según el sitio web de la alcaldía de Saladoblanco la cascada se encuentra en la vereda Vista Hermosa.",
                image1: 'images/saladoblanco/4.png',
                image2: 'images/saladoblanco/5.png',
                image3: 'images/saladoblanco/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127591.14266334928!2d-76.2687363810264!3d2.06662974253983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e256dacb4493f2f%3A0x8ba42d598dd6681d!2sArco%20de%20las%20jarras!5e0!3m2!1ses!2sco!4v1728560175342!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Cascada El Socorro',
                description: "Ubicación Colombia – Depto. del Huila – (Subregión Sur) – Municipio de Saladoblanco – Vereda Vista Hermosa Aproximadamente a 24 kilómetros de San José de Isnos, es accesible por la vereda Buenos Aires del municipio de Isnos. El paisaje cerca a la cascada conserva el bosque y la vegetación abundante, el camino de llegada si señala mucho cultivo de aguacate y potreros.",
                image1: 'images/saladoblanco/7.png',
                image2: 'images/saladoblanco/8.png',
                image3: 'images/saladoblanco/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3109193110395!2d-76.20277282552904!3d2.0314012590072554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2569d5f08efa73%3A0xccc834e5d479f877!2sCascada%20El%20Socorro!5e0!3m2!1ses!2sco!4v1728560210469!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Salto de Bordones',
                description: "Colombia – Depto. del Huila – (Subregión Sur) – Entre los Municipios de Saladoblanco e Isnos – Veredas Alto Medianías y vereda Bordones. Tiene aproximadamente 400 metros de altura, la segunda cascada más alta de Colombia y su nombre se debe a la forma de un bordón (Sinónimo bastón, objeto que ayuda a sostener).",
                image1: 'images/saladoblanco/10.png',
                image2: 'images/saladoblanco/11.png',
                image3: 'images/saladoblanco/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.236690816333!2d-76.20318949389933!3d2.032108727359259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2569638d74d73f%3A0xc2673745ba0419b5!2sEl%20Salto%20de%20Bordones%2C%20Saladoblanco%2C%20Huila!5e0!3m2!1ses!2sco!4v1728560251524!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }

        ]
    },
    {
        title: "Santa María",
        categories: [
            {
                name: 'Cerro de la Cruz ',
                description: "Colombia – Depto. del Huila – (Subregión Norte) – Municipio de Santa María – Vereda La Primavera Senderismo con una duración de 1 hora y 30 minutos, los primero 15 minutos son por vía destapada, luego es travesía por la montaña. Una gran vista del municipio y las montañas aledañas, la altura sobre el nivel del mar es de más de 1.400 metros. Desde el casco urbano de Santa María se logra divisar una pequeña cruz.",
                image1: 'images/santamaria/1.png',
                image2: 'images/santamaria/2.png',
                image3: 'images/santamaria/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018810.8875310012!2d-75.15273602691197!3d4.075317236368421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3c07b4f30b08cd%3A0xd38a422168038fa3!2sCerro%20de%20la%20Cruz!5e0!3m2!1ses!2sco!4v1728560914595!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Cascadas La Marsella y Yarumal',
                description: "Colombia – Depto. del Huila – (Subregión Norte) – Municipio de Santa María – Vereda Santa Helena",
                image1: 'images/santamaria/4.png',
                image2: 'images/santamaria/5.png',
                image3: 'images/santamaria/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.524804002406!2d-75.56409632552955!3d2.951761254335352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b076ed740d205%3A0x7e067170b5b1f81a!2sCascada%20La%20Marsella%20-%20Yarumal!5e0!3m2!1ses!2sco!4v1728560977795!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Cascada ‘Las Golondrinas’',
                description: "En el Municipio de Santa María, al noroccidente del departamento del Huila, en la vereda Canaán se encuentra la cascada Las Golondrinas, llamada así porque en los días calurosos estas aves llegan allí a bañarse en sus aguas y anidan en los árboles que bordean la quebrada, este lugar se ha convertido en destino turístico por su imponencia y belleza.",
                image1: 'images/santamaria/7.png',
                image2: 'images/santamaria/8.png',
                image3: 'images/santamaria/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3727438654087!2d-75.60345812552958!3d2.9938663540886217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b07ac03035c31%3A0x341e2f083c2c2387!2sCascada%20la%20Golondrina!5e0!3m2!1ses!2sco!4v1728561004477!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'La Morada Del Viento',
                description: "Refugio entre montañas, donde la tranquilidad y las vistas impresionantes se convierten en parte de tu experiencia.",
                image1: 'images/santamaria/10.png',
                image2: 'images/santamaria/11.png',
                image3: 'images/santamaria/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.8677878847598!2d-75.51427742552958!3d2.854512454894208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b0fe745a9ccbb%3A0xa80f1ccb8cee85c3!2sla%20morada%20del%20Viento!5e0!3m2!1ses!2sco!4v1728561086840!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "San Agustín",
        categories: [
            {
                name: 'Mirador del Doble Yo', 
                description: "Ubicación Colombia – Depto. del Huila – (Subregión Sur) – Municipio de San Agustín – Vereda La Chaquira Ofrece la posibilidad de contemplar un magnífico paisaje hacia el cañón del Río Magdalena, dentro de la estatua hay escaleras para ascender hasta su segundo yo.",
                image1: 'images/sanagustin/1.png',
                image2: 'images/sanagustin/2.png',
                image3: 'images/sanagustin/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.602956856325!2d-76.27910412552905!3d1.9094296595227656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257b8443fff30f%3A0xacee5ee54ce2fd91!2sEl%20mirador%20del%20Doble%20Yo!5e0!3m2!1ses!2sco!4v1728560278936!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Eco Reserva Waka Willka',
                description: "Colombia – Depto. del Huila – (Subregión Sur) – Municipio de San Agustín – Vereda Bajo Mesitas Somos una Familia Colombo Británica, Diana es bióloga y animalista, profesora de Yoga Iyengar y terapeuta holística. Steve, después de estudiar geografía, se capacitó como profesor de lenguas extranjeras. Practica Coaching de Vida, Meditación Vipassana, es tallerista, escritor, profesor particular y traductor. Tenemos dos amados hijos Kiya y Quinti Arú.",
                image1: 'images/sanagustin/4.png',
                image2: 'images/sanagustin/5.png',
                image3: 'images/sanagustin/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.689387093774!2d-76.30579362552895!3d1.871808459676884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257b79474ec27f%3A0xd88c84fcab01fb84!2sEco%20Reserva%20Waka%20Willka!5e0!3m2!1ses!2sco!4v1728560297013!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Reserva Natural Portal del Oso',
                description: "Colombia – Depto. del Huila – (Subregión Sur) – Municipio de San Agustín – Vereda El Oso A 22 kilómetros del centro urbano de San Agustín y sumergido en el Corredor Biológico Cueva de los Guácharos – Puracé se encuentra esta Reserva Natural de la Sociedad Civil (RNSC) con 4.200 hectáreas de área protegida, cuna de biodiversidad donde se han instalado cámaras trampa para la observación no intrusiva de animales silvestres.",
                image1: 'images/sanagustin/7.png',
                image2: 'images/sanagustin/8.png',
                image3: 'images/sanagustin/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63804.39573520109!2d-76.36567233175127!3d1.8339021655426013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257b16bd2602bd%3A0xa955d8816baed2f5!2sSenderismo%20san%20agustin-huila!5e0!3m2!1ses!2sco!4v1728560341469!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'PAOCOS',
                description: "Colombia – Depto. del Huila – (Subregión Sur) – Municipio de San Agustín – Vereda La Florida Surgió ante la necesidad de las comunidades locales de recuperar los suelos desgastados por la revolución verde y el monocultivo de café, que durante años ha sido la principal actividad de la región, unido a la presión económica que ha generado el turismo dando como resultado el acaparamiento y la extranjerización de la tierra.",
                image1: 'images/sanagustin/10.png',
                image2: 'images/sanagustin/11.png',
                image3: 'images/sanagustin/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.684447608117!2d-76.28825846044923!3d1.8798260000000093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e25715725fc03d1%3A0x97614da52553909!2sPAOCOS!5e0!3m2!1ses!2sco!4v1728560368611!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador El Estrecho',
                description: "Colombia – Depto. del Huila – (Subregión Sur) – Municipio de San Agustín – Vereda Aguadas. Desde aquí se puede observar como el río se reduce hasta formar el estrecho de 2 metros 20 centímetros y como se mantiene su alrededor cubierto de vegetación y frondosos árboles.",
                image1: 'images/sanagustin/13.png',
                image2: 'images/sanagustin/14.png',
                image3: 'images/sanagustin/15.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5685155105703!2d-76.30304492552906!3d1.9242163594615633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257acf294ca23b%3A0x4da7244bf87c3c44!2sMirador%20Estrecho%20del%20R%C3%ADo%20Magdalena!5e0!3m2!1ses!2sco!4v1728560388450!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Suaza",
        categories: [
            {
                name: 'Parque Natural Regional Cueva de los Guácharos',
                description: "Es uno de los principales atractivos de la región. Este parque protege un importante ecosistema de bosque nublado donde habita el ave emblemática de Colombia, el guácharo. Los visitantes pueden realizar caminatas, observar aves y disfrutar de la tranquilidad de la naturaleza.",
                image1: 'images/suaza/1.png',
                image2: 'images/suaza/2.png',
                image3: 'images/suaza/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040688.601455238!2d-76.83667880060479!3d2.5971987963591054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3963b5eff656a1%3A0x96812c1846943440!2sCueva%20de%20los%20Guacharos!5e0!3m2!1ses!2sco!4v1728561203496!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Cascadas del Río Suaza',
                description: "El municipio cuenta con varias cascadas ubicadas en el río Suaza, las cuales ofrecen un espectáculo visual impresionante. Algunas de las cascadas más conocidas son La Chorrera, El Salto y El Velo de la Novia. Estas cascadas son ideales para tomar fotografías y disfrutar de un baño refrescante en sus aguas cristalinas.",
                image1: 'images/suaza/4.png',
                image2: 'images/suaza/5.png',
                image3: 'images/suaza/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255190.8069079723!2d-76.05481738024856!3d2.0129088689111905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e252001a5001739%3A0xed4ebe5f7ac9ec00!2sR%C3%ADo%20Suaza!5e0!3m2!1ses!2sco!4v1728561252915!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Iglesia de Nuestra Señora de la Asunción',
                description: "Esta iglesia es uno de los principales referentes arquitectónicos de Suaza. Construida en estilo colonial, destaca por su fachada blanca y sus detalles ornamentales. Es un lugar de culto y devoción para los habitantes del municipio",
                image1: 'images/suaza/7.png',
                image2: 'images/suaza/8.png',
                image3: 'images/suaza/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041570.358903202!2d-78.03634593750004!3d1.9775402000000055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e251c7aaeeddb09%3A0x6ac8ea9949cbe2f6!2sIglesia%20Suaza!5e0!3m2!1ses!2sco!4v1728561301805!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Tarqui",
        categories: [
            {
                name: 'Bosque Turístico Los Pinos de Tarqui',
                description: "Ubicación Vereda San Francisco, Tarqui, Colombia Un lugar naturalmente mágico para disfrutar en familia.",
                image1: 'images/tarqui/1.png',
                image2: 'images/tarqui/2.png',
                image3: 'images/tarqui/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1532359631174!2d-75.91203682552927!3d2.094308858731851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e253da9d51eb967%3A0xd28a0344280e9a10!2sBosque%20de%20Pinos%20de%20San%20Francisco!5e0!3m2!1ses!2sco!4v1728560667015!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador Entre Cordilleras.',
                description: "La Esmeralda, Tarqui, Huila somo un lugar en el cual puedes pasar momentos en familia y amigos, prestamos un servicio de calidad.",
                image1: 'images/tarqui/4.png',
                image2: 'images/tarqui/5.png',
                image3: 'images/tarqui/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.061915559129!2d-75.8897343255292!3d2.129891958573244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e252398971f55a1%3A0xb7ffd743387aa808!2sMirador%20Entre%20Cordilleras.!5e0!3m2!1ses!2sco!4v1728560696055!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador del GRAN CAÑON del Magdalena',
                description: "Se puede observar como el río se reduce hasta formar el estrecho de 2 metros 20 centímetros y como se mantiene su alrededor cubierto de vegetación y frondosos árboles. Después del mirador se encuentra la Reserva",
                image1: 'images/tarqui/7.png',
                image2: 'images/tarqui/8.png',
                image3: 'images/tarqui/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.279391423453!2d-75.89027332552911!3d2.044134058952028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2519ab7678531d%3A0x27257f13e73750c1!2sMirador%20del%20GRAN%20CA%C3%91ON%20del%20Magdalena!5e0!3m2!1ses!2sco!4v1728560714780!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Mirador San Esteban',
                description: "Colombia – Depto. del Huila – (Subregión Centro) – Municipio de Tarqui – Corregimiento El Vergel Somos un lugar ubicado entra las montañas de la cordillera central; donde encontraras un excelente equilibrio entre la magia de la naturaleza y los majestuosos paisajes de nuestro terruño. Paisajes del ruiseñor del Huila",
                image1: 'images/tarqui/10.png',
                image2: 'images/tarqui/11.png',
                image3: 'images/tarqui/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7278905185403!2d-74.14752522552727!3d4.642552642159952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c145bf2396f%3A0xe095e1c097fa57de!2sMirador%20de%20San%20Esteban!5e0!3m2!1ses!2sco!4v1728560852955!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
           
        ]
    },
    {
        title: "Tello",
        categories: [
            {
                name: 'Parque Municipal de Tello',
                description: "Tello es un municipio colombiano ubicado en el departamento de Huila. Se caracteriza por su extensa llanura comprendida entre el río Magdalena y el pie de la cordillera oriental hasta sus cimas, con más de 3000 m s. n. m., regados por las aguas de los ríos Fortalecillas y Villavieja. Su extensión territorial es de 589 km², su altitud es de 575 m s. n. m. y su clima es cálido con una temperatura promedio de 26 °C.3​Cuenta con una población de 14.536 habitantes de acuerdo con proyección del DANE para año 2019. El municipio está localizado en la parte noreste del departamento (Región SubNorte). Su economía se basa en la producción agrícola y la actividad ganadera. Las frutas como la uva, que registra los más altos niveles de calidad, el banano del cual se produce el 91% del total del departamento, complementan su economía que es considerada la base del desarrollo de la región. Es conocido como « El Viñedo del Huila»",
                image1: 'images/tello/1.png',
                image2: 'images//2.png',
                image3: 'images//3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254982.45730078322!2d-75.30292056861694!3d3.0677021081445686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b837159dd1979%3A0x8838797daf80dd37!2sParque%20Municipal%20de%20Tello!5e0!3m2!1ses!2sco!4v1727443987371!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },

        ]
    },
    {
        title: "Teruel",
        categories: [
            {
                name: 'Centro Recreacional El Paraiso Teruel Huila',
                description: "Ambiente de tranquilidad, relajación, y muchas actividades, un lugar ideal para sentirse en familia, descansar, salir de la rutina y pasar un rato agradable, servicios de glamping y estadía, restaurante, piscina, senderismo al mirador y deportes.",
                image1: 'images/teruel/1.png',
                image2: 'images/teruel/2.png',
                image3: 'images/teruel/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.090330593081!2d-75.51827772503026!3d2.7896018971873877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b115ed8c86511%3A0xd1a02b90031137a2!2sFinca%20Tem%C3%A1tica%20El%20Para%C3%ADso!5e0!3m2!1ses!2sco!4v1731617313969!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Parque turístico de Teruel',
                description: "Teruel es un municipio colombiano ubicado en el departamento de Huila. Se caracteriza por ser un territorio montañoso en su mayoría, gracias a que pertenece a la cordillera central, y se encuentra ubicado al margen izquierdo del río Magdalena del departamento del Huila y está atravesado por la cordillera Central.",
                image1: 'images/teruel/4.png',
                image2: 'images/teruel/5.png',
                image3: 'images/teruel/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7970.506372219042!2d-75.57824441494999!3d2.741127677143156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b19a40a339987%3A0xc9dd7ad2c4b93578!2sTeruel%2C%20Huila!5e0!3m2!1ses!2sco!4v1727444604193!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Tesalia",
        categories: [
            {
                name: 'Mirador del Águila',
                description: "Mirador del Águila [Tesalia] Ubicación Colombia – Depto. del Huila – (Subregión Occidente) – Municipio de Tesalia – Vereda Buena Vista Bienvenidos a la Finca Cielito de Versalles El lugar mágico para ver los hermosos paisajes del Huila Servicios: 🔭 Observatorios. 📸 Zona de fotografías. 🥾 Senderos ecológicos. 🍴 Restaurante (Platos ejecutivos, a la carta y comidas rápidas). ☕ Cafetería. 🌄 Miradores. 🏕️ Zona de camping. 🚙 Parqueadero. 📶 WiFi.",
                image1: 'images/tesalia/1.png',
                image2: 'images/tesalia/2.png',
                image3: 'images/tesalia/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9758165878475!2d-75.75817672552952!3d2.5147978567255476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ad70667479d4d%3A0x6a11369459613aba!2sMirador%20del%20%C3%81guila!5e0!3m2!1ses!2sco!4v1728560406783!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'La cafetería sobre el Valle Escondido, Brisas del Cafetal',
                description: "Nos encontramos a 1.640 metros sobre el nivel del mar, vía al Mirador del Águila, a 7 kilómetros del centro urbano de Tesalia. Datos curiosos: El Libertador Simón Bolívar se hospedó en Tesalia en varias ocasiones, de paso para Quito. Hasta 1960 el municipio era llamado “Carnicerías”. Tesalia es el nombre de una región en Grecia. La parroquia que se encuentra en el parque central de Tesalia es de adoración a Nuestra Señora del Rosario.",
                image1: 'images/tesalia/4.png',
                image2: 'images/tesalia/5.png',
                image3: 'images/tesalia/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127551.86122731517!2d-75.81307933113722!3d2.5082938667030232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ad70a8dc6ed07%3A0x89b2ac33fb2b947e!2sBRISAS%20DEL%20CAFETAL!5e0!3m2!1ses!2sco!4v1728560447937!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Cañón del Simio',
                description: "Colombia – Depto. del Huila – (Subregión Occidente) – Municipio de Tesalia – Vereda Potrero Grande El ingreso al cañón se hace con guía, la agencia de turismo se encuentra al lado del parque principal de Tesalia, ellos pueden incluir el transporte del pueblo al inicio del sendero, elementos de seguridad como chaleco salvavidas, linterna frontal, casco y bolsa impermeable para guardar las pertenencias",
                image1: 'images/tesalia/7.png',
                image2: 'images/tesalia/8.png',
                image3: 'images/tesalia/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.069841154925!2d-75.66740862552957!3d2.483834356883113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b2984c14dd64d%3A0x64326d34e9e61791!2zQ2HDscOzbiBkZWwgU2ltaW8!5e0!3m2!1ses!2sco!4v1728560489112!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Ecoposada La Victoria',
                description: "Colombia – Depto. del Huila – (Subregión Occidente) – Municipio de Tesalia Al alojarte en Ecoposada La Victoria podrás tener un descanso integral al hospedarte en cabañas rústicas rodeadas de naturaleza, por lo que podrás desconectarte de la tecnología y conectarte con la Pachamama si así lo deseas. Puedes tomar un descanso en nuestra zona de hamacas, un delicioso baño en la quebrada San Benito, hacer una caminata por el bosque de los mil colores o tomar una siesta en nuestros teepees.",
                image1: 'images/tesalia/10.png',
                image2: 'images/tesalia/11.png',
                image3: 'images/tesalia/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.048373380928!2d-75.73412152552955!3d2.4909378568471063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ad6374ab7cc8f%3A0x8ce97639060abc13!2sHotel%20Paicol%20Y%20Tesalia%20%7C%20Ecoposada%20La%20Victoria!5e0!3m2!1ses!2sco!4v1728560510435!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
          
        ]
    },
    {
        title: "Timana",
        categories: [
            {
                name: 'Parque Principal Timana Huila',
                description: "",
                image1: 'images/timana/1.png',
                image2: 'images/timana/2.png',
                image3: 'images/timana/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7974.900109727483!2d-75.94153463022461!3d1.9742300000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2510f05b3c3a8d%3A0xc723aaf1509a1649!2sParque%20Principal%20Timana%20Huila!5e0!3m2!1ses!2sco!4v1727444866203!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Yaguara y el embalse de Betania',
                description: "Muy bonito lugar para fin de semana o pasar unas horas. Canotaje y paseo a caballo, entre otras actividades que se pueden hacer en la represa",
                image1: 'images/timana/4.png',
                image2: 'images/timana/5.png',
                image3: 'images/timana/6.png',
                location: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15941.75248451908!2d-75.45029976066431!3d2.6850213409573627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b3dfeb4094f87%3A0xdb11e54f7744f14c!2sRepresa%20de%20Betania!5e0!3m2!1ses!2sco!4v1728561360735!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Parque Ángel María Paredes',
                description: "",
                image1: 'images/timana/7.png',
                image2: 'images/timana/8.png',
                image3: 'images/timana/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7971.009917509553!2d-75.518334!3d2.66445345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b3d307806c975%3A0xe118beab80d48a5!2sParque%20%C3%81ngel%20Mar%C3%ADa%20Paredes!5e0!3m2!1ses!2sco!4v1727445535083!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            }
        ]
    },
    {
        title: "Villavieja",
        categories: [
            {
                name: 'Museo de Historia Natural La Tatacoa',
                description: "Colombia – Depto. del Huila – (Subregión Norte) – Municipio de Villavieja – Centro Poblado La Victoria El Museo cuenta con piezas fósiles de diferentes especímenes entre los que se identifican restos de mamíferos, reptiles, peces, aves y madera petrificada; la exhibición cuenta con diferentes experiencias que recrean ambientes, historias y muestran algunas de las piezas fósiles más importantes de la colección, el museo cuenta con un laboratorio de investigación paleontológica, donde los visitantes podrán observar el proceso de preparación y estudio de un fósil.",
                image1: 'images/villavieja/1.png', 
                image2: 'images/villavieja/2.png',
                image3: 'images/villavieja/3.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9902178515626!2d-75.1729955255294!3d3.3525328518698085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3bed9a4bcd77f5%3A0xdba815a3f13f7a91!2sMuseo%20De%20Historia%20Natural%20De%20La%20Tatacoa!5e0!3m2!1ses!2sco!4v1728560555237!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Museo Paleontológico',
                description: "El Museo Paleontológico está ubicado en el parque principal de Villavieja, fundado en el año de 1984, fue alojado en la capilla de Santa Bárbara la más antigua de todo el departamento del Huila, la cual fue construida por los jesuitas entre 1606 y 1748, y declarado monumento nacional en 1982. El museo lo componen tres salas principales, donde se realiza la exposición bajo tres temáticas: Mamíferos, Reptiles y Ambiente. Con las cuales se presenta una completa cronología y síntesis de Villavieja y sus alrededores, destacando aspectos no sólo paleontológicos, sino históricos y culturales.",
                image1: 'images/villavieja/4.png',
                image2: 'images/villavieja/5.png',
                image3: 'images/villavieja/6.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037079.1099718234!2d-75.72407376275378!3d4.284146404092031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b91661b731521%3A0xfd9bbe68c5205ee2!2sMuseo%20Paleontol%C3%B3gico!5e0!3m2!1ses!2sco!4v1728560583390!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Desierto de la tatacoa',
                description: "Desierto de la Tatacoa, ubicado en el departamento del Huila, cerca al Municipio de Villa Vieja, se encuentra éste maravilloso Bosque seco tropical. Conocido como el desierto de la tatacoa. Cuenta con más de 300 kilómetros cuadrados de territorio disponibles para estár totalmente tranquilos, en conexión con la naturaleza y la energía de la tatacoa. Visita el desierto y déjate contagiar de su magia, disfruta de diferentes actividades educativas, deportivas, gastronómicas. Planes para disfrutar con tus amigos, familia, pareja...",
                image1: 'images/villavieja/7.png',
                image2: 'images/villavieja/8.png',
                image3: 'images/villavieja/9.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.882728168994!2d-75.1790937606625!3d3.2323974215791287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b921c86644279%3A0x119a8a7cc9c9c1a9!2sDesierto%20de%20la%20Tatacoa!5e0!3m2!1ses!2sco!4v1728560603163!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Observatorio Astronómico de la Tatacoa',
                description: "El Observatorio Astronómico de la Tatacoa es un aula externa para todos los interesados en la observación astronómica en la que se realiza una labor de entretenimiento educativo y en la que en estos diez años de servicio se ha logrado atender un buen número de compatriotas y extranjeros, aunque se debe advertir que el gran número de visitantes han sido las instituciones educativas.",
                image1: 'images/villavieja/10.png',
                image2: 'images/villavieja/11.png',
                image3: 'images/villavieja/12.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.88205684589!2d-75.1790937651387!3d3.2324401647269516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b9334ab85449f%3A0x954c43450a7063a4!2sObservatorio%20Astron%C3%B3mico%20de%20la%20Tatacoa!5e0!3m2!1ses!2sco!4v1728560626208!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            {
                name: 'Museo Artesanal Casa del Totumo',
                description: "Fue abierto en semana santa del año 2014 y tomo 5 años recolectar y organizar las obras; queda ubicado en el casco urbano de Villavieja a 100 metros del parque principal, la entrada tiene un valor de $2.000 (Mayo de 2016); el anuncio del museo queda por la vía que conduce al Desierto de la Tatacoa.",
                image1: 'images/villavieja/13.png',
                image2: 'images/villavieja/14.png',
                image3: 'images/villavieja/15.png',
                location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.515294393613!2d-75.22311472552951!3d3.2210154527077197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b9166594acd8f%3A0x169f3be9d1ceef6b!2sCasa%20Museo%20del%20Totumo!5e0!3m2!1ses!2sco!4v1728560647722!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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


// Referencias a elementos en el DOM
const municipalityList = document.getElementById('municipality-list');  // Contenedor de la lista de municipios
const categoryList = document.getElementById('category-list');          // Contenedor de botones de categorías
const categoryDetails = document.getElementById('category-details');    // Contenedor para mostrar los detalles de la categoría seleccionada

// Función para cargar los municipios
function loadMunicipalities() {
    // Itera sobre cada municipio en el array 'municipalities'
    municipalities.forEach((municipality, index) => {
        const li = document.createElement('li');              // Crea un nuevo elemento <li> para cada municipio
        li.textContent = municipality.title;                  // Asigna el título del municipio como texto del <li>
        li.classList.add('municipality-item');                // Agrega una clase al <li> para estilizado

        // Agrega un evento 'click' al <li> que cargará las categorías del municipio seleccionado
        li.addEventListener('click', () => loadCategories(index));
        
        // Agrega el <li> creado al contenedor de la lista de municipios
        municipalityList.appendChild(li);
    });
}

// Función para cargar las categorías de un municipio con botones horizontales
function loadCategories(municipalityIndex) {
    const selectedMunicipality = municipalities[municipalityIndex];  // Selecciona el municipio basado en el índice dado

    // Limpia las listas anteriores de categorías y detalles
    categoryList.innerHTML = '';  // Limpia el contenedor de botones de categorías
    categoryDetails.innerHTML = ''; // Limpia el contenedor de detalles de la categoría

    // Itera sobre cada categoría del municipio seleccionado
    selectedMunicipality.categories.forEach((category, index) => {
        const button = document.createElement('button');     // Crea un nuevo botón para cada categoría
        button.textContent = category.name;                  // Asigna el nombre de la categoría como texto del botón
        button.classList.add('category-btn');                // Agrega una clase al botón para estilizado

        // Agrega un evento 'click' al botón que mostrará los detalles de la categoría seleccionada
        button.addEventListener('click', () => showCategoryDetails(municipalityIndex, index));
        
        // Agrega el botón creado al contenedor de la lista de categorías
        categoryList.appendChild(button);
    });
}

// Función para mostrar los detalles de una categoría seleccionada
function showCategoryDetails(municipalityIndex, categoryIndex) {
    const category = municipalities[municipalityIndex].categories[categoryIndex];  // Obtiene la categoría seleccionada

    // Rellena el contenedor de detalles de la categoría con contenido HTML dinámico
    categoryDetails.innerHTML = `
        <h2>${category.name}</h2>                 
        <p>${category.description}</p>            

        <!-- Contenedor de galería de imágenes -->
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

    // Actualiza la selección visual del botón de categoría
    const buttons = document.querySelectorAll('.category-btn');  // Selecciona todos los botones de categoría
    buttons.forEach(button => button.classList.remove('selected')); // Remueve la clase 'selected' de todos los botones
    buttons[categoryIndex].classList.add('selected');            // Agrega la clase 'selected' al botón actual
}

// Función para mostrar/ocultar el menú lateral en móviles (si aplica)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');  // Selecciona el elemento sidebar por su ID
    sidebar.classList.toggle('open');                    // Agrega o quita la clase 'open' para mostrar/ocultar el menú
}

// Cargar los municipios al cargar la página
loadMunicipalities();  // Llama a la función 'loadMunicipalities' para inicializar la lista de municipios cuando se carga la página

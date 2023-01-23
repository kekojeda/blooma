const serviciosYProductos= [
    {
        nombre: "Depilacion definitiva",
        categoria: "Servicios",
        subcategoria: "Depilacion",
        descripcion: "Los dermatólogos recomiendan la depilación láser para combatir determinadas afecciones cutáneas como foliculitis e hirsutismo. Entre los principales beneficios de la depilación láser, este es el más determinante para la salud de la piel. Ya que ayuda a eliminar afecciones molestas e incómodas. Como asi también eliminar el vello DEFINITIVAMENTE",
        id:1,
        imagen:"../public/images/depi.webp"
    },
    {
        nombre: "Lash lifting",
        categoria: "Servicios",
        subcategoria:"Pestañas",
        descripcion:"Es una solución rápida que reemplaza el arqueador y el rimmel. Ayuda a que tus pestañas estén más largas y con más volumen. Este tratamiento es ideal para elevar y lograr una curvatura perfecta de pestañas de manera natural logrando una mirada más sensual y hermosa.",
        id:2,
        imagen:"../public/images/lash-lifting.jpeg"
    },
    {
        nombre: "Pestañas pelo por pelo",
        categoria:"Servicios",
        subcategoria:"Pestañas",
        descripcion:"Se trata de una colocación de pestañas postizas que se realizan sobre cada pestaña, logrando un efecto de ojo maquillado 24 horas. Lleva un mantenimiento mensual ya que el ciclo de una pestaña natural es de aproximadamente 1 mes y es por ello que se renuevan y van cayendo de a poco.",
        id:3,
        imagen:"../public/images/pelo-por-pelo.jpeg"
    },
    {
        nombre:"Laminado de cejas",
        categoria: "Servicios",
        subcategoria:"Cejas",
        descripcion:"Este tratamiento es ideal para el “relleno natural de cejas” como así está indicado para aquellas cejas rebeldes, ya que las hace manejables con el fin de definir la forma deseada y permanente en la ceja.",
        id:4,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Diseño y perfilado de cejas",
        categoria: "Servicios",
        subcategoria:"Cejas",
        descripcion:"Es un servicio personalizado de depilación que consiste en darle forma correcta a las cejas respetando la forma natural de la misma.",
        id:5,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Relleno de cejas",
        categoria: "Servicios",
        subcategoria:"Cejas",
        descripcion:"Se realiza con un pigmento orgánico llamado Henna que se utiliza para el tintado de cejas. Es un tratamiento natural y no permanente.",
        id:6,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Limpieza profunda",
        categoria: "Servicios",
        subcategoria:"Tratamientos faciales",
        descripcion:"Esta técnica específica que se realiza en centros de estética está indicada para mejorar la salud y apariencia tisular. Eliminando los puntos negros y células muertas, consiguiendo una piel sana y permeable para incorporar los principios activos que tu biotipo de piel necesita.",
        id:7,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Dermaplaning",
        categoria: "Servicios",
        subcategoria:"Tratamientos faciales",
        descripcion:"Es un excelente método para exfoliar la piel y ayudar a que genera nuevas células. Disminuye la apariencia de las arrugas finas y cicatrices de acné. El resultado será una piel extremadamente suave y luminosa",
        id:8,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Nutricion anti age",
        categoria: "Servicios",
        subcategoria:"Tratamientos faciales",
        descripcion:"Esta práctica está centrada en devolver la juventud al rostro y cuerpo y disimular el proceso de envejecimiento a través de la reducción de manchas y arrugas, mejorando la calidad de la piel aportando luminosidad y elasticidad y en algunos casos eliminar el vello.",
        id:9,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Lifting facial sin cirugia",
        categoria: "Servicios",
        subcategoria:"Tratamientos faciales",
        descripcion:"La radiofrecuencia facial es una técnica de medicina estética dirigida a tratar la laxitud de la piel, produce un efecto similar al lifting pero sin cirugía. Es un procedimiento adecuado para pacientes con flacidez leve o moderada de los tejidos faciales. Trae como resultado una piel más tersa y firme, consiguiendo disimular pequeñas arrugas en la cara. Además, consigue aportar una mayor luminosidad al rostro para quitar ese aspecto de piel cansada.",
        id:10,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Circuito reductor DETOX",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:11,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Circuito modelador",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:12,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Circuito tonificador",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:13,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Circuito anti celulitis",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:14,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Chau aranitas",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:15,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Chau piernas cansadas",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:16,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Chau flacidez",
        categoria: "Servicios",
        subcategoria:"Tratamientos corporales",
        descripcion:"",
        id:17,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Esmaltado semipermanente",
        categoria: "Servicios",
        subcategoria:"Manicuria",
        descripcion:"El esmaltado semipermanente es un sistema de duración corta, entorno 2-3 semanas, sin hacer extensión de la uña, es decir, no se puede alargar la uña con este tipo de esmalte",
        id:18,
        imagen:"../public/images/semipermanente.webp"
    },
    {
        nombre:"Nivelacion",
        categoria: "Servicios",
        subcategoria:"Manicuria",
        descripcion:"Es una técnica que se práctica sobre la uña natural destinada a crear una nivelacion y uña perfecta. Tiene algunas diferencias en relación al Kapping (se realiza sin gel de construcción, ni acrílico ni poligel y no necesita del limado)",
        id:19,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Kapping",
        categoria: "Servicios",
        subcategoria:"Manicuria",
        descripcion:"El Kapping consiste en aplicar una fina capa de acrílico o gel fortificador sobre la uña que actuará como una barrera protectora. A diferencia de las uñas esculpidas, este baño en gel kapping no alarga la uña natural sino que acompaña el crecimiento de la misma y dura hasta 20 días",
        id:20,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Esculpidas",
        categoria: "Servicios",
        subcategoria:"Manicuria",
        descripcion:"Las uñas esculpidas son extensiones que se construyen a partir de la uña natural con material acrílico, gel o poligel. Estas permiten restaurar y reconstruir uñas mordidas o simplemente, lucir uñas más largas. Algo que las hace sumamente atractivas, ya que se puede moldear la forma y longitud para obtener varios estilos.  El mantenimiento de las uñas acrílicas se realiza cada 15 a 20 días, siempre dependiendo del crecimiento de tu uña",
        id:21,
        imagen:"../public/images/esculpidas.jfif"
    },
    {
        nombre:"Belleza de pies",
        categoria: "Servicios",
        subcategoria:"Manicuria",
        descripcion:"Consiste en la realización de una limpieza, exfoliación, empuje o eliminación de cutícula, limado y esmaltado de uñas semipermanente.",
        id:22,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Reconstruccion de unias con hongos",
        categoria: "Servicios",
        subcategoria:"Manicuria",
        descripcion:"",
        id:23,
        imagen:"../public/images/limpieza-facial.jpeg"
    },
    {
        nombre:"Laca Gel Fortalecedor Biotina Y Fortificador Pestañas",
        categoria: "Productos",
        descripcion:"GEL FORTALECEDOR con BIOTINA Beneficios: Mejora el crecimiento y el grosor de las uñas débiles, mordidas y quebradizas. Además, estimula la fase de crecimiento de pestañas y cejas. Aplicación: Sobre las uñas, sin esmalte, aplicar una gota y masajear hasta total absorción. Realizar el tratamiento durante 7 días, repetir cada 2 semanas. En pestañas y cejas, aplicarcon un pincel fino sobre el crecimiento. Activos principales: Biotina, Alantoína. SÉRUM IONIZABLE. Presentación: Gotero 20 ml. FORTIFICADOR ACTIVO GEL DE CEJAS Y PESTAÑAS Contiene un complejo redensificador bioactivo (Capilmax y Biotina) que favorece el crecimiento y engrosamiento del pelo. Arquea y/o disciplina los pelos de pestañas y cejas otorgándoles una hermosa apariencia y luminosidad.",
        id:24,
        imagen:"../public/images/combo-laca.webp"
    },
    {
        nombre:"Exel Promoter Liposomas Crecimiento Pestañas Y Cejas Spray",
        categoria: "Productos",
        descripcion:"PROMOTER Estimula el crecimiento natural de pestañas y cejas. Refuerza y ayuda a disminuir la caída, logrando pestañas y cejas más largas y tupidas. Combate los radicales libres gracias a su acción antioxidante. Posee acción humectante y lubricante de los párpados y el área de contorno de ojos. Refresca y ayuda a evitar la resequedad y la aparición de finas arrugas.",
        id:25,
        imagen:"../public/images/excel-promoter.webp"
    },
    {
        nombre:"Promoter Exel Limpieza Pestañas Espuma Micelar Ojos x50ml",
        categoria: "Productos",
        descripcion:"Suave espuma, ideal para la higiene del área de contorno de ojos, pestañas, extensiones de pestañas y cejas. Puede ser utilizada además como desmaquillante. Otorga suavidad y agradable efecto sensorial. Adicionada con Liposomas encapsulando activos anti-irritantes, extractos de Té verde y Hamamelis. Composición libre de aceites, no deja residuo y no irrita",
        id:26,
        imagen:"../public/images/espuma-promoter.webp"
    }
]

export default serviciosYProductos
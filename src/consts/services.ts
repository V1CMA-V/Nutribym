import type { Service } from "@/types/Service"

export const SERVICES: Service[] = [
    {
        id: "nut-clinica",
        img: "/img/services/clinica-1.webp",
        title: "Nutrición Clínica",
        subtitle: "Planes personalizados para manejar condiciones de salud específicas",
        description: "La nutrición clínica es una rama de la nutrición que se enfoca en el manejo de condiciones de salud específicas a través de la alimentación. En este servicio, se evalúan las necesidades nutricionales de cada paciente y se crean planes personalizados para manejar condiciones de salud específicas.",

        mode: {
            title: "Presencial y virtual",
            description: "Consulta nutricional + Rutina de entrenamiento digital"
        },

        cost: 1200.00
    },
    {
        id: "nut-deportiva",
        img: "/img/services/deporte-1.webp",
        title: "Nutrición Deportiva",
        subtitle: "Planes para mejorar el rendimiento deportivo y la recuperación",
        description: "La nutrición deportiva está diseñada para optimizar el rendimiento y la recuperación de los atletas. Se enfoca en crear planes nutricionales personalizados que ayudan a los deportistas a alcanzar sus objetivos de rendimiento y a recuperarse adecuadamente después del ejercicio.",
        mode: {
            title: "Presencial y virtual",
            description: "Consulta nutricional + Rutina de entrenamiento digital"
        },
        cost: 1500.00
    },
    {
        id: "cons-nutricional",
        img: "/img/services/consulta-1.webp",
        title: "Consulta Nutricional",
        subtitle: "Asesoramiento experto para mejorar tu alimentación y salud",
        description: "En nuestra consulta nutricional, te ofrecemos asesoramiento experto para mejorar tu alimentación y salud. Evaluamos tus hábitos alimenticios y diseñamos un plan que se adapte a tus necesidades y objetivos específicos.",
        mode: {
            title: "Presencial y virtual",
            description: "Consulta nutricional + Rutina de entrenamiento digital"
        },
        cost: 1000.00
    },
    {
        id: "nut-vegetariana",
        img: "/img/services/vegetariano-1.webp",
        title: "Nutrición Vegetariana",
        subtitle: "Planes equilibrados para una dieta vegetariana saludable",
        description: "Nuestros planes de nutrición vegetariana están diseñados para asegurar que recibas todos los nutrientes necesarios a través de una dieta equilibrada y saludable. Ofrecemos asesoramiento y seguimiento personalizado para adaptar tu alimentación vegetariana a tus necesidades.",
        mode: {
            title: "Presencial y virtual",
            description: "Consulta nutricional + Rutina de entrenamiento digital"
        },
        cost: 1100.00
    },

    {
        id: "reg-keto",
        img: "/img/services/keto-1.webp",
        title: "Régimen Keto",
        subtitle: "Planes para adoptar y mantener una dieta cetogénica",
        description: "Nuestros planes de régimen keto están diseñados para ayudarte a adoptar y mantener una dieta cetogénica de manera saludable. Ofrecemos asesoramiento y seguimiento personalizado para asegurarte de que estés obteniendo los beneficios de una dieta baja en carbohidratos.",
        mode: {
            title: "Presencial y virtual",
            description: "Consulta nutricional + Rutina de entrenamiento digital"
        },
        cost: 1300.00
    },
    {
        id: "nut-infantil",
        img: "/img/services/chicos-1.webp",
        title: "Nutrición Infantil",
        subtitle: "Planes para la alimentación y nutrición de niños y adolescentes",
        description: "La nutrición infantil se enfoca en asegurar un crecimiento y desarrollo saludable para los niños y adolescentes. Nuestros planes personalizados están diseñados para satisfacer las necesidades nutricionales específicas de cada etapa de desarrollo.",
        mode: {
            title: "Presencial y virtual",
            description: "Consulta nutricional + Rutina de entrenamiento digital"
        },
        cost: 1000.00
    },

]
    
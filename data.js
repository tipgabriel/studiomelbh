// Data for Meltranças BH website

const businessInfo = {
    name: "Meltranças BH",
    fullName: "Meltranças BH - Estúdio de Tranças",
    location: "Belo Horizonte, MG",
    phone: "(31) 93301-2152",
    whatsapp: "5531933012152",
    instagram: "https://www.instagram.com/meltrancasbh/",
    email: "contato@meltrancasbh.com.br",
    address: "Rua das Flores, 123 - Centro, Belo Horizonte - MG, 30000-000"
};

const services = [
    {
        id: 1,
        name: "Tranças Nagô",
        description: "Tranças tradicionais africanas com técnicas ancestrais, valorizando a cultura e beleza natural dos cabelos crespos e cacheados.",
        price: "A partir de R$ 80",
        duration: "2-4 horas",
        image: "https://images.unsplash.com/photo-1644152993066-9b9ee687930d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=85"
    },
    {
        id: 2,
        name: "Box Braids",
        description: "Tranças soltas individuais que oferecem versatilidade e proteção para os cabelos, podendo ser usadas em diversos penteados.",
        price: "A partir de R$ 120",
        duration: "4-6 horas",
        image: "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=85"
    },
    {
        id: 3,
        name: "Tranças Boxeadora",
        description: "Tranças rentes ao couro cabeludo em formato de duas ou mais fileiras, ideais para atividades esportivas e look despojado.",
        price: "A partir de R$ 60",
        duration: "1-2 horas",
        image: "https://images.unsplash.com/photo-1673470907547-1c0c6a996095?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb3Jucm93c3xlbnwwfHx8fDE3NTc1MzU5NjV8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        id: 4,
        name: "Fulani Braids",
        description: "Combinação elegante de tranças soltas e nagô, decoradas com miçangas e acessórios, inspiradas na tradição do povo Fulani.",
        price: "A partir de R$ 150",
        duration: "5-7 horas",
        image: "https://images.unsplash.com/photo-1711637819201-1f2671641b4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxmdWxhbmklMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTQ5fDA&ixlib=rb-4.1.0&q=85"
    }
];

const galleryImages = {
    nago: [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1644152993066-9b9ee687930d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Tranças Nagô estilo tradicional"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1702236240794-58dc4c6895e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Tranças Nagô com padrão geométrico"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1747330666091-ee0e46f8a72c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Tranças Nagô elaboradas"
        }
    ],
    boxBraids: [
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Box Braids longas"
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Box Braids médias"
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1592328906746-0a3ca0bde253?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Box Braids com cores"
        }
    ],
    boxeadora: [
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1673470907547-1c0c6a996095?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb3Jucm93c3xlbnwwfHx8fDE3NTc1MzU5NjV8MA&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Tranças Boxeadora clássicas"
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1698299708000-bb14e23fe2df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb3Jucm93c3xlbnwwfHx8fDE3NTc1MzU5NjV8MA&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Tranças Boxeadora laterais"
        },
        {
            id: 9,
            url: "https://images.pexels.com/photos/30215199/pexels-photo-30215199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            alt: "Tranças Boxeadora estilizadas"
        }
    ],
    fulani: [
        {
            id: 10,
            url: "https://images.unsplash.com/photo-1711637819201-1f2671641b4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxmdWxhbmklMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTQ5fDA&ixlib=rb-4.1.0&q=100&w=800",
            alt: "Fulani Braids com miçangas"
        },
        {
            id: 11,
            url: "https://images.pexels.com/photos/33837423/pexels-photo-33837423.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            alt: "Fulani Braids elaboradas"
        },
        {
            id: 12,
            url: "https://images.pexels.com/photos/12788372/pexels-photo-12788372.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            alt: "Fulani Braids tradicionais"
        }
    ]
};

const testimonials = [
    {
        id: 1,
        name: "Maria Silva",
        rating: 5,
        comment: "Simplesmente perfeito! As tranças ficaram lindas e duradouras. A Melissa é muito profissional e cuidadosa.",
        service: "Box Braids",
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Ana Paula",
        rating: 5,
        comment: "Adorei o resultado das minhas Fulani Braids! O atendimento foi excelente e o ambiente muito acolhedor.",
        service: "Fulani Braids",
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Carla Santos",
        rating: 5,
        comment: "Minha primeira experiência com tranças nagô e não poderia ter escolhido lugar melhor. Recomendo!",
        service: "Tranças Nagô",
        date: "2024-01-08"
    },
    {
        id: 4,
        name: "Bruna Costa",
        rating: 5,
        comment: "As tranças boxeadora ficaram perfeitas para meus treinos. Muito prático e lindo!",
        service: "Tranças Boxeadora",
        date: "2024-01-05"
    }
];

const aboutContent = {
    title: "Sobre o Meltranças BH",
    description: "O Meltranças BH é um estúdio especializado em tranças afro, localizado no coração de Belo Horizonte. Nossa missão é valorizar a beleza natural dos cabelos crespos e cacheados através de técnicas tradicionais e modernas de trançado.",
    mission: "Proporcionar a cada cliente uma experiência única, valorizando sua beleza natural e fortalecendo sua autoestima através da arte das tranças.",
    vision: "Ser referência em Belo Horizonte na arte das tranças, promovendo a cultura afro e empoderando mulheres através da beleza.",
    values: [
        "Respeito à cultura afro",
        "Qualidade e excelência",
        "Atendimento personalizado",
        "Ambiente acolhedor",
        "Técnicas tradicionais e modernas"
    ]
};

const featuredWorks = [
    {
        id: 1,
        image: galleryImages.boxBraids[0].url,
        title: "Box Braids Elegantes",
        description: "Tranças longas e sofisticadas"
    },
    {
        id: 2,
        image: galleryImages.nago[0].url,
        title: "Tranças Nagô Tradicionais",
        description: "Beleza ancestral africana"
    },
    {
        id: 3,
        image: galleryImages.fulani[0].url,
        title: "Fulani Braids com Miçangas",
        description: "Elegância e tradição"
    },
    {
        id: 4,
        image: galleryImages.boxeadora[0].url,
        title: "Tranças Boxeadora",
        description: "Estilo esportivo e moderno"
    }
];

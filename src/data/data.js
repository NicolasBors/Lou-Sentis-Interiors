export const data = {
  sections: [
    {
      id: "realisation",
      name: "Réalisation",
    },
    {
      id: "mobilier",
      name: "Mobilier",
    },
    {
      id: "information",
      name: "Information",
    },
  ],
  home: {
    links: [
      {
        id: "uuid",
        type: "realisation",
        refId: "uuid",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
      {
        id: "uuid",
        type: "mobilier",
        refId: "uuid",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
    ],
  },
  realisation: {
    description: "Projets architecturaux",
    links: [
      {
        id: "uuid",
        refId: "uuid",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
    ],
    pages: [
      {
        id: "uuid",
        name: "Duquesne",
        path: "/realisation/duquesne",
        description: "Hôtel Duquesne, Paris, France. 2020",
        images: [
          {
            label: "Test",
            caption: "Ceci est un test",
            url:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            default: true,
          },
        ],
      },
    ],
  },
  mobilier: {
    description: "Collection d'éléments mobiliers",
    links: [
      {
        id: "uuid",
        refId: "uuid",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
    ],
    pages: [
      {
        id: "uuid",
        name: "Accessoires",
        path: "/mobilier/accessoires",
        categories: [
          {
            id: "categoryId",
            label: "Vases et plantes",
            defaultImageUrl:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          },
        ],
        images: [
          {
            label: "Test",
            categoryId: "categoryId",
            caption: "Ceci est un test",
            url:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            default: true,
          },
        ],
      },
    ],
  },
};

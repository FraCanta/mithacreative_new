export const freelancers = [
  { name: "Alice Bolla", role: "Copywriter & Ads", image: "/assets/Alice_Bolla_astronauta.webp", realImage: "/assets/alice_real.webp", accent: "coral" },
  { name: "Miranda Giaccon", role: "UX/UI Designer", image: "/assets/Miranda_Giaccon_astronauta.webp", realImage: "/assets/miranda_real.webp", accent: "lilac" },
  { name: "Elisa Avantey", role: "Graphic Designer", image: "/assets/Elisa_Avantey_astronauta.webp", realImage: "/assets/elisa_real.webp", accent: "violet" },
  { name: "Francesca Cantale", role: "Web Developer", image: "/assets/Francesca_Cantale_astronauta.webp", realImage: "/assets/francesca_real.webp", accent: "orange" },
];

export const freelancersByFirstName = Object.fromEntries(
  freelancers.map((person) => [person.name.split(" ")[0], person]),
);

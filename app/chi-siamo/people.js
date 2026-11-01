export const freelancers = [
  { name: "Alice Bolla", role: "Digital Content Specialist", image: "/assets/Alice_Bolla_astronauta.webp", realImage: "/assets/alice_real.webp", accent: "coral" },
  { name: "Miranda Giaccon", role: "UX/UI Designer", image: "/assets/Miranda_Giaccon_astronauta.webp", realImage: "/assets/miranda_real.webp", accent: "lilac", socials: { instagram: "https://www.instagram.com/miranda.uxdesigner/", linkedin: "https://www.linkedin.com/in/miranda-giaccon", website: "https://www.mirandagiaccon.it/" } },
  { name: "Elisa Avantey", role: "Graphic Designer", image: "/assets/Elisa_Avantey_astronauta.webp", realImage: "/assets/elisa_real.webp", accent: "violet", socials: { instagram: "https://www.instagram.com/miaographics/", website: "https://www.miaographics.it/" } },
  { name: "Francesca Cantale", role: "Web Developer", image: "/assets/Francesca_Cantale_astronauta.webp", realImage: "/assets/francesca_real.webp", accent: "orange", socials: { instagram: "https://www.instagram.com/thallion.dev/", linkedin: "https://www.linkedin.com/in/francesca-cantale-30730b182/", website: "https://www.thallion-dev.it/" } },
];

export const freelancersByFirstName = Object.fromEntries(
  freelancers.map((person) => [person.name.split(" ")[0], person]),
);

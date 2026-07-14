import hardware from "../assets/divisions/hardware.jpg";
import agricuture from "../assets/divisions/agricuture.jpg";
import plaza from "../assets/divisions/plaza.jpg";
import property from "../assets/divisions/property.jpg";

const divisions = [
  {
    id: 1,
    title: "Hardware & Building Supplies",
    description:
      "Construction materials, plumbing, electrical supplies, roofing materials and paints for projects of every size.",
    image: hardware,
    link: "/products",
  },
  {
    id: 2,
    title: "Agricultural Machinery",
    description:
      "Water pumps, generators, irrigation equipment and modern farming machinery for farmers across Kenya.",
    image: agricuture,
    link: "/agricuture",
  },
  {
    id: 3,
    title: "Commercial Plaza",
    description:
      "Modern commercial spaces available for retail shops, offices and business operations.",
    image: plaza,
    link: "/plaza",
  },
  {
    id: 4,
    title: "Commercial Property",
    description:
      "Quality commercial properties and investment opportunities across the Mount Kenya region.",
    image: property,
    link: "/about",
  },
];

export default divisions;
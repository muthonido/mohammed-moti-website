import hardware from "../assets/products/hardware.jpg";
import tractor from "../assets/products/tractor.jpg";
import industrial from "../assets/products/industrial.jpg";
import plaza from "../assets/products/plaza.jpg";
import seeds from "../assets/products/seeds.jpg";
import powertools from "../assets/products/powertools.jpg";

const productsData = [
  {
    id: 1,
    title: "Construction Hardware",
    category: "Hardware",
    image: hardware,
    description: "Quality building materials and hardware supplies."
  },

  {
    id: 2,
    title: "Agricultural Machinery",
    category: "Agriculture",
    image: tractor,
    description: "Reliable machinery for modern farming."
  },

  {
    id: 3,
    title: "Industrial Equipment",
    category: "Industrial",
    image: industrial,
    description: "Heavy-duty equipment for industrial operations."
  },

  {
    id: 4,
    title: "Commercial Property",
    category: "Property",
    image: plaza,
    description: "Modern commercial spaces for businesses."
  },

  {
    id: 5,
    title: "Seeds & Farm Inputs",
    category: "Agriculture",
    image: seeds,
    description: "High-quality seeds and farming essentials."
  },

  {
    id: 6,
    title: "Power Tools",
    category: "Hardware",
    image: powertools,
    description: "Professional tools for every project."
  }
];

export default productsData;
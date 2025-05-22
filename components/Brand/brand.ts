import { assets } from "@/assets/assets";
import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";
export const brand = [
  {
    id: 1,
    name: "JBL",
    image: assets.jbl_brand,
    description:
      "JBL is a leading audio brand known for its high-quality speakers, headphones, and sound systems. With a commitment to delivering exceptional sound experiences, JBL products are designed for music lovers and audiophiles alike.",
  },
  {
    id: 2,
    name: "Logitech",
    image: assets.logitech_brand,
    description:
      "Logitech is a global leader in personal computer and mobile accessories. Known for its innovative designs and cutting-edge technology, Logitech offers a wide range of products including mice, keyboards, webcams, and gaming gear.",
  },
  {
    id: 3,
    name: "Samsung",
    image: assets.samsung_brand,
    description:
      "Samsung is a multinational conglomerate known for its diverse range of electronics and appliances. From smartphones to home appliances, Samsung products are synonymous with quality, innovation, and style.",
  },
  {
    id: 4,
    name: "Sony",
    image: assets.sony_brand,
    description:
      "Sony is a global leader in electronics, gaming, and entertainment. With a rich history of innovation, Sony products range from high-quality audio and video equipment to cutting-edge gaming consoles.",
  },
  {
    id: 5,
    name: "Apple",
    image: assets.apple_brand,
    description:
      "Apple is a technology company known for its innovative products and services. From iPhones to MacBooks, Apple products are designed with a focus on user experience, quality, and design.",
  },
  {
    id: 7,
    name: "Dell",
    image: assets.dell_brand,
    description:
      "Dell is a multinational computer technology company known for its innovative hardware and software solutions. From laptops to servers, Dell products are designed for performance, reliability, and user satisfaction.",
  },
  {
    id: 8,
    name: "Asus",
    image: assets.asus_brand,
    description:
      "Asus is a global leader in computer hardware and electronics. Known for its high-performance laptops, motherboards, and graphics cards, Asus products are designed for gamers, creators, and professionals.",
  },
];
export const features = [
  {
    Icon: Truck,
    title: "Free Delivery",
    subtitle: "Free shipping over $100",
  },
  {
    Icon: RotateCcw,
    title: "Free Return",
    subtitle: "Return within 30 days",
  },
  {
    Icon: Headset,
    title: "Customer Support",
    subtitle: "Friendly 24/7 support",
  },
  {
    Icon: ShieldCheck,
    title: "Money Back Guarantee",
    subtitle: "Quality checked by our team",
  },
];

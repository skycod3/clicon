import { TwitterLogo, FacebookLogo, PinterestLogo, RedditLogo, YoutubeLogo, InstagramLogo } from "phosphor-react";

import ImgCartItem1 from "../assets/cart-item-1.png";
import ImgCartItem2 from "../assets/cart-item-2.png";

const socials = [
  { name: "Twitter", icon: TwitterLogo, href: "https://twitter.com/" },
  { name: "Facebook", icon: FacebookLogo, href: "https://www.facebook.com/" },
  { name: "Pinterest", icon: PinterestLogo, href: "https://br.pinterest.com/" },
  { name: "Reddit", icon: RedditLogo, href: "https://www.reddit.com/" },
  { name: "Youtube", icon: YoutubeLogo, href: "https://www.youtube.com/" },
  { name: "Instagram", icon: InstagramLogo, href: "https://www.instagram.com/" },
];

const shoppingCart = [
  { id: 1, image: ImgCartItem1, name: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm", price: 1500, amount: "1" },
  {
    id: 2,
    image: ImgCartItem2,
    name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
    price: 269,
    amount: "2",
  },
];

export { socials, shoppingCart };

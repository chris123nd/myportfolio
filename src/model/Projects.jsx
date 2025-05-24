import web1 from "../assets/img/web1.png";
import web2 from "../assets/img/web2.jpg";
import web3 from "../assets/img/web3.jpg";
import mobile1 from "../assets/img/mobile1.png";

const mobile = [
  {
    title: "Rumah Kreative Toba",
    imgUrl: mobile1,
    category: "Mobile",
    url: "",
    stack: ["flutter", "dart", "mysql", "laravel", "php", "boostrap"],
  },
];

const website = [
  {
    title: "Rumata Coffee",
    imgUrl: web1,
    url: "https://github.com/HandikaRonny/Rumata-Coffee-Website-using-PHP-Native",
    category: "Website",
    stack: ["php", "html", "mysql", "js", "css"],
  },
  {
    title: "My Portfolio",
    imgUrl: web2,
    url: "https://github.com/HandikaRonny/Rumata-Coffee-Website-using-PHP-Native",
    category: "Website",
    stack: ["react js", "html", "js", "css", "bootstrap"],
  },
  {
    title: "Pondok Christian",
    imgUrl: web3,
    url: "https://github.com/chris123nd/Pondok-Christian",
    category: "Website",
    stack: ["vue js", "html", "js", "css"],
  },
];

export default { mobile, website };

import Marquee from "react-fast-marquee";
import marvel from "../assets/Marvel.png";
import shopify from "../assets/Shopify.png";
import coinbase from "../assets/Coinbase.png";
import dropbox from "../assets/Dropbox.png";
import automattic from "../assets/Automattic.png";
import intercom from "../assets/intercom.png";

const images = [
  {
    id: 1,
    image: shopify,
  },
  {
    id: 2,
    image: coinbase,
  },
  {
    id: 3,
    image: dropbox,
  },
  {
    id: 4,
    image: intercom,
  },
  {
    id: 5,
    image: marvel,
  },
  {
    id: 6,
    image: automattic,
  },
];

const Partner = () => {
  return (
    <div className="container mt-12 p-16">
      <p className="text-gray-600 text-center mb-6">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <Marquee className="mb-28">
        {images.map((image) => (
          <img src={image.image} key={image.id} alt="" className="mx-8" />
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;

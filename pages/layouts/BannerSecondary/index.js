import Image from "next/image";

function BannerSecondary() {
  return (
    <div className="section">
      <div className="container">
        <Image src={require("../../../public/images/banners/banner04.png")} alt="" />
      </div>
    </div>
  );
}

export default BannerSecondary;

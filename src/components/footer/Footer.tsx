import Logo from "src/assets/logo.svg";
import PlanetMedia from "src/assets/planetmedia.svg";
import Instagram from "src/assets/instagram.svg";
import Facebook from "src/assets/facebook.svg";

export const Footer = () => {
  return (
    <footer className=" bg-primary text-secondary h-[381px] flex justify-between py-[85px] px-[55px]">
      <div className="flex flex-col gap-28">
        <img
          src={Logo}
          alt="logo"
        />
        <div className="flex">
          <p>© 2022 PURE BEAUTY. POWERED BY</p>
          <img
            src={PlanetMedia}
            alt="name-logo"
          />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-10">
          <p>ADDRESS</p>
          <p>13 Brinkley Circuit Palmerston</p>
        </div>
        <div className="flex flex-col  gap-10">
          <p>SOCIAL MEDIA</p>
          <div className="flex">
            <img
              src={Instagram}
              alt="instagram"
            />
            <img
              src={Facebook}
              alt="fb"
            />
          </div>
          <p className="mt-[80px]">ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

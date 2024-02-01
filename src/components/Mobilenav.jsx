import Logo from "./Logo";

const Mobilenav = () => {
  return (
    <div className=" md:hidden">
      <div className="w-fit cursor-pointer">
        <Logo width={90} path={"/in/home"} />
      </div>
      <p>Mobile nav</p>
    </div>
  );
};

export default Mobilenav;

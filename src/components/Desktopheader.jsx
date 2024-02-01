import Logo from "./Logo";

const Desktopheader = () => {
  return (
    <div className="border-r h-screen px-8 pt-3 pb-6 w-1/6 hidden md:block">
      <div className="w-fit cursor-pointer">
        <Logo width={90} path={"/in/home"} />
      </div>
      Desktop Header
    </div>
  );
};

export default Desktopheader;

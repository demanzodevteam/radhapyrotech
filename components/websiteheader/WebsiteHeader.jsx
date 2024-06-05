import CartIcon from "./CartIcon";

const WebsiteHeader = () => {
  return (
    <div className="h-20 px-14 border-b-2 fixed z-40 w-screen top-0 bg-white">
      <div className="grid grid-cols-8 h-20">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex gap-4 items-center justify-end">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};
export default WebsiteHeader;

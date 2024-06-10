import Image from "next/image";
import logo from "@/assets/logo.png";
import CartIcon from "./CartIcon";
import Link from "next/link";

const WebsiteHeader = () => {
  return (
    <div className="h-24 px-14 border-b-2 fixed z-40 w-screen top-0 bg-white">
      <div className="grid grid-cols-8 h-20">
        <div className="col-span-1">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              priority={true}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-full object-contain absolute left-0 top-0 pl-14 py-4"
            />
          </Link>
        </div>
        <div className="col-span-7 h-ful flex gap-4 items-center justify-end">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};
export default WebsiteHeader;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SlDocs } from "react-icons/sl";
import { AiFillAppstore } from "react-icons/ai";
import { CgTemplate } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20   flex flex-col  bg-primary text-white">
      <Link href="/">
        <Image
          src="/logo.png"
          width={26}
          height={35}
          className="relative flex items-center justify-center 
                         mt-6  mx-auto "
        />
      </Link>

      <hr className="mt-8 mb-8"></hr>

      <div className="flex flex-col h-full justify-between gap-8 mb-4">
        <div>
          <Link href="/templates">
            <SidebarIcon icon={<CgTemplate size="28" />} text={"Templates"} />
          </Link>
          <Link href="/artikel">
            <SidebarIcon icon={<SlDocs size="28" />} text={"Artikel"} />
          </Link>
          <Link href="/apps">
            <SidebarIcon icon={<AiFillAppstore size="28" />} text={"Apps"} />
          </Link>
          <Link href="/videos">
            <SidebarIcon
              icon={<MdSlowMotionVideo size="28" />}
              text={"Videos"}
            />
          </Link>
        </div>
        <div>
          <Link className="p-2 text-xs  flex items-center " href="/impressum">
            Impressum
          </Link>
          <Link className="p-2 text-xs  flex items-center" href="/apps">
            DSGVO
          </Link>
        </div>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => {
  return (
    <div className="sidebar_icon group">
      {icon}
      <span className="sidebar_tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;

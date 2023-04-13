import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { TfiBell, TfiSearch} from 'react-icons/tfi';
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/apiContext";


const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const {mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
      if((event.key === 'Enter' || event === 'searchButton') && searchQuery.length > 0){
        navigate(`/searchResult/${searchQuery}`)
      }
    }

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white">
   
   {/* {
    loading && <Loader />
   } */}
            <div className="flex h-5 items-center gap-1">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#e9e9e9]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-[#030303] text-lg" />
                        ) : (
                            <SlMenu className="text-[#030303] text-lg" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-8 ml-4 items-center">
                    <img
                        className="h-full hidden md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                      </Link>
                      <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                      </Link>
              
            </div>

            {/* Search Corner */}

            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-zinc-300 rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                
                {/* display on focus Icon */}
                <div className="w-10 items-center justify-center  hidden group-focus-within:md:flex">
                        <TfiSearch className="text-[#030303] text-base" />
                    </div>
                    {/* display on focus icon end */}

                    <input
                        type="text"
                        className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}

                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center bg-zinc-100 border border-l-xl border-zinc-200 rounded-r-2xl"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <TfiSearch className="text-[#030303] text-lg" />
                </button>
            </div>




            {/*Left Side */}
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#e9e9e9]">
                        <VscDeviceCameraVideo className="h-6 w-6 text-[#030303] text-xl cursor-pointer" />
                     
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#e9e9e9]">
                        <TfiBell className="text-[#030303] h-5 w-5 cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://images.news9live.com/h-upload/2022/07/02/448078-sidhu.jpg?w=663" alt="profile-photo"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from 'react-icons/ti';

export default function Footer() {
  return (
    <div className="">
      <footer className="flex flex-col bg-[#07253f] pt-8">
        <div className="lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between lg:w-2/3 m-auto lg:px-0 px-3">
            <div>
            <img src='/logo.png' alt="logo" className="w-20 mb-4" />              <p className="text-xs text-white mt-2">Why Discover China</p>
              <p className="text-xs text-white mt-2">Terms & Conditions</p>
              <p className="text-xs text-white mt-2">Privacy Policy</p>
              <div className="flex items-center pt-6 w-full lg:justify-between lg:gap-x-0 gap-x-6">
                <FaFacebookF className="text-white" />
                <TiSocialGooglePlus className="text-white" />
                <FaTwitter className="text-white" />
                <FaInstagram className="text-white" />
              </div>
            </div>

            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">Support</p>
              <p className="text-xs text-white mt-2">Blog</p>
              <p className="text-xs text-white mt-2">Help</p>
              <p className="text-xs text-white mt-2">Contact</p>
            </div>
            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                Travel tips
              </p>
              <p className="text-xs text-white mt-2">Island tours</p>
              <p className="text-xs text-white mt-2">Adventures</p>
              <p className="text-xs text-white mt-2">Shows</p>
              <p className="text-xs text-white mt-2">Fishing</p>
              <p className="text-xs text-white mt-2">Diving Tips</p>
              <p className="text-xs text-white mt-2">City Tour</p>
            </div>
            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                Become an agent
              </p>
              <p className="text-xs text-white mt-2">Apply now</p>
              <p className="text-xs text-white mt-2">Agent sign in</p>
            </div>
            <div>
              <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">Contact us</p>
              <p className="text-xs text-white mt-2">
                51 Rat-U-Thit 200 Pee Rd., Patong Beach, Ban <br /> Patong,
                Phuket, Thailand 83150
              </p>

              <p className="text-xs text-white mt-2">
                <span className="font-medium text-[#3b6680]">E:</span>{" "}
                info@phuketshantitravel.com
              </p>
              <p className="text-xs text-white mt-2">
                {" "}
                <span className="font-medium text-[#3b6680]">P:</span> +66 825
                192 688
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="bg-[#121212] h-12"> */}
       <div className="h-14 lg:flex items-center justify-between">
        <span className="bg-[#121212] text-white text-[10px] lg:w-2/3 h-full items-center flex lg:pl-[16.5%] pl-3">
        <p className="">
          Copyright © 2023 PHUKET SHANTI TRAVEL. All Rights Reserved.
        </p></span>
        <div className="bg-black lg:w-1/3 h-full flex gap-x-2 items-center px-3">
          <p className="text-white text-[10px]">Whys you can pay</p>
          <span className="flex items-center gap-x-2">
          <img src="/paypal.webp" alt="paypal" className="w-10 h-6" />
          <img src="/maestro.png" alt="maestro" className="w-10 h-6" />
          <img src="/visa.jpg" alt="visa" className="w-10 h-6" />
          <img src="/mastercard.webp" alt="mastercard" className="w-10 h-6" />
        </span></div>
        </div>
      {/* </div> */}
    </div>
  );
}

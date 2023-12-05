import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { MdAccessTime, MdFactCheck } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    module: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const latest_package = [
    {
      id: 1,
      img: "/city_tour.jpg",
      title:
        "City Tour Phuket (Phuket Zoo, Big Buddha, Chalong Temple and other)",
    },
    {
      id: 2,
      img: "/hero.jpg",
      title: "Phuket City Tour and Tiger (Half Day)",
    },
    {
      id: 3,
      img: "/hero.jpg",
      title: "James Bond Island Sunset trip By Luxury big boat",
    },
    {
      id: 4,
      img: "/hero.jpg",
      title: "Khai Island Tour",
    },
  ];

  const tour_data = [
    {
      id: 1,
      img: "/adventure.jpg",
      title: "Phi Phi Island Tour",
    },
    {
      id: 2,
      img: "/island_tours.jpg",
      title: "Racha Island Tour",
    },
    {
      id: 3,
      img: "/hero.jpg",
      title: "James Bond Island Tour",
    },
    {
      id: 4,
      img: "/hero.jpg",
      title: "Khai Island Tour",
    },
    {
      id: 5,
      img: "/hero.jpg",
      title: "Karabi Island Tour",
    },
    {
      id: 6,
      img: "/hero.jpg",
      title: "Similan Island Tour",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <main>
          <section className="bg-[url('/landing_image.jpg')] bg-no-repeat bg-cover h-[80vh] -top-[10vh] relative text-white">
            <div className="lg:w-2/3 mx-auto h-full flex flex-col justify-center">
              <h1 className="font-medium lg:text-5xl text-3xl lg:text-left text-center">
                Find our dream <br />
                Trip on Shanti Travels{" "}
              </h1>
              <p className="lg:text-2xl text-lg lg:text-left text-center mt-6 mb-4">
                We offer unbeatable price & Excellent Services
              </p>
              <div className="flex lg:justify-start justify-center">
                <span className="rounded-full border border-white flex flex-col items-center gap-4 p-1">
                  <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2 h-full">
                    View offers
                  </button>
                </span>
                <button className="rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
                  <FaPhone className="rotate-90" />
                  <p>+66 82 519 2688</p>
                </button>
              </div>
            </div>
            <div className="absolute lg:right-24 right-5 lg:bottom-[30%] bottom-20 flex flex-col gap-6">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </section>
          <section className="lg:w-2/3 w-4/5 relative h-16 m-auto -mt-[7.5rem]">
            <FaSearch className="text-[#6fcfdd] absolute top-0 bottom-0 h-full left-8" />
            <input
              type="text"
              placeholder="Search trip destination"
              className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg border-none outline-none w-full h-full pl-16 text-white"
            />
          </section>
          <section className="mt-12">
            <div className="flex lg:flex-row flex-col items-center justify-between lg:w-2/3 m-auto lg:mb-8">
              <span className="flex items-center gap-x-2">
                <h2 className="lg:text-3xl font-medium">
                  What is your life style?
                </h2>
                <p className="text-[#62c9dc] lg:pl-16 text-sm">Find yourself</p>
              </span>
              <a
                href="#"
                className="text-sm flex items-center gap-x-1 lg:w-1/5"
              >
                See all Destinations
                <AiOutlineArrowRight className="text-[#62c9dc] font-medium text-base" />
              </a>
            </div>
            <Carousel
              className="home_carousel z-20"
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite
              autoPlay={true}
              autoPlaySpeed={2000}
              // arrows={false}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
            >
              <div className="xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                <img src="/island_tours.jpg" alt="" />
              </div>
              <div className="xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                <img src="/adventure.jpg" alt="" />
              </div>
              <div className="xl:m-0 xl:mt-0 m-auto mt-8 mb-4 lg:pl-6">
                <img src="/city_tour.jpg" alt="" />
              </div>
            </Carousel>
          </section>

          <section className="pt-12 bg-[#f8f8f8] pb-24">
            <div className="flex lg:flex-row flex-col items-center justify-between lg:w-2/3 m-auto mb-8">
              <span className="flex items-center gap-x-2">
                <h2 className="lg:text-3xl font-medium">Recommended Tours</h2>
                <p className="text-[#62c9dc] lg:pl-16 text-sm">
                  Most trending tours right now
                </p>
              </span>
              <a
                href="#"
                className="text-sm flex items-center gap-x-1 lg:w-1/5"
              >
                See all 44 tours & activities
                <AiOutlineArrowRight className="text-[#62c9dc] font-medium text-base" />
              </a>
            </div>

            <div className="flex lg:justify-between justify-center gap-8 lg:w-2/3 mx-auto">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {tour_data.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="h-80 relative">
                      <img src={item.img} alt="" className="h-full w-full" />
                      <span className="flex items-center justify-between absolute w-full px-8 top-5">
                        <div className="flex items-center justify-center px-2 ">
                          {[...Array(5)].map((_, index) => {
                            index += 1;

                            return (
                              <AiFillStar
                                key={index}
                                className="text-[#FFCC02]"
                              />
                            );
                          })}
                          <p className="text-xs text-white pl-2">12 Review</p>
                        </div>
                      </span>
                    </div>
                    <div className="absolute bottom-[31%] left-8">
                      <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg border-none outline-none px-4 text-sm text-white">
                        TOP TOUR
                      </button>
                    </div>
                    <div className="bg-white py-8">
                      <h2 className="font-medium px-6">{item.title}</h2>

                      <div className="flex items-center text-sm mt-2">
                        <span className="border-r-2 border-[#e9e9e9] w-3/5 px-6">
                          <p className="flex items-center gap-x-2">
                            <BsPeopleFill className="text-[#62c9dc] text-xs" />
                            Private Tour
                          </p>
                          <p className="flex items-center gap-x-2">
                            <IoLocationOutline className="text-[#62c9dc] text-xs" />
                            Thailand
                          </p>
                          <p className="flex items-center gap-x-2">
                            <MdAccessTime className="text-[#62c9dc] text-xs" />
                            12 Hours
                          </p>
                        </span>
                        <span className="w-2/5 px-6">
                          <p className="text-xs">START PRICE</p>

                          <p className="text-[#002361] font-semibold text-xl pt-2">
                            <sup>$</sup> 2,000
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[url('/assistance.jpg')] bg-no-repeat bg-cover h-[70vh] text-white">
            <div className="h-full lg:w-2/3 mx-auto flex flex-col justify-center">
              <h1 className="font-medium lg:text-5xl text-3xl lg:text-left text-center">
                {" "}
                Need Assistance
              </h1>
              <p className="lg:text-2xl mt-6 mb-4 lg:text-left text-center">
                Need Help? Call us or drop a message.
                <br />
                Our agents will be in touch shortly.
              </p>
              <div className="lg:flex justify-between items-center">
                <div className="flex gap-x-4 lg:justify-between lg:px-0 px-3">
                  <span className="rounded-full border border-white flex flex-col items-center gap-4 p-1">
                    <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2 h-full uppercase">
                      Contact us
                    </button>
                  </span>
                  <button className="rounded-full hoverBtn flex items-center gap-2">
                    <FaPhone className="rotate-90" />
                    <p className="">+66 82 519 2688</p>
                  </button>
                </div>
                <span className="flex flex-col items-end lg:p-0 p-3">
                  <div className="flex items-center justify-center px-2 ">
                    {[...Array(5)].map((_, index) => {
                      index += 1;

                      return (
                        <AiFillStar key={index} className="text-[#FFCC02]" />
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img
                      src="/tripadvisor.png"
                      alt="tripadvisor logo"
                      className="w-20"
                    />
                    <p className="text-4xl">tripavisor</p>
                  </div>
                  <p className="uppercase text-xs text-white">
                    based on guest review
                  </p>
                </span>
              </div>
            </div>
          </section>

          <section className="pt-12 bg-[#f8f8f8] pb-24">
            <div className="lg:flex items-center justify-between lg:w-2/3 m-auto mb-8 lg:px-0 px-3">
              <span className="flex items-center">
                <h2 className="lg:text-3xl text-xl font-medium">
                  Latest Packages
                </h2>
              </span>
              <ul className="flex items-center lg:justify-end gap-x-4">
                <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                  {" "}
                  One day trip
                </li>
                <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                  {" "}
                  half-day trip
                </li>
                <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                  {" "}
                  island trip
                </li>
                <li className="lg:text-sm text-xs uppercase cursor-pointer hover:text-[#62c9dc]">
                  {" "}
                  Adventure trip
                </li>
              </ul>
            </div>

            <div className="lg:w-2/3 mx-auto overflow-hidden">
              <Carousel
                className="home_carousel z-20"
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite
                autoPlay={true}
                autoPlaySpeed={2000}
                // arrows={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
              >
                {latest_package.map((item) => (
                  <div key={item.id} className="relative px-3 flex flex-col">
                    <div className="h-80 relative">
                      <img src={item.img} alt="" className="h-full w-full" />
                      <span className="flex items-center justify-between absolute w-full px-8 top-5">
                        <div className="flex items-center justify-center px-2 ">
                          {[...Array(5)].map((_, index) => {
                            index += 1;

                            return (
                              <AiFillStar
                                key={index}
                                className="text-[#FFCC02]"
                              />
                            );
                          })}
                          <p className="text-xs text-white pl-2">12 Review</p>
                        </div>
                        <button className="rounded-full text-white bg-[#e02631] text-[10px] shadow-black cursor-auto font-[10px] h-9 w-9">
                          20% <br />
                          OFF
                        </button>
                      </span>
                    </div>
                    <div className="absolute top-[19rem] left-8">
                      <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-lg border-none outline-none px-4 text-sm text-white">
                        TOP TOUR
                      </button>
                    </div>
                    <div className="bg-white py-8 h-full">
                      <h2 className="font-medium px-6 text-sm h-12">
                        {item.title}
                      </h2>

                      <div className="flex items-center text-sm mt-2">
                        <span className="border-r-2 border-[#e9e9e9] w-3/5 px-6">
                          <p className="flex items-center gap-x-2">
                            <BsPeopleFill className="text-[#62c9dc] text-xs" />
                            Private Tour
                          </p>
                          <p className="flex items-center gap-x-2">
                            <IoLocationOutline className="text-[#62c9dc] text-xs" />
                            Thailand
                          </p>
                          <p className="flex items-center gap-x-2">
                            <MdAccessTime className="text-[#62c9dc] text-xs" />
                            12 Hours
                          </p>
                        </span>
                        <span className="w-2/5 px-6">
                          <p className="text-xs">START PRICE</p>
                          <p className="text-[#002361] font-semibold text-xl pt-2">
                            <sup>$</sup> 2,000
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="lg:flex items-center justify-between lg:w-2/3 mx-auto pt-16 lg:px-0 px-3">
              <div>
                <h1 className="lg:text-3xl text-xl font-medium">
                  How it works?
                </h1>
                <p className="uppercase text-sm text-[#62c9dc]">
                  search-select-book
                </p>
              </div>
              <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full h-16 w-16 cursor-auto">
                  <GrMapLocation className="w-full h-full p-4 text-white" />
                </button>
                <span>
                  {" "}
                  <h1 className="uppercase">Search</h1>
                  <p className="text-[#62c9dc] capitalize">
                    find your dream trip
                  </p>
                </span>
              </div>
              <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full h-16 w-16 cursor-auto">
                  <HiCursorArrowRipple className="w-full h-full p-4 text-white" />
                </button>
                <span>
                  {" "}
                  <h1 className="uppercase">select</h1>
                  <p className="text-[#62c9dc] capitalize">
                    select trip package
                  </p>
                </span>
              </div>
              <div className="flex items-center gap-x-3 lg:pt-0 pt-3">
                <button className="bg-gradient-to-r from-[#033e76] to-[#62c9dc] rounded-full h-16 w-16 cursor-auto">
                  <MdFactCheck className="w-full h-full p-4 text-white" />
                </button>
                <span>
                  {" "}
                  <h1 className="uppercase">book</h1>
                  <p className="text-[#62c9dc] capitalize">booking and pay</p>
                </span>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

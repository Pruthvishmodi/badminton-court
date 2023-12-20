import React from "react";
import FaceBook from "../../../public/image/facebook-app-round-icon.svg";
import Twitter from "../../../public/image//x-social-media-logo-icon.svg";
import LinkDin from "../../../public/image/linkedin-square-icon.svg";

const socialMedia = [
  { id: "1", svg: <FaceBook />, link: "https://www.facebook.com/yourpage" },
  { id: "2", svg: <Twitter />, link: "https://www.twitter.com/yourpage" },
  { id: "3", svg: <LinkDin />, link: "https://www.linkedin.com/in/yourprofile" },
];

const links = [
  { page: "Home" },
  { page: "About" },
  { page: "Courses" },
  { page: "Individual Course" },
  { page: "Blog" },
  { page: "Blog post" },
  { page: "Events" },
  { page: "Individual Event" },
  { page: "Teacher" },
  { page: "Individual Teacher" },
  { page: "Contact" },
];

const Footer = () => {
  return (
    <section className="bg-[#333] py-9">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-container">
        {/* About Us */}
        <div>
          <h3 className="font-oregano text-[#2acd35] text-xl font-normal">
            About US
          </h3>
          <p className="text-[#e1e2e4] text-sm py-4">
            I understand very well how lack of confidence can be an obstacle.
            That is why I dedicated myself to helping people overcome their
            fears and improve their looks - and their lives.
          </p>
          <div className="flex space-x-2 items-center">
            {socialMedia.map((val) => (
              <a
                key={val.id}
                href={val.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 fill-slate-400 hover:fill-[#2acd35] transition-colors duration-300 ease-in-out"
              >
                {val.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Find Us Here */}
        <div className="text-[#e1e2e4] text-sm">
          <h3 className="font-oregano text-[#2acd35] text-xl font-normal">
            FIND US HERE
          </h3>
          <div className="py-4">
            Address:{" "}
            <a
              href="https://maps.google.com/?q=USA, California 20, First Avenue, California"
              target="_blank"
              rel="noopener noreferrer"
            >
              USA, California 20, First Avenue, California
            </a>
          </div>
          <div className="py-4">
            <div>
              Tel: <a href="tel:+7998711503020">+7 998 71 150 30 20</a>
            </div>
            <div>Fax: +7 998 71 150 30 20</div>
            <div className="py-4">
              Email:{" "}
              <a href="mailto:info@stylemixthemes.com">
                info@stylemixthemes.com
              </a>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-oregano text-[#2acd35] text-xl font-normal">
            Pages
          </h3>
          <ul className="grid grid-cols-2 text-[#e1e2e4] text-sm py-3">
            {links.map((val, index) => (
              <li key={index} className="pb-2">
                <a
                  href={`/${val.page.toLowerCase()}`}
                  className="hover:underline"
                >
                  {val.page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

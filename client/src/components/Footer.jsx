import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://www.twitter.com/'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://www.github.com/'
  }
];

function Footer() {
  return (
    <div className="w-full mt-24 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-6 px-2 transition duration-500 ease-in-out">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="py-4">2024 Made by Chai.pi. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-2xl">
          {
            socialLinks.map((link, index) => (
              <a href={link.link} key={index} className="text-gray-800 dark:text-white transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
                <link.icon />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Footer;

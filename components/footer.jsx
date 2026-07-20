"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Blogs", url: "/blogs" },
  { title: "Careers", url: "/careers" },
];

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const PinterestIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.041-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.997-.283 1.194.6 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.42 2.561-5.42 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.334 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { name: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
  { name: "Pinterest", href: "https://www.pinterest.com", Icon: PinterestIcon },
];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_32%] min-h-[280px] lg:min-h-[320px]">
        {/* Left */}
        <div className="bg-[#333333] flex flex-col items-center justify-center px-6 py-10 md:py-12">
          <div className="flex flex-col items-start gap-7 md:gap-9">
            <Link href="/" className="block">
              <Image
                src="/assets/sparktics-logo.svg"
                width={220}
                height={48}
                alt="sparktics"
                className="w-[180px] md:w-[220px] h-auto"
                priority={false}
              />
            </Link>
            <nav>
              <ul className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-3 text-white text-[15px] md:text-base font-normal">
                {navLinks.map((link) => (
                  <li key={link.url}>
                    <Link href={link.url} className="hover:opacity-80 transition-opacity">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#EE7D2E] relative flex flex-col items-center justify-center text-center text-white px-8 py-10 md:py-12 pb-20 gap-3 md:gap-3.5">
          <h3 className="uppercase font-bold text-base md:text-lg tracking-[0.06em]">
            Contact us
          </h3>
          <a href="tel:+919160122227" className="text-sm md:text-[15px]">
            +91 - 9160122227
          </a>
          <a href="mailto:hola@sparktics.com" className="text-sm md:text-[15px]">
            hola@sparktics.com
          </a>
          <p className="text-[13px] md:text-sm leading-[1.55] whitespace-nowrap">
            <span className="font-semibold">Head office: 4th Floor,</span>
            <br />
            La Casa Blanca, Kavuri Hills, Madhapur, Hyderabad, Telangana
          </p>
          <ul className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex items-center justify-center size-8 rounded-full bg-white text-[#EE7D2E] hover:opacity-90 transition-opacity"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

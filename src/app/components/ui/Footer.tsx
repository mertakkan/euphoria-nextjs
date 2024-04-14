import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { fonts } from '@/app/utils/fonts';

const Footer = () => {
  return (
    <footer className={`${fonts.inter} bg-[#3C4242] text-white py-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Need Help</h3>
            <ul className="space-y-2 text-xl font-light">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/track-order">Track Order</Link>
              </li>
              <li>
                <Link href="/returns">Returns &amp; Refunds</Link>
              </li>
              <li>
                <Link href="/faq">FAQ's</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-xl font-light">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/blog">euphoria Blog</Link>
              </li>
              <li>
                <Link href="/euphoriastan">euphoriastan</Link>
              </li>
              <li>
                <Link href="/collaboration">Collaboration</Link>
              </li>
              <li>
                <Link href="/media">Media</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">More Info</h3>
            <ul className="space-y-2 text-xl font-light">
              <li>
                <Link href="/terms">Term and Conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Policy</Link>
              </li>
              <li>
                <Link href="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="text-xl font-light leading-8">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p>support@euphoria.in</p>
            <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
            <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
          </div>
        </div>

        <div className="mt-8 flex space-x-4 ">
          <Link href="#">
            <Image
              src="/facebookFooter.svg"
              alt="Facebook"
              width={45}
              height={45}
            />
          </Link>
          <Link href="#">
            <Image
              src="/instagramFooter.svg"
              alt="Instagram"
              width={45}
              height={45}
            />
          </Link>
          <Link href="#">
            <Image
              src="/linkedinFooter.svg"
              alt="LinkedIn"
              width={45}
              height={45}
            />
          </Link>
        </div>
        <div className="mt-8 flex-col justify-center space-x-4">
          <p className="text-xl text-center mb-4">Download the app</p>
          <div className="flex justify-center">
            <Link href="#">
              <Image
                src="/playstoreFooter.png"
                alt="Google Play"
                width={155}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                src="/appstoreFooter.png"
                alt="App Store"
                width={155}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

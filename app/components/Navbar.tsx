// components/Header.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-24 py-4 bg-white shadow-md h-16 font-josefin">
      <div className="h-10 flex items-center justify-between ">
      <a href="/" className="text-2xl font-bold font-josefin">Hekto</a>
      <nav className="hidden md:flex space-x-6">
      <div className="flex justify-center items-center gap-2">
            <Link href="/" className="text-pink">Home
            </Link>
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L5 4.5L9 0.5" stroke="#FB2E86" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </div>
        <Link href="/hekto-demo">Pages</Link>
        <Link href="/products">Products</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact-us">Contact</Link>
      </nav>
      <div className="h-full">
        <div className="border border-gray-400 flex h-full">
          <input type="text" className="p-2"/> 
        <div className="bg-[#FB2E86] p-1">
          <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7094 19.2899L16.9994 15.6099C18.4395 13.8143 19.1369 11.5352 18.9482 9.2412C18.7595 6.94721 17.6991 4.81269 15.9849 3.27655C14.2708 1.74041 12.0332 0.919414 9.73234 0.982375C7.43145 1.04534 5.24214 1.98747 3.61456 3.61505C1.98698 5.24263 1.04485 7.43194 0.981887 9.73283C0.918926 12.0337 1.73992 14.2713 3.27606 15.9854C4.8122 17.6996 6.94672 18.76 9.24072 18.9487C11.5347 19.1374 13.8138 18.44 15.6094 16.9999L19.2894 20.6799C19.3824 20.7736 19.493 20.848 19.6148 20.8988C19.7367 20.9496 19.8674 20.9757 19.9994 20.9757C20.1314 20.9757 20.2621 20.9496 20.384 20.8988C20.5059 20.848 20.6165 20.7736 20.7094 20.6799C20.8897 20.4934 20.9904 20.2442 20.9904 19.9849C20.9904 19.7256 20.8897 19.4764 20.7094 19.2899ZM9.99942 16.9999C8.61495 16.9999 7.26157 16.5894 6.11042 15.8202C4.95928 15.051 4.06207 13.9578 3.53226 12.6787C3.00245 11.3996 2.86382 9.99214 3.13392 8.63427C3.40402 7.27641 4.0707 6.02912 5.04967 5.05016C6.02864 4.07119 7.27592 3.4045 8.63378 3.13441C9.99165 2.86431 11.3991 3.00293 12.6782 3.53275C13.9573 4.06256 15.0505 4.95977 15.8197 6.11091C16.5889 7.26206 16.9994 8.61544 16.9994 9.9999C16.9994 11.8564 16.2619 13.6369 14.9492 14.9497C13.6364 16.2624 11.8559 16.9999 9.99942 16.9999Z" fill="url(#paint0_linear_6709_1773)"/>
<defs>
<linearGradient id="paint0_linear_6709_1773" x1="0.978516" y1="0.979004" x2="24.4283" y2="15.376" gradientUnits="userSpaceOnUse">
<stop stopColor="#F3F9FF"/>
<stop offset="1" stopColor="#F1F0FF"/>
</linearGradient>
</defs>
</svg>
</div>
</div>
      </div>

      <div className="md:hidden">Menu</div>
      </div>
    </header>
  );
};

export default Navbar;

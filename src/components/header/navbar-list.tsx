import Link from 'next/link';
import React from 'react';

const NavBarList = () => {
  return (
    <nav className="">
     <ul className="flex ">
        <li className='mx-6'><Link href="home">Home</Link></li>
        <li className='mx-6'><Link href="about">About</Link></li>
        <li className='mx-6'><Link href="signup">SignUp</Link></li>
        <li className='mx-6'><Link href="contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBarList;

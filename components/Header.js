import { useState } from 'react';
import Link from 'next/link';

const Button = () => (
  <Link href="/getInvolved">
    <button className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-normal rounded-md bg-purplePrimary hover:border-2 hover:border-purple-600 hover:bg-opacity-50 uppercase bg-opacity-30">
      Get Involved
    </button>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen((previous) => !previous);
  };
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2 sticky top-0 bg-backgroundSilk">
      <div className="flex items-center justify-between px-4 py-2 sm:p-0">
        <div>
          <Link href="/">
            {/* <Image className="h-16 cursor-pointer" src="/logo.png" unsized /> */}
            <h1>hirejuniors.dev</h1>
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="text-primary focus:text-gray-800 hover:text-primary sm:hidden"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
              <title>Menu</title>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-4 pb-2 ${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:justify-center sm:p-0 sm:text-lg sm:items-center`}
      >
        <div className="sm:flex sm:justify-between">
          <Link href="/">
            <a className="block py-1 underline-anim underline-animate sm:ml-4">
              Home
            </a>
          </Link>
          <Link href="/resources">
            <a className="block py-1 underline-anim underline-animate sm:ml-4">
              Resources
            </a>
          </Link>
          <Link href="/about">
            <a className="mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4">
              About
            </a>
          </Link>
          <div className="sm:hidden">
            <Button />
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <Button />
      </div>
    </header>
  );
};

export default Header;

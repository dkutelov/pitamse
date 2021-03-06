import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './header.module.css';
import HomeSearch from '../home-search/home-search.component';

const Header = () => {
    const router = useRouter();
    let isHome = router.pathname === '/';
    const headerStyle = isHome
        ? {
              backgroundImage: `url('/home/home-banner-new.webp')`,
              marginBottom: '-64px',
          }
        : {
              backgroundImage: 'none',
              marginBottom: '0px',
          };
    return (
        <header
            className={isHome ? styles.header__home : styles.header}
            style={headerStyle}
        >
            {isHome && <HomeSearch />}
            <nav
                className={`bg-transparent ${
                    isHome ? 'text-white' : 'text-primaryText'
                }`}
            >
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between flex-wrap py-6 px-1'>
                        <Link href='/'>
                            <a>
                                <div className='flex items-center flex-shrink-0 mr-6'>
                                    <span className='font-semibold tracking-tight'>
                                        PendingName
                                    </span>
                                </div>
                            </a>
                        </Link>
                        <div className='block lg:hidden'>
                            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
                                <svg
                                    className='fill-current h-3 w-3'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <title>Menu</title>
                                    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                                </svg>
                            </button>
                        </div>
                        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                            <div className='text-sm lg:flex-grow'>
                                <a
                                    href='#responsive-header'
                                    className='block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4'
                                >
                                    Find Specialist
                                </a>
                                <a
                                    href='#responsive-header'
                                    className='block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4'
                                >
                                    For companies
                                </a>
                                <a
                                    href='#responsive-header'
                                    className='block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white'
                                >
                                    Join our specialists
                                </a>
                            </div>
                            <div>
                                <a
                                    href='#'
                                    className='inline-block text-sm px-4 py-2 leading-none border rounded border-primaryText hover:border-transparent hover:text-white hover:bg-primaryText mt-4 lg:mt-0'
                                >
                                    Log In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

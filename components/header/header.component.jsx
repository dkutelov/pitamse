import Link from 'next/link';

const Header = () => {
    return (
        <nav className='bg-indigo-500'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between flex-wrap py-6 px-1'>
                    <Link href='/'>
                        <a>
                            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                                <span className='font-semibold tracking-tight'>
                                    Питам Сe?
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
                                Намери психолог
                            </a>
                            <a
                                href='#responsive-header'
                                className='block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4'
                            >
                                За фирми
                            </a>
                            <a
                                href='#responsive-header'
                                className='block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white'
                            >
                                Присъедни се като професионалист
                            </a>
                        </div>
                        <div>
                            <a
                                href='#'
                                className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
                            >
                                Вход
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
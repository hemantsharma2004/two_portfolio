import { Link } from "react-scroll";

const Navbar = () => {
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'profile' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'contact' },
    ];

    return (
        <div className="bg-black  flex justify-between items-center px-4 w-full h-20 fixed pr-36 text-white">
            <div className="w-28 ">
                <img alt="hemant" className="" src="https://static.vecteezy.com/system/resources/previews/003/740/716/original/hs-logo-monogram-with-emblem-style-isolated-on-black-background-free-vector.jpg"></img>
            </div>

            <ul className="md:flex w-96 hidden">
                {links.map(link => (
                    <li
                        key={link.id}
                        className="px-4  text-gray-500 text-lg cursor-pointer hover:text-white hover:scale-105 duration-200"
                    >
                        <Link
                            activeClass="active"
                            to={link.link}
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                            {link.link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;

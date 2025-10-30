import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => (
    <header className="padding-x absolute z-10 w-full py-8">
        <nav className="max-container flex items-center justify-between">
            <a href="/">
                <img src={headerLogo} width={135} alt="Logo" height={30} />
            </a>
            <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat text-slate-gray text-lg leading-normal"
                        >
                            {item?.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="Hamburger" width={30} height={30} />
            </div>
        </nav>
    </header>
);

export default Nav;

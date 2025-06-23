import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/projects/yogenlogo.svg";
const Navbar =() => {

    return(
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="logo"/>
                </a>
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/yogenshrestha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/YogenStha?tab=overview&from=2025-06-01&to=2025-06-12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub/>
                </a>
                <a href="https://www.instagram.com/shrestha_yogen22/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                    <FaInstagram/>
                </a>
                <a href="https://www.facebook.com/yogen.shrestha.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                    <FaFacebook/>
                </a>
            </div>
            </nav>
            )
}
export default Navbar;
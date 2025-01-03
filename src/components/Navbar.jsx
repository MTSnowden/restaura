import { useState } from "react"
import logo from "../assets/logo.png"
import { LINKS } from "../constants/index"
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenueOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenueOpen);
    }

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
        setIsMobileMenuOpen(false)
    }
  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between
        overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem]
        lg:rounded-full lg:shadow-lg">
            <img src={logo} alt="logo" width={80} h={22} />
            <div className="hidden space-x-6 lg:flex">
                {LINKS.map((link, index) => (
                    <a key={index} 
                        href={`#${link.targetId}`} 
                        className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover?opacity-50`} onclick={(e) => handleScroll
                        (e, link.targetId)}> 
                            {link.text}
                        </a>
                )) }
            </div>
            
            <div className="lg:hidden">
                <button onclick={toggleMobileMenu}>
                    {isMobileMenueOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {isMobileMenueOpen && (
            <div className="w-full backdrop-blur-lg lg:hidden">
                {LINKS.map((link, index) => (
                    <a key={index} href={`#${link.targetId}`} className="block 
                    p-4 uppercase tracking-tighter" onclick={(e) => handleScroll
                    (e, link.targetId)}>
                        {link.text}
                    </a>
                )) }
            </div>
            
        )}
    </nav>
    
  )
}

export default Navbar
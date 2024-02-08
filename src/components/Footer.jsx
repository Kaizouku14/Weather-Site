import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../style/Footer.css'

const Footer = () =>{
   
    return(
       <footer>
         <div className="Copyright">&copy; Copyright all rights reserved</div>
         <div className="medias">
            <a href="https://github.com/Kaizouku14" target="_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/alv.manda.3" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/zyalv.m/" target="_blank"><FaInstagram /></a>
         </div>
       </footer>
    )
}

export default Footer
import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";



import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";
import Footer from "../components/footer/footer";


const App = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no modo Escuro"
    return (
        <div id="container">
            <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Renan</Profile>
            <Switch></Switch>
            <div id="links">
                <ul>
                    <Links link={"https://github.com"}>GitHub</Links>
                    <Links link={"#"}>Instagram</Links>
                    <Links link={"#"}>Portifólio</Links>
                    <Links link={"#"}>Projetos</Links>

                </ul>

            </div>
            <div id="socialLinks">
                <SocialLinks href={"#"} icon={"logo-github"} />
                <SocialLinks href={"#"} icon={"logo-instagram"} />
                <SocialLinks href={"#"} icon={"logo-facebook"} />
                <SocialLinks href={"#"} icon={"logo-twitter"} />
            </div>
            <Footer link={"#"}>@Renan </Footer>
        </div>
    );
};

export default App;
import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";



import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";


const App = () => {
    const [isLightMode, setIsLightMode] = useState(false);
    
    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode);
    };

    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no modo Escuro"
    
    return (
        <div id="App" className={isLightMode ? "light " : ""}>
        <div id="container">
            <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Renan</Profile>
            <Switch mode={toggleMode} infoButton={isLightMode}/>
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
        </div>
    );
};

export default App;
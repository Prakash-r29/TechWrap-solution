import TechnologyStack from "../components/Productoveriew-page/Webdevpage/Techstack/Techstack";
import WebDevelopmentHero from "../components/Productoveriew-page/Webdevpage/Webdev";
import DevelopmentProcess from "../components/Productoveriew-page/Webdevpage/Webdevcycle/Devcycle";
import WhatWeBuild from "../components/Productoveriew-page/Webdevpage/Whatwe/Whatwe";
import WhyTechWrap from "../components/Productoveriew-page/Webdevpage/Whytechwrap/Whytechwrap";

function Webdevelopment(){
    return(<>
    
    <WebDevelopmentHero/>
    <WhatWeBuild/>
    <TechnologyStack/>
    <DevelopmentProcess/>
    <WhyTechWrap/>
    </>)
}
export default Webdevelopment;
import TechnologyStack from "./Techstack/Techstack";
import WebDevelopmentHero from "./Webdev";
import DevelopmentProcess from "./Webdevcycle/Devcycle";
import WhatWeBuild from "./Whatwe/Whatwe";
import WhyTechWrap from "./Whytechwrap/Whytechwrap";

function Mainweb(){
    return(<>
    <WebDevelopmentHero/>
    <WhatWeBuild/>
    <TechnologyStack/>
    <DevelopmentProcess/>
    <WhyTechWrap/>

    </>)
}
export default Mainweb;
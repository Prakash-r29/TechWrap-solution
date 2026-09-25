import CompanyHero from "../components/Company/Aboutus/Abouthero/CompanyHero";
import JoinTechWrap from "../components/Company/Aboutus/Jointechwrap/Jointechwrap";
import OurPeople from "../components/Company/Aboutus/ourpeople/Ourpeople";
import TechWrapNumbers from "../components/Company/Aboutus/Techwrapnumbers/Techwrapnumbers";
import WhoWeAre from "../components/Company/Aboutus/Whoweare/Whoweare";

function Aboutus(){
    return(<>
    <CompanyHero/>
    <WhoWeAre/>
    <OurPeople/>
    <TechWrapNumbers/>
    <JoinTechWrap/>
    </>)
}
export default Aboutus;
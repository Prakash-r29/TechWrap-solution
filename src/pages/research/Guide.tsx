import FeaturedGuide from "../../components/Research/Guide/FeatureGuide/FeatureGuide";
import GuideCategories from "../../components/Research/Guide/GuideCategory/Guidecatorgy";
import GuideHero from "../../components/Research/Guide/GuideHero";
import GuidesTechnology from "../../components/Research/Guide/Guidetechnology/Guidetechnology";

function Guide(){
    return(<>
    <GuideHero/>
    <FeaturedGuide/>
    <GuideCategories/>
    <GuidesTechnology/>
    </>)
}
export default Guide;

import IntegrationItem from "./Intcard/IntegrationItem";
import IntegrationHero from "./IntegerationHero";
import PopularIntegrations from "./Intlogo/PopularIntegration";
import WhyTechWrapIntegrations from "./Intwhytech/WhyTechwrap";

function MainInt(){
    return(
        <>
        <IntegrationHero/>
        <IntegrationItem/>
        <PopularIntegrations/>
        <WhyTechWrapIntegrations/>
        </>
    )
}
export default MainInt;
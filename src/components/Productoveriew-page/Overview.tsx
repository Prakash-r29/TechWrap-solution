import PlatformCapabilities from "../Capability/Platformcap";
import Performancedash from "./Performacedashboard/Performancedash";
import ProductOverview from "./overview/Productoverview";
import ProdGraph from "./ProductGraphs/ProdGraph";

function Overview(){
    return(
    <>

       <ProductOverview/>
      <PlatformCapabilities/>
      <Performancedash/>
      <ProdGraph/>
    </>
    )

}
export default Overview;
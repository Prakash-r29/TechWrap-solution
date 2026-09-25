import DocumentationCategories from "../../components/Research/Documentation/Documentationcategory/Documenationcategory";
import DocumentationHero from "../../components/Research/Documentation/DocumentHero";
import FeaturedDocumentation from "../../components/Research/Documentation/Featuredocs/Featuredocs";

function Documentation(){
    return(<>
    <DocumentationHero/>
    <DocumentationCategories/>
    <FeaturedDocumentation/>
    </>)
}
export default Documentation;
import "./Logoslider.css";
 
import google from "../../assets/image/google.webp"; 
import notion from "../../assets/image/notion.jpg"; 
import ebay from "../../assets/image/ebay.webp" 
import workday from "../../assets/image/workday.webp"; 
import okta from "../../assets/image/okta.webp"; 
import uber from "../../assets/image/uber.webp"; 
import meta from "../../assets/image/meta.jpg" 
const cards = [ 
  { logo: google, width: "260px" }, 
  { logo: notion, width: "180px" }, 
  { logo: uber, width: "220px" }, 
  { logo: ebay, width: "220px" }, 
  { logo: workday, width: "220px" }, 
  { logo: okta, width: "200px" }, 
  { logo: meta, width: "220px" }, 
]; 
 
const slider = [...cards, ...cards]; 
 
function Logoslider() { 
  return ( 
    <section className="clients-section py-5"> 
 
      <div className="container"> 
 
        <h2 className="text-center fw-bold mb-3"> 
          Trusted by  
          <span className="text-primary">   Leading  </span> 
           companies 
        </h2> 
 
        <p className="text-center text-secondary mb-5"> 
          Inspired by our customers. Built with love. 
        </p> 
 
      </div> 
 
      <div className="logo-slider"> 
 
        <div className="logo-track"> 
 
          {slider.map((item, index) => ( 
 
            <div 
              className="logo-card" 
              key={index} 
              style={{ width: item.width }} 
            > 
              <img src={item.logo} alt="" /> 
            </div> 
 
          ))} 
 
        </div> 
 
      </div> 
 
    </section> 
  ); 
} 
 
export default Logoslider;
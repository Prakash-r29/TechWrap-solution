import { Link, Outlet } from "react-router-dom";
import "./Products.css";

function Product() {
  return (
    <section className="product-section">

      <div className="container">

        <h1>Our Product</h1>

        <div className="product-tabs">

          <Link to="/product/overview">
            Overview
          </Link>

          <Link to="/product/integrations">
            Integrations
          </Link>

          <Link to="/product/pricing">
            Pricing
          </Link>

        </div>

        {/* Child route appears here */}

        <Outlet />

      </div>

    </section>
  );
}

export default Product;
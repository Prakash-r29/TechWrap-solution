import { useNavigate } from "react-router-dom";
import "./WhatEn.css";
type Service = {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
};
const services: Service[] = [
  {
    id: "application",
    number: "01",
    icon: "◈",
    title: "Enterprise Application Development",
    description:
      "Build secure, scalable web and business applications designed for complex enterprise workflows.",
    technologies: ["React", "TypeScript", "Spring Boot"],
  },
  {
    id: "modernization",
    number: "02",
    icon: "↗",
    title: "Legacy Modernization",
    description:
      "Upgrade outdated systems and gradually move your business toward modern, maintainable architecture.",
    technologies: ["Modern APIs", "Cloud", "Microservices"],
  },
  {
    id: "ai",
    number: "03",
    icon: "✦",
    title: "AI & Automation",
    description:
      "Introduce AI-powered workflows, intelligent assistants and automation into enterprise operations.",
    technologies: ["AI", "Automation", "Intelligent Workflows"],
  },
  {
    id: "integration",
    number: "04",
    icon: "⌘",
    title: "API & System Integration",
    description:
      "Connect ERP, CRM, payment systems, databases and third-party platforms through secure APIs.",
    technologies: ["REST API", "CRM", "ERP"],
  },
  {
    id: "cloud",
    number: "05",
    icon: "☁",
    title: "Cloud & DevOps",
    description:
      "Build reliable cloud infrastructure with CI/CD, monitoring and scalable deployment strategies.",
    technologies: ["Cloud", "CI/CD", "DevOps"],
  },
  {
    id: "analytics",
    number: "06",
    icon: "▥",
    title: "Data & Analytics",
    description:
      "Turn enterprise data into dashboards, insights and actionable intelligence for better decisions.",
    technologies: ["Analytics", "Dashboards", "Data"],
  },
];
function SolutionArchitectureNode({
  icon,
  title,
  subtitle,
  className = "",
}: {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={`solution-architecture-node ${className}`}>
      {" "}
      <span className="solution-node-icon">{icon}</span>{" "}
      <div className="solution-node-content">
        {" "}
        <strong>{title}</strong> <small>{subtitle}</small>{" "}
      </div>{" "}
    </div>
  );
}
function SolutionFlowLine({ className = "" }: { className?: string }) {
  return (
    <div className={`solution-flow-line ${className}`} aria-hidden="true">
      {" "}
      <span className="solution-flow-particle"></span>{" "}
    </div>
  );
}
function EnterpriseSolutions() {
  const navigate = useNavigate();
  return (
    <section className="enterprise-solutions" id="enterprise-solutions">
      {" "}
      <div className="enterprise-solutions-grid" aria-hidden="true" />{" "}
      <div className="enterprise-solutions-glow enterprise-solutions-glow-one" aria-hidden="true" />{" "}
      <div className="enterprise-solutions-glow enterprise-solutions-glow-two" aria-hidden="true" />{" "}
      <div className="container">
        {" "}
        <div className="enterprise-solutions-header">
          {" "}
          <div className="enterprise-section-label">
            {" "}
            <span className="enterprise-section-dot"></span> WHAT TECHWRAP PROVIDES{" "}
          </div>{" "}
          <h2>
            {" "}
            One platform. <span> Complete enterprise technology. </span>{" "}
          </h2>{" "}
          <p>
            {" "}
            From modern applications and AI to APIs, cloud infrastructure and analytics, TechWrap
            connects every layer of your enterprise technology ecosystem.{" "}
          </p>{" "}
        </div>{" "}
        <div className="enterprise-architecture-wrapper">
          {" "}
          <span className="architecture-top-light" aria-hidden="true" />{" "}
          <div className="architecture-platform-label">
            {" "}
            <span className="platform-pulse"></span> <span> TECHWRAP ENTERPRISE ARCHITECTURE </span>{" "}
            <span className="platform-live"> LIVE FLOW </span>{" "}
          </div>{" "}
          <div className="solution-architecture-single">
            {" "}
            <SolutionArchitectureNode
              icon="◆"
              title="BUSINESS"
              subtitle="Enterprise Operations"
              className="solution-business-node"
            />{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-layer">
            {" "}
            <div className="solution-layer-label"> EXPERIENCE </div>{" "}
            <div className="solution-architecture-branch">
              {" "}
              <div className="solution-horizontal-connector">
                {" "}
                <span className="solution-horizontal-particle"></span>{" "}
              </div>{" "}
              <div className="solution-branch-node">
                {" "}
                <SolutionArchitectureNode
                  icon="◉"
                  title="WEB APPS"
                  subtitle="React + TypeScript"
                  className="solution-web-node"
                />{" "}
                <div className="solution-branch-vertical"></div>{" "}
              </div>{" "}
              <div className="solution-branch-node">
                {" "}
                <SolutionArchitectureNode
                  icon="✦"
                  title="AI"
                  subtitle="Automation"
                  className="solution-ai-node"
                />{" "}
                <div className="solution-branch-vertical"></div>{" "}
              </div>{" "}
              <div className="solution-branch-node">
                {" "}
                <SolutionArchitectureNode
                  icon="▣"
                  title="MOBILE"
                  subtitle="Connected Apps"
                  className="solution-mobile-node"
                />{" "}
                <div className="solution-branch-vertical"></div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-single">
            {" "}
            <div className="solution-api-glow" aria-hidden="true" />{" "}
            <SolutionArchitectureNode
              icon="↗"
              title="API HUB"
              subtitle="Secure Enterprise APIs"
              className="solution-api-node"
            />{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-layer">
            {" "}
            <div className="solution-layer-label"> ENTERPRISE SYSTEMS </div>{" "}
            <div className="solution-architecture-branch">
              {" "}
              <div className="solution-horizontal-connector">
                {" "}
                <span className="solution-horizontal-particle"></span>{" "}
              </div>{" "}
              <div className="solution-branch-node">
                {" "}
                <SolutionArchitectureNode
                  icon="◈"
                  title="CRM"
                  subtitle="Customer Systems"
                  className="solution-crm-node"
                />{" "}
                <div className="solution-branch-vertical"></div>{" "}
              </div>{" "}
              <div className="solution-branch-node">
                {" "}
                <SolutionArchitectureNode
                  icon="▦"
                  title="ERP"
                  subtitle="Business Operations"
                  className="solution-erp-node"
                />{" "}
                <div className="solution-branch-vertical"></div>{" "}
              </div>{" "}
              <div className="solution-branch-node">
                {" "}
                <SolutionArchitectureNode
                  icon="$"
                  title="PAYMENT"
                  subtitle="Transactions"
                  className="solution-payment-node"
                />{" "}
                <div className="solution-branch-vertical"></div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-single">
            {" "}
            <SolutionArchitectureNode
              icon="☁"
              title="CLOUD PLATFORM"
              subtitle="Scalable Infrastructure"
              className="solution-cloud-node"
            />{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-single">
            {" "}
            <div className="solution-security-layer">
              {" "}
              <div className="solution-security-icon"> ◇ </div>{" "}
              <div>
                {" "}
                <strong> SECURITY LAYER </strong>{" "}
                <small> Authentication • Authorization • Protection </small>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-single">
            {" "}
            <div className="solution-analytics-layer">
              {" "}
              <div className="solution-analytics-bars">
                {" "}
                <span></span> <span></span> <span></span> <span></span>{" "}
              </div>{" "}
              <div>
                {" "}
                <strong> DATA & ANALYTICS </strong>{" "}
                <small> Insights • Dashboards • Intelligence </small>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <SolutionFlowLine />{" "}
          <div className="solution-architecture-single">
            {" "}
            <div className="solution-growth-node">
              {" "}
              <div className="solution-growth-icon"> ↗ </div>{" "}
              <div>
                {" "}
                <strong> BUSINESS GROWTH </strong> <small> Faster • Smarter • Scalable </small>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="enterprise-services">
          {" "}
          <div className="services-heading">
            {" "}
            <div>
              {" "}
              <span> TECHWRAP CAPABILITIES </span>{" "}
              <p> Technology designed around your enterprise. </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row g-4">
            {" "}
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.id}>
                {" "}
                <article className="enterprise-service">
                  {" "}
                  <div className="service-top">
                    {" "}
                    <span className="service-number"> {service.number} </span>{" "}
                    <span className="service-icon"> {service.icon} </span>{" "}
                  </div>{" "}
                  <h3> {service.title} </h3> <p> {service.description} </p>{" "}
                  <div className="service-technologies">
                    {" "}
                    {service.technologies.map((technology) => (
                      <span key={technology}> {technology} </span>
                    ))}{" "}
                  </div>{" "}
                  <div className="service-bottom">
                    {" "}
                    <span> TechWrap capability </span>{" "}
                    <span className="service-arrow"> → </span>{" "}
                  </div>{" "}
                </article>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="enterprise-solutions-bottom">
          {" "}
          <span className="bottom-pulse"></span>{" "}
          <p>
            {" "}
            From <strong>business systems</strong> to <strong> scalable infrastructure</strong> —
            TechWrap connects the technology your enterprise needs to move forward.{" "}
          </p>{" "}
          {/* React Router Navigation */}{" "}
          <button
            type="button"
            className="enterprise-solutions-contact-button"
            onClick={() => navigate("/Company/Contact/Maincontact")}
          >
            {" "}
            Build With TechWrap <span>→</span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
export default EnterpriseSolutions;

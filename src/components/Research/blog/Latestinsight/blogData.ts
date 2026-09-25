export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface Insight {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
  content: BlogSection[];
  contentImages: string[];
}

export const insights: Insight[] = [
  {
    id: 1,
    number: "01",
    category: "Frontend",
    title: "Designing Scalable React Applications for Growing Products",
    description: "A practical approach to structuring React applications for performance, reusable components, predictable state, and long-term product growth.",
    technologies: ["React", "TypeScript"],
    readTime: "8 min read",
    date: "Aug 26, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Designing Scalable React Applications for Growing Products",
    content: [
      {
        heading: "Start with clear boundaries",
        paragraphs: ["Separate pages, reusable UI, domain features, hooks, and data access instead of allowing components to become responsible for everything.", "Keep business rules close to the feature that owns them. This makes changes easier to reason about and reduces accidental coupling."],
      },
      {
        heading: "Design state deliberately",
        paragraphs: ["Use local state for local UI concerns and shared state only when multiple parts of the product truly need the same source of truth.", "Prefer predictable data flow and small reusable hooks over deeply nested prop chains."],
      },
      {
        heading: "Optimize for product growth",
        paragraphs: ["Lazy-load heavy routes, reuse components, keep API boundaries clear, and measure real bottlenecks before optimizing.", "TypeScript interfaces should describe important domain contracts so frontend changes remain visible during development."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 2,
    number: "02",
    category: "Backend",
    title: "Spring Boot Architecture Patterns for Enterprise APIs",
    description: "Explore service boundaries, dependency management, validation, security, and API architecture patterns for maintainable Java systems.",
    technologies: ["Java", "Spring Boot"],
    readTime: "10 min read",
    date: "Aug 25, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Spring Boot Architecture Patterns for Enterprise APIs",
    content: [
      {
        heading: "Keep the API layers focused",
        paragraphs: ["Controllers should handle HTTP concerns, services should coordinate business logic, and repositories should handle persistence.", "This separation keeps business rules testable and prevents database details from leaking through every endpoint."],
      },
      {
        heading: "Validate at the boundary",
        paragraphs: ["Validate incoming request data early and return consistent error responses so clients know exactly what needs to change.", "Use DTOs instead of exposing persistence entities directly when the API contract needs to evolve independently."],
      },
      {
        heading: "Treat security as part of architecture",
        paragraphs: ["Authentication, authorization, input validation, secrets management, and audit-friendly logging should be considered from the beginning.", "Spring Security can enforce endpoint rules while service-level checks protect business operations."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 3,
    number: "03",
    category: "Database",
    title: "PostgreSQL vs MongoDB: Choosing the Right Database for Your Product",
    description: "Understand when relational modeling or document-based storage makes more sense based on product complexity, relationships, and scale.",
    technologies: ["PostgreSQL", "MongoDB"],
    readTime: "7 min read",
    date: "Aug 24, 2026",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "PostgreSQL vs MongoDB: Choosing the Right Database for Your Product",
    content: [
      {
        heading: "When relational modeling helps",
        paragraphs: ["PostgreSQL is a strong fit when transactions, relationships, constraints, and structured reporting are central to the product.", "Foreign keys and transactional operations help protect consistency across related records."],
      },
      {
        heading: "When documents can simplify development",
        paragraphs: ["MongoDB can be useful when data is naturally document-shaped, schemas evolve frequently, or related data is commonly read together.", "Embedding related values can reduce joins when the access pattern supports that model."],
      },
      {
        heading: "Choose from real workloads",
        paragraphs: ["Compare expected queries, transaction needs, reporting, data growth, operational skills, and consistency requirements.", "A technology choice should follow the product's access patterns rather than a generic database trend."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 4,
    number: "04",
    category: "AI",
    title: "Building AI-Powered Applications with LLM APIs",
    description: "From prompting and structured outputs to retrieval and production monitoring, explore the foundations of reliable AI-powered applications.",
    technologies: ["AI", "LLM", "Python"],
    readTime: "11 min read",
    date: "Aug 23, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Building AI-Powered Applications with LLM APIs",
    content: [
      {
        heading: "Start with a clear task",
        paragraphs: ["Define the user outcome before selecting a model. A focused task makes prompts, evaluation, and fallback behavior easier to design.", "Use structured output formats when the application needs predictable fields rather than free-form text."],
      },
      {
        heading: "Add the right context",
        paragraphs: ["Retrieval can provide relevant product or business information without placing an entire knowledge base inside every prompt.", "Chunking, metadata, retrieval quality, and source attribution all affect the usefulness of a RAG workflow."],
      },
      {
        heading: "Design for production",
        paragraphs: ["Track latency, token usage, failures, quality signals, and user feedback. Keep secrets on the server and apply sensible limits.", "Production AI should have fallbacks and clear handling for uncertain or incomplete model responses."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 5,
    number: "05",
    category: "DevOps",
    title: "From Git Push to Production: A Practical CI/CD Architecture",
    description: "See how automated testing, containerization, deployment pipelines, and environment management turn source code into reliable production releases.",
    technologies: ["Docker", "CI/CD", "Cloud"],
    readTime: "9 min read",
    date: "Aug 22, 2026",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "From Git Push to Production: A Practical CI/CD Architecture",
    content: [
      {
        heading: "Automate the quality gate",
        paragraphs: ["Run formatting, linting, unit tests, and build checks automatically when code reaches the repository.", "Fast feedback keeps broken changes from moving deeper into the deployment process."],
      },
      {
        heading: "Package the application",
        paragraphs: ["Containers provide a repeatable runtime environment and make the application artifact easier to move between environments.", "Keep configuration outside the image so the same artifact can be promoted across development, staging, and production."],
      },
      {
        heading: "Deploy with visibility",
        paragraphs: ["A production pipeline should expose deployment status, logs, health checks, and rollback options.", "Small, repeatable releases are easier to diagnose than large manual deployments."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 6,
    number: "06",
    category: "TypeScript",
    title: "TypeScript Patterns That Keep Large Frontend Codebases Maintainable",
    description: "Learn how teams use strong typing, reusable interfaces, generics, and domain models to reduce complexity as applications grow.",
    technologies: ["TypeScript", "React"],
    readTime: "8 min read",
    date: "Aug 21, 2026",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "TypeScript Patterns That Keep Large Frontend Codebases Maintainable",
    content: [
      {
        heading: "Model domain data",
        paragraphs: ["Create interfaces or types for important API responses, form data, configuration, and business entities.", "Shared domain models make changes easier to discover across components and services."],
      },
      {
        heading: "Use reusable abstractions carefully",
        paragraphs: ["Generics are useful for repeated data patterns, but abstractions should remain easy to understand.", "Prefer clear types over clever type-level code that makes onboarding difficult."],
      },
      {
        heading: "Keep components predictable",
        paragraphs: ["Type props, callback contracts, and hook return values so component behavior remains visible to the developer.", "Good typing works with React rather than hiding the flow of data."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 7,
    number: "07",
    category: "Node.js",
    title: "Designing Reliable Node.js APIs for High-Growth Products",
    description: "A practical look at API structure, asynchronous workflows, validation, error handling, observability, and scalable backend services.",
    technologies: ["Node.js", "REST API"],
    readTime: "9 min read",
    date: "Aug 20, 2026",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Designing Reliable Node.js APIs for High-Growth Products",
    content: [
      {
        heading: "Organize by responsibility",
        paragraphs: ["Separate routing, controllers, services, data access, validation, and shared infrastructure so one file does not become the whole API.", "Feature-oriented organization can make related code easier to discover as the service grows."],
      },
      {
        heading: "Handle asynchronous work safely",
        paragraphs: ["Use consistent async error handling and avoid unhandled promise rejections.", "For long-running tasks, consider queues or background workers rather than keeping a request open unnecessarily."],
      },
      {
        heading: "Make failures observable",
        paragraphs: ["Return stable error formats and log enough context to diagnose failures without exposing secrets.", "Health endpoints, metrics, and structured logs help teams understand what the service is doing in production."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 8,
    number: "08",
    category: "Python",
    title: "Building Production-Ready Python Services for AI and Automation",
    description: "How Python fits into modern product engineering through APIs, AI services, automation pipelines, data workflows, and intelligent systems.",
    technologies: ["Python", "FastAPI", "AI"],
    readTime: "9 min read",
    date: "Aug 19, 2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Building Production-Ready Python Services for AI and Automation",
    content: [
      {
        heading: "Build focused services",
        paragraphs: ["FastAPI can provide clear HTTP boundaries for AI and automation workloads while keeping request models explicit.", "Separate API handling from business logic so the service can also be reused by jobs or workers."],
      },
      {
        heading: "Make automation observable",
        paragraphs: ["Scheduled and event-driven jobs should expose status, failures, retry behavior, and useful logs.", "Idempotent operations help prevent duplicate work when a task is retried."],
      },
      {
        heading: "Connect AI to product workflows",
        paragraphs: ["Python services can orchestrate model calls, retrieval, preprocessing, and post-processing while the main product consumes a stable API.", "Keep credentials server-side and define timeouts and fallback behavior around external model providers."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 9,
    number: "09",
    category: "Architecture",
    title: "Monolith vs Microservices: Choosing Architecture Based on Product Growth",
    description: "Architecture should solve product problems rather than follow trends. Learn how to evaluate boundaries, teams, scale, and operational complexity.",
    technologies: ["Architecture", "Java", "Node.js"],
    readTime: "12 min read",
    date: "Aug 18, 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Monolith vs Microservices: Choosing Architecture Based on Product Growth",
    content: [
      {
        heading: "Why a modular monolith can work",
        paragraphs: ["A well-structured monolith can keep deployment and debugging simple while still separating business capabilities internally.", "Clear modules make future extraction possible without starting from an unstructured codebase."],
      },
      {
        heading: "When services become useful",
        paragraphs: ["Independent scaling, strong team boundaries, different runtime needs, or separate deployment lifecycles can justify service boundaries.", "Each service also introduces networking, deployment, monitoring, and data consistency concerns."],
      },
      {
        heading: "Choose based on constraints",
        paragraphs: ["Consider team size, release frequency, traffic patterns, reliability needs, organizational boundaries, and operational maturity.", "Architecture should reduce a real constraint rather than add complexity for its own sake."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"],
  },
  {
    id: 10,
    number: "10",
    category: "API Engineering",
    title: "Designing REST APIs That Scale With Your Product",
    description: "Explore API contracts, resource design, versioning, validation, security, errors, documentation, and long-term compatibility.",
    technologies: ["REST", "Spring Boot", "Node.js"],
    readTime: "8 min read",
    date: "Aug 17, 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Designing REST APIs That Scale With Your Product",
    content: [
      {
        heading: "Design stable resources",
        paragraphs: ["Use resource-oriented URLs, predictable HTTP methods, consistent status codes, and response shapes.", "Keep naming consistent so developers can predict how new endpoints will behave."],
      },
      {
        heading: "Plan for change",
        paragraphs: ["Version only when the contract needs an incompatible change, and document deprecations clearly.", "Backward-compatible additions are usually easier for existing clients to absorb."],
      },
      {
        heading: "Protect and document the contract",
        paragraphs: ["Validate inputs, authorize sensitive operations, rate-limit where appropriate, and avoid leaking internal errors.", "OpenAPI documentation and examples make an API easier for frontend, mobile, partner, and internal teams to consume."],
      },
    ],
    contentImages: ["https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85"],
  },
];
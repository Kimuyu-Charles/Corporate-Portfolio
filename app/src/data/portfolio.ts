export interface Project {
  id: string;
  title: string;
  category: 'Power BI' | 'Financial Modeling' | 'Machine Learning' | 'Data Pipeline';
  description: string;
  features: string;
  impact: string;
  tech: string[];
  link: string;
  linkLabel: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  proficiency: number; // 1-5
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
  image: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const headline = {
  primary: "I turn complex financial and operational data into clear decisions.",
  secondary: "CFA Charterholder · Investment & Data Analyst · Nairobi",
  cta: {
    primary: "View My Work",
    secondary: "Download CV",
    secondaryUrl: "/assets/Kimuyu_CV.pdf",
  },
};

export const about = {
  name: "Charles Kimuyu",
  title: "Investment & Data Analyst",
  location: "Nairobi, Kenya",
  image: publicAsset("images/Chuck.png"),
  bio: [
    "I help businesses transform financial, operational, and commercial data into dashboards, forecasts, automated reports, and decision-support systems that leadership actually uses.",
    "Currently Data Analytics Coordinator at Kenya Builders & Concrete, where I've automated Power BI reporting, improved data quality, and enabled near real-time tracking of margins, costs, and operational KPIs.",
    "CFA Charterholder with all three levels completed. My background spans equity valuation, financial statement analysis, portfolio management, and increasingly, the Python and machine-learning tools that augment traditional finance work.",
  ],
  stats: [
    { label: "CFA Levels Completed", value: "3/3" },
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Tools & Technologies", value: "12+" },
  ],
};

export const services: Service[] = [
  {
    title: "Financial Modeling & Valuation",
    description: "Three-statement models, DCF valuation, scenario analysis, and sensitivity testing built to FAST standards. From startup forecasts to listed-company valuation.",
    icon: "TrendingUp",
  },
  {
    title: "Business Intelligence & Dashboards",
    description: "Power BI dashboards that connect to your data sources, automate reporting, and give leadership real-time visibility into KPIs, margins, and operational performance.",
    icon: "BarChart3",
  },
  {
    title: "Data Analytics & Forecasting",
    description: "Python and SQL-based analysis of financial and operational data. Time-series forecasting, predictive modeling, and statistical analysis that supports planning and decision-making.",
    icon: "LineChart",
  },
  {
    title: "Equity Research & Reporting",
    description: "Investment thesis development, fundamental analysis, and decision-ready research reports aligned with CFA standards for corporate, institutional, and private clients.",
    icon: "FileText",
  },
];

export const skills: Skill[] = [
  // Financial
  { name: "Financial Modeling (3S & DCF)", category: "Finance", description: "Integrated models, scenario analysis, FAST standards", proficiency: 5 },
  { name: "Equity Research", category: "Finance", description: "Thesis development, fundamental analysis, report writing", proficiency: 5 },
  { name: "Valuation", category: "Finance", description: "DCF, comps, precedent transactions", proficiency: 4 },
  { name: "Portfolio Management", category: "Finance", description: "Asset allocation, risk analysis, performance attribution", proficiency: 4 },
  // Data & BI
  { name: "Power BI", category: "Business Intelligence", description: "DAX, data modeling, dashboard design", proficiency: 5 },
  { name: "SQL", category: "Business Intelligence", description: "Complex queries, joins, window functions, optimization", proficiency: 4 },
  { name: "Python", category: "Business Intelligence", description: "Pandas, NumPy, data analysis, visualization", proficiency: 4 },
  { name: "Excel / VBA", category: "Business Intelligence", description: "Advanced formulas, macros, financial templates", proficiency: 5 },
  // Advanced
  { name: "Machine Learning", category: "Advanced Analytics", description: "Supervised learning, feature engineering, model evaluation", proficiency: 3 },
  { name: "Time-Series Forecasting", category: "Advanced Analytics", description: "ARIMA, Prophet, LSTM experiments", proficiency: 3 },
  { name: "NLP", category: "Advanced Analytics", description: "Text processing, sentiment analysis, TF-IDF", proficiency: 3 },
  // Tools
  { name: "Git & GitHub", category: "Tools", description: "Version control, collaboration, documentation", proficiency: 4 },
  { name: "Data Visualization", category: "Tools", description: "Matplotlib, Seaborn, executive presentation design", proficiency: 4 },
];

export const projects: Project[] = [
  {
    id: "crypto-dashboard",
    title: "Crypto Performance & Risk Dashboard",
    category: "Power BI",
    description: "A two-page Power BI dashboard analyzing the top 1,000 cryptocurrencies across market structure, performance, volatility, liquidity, and tokenomics.",
    features: "Market-cap distribution by tier, Top-10 vs others analysis, size-vs-volume scatter, timeframe heatmap, return/volatility/drawdown distributions, synced slicers for rank/tier/symbol, tokenomics supply-utilization tracking.",
    impact: "Enables faster crypto research and helps users spot liquid movers, deep drawdowns, and projects with unusual tokenomics for deeper due diligence.",
    tech: ["Power BI", "DAX", "Data Modeling", "Crypto Analytics"],
    link: "https://github.com/Kimuyu-Charles/Power-Bi-Crypto-Performance-Risk-Dashboard",
    linkLabel: "View Dashboard",
    image: publicAsset("images/project-crypto.jpg"),
    featured: true,
  },
  {
    id: "blu-containers",
    title: "Blu Containers Financial Model",
    category: "Financial Modeling",
    description: "A fully linked three-statement financial model for a fictitious manufacturer of eco-friendly water storage tanks, complete with DCF valuation and Monte Carlo simulation.",
    features: "Integrated Income Statement, Balance Sheet & Cash Flow, automated drivers, DCF valuation, bull/base/bear scenarios, Monte Carlo simulation, working-capital metrics (DSO, inventory turns), KPI dashboards, variance analysis.",
    impact: "Provides investors and management with a structured way to test growth, margin and capex assumptions, quantify valuation ranges, and understand key value drivers.",
    tech: ["Excel", "VBA", "DCF Modeling", "Scenario Planning"],
    link: "https://github.com/Kimuyu-Charles/Blu-Containers-Financial-Model",
    linkLabel: "View Model",
    image: publicAsset("images/project-blu.jpg"),
    featured: true,
  },
  {
    id: "fast-model",
    title: "Corporate Finance Model (FAST Standards)",
    category: "Financial Modeling",
    description: "A corporate finance model for a listed Kenyan tobacco manufacturer, built using FAST (Flexible, Appropriate, Structured, Transparent) standards.",
    features: "Integrated historical financials, operating drivers, funding assumptions, three-statement model with valuation outputs (EV, equity value), scenario analysis for revenue and margin drivers.",
    impact: "Transparent, audit-friendly model suitable for valuation, credit analysis, and strategy discussions. Reusable structure for other corporate finance case studies.",
    tech: ["Excel", "FAST Standards", "Valuation", "Corporate Finance"],
    link: "https://github.com/Kimuyu-Charles/Corporate-Finance-Model-using-FAST",
    linkLabel: "View Model",
    image: publicAsset("images/project-fast.jpg"),
    featured: true,
  },
  {
    id: "ml-forecasting",
    title: "Financial Time-Series Forecasting (ML & DL)",
    category: "Machine Learning",
    description: "Experiments comparing traditional statistical models against modern ML/DL architectures for financial time-series prediction.",
    features: "Baseline models (moving average, AR), machine learning approaches, recurrent neural networks, consistent train/test evaluation framework, forecast accuracy comparison.",
    impact: "Demonstrates where advanced models add genuine value over simpler approaches for financial KPI and market forecasting.",
    tech: ["Python", "Jupyter", "Time Series", "Deep Learning"],
    link: "https://github.com/Kimuyu-Charles/Financial-Time-Series-Forecasting-ML-DL",
    linkLabel: "View Notebook",
    image: publicAsset("images/project-ml.jpg"),
    featured: false,
  },
  {
    id: "retail-sales",
    title: "Retail Sales Performance Forecasting",
    category: "Machine Learning",
    description: "Analysis of 185k+ retail transactions to uncover revenue drivers, customer behaviour, and seasonality patterns with predictive forecasting.",
    features: "Pareto analysis (20% products = majority revenue), demand elasticity identification, seasonality pattern detection, time-series forecast models.",
    impact: "Informed inventory rebalancing, targeted promotions, and optimized timing—supporting higher conversion rates and more efficient stock planning.",
    tech: ["Python", "Pandas", "Predictive Modeling", "Data Analysis"],
    link: "https://github.com/Kimuyu-Charles/Retail-Sales-Performance-Forecasting",
    linkLabel: "View Code",
    image: publicAsset("images/project-retail.jpg"),
    featured: false,
  },
  {
    id: "data-pipeline",
    title: "Company Industry Data Pipeline",
    category: "Data Pipeline",
    description: "End-to-end ETL pipeline transforming raw company and industry data into clean, analysis-ready datasets.",
    features: "Missing-value handling, type standardization, categorical encoding, feature engineering (size buckets, sector groupings, ratio metrics), reproducible Jupyter workflow.",
    impact: "Turns messy datasets into reliable, analysis-ready tables that improve model stability and interpretability.",
    tech: ["Python", "Pandas", "ETL", "Feature Engineering"],
    link: "https://github.com/Kimuyu-Charles/Company-Industry-Data-Pipeline",
    linkLabel: "View Notebook",
    image: publicAsset("images/project-pipeline.jpg"),
    featured: false,
  },
  {
    id: "nlp-analysis",
    title: "NLP Company Text Analysis",
    category: "Machine Learning",
    description: "Applying NLP techniques to transform unstructured company and industry text into structured quantitative features.",
    features: "Text cleaning, tokenization, TF-IDF feature extraction, exploratory term analysis across industries and companies.",
    impact: "Converts textual disclosures into quantitative signals for richer screening, clustering, and risk-scoring in fundamental and credit analysis.",
    tech: ["Python", "NLP", "Text Processing", "Feature Engineering"],
    link: "https://github.com/Kimuyu-Charles/NLP-Company-Text-Analysis",
    linkLabel: "View Notebook",
    image: publicAsset("images/project-nlp.jpg"),
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    role: "Data Analytics Coordinator",
    company: "Kenya Builders & Concrete Company Ltd",
    period: "2023 - Present",
    description: "Lead data analytics function, building reporting infrastructure and delivering insights to management.",
    achievements: [
      "Automated monthly reporting in Power BI, reducing report preparation time by 70%",
      "Built dashboards tracking margins, costs, and operational KPIs in near real-time",
      "Improved data quality through validation frameworks and source-system integration",
      "Enabled management to identify cost-saving opportunities across operations",
    ],
  },
  {
    role: "Investment Analyst",
    company: "Independent / Project-Based",
    period: "2021 - Present",
    description: "Self-directed investment research and financial modeling for various clients and personal projects.",
    achievements: [
      "Completed all 3 levels of the CFA Program",
      "Built 7+ financial models and dashboards across multiple industries",
      "Published research on equity valuation and market analysis",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "CFA Institute",
    degree: "Chartered Financial Analyst (CFA)",
    year: "2025",
    description: "Comprehensive program covering equity and fixed income valuation, financial statement analysis, corporate finance, derivatives, alternative investments, and portfolio management.",
    image: publicAsset("images/CFA-Charter.jpeg"),
  },
  {
    institution: "Egerton University",
    degree: "Bachelor of Arts in Economics & Sociology",
    year: "2019",
    description: "Coursework in statistics, econometrics, macro and microeconomics, development economics, research methodology, and data analysis.",
    image: publicAsset("images/Egerton.webp"),
  },
];

export const certifications: Certification[] = [
  { name: "Python for Data Science", issuer: "Moringa School / DataCamp", year: "2023" },
  { name: "Data Visualization with Power BI", issuer: "Microsoft / CFI", year: "2024" },
  { name: "Financial Modeling & Valuation", issuer: "CFI / Wall Street Prep", year: "2024" },
];

export const contact = {
  email: "charlesnzioka1@gmail.com",
  linkedin: "https://linkedin.com/in/charles-kimuyu",
  github: "https://github.com/Kimuyu-Charles",
  location: "Nairobi, Kenya",
  timezone: "EAT (UTC+3)",
  availability: "Open to consulting & full-time opportunities",
};

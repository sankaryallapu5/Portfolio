import React, { useState } from 'react';
import './App.css';

const EMAIL = 'sankaryallapu15@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/sankar-r-92867243b/';

const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '40%', label: 'Faster Athena queries' },
  { value: 'Millions', label: 'SAP records processed' },
];

const skillGroups = [
  { title: 'Programming', items: ['Python', 'SQL'] },
  {
    title: 'Big Data',
    items: [
      'Apache Spark',
      'PySpark DataFrames',
      'Spark SQL',
      'Batch Processing',
    ],
  },
  {
    title: 'AWS Services',
    items: [
      'AWS Glue',
      'Amazon S3',
      'AWS Lambda',
      'AWS DMS',
      'Amazon Athena',
      'Amazon SQS',
      'Amazon SNS',
      'Amazon RDS',
      'CloudWatch',
      'IAM',
      'Secrets Manager',
      'OpenSearch',
    ],
  },
  {
    title: 'Data Engineering',
    items: [
      'ETL / ELT',
      'Data Migration',
      'Data Ingestion',
      'Data Transformation',
      'Data Cleansing',
      'Data Validation',
      'Data Reconciliation',
      'Data Quality',
      'Schema Mapping',
    ],
  },
  {
    title: 'SQL Concepts',
    items: ['Joins', 'Subqueries', 'CTEs', 'Window Functions', 'Aggregations'],
  },
  {
    title: 'Optimization & Formats',
    items: [
      'Spark Optimization',
      'Partitioning',
      'Caching',
      'Performance Tuning',
      'Parquet',
      'CSV',
      'JSON',
    ],
  },
  {
    title: 'Tools',
    items: ['Git', 'Jira', 'Postman', 'AWS CodePipeline'],
  },
];

const projects = [
  {
    number: '01',
    title: 'SAP-to-SAP Data Migration',
    category: 'DATA MIGRATION',
    flow: ['SAP', 'GLUE', 'S3'],
    description:
      'PySpark ETL pipelines on AWS Glue to extract, transform, and migrate SAP logistics and operational data at scale.',
    highlights: [
      'Built complex transformation, cleansing, and schema mapping logic based on business requirements.',
      'Developed source-to-target validation and reconciliation to ensure migration accuracy.',
      'Processed large datasets with Spark DataFrames and Spark SQL.',
      'Optimized Spark workloads through partitioning, caching, and parallel processing.',
      'Managed raw and curated datasets in Amazon S3 and validated data using Athena.',
    ],
    technologies: ['AWS Glue', 'PySpark', 'Python', 'SQL', 'S3', 'Athena'],
  },
  {
    number: '02',
    title: 'Data Migration & Archival Pipeline',
    category: 'DATA ENGINEERING',
    flow: ['RDS', 'DMS', 'S3'],
    description:
      'End-to-end ETL and event-driven pipelines for migrating and archiving structured and unstructured data on AWS.',
    highlights: [
      'Migrated data from Amazon RDS to Amazon S3 using AWS DMS.',
      'Built event-driven workflows with Lambda, SQS, SNS, and S3.',
      'Converted CSV to Parquet, improving Athena query performance by 40%.',
      'Implemented Glue Crawlers and Data Catalog for schema discovery and metadata management.',
      'Configured CloudWatch monitoring, SNS notifications, data validation, and S3 partitioning.',
    ],
    technologies: [
      'AWS DMS',
      'Glue',
      'PySpark',
      'Lambda',
      'SQS',
      'SNS',
      'Athena',
      'OpenSearch',
    ],
  },
];

const achievements = [
  {
    title: '40% faster queries',
    text: 'Improved Amazon Athena query performance by 40% through CSV-to-Parquet optimization.',
  },
  {
    title: 'Millions of records',
    text: 'Developed PySpark ETL pipelines to process millions of SAP logistics records.',
  },
  {
    title: 'Higher migration accuracy',
    text: 'Implemented source-to-target reconciliation and data quality checks to improve migration accuracy.',
  },
];

const experience = [
  {
    company: 'Uptech Software Solutions',
    role: 'Data Engineer',
    period: 'May 2022 – June 2026',
    points: [
      'Designed and optimized scalable ETL/ELT pipelines and data migration solutions using AWS Glue, PySpark, Python, and SQL.',
      'Delivered the SAP-to-SAP Data Migration and the Data Migration & Archival Pipeline projects end to end.',
      'Built data validation, reconciliation, and monitoring processes using Athena, CloudWatch, and SNS.',
    ],
  },
  {
    company: 'Innefu Labs Limited',
    role: 'Software Engineer',
    period: 'July 2026 – September 2026',
    points: [
      'Supported software development and technical implementation activities.',
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          S<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="nav-cta" href="#contact">
          OPEN TO OPPORTUNITIES ↗
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              HELLO, I'M SANKAR
            </p>

            <h1>
              Building the
              <br />
              Future of <span>Data.</span>
            </h1>

            <p className="hero-description">
              AWS Data Engineer with 4+ years of experience designing scalable
              ETL/ELT pipelines and data migration solutions using AWS Glue,
              PySpark, Python, and SQL.
            </p>

            <div className="hero-tags">
              <span>AWS Glue</span>
              <span>PySpark</span>
              <span>Python</span>
              <span>SQL</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
              <a href="/resume.pdf" download className="secondary-button">
                Download Resume ↓
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="data-core">
              <span className="core-symbol">S.</span>
              <span className="core-label">DATA ENGINEER</span>
            </div>
            <div className="floating-card card-python">Python</div>
            <div className="floating-card card-sql">SQL</div>
            <div className="floating-card card-spark">PySpark</div>
            <div className="floating-card card-cloud">AWS Glue</div>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>
          <div className="section-heading">
            <h2>
              Turning data into
              <br />
              <span>possibilities.</span>
            </h2>
            <div className="about-copy">
              <p>
                I'm Sankar Yallapu, an AWS Data Engineer who builds, optimizes,
                and migrates data pipelines. I work on end-to-end ingestion and
                transformation workflows, large-scale dataset processing, and
                source-to-target reconciliation.
              </p>
              <p>
                I have hands-on experience with Amazon S3, AWS Lambda, AWS DMS,
                Amazon Athena, SQS, SNS, RDS, CloudWatch, and OpenSearch, with a
                strong understanding of data lake architecture, Parquet
                optimization, partitioning, and serverless data processing.
              </p>
            </div>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <p className="eyebrow">02 / TECHNICAL SKILLS</p>
          <h2>
            My technical <span>toolkit.</span>
          </h2>

          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-top">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <p className="eyebrow">03 / SELECTED PROJECTS</p>
          <div className="section-title-row">
            <h2>
              Things I've <span>built.</span>
            </h2>
            <p>Data migration and pipeline projects delivered on AWS.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-graphic">
                  {project.flow.map((node, i) => (
                    <React.Fragment key={node}>
                      {i > 0 && <div className="graphic-line"></div>}
                      <div
                        className={
                          i === 1
                            ? 'graphic-node graphic-node-middle'
                            : 'graphic-node'
                        }
                      >
                        {node}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="achievements">
            <p className="eyebrow">KEY ACHIEVEMENTS</p>
            <div className="achievements-grid">
              {achievements.map((item) => (
                <div className="achievement-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <p className="eyebrow">04 / EXPERIENCE & EDUCATION</p>
          <h2>
            My professional <span>journey.</span>
          </h2>

          <div className="timeline">
            {experience.map((job) => (
              <div className="journey-card role-card" key={job.company}>
                <span className="journey-label">EXPERIENCE</span>
                <div className="role-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="role-company">{job.company}</p>
                  </div>
                  <span className="journey-date role-date">{job.period}</span>
                </div>
                <ul className="role-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="journey-card role-card">
              <span className="journey-label">EDUCATION</span>
              <div className="role-header">
                <div>
                  <h3>Bachelor of Science (M.S.C.S.)</h3>
                  <p className="role-company">Sri Krishnadevaraya University</p>
                </div>
                <span className="journey-date role-date">2021</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">05 / CONTACT</p>
            <h2>
              Let's build something
              <br />
              <span>great.</span>
            </h2>
            <p className="contact-description">
              Looking for an AWS Data Engineer? I'd be happy to connect and talk
              about data engineering opportunities.
            </p>

            <div className="contact-buttons">
              <a href={`mailto:${EMAIL}`} className="primary-button">
                ✉ Send Me an Email
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="contact-email">{EMAIL}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          S<span>.</span>
        </a>
        <p>Designed & built with purpose.</p>
        <p>© {new Date().getFullYear()} Sankar Yallapu</p>
      </footer>
    </div>
  );
}

export default App;

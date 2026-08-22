import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { meta } from "../../content_option";

/**
 * Reusable Project Page Template
 * 
 * Usage:
 * Import this component and pass in your project data structure:
 * 
 * <ProjectPageTemplate projectData={projectData} />
 * 
 * projectData should have the following structure:
 * {
 *   projectTitle: "Project Name",
 *   metaDescription: "SEO description",
 *   blockDiagram: {
 *     img: "url_or_path",
 *     alt: "alt text"
 *   },
 *   systemArchitecture: {
 *     title: "System Architecture",
 *     description: "Description text",
 *     specs: [
 *       { title: "Spec Title", content: "Spec content or JSX" },
 *       ...
 *     ]
 *   },
 *   performanceHighlights: ["highlight1", "highlight2", ...],
 *   schematics: [
 *     { img: "path", title: "Title", description: "Description" },
 *     ...
 *   ],
 *   schematicsDescription: "Description text for schematics section"
 * }
 */
export const ProjectPageTemplate = ({ projectData }) => {
  const navigate = useNavigate();

  const {
    projectTitle,
    metaDescription,
    blockDiagram,
    systemArchitecture,
    performanceHighlights,
    schematics,
    schematicsDescription,
  } = projectData;

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{projectTitle} | {meta.title}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>

        {/* Header with Back Button */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <button
              onClick={() => navigate("/portfolio")}
              className="back_button"
              style={{
                background: "none",
                border: "none",
                color: "var(--text-color)",
                cursor: "pointer",
                fontSize: "1rem",
                marginBottom: "1rem",
                textDecoration: "underline",
              }}
            >
              ← Back to Portfolio
            </button>
            <h1 className="display-4 mb-4">{projectTitle}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* System Overview */}
        <Row className="mb-5">
          <Col lg="12">
            <h3 className="color_sec py-4">System Overview</h3>
          </Col>
        </Row>

        {/* Block Diagram */}
        <Row className="mb-5">
          <Col lg="12">
            <div className="block_diagram_container">
              <img
                src={blockDiagram.img}
                alt={blockDiagram.alt}
                className="block_diagram_image"
              />
            </div>
          </Col>
        </Row>

        {/* System Description */}
        <Row className="mb-5">
          <Col lg="10">
            <h3 className="color_sec py-4">{systemArchitecture.title}</h3>
            <p className="sys_description">
              {systemArchitecture.description}
            </p>

            <div className="system_specs">
              {systemArchitecture.specs.map((spec, i) => (
                <div key={i} className="spec_item">
                  <h5>{spec.title}</h5>
                  <p>{spec.content}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Detailed Schematics Gallery */}
        <Row className="mb-5">
          <Col lg="12">
            <h3 className="color_sec py-4">Detailed Circuit Schematics</h3>
            <p>{schematicsDescription}</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <div className="schematics_gallery">
              {schematics.map((schematic, i) => (
                <div key={i} className="schematic_card">
                  <div className="schematic_img_wrapper">
                    <img
                      src={schematic.img}
                      alt={schematic.title}
                      className="schematic_placeholder"
                    />
                    <div className="schematic_overlay">
                      <h5>{schematic.title}</h5>
                      <p>{schematic.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Performance Highlights */}
        <Row className="mb-5">
          <Col lg="10">
            <h3 className="color_sec py-4">Performance Highlights</h3>
            <ul className="performance_list">
              {performanceHighlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

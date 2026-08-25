import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { meta } from "../../content_option";
import { schematics } from "./VacQLock/vacqlockSchematics";

const renderDescription = (description) => {
  if (typeof description !== "string") {
    return description;
  }

  return description.split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
    <p key={paragraphIndex}>
      {paragraph.split(/(\*\*[^*]+\*\*)/).map((part, partIndex) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={partIndex}>{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
    </p>
  ));
};

export const SchematicDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, subsystemId, subsystemId2 } = useParams();
  const projectPath = location.state?.projectPath;
  const schematic = schematics.find((item) => item.id === id);

  let currentDetail = schematic;

  // Resolve each requested level while keeping leaf systems unchanged.
  if (subsystemId && schematic?.subsystems) {
    currentDetail = schematic.subsystems.find((sub) => sub.id === subsystemId);
  }

  if (subsystemId2 && currentDetail?.subsystems) {
    currentDetail = currentDetail.subsystems.find((sub) => sub.id === subsystemId2);
  }

  if (!currentDetail) {
    return (
      <Container className="About-header mt-5">
        <h2>Detail page not found</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-color)",
            cursor: "pointer",
            fontSize: "1rem",
            textDecoration: "underline",
          }}
        >
          ← Go back
        </button>
      </Container>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{currentDetail.title} | {meta.title}</title>
          <meta
            name="description"
            content={`${currentDetail.title}: ${currentDetail.description}`}
          />
        </Helmet>

        {/* Header with Back Button */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <button
              onClick={() => navigate(-1)}
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
              ← Back
            </button>
            <h1 className="display-4 mb-4">{currentDetail.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Large Schematic Image */}
        <Row className="mb-5">
          <Col lg="12">
            <div className="schematic_detail_image_container">
              <img
                src={currentDetail.detailImg || currentDetail.img}
                alt={currentDetail.title}
                className="schematic_detail_image"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  border: "1px solid var(--secondary-color)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>

        {/* Detailed Description */}
        <Row className="mb-5">
          <Col lg="10">
            <h3 className="color_sec py-4">Overview</h3>
            <div className="schematic_detail_description">
              {renderDescription(currentDetail.detailedDescription)}
            </div>
          </Col>
        </Row>

        {/* Design Notes */}
        {currentDetail.designNotes?.length > 0 && (
          <Row className="mb-5">
            <Col lg="10">
              <h3 className="color_sec py-4">Design Notes</h3>
              <ul className="design_notes_list">
                {currentDetail.designNotes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </Col>
          </Row>
        )}

        {/* Render a gallery only for items that actually have child systems. */}
        {currentDetail.subsystems && currentDetail.subsystems.length > 0 && (
          <>
            <Row className="mb-5">
              <Col lg="12">
                <div className="schematics_gallery">
                  {currentDetail.subsystems.map((subsystem, i) => (
                    <div
                      key={i}
                      className="schematic_card"
                      onClick={() =>
                        navigate(
                          subsystemId
                            ? `/project/vacqlock/schematic/${schematic.id}/subsystem/${subsystemId}/subsystem/${subsystem.id}`
                            : `/project/vacqlock/schematic/${schematic.id}/subsystem/${subsystem.id}`,
                          {
                            state: { projectPath },
                          }
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <div className="schematic_img_wrapper">
                        <img
                          src={subsystem.img}
                          alt={subsystem.title}
                          className="schematic_placeholder"
                        />
                        <h5 className="schematic_title">{subsystem.title}</h5>
                        <div className="schematic_overlay">
                          <p className="schematic_description">{subsystem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </HelmetProvider>
  );
};

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { meta } from "../../../content_option";
import { schematics } from "./fr3yaSchematics";
import "./style.css";

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
  const navigate = useNavigate();
  const { id, subsystemId, subsystemId2 } = useParams();
  const schematic = schematics.find((item) => item.id === id);
  let currentDetail = schematic;

  if (subsystemId && schematic?.subsystems) {
    currentDetail = schematic.subsystems.find((subsystem) => subsystem.id === subsystemId);
  }

  if (subsystemId2 && currentDetail?.subsystems) {
    currentDetail = currentDetail.subsystems.find((subsystem) => subsystem.id === subsystemId2);
  }

  if (!currentDetail) {
    return (
      <Container className="project-page mt-5">
        <h2>Detail page not found</h2>
        <button className="back_button" onClick={() => navigate("/project/fr3ya")}>
          Back to FR3YA
        </button>
      </Container>
    );
  }

  return (
    <HelmetProvider>
      <Container className="project-page">
        <Helmet>
          <title>
            {currentDetail.title} | FR3YA | {meta.title}
          </title>
          <meta name="description" content={currentDetail.description} />
        </Helmet>
        <Row className="project-header">
          <Col lg="8">
            <button
              className="back_button"
              onClick={() => navigate("/project/fr3ya")}
            >
              Back to FR3YA
            </button>
            <h1 className="display-4">{currentDetail.title}</h1>
            <hr className="t_border" />
          </Col>
        </Row>
        <Row className="project-section">
          <Col lg="12">
            <div className="schematic_detail_image_container">
              <img
                src={currentDetail.detailImg || currentDetail.img}
                alt={currentDetail.title}
                className="schematic_detail_image"
              />
            </div>
          </Col>
        </Row>
        <Row className="project-section">
          <Col lg="10">
            <h3 className="color_sec">Overview</h3>
            <div className="schematic_detail_description">
              {renderDescription(currentDetail.detailedDescription)}
            </div>
          </Col>
        </Row>
        {currentDetail.designNotes?.length > 0 && (
          <Row className="project-section">
            <Col lg="10">
              <h3 className="color_sec">Design Notes</h3>
              <ul className="design_notes_list">
                {currentDetail.designNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </Col>
          </Row>
        )}

        {currentDetail.subsystems?.length > 0 && (
          <Row className="project-section">
            <Col lg="12">
              <h3 className="color_sec">Related Work</h3>
              <div className="schematics_gallery">
                {currentDetail.subsystems.map((subsystem) => (
                  <div
                    key={subsystem.id}
                    className="schematic_card"
                    onClick={
                      subsystem.detailedDescription || subsystem.designNotes?.length
                        ? () =>
                            navigate(
                              subsystemId
                                ? `/project/fr3ya/schematic/${schematic.id}/subsystem/${subsystemId}/subsystem/${subsystem.id}`
                                : `/project/fr3ya/schematic/${schematic.id}/subsystem/${subsystem.id}`
                            )
                        : undefined
                    }
                    role={subsystem.detailedDescription || subsystem.designNotes?.length ? "button" : undefined}
                    tabIndex={subsystem.detailedDescription || subsystem.designNotes?.length ? 0 : undefined}
                  >
                    <div className="schematic_img_wrapper">
                      <img
                        src={subsystem.img}
                        alt={subsystem.title}
                        className="schematic_placeholder"
                      />
                      <h5 className="schematic_title">{subsystem.title}</h5>
                      {subsystem.description && (
                        <div className="schematic_overlay">
                          <p className="schematic_description">
                            {subsystem.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </HelmetProvider>
  );
};

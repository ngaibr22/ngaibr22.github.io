import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { meta } from "../../../content_option";
import { schematics } from "./fr3yaSchematics";
import FR3YACadenceImage from "../../../assets/images/FR3YA_Cadence.png";
import "./style.css";

export const FR3YA = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Container className="project-page">
        <Helmet>
          <title>FR3YA | {meta.title}</title>
          <meta
            name="description"
            content="FR3YA: A 24 GHz vector-modulated phase shifter RFIC"
          />
        </Helmet>

        <Row className="project-header">
          <Col lg="8">
            <button
              className="back_button"
              onClick={() => navigate("/portfolio")}
            >
              Back to Portfolio
            </button>
            <h1 className="display-4">FR3YA: 24 GHz Vector-Modulated Phase Shifter RFIC</h1>
            <hr className="t_border" />
          </Col>
        </Row>


        <Row className="project-section">
          <Col lg="12">
            <div className="block_diagram_container">
              <img
                src={FR3YACadenceImage}
                alt="FR3YA Cadence project overview"
                className="block_diagram_image"
              />
            </div>
          </Col>
        </Row>

        <Row className="project-section">
          <Col lg="10">
            <h3 className="color_sec">Project Description</h3>
            <p className="sys_description">
              <p>
                <p>
                    FR3YA is a 24&nbsp;GHz RFIC implementing a <strong>vector-modulated phase shifter</strong>.
                    An incoming RF signal is first split into In-Phase (I) and Quadrature (Q) components
                    using an on-chip <strong>Lange coupler</strong>. Each branch then passes through an active
                    balun for single-ended-to-differential conversion, followed by a variable-gain
                    amplifier and polarity switch, before the I and Q paths are recombined using a
                    <strong>Wilkinson power combiner</strong>.
                    </p>

                    <p>
                    Phase shifting is achieved by independently controlling the magnitude and polarity of
                    the I and Q components. Changing the relative weighting of these two orthogonal
                    components changes the phase and amplitude of the recombined RF signal, allowing the
                    circuit to function as a vector-modulated phase shifter.
                    </p>

                    <p>
                    Building on my full-custom layout experience from LOKI, I was given
                    <strong>full layout ownership of the polarity-switch and bias subsystems</strong>.
                    These blocks were particularly critical because the polarity switch directly controls
                    the phase of one of the vector components and therefore affects the performance of the
                    complete phase-shifting chain.
                    </p>

                    <p>
                    My responsibilities extended beyond physical implementation into
                    <strong>schematic and post-layout optimization</strong>. I added and tuned passive
                    elements, optimized interconnect geometry, and iterated between schematic simulation
                    and extracted-layout results to recover performance lost to parasitics. This process
                    provided practical experience with matching, coupling-capacitance mitigation,
                    grounding, parasitic-aware routing, and PVT-aware RFIC layout.
                    </p>
              </p>
            </p>
          </Col>
        </Row>

        <Row className="project-section">
          <Col lg="10">
            <h3 className="color_sec">System Specifications</h3>
            <p className="sys_description">
              Add an overview of the FR3YA architecture, design goals, and
              implementation here.
            </p>
            <div className="system_specs">
              <div className="spec_item">
                <h5>Frequency Range</h5>
                <p>Add frequency range and key specifications.</p>
              </div>
              <div className="spec_item">
                <h5>Key Stages</h5>
                <p>Add the major circuit blocks and signal path.</p>
              </div>
              <div className="spec_item">
                <h5>Technology &amp; Software</h5>
                <p>Add process technology and design tools.</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="project-section">
          <Col lg="12">
            <h3 className="color_sec">Individual Systems</h3>
            <p>Add the individual FR3YA circuit blocks and their descriptions here.</p>
            <div className="schematics_gallery">
              {schematics.map((schematic) => (
                <div
                  key={schematic.id}
                  className="schematic_card"
                  onClick={
                    schematic.detailedDescription || schematic.designNotes?.length
                      ? () => navigate(`/project/fr3ya/schematic/${schematic.id}`)
                      : undefined
                  }
                  role={schematic.detailedDescription || schematic.designNotes?.length ? "button" : undefined}
                  tabIndex={schematic.detailedDescription || schematic.designNotes?.length ? 0 : undefined}
                >
                  <div className="schematic_img_wrapper">
                    <img
                      src={schematic.img}
                      alt={schematic.title}
                      className="schematic_placeholder"
                    />
                    <h5 className="schematic_title">{schematic.title}</h5>
                    {schematic.description && (
                      <div className="schematic_overlay">
                        <p className="schematic_description">
                          {schematic.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="project-section">
          <Col lg="10">
            <h3 className="color_sec">Performance Highlights</h3>
            <ul className="performance_list">
              <li>Add a project highlight here.</li>
              <li>Add measured or simulated results here.</li>
              <li>Add implementation notes here.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

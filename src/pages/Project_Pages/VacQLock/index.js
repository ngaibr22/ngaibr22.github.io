import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { meta } from "../../../content_option";

import VacQLock_Block_Diagram from "../../../assets/images/VacQLock_Block_Diagram.jpg";
import { schematics } from "./vacqlockSchematics";


export const VacQLock = () => {
  const navigate = useNavigate();
  // Block Diagram Data
  const blockDiagram = {
    img: VacQLock_Block_Diagram,
  };

  // System Architecture Data
  const systemArchitecture = {
    title: "System Specifications",
    description: "VacQLock is a fully integrated 20-30 GHz receiver RFIC that turns mmWave signals into usable baseband signals. The system combines RF, Analog and Digital circuit design into a complete end-to-end receiver, designed for next-generation communication and sensing applications.",
    specs: [
      {
        title: "I/O Specifications",
        content: (
          <>
            <strong>(IN) RF Input:</strong> 20-30 GHz, -80 dBm sensitivity
            <br />
            <strong>(IN) Analog Control Signal: </strong>Discrete 9-level digital control for VCO tuning
            <br />
            <strong>(IN) Analog Control Signal: </strong>Continuous control for VCO tuning
            <br />
            <strong>(IN) External Clock</strong>
            <br />
            <strong>(OUT) Baseband Output:</strong> 200 MHz bandwidth, I/Q demodulated baseband output
            <br />        
          </>
        ),
      },
      {
        title: "Key Stages",
        content: (
          <>
            <strong>LNA + Balun:</strong> Low-Noise Amplifier with integrated balun for differential routing. Senses -80dBm signals with 9dB of noise figure
            <br />
            <strong>Mixer:</strong> Wideband balanced mixer for down-conversion of 20-30 GHz RF signals to 1 GHz IF signals
            <br />
            <strong>IF Chain:</strong> 1 GHz IF chain with GM-C filters and fixed gain for I/Q demodulation.
            <br />
            <strong>I/Q Demodulator:</strong> Novel Costas-based demdodulator for I/Q demodulation and image rejection. Utilizes a combined Phase-Locked Loop (PLL) and Frequency-Locked Loop (FLL) for robust frequency tracking and phase noise compensation over a 200 MHz range.
          </>
        ),
      },
      {
        title: "Technology & Software",
        content: (
          <>
            <strong>Technology: </strong> UMC 28nm CMOS
            <br />
            <strong>Software: </strong> Cadence Virtuoso, SpectreRF, Calibre
            <br />
          </>
        ),
      },
    ],
  };

  // Performance Highlights Data
  const performanceHighlights = [
    <>      
      <p>
        VacQLock began with a simple question: <strong>how far could I push myself?</strong>
      </p>

      <p>
        After working on LOKI and FR3YA, I wanted my next project to go beyond designing individual RFIC blocks. I wanted to build an entire receiver from the ground up. So I set myself an intentionally difficult challenge: design a heterodyne receiver capable of demodulating the continuous 20–30 GHz spectrum.
      </p>

      <p>
        There was no particular application driving that specification, nor was 20–30 GHz chosen because it was an established research target. I chose it because it was difficult. It was a challenge designed to test the limits of what I could accomplish with the knowledge and tools I had developed.
      </p>

      <p>
        What started with a 19-29 GHz VCO gradually grew into something much larger. The receiver evolved piece by piece, with systems such as frequency generation, RF amplification, mixing, filtering, frequency recovery, and ultimately IQ demodulation. Before I knew it, the individual circuits had become a complete end-to-end system.
      </p>

      <p>
        VacQLock was never about meeting specifications. <strong>It was about exploration. </strong> With my time in academia, I wanted to learn as much as possible, and go beyond what I thought I was capable of. I wanted to take on problems I wasn't taught to solve, and see how far I could take an idea simply because I wanted to find out if I could.
      </p>
    </>
    
  ];

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>VacQLock | {meta.title}</title>
          <meta name="description" content="VacQLock: A 20-30 GHz Mixed-Signal Heterodyne Receiver RFIC" />
        </Helmet>

        {/* Header */}
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
            <h1 className="display-4 mb-4">VacQLock Receiver</h1>
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
            <h3 className="color_sec py-4">Individual Systems</h3>
            <p>
              Explore the individual systems that make up the VacQLock receiver. Click on each system to learn more about its operation and design.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <div className="schematics_gallery">
              {schematics.map((schematic, i) => (
                <div
                  key={i}
                  className={`schematic_card ${
                    schematic.detailedDescription || schematic.designNotes?.length
                      ? "is_clickable"
                      : ""
                  }`}
                  onClick={
                    schematic.detailedDescription || schematic.designNotes?.length
                      ? () => navigate(`/project/vacqlock/schematic/${schematic.id}`)
                      : undefined
                  }
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

        {/* Performance Highlights */}
        <Row className="mb-5">
          <Col lg="10">
            <h3 className="color_sec py-4">Motivation</h3>
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

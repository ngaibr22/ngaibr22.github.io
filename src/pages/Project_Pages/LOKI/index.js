import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { meta } from "../../../content_option";
import { schematics } from "./lokiSchematics";
import LOKICadenceImage from "../../../assets/images/LOKI_Cadence.png";
import "./style.css";

export const LOKI = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <Container className="project-page">
        <Helmet>
          <title>LOKI | {meta.title}</title>
          <meta
            name="description"
            content="LOKI: A sub-THz four-port orthogonal calibration standard IC"
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
            <h1 className="display-4">LOKI: Orthogonal 4-Port Calibration Standard IC</h1>
            <hr className="t_border" />
          </Col>
        </Row>
        
        <Row className="project-section">
          <Col lg="12">
            <div className="block_diagram_container">
              <img
                src={LOKICadenceImage}
                alt="LOKI Cadence project overview"
                className="block_diagram_image"
              />
            </div>
          </Col>
        </Row>

        <Row className="project-section">
          <Col lg="10">
            <h3 className="color_sec">Project Description</h3>
            <p className="sys_description">
              <>
                <p>
                LOKI is a 4-port RF calibration IC designed to demonstrate the novel approach of orthogonal probing, enabling simultaneous characterization of multi-port devices. Unlike conventional two-port probing, which requires a multi-port device to be characterized through repeated measurements, orthogonal probing places RF probes on the North, East, South, and West sides of the chip, allowing all four ports of a device to be accessed simultaneously.
                </p>

                <p>
                The chip integrates dedicated <strong> Short, Open, Load, and Thru</strong> (SOLT) calibration standards along each probing direction. An on-Chip Lange Coupler serves as the integrated device-under-test (DUT), demonstrating the orthognal probing methodology.
                </p>

                <p>
                My primary contribution was the <strong>full-custom RFIC layout and physical implementation</strong> of the calibration structures. Starting from a mm-scale EM structure on HFSS, I translated the designs onto nm-scale UMC 28nm CMOS layout, taking care to maintain the required RF geometry and comply with foundry design rules.
                </p>

                <p>
                This required extensive work with <strong>Cadence Virtuoso</strong> in resolving metal-spacing, minimum/maximum-width, off-grid and density violations, whilist preserving the RF behavior of the structures. During this project, I also <strong> developed an automated Cadence-to-HFSS workflow on Python</strong> that extracted 2D layout geometries from a Cadence GDS and reconstructed them as 3D EM structures with appropriate metal properties on HFSS.
                </p>
              </>
            </p>
          </Col>
        </Row>


        <Row className="project-section">
          <Col lg="10">
            <h3 className="color_sec">Project Specifications</h3>
            <div className="system_specs">
              <div className="spec_item">
                <h5>Operating Frequency</h5>
                <p>0-170 GHz</p>
              </div>
              <div className="spec_item">
                <h5>Calibration Standards</h5>
                <p>Short</p>
                <p>Open</p>
                <p>Load</p>
                <p>High-Frequency Load</p>
                <p>Thru</p>
                <p>Thru-Arc</p>
                <p>Thru-Diagonal</p>           
                </div>
              <div className="spec_item">
                <h5>Technology &amp; Software</h5>
                <p>Ansys HFSS</p>
                <p>Python</p>
                <p>Cadence Virtuoso</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="project-section">
          <Col lg="12">
            <h3 className="color_sec">Individual Contributions</h3>
            <p>Various contributions to the LOKI Project. Click on the cards to learn more</p>
            <div className="schematics_gallery">
              {schematics.map((schematic) => (
                <div
                  key={schematic.id}
                  className="schematic_card"
                  onClick={
                    schematic.detailedDescription || schematic.designNotes?.length
                      ? () => navigate(`/project/loki/schematic/${schematic.id}`)
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
      </Container>
    </HelmetProvider>
  );
};

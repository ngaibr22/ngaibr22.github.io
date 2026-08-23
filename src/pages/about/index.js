import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}
                <p>
                I'm an Electrical Engineer with a focus on Analog and Mixed-Signal IC Design. My interest in silicon, and engineering in general comes from a simple question that has followed me for as long as I can remember:
                
                <strong> how does this actually work?</strong>
                </p>

                <p>
                  I've always been fascinated by electronics. Not simply by what they can do, but the layers of engineering that make them possible. That curiosity eventually led me from taking apart the technology around me to designing circuits of my own, and ultimately into the small but complex world of integrated circuits that power the world today.
                </p>

                <p>
                  As of now, my experience is primarily in transistor-level circuit design, RFICs, Analog and Mixed-Signal systems, custom IC layout, simulation, and physical verification. I've worked on projects ranging from individual circuit blocks to complete mixed-signal systems and fabricated silicon.
                </p>

                <p>
                  However, what I enjoy most is learning something I don't know yet and figuring it out. I'm most comfortable when I'm uncomfortable, and I believe some of the most valuable engineering knowledge comes from being willing to struggle with a problem rather than immediately looking for the easy answer. As such, much of my engineering experience has been driven by self-directed experimentation: teaching myself new tools, exploring unfamiliar concepts, breaking things, and trying again.
                </p>

                <p>
                  In fact, this website itself is a product of that curiosity. I built it from scratch to learn more about web development, and to create a space where I can share my work and ideas with the world.
                </p>

                <p>
                  <strong>Ultimately, I'm curious. I'm hungry for more knowledge, and I'm excited to continue learning and growing as an engineer. That's who I am, and that's what I do.</strong>
                </p>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { meta } from "../../../content_option";

import Wideband_VCO_Image from "../../../assets/images/Wideband_VCO.jpg";
import Five_GHz_LC_VCO_Image from "../../../assets/images/5GHz_LC_VCO.jpg";
import Inverter_Source_Follower_Image from "../../../assets/images/Inverter_Source_Follower_Schematic.jpg";
import VacQLock_Block_Diagram from "../../../assets/images/VacQLock_Block_Diagram.jpg";
import Wideband_VCO_Block_Image from "../../../assets/images/19_29_GHz_VCO_Schematic.jpg";
import LNA_Balun_Image from "../../../assets/images/LNA+Balun.jpg";
import S_Parameter_Image from "../../../assets/images/S21_Balun.png";
import Mixer_Image from "../../../assets/images/Mixer.jpg";
import Multiplier_Image from "../../../assets/images/Multiplier.jpg";
import Bandpass_Image from "../../../assets/images/GM-C Bandpass (1).jpg";
import LowPass_Image from "../../../assets/images/GM-C LowPass Filter.jpg";
import OTA_Image from "../../../assets/images/OTA_Schematic.jpg";
import PLL_FLL_Waveform_Image from "../../../assets/images/PLL_FLL_Waveform.jpg";
import Signum_Image from "../../../assets/images/Signum Schematic.jpg";
import Ring_Amp_Image from "../../../assets/images/Ring_Amp.jpg";
import Ring_VCO_Image from "../../../assets/images/Ring VCO Schematic.jpg";
import Differentiator_Image from "../../../assets/images/Differentiator Schematic.jpg";
import Costas_Image from "../../../assets/images/Costas PLL_FLL.jpg";


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

  // Schematics data - easily editable
  const schematics = [
    {
      id: "input-stage",
      img: Wideband_VCO_Image,
      detailImg: Wideband_VCO_Block_Image, // Optional: use different image for detail page (leave blank to use img)
      title: "19-29 GHz LC VCO",
      description: "19-29 GHz LC VCO for wideband Local Oscillator generation",
      detailedDescription: "The 19-29 GHz LC VCO is the primary local oscillator source for the VacQLock receiver. It's large 10 GHz tunable range allows the receiver to operate across the desired 10-20 GHz spectrum. This tunable range is achieved through the use of two smaller 5 GHz span LC VCOs with accompanying amplification and control logic.",
      designNotes: [
        "-10 GHz continuous tuning range achieved through dual 5 GHz span VCOs (19-24 GHz + 24-29 GHz)",
        "-5 GHz Span VCOs feature isolation buffers in the control path to prevent pulling and ensure stable oscillation",
        "-19-29 GHz VCO system uses 9-level thermometer-based digital control for discrete capacitor banks, VCO selection and transmission gate activity",
        "-VCOs include power switch to disable unused oscillator and save power",
      ],
      // Optional subsystems - add more detail pages within a system
      subsystems: [
        {
          id: "Five_GHz_LC_VCO",
          img: Five_GHz_LC_VCO_Image,
          title: "5 GHz LC VCO",
          description: "5 GHz Span LC VCO Schematic",
          detailedDescription: "The 5 GHz span LC VCOs serve as the fundamental building blocks for the 19-29 GHz LC VCO system. Topology oscillation is achieved through the use of complementary cross-coupled FETs with inductor (L) and capacitor (C) resonance. The value of the tank L and C components dictate the natural frequency of the oscillator. Wideband tuning is achieved through the use of varactors and a set of 4 discrete capacitor banks per oscillator. Application-specific digital logic interfaces with the VCO capacitor banks to provide frequency tuning.",
          designNotes: [
            "-Continuous Varactor Tuning covers a 1 GHz span",
            "-Discrete Capacitor Banks provide 1 GHz discrete tuning steps",
            "-Continuous + Discrete Tuning allows for 5 GHz continuous tuning range",
            "-Phase and Frequency Stability handled upstream in IQ Demodulator",
          ],
        },
        {
          id: "Inverter_Based_Buffer",
          img: Inverter_Source_Follower_Image,
          title: "Inverter-Based Buffer",
          description: "Complementary inverter-based buffer for VCO isolation and drive",
          detailedDescription: "By utilizing resistive feedback, a simple digital CMOS inverter can be transformed into an analog buffer stage. Cascading two inverter stages provides sufficient isolation and drive strength to ensure stable oscillation across the entire 10 GHz tuning range.",
          designNotes: [
            "AC Coupling capacitors used to allow DC-self biasing of inverter stages",
            "Resistive feedback sets the gain and bandwidth of the buffer stage",
            "Inverter-based design minimizes tranistor count and makes for incredibly compact layout",
            "Intrinsic Midrail operation from complementary topology makes it particularly well-suited for buffering complementary, midrail VCO outputs",
          ],
        },
      ],
    },
    {
      id: "LNA_Balun",
      img: LNA_Balun_Image,
      title: "LNA + Balun",
      description: "Low-Noise-Amplifier with Passive Balun integration for 20-30 GHz RF Front-End",
      detailedDescription: "The LNA + Balun stage provides the critical first stage of amplification for the incoming RF signal. The LNA itself consists of three stages. The first stage provides a 50 Ohm wideband match across the entire 20-30 GHz operation range. This ensures no signal power is reflected within the operating range. The second stage drives an On-Chip transformer that converts a single-ended RF signal to differential routing. The third stage takes that differential routing and amplifies the signal to drive the downconversion mixer.",
      designNotes: [
        "Noise Figure of the entire receiver is dominated by LNA + Balun. The Noise Figure for the LNA + Balun is 9dB",
        "Receiver is designed to detect incoming -80dBm signals",
        "Stage 1: Common-Gate Amplifier. Input resistance is set through transconductance of the input FET. Load is set by a PMOS current mirror.",
        "Stage 2: Common-Source Amplifier. Gain stage meant to drive balun. Load is set by PMOS current mirror.",
        "Stage 3: Inverter-Based CMOS amplifier. RF signal is sufficiently small-signal making the amplifier reliable at linear amplification",
      ],
      subsystems: [
        {
          id: "S_Parameter",
          img: S_Parameter_Image,
          title: "S Parameters for LNA+Balun",
          description: "S-Parameter verification for LNA+Balun Performance",
          detailedDescription: "Port 1: 50 Ohm Input    Port 2: 500 Ohm Output",
          designNotes: [
            "S11 remains below -25dB over the entire 20-30 GHz spectrum corresponding to a near perfect 50 Ohm match",
            "S21 is 28dB at 25 GHz with an operational bandwidth across the entire 20-30 GHz spectrum",
          ],
        },
      ],
    },
    {
      id: "Mixer_Stage",
      img: Mixer_Image,
      title: "Folded Gilbert Cell Mixer & Multiplier",
      description: "Analog Mixers & Multipliers",
      detailedDescription: "The Folded Gilbert Cell topology is used extensively within the VacQLock system for frequency synthesizing and Analog multplication. A folded topology was chosen to overcome the low voltage headroom that is intrinsic to 28nm CMOS processes.",
      designNotes: [
        "Balanced Active topology reduces LO feedthrough",
        "Inductive Load on the Folded Node guides AC current from the NMOS differential pair towards the PMOS quad",
        "Gate-Biased NMOS load facilitates high conversion gain and locks output operating point.",
        "Tail FET on NMOS differential pair reduces Common-Mode feedthrough",
      ],
      subsystems: [
        {
          id: "Multiplier",
          img: Multiplier_Image,
          title: "Folded Gilbert Cell Multiplier",
          description: "Folded Gilbert Cell Multiplier with CMFB",
          detailedDescription: "The choice of Folded Gilbert Cell Mixer and Multiplier depends on the DC biasing of the PMOS quad. Should the PMOS quad inputs be biased at V_oV = 0, then the topology acts as a mixer. If the PMOS quad is biased into saturation (V_oV >= 0), then the topology will act as a multiplier.",
          designNotes: [
            "Mixer: PMOS quad becomes amplitude insensitive should inputs switch FETs strongly ON and OFF. This is used extensively with the 19-29 GHz VCO to normalize conversion gain",
            "Multiplier: PMOS quad becomes amplitude sensitive. This is used extensively within the baseband Phase-Locked Loop and Frequency-Locked Loop where amplitude information is important for producing feedback.",
            "CMFB is used for Multipliers at baseband frequencies. This is because AC coupling capacitors cannot be used at baseband (DC) frequencies. Therefore, CMFB is used to enforce a common DC operating point used by all baseband systems."
          ],
        },
      ],
    },
    {
      id: "GM-C Filters",
      img: Bandpass_Image,
      title: "GM-C Filters",
      description: "VacQLock Signal Filtering",
      detailedDescription: "For main signal processing, VacQLock employs the use of GM-C filters to emulate the frequency selectivity of LC-based filters. Through various configurations of GM cells and respective capacitorss, multiple types of filters such as Chebyshev, Biquad or Butterworth filters can be produced. These are used extensively within the IF stage and the IQ demodulation stage.",
      designNotes: [
        "GM-C Filters are used explicitdly for sub-1 GHz signals due to bandwidth limitations of the Gm cell",
        "All nodes of GM-C Filter systems have enforced DC-operating points derived from CMFB tuned to a reference voltage (600mV)",
        "Frequency behavior shaped through capacitor (C) tuning. Behavior verified using DFT analysis",
        "GM-C Filters are estimated to have smaller layout space requirements than On-Chip LC filters, at the cost of higher system complexity",
      ],
      subsystems: [
        {
          id: "Bandpass_Filter",
          img: Bandpass_Image,
          title: "1 GHz Bandpass Filter",
          description: "1 GHz Bandpass Filtert Schematic",
          detailedDescription: "The 1 GHz bandpass filter is implemented through a 6th-Order Butterworth GM-C Filter. This system topology uses Gm-C cells in the Gyrator topology, thus emulating the transfer function of a shunt inductor. This allows the system to have the sharp frequency response of a LC-based butterworth filter, without the use of large and unreliable On-Chip inductors.",
          designNotes: [
            "A total of 14 Gm cells are used. Each Gm cell draws about 950uA of current, equating to a total current draw below 14mA",
            "Passband is designed to have a bandwidth of 400 MHz centered about 1 GHz",
            "Filter has linear range of 40mV centered about 600mV",
            "Gm cells have independent CMFB to enforce 600mV DC operating point",
          ],
        },
        {
          id: "LowPass_Filter",
          img: LowPass_Image,
          title: "Lowpass Filter",
          description: "Lowpass Filter Schematic",
          detailedDescription: "VacQLock is designed to operate on a channel bandwidth of 400 MHz, the largest available bandwidth on commercial 5G systems. Because the system features IQ demodulation and thus image rejection, the lowpass filter can be tuned around a 200 MHz bandwidth rather than a 400 MHz bandwidth. The Gm-C lowpass system implements a 8th-Order Biquad Filter consisting of two identical 4-th order Biquad Filters.",
          designNotes: [
            "A total of 8 Gm cells are used. Each Gm cell draws about 950uA of current, equating to a total current draw below 8mA",
            "Identical 4th-Order Biquads are used to produce an 8th-Order Filter. 8 capacitors are individually tuned to shape frequency response",
            "Filter has linear range of 40mV centered about 600mV",
            "Two Lowpass Filters are used for In-Phase and Quadrature-Phase Demodulation",
          ],
        },
        {
          id: "Gm_Cell",
          img: OTA_Image,
          title: "Operational Transconductance Amplifier",
          description: "Operational Transconductance Amplifier Schematic",
          detailedDescription: "The Operational Transconductance Amplifier (OTA) is the fundamental building block of the VacQLock system. While OTAs can be implemented using various topologies, all OTAs work on the basis of converting an input voltage to an output current. For simplicity, the chosen topology to implement the OTA was a simple differential pair with reference-based Common-Mode Feedback",
          designNotes: [
            "The OTA cell is designed to draw around 950uA of current. While current consumption and power could theoretically be reduced, it was kept at 950uA in concerns with OTA bandwidth under PVT",
            "Active PMOS loads are used to facilitate the use of CMFB",
            "Common Mode sensing is performed using NMOS transistors with high input resistance",
            "CMFB is designed to enforce the output voltage to be equal to the reference voltage: 600mV",
          ],
        },
      ],
    },
    {
      id: "PLL_FLL",
      img: "Costas_Image",
      title: "PLL & FLL",
      description: "Costas-based Phase and Frequency Locked Loop",
      detailedDescription: "The Costas-based PLL and FLL is the most crucial aspect of the VacQLock system that ensures reliable downconversion. Due to the 19-29 GHz susceptibility to phase noise and frequency drift, 1 GHz IF is not guarenteed. When mixed with a 1 GHz Local Oscillator, the resulting baseband output will have some frequency offset. Therefore, the Costas-based PLL and FLL system is designed to compensate for total system frequency drift and phase noise through a large 100 MHz capture range, and 5uS lock time. This guarentees true baseband downconversion based on the current intermediate frequency.",
      designNotes: [
        "Bandgap reference for voltage generation",
        "Current mirror bias network for low temperature drift",
        "On-chip regulation for supply noise rejection",
        "Multiple bias points with independent tuning",
        "Process-compensated design for robust PVT performance",
      ],
    },
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
            <h3 className="color_sec py-4">Detailed Circuit Schematics</h3>
            <p>
              Explore the individual building blocks of the VacQLock receiver. Click on each schematic to learn more about its operation and design trade-offs.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <div className="schematics_gallery">
              {schematics.map((schematic, i) => (
                <div
                  key={i}
                  className="schematic_card"
                  onClick={() =>
                    navigate(`/project/vacqlock/schematic/${schematic.id}`, {
                      state: { schematic },
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
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

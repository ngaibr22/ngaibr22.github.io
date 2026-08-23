import Wideband_VCO_Image from "../../../assets/images/Wideband_VCO.jpg";
import Five_GHz_LC_VCO_Image from "../../../assets/images/5GHz_LC_VCO.jpg";
import Inverter_Source_Follower_Image from "../../../assets/images/Inverter_Source_Follower_Schematic.jpg";
import Wideband_VCO_Block_Image from "../../../assets/images/19_29_GHz_VCO_Schematic.jpg";
import LNA_Balun_Image from "../../../assets/images/LNA+Balun.jpg";
import S_Parameter_Image from "../../../assets/images/S21_Balun.png";
import Mixer_Image from "../../../assets/images/Mixer.jpg";
import Multiplier_Image from "../../../assets/images/Multiplier.jpg";
import Bandpass_Image from "../../../assets/images/GM-C Bandpass (1).jpg";
import LowPass_Image from "../../../assets/images/GM-C LowPass Filter.jpg";
import OTA_Image from "../../../assets/images/OTA_Schematic.jpg";
import Costas_Image from "../../../assets/images/Costas PLL_FLL.jpg";
import VCO_Control_Logic_Section_Image from "../../../assets/images/9-Level Flash ADC.jpg";
import VCO_Control_Logic_Image from "../../../assets/images/StrongARM (2).jpg";
import ADC_Performance_Image from "../../../assets/images/ADC_Performance_2.png";

export const schematics = [
  {
    id: "input-stage",
    img: Wideband_VCO_Image,
    detailImg: Wideband_VCO_Block_Image,
    title: "19-29 GHz LC VCO",
    description: "19-29 GHz LC VCO for wideband Local Oscillator generation",
    detailedDescription: (
        <>
          <p>
            The 19-29 GHz LC VCO is the primary local oscillator source for the VacQLock receiver. It's large <strong>10 GHz tunable range</strong> allows the receiver to operate across the desired 20-30 GHz spectrum. This tunable range is achieved through the use of two smaller 5 GHz span LC VCOs with accompanying amplification and control logic.
          </p>
          <p>
            The control logic for the 19-29 GHz VCO is implemented through a combination of continuous varactor tuning and discrete capacitor banks. The continuous varactor tuning allows for fine frequency adjustments, while the discrete capacitor banks provide coarse tuning steps. This combination allows for precise frequency control across the entire 10 GHz range.
          </p>
        </>
      ),
    designNotes: [ (
            <>
              <li>-Discrete Capacitor Banks provide 1 GHz discrete tuning steps</li>
              <li>-Continuous Varactor Tuning covers a 1 GHz span</li>
              <li>-Passgates provide channel isolation and selectivity</li>
              <li>-VCOs include power switch to disable unused oscillator and save power</li>
            </>   
      )
    ],
    subsystems: [
      {
        id: "Five_GHz_LC_VCO",
        img: Five_GHz_LC_VCO_Image,
        title: "5 GHz LC VCO",
        description: "5 GHz Span LC VCO Schematic",
        detailedDescription: (
            <>
                <p>
                    The 5 GHz span LC VCOs serve as the fundamental building blocks for the 19-29 GHz LC VCO system. One LC VCO covers the 19-24 GHz range, while the other covers the 24-29 GHz range. The two VCOs are combined through a switchable network to provide the full 10 GHz tunable range.
                </p>

                <p>
                    Oscillation is achieved through the use of complementary cross-coupled FETs with inductor (L) and capacitor (C) resonance. The value of L and C dictate the natural frequency of the oscillator. Wideband tuning is achieved through the use of varactors and a set of 4 discrete capacitor banks per oscillator. Application-Specific digital logic interfaces with the VCO capacitor banks to provide discrete frequency tuning, while external analog control directly interfaces with the varactors to provide continuous frequency tuning.
                </p>
            </>),
        designNotes: [(
            <>
                <li>-Continuous Varactor Tuning covers a 1 GHz span</li>
                <li>-Discrete Capacitor Banks provide 1 GHz discrete tuning steps</li>
                <li>-Continuous + Discrete Tuning allows for 5 GHz continuous tuning range</li>
                <li>-Phase and Frequency Stability handled upstream in IQ Demodulator</li>
            </>
            )
        ],
      },
      {
        id: "Inverter_Based_Buffer",
        img: Inverter_Source_Follower_Image,
        title: "Inverter-Based Buffer",
        description: "Complementary inverter-based buffer for VCO isolation and drive",
        detailedDescription: (
            <>
                <p>
                    By utilizing resistive feedback, a simple digital CMOS inverter can be repurposed into an analog buffer stage. Cascading two inverter stages provides sufficient isolation and drive strength to ensure stable oscillation across the entire 10 GHz tuning range.
                </p>

                <p>
                    Different types of buffer topologies were considered for the VCO output stage, including source-followers, common-drain, and inverter-based amplifiers. The inverter-based buffer was ultimately chosen due to its simplicity, low transistor count, and compact layout. At a wideband frequency of 19-29 GHz, the simplicity of the inverter-based buffer was particularly advantageous, as it minimized parasitic capacitances and inductances that inevitably cause peformance variation over the functional bandwidth. Additionally, the inverter-based buffer is inherently complementary, which allows it to easily buffer the differential outputs of the VCOs.
                </p>
            </>
        ),
        designNotes: [ (
            <>
                <li>AC Coupling Capacitors are used to allow self-biasing of inverter stages</li>
                <li>Resistive feedback sets the gain and bandwidth of the buffer stage</li>
            </>
          )
        ],
      },
    ],
  },
  {
    id: "VCO_Control_Logic",
    img: VCO_Control_Logic_Section_Image,
    detailImg: VCO_Control_Logic_Section_Image,
    title: "VCO Control Logic",
    description: "9-level digital control for VCO tuning",
    detailedDescription: (
        <>
          <p>
            The 19–29 GHz LC VCO uses digitally controlled capacitor banks to provide discrete frequency tuning. An external analog control voltage is converted into 9 thermometer-coded control levels using a custom Flash ADC.
          </p>

          <p>
            Unlike a conventional Flash ADC, the design intentionally omits the binary encoder. The comparator outputs directly control the VCO's capacitor-bank configuration, eliminating unnecessary digital conversion and simplifying the control path.
          </p>

          <p>
            The ADC consists of 9 analog comparators and a 10-resistor reference ladder, providing discrete decision thresholds across the input range. With an external clock, the ADC rapidly converts changes in the analog control voltage into stable digital tuning states, enabling discrete frequency selection across the 19–29 GHz VCO range.
          </p>
        </>
    ),
    designNotes: [ (
        <>
          <li>-On-Chip capacitors used to reduce comparator kickback and provide AC ground</li>
          <li>-VDD used as VREF</li>
        </>
      )
    ],
    subsystems: [
      {
        id: "Strong_Arm",
        img: VCO_Control_Logic_Image,
        title: "Analog Comparator",
        description: "StrongARM Dynamic Latch used for comparison",
        detailedDescription: (
            <>
              <p>
                The Flash ADC uses dynamic StrongARM latch comparators to rapidly compare the analog control voltage against each reference threshold. The StrongARM architecture provides high-speed differential comparison while requiring no static power consumption, making it well suited for the multi-comparator architecture of the ADC.
              </p>

              <p>
                Each comparator uses a clocked evaluation phase to amplify the differential input and resolve the result into a full-swing digital output. The regenerative latch provides rapid decision-making and strong logic-level outputs, allowing the ADC to reliably generate the thermometer-coded control signals used to tune the VCO.
              </p>
            </>
          ),
        designNotes: [ (
            <>
              <li>-Traditional StrongARM latches uses only NMOS inputs. Since both the input and reference voltage range between 0 and VDD, complementary PMOS + NMOS inputs are used to increase sensing range. </li>

              <li>-Interestingly, the StrongARM latch is the first implemented system within VacQLock</li>
            </>
          )
        ],
      },
      {
        id: "ADC_Performance",
        img: ADC_Performance_Image,
        title: "ADC Simulation",
        description: "Conversion of Sine wave into 9-level thermometer",
        detailedDescription: (
            <>
              <p>
                Simulation demonstrating the conversion of an Analog sine input into 9-thermometer levels.
              </p>
            </>
          ),
        designNotes: [ (
            <>
              <li>-I cried when this worked</li>
            </>
          )
        ],
      },
    ],
  },
  {
    id: "LNA_Balun",
    img: LNA_Balun_Image,
    title: "LNA + Balun",
    description: "Low-Noise-Amplifier with Passive Balun integration for 20-30 GHz RF Front-End",
    detailedDescription: (
      <>
        <p>
          The LNA + Balun stage provides the critical first stage of amplification for the incoming RF signal. This system is comprised of three stages:
        </p>

        <p>
          <strong>Stage 1</strong> provides a 50 Ohm wideband match across the entire 20-30 GHz operation range. This ensures no signal power is reflected and RF performance remains consistent across the functional bandwidth.
        </p>

        <p>
          <strong>Stage 2</strong> drives an On-Chip transformer that converts a single-ended RF signal to differential routing. The On-Chip transformer is a simulated PCell granted by the UMC 28nm PDK.
        </p>

        <p>
          <strong>Stage 3</strong> amplifies the differential signal and drives the subsequent downconversion mixer.
        </p>

        <p>
          The combination of the three stages results in a simulated LNA that has the following specs:
            <li>80dBM signal sensing</li>
            <li>28dB of gain over functional bandwidth</li>
            <li>25dB of input reflection</li>
            <li>9dB of Noise Figure for 10 GHz spectrum</li>
        </p>
      </>
      ),
    designNotes: [(
      <>
        <li>Stage 1: Common-Gate Amplifier. Input resistance is set through transconductance of the input FET. Load set by PMOS current mirror</li>
        <li>Stage 2: Common-Source Amplifier. Gain stage meant to drive balun. Load set by PMOS current mirror</li>
        <li>Stage 3: Inverter-Based CMOS amplifier. Incoming RF signal is effectively small-signal making the amplifier reliable at linear amplification</li>
      </>
      ),
    ],
    subsystems: [
      {
        id: "S_Parameter",
        img: S_Parameter_Image,
        title: "S Parameters for LNA+Balun",
        description: "S-Parameter verification for LNA+Balun Performance",
        detailedDescription: (
            <>
              <li>Port 1: 50 Ohm Input</li>
              <li>Port 2: 500 Ohm Output</li>
            </>
          ),
        designNotes: [ (
            <>
              <li>S11 remains below -25dB over the entire 20-30 GHz spectrum. This translates to a near perfect 50 Ohm match across functional bandwidth.</li>
              <li>S21 is 28dB at 25 GHz with an operational bandwidth across the entire 20-30 GHz spectrum</li>
            </>
          ),
        ],
      },
      
    ],
  },
  {
    id: "Mixer_Stage",
    img: Mixer_Image,
    title: "Folded Gilbert Cell Mixer & Multiplier",
    description: "Analog Mixers & Multipliers",
    detailedDescription: (
      <>
        <p>
          The Folded Gilbert Cell topology is used extensively within the VacQLock system for frequency synthesizing as well as Analog multiplication. A folded topology was chosen to overcome the low voltage headroom that is intrinsic to the UMC 28nm CMOS process.
        </p>

        <p>
          Depending on device location within the VacQLock chain, both passive and active components are sized according to performance requirements. (bandwidth, conversion gain, isolation, etc.)
        </p>
      </>
    ),
    designNotes: [ (
      <>
        <li>Balanced Active topology reduces LO feedthrough</li>
        <li>Inductive Load on the Folded Node guides AC current from the NMOS differential pair towards the PMOS quad</li>
        <li>Gate-Biased NMOS output load facilitates high conversion gain and prevents floating output node</li>
        <li>Tail FET on NMOS differential pair provides Common-Mode feedthrough</li>
      </>
    )
    ],
    subsystems: [
      {
        id: "Multiplier",
        img: Multiplier_Image,
        title: "Folded Gilbert Cell Multiplier",
        description: "Multiplier variant that includes CMFB",
        detailedDescription: (
          <>
            <p>
              The distinction between the Folded Gilbert Cell Mixer and Multiplier depends on the DC biasing of the PMOS quad. Should the quad inputs be biased such that V_oV = 0, then the topology functions as a commutating mixer. Should the quad be biased into saturation (V_oV >= 0), then the topology acts as a multiplier.
            </p>
          </>
        ),
        designNotes: [(
            <>
              <li><strong>Mixer:</strong> PMOS quad becomes amplitude insensitive if the input waveform switches the FETs strongly ON and OFF. This behavior is exploited with the 19-29 GHz VCO to normalize conversion gain across the entire band</li>
              <li><strong>Multiplier:</strong> PMOS quad becomes amplitude sensitive. This is feature is used within the baseband Phase-Locked Loop and Frequency-Locked Loop where amplitude information is important for producing feedback error terms</li>
              <li><strong>CMFB</strong> is used for mixers and multipliers at baseband frequencies. This is because AC coupling capacitors cannot be used at baseband (DC) frequencies. Therefore, CMFB is used to enforce the common DC operating point used by all baseband systems</li>
            </>
          ),
        ],
      },
    ],
  },
  {
    id: "GM-C Filters",
    img: Bandpass_Image,
    title: "Filters",
    description: "Various GM-C Filters used within VacQLock",
    detailedDescription: (
      <>
        <p>
          For signal processing, VacQLock uses Gm-C filters to provide frequency-selective filtering without relying on large on-chip inductors. By combining transconductance (Gm) cells with capacitors in different configurations, filter responses such as Chebyshev, Biquad, and Butterworth can be implemented.
        </p>
        <p>
          Gm-C filters are used extensively throughout the IF and IQ demodulation stages. Compared with traditional LC filters, their use of active transconductance elements significantly reduces the area and inductance requirements of the filter. The filter's frequency response is primarily determined by the ratio of Gm to capacitance, allowing the required capacitance to be reduced by increasing the available Gm. This provides a compact and tunable approach to implementing the receiver's baseband and IF filtering requirements.
        </p>
      </>
    ),
    designNotes: [ (
        <> 
          <li>To operate on 1 GHz signals, Gm cells are specifically tested and designed to have operation bandwidths that extend beyond 2 GHz.</li>
          <li>All nodes of GM-C filter systems have enforced DC-operating points set by CMFB tuned to a reference voltage of 600mV</li>
          <li>Frequency behavior shaped through capacitor (C) tuning. Behavior verified using DFT analysis</li>
          <li>GM-C Filters are estimated to have smaller layout space requirements than On-Chip LC filters, at the cost of higher system complexity and power consumption</li>
        </>
      )
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
    img: Costas_Image,
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

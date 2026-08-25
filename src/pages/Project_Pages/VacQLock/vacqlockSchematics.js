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
import BandPass_Simulation_Image from "../../../assets/images/Bandpass_Simulation.png";
import IQ_Demodulator_Cadence_Image from "../../../assets/images/IQ_Demodulator_Cadence.png";
import Cleaned_IQ_Image from "../../../assets/images/Cleaned_IQ.png";
import Transient_Image from "../../../assets/images/Transient_Lock.png";
import PLL_FLL_Waveform_Image from "../../../assets/images/PLL_FLL_Waveform.jpg";
import Raw_IQ_Image from "../../../assets/images/Raw_IQ.png";
import Differentiator_Image from "../../../assets/images/Differentiator Schematic.jpg";
import Signum_Image from "../../../assets/images/Signum Schematic.jpg";
import Loop_Filter_Image from "../../../assets/images/Loop Filter.jpg";
import Ring_VCO_Image from "../../../assets/images/Ring_VCO.jpg";
import Ring_Amp_Image from "../../../assets/images/Ring_Amp.jpg";
import Three_Current_Mirror_Image from "../../../assets/images/ThreeMirror.jpg";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

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
              The distinction between the Folded Gilbert Cell Mixer and Multiplier depends on the DC biasing of the PMOS quad. Should the quad inputs be biased such that V_oV = 0, then the topology functions as a commutating mixer. Should the quad be biased into saturation (V_oV &gt;= 0), then the topology acts as a multiplier.
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
        description: "IF Stage Filter",
        detailedDescription: (
          <>
            <p>
              The IF stage bandpass filter is implemented through a 6th-Order Butterworth Gm-C filter. This system topology utilizes Gm-C cells in the gyrator configuration that emulates the transfer function of a shunt inductor. This allows the system to have the sharp frequency selectivity of a traditional LC-based butterworth filter, without the use of large and potentially unreliable On-Chip inductors
            </p>
          </>
        ),
        designNotes: [ (
            <>
              <li>A total of 14 Gm cells are used. Each Gm cell draws about 950uA of static current, equating to a total static current draw below 14mA</li>
              <li>Passband is designed to have a bandwidth of 400 MHz centered about 1 GHz</li>
              <li>Gm cells have independent CMFB to enforce 600mV DC operating point</li>
              <li>Filter has linear range of 80mV centered about 600mV</li>
            </>
          )
        ],
        subsystems: [
          {
            id: "Bandpass_Simulation",
            img: BandPass_Simulation_Image,
            title: "Bandpass Filter Simulation",
            description: "Simulated frequency response of the 1 GHz bandpass filter",
            detailedDescription: (
              <>
                <p>
                  Simulation results for the 1 GHz bandpass filter, showing the desired 400 MHz passband centered about 1 GHz
                </p>
              </>
            ),
            designNotes: [ (
              <>
                <li>Frequency response shaped and verified using AC analysis</li>
              </>
              )
            ],
          },
        ],
      },
      {
        id: "LowPass_Filter",
        img: LowPass_Image,
        title: "Lowpass Filter",
        description: "Lowpass Filter used in IQ demodulation",
        detailedDescription: (
          <>
            <p>
              VacQLock is designed to operate on a channel bandwidth of 400 MHz, the largest available bandwidth on current commercial 5G systems. Because the system features IQ demodulation and thus image rejection, the lowpass filter can be tuned around a 200 MHz bandwidth rather than the entire 400 MHz bandwidth.
            </p>

            <p>
              The Gm-C Lowpass filter is implemented by a 8th-Order Biquad Filter consisting of two identical 4th order Biquad filters
            </p>
          </>
        ),
        designNotes: [ (
            <>
              <li>A total of 8 Gm cells are used. Each Gm cell draws about 950uA of static current, equating to a total static current draw below 8mA</li>
              <li>Identical 4th-Order Biquads are used to produce an 8th-Order Filter. 8 capacitors are individually tuned to shape frequency response</li>
              <li>Gm cells have independent CMFB to enforce 600mV DC operating point</li>
              <li>Filter has linear range of 80mV centered about 600mV</li>
            </>
          )
        ],
      },
      {
        id: "Gm_Cell",
        img: OTA_Image,
        title: "Operational Transconductance Amplifier",
        description: "Gm Cell used within VacQLock filters",
        detailedDescription: (
          <>
            <p>
              The Operational Transconductance Amplifier (OTA) is the fundamental building block for the VacQLock filters. While OTAs can be implemented using various topologies as all OTAs work on the basis of converting an input voltage to output current. For simplicity, the topology chosen for the OTA was a simple differential pair with reference-based Common-Mode Feedback
            </p>
          </>
        ),
        designNotes: [ (
            <>
              <li>
                The OTA cell is designed to draw around 950uA of static current. While current consumption and power could theoretically be reduced, it was kept at 950uA in concerns with OTA bandwidth under PVT.
              </li>
              <li>Active PMOS loads are used to facilitate Common-Mode Feedback</li>
              <li>Common Mode sensing is performed using NMOS transistors with high input resistance</li>
              <li>CMFB is designed to enforce the output voltage to be equal to the reference voltage: 600mV</  li>
            </>
          )
        ],
      },
    ],
  },
  {
    id: "PLL_FLL",
    img: Costas_Image,
    title: "PLL & FLL",
    description: "Costas-based Phase and Frequency Locked Loop",
    detailedDescription: (
      <>
        <p>
          The Costas-based FLL/PLL is arguably the most important system of VacQLock for it provides carrier recovery and compensates for frequency error and phase drift introduced by the 19-29 GHz RF VCO and subsequent heterodyne signal chain. Because the 19-29 GHz cannot guarentee an exact frequency, the resulting IF may deviate from the nominal 1 GHz target:
        </p>

        <BlockMath math="f_{IF} = f_{RF} - f_{LO1}" />

        <p>
          Any deviation in the 19-29 GHz VCO therefore produces a corresponding IF error:
        </p>

        <BlockMath math="\delta f = f_{IF} - 1\,\mathrm{GHz}" />

        <p>
          As a system targeting 5G communication and beyond, VacQLock must operate on complex-valued signals containing both in-phase and quadrature components. This creates ambiguity for conventional PLL phase detectors: at certain phase relationships, the detector output can approach zero even when the carrier is not correctly aligned. A conventional charge-pump PLL can therefore lose a reliable error signal and potentially lose lock.
        </p>

        <p>
          Therefore VacQLock employs the use of Costas-based architecture, with the combination of a Frequency-Locked Loop (FLL) for coarse frequency correction and a Phase-Locked Loop (PLL) for fine phase tracking.
        </p>

        <p>
          The Costas detector first generates in-phase and quadrature components,
          <InlineMath math="I(t)" /> and <InlineMath math="Q(t)" />, from the incoming IF signal:
        </p>

        <BlockMath math="I(t) = A\cos(\phi_e), \qquad Q(t) = A\sin(\phi_e)" />

        <p>
          VacQLock uses analog multipliers to form the I/Q products required for carrier-error
          detection. The PLL error is derived from the multiplication between I and Q components:
        </p>

        <BlockMath math="e_{PLL} \propto I(t)Q(t)" />

        <p>
          The FLL extends this concept by using the time-varying behavior of the I/Q signals.
          Its frequency-error detector is proportional to the cross-product of the I/Q signals
          and their derivatives:
        </p>

        <BlockMath math="e_{FLL} \propto I'(t)Q(t) - I(t)Q'(t)" />

        <p>
          As the derivative of phase corresponds to instantaneous frequency,
        </p>

        <BlockMath math="\Delta\omega_e = \frac{d\phi_e}{dt}" />

        <p>
          This allows the two feedback paths to perform complementary stages of carrier recovery: the FLL establishes coarse frequency alignment while the PLL refines the remaining phase error.
        </p>

        <p>
          The error signals are generated entirely in the analog domain. I/Q products are produced
          using analog multipliers, followed by differential amplification. Differential-to-single-
          ended current subtractors then combine the amplified differential signals to produce the
          corresponding FLL and PLL error currents.
        </p>

        <p>
          A key feature of this architecture is the weighting of the FLL and PLL error paths. The FLL error current is first passed through a 10 MHz bandwidth loop filter, establishing a tuning bias for the VCO. The filtered FLL correction is then combined with raw PLL error currents:
        </p>

        <BlockMath math="I_{CTRL} = I_{FLL,\ filtered} + I_{PLL}" />

        <p>
          The combined current is then passed through a final 5 Mhz bandwidth loop filter before driving the ring VCO. This allows the FLL to establish coarse operating frequency before the PLL begins making fine phase corrections.
        </p>

        <BlockMath math="\text{FLL Acquisition} \rightarrow \text{Coarse Frequency Lock} \rightarrow \text{PLL Phase Lock}" />


        <p>
          The combined Costas PLL/FLL provides approximately 200 MHz of frequency capture range with a target lock time of approximately 5 µs. By closing the feedback loop around the actual receiver output, the architecture actively compensates for frequency drift and phase noise from the wideband 20–30 GHz VCO, rather than relying on an idealized oscillator frequency. This enables reliable baseband downconversion across the full 20–30 GHz operating range.
        </p>
      </>
    ),
    designNotes: [ (
      <>
        <li>A FLL + PLL architecture was chosen due to the potentially large frequency uncertainty of the 19-29 GHz VCO.If the VCO had small frequency uncertainty, then only a PLL should be suitable for carrier recovery</li>
        <li>FLL bandwidth is explicitly larger than the PLL bandwidth so frequency acquisition occurs before fine phase correction</li>
        <li>The first iteration of the FLL/PLL used a conventional charge-pump feedback architecture. This approach ultimately proved unsuitable for VacQLock because the feedback signal contains QPSK information rather than a clean, deterministic carrier. The phase detector could therefore encounter ambiguous or degraded error information as the I/Q content changed, causing the loop to lose lock. This limitation motivated the transition to Costas-based architecture.</li>
      </>
      )
    ],
    subsystems: [
      {
        id: "PLL_FLL_Simulations",
        img: PLL_FLL_Waveform_Image,
        title: "PLL + FLL Simulations",
        description: "Various Demonstrations of the FLL + PLL and IQ Demodulation",
        detailedDescription: (
          <>
            <p>
              This simulation alone, signified the completion of the VacQLock project. This transient simulation was performed connecting the entire VacQLock chain from start-to-finish. As expected, the 19-29 GHz VCO has frequency drift, however, the FLL+PLL system is able to detect this shift and change the IF phase and frequency until the system "locks". A system lock is shown when the feedback FLL+PLL waveform stops rising and plateaus at a lock level.
            </p>
          </>
        ),
        designNotes: [ (
            <>
              <li>
                The FLL acquires lock around 5µs. The PLL acquires phase lock around 5.6us.
              </li>
              <li>Feedback bias sits at midrail (510mV)</li>
            </>
          )
        ],
        subsystems: [
          {
            id: "Transient_Lock",
            img: Transient_Image,
            title: "Signal Lock (Time-Domain)",
            description: "In-Phase signal undergoing phase correction",
            detailedDescription: (
              <>
                <p>
                    This simulation shows the demodulated In-Phase signal using an ideal periodic IF source offset 5 MHz above the nominal 1 GHz frequency (1.005 GHz). The purpose of this simulation is to demonstrate the PLL’s fine-phase correction once the FLL has brought the VCO close to the target frequency.
                </p>

                <p>
                  When the FLL is still far from lock, the In-Phase signal exhibits significant amplitude oscillations due to the frequency difference between the IF source and the VCO. As the FLL approaches the target frequency, these oscillations disappear, but the signal amplitude continues to vary due to the remaining phase error. The PLL then performs fine phase correction, progressively reducing the amplitude variation until the In-Phase signal reaches a stable, constant amplitude, indicating that both frequency and phase have been locked.
                </p>
              </>
            ),

          },
          {
            id: "Raw_IQ",
            img: Raw_IQ_Image,
            title: "Raw_IQ Demodulation",
            description: "Raw IQ Demodulation without post-processing",
            detailedDescription: (
              <>
                <p>
                    This simulation shows the demodulated In-Phase (Green) and Quadrature-Phase (Magenta) waveforms after passing through the complete VacQLock receiver chain. Because VacQLock performs carrier recovery entirely in the analog domain, some In-Phase energy inevitably appears on the Quadrature-Phase channel and vice versa. However, after post-processing and appropriate thresholding, the In-Phase and Quadrature-Phase waveforms recover completely independent symbol streams. This demonstrates that VacQLock is capable of successfully performing complex demodulation despite the inherent channel coupling introduced by analog carrier recovery.
                </p>

              </>
            ),

          },
          {
            id: "Cleaned_IQ",
            img: Cleaned_IQ_Image,
            title: "Input IQ Signal",
            description: "Input",
            detailedDescription: (
              <>
                <p>
                    This simulation shows the input In-Phase (Green) and Quadrature-Phase (Magenta) signal. Using Cadence Virtuoso's RFlib, a test IQ modulator is used to produce a 20-30 GHz signal at -80dBm. This signal is then fed into the receiver for testing purposes.
                </p>

              </>
            ),

          }

        ]
      },
      {
        id: "ThreeMirror",
        img:  Three_Current_Mirror_Image,
        title: "3-Current Mirror OTA",
        description: "3-Current Mirror OTA used for various PLL+FLL applications",
        detailedDescription: (
          <>
            <p>
              The 3-current-mirror OTA provides the primary differential-to-single-ended conversion
              within the Costas FLL/PLL. The topology was selected to establish a nominal
              <strong> 500 mV mid-rail output</strong> for the subsequent loop-filter and varactor-control
              stages. Complementary NMOS and PMOS current-mirror paths provide push-pull output control,
              allowing positive and negative differential error signals to be represented symmetrically
              around the mid-rail operating point.
            </p>

            <p>
              Beyond differential-to-single-ended conversion, the topology also enables
              <strong> current-mode summation and subtraction</strong> of the Costas error terms, making it
              central to forming the FLL and PLL feedback signals:
            </p>

            <BlockMath math="e_{FLL} \propto I'(t)Q(t)-I(t)Q'(t)" />

            <p>
              This allows the differential error products to be converted, amplified, and combined directly
              in the current domain before entering the loop-filter stages.
            </p>
          </>
        )
      },
      {
        id: "Signum",
        img:  Signum_Image,
        title: "Signum Amplifier",
        description: "Signum Amplifier used for error term production",
        detailedDescription: (
          <>
            <p>
              Using the three-current-mirror OTA, it was found that a differential voltage could be
              hard-limited by performing differential-to-single-ended conversion with opposing output
              polarities and reconstructing the differential signal. Due to the voltage-to-current
              behavior of the OTA and the attached load, sufficiently large differential inputs drive
              the output into saturation, effectively producing a <strong> signum response</strong>:
              the output is determined primarily by the polarity of the differential input rather than
              its amplitude.
            </p>

            <p>
              This behavior proved particularly useful for generating the Costas error terms. Instead
              of directly multiplying the I/Q signals, the hard-limited signals can be used to form
              amplitude-insensitive error terms:
            </p>

            <BlockMath math="e_{PLL} \propto \operatorname{sgn}(I(t))Q(t)-\operatorname{sgn}(Q(t))I(t)" />

            <p>
              Removing the amplitude dependence of one component prevents variations in the magnitude
              of the received I/Q signal from disproportionately affecting the feedback loop. This is
              particularly important for practical, non-periodic IQ signals, where amplitude
              variations could otherwise cause the FLL/PLL to overreact and lose lock.
            </p>

            <p>
              The resulting behavior makes the carrier-recovery loop more analogous to the
              <strong> decision-based behavior of a charge-pump loop</strong>: the feedback responds
              primarily when the relative polarity of the signals indicates that correction is
              required, rather than continuously scaling the correction with signal amplitude.
            </p>
          </>
        )
      },
      {
        id: "Differentiator",
        img:  Differentiator_Image,
        title: "Differentiator",
        description: "Differentiator used for error term production",
        detailedDescription: (
          <>
            <p>
              The FLL requires the time derivative of the I/Q signals to generate its frequency-error
              term. A conventional analog differentiator would typically be implemented around a
              dedicated operational amplifier; however, developing a full-scale op-amp was outside
              the project's schedule and would have introduced unnecessary circuit complexity.
            </p>

            <p>
              Instead, the existing <strong>3-current-mirror OTA</strong> was repurposed as the active
              element of an analog differentiator. When configured with the appropriate resistive and
              capacitive feedback network, the OTA reproduced the desired differentiating behavior,
              albeit with the bandwidth and non-idealities of the underlying OTA.
            </p>

            <p>
              AC analysis was used to characterize the differentiator and select the required
              resistance and capacitance values. The network was specifically tuned to provide
              differentiating behavior across the approximately <strong>200 MHz</strong> frequency
              range relevant to the FLL feedback signal, rather than attempting to realize an ideal
              derivative over an unlimited bandwidth.
            </p>

            <p>
              The resulting band-limited OTA differentiator provides the derivative signals required
              for frequency-error detection. Combined with the signum limiting stage, the FLL error
              terms are formed as:
            </p>

            <BlockMath math="e_{FLL} \propto \operatorname{sgn}(I'(t))Q(t)-\operatorname{sgn}(Q'(t))I(t)" />

            <p>
              This approach allowed VacQLock to implement the required frequency-error detector while
              reusing an existing OTA architecture, avoiding the additional design and verification
              overhead of a dedicated high-bandwidth op-amp.
            </p>
          </>
        ),
        designNotes: [ (
            <>
              <li>Positive terminal is attached to a reference voltage of 600mV. This is analogous to attaching the positive terminal of an OP-AMP to GND</li>
            </>
          )
          
        ]
      },
      {
        id: "IQ_Demodulator_Cadence",
        img: IQ_Demodulator_Cadence_Image,
        title: "IQ Demodulator on Cadence",
        description: "Cadence Implementation",
        detailedDescription: (
          <>
            <p>
              The IQ demodulator converts the recovered 1 GHz IF into baseband In-Phase (I) and
              Quadrature (Q) components. The common IF signal is first buffered using
              <strong> source followers</strong>, which provide isolation from the preceding filter while
              simultaneously level-shifting the signal to the appropriate common-mode voltage for the
              mixers.
            </p>

            <p>
              The buffered IF is then split into I and Q paths using
              <strong> Folded Gilbert Cell mixers</strong>, driven by the quadrature outputs of the 1 GHz
              Ring VCO. The mixers are optimized for 1 GHz downconversion, producing the corresponding
              baseband I and Q components.
            </p>

            <p>
              Each mixer output is passed through a <strong>200 MHz Gm-C low-pass filter</strong> to
              remove high-frequency mixing products while preserving the desired baseband signal.
              Feedback for the Costas FLL/PLL is taken directly after these filters, allowing carrier
              recovery to operate on the actual demodulated signal.
            </p>

            <p>
              Following the feedback tap, the filtered I and Q signals are buffered to provide isolated
              outputs for the final baseband interface and measurement.
            </p>
          </>
        )
      }

    ]
  },
  {
    id: "Ring_VCO",
    img: Ring_VCO_Image,
    title: "1 GHz Ring VCO",
    description: "1 GHz Ring VCO used in IQ Demodulator",
    detailedDescription: (
      <>
        <p>
          The 1 GHz Ring VCO generates the local oscillator required for the final IQ demodulation
          stage. Because the mixers require differential LO signals, the oscillator is implemented
          using <strong> current-mode logic (CML)</strong>. Each differential inverter consists of a
          differential NMOS pair with PMOS loads, providing differential gain and the polarity
          inversion required for ring oscillation.
        </p>

        <p>
          Load capacitors establish the nominal oscillation frequency, while voltage-controlled
          capacitors (varactors) provide frequency tuning. The control signal generated by the
          Costas FLL/PLL therefore adjusts the VCO frequency to compensate for the residual
          frequency and phase error in the recovered carrier.
        </p>

        <p>
          The ring topology also provides a convenient method for generating the quadrature LO
          signals required by the IQ demodulator. Each inverter stage introduces approximately
          45° of phase progression at the nominal oscillation frequency. Tapping the oscillator
          after two stages therefore produces an approximately 90° phase-shifted
          <strong> Quadrature (Q)</strong> signal, while tapping after four stages provides the
          <strong> In-Phase (I)</strong> signal.
        </p>

        <p>
          By reversing the polarity of the final differential stage, the required 360° phase
          progression can be realized using only four inverter stages, reducing the number of
          active devices while maintaining the required differential I/Q relationship.
        </p>
      </>
    ),
      subsystems: [
        {
        id: "Ring_Amp",
        img: Ring_Amp_Image,
        title: "Ring Amplifier",
        description: "Current-Mode NOT gate",
        detailedDescription: (
            <>
              <p>
                The ring amplifier implements the current-mode differential inverter used throughout the
                1 GHz Ring VCO. The topology uses a simple <strong>differential pair with active loads </strong>
                to provide differential gain and polarity inversion while maintaining the current-mode
                operation required by the oscillator.
              </p>

              <p>
                A differential load capacitor controls the phase progression between stages and therefore
                directly influences the oscillator's total frequency. The active loads and differential
                pair tail are controlled through global PMOS and NMOS bias voltages, allowing the same bias
                signals to be shared across oscillator stages and significantly reducing the area required
                for local bias circuitry.
              </p>
            </>
          )
        }
      ]
  },
];

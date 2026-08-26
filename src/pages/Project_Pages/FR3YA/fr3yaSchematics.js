import biasLayout from "../../../assets/images/Bias_Layout.png"
import biasSchematic from "../../../assets/images/Bias_Schematic.png"
import PolaritySwitchCircuit from "../../../assets/images/FR3YA_Circuit.png"
import FR3YA_Real from "../../../assets/images/FR3YA_REAL.png"
import phaseShifter from "../../../assets/images/Phase_Shifter_Layout.png"
import fullLayout from "../../../assets/images/Vector_Modulated_Phase_Shifter.png"

export const schematics = [
  {
    id: "realFR3YA",
    img: FR3YA_Real,
    title: "Physical FR3YA RFIC",
    description: "Physical Die for the FR3YA RFIC",
    detailedDescription: "Physical 4mm x 4mm die for the FR3YA RFIC",
    designNotes: [],
  },
  {
    id: "biasLayout",
    img: biasLayout,
    title: "Bias Layout",
    description: "Bias Layout and accompanying schematic",
    detailedDescription: 
        <>
            <p>
            The FR3YA bias network generates the operating currents required by the active circuitry
            using an external voltage and current reference. A combination of
            <strong> cascode stages and current mirrors</strong> distributes the reference currents
            throughout the RFIC while maintaining the required bias conditions across the various
            circuit blocks.
            </p>

            <p>
            Because the bias network operates at relatively low frequencies, its layout was less
            sensitive to high-frequency parasitics than the signal path. Layout was therefore
            optimized primarily for <strong>clean routing, compact transistor placement, and
            reduced reliance on lower metal layers</strong>. Long-distance power and bias
            connections were routed through the thick top-metal layers to reduce resistance while
            distributing bias across the active circuitry.
            </p>
        </>,
    designNotes: [
        <>
            <p>
                The fabricated bias network produced clean and consistent bias currents; however,
                routing around the power-distribution network became congested due to an early
                miscommunication regarding power-supply placement. While this did not significantly
                impact system performance, the experience highlighted the importance of
                <strong> floorplanning and power-distribution planning early in the layout process</strong>,
                particularly when multiple system blocks share centralized bias and supply resources.
            </p>
        </>
    ],
    subsystems: [
        {
            id: "biasSchematic",
            img: biasSchematic,
            title: "Bias Schematic",
            description: "Original Schematic for Bias Layout",
            detailedDescription:
                <>
                    <p>
                    The final bias-supply schematic was designed with additional expansion points to
                    accommodate future bias requirements. Rather than optimizing exclusively for the
                    initial specification, the architecture was structured so that additional bias
                    branches could be added with minimal modification to the existing circuitry.
                    </p>

                    <p>
                    This flexibility proved useful during development as additional bias lines were
                    introduced after the initial design. The modular architecture allowed these new
                    supplies to be incorporated without requiring a substantial redesign of the
                    underlying bias network.
                    </p>
                </>
        }
    ]
  },
    {
    id: "fullLayout",
    img: fullLayout,
    title: "Full Phase Shifter Layout",
    description: "Full layout with ownership annotated",
    detailedDescription:
        <>
            <p>
                Full Vector-Modulated Phase Shifter layout. From left to right, a single-ended RF signal is passed through a Lange Coupler. This converts the signal into an I and Q branch. On each branch, an active balun converts the single-ended signal to a differential signal. This differential signal is then passed into a variable gain amplifier and polarity switch. After, the I and Q branch is combined using a wilkinson power combiner, thus outputting a differential, phase shifted signal.
            </p>
        </>,
    subsystems: [
          {
            id: "phaseShifter",
            img: phaseShifter,
            title: "Single Branch Phase Shifter",
            description: "Single (I/Q) Branch Phase Shifter",
            detailedDescription:
            <>
                <p>
                    Layout ownership annotated with red boxes
                </p>
            </>
        },
        {
            id: "PolaritySwitchCircuit",
            img: PolaritySwitchCircuit,
            title: "Polarity Switch Schematic",
            description: "Polarity Switch Schematic used for layout",
            detailedDescription:
            <>
<p>
  The <strong>polarity switch</strong> was the primary circuit block under my ownership in
  FR3YA. The system uses a 1-bit digital control signal to select between positive and
  negative signal polarity. A series of <strong>passgates</strong> routes the input through
  either a non-inverting source-follower path or an inverting differential-amplifier path.
</p>

<p>
  When the inversion path is selected, the differential amplifier produces a
  <strong> 180° phase reversal</strong>. Phase-compensation capacitors were incorporated
  into the amplifier to control its phase response, while its gain was tuned to match the
  approximately unity gain of the source-follower path. This ensured that switching
  polarity changed the phase of the signal without introducing a significant amplitude
  discontinuity.
</p>

<p>
  A significant portion of the design effort focused on <strong>post-layout optimization</strong>.
  The physical geometry of the passgates, source follower, and differential amplifier was
  iteratively modified alongside the placement of capacitors and biasing resistors.
  Extracted-layout simulations were used to identify and compensate for parasitic effects
  introduced by the physical implementation.
</p>

<p>
  The block also served as a practical environment for developing
  <strong> tunable and reusable RFIC layout techniques</strong>. I incorporated layout
  "tuning knobs" that allowed component values and physical geometries to be modified
  without restructuring the entire block, making later performance optimization
  significantly easier. The layout was also designed with additional routing and
  connectivity options to facilitate integration with neighboring system blocks and
  future revisions.
</p>

<p>
  Additional layout techniques included <strong> PVT-aware routing, controlled
  interconnect geometry, consistent grounding, meandered signal paths, and
  common-centroid transistor matching</strong>. These techniques helped minimize
  mismatch, parasitic variation, and coupling while preserving the intended schematic
  behavior after extraction.
</p>

<p>
  This block also marked the point at which I became proficient in the complete
  <strong> DRC, LVS, and PEX workflow</strong>. Through repeated layout, extraction,
  simulation, and debugging iterations, I developed enough familiarity with physical
  verification to independently diagnose and resolve layout issues and explain the
  workflow to other researchers. This experience ultimately allowed me to
  <strong> train other undergraduate researchers and assist senior members of the
  research team</strong> with Cadence physical verification.
</p>
            </>
        },
    ]
  },
];

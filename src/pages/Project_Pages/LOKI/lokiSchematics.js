import lokiReal from "../../../assets/images/LOKI_REAL.png";
import GND from "../../../assets/images/GND.png";
import M1_M9 from "../../../assets/images/M1_M9.png"
import HFSS_Cadence from "../../../assets/images/HFSS_Cadence.png"
import Pallet_Tiles from "../../../assets/images/Pallet_Tiles.png"
import THRU_Diagonal from "../../../assets/images/Diagonal_THRU.png"
import THRU_Arc from "../../../assets/images/Arc_Thru.png"
import THRU from "../../../assets/images/THRU.png"
import Load from "../../../assets/images/Load.png"
import Open from "../../../assets/images/Open.png"
import HighLoad from "../../../assets/images/High_Frequency_Thru.png"
import Short from "../../../assets/images/Short.png"

export const schematics = [
  {
    id: "Real_LOKI",
    img: lokiReal,
    title: "Physical LOKI RFIC",
    description: "Physical image of LOKI RFIC",
    detailedDescription: "Physical 4mm x 4mm LOKI dye",
    designNotes: [],
  },
  {
    id: "Calibration_Standards",
    img: Short,
    title: "Calibration Standards",
    description: "Various Calibration Structures used on the LOKI RFIC",
    detailedDescription: 
        <>
            <p>
            LOKI's RF calibration structures are constructed from a library of
            <strong>custom-designed layout tiles</strong>. Individual tiles implement specific
            metal and via geometries, while combinations of these tiles form the complex
            structures required for the on-chip calibration standards.
            </p>    
        </>,
    subsystems: [
        {
            id: "Short",
            img: Short,
            title: "Short",
        },
        {
            id: "Open",
            img: Open,
            title: "Open"
        },
        {
            id: "Load",
            img: Load,
            title: "Load"
        },
        {
            id: "THRU",
            img: THRU,
            title: "THRU"
        },
        {
            id: "THRU_Diagonal",
            img: THRU_Diagonal,
            title: "THRU Diagonal"
        },
        {
            id: "THRU_Arc",
            img: THRU_Arc,
            title: "THRU ARC"
        },
        {
            id: "HighLoad",
            img: HighLoad,
            title: "High Frequency Load"
        },
    ]

  },
  {
    id: "HFSS_Cadence",
    img: HFSS_Cadence,
    title: "HFSS to Cadence Workflow",
    description: "HFSS calibration standards and equivalent Cadence representations",
    detailedDescription: 
        <>
            <p>
            RF calibration structures are first designed and validated in
            <strong> Ansys HFSS</strong>, where full-wave EM simulation can accurately
            capture their behavior at mm-wave frequencies. Once a structure is validated,
            its geometry is translated into Cadence Virtuoso using custom layout tiles designed
            to satisfy UMC 28&nbsp;nm DRC requirements.
            </p>

            <p>
            These tiles are optimized to preserve RF performance within the constraints of the
            CMOS metal stack. Dense via arrays maximize vertical conductivity between metal
            layers, while an alternating square-and-cross pattern is used across
            successive layers (M1: square, M2: cross, M3: square, etc.) to provide low-resistance
            connections while limiting parasitic capacitance.
            </p>
        </>,
    designNotes: [],
    subsystems: [
        {
            id: "M1_M9",
            img: M1_M9,
            title: "M1_M9 Metal Tile",
            description: "Tile used for bringing GND up to M9",
            detailedDescription:
                <>
                    <p>
                    To establish the RF reference for each calibration structure, continuous
                    <strong>RF ground walls</strong> are built around the structure. The M1–M9 tile
                    vertically connects the full CMOS metal stack using dense via arrays, creating a
                    continuous low-impedance ground boundary while improving isolation between adjacent
                    RF structures.
                    </p>
                </>
        },
        {
            id: "GND_Tile",
            img: GND,
            title: "GND Tile",
            description: "Tile used for calibration GND",
            detailedDescription:
                <>
                    <p>
                        To establish a low-impedance RF ground, a dense square-and-cross metal pattern
                    is implemented across M1 and M2. The overlapping metal geometry increases the effective
                    conductor width and provides multiple parallel current paths, creating a sufficiently
                    robust ground structure for the calibration standards.
                    </p>
                </>
        },
        {
            id: "Picasso",
            img: Pallet_Tiles,
            title: "Pallet of Tiles",
            description: "Various tiles used to create calibration structures",
            detailedDescription:
                <>
                    <p>
                        Various tilesets used to design large calibration structures. All various shapes are saved on a dedicated "Palette" cellView, where tilesets are copied and pasted as needed.
                    </p>
                </>

        },
    ]
  },
];

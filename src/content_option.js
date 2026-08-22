import VacQLockImage from "./assets/images/VacQLockImage.jpg";
import FR3YAImage from "./assets/images/FR3YA.png";
import LOKIImage from "./assets/images/LOKI.png";
import MEImage from "./assets/images/Brenden_Jojo.png";

const logotext = "Brenden";
const meta = {
    title: "Brenden Ngai",
    description: "I'm Brenden A. Ngai, an aspiring Electrical Engineer with a passion for semiconductor technology and a strong foundation in hardware design.",
};

const introdata = {
    title: "I’m Brenden Ngai",
    animated: {
        first: "Aspiring Electrical Engineer",
        second: "Silicon Enthusiast",
        third: "Good Things Come in Microelectronic Packages",
    },
    description: "",
    your_img_url: MEImage,
};

const dataabout = {
    title: "About Myself",
    aboutme: ''
};


/*const worktimeline = [{
        jobtitle: "Undergraduate Researcher",
        where: "NYU Wireless",
        date: "2026",
    },
    {
        jobtitle: "Electrical Engineer Intern",
        where: "Turner Construction Company",
        date: "2024",
    },
]; */

const skills = [{
        name: "Analog / Mixed Signal IC Design",
        value: 80,
    },
    {
        name: "RFIC & High Frequency Circuit Design",
        value: 80,
    },
    {
        name: "Circuit Simulation & Design Tools",
        value: 80,
    },
    {
        name: "Python / Programming",
        value: 60,
    },
    {
        name: "Full Custom Layout & Physical Verification",
        value: 70,
    },
];



const dataportfolio = [{
        img: VacQLockImage,
        description: "VacQLock: A 20-30 GHz Mixed-Signal Heterodyne Receiver RFIC",
        link: "/project/vacqlock",
    },
    {
        img: VacQLockImage,
        description: "FR3YA: A 24 GHz Vector-Modulated Phase Shifter RFIC",
        link: "#",
    },
    {
        img: VacQLockImage,
        description: "LOKI: sub-THz 4-Port Orthognal Calibration Standard IC",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "ngaibr22@gmail.com",
    YOUR_FONE: "(917)-593-6885",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/ngaibr22",
    linkedin: "https://www.linkedin.com/in/thengaiguy/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    //worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
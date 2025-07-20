import dayjs from "dayjs";
import { GITHUB_URL, LINKEDIN_URL } from "./index";

const MOTD_OUTPUT = `
      <p class="sm_txt">
          Welcome to <a href="https://hariprasath10.netlify.app/" target="_blank" class="sm_link">https://hariprasath10.netlify.app/</a>
        </p>
        <br />
        <p class="sm_txt">
          Github:
          <a href=${GITHUB_URL} class="sm_link" target="_blank">
            ${GITHUB_URL}
          </a>
        </p>
        <p class="sm_txt">
          LinkedIn:
          <a href=${LINKEDIN_URL} class="sm_link" target="_blank">
            ${LINKEDIN_URL}
          </a>
        </p>
        <br />
        <p class="sm_txt">
          Hello, I'm <span class="sm_txt_bold">Hari Prasath</span>, a
          <span class="sm_txt_bold">MERN full-stack developer</span>
          dedicated to creating innovative web solutions that engage users and
          drive results.
        </p>

        <br />

        <p class="sm_txt">
          Type <span class="sm_txt_bold">'help'</span> to see the available
          commands
        </p>

        <br />`;

const HELP_OUTPUT = `<p class="sm_txt">
          Usage: [command]
        </p>
        <br />
        <p class="sm_txt">
          about, clear, date, education, email, github, help, linkedin, love, motd, 
          phone, projects, skills, workexperience
        </p>
         <br />
        `;

const ABOUT_OUTPUT = `<p class="sm_txt">Hello, root!</p>
        <br />
        <p class="sm_txt">
          Hi! I am <span class="sm_txt_bold">Hari Prasath</span>, a
          <span class="sm_txt_bold">web developer </span> focused on crafting
          great web experiences. I enjoy creating beautifully designed,
          intuitive, and functional websites.
        </p>

        <br />
        <p class="sm_txt">
          My focus on delivering high-quality applications is fueled by a
          genuine interest in leading technologies, particularly
          <span class="sm_txt_bold">React, Express, Node.js, MongoDB</span> and
          <span class="sm_txt_bold">Zoho Catalyst</span>
        </p>

        <br />
        <p class="sm_txt">
          I' m a <span class="sm_txt_bold">hardworking and dedicated </span>
          professional web developer and user interface designer with a keen eye
          for detail and a determination to deliver the highest quality. I am
          <span class="sm_txt_bold">
            {" "}
            motivated, enthusiastic, and well-organized
          </span>
          , primarily focused on user interfaces.
        </p>

        <br />`;

const DATE_OUTPUT = `<p class="sm_txt">${dayjs().format("DD/MM/YYYY")}</p>
        <br />`;

const EDUCATION_OUTPUT = `<p class="sm_txt_bold">Government college of Engineering, Salem - 11</p>
        <p class="sm_txt">BE - Computer Science and Engineering</p>
        <p class="sm_txt">(2019 - 2023)</p>
        <p class="sm_txt">CGPA - 8.51</p>
        <br />
        <p class="sm_txt_bold">
          Sri Vidya Mandir Higher Secondary School, Uthangarai - 07
        </p>
        <p class="sm_txt">Secondary school</p>
        <p class="sm_txt">(2017 - 2019)</p>
        <p class="sm_txt">PERCENTAGE - 88.5%</p>
        <br />`;

const EMAIL_OUTPUT = `<p class="sm_txt">
          <a href="mailto:hari17prasathb@gmail.com" class="sm_link" target="_blank">
            hari17prasathb@gmail.com
          </a>
        </p>
        <br />`;

const GITHUB_OUTPUT = `<p class="sm_txt">
        <a href=${GITHUB_URL} class="sm_link" target="_blank">
         ${GITHUB_URL}
        </a>
      </p>
      <br />`;

const LINKEDIN_OUTPUT = `<p class="sm_txt">
                <a href=${LINKEDIN_URL} class="sm_link" target="_blank">
                 ${LINKEDIN_URL}
                </a>
              </p>
              <br />`;

const LOVE_OUTPUT = `<p class="sm_txt">
              Love you! Cheers:)
            </p>
            <br />`;

const PHONE_OUTPUT = `<p class="sm_txt">
            <a href="tel:7904659339" class="sm_link" target="_blank">
             +91-7904659339
            </a>
          </p>
          <br />`;

const PROJECTS_OUTPUT = `<br />
        <p class="sm_txt_bold">Professional projects</p>
        <br />
        <p class="sm_txt_bold">1. API Hour</p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Overview:</span> A web platform for
          purchasing tickets to Zoholics and its after-party, featuring
          automated ticket PDFs with QR codes. Admins can scan and validate
          tickets in real-time, ensuring a seamless entry experience.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Contribution:</span> Developed the entire
          user interface and built an admin panel for validating tickets.
          Contributed to entire backend logic development and server-side
          operations.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Tech Stack:</span> React JS, Express JS,
          Mongo DB, Stripe, Zoho Creator, Zoho Zeptomail, Zoho Catalyst
        </p>
        <br />
        <p class="sm_txt_bold">2. Recprotect</p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Overview:</span> A robust tool designed for
          generating quotes for boat and trailer insurance, simplifying the
          process for users to obtain accurate and timely insurance estimates.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Contribution:</span> Developed the user
          interface for the quoting tool, enabling a seamless user experience.
          Contributed to the development of backend logic and server-side
          operations and deployed the application in catalyst.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Tech Stack:</span> React JS, Express JS,
          MongoDB, Zoho Creator, Zoho Catalyst
        </p>
        <br />
        <p class="sm_txt_bold">3. PDF Parser</p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Overview:</span> A specialized tool for
          parsing and converting PDF documents into structured JSON format,
          aimed at improving data extraction and processing efficiency.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Contribution:</span> Designed and
          implemented the PDF parsing logic to accurately extract data from PDF
          files. Developed the backend services to handle the conversion process
          and ensure seamless integration with other systems.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Tech Stack:</span> Express JS, Zoho
          Catalyst, PDF parsing library (pdf2json)
        </p>
        <br />
        <p class="sm_txt_bold">Personal project</p>
        <br />
        <p class="sm_txt_bold">1. Ziara Trends</p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Overview:</span> A men's clothing e-commerce
          website.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Contribution:</span> Developed the user
          interface and integrated essential features, including an add-to-cart
          functionality, OTP-based email login using Nodemailer and implemented
          Stripe payment gateway for secure payments.
        </p>
        <p class="sm_txt">
          <span class="sm_txt_bold">Tech Stack:</span> React JS, Express JS,
          MongoDB, Stripe, Netlify, Render
        </p>
        <br />`;

const SKILLS_OUTPUT = `<br />
            <p class="sm_txt"> React JS</p>
            <p class="sm_txt"> Express JS</p>
            <p class="sm_txt"> Node JS</p>
            <p class="sm_txt"> Mongo DB</p>
            <p class="sm_txt"> Zoho Catalyst</p>
          <br />`;

const WORK_EXPERIENCE_OUTPUT = `<br />
            <p class="sm_txt_bold">Cloudlion, Canada(remote) | Full stack developer | Sep 2023 - Current</p>
            <br />
            <p class="sm_txt">Played a crucial role in utilizing React, Node.js, Express, and MongoDB to develop dynamic, user-friendly interfaces.</p>
            <p class="sm_txt">Contributed to the development of RESTful APIs and integrated them with frontend application</p>
            <p class="sm_txt">Deployed the services to Zoho Catalyst using CI/CD pipelines in GitHub Actions for robust and scalable data management.</p>
          <br />`;

const VALID_COMMANDS = [
  { about: ABOUT_OUTPUT },
  { clear: "" },
  { date: DATE_OUTPUT },
  { education: EDUCATION_OUTPUT },
  { email: EMAIL_OUTPUT },
  { github: GITHUB_OUTPUT },
  { help: HELP_OUTPUT },
  { linkedin: LINKEDIN_OUTPUT },
  { motd: MOTD_OUTPUT },
  { love: LOVE_OUTPUT },
  { phone: PHONE_OUTPUT },
  { projects: PROJECTS_OUTPUT },
  { skills: SKILLS_OUTPUT },
  { workexperience: WORK_EXPERIENCE_OUTPUT },
];

export {
  MOTD_OUTPUT,
  HELP_OUTPUT,
  ABOUT_OUTPUT,
  DATE_OUTPUT,
  EDUCATION_OUTPUT,
  EMAIL_OUTPUT,
  GITHUB_OUTPUT,
  LINKEDIN_OUTPUT,
  LOVE_OUTPUT,
  PHONE_OUTPUT,
  VALID_COMMANDS,
  PROJECTS_OUTPUT,
  SKILLS_OUTPUT,
  WORK_EXPERIENCE_OUTPUT,
};

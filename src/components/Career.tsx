// import "./styles/Career.css";

// const Career = () => {
//   return (
//     <div className="career-section section-container">
//       <div className="career-container">
//         <h2>
//           My career <span>&</span>
//           <br /> experience
//         </h2>
//         <div className="career-info">
//           <div className="career-timeline">
//             <div className="career-dot"></div>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Software Engineering Student</h4>
//                 <h5>Preparing for SDE roles</h5>
//               </div>
//               <h3>CAREER STARTING SOON</h3>
//             </div>
//             <p>
//               Currently building projects and strengthening my skills in full-stack
//               development, cloud, and AI, while preparing for upcoming software
//               engineering opportunities.
//             </p>
//           {/* </div>
//           {/* <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Adobe</h4>
//                 <h5>6+ years · Noida</h5>
//               </div>
//               <h3>2017–24</h3>
//             </div>
//             <p>
//               Senior Lead Software Engineer (Feb 2024 – May 2024). Lead Software
//               Engineer (Feb 2021 – Feb 2024). Software Engineer II (Dec 2017 –
//               Feb 2021): internationalization, globalization, and localization for
//               Adobe Technical Communication Suite; functional and linguistic testing
//               strategy; in-house tooling; collaboration with product and engineering
//               for high-quality localized releases.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Consultant</h4>
//                 <h5>Genpact Headstrong </h5>
//               </div>
//               <h3>2016–17</h3>
//             </div>
//             <p>
//               Sep 2016 – Nov 2017. Developed and maintained WCF services consumed
//               by the UI; deployment support across environments; NUnit tests and
//               coverage; bug fixes from QA and users; database work.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Sf Engineer</h4>
//                 <h5>Infogain</h5>
//               </div>
//               <h3>2013-16</h3>
//             </div>
//             <p>
//               Software engineering across enterprise projects, contributing to
//               design, development, and delivery of business applications.
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          {/* Timeline */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* ✅ YOUR CURRENT STATUS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Student</h4>
                <h5>Preparing for SDE roles</h5>
              </div>
              <h3>CAREER STARTING SOON</h3>
            </div>

            <p>
              Currently building projects and strengthening my skills in full-stack
              development, cloud, and AI, while preparing for upcoming software
              engineering opportunities.
            </p>
          </div>

          {/* ❌ OLD TEMPLATE DATA (COMMENTED SAFELY) */}

          {/*
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>CallHQ.ai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building CallHQ.ai, a voice AI platform for automating customer calls.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Adobe</h4>
                <h5>6+ years · Noida</h5>
              </div>
              <h3>2017–24</h3>
            </div>
            <p>
              Senior Lead Software Engineer, Lead Software Engineer, Software Engineer II.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>Genpact Headstrong</h5>
              </div>
              <h3>2016–17</h3>
            </div>
            <p>
              Developed and maintained services, deployment, testing, and bug fixes.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sf Engineer</h4>
                <h5>Infogain</h5>
              </div>
              <h3>2013–16</h3>
            </div>
            <p>
              Worked on enterprise software projects.
            </p>
          </div>
          */}

        </div>
      </div>
    </div>
  );
};

export default Career;
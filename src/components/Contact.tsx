// import { MdArrowOutward, MdCopyright } from "react-icons/md";
// import "./styles/Contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-section section-container" id="contact">
//       <div className="contact-container">
//         <h3>Contact</h3>
//         <div className="contact-flex">
//           <div className="contact-box">
//             <h4>Connect</h4>
//             <p>
//               <a
//                 href="https://www.linkedin.com/in/sahil-khanvilkar-387b09366"
//                 target="_blank"
//                 rel="noreferrer"
//                 data-cursor="disable"
//               >
//                 LinkedIn — Sahil Khanvilkar
//               </a>
//             </p>
//             <h4>Education</h4>
//             <p>
//               BE Electronics and Telecommunication,St. Francis Institute of Technology, Mumbai — 2022–2026
//             </p>
//             <p>
//               Computer Science, Wilson College, Mumbai — 2020–22
//             </p>
//           </div>
//           <div className="contact-box">
//             <h4>Social</h4>
//             <a
//               href="https://github.com/Khanvilkar20"
//               target="_blank"
//               rel="noreferrer"
//               data-cursor="disable"
//               className="contact-social"
//             >
//               GitHub <MdArrowOutward />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/sahil-khanvilkar-387b09366"
//               target="_blank"
//               rel="noreferrer"
//               data-cursor="disable"
//               className="contact-social"
//             >
//               LinkedIn <MdArrowOutward />
//             </a>
//             <a
//               href="https://www.youtube.com/@Leftbraincoder"
//               target="_blank"
//               rel="noreferrer"
//               data-cursor="disable"
//               className="contact-social"
//             >
//               YouTube <MdArrowOutward />
//             </a>
//             <a
//               href="https://www.instagram.com/leftbraincoder/"
//               target="_blank"
//               rel="noreferrer"
//               data-cursor="disable"
//               className="contact-social"
//             >
//               Instagram <MdArrowOutward />
//             </a>
//           </div>
//           <div className="contact-box">
//             <h2>
//               Designed and Developed <br /> by <span>Sahil Khanvilkar</span>
//             </h2>
//             <h5>
//               <MdCopyright /> 2026
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* CONNECT */}
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sahil-khanvilkar-387b09366"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Sahil Khanvilkar
              </a>
            </p>

            <h4>Education</h4>
            <p>
              BE Electronics and Telecommunication, St. Francis Institute of Technology, Mumbai — 2022–2026
            </p>
            <p>
              Computer Science, Wilson College, Mumbai — 2020–2022
            </p>
          </div>

          {/* SOCIAL */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Khanvilkar20"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-khanvilkar-387b09366"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

          </div>

          {/* FOOTER */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sahil Khanvilkar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
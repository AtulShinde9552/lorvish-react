import React from "react";
import Lorvish from "../../../public/assets/images/itstuffingImg.jpg";
import { motion } from "framer-motion";

function Itstaffing() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              id="blog-image"
              className="img-fluid mb-4 rounded"
              alt="Blog Image"
              src={Lorvish}
            />
          </motion.div>
          <motion.h1
            id="blog-title"
            className="display-5 mb-4 fw-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            IT STAFFING
          </motion.h1>
          <div className="sofiya-1">
            <div className="post-content-wrapper">
              <div id="blog-content" className="rich-text w-richtext text-left">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1, y: 0, transition: { staggerChildren: 0.1 }
                    },
                  }}
                >
                  <motion.p
                    className="text-black mb-4 fs-5"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    US Staffing is the process of hiring candidates for the US companies or clients by evaluating their skills, knowledge for a job position for which they are applying for. US IT Staffing Firm have a process of screening candidates by using tools to check candidates knowledge for a technology-specific role. Staffing is the process of hiring eligible candidates in the organization or company for specific positions. In management, the meaning of staffing is an operation of recruiting the employees by evaluating their skills, knowledge and then offering them specific job roles accordingly.
                  </motion.p>
                  <motion.ul
                    className="text-black mb-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <motion.li
                    className="fs-5"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      “The Right Stuff”: Contract Employment/Short-Term Staffing. This strategy is generally used when demand exceeds the number of core positions needed to accommodate minimum production goals.
                    </motion.li>
                    <motion.li
                    className="fs-5"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      “Let's Go Shopping”: Contract-to-Hire. It's kind of like buying a new car.
                    </motion.li>
                    <motion.li
                    className="fs-5"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      “Busy Business”: Direct Placement Hire.
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itstaffing;

import React from 'react';
import ERPIMG from "../assets/img/services/erp.jpg";
import { motion } from 'framer-motion';

function ERP() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img id="blog-image" className="img-fluid mb-4 rounded" alt="Blog Image" src={ERPIMG} />
          </motion.div>
          <motion.h1
            id="blog-title"
            className="display-5 mb-4 fw-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Outbound marketing’s future in an omnichannel stack
          </motion.h1>
          <div className="sofiya-1">
            <div className="post-content-wrapper">
              <div id="blog-content" className="rich-text w-richtext">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    The increased relevance of Outbound marketing consumer engagement has an influence across the entire corporate stack...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Today’s outbound marketing technology</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    Marketers have traditionally loved outbound marketing because...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>The great decoupling</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    A new architectural pattern arose in the late 2010s that detached shared, basic enterprise services from specific customer engagement channels...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Decoupling data, content and decisioning</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    Enterprises benefit greatly from decoupling data administration from campaign management...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>A new model</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    This last trend has the potential to be the most significant...
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    The increased relevance of Outbound marketing consumer engagement has an influence across the entire corporate stack...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Today’s outbound marketing technology</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    Marketers have traditionally loved outbound marketing because...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>The great decoupling</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    A new architectural pattern arose in the late 2010s that detached shared, basic enterprise services from specific customer engagement channels...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Decoupling data, content and decisioning</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    Enterprises benefit greatly from decoupling data administration from campaign management...
                  </motion.p>
                  <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>A new model</motion.h3>
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    This last trend has the potential to be the most significant...
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERP;

import React from 'react';
import Lorvish from "../../../public/assets/images/standard-quality-control-concept.jpg";
import { motion } from 'framer-motion';

function ManagedService() {
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
            MANAGED SERVICES
          </motion.h1>
          <div className="sofiya-1">
            <div className="post-content-wrapper">
              <div id="blog-content" className="rich-text w-richtext">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                  }}
                >
                  <motion.p
                  className='text-black fs-5'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions in order to improve operations and cut expenses.

                    The managed service provider assumes ongoing responsibility for monitoring, managing and/or problem resolution for selected IT systems and functions on your behalf. At the upper end of the spectrum, service providers offer fully managed services that cover everything from alerts through problem resolution.

                    Managed services are ongoing and typically work off of a contract. They can cover many aspects of an organization's IT needs on a daily basis. Professional services are project-based and usually address a specific problem or challenge.
                  </motion.p>
                  <motion.p
                  className='text-black fs-5'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Cloud services are typically classified into three main categories: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). These services can be used independently or together to build a complete cloud computing solution.

                    1. **Infrastructure as a Service (IaaS):** Provides virtualized computing resources over the internet. IaaS is highly scalable and can be adjusted on-demand, offering the advantage of only paying for what you use.

                    2. **Platform as a Service (PaaS):** Offers hardware and software tools over the internet, typically used for application development. PaaS provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.

                    3. **Software as a Service (SaaS):** Delivers software applications over the internet, on a subscription basis. Users can access SaaS applications directly from their web browser without needing to install and maintain software.

                    Each of these services provides unique benefits and can be utilized according to the specific needs of a business. Cloud computing has revolutionized how businesses operate, offering unparalleled flexibility, scalability, and efficiency.
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

export default ManagedService;

import React from "react";
import Lorvish from "../../../public/assets/images/cloud-offering.jpg";
import { motion } from "framer-motion";

function LorvishOffers() {
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
            CLOUD OFFERINGS
          </motion.h1>
          <div className="sofiya-1">
            <div className="post-content-wrapper">
              <div id="blog-content" className="rich-text w-richtext">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  <motion.p
                  className="text-black fs-5"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    A cloud service is any service made available to users on
                    demand via the Internet from a cloud computing provider's
                    servers as opposed to being provided from a company's own
                    on-premises servers. Cloud computing is the on-demand
                    availability of computer system resources, especially data
                    storage and computing power, without direct active
                    management by the user. The term is generally used to
                    describe data centers available to many users over the
                    Internet. Simply put, cloud computing is the delivery of
                    computing services—including servers, storage, databases,
                    networking, software, analytics, and intelligence—over the
                    Internet (“the cloud”) to offer faster innovation, flexible
                    resources, and economies of scale. You typically pay only
                    for cloud services you use, helping lower your operating
                    costs, run your infrastructure more efficiently, and scale
                    as your business needs change.
                  </motion.p>
                  <motion.p
                  className="text-black fs-5"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Cloud services are typically classified into three main
                    categories: Infrastructure as a Service (IaaS), Platform as
                    a Service (PaaS), and Software as a Service (SaaS). These
                    services can be used independently or together to build a
                    complete cloud computing solution. 1. **Infrastructure as a
                    Service (IaaS):** Provides virtualized computing resources
                    over the internet. IaaS is highly scalable and can be
                    adjusted on-demand, offering the advantage of only paying
                    for what you use. 2. **Platform as a Service (PaaS):**
                    Offers hardware and software tools over the internet,
                    typically used for application development. PaaS provides a
                    platform allowing customers to develop, run, and manage
                    applications without the complexity of building and
                    maintaining the infrastructure. 3. **Software as a Service
                    (SaaS):** Delivers software applications over the internet,
                    on a subscription basis. Users can access SaaS applications
                    directly from their web browser without needing to install
                    and maintain software. Each of these services provides
                    unique benefits and can be utilized according to the
                    specific needs of a business. Cloud computing has
                    revolutionized how businesses operate, offering unparalleled
                    flexibility, scalability, and efficiency.
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

export default LorvishOffers;

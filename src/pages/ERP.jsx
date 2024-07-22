import React from 'react';
import ERPIMG from "../../public/assets/images/enterprise-resource-planning-holographic-interface.jpg";
import { motion } from 'framer-motion';

function ERP() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img id="blog-image" className="img-fluid mb-4 rounded" alt="ERP Image" src={ERPIMG} />
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
          <div className="sofiya-1 text-left">
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
                  <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className='fs-5 text-black'>
                    A cloud service is any service made available to users on demand via the Internet from a cloud computing provider's servers as opposed to being provided from a company's own on-premises servers.
                    <br/><br/>
                    Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.
                    <br/><br/>
                    Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping lower your operating costs, run your infrastructure more efficiently and scale as your business needs change.
                    <br/><br/>
                    <strong>ERP and Cloud Computing</strong>
                    <br/><br/>
                    Enterprise Resource Planning (ERP) systems are comprehensive software platforms used to manage and integrate the essential parts of a business. An ERP software system can integrate planning, purchasing inventory, sales, marketing, finance, human resources, and more.
                    <br/><br/>
                    <strong>Benefits of Cloud-based ERP</strong>
                    <br/><br/>
                    <ul>
                      <li><strong>Cost Savings:</strong> Cloud-based ERP systems reduce the need for upfront capital investment in hardware and software.</li>
                      <li><strong>Scalability:</strong> Easily scale resources up or down based on your business needs.</li>
                      <li><strong>Accessibility:</strong> Access your ERP system from anywhere with an internet connection, facilitating remote work and global operations.</li>
                      <li><strong>Automatic Updates:</strong> Benefit from the latest features and security updates automatically applied by the service provider.</li>
                      <li><strong>Disaster Recovery:</strong> Cloud-based ERP systems typically offer robust backup and disaster recovery solutions.</li>
                    </ul>
                    <br/><br/>
                    By leveraging cloud-based ERP systems, businesses can achieve greater efficiency, flexibility, and growth potential. This allows companies to focus more on their core operations and less on managing IT infrastructure.
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

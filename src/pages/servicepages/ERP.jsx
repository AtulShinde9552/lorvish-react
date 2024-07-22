import React from 'react';
import erp from "../../assets/img/services/erp.jpg";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function ERP() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <Zoom>
            <img id="blog-image" className="img-fluid mb-4 rounded" alt="Blog Image" src={erp} />
          </Zoom>
          <Fade bottom>
            <h1 id="blog-title" className="display-5 mb-4 fw-bold text-center">Outbound marketing’s future in an omnichannel stack</h1>
          </Fade>
          <div className="sofiya-1">
            <div className="post-content-wrapper">
              <div id="blog-content" className="rich-text w-richtext">
                <Fade bottom cascade>
                  <div>
                    <p>The increased relevance of Outbound marketing consumer engagement has an influence across the entire corporate stack...</p>
                    <h3>Today’s outbound marketing technology</h3>
                    <p>Marketers have traditionally loved outbound marketing because...</p>
                    <h3>The great decoupling</h3>
                    <p>A new architectural pattern arose in the late 2010s that detached shared, basic enterprise services from specific customer engagement channels...</p>
                    <h3>Decoupling data, content and decisioning</h3>
                    <p>Enterprises benefit greatly from decoupling data administration from campaign management...</p>
                    <h3>A new model</h3>
                    <p>This last trend has the potential to be the most significant...</p>
                    <p>The increased relevance of Outbound marketing consumer engagement has an influence across the entire corporate stack...</p>
                    <h3>Today’s outbound marketing technology</h3>
                    <p>Marketers have traditionally loved outbound marketing because...</p>
                    <h3>The great decoupling</h3>
                    <p>A new architectural pattern arose in the late 2010s that detached shared, basic enterprise services from specific customer engagement channels...</p>
                    <h3>Decoupling data, content and decisioning</h3>
                    <p>Enterprises benefit greatly from decoupling data administration from campaign management...</p>
                    <h3>A new model</h3>
                    <p>This last trend has the potential to be the most significant...</p>
                    <p>The increased relevance of Outbound marketing consumer engagement has an influence across the entire corporate stack...</p>
                    <h3>Today’s outbound marketing technology</h3>
                    <p>Marketers have traditionally loved outbound marketing because...</p>
                    <h3>The great decoupling</h3>
                    <p>A new architectural pattern arose in the late 2010s that detached shared, basic enterprise services from specific customer engagement channels...</p>
                    <h3>Decoupling data, content and decisioning</h3>
                    <p>Enterprises benefit greatly from decoupling data administration from campaign management...</p>
                    <h3>A new model</h3>
                    <p>This last trend has the potential to be the most significant...</p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERP;

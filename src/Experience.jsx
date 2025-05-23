import React, {FC} from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./Experience.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Experience() {
  const description = {
    pfizer: [
      "Designed, implemented, tested and softly released the web applications based on React, Redux, Webpack and Semantic UI",
      "Visualized, analyzed and mined large-scale dataset with d3.js, dc.js, and crossfilter.js",
      "Implemented the application backend based on Node.js, express.js and Solr",
      "Beautified and enhanced UI in current web applications",
      "Worked with Compliance department and implemented software applications under FDA regulations",
      "Introduced test-driven development and improved code quality and project consistence",
      "Raised further production funds for one business solution",
    ],
    "voya-financial": [
      "Built a financial enrollment tool",
      "Increased app customer rating into 8.4/10 (Top Rank 4)",
      "Increased team velocity by 300%",
      "Architecture Level Improvement: Marionette Events System, Component-based architecture, FLUX unidirectional architecture and data flow, BEM-based SASS architecture including layout, patterns, and helpers and customized SASS, Modern App View Layers",
      "Built responsive and adaptive web application for desktop and mobile screens",
      "Worked under Continuous Integration (CI) and Continuous Delivery (CD) using Git & Jenkins",
    ],
    "northwestern-mutual": [
      "Built a web-based financial mapping tool",
      "Designed and implemented Flux pattern with backbone.js",
      "Built reusable map and view components",
      "Implemented Google Maps JavaScript API and d3 map API to visually showing data on the map: markers, bubbles, polygons, polylines, data layers and spontaneous response to user interaction",
      "Built two hybrid mobile applications for iPhone, iPad and Android phone. Features: phone call, message and email, etc.",
      "Built the application backend with Node.js, express.js",
      "Implemented microservice architecture with Node.js, Express.js",
      "Worked under Scrum/Agile methodology",
    ],
  };

  return (
    <div id="experience" className="experience-container">
      <h3>Experience</h3>
      <AutoPlaySwipeableViews>
        <dl>
          <dt>
            <h4>
              Senior Frontend Engineer
              <br />
              Pfizer
            </h4>
          </dt>
          <dd className="content">
            <div className="date">March 2017 - January 2019</div>
            <ul className="list">
              {description["pfizer"].map((item, index) => (
                <li key={`pfizer-${index}`}>{item}</li>
              ))}
            </ul>
          </dd>
        </dl>

        <dl>
          <dt>
            <h4>
              Senior Frontend Engineer
              <br />
              Voya Financial
            </h4>
          </dt>
          <dd className="content">
            <div className="date">July 2016 - January 2017</div>
            <ul className="list">
              {description["voya-financial"].map((item, index) => (
                <li key={`voya-financial-${index}`}>{item}</li>
              ))}
            </ul>
          </dd>
        </dl>

        <dl>
          <dt>
            <h4>
              Full Stack Engineer
              <br />
              Northwestern Mutual
            </h4>
          </dt>
          <dd className="content">
            <div className="date">June 2015 - June 2016</div>
            <ul className="list">
              {description["northwestern-mutual"].map((item, index) => (
                <li key={`northwestern-mutual-${index}`}>{item}</li>
              ))}
            </ul>
          </dd>
        </dl>
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Experience;

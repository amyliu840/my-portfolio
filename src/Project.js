import React from 'react';
import './Project.css';

function Project() {
  return (
    <div id="project" className="project-container">
      <h3>Project</h3>
      <dl>
        <dt><h4>Voya Enrollment</h4></dt>
        <dd className='content'>
          <div className='list'>
            <div>Financial Enrollment Tool</div>
            <a href="https://enroll.voya.com"
              target="_blank">Voya Enrollment Tool</a>
          </div>
        </dd>
      </dl>
      <dl>
        <dt><h4>Car Dealer App</h4></dt>
        <dd className='content'>
          <div className='list'>
            <div>An application to display dealer's cars</div>
            <a href="https://github.com/amyliu840/car-dealer-app"
              target="_blank">Project Github Link</a>
          </div>
        </dd>
      </dl>
    </div>
  );
}

export default Project;

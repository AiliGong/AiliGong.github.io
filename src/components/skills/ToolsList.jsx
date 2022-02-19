import React from "react";
import ApiGateway from "../icons/ApiGateway";
import CloudFont from "../icons/CloudFont";
import DynamoDB from "../icons/DynamoDB";
import Ec2 from "../icons/Ec2.jsx";
import ElasticBeanstalk from "../icons/ElasticBeanstalk";
import Lambda from "../icons/Lambda";
import Route53 from "../icons/Route53";

export default function ToolsList() {
  return (
    <div className="container">
      <div className="icons">
        <i className="devicon-amazonwebservices-plain-wordmark"></i>
        <h3>AWS</h3>
      </div>

      <div className="icons">
        <i className="devicon-googlecloud-plain"></i>
        <h3>Google Cloud</h3>
      </div>
      <div className="icons">
        <i className="devicon-materialui-plain"></i>
        <h3>Material UI</h3>
      </div>
      <div className="icons">
        <i className="devicon-bootstrap-plain"></i>
        <h3>Bootstrap</h3>
      </div>
      <div className="icons">
        <i className="devicon-visualstudio-plain"></i>
        <h3>VS Code</h3>
      </div>
      <div className="icons">
        <i className="devicon-github-original"></i>
        <h3>GitHub</h3>
      </div>
      <div className="icons">
        <i className="devicon-circleci-plain"></i>
        <h3>CircleCI</h3>
      </div>
      <div className="icons">
        <i className="devicon-docker-plain"></i>
        <h3>Docker</h3>
      </div>
      <div className="icons">
        <i className="devicon-mysql-plain"></i>
        <h3>MySQL</h3>
      </div>
      <div className="icons">
        <i className="devicon-postgresql-plain"></i>
        <h3>PostgreSQL</h3>
      </div>
      <div className="icons">
        <i className="devicon-jira-plain"></i>
        <h3>Jira</h3>
      </div>
      <div className="icons">
        <i className="devicon-heroku-original"></i>
        <h3>Heroku</h3>
      </div>
      <div className="icons">
        <ApiGateway />
        <h3>API Gateway</h3>
      </div>

      {/* <div className="icons">
        <CloudFont />
        <h3>CloudFont</h3>
      </div> */}

      <div className="icons">
        <DynamoDB />
        <h3>DynamoDB</h3>
      </div>

      <div className="icons">
        <Ec2 />
        <h3>EC2</h3>
      </div>

      {/* <div className="icons">
        <Route53 />
        <h3>Route53</h3>
      </div> */}

      <div className="icons">
        <ElasticBeanstalk />
        <h3>Elastic Beanstalk</h3>
      </div>

      <div className="icons">
        <Lambda />
        <h3>Lambda</h3>
      </div>
    </div>
  );
}

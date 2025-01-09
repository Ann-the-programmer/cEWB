import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Introduction() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title"></h3>
          <div id="typography">
          <h3>
            <b>Chapters are the beating heart of EWB. Across Canada chapter members are taking 
            thoughtful and strategic actions to create profound social change in their universities, 
            companies, and communities.</b>
          </h3>
          <h5>
            Engineers Without Borders Carleton is a non-profit Student Group 
            that aims to create opportunities for rural Africans to access clean water, 
            generate an income from humble farms, and have improved access to services and 
            infrastructure they need to improve their lives. We are dedicated to finding widespread, 
            sustainable solutions to extreme poverty in Africa, helping communities find solutions to 
            ensure a better future.
          </h5>

          <h5>
            At EWB Carleton, we have several portfolios to get involved with! Including...
          </h5>
          <h5>
            <ul>
              <li>Advocacy</li>
              <li>Internal</li>
              <li>Fundraising</li>
              <li>Youth Engagement</li>
              <li>Global Engineering & Design</li>
              <li>Equity, Diversity, Inclusion and Indigenous Reconciliation</li>
              <li>Fair Trade</li>
              <li>Finance</li>
              <li>Relations</li>
              <li>Communications</li>
              <li>Strategy & Support</li>
            </ul>
          </h5>
          <h5>
            Through out the year we host a variety of fun and educational events! In past years these have 
            ranged from <b>open mic nights</b> with <b>fair trade coffee</b> to <b>professional development conferences</b> like
            <b>wine & cheese</b> and all sorts of <b>online and in person events</b> in between.
          </h5>
          <h5>
            As a chapter we are always looking to grow and learn from each other as well as help our local community.
          </h5>
          <h5>
            <b>Voted chapter of the year in 2019 at the Engineers Without Borders National Conference in Montreal.</b>
          </h5>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Introduction;

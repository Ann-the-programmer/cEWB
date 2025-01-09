/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
            </li>
            <li>
              <a
                href="https://www.ewb.ca/en/"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed & Coded by{" "}
          <a
            href="https://rush1404.github.io/PortfolioWebsite/"
            target="_blank"
          >
            Rush
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

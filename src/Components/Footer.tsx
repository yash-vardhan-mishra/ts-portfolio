import { IMain } from "../Models";

interface FooterProps {
  data: IMain;
}

const Footer = ({ data }: FooterProps) => {
  const { social } = data;
  const networks = social.map(function (network) {
    return (
      <li key={network.name}>
        <a target="_blank" rel="noopener noreferrer" href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Yash"
                href="https://yash-vardhan.ml"
              >
                Yash
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

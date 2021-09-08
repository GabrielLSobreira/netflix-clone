import './styles.css';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <p>Desenvolvido por Gabriel Sobreira</p>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-sobreira-b584a9178"
              rel="noreferrer"
              target="_blank"
            >
              <GrLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GabrielLSobreira"
              rel="noreferrer"
              target="_blank"
            >
              <GrGithub />
            </a>
          </li>
          <li>
            <a
              href="mailto:gabriellaranjasobreira@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <BsEnvelope />
            </a>
          </li>
        </ul>
      </nav>
      <p>API utilizada do site The Movie Database (TMDB)</p>
    </footer>
  );
};

export default Footer;

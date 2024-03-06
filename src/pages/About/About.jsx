import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Blog <span>APCE</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end. <br /><br />
        Criado com a finalidade de desenvolvimento da comunidade APCE, compartilhando e aprendendo mais conhecimento, pois entendemos que devemos estar atualizados sobre toda e qualquer tecnologia, para o bom aperfeiçoamennto.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;

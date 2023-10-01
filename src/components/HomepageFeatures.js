import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Se preocupar pra quê?',
    jpg: '../../static/img/bola.jpg',
    description: (
      <>
        Deixe as preocupações administrativas conosco. Nosso app é a solução completa para escolas de futebol, oferecendo funcionalidades intuitivas para gerenciar alunos, horários, pagamentos e muito mais.
      </>
    ),
  },
  {
    title: 'Da matricula, ao campo',
    jpg: '../../static/img/campo.jpg',
    description: (
      <>
        Nosso app de gestão para escolas de futebol facilita o acompanhamento de matrículas, calendários, finanças e muito mais.
      </>
    ),
  },
  {
    title: 'Organização é tudo',
    jpg: '../../static/img/facil.jpg',
    description: (
      <>
        Organize, acompanhe e cresça! Nosso aplicativo de controle escolar foi projetado especificamente para escolas de futebol, proporcionando uma administração eficiente e sem estresse.
      </>
    ),
  },
];

function Feature({jpg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={jpg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

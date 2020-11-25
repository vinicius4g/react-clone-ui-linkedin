import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Mais de 70 mil lojas criaram e-comm... </span>
              <span className="subtext">há 1 d • 310 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Há vagas: confira as empresas que e...</span>
              <span className="subtext">há 11 h • 6220 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Trump autoriza início de transição d...</span>
              <span className="subtext">há 1 d • 2800 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">BC planeja plataforma de educação f...</span>
              <span className="subtext">há 7 h • 156 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Amapá volta a ter 100% de energia</span>
              <span className="subtext">há 3 h • 710 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 1 d • 216 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;

import React from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify, successfulNotify } from '../../../hooks/SystemToasts';

import api from '../../../services/api';

interface IAluno {
  matricula: number;
  nome: string;
  cpf: number;
  status?: boolean;
}

interface IPopupVerbaCadastro {
  fechar: () => void;
  atualiza: () => void;
}

let dados = {matricula: 0, nome: '', cpf: 0};

const Cadastro: React.FC<IPopupVerbaCadastro> = ({ fechar, atualiza }) => {

  async function cadastrarAluno() {
    try {
      await api.post<IAluno>(`alunos`, dados);
      //.then(() => {
        successfulNotify(`Aluno ${dados.nome} cadastrado com sucesso!`)
      //}).catch(() => errorfulNotify(`Não foi possível cadastrar o aluno ${dados.nome}.`));
    } catch(e) {
      console.log(e);
      errorfulNotify(`Não foi possível cadastrar o aluno ${dados.nome}.`);
    }

    atualiza();
  }

  const pegaMatricula = (event: React.ChangeEvent<HTMLInputElement>) => {
    dados.matricula = Number(event.target.value);
  }

  const pegaNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    dados.nome = event.target.value;
  }

  const pegaCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    dados.cpf = Number(event.target.value);
  }

  return (
    <Container>
      <PopUp>
        <Title>
          <h1>Cadastrar aluno</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Scroll>
          <div>
            <label>Matrícula:</label>
            <input type="number" id="matricula" onChange={pegaMatricula} />
          </div>                 
          <div>
            <label>Nome:</label>
            <input type="text" id="nome" onChange={pegaNome} />
          </div>
          <div>
            <label>CPF:</label>
            <input type="text" id="cpf" onChange={pegaCpf} />
          </div>                        
        </Scroll>
        <div id="enviar">
          <p>Finalize o cadastro enviando o formulário.</p>
          <button type='submit' onClick={() => {cadastrarAluno(); fechar();}}>Enviar</button>
        </div>                          
      </PopUp>
    </Container>
  );
}

export default Cadastro;
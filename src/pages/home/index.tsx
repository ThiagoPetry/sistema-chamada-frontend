import React, { useState, useEffect } from 'react';

import { Container, Lista, PopupModal, Linha  } from './styles'

import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import Cadastro from '../../components/Popups/Cadastrar';
import Atualizar from '../../components/Popups/Editar';

import { errorfulNotify, successfulNotify} from '../../hooks/SystemToasts';

import api from '../../services/api';

interface IAlunos {
  matricula: number;
  nome: string;
  cpf: number;
  frequencia: boolean;
}

interface IChamada {
  nome: string;
  presenca: boolean;
}

const Home: React.FC = () => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);

  const handleAlunos = async () => {
    try {
      await api.get<IAlunos[]>(`alunos`)
      .then((response => {
        setAlunos(response.data); 
      })).catch(() => errorfulNotify("Não foi possível encontrar os alunos."));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleAlunos();
    alunos.map(res => setChamada([{nome: res.nome, presenca: false}]));
  },[]);

  async function deletarAluno(matricula: number) {
    try {
      await api.delete(`alunos/${matricula}`);
    } catch(e) {
      console.log(e);
    }
    handleAlunos();
  }

  let currentTime = new Date();
  let horaAtual = currentTime.toLocaleString();

  const [chamada, setChamada] = useState<IChamada[]>([]);

  async function finalizarChamada(nome: string, status: boolean, index: number) {
    let recebeChamada = chamada;
    recebeChamada.splice(index, 1);
    recebeChamada.push({nome: nome, presenca: !status});

    try {
      await api.put<IChamada[]>(`chamada`, recebeChamada);
      status === false ? successfulNotify(`Presença adicionada ao aluno ${nome}!`) 
      : successfulNotify(`Falta adicionada ao aluno ${nome}!`);
    } catch(e) {
      console.log(e);
      errorfulNotify('Não foi possível realizar a chamada.');
    }
    handleAlunos();
  }
  
  return (
    <>
      <Container>
        <div id="menu">
          <h1>Sistema de Chamada</h1>
          <h2>Data/Hora: {horaAtual}</h2>
        </div>
        <Lista>
          <div id="info">
            <p>Turma: MI68</p>
            <p>Total de alunos: {alunos ? alunos.length : 0}</p>
            <p>Presentes: {alunos ? alunos.filter(res => res.frequencia === true).length : 0}</p>
            <p>Faltantes: {alunos ? alunos.filter(res => res.frequencia === false).length : 0}</p>
            <div>
              <PopupModal closeOnEscape trigger={<button>Cadastrar</button>} modal>
                {(close: any) => (
                  <Cadastro atualiza={handleAlunos} fechar={close} />
                )}
              </PopupModal>
            </div>
          </div>
          <div id="table">
            <h1>Matrícula</h1>
            <h1>Nome</h1>
            <h1>CPF</h1>
            <h2>Presença</h2>
            <h2>Atualizar</h2>
            <h2>Deletar</h2>
          </div>
          {
            alunos && alunos.length ?
              alunos.map((res, index) => (
                <Linha key={index} id="lista" presenca={res.frequencia}>
                  <p>{res.matricula}</p>
                  <p>{res.nome}</p>
                  <p>{res.cpf}</p>
                  <button onClick={() => {
                    finalizarChamada(res.nome, res.frequencia, index);
                  }} className="status">{res.frequencia ? 'P' : 'F'}</button>
                  <PopupModal closeOnEscape trigger={<button><FaUserEdit size={25}/></button>} modal>
                    {(close: any) => (
                      <Atualizar atualiza={handleAlunos} fechar={close} matricula={res.matricula} />
                    )}
                  </PopupModal>
                  <button><MdDeleteForever size={25} onClick={() => {
                    deletarAluno(res.matricula); 
                    successfulNotify(`Aluno ${res.nome} deletado com sucesso!`); 
                  }}/>
                  </button>
                </Linha>
              ))
            : <p id="msg">Nenhum aluno cadastrado.</p>
          }
        </Lista>
      </Container>
    </>
  );
};

export default Home;
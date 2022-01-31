import React, { useState, useEffect } from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify } from '../../../hooks/SystemToasts';

import api from '../../../services/api';

interface IAlunos {
  matricula: number;
  nome: string;
  cpf: number;
  status: boolean;
}

interface IChamada {
  nome: string;
  status: boolean;
}

interface IPopupVerbaChamada {
  fechar: () => void;
}

const Chamada: React.FC<IPopupVerbaChamada> = ({ fechar }) => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);
  const [chamada, setChamada] = useState<IChamada[]>([]);

  const handleAlunos = async () => {
    try {
      await api.get<IAlunos[]>(`alunos`)
      .then((response) => {
        setAlunos(response.data); 
      }).catch(() => errorfulNotify("Não foi possível encontrar os alunos."));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleAlunos();
  },[]);

  let recebeNome = '';
  let recebeStatus = '';

  function dadosChamada() {
    for(let i = 0; i < alunos.length; i++) {
      //recebeNome = (document.getElementById(`nome${i}`) as HTMLInputElement).value;
      //recebeStatus = (document.getElementById(`status${i}`) as HTMLInputElement).value;
      setChamada([...chamada, {nome: recebeNome, status: recebeStatus === "true" ? true : false}]);
    }

    //finalizarChamada();
  }
  
  async function finalizarChamada() {
    try {
      await api.put<IChamada[]>(`frequencia`, chamada);
    } catch(e) {
      console.log(e);
      errorfulNotify('Não foi possível realizar a chamada.');
    }

    //atualiza();
  }

  function trocaStatus(nome: string) {
    const index = chamada.filter(res => res.nome.toLocaleLowerCase() === nome).indexOf;
    chamada[index ? Number(index) : 0].status = true;

    //atualiza();
  }

  return (
    <Container>
      <PopUp>
        <Title>
          <h1>Chamada</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Scroll>
          {
            alunos && alunos.length ?
              alunos.map((res, index) => (
                <div key={index} id="lista">
                  <input type="text" id={`nome${index}`} defaultValue={res.nome} disabled/>
                  <input type="checkbox" id={`status${index}`} onClick={() => trocaStatus(res.nome)} />   
                  {setChamada([...chamada, {nome: res.nome, status: false}])}
                </div>
              ))
            : ''
          }
        </Scroll>
        <div id="enviar">
          <button onClick={() => {dadosChamada(); fechar();}}>Enviar</button>
        </div>                                         
      </PopUp>
    </Container>
  );
}

export default Chamada;
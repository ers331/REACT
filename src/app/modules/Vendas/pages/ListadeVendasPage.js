/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";


export function ListadeVendasPage() {

  return <>
    <div className="header-texto ">
      <h2>Emissão de Nota Fiscal</h2>
    </div>
    <div className="container">
      <div className="card listadevendas">
        <h5>Lista de Vendas</h5>
        <hr />
        <div className="listadevendas1">
          <span>
            <input className="search-text-listadevendas" type="text" name="text" placeholder="Buscar por Nº da venda, CPF, Nome do Cliente..." />
            <p><b>Pesquisar</b> em todos os campos</p>
          </span>
          <span>
            <select name="select" className="select-listadevendas">
              <option value="1"> Todos</option>
              <option value="2"> Cancelado</option>
            </select>
            <p><b>Filtrar</b> por Status</p>
          </span>
          <span>
            <select name="select" className="select-listadevendas">
              <option value="1"> Todos</option>
            </select>
            <p><b>Filtrar</b> por Vendedor</p>
          </span>
          <span>
            <input type="date" name="date" className="date-listadevendas" />
            <p><b>Data</b> inicial</p>
          </span>
          <span>
            <input type="date" name="date" className="date-listadevendas" />
            <p><b>Data</b> final</p>
          </span>
        </div>
        <div className="listadevendas2">
          <p>DATA DA VENDA</p>
          <p>Nº DA VENDA</p>
          <p>VENDEDOR</p>
          <p>CLIENTE</p>
          <p>VALOR</p>
          <p>STATUS</p>
          <p>AÇÕES</p>
        </div>
        <div className="listadevendas3">
          <p>16/01/1999</p>
          <p>1</p>
          <p>Teste</p>
          <p>Teste</p>
          <b>38.50 R$</b>
          <span className="label label-lg label-light-info label-inline status-da-venda">Cancelado</span>
          <div className="acoes">
            <span className="btn btn-icon btn-light-primary btn-sm" ><i class="fas fa-eye" title=" Detalhes da Venda"></i></span>
            <span className="btn btn-icon btn-light-success btn-sm nfe" ><i class="fas fa-file-download" title="Nota Fiscal Eletronica"></i></span>
            <span className="btn btn-icon btn-light-warning btn-sm nfc" ><i class="fas fa-file-download " title="Nota Fiscal do Consumidor"></i></span>
            <span className="btn btn-icon btn-light btn-sm nfc" ><i class="fas fa-print" title="Imprimir"></i></span>
          </div>
        </div>
        <div className="listadevendas4">
          <select name="select" className="select-pagination">
            <option value="1"> 10</option>
          </select>
          <p>Showing rows 0 to 0 of 0</p>
        </div>
      </div>
    </div>

  </>;
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = [];

  filtroPorTexto: string = ''

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatoService.obterContatos().subscribe(listaContatos => {
      this.contatos = listaContatos;
    });
  }

  // Remove os acentos de uma string
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
}

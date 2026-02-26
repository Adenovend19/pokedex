import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-modal.component.html',
  styleUrl: './pokemon-modal.component.css'
})
export class PokemonModalComponent implements OnInit, OnDestroy {
  @Input({ required: true }) pokemon: any;
  @Output() close = new EventEmitter<void>();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}

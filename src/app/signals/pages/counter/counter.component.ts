import { Component, computed, signal } from '@angular/core';


const name = signal<string>('Adrian');

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  // signal es una variable reactiva
  public counter = signal<number>(10);
  
  // solo lectura
  public squareCounter = computed(() => this.counter() * this.counter());


  constructor() {
    console.log(name());
  }

  reset(){
    this.counter.set(0);
  }

  incrementDecrement(newValue: number ){
    // this.counter.set(this.counter() + value);
    this.counter.update( (currentValue) => currentValue + newValue);
  }
}

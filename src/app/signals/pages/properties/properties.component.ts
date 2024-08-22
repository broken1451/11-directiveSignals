import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { Data } from '../../interfaces/user.interface';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements OnInit, OnDestroy {

  public user = signal<Data>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  public counter = signal(10);
  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  // los efectos son cunado una senal cambia de valor y se ejecuta una accion o se ejecuta una accion y cambia de valor la senal y tienen limpieza automatica
  public userChangeEffect = effect(() => {
    // console.log('userChangeEffect');
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update((currentValue) => currentValue + 1);
      if (this.counter() === 15) {
        this.userChangeEffect.destroy();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    // limpieza  del efecto
    // this.userChangeEffect.destroy();
  }

  onFieldUpdated2(event: any) {
    console.log({ event: event.target.value });
  }

  inncreseBy(value: number) {
    this.counter.update((currentValue) => currentValue + value);
  }


  onFieldUpdated(field: keyof Data, value: string) {
    // console.log(field, value);

    // se puede pero es volatil porque se puede agregar un nuevo campo
    // this.user.set({
    //   ...this.user(),
    //   [field]:value
    // });

    // se puede pero es volatil porque se puede agregar un nuevo campo
    // this.user.update((currentUser) => {
    //   return {
    //     ...currentUser,
    //     [field]: value
    //   }
    // })

    this.user.update((currentUser) => {
      switch (field) {
        case 'id':
          currentUser.id = Number(value);
          break;
        case 'email':
          currentUser.email = value;
          break;
        case 'first_name':
          currentUser.first_name = value;
          break;
        case 'last_name':
          currentUser.last_name = value;
          break;
        case 'avatar':
          currentUser.avatar = value;
          break;
      }
      // romper la referencia
      return structuredClone(currentUser);
    });
  }

}

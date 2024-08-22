import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabelDirective]'
})
export class CustomLabelDirective implements OnInit {

  private el!: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null


  @Input() set color(color: string) {
    // console.log('color', color);
    this._color = color;
    this.setStyle();
  };

  @Input() set errors(errors: ValidationErrors | null | undefined) {
    // console.log('errors', errors);
    this._errors = errors;
    this.setErrorsMessages();
  };

  // constructor(private el: ElementRef<HTMLElement>) {
  constructor(private elelemnt: ElementRef) {
    // console.log ('constructor CustomLabelDirective');
    this.el = elelemnt;
    // this.el.nativeElement.innerHTML = 'Hello World';
  }
  
  ngOnInit() {
    // console.log ('CustomLabelDirective ngOnInit');
    this.setStyle();
  }

  setStyle() {
    if (!this.el) return;
    this.el.nativeElement.style.color = this._color;
  }

  setErrorsMessages() {

    if (!this.el) return;

    if (!this._errors) {
      this.el.nativeElement.innerHTML = '';
      return;
    }

    const errors = Object.keys(this._errors);
    if (errors.includes('required')) {
      this.el.nativeElement.innerHTML = 'This field is required';
      return;
    }

    if (errors.includes("minlength")) {
      // const minLengthError = this._errors["minlength"];
      // const requiredLength = minLengthError.requiredLength;
      // const actualLength = minLengthError.actualLength;
      // const errorMessage = Minimum length is ${requiredLength}, actual length is ${actualLength};
      // this.el.nativeElement.innerHTML = errorMessage;

      // const minRequeired = this._errors["minlength"]["requiredLength"];
      // const minActual = this._errors["minlength"]["actualLength"];
      const minRequeired = this._errors["minlength"];
      const minActual = this._errors["minlength"];

      if (minActual.actualLength < 6) {
        this.el.nativeElement.innerHTML = `This field must have at least ${minRequeired.requiredLength} characters, you have ${minActual.actualLength}`;
        return;
      } else {
        this.el.nativeElement.innerHTML = 'This field must have at least 6 characters';
        return;
      }
  
    }

    if (errors.includes("email")) {
      this.el.nativeElement.innerHTML = 'This field must be an email';
      return;
    }
  }
}

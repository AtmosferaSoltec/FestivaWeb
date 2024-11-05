import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-caja-text',
  standalone: true,
  imports: [],
  templateUrl: './caja-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CajaTextComponent),
      multi: true,
    },
  ]
})
export class CajaTextComponent implements ControlValueAccessor {

  @Input() label?: string
  
  value: string = '';

  // Métodos de ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  updateValue(e: any) {
    this.value = e.target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}

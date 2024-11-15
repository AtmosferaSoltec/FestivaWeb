import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-subir-archivo',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './subir-archivo.component.html'
})
export class SubirArchivoComponent {
  @Input() label?: string
  @Input() archivo: File | null = null;
  @Output() archivoChange = new EventEmitter<File | null>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivo = input.files[0];
      this.archivoChange.emit(this.archivo);
    }
  }

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  activarInput() {
    this.fileInput.nativeElement.click();
  }

  eliminarArchivo() {
    this.archivo = null;
    this.archivoChange.emit(null);
  }

}

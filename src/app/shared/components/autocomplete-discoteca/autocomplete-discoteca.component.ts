import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, startWith, map, debounceTime, switchMap } from 'rxjs';
import { DiscotecaService } from '../../../services/discoteca.service';

@Component({
  selector: 'app-autocomplete-discoteca',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './autocomplete-discoteca.component.html',
})
export class AutocompleteDiscotecaComponent {
  
  @Input()
  discotecaID?: number;

  stateCtrl = new FormControl('');
  filterDiscotecas: Observable<any[]>;

  private discotecaService = inject(DiscotecaService);

  constructor() {
    this.filterDiscotecas = this.stateCtrl.valueChanges.pipe(
      debounceTime(500),
      switchMap((value) => this._filterStates(value || ''))
    );
  }

  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();
    return this.discotecaService.search(filterValue);
  }
}

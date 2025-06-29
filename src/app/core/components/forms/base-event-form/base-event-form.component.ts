import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from "../../../lib/input-text/input-text.component";
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from '../../../lib/input-number/input-number.component';
import { EventAppType } from '../../../../common/interfaces/event';

export interface ControlConfig {
  label: string;
  type: 'text' | 'number';
  formControlName: string;
}

@Component({
  selector: 'e-base-event-form',
  imports: [
    InputTextComponent, 
    ReactiveFormsModule, 
    CommonModule, 
    InputTextComponent, 
    InputNumberComponent
  ],
  templateUrl: './base-event-form.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseEventFormComponent {
  @Input() event: EventAppType | undefined;
  form: FormGroup;
  controls: ControlConfig[] = [
    { label: 'Название', type: 'text', formControlName: 'name' },
    { label: 'Описание', type: 'text', formControlName: 'description' },
    { label: 'Место проведения', type: 'text', formControlName: 'location' },
  ];

  constructor(protected fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      location: [''],
    });
  }
}

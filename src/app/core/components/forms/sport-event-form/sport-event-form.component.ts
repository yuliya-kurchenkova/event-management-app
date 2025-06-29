import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BaseEventFormComponent } from '../base-event-form/base-event-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from "../../../lib/input-number/input-number.component";
import { SportEvent } from '../../../../common/interfaces/event';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../../../lib/input-text/input-text.component';

@Component({
  selector: 'e-sport-event-form',
  imports: [
    InputNumberComponent, 
    ReactiveFormsModule, 
    CommonModule, 
    InputTextComponent, 
    InputNumberComponent
  ],
  templateUrl: '../base-event-form/base-event-form.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportEventFormComponent extends BaseEventFormComponent implements OnInit, OnChanges {
  @Input() override event: SportEvent = {} as SportEvent;;
  @Output() formChange = new EventEmitter<FormGroup>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'] && this.event) {
      this.form.patchValue(this.event);
    }
  }

  constructor(protected override fb: FormBuilder) {
    super(fb);
    this.controls = [
      ...this.controls,
      { label: 'Количество участников', type: 'number', formControlName: 'participants' }
    ];
    this.form.addControl('participants', this.fb.control(0));
  }

  ngOnInit(): void {
    this.formChange.emit(this.form);
  }
}
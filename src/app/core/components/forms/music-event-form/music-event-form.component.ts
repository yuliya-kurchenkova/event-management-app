import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BaseEventFormComponent } from '../base-event-form/base-event-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from "../../../lib/input-text/input-text.component";
import { MusicEvent } from '../../../../common/interfaces/event';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from '../../../lib/input-number/input-number.component';

@Component({
  selector: 'e-music-event-form',
  imports: [
    InputTextComponent, 
    ReactiveFormsModule, 
    CommonModule, 
    InputTextComponent, 
    InputNumberComponent
  ],
  templateUrl: '../base-event-form/base-event-form.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicEventFormComponent extends BaseEventFormComponent implements OnInit, OnChanges {
  @Input() override event: MusicEvent = {} as MusicEvent;
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
      { label: 'Жанр музыки', type: 'text', formControlName: 'genre' }
    ];
    this.form.addControl('genre', this.fb.control(''));
  }

  ngOnInit(): void {
    this.formChange.emit(this.form);
  }
}
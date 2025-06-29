import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractInputControl } from '../../../common/abstract/abstract-control.directive';

@Component({
  selector: 'e-input-text',
  imports: [],
  templateUrl: './input-text.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends AbstractInputControl<string> {
  protected getFallbackValue(): string {
    return '';
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.innerValue = input.value;
    this.onChange(this.value);
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractInputControl } from '../../../common/abstract/abstract-control.directive';

@Component({
  selector: 'e-input-number',
  imports: [],
  templateUrl: './input-number.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputNumberComponent extends AbstractInputControl<number> {
  protected getFallbackValue(): number {
    return 0;
  }

  onInput(event: Event): void {
    const num = parseFloat((event.target as HTMLInputElement).value);
    this.updateValue(isNaN(num) ? 0 : num);
  }
}
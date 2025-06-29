import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'e-button-base',
  imports: [],
  templateUrl: './button-base.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBaseComponent {
  @Input() public label: string = '';
  @Input() public type: 'button' | 'submit' | 'reset' = 'button';
  @Input() public isDisabled: boolean = false;
  @Input() public padding: string = '20px 0';
  @Output() public click = new EventEmitter<void>();

  public onClick(): void {
    this.click.emit();
  }
}

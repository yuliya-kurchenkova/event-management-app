import { ChangeDetectorRef, Directive, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

const EMPTY_FUNCTION = () => {};

@Directive()
export abstract class AbstractInputControl<T> implements ControlValueAccessor {
  protected onChange: Function = EMPTY_FUNCTION;
  protected onTouched: Function = EMPTY_FUNCTION;
  protected innerValue?: T | null;

  get value(): T | null {
    return this.innerValue ?? this.getFallbackValue();
  }

  constructor(
    @Optional() @Self() protected ngControl: NgControl,
    protected cdr: ChangeDetectorRef,
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  writeValue(value: T | null): void {
    this.innerValue = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  protected updateValue(value: T): void {
    this.innerValue = value;
    this.onChange(value);
    this.cdr.markForCheck();
  }

  protected updateTouched(): void {
    this.onTouched();
  }

  protected abstract getFallbackValue(): T;
}
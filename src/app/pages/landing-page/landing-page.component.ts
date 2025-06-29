import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonBaseComponent } from "../../core/lib/button-base/button-base.component";

@Component({
  selector: 'app-landing-page',
  imports: [ButtonBaseComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  private router = inject(Router);

  public goToEventList() {
    this.router.navigate(['/events']);
  }

}

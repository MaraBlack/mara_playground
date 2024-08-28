import { Component } from '@angular/core';
import { GridLoadingScreenComponent } from './components/grid-loading-screen/grid-loading-screen.component';
import { MovingCloudsComponent } from './components/moving-clouds/moving-clouds.component';

@Component({
  selector: 'app-small-animations',
  standalone: true,
  imports: [GridLoadingScreenComponent, MovingCloudsComponent],
  templateUrl: './small-animations.component.html',
  styleUrl: './small-animations.component.scss'
})
export class SmallAnimationsComponent {

}

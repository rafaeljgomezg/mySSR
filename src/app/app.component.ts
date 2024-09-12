import { afterNextRender, afterRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { AsyncPipe, isPlatformBrowser, isPlatformServer, JsonPipe, NgStyle } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AsyncPipe, 
    JsonPipe,
    MatButtonModule,
    MatCardModule,
    NgStyle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly platformId=inject(PLATFORM_ID);

  private readonly dataSVC = inject(DataService);

  products$ = this.dataSVC.getProducts();


  constructor() {
    //console.log('This platform is: ',this.platformId)

    afterNextRender(() => {
      localStorage.setItem('cart', 'RGOMEZ');
      console.log('isPlatformBrowser', this.platformId)
    })
    
   
    afterRender(() => {
      console.log('isPlatformServer', this.platformId)

    })

   
  }

}

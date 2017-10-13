import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode';
  
 imageArray = [];

  fillImageArray() {
    for (let y = 0; y < 5; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.imageArray.push('Crimson');
      } else if (randNum === 2) {
        this.imageArray.push('DarkGreen');
      } else if (randNum === 3) {
        this.imageArray.push('DarkOrange');
      } else if (randNum === 4) {
        this.imageArray.push('DeepSkyBlue');
      } else if (randNum === 5) {
        this.imageArray.push('GoldenRod');
      }
    }
  }

ngOnInit() {
    this.fillImageArray();
  }
  

}


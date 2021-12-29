import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @Input() image = '';
  @Input() texto = '';


  constructor(public homeService: HomeService) { }

  ngOnInit(): void {

    // this.homeService.createUser().subscribe((data: any) => {
    //   console.log(data);
      
    // });
  }

}

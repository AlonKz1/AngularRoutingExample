import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kefel',
  templateUrl: './kefel.component.html',
  styleUrls: ['./kefel.component.css'],
})
export class KefelComponent implements OnInit {
  size: number = 5;
  values: Array<{ x: number; y: number }> = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {

      if(params['sizenum']) {
        this.size = params['sizenum']
      }
      
      for (let index = 1; index <= this.size; index++) {
        for (let index2 = 1; index2 <= this.size; index2++) {
          this.values.push({ x: index, y: index2 });
        }
      }
    })


  }
}

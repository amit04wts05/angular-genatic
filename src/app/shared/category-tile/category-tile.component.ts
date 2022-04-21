import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss']
})
export class CategoryTileComponent implements OnInit {

  @Input() category:any; 
  constructor() { }

  ngOnInit(): void {
  }

}

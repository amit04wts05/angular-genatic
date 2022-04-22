import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products = [{
    title: "Fitted Cap",
    description: "This classic stretch-fitted cap features a three-layer sweatband with patented Stain-Block technology to.",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Women's - Lucid LS Tee",
    description: "The right mix of form and function. The Center logo Long-Sleev Tee is made of moisture-wicking perfor.",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Water Bottle",
    description: "Drinkware made for a journey. Keeps 475 mL/16 fl oz of liquid hot or cold for hours. Vacuum insulated an...",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Women's - Lucid LS Tee",
    description: "The right mix of form and function. The Center Logo Long-Sleeve Tee is made of moisture-wicking perfor...",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Camp Cup",
    description: "Great for heading off the grid or into the backyard. Keeps 355 mL/12 fl oz of liquid hot or cold for hours...",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Fitted Cap",
    description: "This classic stretch-fitted cap features a three-layer sweatband with patented Stain-Block technology to.",
    image: "./assets/images/cap.png"
  },
  ]

  categories = [{
    name: "APPAREL",
    description: "Suites your style anytime and everytime.",
    image: "./assets/images/black-tshirt.png"
  },
  {
    name: "headwear",
    description: "Always be on top with your cool wearables.",
    image: "./assets/images/black-cap.png"
  },
  {
    name: "Merchandise",
    description: "Style your living with our products",
    image: "./assets/images/cap.png"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

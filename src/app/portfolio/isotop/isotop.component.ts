import { Component, OnInit } from '@angular/core';
declare var Isotope: any;
import isotope from 'isotope-layout';
import * as $ from 'jquery';

@Component({
  selector: 'app-isotop',
  templateUrl: './isotop.component.html',
  styleUrls: ['./isotop.component.css'],
  
})
export class IsotopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //var $grid = $('.grid').isotope();
   
  }
  sortButtonClickHtml() {
    const grid = document.querySelector('.grid');
    const iso = new Isotope(grid, {
      filter: '.html'
      }
    );
  }
  sortButtonClickAngular() {

    const grid = document.querySelector('.grid');
    const iso = new Isotope(grid, {
      filter: '.angular'
      }
    );
  }
  sortButtonClickJoomla() {

    const grid = document.querySelector('.grid');
    const iso = new Isotope(grid, {
      filter: '.joomla'
      }
    );
  }
    
  }


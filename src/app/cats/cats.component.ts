import { Component } from '@angular/core';
import {CATS} from "../mock-cats";
import {Cat} from '../cats';
import * as _ from 'lodash';



@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent {
  cats = CATS;
 

  
  
  

}

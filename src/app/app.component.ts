import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../assets/products'
// import { RESULTS } from './services/results'
import { Http, Response, Headers } from '@angular/http'



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	products = PRODUCTS;
	searchQuery: string = null;
	resultShower: boolean = false;
	timer = null
	companyCount
	resultLimit: 100



  keyDown(){
  	this.resultShower = false;
	  if ( this.timer ){
	    clearTimeout( this.timer );
	    this.timer = window.setTimeout(()=>{
				   		this.search()}, 1000)
						}
	  else{
	    this.timer = window.setTimeout(()=>{
				   		this.search()}, 1000)
						}
	}



	search(){
		// console.log('searching');
		if (this.searchQuery){
			if (this.searchQuery.length > 2){
				this.resultShower = true;
				}
				// console.log(this.resultShower)
				this.timer = null
			}
	}



  objectLength(obj) {
		  var result = 0;
		  for(var prop in obj) {
		    if (obj.hasOwnProperty(prop)) {
		    // or Object.prototype.hasOwnProperty.call(obj, prop)
		      result++;
		    }
		  }
		  return result;
		}


	ngOnInit(){
		this.companyCount = this.objectLength(this.products); 
		}


}

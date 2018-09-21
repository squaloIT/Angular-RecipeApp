import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Ime','Opis','https://www.okokorecepten.nl/i/recepten/kookboeken/2014/jamies-comfort-food/jamie-oliver-hamburger-500.jpg'),
    new Recipe('Recept broj dva','Veoma ukusan recept na bazi americkoh sira sa sarajevskim patlidzanom','https://www.okokorecepten.nl/i/recepten/kookboeken/2014/jamies-comfort-food/jamie-oliver-hamburger-500.jpg')
  ];
  @Output('sendingRecipe') clickEmitter = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeItemClick(recipe:Recipe){
    // console.log("sdasds",recipe);
    this.clickEmitter.emit(recipe);
  }

}

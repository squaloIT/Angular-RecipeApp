import { Component, Output,EventEmitter } from "@angular/core";
import {Recipe} from './recipe.model';

@Component({
    selector: "app-recipe",
    templateUrl:'./recipe.component.html',
    styleUrls:["./recipe.component.css"]
})
export class RecipeComponent{
  // @Output('detailsToShow') detailsEmitter = new EventEmitter<Recipe>();
	public recipe:Recipe;

}
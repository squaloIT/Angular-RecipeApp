import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page="shoppingList";
  
  viewPage(pageForView){
    if(pageForView==="shopping-list"){
      this.page="shoppingList";
    } else if (pageForView==="recipes"){
      this.page="recipes";
    }
  }
  
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('onPageChange') pageChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }
  onPageChange(data:string){
    if(data === "Shopping list"){
      this.pageChange.emit("shopping-list");
    } else if (data==="Recipes"){
      this.pageChange.emit("recipes");
    }
  }
}

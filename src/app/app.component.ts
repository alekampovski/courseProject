import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // showRecipes: boolean = true;
  // showShoppingList: boolean = false;
  selectedSection: string = 'recipes';

  handleClickedSection(section: string) {
    this.selectedSection = section;
  }
}

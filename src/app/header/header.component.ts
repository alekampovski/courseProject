import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Output() clickedSection = new EventEmitter<string>();
  collapsed: boolean = true;

  handleSelect(selectedSection: string) {
    this.clickedSection.emit(selectedSection);
  }
}

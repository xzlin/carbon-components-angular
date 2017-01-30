import { Component, Input} from "@angular/core";

@Component({
	selector: "cdl-side-nav",
	template: `

    <aside class="left-nav" 
    	   [ngClass]="{isOpen: open}" 
    	   [attr.aria-expanded]="open" 
    	   role="complementary">
		<ng-content></ng-content>
    </aside>
  `,
	styleUrls: ["./side-nav.component.scss"]
})
export class SideNav {
	@Input() open: boolean = true;
}
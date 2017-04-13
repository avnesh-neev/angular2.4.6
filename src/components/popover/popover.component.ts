import { Directive, ElementRef, AfterViewInit } from '@angular/core';

const $ = require('jquery');
require('jquery-ui');

@Directive({
	selector: "[popover]"
	})

export class PopOver implements AfterViewInit {
constructor(public el: ElementRef) {
	// console.log('hello in constructor');
}

ngAfterViewInit() {
	// console.log('hello in AfterViewInit');

	$(this.el.nativeElement).popover({  
		 trigger: 'click'
	});
	/*$('body').on('click', function (e) {
		  $('[data-toggle="popover"]').each(function () {
			   //the 'is' for buttons that trigger popups
			    //the 'has' for icons within a button that triggers a popup
		      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
        }
    });
});*/
}
}
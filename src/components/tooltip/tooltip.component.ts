import { Directive, ElementRef, AfterViewInit, Input,AfterViewChecked } from '@angular/core';

const $ = require('jquery');
require('jquery-ui');
require('bootstrap');

@Directive({
	selector: "[tooltip]"
})

export class ToolTip implements AfterViewInit,AfterViewChecked {
	@Input() title: String;
	constructor(public el: ElementRef) { }

	ngAfterViewInit() {

		// if ($(this.el.nativeElement).hasClass("mapping-exp")) {
		// 	if (this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth && !$(this.el.nativeElement).attr('title')) {
		// 		$(this.el.nativeElement).tooltip();
		// 		$(this.el.nativeElement).on('click', function() {
		// 			$(this).tooltip('hide');
		// 		});

		// 	}
		// }
		// else{
		// 		$(this.el.nativeElement).tooltip({
		// 		title:this.title
		// 	});
		// $(this.el.nativeElement).on('click', function() {
		// 			$(this).tooltip('hide');
		// 		});
		// }

	}

	ngAfterViewChecked(){
		if ($(this.el.nativeElement).hasClass("mapping-exp")) {
			if (this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth) {
				$(this.el.nativeElement).tooltip({
					delay:  { "show": 500, "hide": 0 }
				}).attr('data-original-title',this.title);
				$(this.el.nativeElement).on('click', function() {
					$(this).tooltip('hide');
				});

			}
			else{
				$(this.el.nativeElement).tooltip('dispose');
			}
		}
		else{
			$(this.el.nativeElement).tooltip().attr('data-original-title',this.title);
			$(this.el.nativeElement).on('click', function() {
				$(this).tooltip('hide');
			});
		}
	}



}


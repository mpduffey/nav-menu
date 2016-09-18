import {Component, HostListener, Input}				from '@angular/core';
import {UserService}													from 'modules/user-service/user-service';
import {ModalService}													from 'modules/modal/modal-service';

@Component({
	selector:			'nav-menu',
	template:			`
		<div class="header" [ngClass]="{'header-fixed': pageYOffset>0, 'header-prepare': pageYOffset>100}">
			<div class="header-inner">
				<div class="nav-menu-icon" [ngClass]="{active: menuActive}"><a (click)="menuActive=!menuActive"><i class="fa fa-bars"></i></a></div>
				<div class="nav-menu singlepage-nav" [ngClass]="{active: menuActive}">
					<ul class="nav-menu-inner">
						<li *ngFor="let item of menu"><a [href]="item.link" (click)="smoothScroll($event, item.external)" [attr.target]="item.external?'_blank':null">{{item.label}}</a></li>
						<li *ngIf="showLogin"><a (click)="login($event)">Login</a></li>
					</ul>
				</div>
			</div>
		</div>
	`,
	styles:			[`
		ul.stately {width:300px; font-size:300px; color:#f0f0f0;}
		a {color: #333; cursor: pointer; text-decoration: none;}
		.header {position: absolute; text-align: center; top: 0px; z-index: 1001; color: #fff; width: 100%; height: 99px; transition: background-color 200ms ease-in-out 0s; -o-transition: background-color 200ms ease-in-out 0s; -moz-transition: background-color 200ms ease-in-out 0s; -webkit-transition: background-color 200ms ease-in-out 0s;}
		.header.header-prepare {background-color: rgba(51, 51, 51, 0.90);}
		.header.header-fixed {display: block; margin-top: 0 !important; position: fixed; height: 65px;}
		.header-fixed .nav-menu ul.nav-menu-inner li a {padding: 26px 12px;}
		.header-fixed .logo a {margin-top: 15px; margin-bottom: 15px; width: 260px; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}
		.header-fixed .logo a img {max-width: 200px; max-height: 120px; width: auto; height: auto;}
		.header-inner {padding-left: 30px; padding-right: 30px; position: relative;}
		.nav-menu-icon {display: none; float: right;}
		.nav-menu-icon a {color: #fff; display: block; font-size: 17px; padding: 19px 0;}
		.nav-menu-icon.active a, .nav-menu-icon a.active, .nav-menu-icon:hover a, .nav-menu-icon a:hover, .nav-menu ul.nav-menu-inner li.active a, .nav-menu ul.nav-menu-inner li a.active, .nav-menu ul.nav-menu-inner li:hover a, .nav-menu ul.nav-menu-inner li a:hover, .header-fixed .nav-menu ul.nav-menu-inner li a.current, .header-fixed .nav-menu ul.nav-menu-inner li.current a {color: #c7a674;}
		.header-fixed .nav-menu ul.nav-menu-inner li a {padding: 26px 12px;}
		.nav-menu {position: static; float: right; display: block;}
		.nav-menu.active {display: block;}
		.nav-menu ul.nav-menu-inner {margin: 0; padding: 0; list-style: none;}
		.nav-menu ul.nav-menu-inner li {display: inline-block; list-style: none; text-align: center;}
		.nav-menu ul.nav-menu-inner li a {display: block; color: #fff; font-size: 13px; line-height: 1; padding: 43px 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-family: "Raleway",sans-serif;}
		@media all and (max-width: 1024px) {
			.header {height: 65px;}
			.header .logo a {margin-top: 15px; margin-bottom: 15px; width: 260px; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}
			.nav-menu ul.nav-menu-inner li {display: block; width: 100%;}
			.nav-menu {position: fixed; top: 65px; left: 0; float: none; display: block; width: 100%; background: #333; overflow-y: auto; display: none; z-index: 999;}
			.nav-menu-icon, .header-fixed .nav-menu-icon {display: inline-block; float: right;}
			.nav-menu ul.nav-menu-inner li a, .header-fixed .nav-menu ul.nav-menu-inner li a {padding: 20px 12px; border-top: 1px solid #444;}
		}
		.logo {float: left; text-align: left; display: inline-block;}
		.logo a {display: block; margin-top: 30px; margin-bottom: 30px; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}
		.logo a img {max-width: 280px; max-height: 150px; width: auto; height: auto; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}
	`]
})

export class NavMenu {
	@Input() menu;
	@Input() showLogin:boolean = false;
	@Input("scroll-duration") scrollDuration:integer = 1000;
	
	constructor(private user:UserService, private modal:ModalService) {}
	@HostListener('window:scroll', ['$event']) fixMenu(event) {
			this.pageYOffset = window.pageYOffset;
		}
	smoothScroll = (e, ext) => {
		if(!ext) {
			e.preventDefault();
			this.menuActive = false;
			$('html,body').scrollTo(e.target.hash, this.scrollDuration); 
		}
	}
	login = (e) => {
		e.preventDefault();
		this.user.launchLogin();
	}
}
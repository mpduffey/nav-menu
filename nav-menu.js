"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NavMenu = (function () {
    function NavMenu() {
        var _this = this;
        this.showLogin = false;
        this.scrollDuration = 1000;
        this.smoothScroll = function (e, ext) {
            if (!ext) {
                e.preventDefault();
                _this.menuActive = false;
                $('html,body').scrollTo(e.target.hash, _this.scrollDuration);
            }
        };
    }
    NavMenu.prototype.fixMenu = function (event) {
        this.pageYOffset = window.pageYOffset;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavMenu.prototype, "menu", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavMenu.prototype, "showLogin", void 0);
    __decorate([
        core_1.Input("scroll-duration"), 
        __metadata('design:type', Object)
    ], NavMenu.prototype, "scrollDuration", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavMenu.prototype, "fixMenu", null);
    NavMenu = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            template: "\n\t\t<div class=\"header\" [ngClass]=\"{'header-fixed': pageYOffset>0, 'header-prepare': pageYOffset>100}\">\n\t\t\t<div class=\"header-inner\">\n\t\t\t\t<div class=\"nav-menu-icon\" [ngClass]=\"{active: menuActive}\"><a (click)=\"menuActive=!menuActive\"><i class=\"fa fa-bars\"></i></a></div>\n\t\t\t\t<div class=\"nav-menu singlepage-nav\" [ngClass]=\"{active: menuActive}\">\n\t\t\t\t\t<ul class=\"nav-menu-inner\">\n\t\t\t\t\t\t<li *ngFor=\"let item of menu\"><a [href]=\"item.link\" (click)=\"smoothScroll($event, item.external)\" [attr.target]=\"item.external?'_blank':null\">{{item.label}}</a></li>\n\t\t\t\t\t\t<li *ngIf=\"showLogin\"><a (click)=\"login($event)\">Login</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\tul.stately {width:300px; font-size:300px; color:#f0f0f0;}\n\t\ta {color: #333; cursor: pointer; text-decoration: none;}\n\t\t.header {position: absolute; text-align: center; top: 0px; z-index: 1001; color: #fff; width: 100%; height: 99px; transition: background-color 200ms ease-in-out 0s; -o-transition: background-color 200ms ease-in-out 0s; -moz-transition: background-color 200ms ease-in-out 0s; -webkit-transition: background-color 200ms ease-in-out 0s;}\n\t\t.header.header-prepare {background-color: rgba(51, 51, 51, 0.90);}\n\t\t.header.header-fixed {display: block; margin-top: 0 !important; position: fixed; height: 65px;}\n\t\t.header-fixed .nav-menu ul.nav-menu-inner li a {padding: 26px 12px;}\n\t\t.header-fixed .logo a {margin-top: 15px; margin-bottom: 15px; width: 260px; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}\n\t\t.header-fixed .logo a img {max-width: 200px; max-height: 120px; width: auto; height: auto;}\n\t\t.header-inner {padding-left: 30px; padding-right: 30px; position: relative;}\n\t\t.nav-menu-icon {display: none; float: right;}\n\t\t.nav-menu-icon a {color: #fff; display: block; font-size: 17px; padding: 19px 0;}\n\t\t.nav-menu-icon.active a, .nav-menu-icon a.active, .nav-menu-icon:hover a, .nav-menu-icon a:hover, .nav-menu ul.nav-menu-inner li.active a, .nav-menu ul.nav-menu-inner li a.active, .nav-menu ul.nav-menu-inner li:hover a, .nav-menu ul.nav-menu-inner li a:hover, .header-fixed .nav-menu ul.nav-menu-inner li a.current, .header-fixed .nav-menu ul.nav-menu-inner li.current a {color: #c7a674;}\n\t\t.header-fixed .nav-menu ul.nav-menu-inner li a {padding: 26px 12px;}\n\t\t.nav-menu {position: static; float: right; display: block;}\n\t\t.nav-menu.active {display: block;}\n\t\t.nav-menu ul.nav-menu-inner {margin: 0; padding: 0; list-style: none;}\n\t\t.nav-menu ul.nav-menu-inner li {display: inline-block; list-style: none; text-align: center;}\n\t\t.nav-menu ul.nav-menu-inner li a {display: block; color: #fff; font-size: 13px; line-height: 1; padding: 43px 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-family: \"Raleway\",sans-serif;}\n\t\t@media all and (max-width: 1024px) {\n\t\t\t.header {height: 65px;}\n\t\t\t.header .logo a {margin-top: 15px; margin-bottom: 15px; width: 260px; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}\n\t\t\t.nav-menu ul.nav-menu-inner li {display: block; width: 100%;}\n\t\t\t.nav-menu {position: fixed; top: 65px; left: 0; float: none; display: block; width: 100%; background: #333; overflow-y: auto; display: none; z-index: 999;}\n\t\t\t.nav-menu-icon, .header-fixed .nav-menu-icon {display: inline-block; float: right;}\n\t\t\t.nav-menu ul.nav-menu-inner li a, .header-fixed .nav-menu ul.nav-menu-inner li a {padding: 20px 12px; border-top: 1px solid #444;}\n\t\t}\n\t\t.logo {float: left; text-align: left; display: inline-block;}\n\t\t.logo a {display: block; margin-top: 30px; margin-bottom: 30px; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}\n\t\t.logo a img {max-width: 280px; max-height: 150px; width: auto; height: auto; transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; -moz-transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], NavMenu);
    return NavMenu;
}());
exports.NavMenu = NavMenu;
//# sourceMappingURL=nav-menu.js.map
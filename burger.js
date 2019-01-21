// Created by Gizza of White-mesa (the best studio and the best progger) in 21.01.2019
class Burger {
	constructor(settings) {
		this.trigger = settings.windowSize || 720;
		this.elem = settings.elem || 'nav';
		this.srcImg = settings.srcImg || 'https://image.flaticon.com/icons/svg/462/462998.svg';
		this.inElem = settings.inElem || '.header .container';
		this.list = settings.elem || 'nav'

		this.funInnit()
	}

	funInnit() {
		if ($(window).width() < this.trigger) {
			this.hiddenMenu(this.trigger, this.elem);
			this.addBurger(this.srcImg, this.inElem)
			var menu = this.createMobileMenu(this.list)
			this.insertMobileMenu(menu);
			this.showMobileMenu('.mobile-menu-burger')
			this.hiddenMobileMenu('.mobile-menu-burger', '.exit-mobile-menu')
		}
	}

	hiddenMenu() {
		$(this.elem).css('display', 'none');
	}

	addBurger() {
		var icon = "<img class='burger-icon' src='"+ this.srcImg +"' alt='Меню'>";
		$(this.inElem).append(icon);
	}

	createMobileMenu() {
		var mobileMenu = "<ul class='mobile-menu-burger'>"
		mobileMenu += "<li class='exit-mobile-menu'>x</li>"
		$(this.list).children().each(function(i, e) {
			var href = $(e).attr('href');
			var text = $(e).text();
			mobileMenu += "<li class='mobile-menu-item-burger'>"
			mobileMenu += "<a class='link-burger' href='"+href+"'>"+text+"</a>"
			mobileMenu += '</li>'
		})
		return mobileMenu;
	}

	insertMobileMenu(menu) {
		$('body').append(menu)
	}

	showMobileMenu(menu) {
		$('.burger-icon').click(function() {
			$(menu).animate({
				left: '-1%',
			}, 1000)	
		})
	}

	hiddenMobileMenu(menu, exit) {
		$(exit).click(function() {
			$(menu).animate({
				left: '-110vw',
			}, 1000);
		})
		$('.link-burger').click(function() {
			$(menu).animate({
				left: '-110vw',
			}, 1000);
		})
	}
}
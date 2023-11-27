"use strict";
const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
        
function doBackToTop() {
    var backToTop = {
        element: $('.go-top'),
        offset: 350,
        duration: 350
    };
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > backToTop.offset) {
            backToTop.element.removeClass('go-top_is-hidden').addClass('go-top_is-visible');
        } else {
            backToTop.element.removeClass('go-top_is-visible').addClass('go-top_is-hidden');
        }
    });
    backToTop.element.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, backToTop.duration);
        return false;
    });
}

function fakeAjaxMasonry(button) {

        var filterActive = $('.filter__link_active').data('filter');
    if(!button.hasClass('no-works') && (filterActive === '*' || filterActive === '.products')) {
        // var worksFake = ['9', '4', '10', '11', '12', '13'];
           // var worksFake = ['4', '9', '10', '11','13'];
        var worksFake = ['4'];
        var items = '<div>';
        var worksTitle = ['Skillset'];
        var worksType = ['#Toolbox'];
        // var worksTitle = ['3D Printed Ring','Voice Emoji',"Perfume Purchase","AR Pong","Sketch"];
        // var worksType = ['3D Printing',"VOI","Ecommerce Research","AR","Drawings"];
        
        for (var i = 0; i < worksFake.length; i++) {
            var wt= worksTitle[i]
            var wtt=worksType[i]
             items += '<div class="portfolio__item products"><div class="portfolio__item-content"><a href="work.html" class="portfolio__item-mobile-image-link"><img src="img/portfolio-1-'+ worksFake[i] +'.png" class="portfolio__item-image" alt="custom alt 3"></a><div class="portfolio__item-image_hover" style="background-image: url(img/portfolio-1-'+ worksFake[i] +'.png);"></div><div class="portfolio__item-overlay"><a href="work.html" class="portfolio__item-image-link"></a><div class="portfolio__item-title"><a href="work.html" class="portfolio__item-title-link">3D Printed Ring</a></div><div class="portfolio__item-cats"><a href="#" class="portfolio__item-cat">Brands</a>,<a href="#" class="portfolio__item-cat">products</a></div></div></div></div>';
        }

    // var filterActive = $('.filter__link_active').data('filter');
    // if(!button.hasClass('no-works') && (filterActive === '*' || filterActive === '.products')) {

    //     var worksFake = ['9', '4', '10', '11', '12', '13'];
    //     var items = '<div>';
    
    //     for (var i = 0; i < worksFake.length; i++) {
    //         items += '<div class="portfolio__item products"><div class="portfolio__item-content"><a href="work.html" class="portfolio__item-mobile-image-link"><img src="img/portfolio-1-'+ worksFake[i] +'.jpg" class="portfolio__item-image" alt="custom alt 3"></a><div class="portfolio__item-image_hover" style="background-image: url(img/portfolio-1-'+ worksFake[i] +'-hover.jpg);"></div><div class="portfolio__item-overlay"><a href="work.html" class="portfolio__item-image-link"></a><div class="portfolio__item-title"><a href="work.html" class="portfolio__item-title-link">3D Printed Ring</a></div><div class="portfolio__item-cats"><a href="#" class="portfolio__item-cat">Brands</a>,<a href="#" class="portfolio__item-cat">products</a></div></div></div></div>';
    //     }
        items += '</div>';
    
        var g = $(items).find('.portfolio__item');
    
        g.imagesLoaded(function() {
            $('#portfolio-masonry').append(g).isotope('appended', g).isotope('layout');
        });
        button.addClass('no-works').html('Contact Me For More!');
    }  else {
        button.html('Email: lunaatlgt@gmail.com 😊');
    }
}

function fakeAjaxSimple(button) {
    var filterActive = $('.filter__link.active').data('filter');
    if(!button.hasClass('no-works') && (filterActive === 'all' || filterActive === '.products')) {
        var worksFake = ['7', '8', '9', '10', '11'];
        var items = '<div>';
    
        for (var i = 0; i < worksFake.length; i++) {
            items += '<div data-cat="products all" class="portfolio__item portfolio__item-height  all products"><div class="portfolio__item-content"><a href="work.html" class="portfolio__item-mobile-image-link"><img src="img/portfolio-2-'+ worksFake[i] +'@2x.png" srcset="img/portfolio-2-'+ worksFake[i] +'@1x.png 1x, img/portfolio-2-'+ worksFake[i] +'@2x.png 2x" class="portfolio__item-image" alt="custom alt 3"></a><div class="portfolio__item-image_hover" style="background-image: -webkit-image-set( url(img/portfolio-2-'+ worksFake[i] +'-hover@1x.png) 1x, url(img/portfolio-2-'+ worksFake[i] +'-hover@2x.png) 2x); background-image: url(img/portfolio-2-'+ worksFake[i] +'-hover@2x.png);"></div><div class="portfolio__item-overlay"><a href="work.html" class="portfolio__item-image-link"></a><div class="portfolio__item-title"><a href="work.html" class="portfolio__item-title-link">Bard reed</a></div><div class="portfolio__item-cats"><a href="#" class="portfolio__item-cat">Brands</a>,<a href="#" class="portfolio__item-cat">products</a></div></div></div></div>'
        }
        items += '</div>';
    
        var g = $(items).find('.portfolio__item');
    
        g.imagesLoaded(function() {
            $('#portfolio-simple').mixItUp('insert', 5, g, {filter: 'all'})
        });
        button.addClass('no-works').html('Contact Me For More!');
    }  else {
        button.html('Email: lunaatlgt@gmail.com 😊');
    }
}
function DoFakeAjaxPostSide(){
    var btn = jQuery(".load-more-btn__posts--list button");

    if(btn.length){
        btn.on('click', function(){
            if(!jQuery(this).hasClass('no-posts')) {
                var postsFake = ['6', '7', '8', '9', '10'];
                var items = "";
                for (var i = 0; i < postsFake.length; i++) {
                    items +='<div class="blog-item blog-item--list"><div class="blog-item__preview-wrap blog-item__preview-wrap--list"><div class="blog-item__preview blog-item__preview--list" style="background-image: url(img/post-side-' + postsFake[i] + '@2x.jpg);"></div></div><div class="blog-item__info-wrap"><a href="post.html" class="blog-item__title">Designing a Portfolio Website with Oversized Typography</a><div class="blog-item__info blog-item__info--list"><span class="blog-item__info-date">August 28, 2018</span><span class="blog-item__info-cat"><a href="#" class="blog-item__info-cat-link">Design</a></span><span class="blog-item__info-author">By: <a href="#" class="blog-item__info-author-link">Larry Carroll</a></span><div class="blog-item__info-text-list"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et</p></div></div></div></div>';
                }
                jQuery(".blog-list").append(items);
                jQuery(this).addClass('no-posts').html('No posts!');
            }
        });
    }
}

function DoFakeAjaxPostGrid(){
    var btn = jQuery(".load-more-btn__posts button");

    if(btn.length) {
        btn.on('click', function(){
            if(!jQuery(this).hasClass('no-posts')) {
                var postsFake = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
                var items = "";
                for (var i = 0; i < postsFake.length; i++) {
                    items += '<div class="blog-item blog-item--list blog-item--col-2"><div class="blog-item__preview" style="background-image: url(img/post-'+postsFake[i]+'@2x.jpg);"></div><a href="post.html" class="blog-item__title">The selfish reason why you should teach in your spare time</a><div class="blog-item__info"><span class="blog-item__info-circle"></span><span class="blog-item__info-text">5 min to read</span><span class="blog-item__info-arrow"></span></div></div>';
                }
                jQuery(".blog-column").append(items);
                jQuery(this).addClass('no-posts').html('No posts!');
            }
        });
    }
    
}
var color = "hellothere";

function pcd() {

if (document.getElementById('pass1').value != color ){
    alert ('please try agian');
    return false;
    
}

if (document.getElementById('pass1').value ==color ){
    return true
}

}
/////////////////////////////////////////////
// MOBILE MENU
/////////////////////////////////////////////
function doMainMobileMenu() {
    
    var menuHolder = $('.navigation-bar'), 
        menuToggle = $('.main-menu-toogle'), 
        menuIsOpen = false,
        menuInited = true;

    menuToggle.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('burger--active');
        if (!menuIsOpen) {
            menuIsOpen = true;
            menuOpen();
        } else {
            menuClose();
            menuIsOpen = false;
        }
    });

    function menuOpen() {
        $('body').addClass('menu-is-open');
        $('.sf-menu').removeClass('sf-menu').addClass('sf-menu-off');
        menuHolder.css('display', 'block');
    }

    function menuClose() {
        $('body').removeClass('menu-is-open');
        $('.sf-menu-off').removeClass('sf-menu-off').addClass('sf-menu');
        menuHolder.find('li').removeClass('nav__sub--open');
        menuHolder.css('display', 'none');
    }

    $(document).on('click', '.nav__item--has-children > a', function(e) {
        e.preventDefault();
        $(this).toggleClass('nav__link--open');
        $(this).siblings('.nav__sub').toggleClass('nav__sub--open');
    });
    
    $(document).on('keyup', function(e) {
        if (e.keyCode === 27) {
            menuClose();
            menuIsOpen = false;
        }
    });
    $(document).on('click', '.navigation-bar', function(e) {
        e.stopPropagation();
    });
    
    $(window).resize(function() {
        /////////////////////////////////////////////
        // INIT OR DESTROY MENU WHEN PAGE RESIZE
        /////////////////////////////////////////////
        if(window.innerWidth < 1200) {
            if(menuInited) {
                $(".sf-menu").superfish('destroy');
                menuInited = false;
            }
        } else {
            
            if(!menuInited) {
                menuClose();
                menuIsOpen = false;
                menuToggle.removeClass('burger--active');
                $(".sf-menu").superfish({
                    delay       : 300,
                    animation   : { opacity: 'show', marginTop: '9px' },
                    animationOut: { opacity: 'hide', marginTop: '29px' },   // an object equivalent to first parameter of jQuery’s .animate() method Used to animate the submenu closed
                    speed:         200,           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
                    speedOut:      100, 
                });
                jQuery('.navigation-bar').show();
                menuInited = true;
            }
        }
    });
}

/////////////////////////////////////////////
// OPEN SIDEBAR
/////////////////////////////////////////////
function sidebarOpen(sidebarWrapperHolder, sidebarHolder) {
    $('body').addClass('sidebar-is-open');
    // sidebarHolder.show();
    sidebarWrapperHolder.transition({
        opacity: '1',
        visibility: 'visible',
        duration: 100,
        easing: 'linear'
    });
    sidebarHolder.transition({
        x: '0px'
    });
}

// ///////////////////////////////////////////
// CLOSE SIDEBAR
// ///////////////////////////////////////////
function sidebarClose(sidebarWrapperHolder, sidebarHolder) {
    $('body').removeClass('sidebar-is-open');
    // sidebarHolder.hide();
    sidebarWrapperHolder.transition({
        opacity: '0',
        visibility: 'hidden',
        duration: 100,
        easing: 'linear'
    });
    sidebarHolder.transition({
        x: '-1000px'
    });
}

/////////////////////////////////////////////
// SIDEBAR ON MOBILE DEVICES
/////////////////////////////////////////////
function doSidebarMobile() {
    var sidebarWrapperHolder = $('.sidebar-wrapper-mobile');
    
    if(sidebarWrapperHolder.length) {
        var sidebarHolder = $('.sidebar')
        , sidebarToogle = $('.sidebar-toogle')
        , sidebarIsOpen = false;
        
        sidebarToogle.on('click', function(e) {
            e.preventDefault();
            if (!sidebarIsOpen) {
                sidebarIsOpen = true;
                sidebarOpen(sidebarWrapperHolder, sidebarHolder);
            } else {
                sidebarClose(sidebarWrapperHolder, sidebarHolder);
                sidebarIsOpen = false;
            }
        });

        sidebarWrapperHolder.on('click', function(e) {
            sidebarClose(sidebarWrapperHolder, sidebarHolder);
            sidebarIsOpen = false;
        });
        sidebarHolder.on('click', function(e) {
            e.stopPropagation();
        });
        // // Get a reference to an element.
        var square = document.querySelector('.sidebar-wrapper-mobile');
        
        // // Create an instance of Hammer with the reference.
        var hammer = new Hammer(square);

        // // Subscribe to a quick start event: press, tap, or doubletap.
        // // For a full list of quick start events, read the documentation.
        hammer.on('swipe', function(e) {
            if(window.innerWidth < 991) {
                var direction = e.offsetDirection;
                if(direction === 2) {
                    sidebarClose(sidebarWrapperHolder, sidebarHolder);
                    sidebarIsOpen = false;
                }
            }            
        });

        if(window.innerWidth < 991) {
            sidebarOpen(sidebarWrapperHolder, sidebarHolder);
            sidebarClose(sidebarWrapperHolder, sidebarHolder);
        }

        $(window).resize(function() {
            if(window.innerWidth > 991) {
                $('.sidebar-wrapper-mobile').css('opacity', '1');
                $('.sidebar-wrapper-mobile').css('visibility', 'visible');
                $('.sidebar').css('transform', 'translate(0px, 0px)');
            } else {
                $('.sidebar-wrapper-mobile').css('opacity', '0');
                $('.sidebar-wrapper-mobile').css('visibility', 'hidden');
                $('.sidebar').css('transform', 'translate(-1000px, 0px)');
                $('body').removeClass('sidebar-is-open');
                sidebarIsOpen = false;
            }
        });
    }
}

jQuery(document).ready( function() {
    doMainMobileMenu();
    doSidebarMobile();
    doBackToTop();

    DoFakeAjaxPostSide();
    DoFakeAjaxPostGrid();

    jQuery('.image__social-icon-link').on('click', function(event) {
        event.stopPropagation();
    });
    
    if(window.innerWidth > 1199) {
        //init menu
        var menu = $(".sf-menu");

        if(menu.length){
            menu.superfish({
                delay       : 300,
                animation   : { opacity: 'show', marginTop: '9px' },
                animationOut: { opacity: 'hide', marginTop: '29px' },   // an object equivalent to first parameter of jQuery’s .animate() method Used to animate the submenu closed
                speed:         200,           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
                speedOut:      100, 
            });
        }
    }
  
    // init Isotope
    var $grid = $('#portfolio-masonry');

    if($grid.length) {
        $grid.imagesLoaded( function() {
            $grid.isotope({
                itemSelector: '.portfolio__item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.portfolio__sizer'
                }
            });
            $grid.isotope('layout');
        });

        // filter items on link click
        $('.filter__link').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $('.filter__link').removeClass('filter__link_active');
            $(this).addClass('filter__link_active');

            //Fake code to simulate load more button
            if(filterValue === '*' || filterValue === 'all' || filterValue === '.products') {
                $('.load-more-btn__works').find('button').show();
            } else {
                $('.load-more-btn__works').find('button').hide();
            }
            //Fake code to simulate load more button
            if($('.load-more-btn__works').hasClass('no-works')) {
                $('.load-more-btn__works').find('button').html('Show more');
            }

        });

        $('.load-more-btn__works').on('click', function() {
            //Fake code to simulate load more button
            fakeAjaxMasonry($(this).find('button'));
        });
    }

    if($('#portfolio-simple').length) {
        var filterList = {
            init: function () {
              $('#portfolio-simple').mixItUp({
                selectors: {
                    target: '.portfolio__item-height',
                    filter: '.filter__link'	
                },
                animation: {
                    "duration": 401,
                    "nudge": true,
                    "reverseOut": false,
                    "effects": "fade translateZ(100px)"
                },
                load: {
                  filter: 'all' // show on first load
                },
                callbacks: {
                    onMixClick: function() {
                      console.log('[callback] mixClick');
                    }
                }     
              });								
            }
        };
        // Run the show!
        filterList.init();
        // filter items on link click
        $('.filter__link').on('click', function() {
            var filterValue = $(this).attr('data-filter');
           
            //Fake code to simulate load more button
            if(filterValue === 'all' || filterValue === '.products') {
                $('.load-more-btn__works').find('button').show();
            } else {
                $('.load-more-btn__works').find('button').hide();
            }
            //Fake code to simulate load more button
            if($('.load-more-btn__works').hasClass('no-works')) {
                $('.load-more-btn__works').find('button').html('Show more');
            }
        });
        $('.load-more-btn__works').on('click', function() {
            fakeAjaxSimple($(this).find('button'));
        });
    }
    
    /////////////////////////////////////////////
	// INIT SLIDER ON THE PORTFOLIO WORK PAGE
	/////////////////////////////////////////////
    var workSlider = jQuery('.work-slider');
    
    if(workSlider.length) {
        var swiperWorkPage = new Swiper('.work-slider', {
            speed: 350,
            on: {
                paginationRender: function (paginationEl) {
                    setTimeout(function(){
                        jQuery(paginationEl).find('.swiper-pagination-bullet:first-child').removeClass('swiper-pagination-bullet-active');
                        jQuery(paginationEl).find('.swiper-pagination-bullet:first-child').addClass('swiper-pagination-bullet-active-start');
                    }, 0);
                },
                autoplayStart: function() {
                    jQuery(this.$el).addClass('swiper-autoplaying').removeClass('swiper-stopped');
                },
                autoplayStop: function() {
                    jQuery(this.$el).removeClass('swiper-autoplaying').addClass('swiper-stopped');
                }
            },
            loop: 'true',
            autoplay: {
                delay: 2700,
                disableOnInteraction: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    
                    if(!index) {
                        return '<span class="' + className + ' swiper-pagination-bullet-first swiper-pagination-bullet-autoplay"></span>';
                    }
                    return '<span class="' + className + ' swiper-pagination-bullet-autoplay"></span>';
                },
            },
            paginationClickable: true,
        });
        
        swiperWorkPage.on('paginationUpdate', function (swipe, paginationEl) {
            jQuery(paginationEl).find('.swiper-pagination-bullet-first').removeClass('swiper-pagination-bullet-active-start').removeClass('swiper-pagination-bullet-first');
        });
        
    }

    /////////////////////////////////////////////
	// INIT SLIDER FOR POSTS
	/////////////////////////////////////////////
    var blogSlider = jQuery('.blog-item__slider');
    
    if(blogSlider.length) {
        var swiperBlogListPage = new Swiper('.blog-item__slider', {
            loop: 'true',
            slidesPerColumnFill: "column",
            slidesPerView: 1,
            slidesPerColumn: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }

    /////////////////////////////////////////////
	// INIT POPUP ON THE PAGES
	/////////////////////////////////////////////
    var popup = $('.is-popup');
    if(popup.length) {
        $('.is-popup').lightcase({
            transition: 'scrollVertical',
            overlayOpacity: 0.8,
            speedIn: 400,
            speedOut: 300
        });
    }

    /////////////////////////////////////////////
	// PRELOADER
	/////////////////////////////////////////////
    setTimeout(function() {
        $('.do-site-preloader').fadeOut(200);
    }, 200);

    ///////////////////////////////////////////////
	// WIDGET CATEGORY WHEN CLICK SET ACTIVE CLASS
    ///////////////////////////////////////////////
    var widgetCat = $('.widget-cat__item');
    if(widgetCat.length) {
        widgetCat.on('click', function(){
            widgetCat.removeClass('widget-cat__item_active');
            $(this).addClass('widget-cat__item_active');
        });
    }
    /////////////////////////////////////////////
    // COLOR PALETTE
    /////////////////////////////////////////////
    function showPalette() {
        // SHOW OR HIDE COLOR PALETTE
        jQuery('.palette__btn').on('click', function(){
            jQuery(this).toggleClass('colors-show');
            jQuery(this).find('.palette__btn-circle-wrapeper').toggleClass('palette__btn-circle-wrapeper--active');
        });
        // CHANGE TEMPLATE COLOR
        jQuery('.palette__color').on('click', function(){
            var body = document.querySelector('body');
            body.style.setProperty('--main-color', jQuery(this).attr('data-color'));
            body.style.setProperty('--main-color-hover', jQuery(this).attr('data-color-hover'));
            body.style.setProperty('--main-color-rgba', jQuery(this).attr('data-color-rgba'));
        });
    }
    showPalette();
});


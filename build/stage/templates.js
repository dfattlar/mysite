angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/admin/admin.html","<section class=\"mainbar\">\n    <section class=\"matter\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"widget wviolet\">\n                    <div data-cc-widget-header title=\"{{vm.title}}\"></div>\n                    <div class=\"widget-content user\">\n                        <h3>TODO: Implement Your Features</h3>\n                    </div>\n                    <div class=\"widget-foot\">\n                        <div class=\"clearfix\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</section>\n");
$templateCache.put("app/widgets/widgetheader.html","<div class=\"widget-head\">\n    <div class=\"page-title pull-left\">{{title}}</div>\n    <small class=\"page-title-subtle\" data-ng-show=\"subtitle\">({{subtitle}})</small>\n    <div class=\"widget-icons pull-right\" data-ng-if=\"allowCollapse\">\n        <a data-cc-widget-minimize></a>\n    </div>\n    <small class=\"pull-right page-title-subtle\" data-ng-show=\"rightText\">{{rightText}}</small>\n    <div class=\"clearfix\"></div>\n</div>");
$templateCache.put("app/layout/shell.html","<div data-ng-controller=\"Shell as vm\">\n    <div id=\"splash-page\" data-ng-show=\"vm.showSplash\" class=\"dissolve-animation\">\n        <div class=\"page-splash\">\n            <div class=\"page-splash-message\">\n                Modular Demo\n            </div>\n        </div>\n    </div>\n\n    <header class=\"clearfix\">\n        <div data-ng-include=\"\'app/layout/topnav.html\'\"></div>\n    </header>\n    <section id=\"content\" class=\"content\">\n        <div data-ng-include=\"\'app/layout/sidebar.html\'\"></div>\n\n        <div data-ng-view class=\"shuffle-animation\"></div>\n\n        <div ngplus-overlay\n             ngplus-overlay-delay-in=\"50\"\n             ngplus-overlay-delay-out=\"700\"\n             ngplus-overlay-animation=\"dissolve-animation\">\n            <img src=\"../../content/images/busy.gif\"/>\n\n            <div class=\"page-spinner-message overlay-message\">{{vm.busyMessage}}</div>\n        </div>\n    </section>\n</div>\n\n\n");
$templateCache.put("app/layout/sidebar.html","<div data-cc-sidebar data-ng-controller=\"Sidebar as vm\">\n    <div class=\"sidebar-filler\"></div>\n    <div class=\"sidebar-dropdown\"><a href=\"#\">Menu</a></div>\n    <div class=\"sidebar-inner\">\n        <div class=\"sidebar-widget\">\n        </div>\n        <ul class=\"navi\">\n            <li class=\"nlightblue fade-selection-animation\" data-ng-class=\"vm.isCurrent(r)\"\n                data-ng-repeat=\"r in vm.navRoutes\">\n                <a href=\"#{{r.originalPath}}\"\n                   data-ng-bind-html=\"r.settings.content\"></a>\n            </li>\n        </ul>\n    </div>\n</div>\n");
$templateCache.put("app/layout/topnav.html","<nav class=\"navbar navbar-fixed-top navbar-inverse\">\n    <div class=\"navbar-header\">\n        <a href=\"/\" class=\"navbar-brand\"><span class=\"brand-title\">{{vm.title}}</span></a>\n        <a class=\"btn navbar-btn navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n        <div class=\"pull-right navbar-logo\">\n            <ul class=\"nav navbar-nav pull-right\">\n                <li>\n                    <a href=\"http://www.johnpapa.net/hottowel-angular\" target=\"_blank\">\n                        Created by John Papa\n                    </a>\n                </li>\n                <li class=\"dropdown dropdown-big\">\n                    <a href=\"http://www.angularjs.org\" target=\"_blank\">\n                        <img src=\"content/images/AngularJS-small.png\" />\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://developer.marvel.com/\" target=\"_blank\">Marvel API</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");
$templateCache.put("app/dashboard/dashboard.html","<section id=\"dashboard-view\" class=\"mainbar\">\n    <section class=\"matter\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <ul class=\"today-datas\">\n                        <li class=\"blightblue\">\n                            <div class=\"pull-left\"><i class=\"fa fa-plane\"></i></div>\n                            <div class=\"datas-text pull-right\">\n                                <span class=\"bold\">May 18 - 19, 2015</span> Castle Resort, Neverland\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </li>\n\n                        <li class=\"borange\">\n                            <div class=\"pull-left\"><i class=\"fa fa-envelope\"></i></div>\n                            <div class=\"datas-text pull-right\">\n                                <span class=\"bold\">{{vm.messageCount}}</span> Messages\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"widget wviolet\">\n                        <div data-cc-widget-header title=\"People\"\n                             allow-collapse=\"true\"></div>\n                        <div class=\"widget-content text-center text-info\">\n                            <table class=\"table table-condensed table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>First Name</th>\n                                        <th>Last Name</th>\n                                        <th>Age</th>\n                                        <th>Location</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr data-ng-repeat=\"p in vm.people\">\n                                        <td>{{p.firstName}}</td>\n                                        <td>{{p.lastName}}</td>\n                                        <td>{{p.age}}</td>\n                                        <td>{{p.location}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"widget-foot\">\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"widget wgreen\">\n                        <div data-cc-widget-header title=\"{{vm.news.title}}\"\n                             allow-collapse=\"true\"></div>\n                        <div class=\"widget-content text-center text-info\">\n                            <small>{{vm.news.description}}</small>\n                        </div>\n                        <div class=\"widget-foot\">\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</section>");}]);
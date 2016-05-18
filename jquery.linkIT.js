/*
 * name : LinkIT
 * author : Kang Kung
 * version: 0.1.0
 * license : MIT
 */

$(document).ready(function () {
// Your jQuery code here, using the $
    $.fn.linkIT = function (options) {
        // Default setting
        var settings = $.extend({
            href: null,
            text: null,
            target: "_self",
        }, options);
        // validate
        if (settings.href == null) {
            console.log("You need a href option for LinkIT to work");
            return this;
        }
        return this.each(function () {
            var object = $(this);
            if (settings.text == null) {
                settings.text = object.html();
            }
            object.wrap("<a href='" + settings.href + "' target='" + settings.target + "'></a>").text(settings.text);
        });
    };

});
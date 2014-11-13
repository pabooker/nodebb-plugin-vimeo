(function(module) {
	"use strict";

	var Vimeo = {},
		embed = '<iframe class="vimeo-embed" src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

    embedUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)">.+<\/a>/g;

	Vimeo.parse = function(data, callback) {
	    if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl)) {
            data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
        callback(null, data);
    };

	module.exports = Vimeo;
}(module));

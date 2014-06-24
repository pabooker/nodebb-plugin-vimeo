(function(module) {
	"use strict";

	var Vimeo = {},
		embed = '<iframe class="vimeo-embed" src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';



	Vimeo.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = Vimeo;
}(module));

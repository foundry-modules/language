/**
 * jquery.language.
 * Client-side access to server-side language.
 * https://github.com/foundry-modules/language
 *
 * Copyright (c) 2011 Jason Ramos
 * www.stackideas.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

var self = $.language = $.JText = function() {

	if (args.length < 1) {
		return self._(key);
	} else {
		return self.sprintf.apply(null, args);
	}
};

$.extend(self, {
	lang: {},

	add: function(key, val) {
		self[key] = val;
	},

	remove: function(key) {
		delete self[key];
	},

	_: function(key) {
		return self[key] || "";
	},

	sprintf: function() {
		return $.sprintf.apply(null, args);
	}
});

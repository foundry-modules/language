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

var self = $.language = $.JText = function(key) {

	if (arguments.length < 2) {
		return self._(key);
	} else {
		return self.sprintf.apply(null, arguments);
	}
};

$.extend(self, {
	lang: {},

	add: function(key, val) {

		if ($.isPlainObject(key)) {
			$.extend(self.lang, key);
		} else {
			self.lang[key] = val;
		}
	},

	remove: function(key) {
		delete self.lang[key];
	},

	_: function(key) {
		return self.lang[key] || "";
	},

	sprintf: function() {
		var key = arguments[0];
		arguments[0] = self.lang[key];
		return $.sprintf.apply(null, arguments);
	}
});

!function(a){var b=a("#excellent-color-scheme-css"),c=wp.customize;b.length||(b=a("head").append('<style type="text/css" id="excellent-color-scheme-css" />').find("#excellent-color-scheme-css")),c("blogname",function(b){b.bind(function(b){a(".site-title a").text(b)})}),c("blogdescription",function(b){b.bind(function(b){a(".site-description").text(b)})}),c.bind("preview-ready",function(){c.preview.bind("update-color-scheme-css",function(a){b.html(a)})})}(jQuery);
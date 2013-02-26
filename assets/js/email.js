$(document).ready(function() {

		 //safe mailto's
		 $('a[href*="[at]"][href*="[dot]"]').each(function() {
		  var email = $(this).attr('href').split('[at]').join('@').split('[dot]').join('.');
		  $(this).attr('href', 'mailto:' + email.toLowerCase());
		  if ($(this).text().length == 0) $(this).text(email);
		 });
		});
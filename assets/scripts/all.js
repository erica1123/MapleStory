'use strict'

$(function () {
	$('.tabs-head a:first').addClass('active')
	$('.tabs-cont').hide()
	$('.tabs-cont:first').show()
	$('.tabs-head a').on('click', function () {
		$('.tabs-head a').removeClass('active')
		$(this).addClass('active')
		$('.tabs-cont').hide()
		let target = $(this).attr('href')
		$(target).fadeIn()
		return false
	})
})

//# sourceMappingURL=all.js.map

'use strict'

$(function () {
	$('.tabs-head a:first').addClass('active')
	$('.tab-body').hide()
	$('.tab-body:first').show()
	$('.tabs-head a').on('click', function () {
		$('.tabs-head a').removeClass('active')
		$(this).addClass('active')
		$('.tab-body').hide()
		let target = $(this).attr('href')
		$(target).fadeIn()
		return false
	})
})

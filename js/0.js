// 定义区域


// 1.搜索
$.fn.uiSearch = function(){
	var ui = $(this);
	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-select-list').show();
		return false;
	});
	$('.ui-search-select-list a',ui).on('click',function(){
		$('.ui-search-selected',ui).text($(this).text());
		$('.ui-search-select-list',ui).hide();
		return false;
	});
	$('body').on('click',function(){
		$('.ui-search-select-list').hide();
	});
	$('.ui-search-select-list').hide();
};




// 操作
$(function () {

	$('.ui-search').uiSearch();

	
})
$(function(){
	//计算元素高度
	var iHeight=$('#content-main',parent.document).height();
	$('#mapBox').height(iHeight);
	$('.infor-box').height(iHeight-30);
	$('.myChart').height(iHeight-70);
	//改变窗口大小计算高度
	$(window).on('resize',function(){
		var iHeight=$('#content-main',parent.document).height();
		$('#mapBox').height(iHeight);
		$('.infor-box').height(iHeight-30);
		$('.myChart').height(iHeight-70);
	});
})

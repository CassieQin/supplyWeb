$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-140;
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		pageList:'[20]',
		classes: 'table saleTable table-hover',
		height:iHeight,
		columns:[{
    		field: 'title',
    		title: '行政区划',
    		valign:'middle'
    	},{
    		field: 'person',
    		title: '用水户个数（个）',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '商业用水户',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '生活用水户',
    		valign:'middle'
    	}],
	    data:[{
	    	title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	},{
    		title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'草稿',
    		unit: '财务部',
    		time:'2017-05-06 22:30:44'
    	}]
	});
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$saleTale.bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('.search-box input').val('');
		$saleTale.bootstrapTable('refresh');
	});
	//时间选择
	lay('.date').each(function(){
		laydate.render({
	    	elem: this,
	    	type: 'date',
	    	trigger: 'click'
	  	});
	});
	//选项卡切换
	$('.tabTitle .inb').on('click',function(){
		var thisName=$(this).attr('name'),
			tableStr='<table id="saleTable"></table>',
			echartStr='<div id="myCharts" style="height: 100%;"></div>';
		$(this).addClass('tabActive').siblings().removeClass('tabActive');
		if (thisName == 'list') {
			$('.divShow').html('');
			$('.tableBox').show();
		} else{
			$('.tableBox').hide();
			$('.divShow').html(echartStr);
			initChart();
		}
	});
	//设置图表内容高度
	$('.divShow').height($('#content-main',parent.document).height()-145);
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-140
		});
		$('.divShow').height($('#content-main',parent.document).height()-145);
		echarts.init(document.getElementById('myCharts')).resize();
	});
	//初始化表格
	function initChart(){
		var myChart = echarts.init(document.getElementById('myCharts'));
	    myChart.setOption({
		    grid:{
		    	top: 30,
		    	left: 30,
		    	right: 30,
		    	bottom: 30
		    },
		    legend: {
		        data:['销量']
		    },
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 36, 10, 10, 20]
		    }]
		});
    }
})

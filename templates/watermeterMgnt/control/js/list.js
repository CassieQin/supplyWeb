$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-74;
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
			field: 'id',
  			title: '序号',
  			align: 'center',
  			valign:'middle',
  			width: '5%',
  			formatter:function(value, row, index){
  				return index + 1;
  			}
		},{
    		field: 'title',
    		title: '水表地址',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '阀状态',
    		valign:'middle'
    	},{
    		field: 'person',
    		title: '压力值',
    		valign:'middle'
    	},{
    		field: 'unit',
    		title: '电压',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: 'pH值',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '温度',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '溶氧',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '电导率',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'time',
    		title: '浊度',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '余氯',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'state',
    		title: '控制的阀门或泵的开关状态',
    		valign:'middle'
    	}],
	    data:[{
	    	title: '调整阶梯价公告',
    		person:'李晓波',
    		state:'正常',
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
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-74
		});
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
})
$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-64;
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
  			width: '7%',
  			formatter:function(value, row, index){
  				return index + 1;
  			}
		},{
    		field: 'code',
    		title: '行政区域编号',
    		valign:'middle'
    	},{
    		field: 'name',
    		title: '行政区域名称',
    		valign:'middle'
    	},{
    		field: 'ownCode',
    		title: '所属行政区域编号',
    		valign:'middle'
    	},{
    		field: 'ownName',
    		title: '所属行政区域名称',
    		valign:'middle'
    	},{
    		field: 'fullName',
    		title: '行政区域全名',
    		valign:'middle'
    	}],
	    data:[{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	},{
    		code:'612105454555',
    		name:'6组',
    		ownCode: '356345457',
    		ownName: 'fshhj',
    		fullName:'青海藏族自治区西宁市城固县城关镇红崖村委会6组'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-64
		});
	})
	$('#searchCondition').focus();
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
$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-150;
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
			checkbox:true
		},{
    		field: 'name',
    		title: '单位名称',
    		valign:'middle'
    	},{
    		field: 'type',
    		title: '单位类型',
    		valign:'middle'
    	},{
    		field: 'code',
    		title: '组织机构代码',
    		valign:'middle'
    	},{
    		field: 'area',
    		title: '行政区域',
    		valign:'middle'
    	},{
    		field: 'phone',
    		title: '联系方式',
    		valign:'middle'
    	}],
	    data:[{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	},{
    		name:'6组',
    		type: '居民用水',
    		one: '10',
    		two: '15',
    		max: '40',
    		price: '10',
    		time:'2017-10-8 12:04:04',
    		version :'v1'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-150
		});
	})
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$saleTale.bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('.search-box input').val('');
		$saleTale.bootstrapTable('refresh');
	});
	//新增数据
	$('#addBtn').on('click',function(){
		addUnit();
	});
	//编辑数据
    $("#editBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            addUnit();
        }

    });
	//删除数据
    $("#delBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            parent.layer.confirm('确定要删除这条数据吗？',
                {icon: 3, title: '提示', area: '300px', btnAlign: 'c'}, function (index) {
                    parent.layer.close(index);
                });
        }

    });
    //分配区域
    $("#setBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            setArea();
        }

    });
})
//新增数据
function addUnit() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增售水单位',
        area: ['900px', '350px'],
        content: 'dataMgnt/unit/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//分配区域
function setArea() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '分配区域',
        area: ['260px', '800px'],
        content: 'dataMgnt/unit/area.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
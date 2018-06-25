$(function(){
	//表格初始化
	var $saleTale=$('#saleTable'),
		iHeight=$('#content-main',parent.document).height()-110;
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		clickToSelect: true,
		pageSize:20,
		pageList:'[20]',
		classes: 'table saleTable table-hover',
		height:iHeight,
		columns:[{
			checkbox:true
		},{
    		field: 'code',
    		title: '角色编号',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '角色名称',
    		valign:'middle'
    	},{
    		field: 'maic',
    		title: '备注',
    		valign:'middle'
    	}],
	    data:[{
	    	code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	},{
    		code: '4588484',
    		address:'高新区',
    		maic:'1',
    		longitude: '145',
    		latitude:'58',
    		latitude:'高新区'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('#content-main',parent.document).height()-110
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
	//新增
	$('#addBtn').on('click',function(){
		addRole();
	});
	//编辑
    $("#editBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            editRole();
        }

    });
	//删除
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
    //重置密码
    $("#resetPassword").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            parent.layer.confirm('确定要重置密码吗？',
                {icon: 3, title: '提示', area: '300px', btnAlign: 'c'}, function (index) {
                    parent.layer.close(index);
                });
        }

    });
})
//新增
function addRole() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增角色',
        area: ['500px', '300px'],
        content: 'rightMgnt/role/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//编辑
function editRole() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '编辑角色',
        area: ['500px', '300px'],
        content: 'rightMgnt/role/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
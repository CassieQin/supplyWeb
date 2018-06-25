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
    		field: 'name',
    		title: '供水源名称',
    		valign:'middle'
    	},{
    		field: 'longitude',
    		title: '经度',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'latitude',
    		title: '纬度',
    		align: 'right',
    		valign:'middle'
    	},{
    		field: 'area',
    		title: '行政区域',
    		valign:'middle'
    	},{
    		field: 'description',
    		title: '描述',
    		valign:'middle'
    	}],
	    data:[{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
    	},{
    		name:'高新区',
    		longitude: '145',
    		latitude:'58',
    		latitude:'45',
    		area:'白银市城固县',
    		description:'十大歌手联合国看来'
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
	//新增公告
	$('#addBtn').on('click',function(){
		addSupplier();
	});
	//编辑公告
    $("#editBtn").click(function(){
        var len = $("#saleTable input:checked").length;
        if (len == 0) {
            //未选中数据提示框
            layer.msg('请选择数据',  {time:1000});
        } else {
            editSupplier();
        }

    });
	//删除公告
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
})
//新增供水源
function addSupplier() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '新增供水源',
        area: ['600px', '400px'],
        content: 'dataMgnt/supplier/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
//编辑供水源
function editSupplier() {
    parent.layer.open({
        move: false,
        type: 2,
        title: '编辑供水源',
        area: ['600px', '400px'],
        content: 'dataMgnt/supplier/add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            parent.layer.close(index);
        }, cancel: function (index) {
            parent.layer.close(index);
        }
    });
}
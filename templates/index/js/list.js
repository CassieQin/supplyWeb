$(function(){
	//设置内容区域高度
	var IframeHeight=$('.J_iframe', parent.document).height()-340,
		n=IframeHeight/3;
	$('.chart-cont').height(IframeHeight);
	$('.dataBox').height(IframeHeight/2);
	$('.dataBox-con').css('padding-top',($('.dataBox').height()/2-45)/2+'px');
    var myChart1 = echarts.init(document.getElementById('myChart1'));
    myChart1.setOption({
    	tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	    	bottom: 10,
	        data:['频数','总占比']
	    },
	    grid: {
	    	top: 20,
	        left: 20,
	        right: 20,
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        data: ['1','2','3','4','5','6','7']
	    },
	    yAxis: [
	    	{
	            nameLocation: 'start',
	            type: 'value'
	       },
	       {
	            nameLocation: 'start',
	            data: ['0','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%']
	        }
	    ],
	    series: [
	        {
	            name:'频数',
	            type:'bar',
	            stack: '总量',
	            data:[120, 132, 101, 134, 90, 230, 210],
                itemStyle : {  
                    normal : {  
                        color:'#019bf3'    
                    }  
                }
	        },
	        {
	            name:'总占比',
	            type:'line',
	            stack: '总量',
	            barWidth: 20,
	            data:[10, 132, 101, 134, 90, 230, 210],
	            itemStyle : {  
                    normal : {  
                        color:'#f77f7e'  
                    }  
                }
	        }
	    ]
    });
    $(window).resize(function(){
    	var IframeHeight=$('.J_iframe', parent.document).height()-340,
		n=IframeHeight/3;
		$('.chart-cont').height(IframeHeight);
		$('.dataBox').height(IframeHeight/2);
		$('.dataBox-con').css('padding-top',($('.dataBox').height()/2-45)/2+'px');
    	$(myChart1).resize();
    })
    //定时器
    function startTimer(obj,f){
    	var n=parseInt($(obj).text()),
    		myTimer;
    	myTimer=setInterval(function(){
    		n+=30;
    		$(obj).text(n);
    		stopTimer(obj,f);
    	},200);
    	function stopTimer(obj,f){
	    	if(parseInt($(obj).text())>f){
	    		clearInterval(myTimer);
	    		$(obj).text(f);  //停止定时器，设置目标参数
	    	}
	    }
    }
    startTimer('#num1',100);
    startTimer('#num2',50);
    startTimer('#num3',150);
    startTimer('#num4',500);
})
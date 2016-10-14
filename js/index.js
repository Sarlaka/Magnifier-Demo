window.onload = function(){
	//获取元素
	var oDiv = document.getElementById('div1');
	var oMark = getElementsByClassName(oDiv,'mark')[0];
	var oFloat = getElementsByClassName(oDiv,'float_layer')[0];
	var oSmallPic = getElementsByClassName(oDiv,'small_pic')[0];
	var oBigPic = getElementsByClassName(oDiv,'big_pic')[0];
	var bigImg = oBigPic.getElementsByTagName('img')[0];

	oMark.onmouseover = function(){
		oFloat.style.display = 'block';
		oBigPic.style.display = 'block';
	}

	oMark.onmouseout = function(){
		oFloat.style.display = 'none';
		oBigPic.style.display = 'none';
	}

	oMark.onmousemove = function(ev){
		var oEvent = ev||event;
		var posX,posY;
		var posX_100,posY_100;//移动距离的百分比
		var posX_big,posY_big;//大图的位置
		//计算float的位置
		posX = oEvent.clientX - oDiv.offsetLeft - oSmallPic.offsetLeft - oFloat.offsetWidth/2 ;//offset???有问题，不能到0；
		posY = oEvent.clientY - oDiv.offsetTop - oSmallPic.offsetTop - oFloat.offsetHeight/2;//offset???有问题，不能到0；
		
		//控制小框的位置，超过部分不会超出图片的范围
		if(posX<0){
			posX = 0;
		}else if(posX>oMark.offsetWidth-oFloat.offsetWidth){
			posX = oMark.offsetWidth-oFloat.offsetWidth;
		}
		if(posY<0){
			posY = 0;
		}else if(posY>oMark.offsetHeight-oFloat.offsetHeight){
			posY = oMark.offsetHeight-oFloat.offsetHeight;
		}

		//控制float的位置
		oFloat.style.left = posX + 'px';
		oFloat.style.top = posY + 'px';

		//计算小图的百分比
		posX_100 = posX/(oMark.offsetWidth-oFloat.offsetWidth);
		posY_100 = posY/(oMark.offsetHeight-oFloat.offsetHeight);

		//计算大图的位置
		posX_big = - posX_100 * (bigImg.offsetWidth-oBigPic.offsetWidth);
		posY_big = - posY_100 * (bigImg.offsetHeight-oBigPic.offsetHeight);

		bigImg.style.left = posX_big + 'px';
		bigImg.style.top = posY_big + 'px';
		
	}
}


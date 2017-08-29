/*
* @Author: ASUS
* @Date:   2017-08-24 19:03:36
* @Last Modified by:   ASUS
* @Last Modified time: 2017-08-27 21:42:40
*/



		
			//获取对象，再次操作对象
			var btn =document.getElementsByTagName("button")[0];
			var txt = document.getElementsByTagName("textarea")[0];
			var ul = document.createElement("ul");
			btn.parentNode.appendChild(ul);
			btn.onclick = function(){
				if(txt.value =="")
				{
					
					return false;
				}
					var newli = document.createElement("li");
					newli.innerHTML =txt.value + "<a href='javascript:;'>删除</a>";
					
					txt.value="";				//文字发布出去时清空表单
					var lis = ul.children;		//获得多少个li
					if(lis.length == 0)         //第一次生成是appendchild，没有li所以要判断
					{
						ul.appendChild(newli);  //ul的后面追加
					}
					else
					{
						ul.insertBefore(newli,lis[0]);  //每次生成的新li，放在第一位，重新变为lis[0]
					}
					var as = document.getElementsByTagName("a");
					for(var i=0;i<as.length;i++)
					{
						as[i].onclick= function(){
							//removeChlid
							ul.removeChild(this.parentNode); //ul要删除儿子li ，this（a）的父亲（this指向事件的调用者）

						}
					}
			}
		


				
			


			
			
		

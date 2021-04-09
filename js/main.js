var NeoApp=angular.module("NeoApp",["ngAnimate","ngRoute","ngSanitize","ngTouch","ui.bootstrap"],function($interpolateProvider){$interpolateProvider.startSymbol("[");$interpolateProvider.endSymbol("]");});NeoApp.config(["$routeProvider",function($routeProvider,$scope,$rootScope){$routeProvider.when("/inicio",{templateUrl:"inicio",controller:"inicio_Ctrl"});$routeProvider.when("/operaciones_fracciones",{templateUrl:"operaciones_fracciones",controller:"operaciones_fracciones_Ctrl"});$routeProvider.when("/suma",{templateUrl:"suma",controller:"suma_Ctrl"});$routeProvider.when("/resta",{templateUrl:"resta",controller:"resta_Ctrl"});$routeProvider.when("/multiplicacion",{templateUrl:"multiplicacion",controller:"multiplicacion_Ctrl"});$routeProvider.when("/division",{templateUrl:"division",controller:"division_Ctrl"});$routeProvider.when("/t_suma_1",{templateUrl:"t_suma_1",controller:"t_suma_1_Ctrl"});$routeProvider.when("/t_suma_2",{templateUrl:"t_suma_2",controller:"t_suma_2_Ctrl"});$routeProvider.when("/t_suma_3",{templateUrl:"t_suma_3",controller:"t_suma_3_Ctrl"});$routeProvider.when("/t_suma_4",{templateUrl:"t_suma_4",controller:"t_suma_4_Ctrl"});$routeProvider.when("/t_suma_5",{templateUrl:"t_suma_5",controller:"t_suma_5_Ctrl"});$routeProvider.when("/t_suma_resultado",{templateUrl:"t_suma_resultado",controller:"t_suma_resultado_Ctrl"});$routeProvider.when("/t_resta_1",{templateUrl:"t_resta_1",controller:"t_resta_1_Ctrl"});$routeProvider.when("/t_resta_2",{templateUrl:"t_resta_2",controller:"t_resta_2_Ctrl"});$routeProvider.when("/t_resta_3",{templateUrl:"t_resta_3",controller:"t_resta_3_Ctrl"});$routeProvider.when("/t_resta_4",{templateUrl:"t_resta_4",controller:"t_resta_4_Ctrl"});$routeProvider.when("/t_resta_5",{templateUrl:"t_resta_5",controller:"t_resta_5_Ctrl"});$routeProvider.when("/t_resta_resultado",{templateUrl:"t_resta_resultado",controller:"t_resta_resultado_Ctrl"});$routeProvider.when("/t_multiplicacion_1",{templateUrl:"t_multiplicacion_1",controller:"t_multiplicacion_1_Ctrl"});$routeProvider.when("/t_multiplicacion_2",{templateUrl:"t_multiplicacion_2",controller:"t_multiplicacion_2_Ctrl"});$routeProvider.when("/t_multiplicacion_3",{templateUrl:"t_multiplicacion_3",controller:"t_multiplicacion_3_Ctrl"});$routeProvider.when("/t_multiplicacion_4",{templateUrl:"t_multiplicacion_4",controller:"t_multiplicacion_4_Ctrl"});$routeProvider.when("/t_multiplicacion_5",{templateUrl:"t_multiplicacion_5",controller:"t_multiplicacion_5_Ctrl"});$routeProvider.when("/t_multiplicacion_resultado",{templateUrl:"t_multiplicacion_resultado",controller:"t_multiplicacion_resultado_Ctrl"});$routeProvider.when("/t_division_1",{templateUrl:"t_division_1",controller:"t_division_1_Ctrl"});$routeProvider.when("/t_division_2",{templateUrl:"t_division_2",controller:"t_division_2_Ctrl"});$routeProvider.when("/t_division_3",{templateUrl:"t_division_3",controller:"t_division_3_Ctrl"});$routeProvider.when("/t_division_4",{templateUrl:"t_division_4",controller:"t_division_4_Ctrl"});$routeProvider.when("/t_division_5",{templateUrl:"t_division_5",controller:"t_division_5_Ctrl"});$routeProvider.when("/t_division_resultado",{templateUrl:"t_division_resultado",controller:"t_division_resultado_Ctrl"});$routeProvider.when("/t_combi_1",{templateUrl:"t_combi_1",controller:"t_combi_1_Ctrl"});$routeProvider.when("/t_combi_2",{templateUrl:"t_combi_2",controller:"t_combi_2_Ctrl"});$routeProvider.when("/t_combi_3",{templateUrl:"t_combi_3",controller:"t_combi_3_Ctrl"});$routeProvider.when("/t_combi_4",{templateUrl:"t_combi_4",controller:"t_combi_4_Ctrl"});$routeProvider.when("/t_combi_5",{templateUrl:"t_combi_5",controller:"t_combi_5_Ctrl"});$routeProvider.when("/t_combi_resultado",{templateUrl:"t_combi_resultado",controller:"t_combi_resultado_Ctrl"});$routeProvider.otherwise({redirectTo:"/inicio"});}]);NeoApp.filter("checkmark",function(){return function(input){return input?"\u2713":"\u2718";};});NeoApp.filter("element",function(){return function(input,idx1,idx2){idx1=idx1||0;if(input&&input.constructor===Array){if(idx2){return input[idx1,idx2];}else{return input[idx1];};};return"";};});NeoApp.filter("string",function(){return function(input){if(input&&input.constructor===Array)return input.toString();if(input)return input;return"";};});NeoApp.filter("default",function(){return function(input,defValue){if(!input)return defValue;return input;};});NeoApp.filter("trustUrl",function($sce){return function(url){return $sce.trustAsResourceUrl(url);};});NeoApp.filter('bool',function(){return function(input,valueTrue,valueFalse){return input!==true?valueFalse:valueTrue;};});NeoApp.filter('splitLt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(0,p):str;};});NeoApp.filter('splitRt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(p+1):str;};});NeoApp.controller("NeoApp_CoreCtrl",function($scope,$rootScope,$location,$route,$modal,$window,$timeout,$interval,$http,$filter,$compile,$animate){$App=$rootScope;$App.$on("$locationChangeStart",function(event,newUrl,oldUrl){var newPg=newUrl.substr(newUrl.lastIndexOf("/")+1);var oldPg=oldUrl.substr(oldUrl.lastIndexOf("/")+1);if(newPg=="!"){event.preventDefault();};if(newPg=="t_suma_1"){$timeout($scope.t_suma_1_pageenter);};if(newPg=="t_resta_1"){$timeout($scope.t_resta_1_pageenter);};if(newPg=="t_multiplicacion_1"){$timeout($scope.t_multiplicacion_1_pageenter);};if(newPg=="t_division_1"){$timeout($scope.t_division_1_pageenter);};if(newPg=="t_combi_1"){$timeout($scope.t_combi_1_pageenter);};});
$scope.SetError=function(msg){throw msg;};$scope.Refresh=function(){$timeout(angular.noop);};$scope.GetOrientation=function(){if($window.orientation){if(Math.abs(window.orientation)===90){return"Landscape";}else{return"Portrait";}}else{if($window.innerWidth>=$window.innerHeight){return"Landscape";}else{return"Portrait";}}};$scope.GotoPageNum=function(pgNum){if(pgNum>0&&pgNum<=$App.NAB.PageList.length){if($App.NAB.PageEnterEffect[pgNum-1]){$App.NAB._pageEffect=" animate enter-"+$App.NAB.PageEnterEffect[pgNum-1]+" exit-"+($App.NAB.PageExitEffect[pgNum-1]||"fadeOut");}else{$App.NAB._pageEffect="";}$timeout(function(){$location.path('/'+$App.NAB.PageList[pgNum-1]);});}else{$scope.SetError('Invalid page.');}};$scope.GotoPage=function(pgId){$scope.GotoPageNum($App.NAB.PageList.indexOf(pgId)+1);};$scope.GotoFirstPage=function(){$scope.GotoPageNum(1);};$scope.GotoLastPage=function(){$scope.GotoPageNum($App.NAB.PageList.length);};$scope.GotoNextPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum<$App.NAB.PageList.length){$scope.GotoPageNum(pgNum+1);return true;}return false;};$scope.GotoPrevPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum>1){$scope.GotoPageNum(pgNum-1);return true;}return false;};function makeSVG(tag,attrs){var el=document.createElementNS('http://www.w3.org/2000/svg',tag);for(var k in attrs)el.setAttribute(k,attrs[k]);return el;};function addSvgNode(objId,svgNode){if(document.getElementById(objId).tagName=="svg"){document.getElementById(objId).appendChild(svgNode);}else{document.getElementById(objId).getElementsByTagName('svg')[0].appendChild(svgNode);}};$scope.DrawCircle=function DrawCircle(objId,svgName,cx,cy,circleRadio,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('circle',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'r':circleRadio,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawEllipse=function DrawEllipse(objId,svgName,cx,cy,rx,ry,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('ellipse',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'rx':rx,'ry':ry,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawRect=function DrawRect(objId,svgName,posx,posy,width,height,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('rect',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'width':width,'height':height,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolygon=function DrawPolygon(objId,svgName,points,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('polygon',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPath=function DrawPath(objId,svgName,path,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('path',{'id':svgName,'VisualNEOWebName':svgName,'d':path,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolyLine=function DrawPolyLine(objId,svgName,points,strokeColor,strokeWidth){$App[svgName]=makeSVG('polyline',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':'none'});addSvgNode(objId,$App[svgName]);};$scope.DrawLine=function DrawLine(objId,svgName,x1,y1,x2,y2,strokeColor,strokeWidth){$App[svgName]=makeSVG('line',{'id':svgName,'VisualNEOWebName':svgName,'x1':x1,'y1':y1,'x2':x2,'y2':y2,'stroke':strokeColor,'stroke-width':strokeWidth});addSvgNode(objId,$App[svgName]);};$scope.DrawImage=function DrawImage(objId,svgName,fileName,x,y,width,height){$App[svgName]=makeSVG('image',{'id':svgName,'VisualNEOWebName':svgName,'x':x,'y':y,'width':width,'height':height,'xlink:href':''});$App[svgName].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+fileName+"");addSvgNode(objId,$App[svgName]);};$scope.DrawText=function DrawText(objId,svgName,theText,posx,posy,fillColor,fontSize,fontFamily,angle){$App[svgName]=makeSVG('text',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'stroke-width':0,'fill':fillColor,'font-size':fontSize,'font-family':fontFamily,'transform':'rotate('+angle+' '+posx+' '+posy+')'});$App[svgName].textContent=theText;addSvgNode(objId,$App[svgName]);};$scope.DrawClear=function DrawClear(objId){var n=0;$("#"+objId).children().each(function(){if(n!=0){$(this).remove();}n++;});};$scope.OnMouseEvent=function(objId,eventName,subroutine){if(eventName=="contextmenu"){if($App.NAB[objId]){$App.NAB[objId].on(eventName,function(e){e.preventDefault();subroutine;return;});}$("#"+objId).on(eventName,function(e){e.preventDefault();subroutine;return;});}if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveMouseEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.OnTouchEvent=function(objId,eventName,subroutine){if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveTouchEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.ShowObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].show(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate enter-'+effect;}$timeout(function(){var name=objId+'_hidden';if($App.NAB[name])delete $App.NAB[name];});};$scope.HideObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].hide(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate exit-'+effect;}$timeout(function(){$App.NAB[objId+'_hidden']=true;});};$scope.DisableObject=function(objId,value){var name=objId+'_disabled';if(value){$App.NAB[name]=value;}else{if($App.NAB[name])delete $App.NAB[name];}};$scope.ClipObjectPolygon=function(objId,polygonId){var points=$("#"+polygonId).html();points=points.replace('<polygon vector-effect="non-scaling-stroke" points="',"");points=points.replace('"></polygon>','');coords=points.split(",");var puntos="";for(i=0;i<coords.length;i=i+2){if(i!=coords.length-2){puntos=puntos+coords[i]+"px "+coords[i+1]+"px,";}else{puntos=puntos+coords[i]+"px "+coords[i+1]+"px";}}$("#"+objId).css("clip-path","polygon("+puntos+")");};$scope.ClipObjectPath=function(objId,shape){if(shape=="circle"){$("#"+objId).css("clip-path","circle(50% at 50% 50%)");}else if(shape=="triangle"){$("#"+objId).css("clip-path","polygon(50% 0%, 0% 100%, 100% 100%)");}else if(shape=="rhombus"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)");}else if(shape=="pentagon"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)");}else{$("#"+objId).css("clip-path",shape);}};$scope.SetObjectStyle=function(objId,selector,value){if($App.NAB[objId]){$App.NAB[objId].css(selector,value);return;}if($App[objId]){$("#"+objId).css(selector,value);return;}var name=objId+'_style';if(!$App.NAB[name])$App.NAB[name]={};if(value&&value.length>0){$App.NAB[name][selector]=value;}else{if($App.NAB[name][selector])delete $App.NAB[name][selector];if(jQuery.isEmptyObject($App.NAB[name]))delete $App.NAB[name];}};$scope.ClearObjectStyles=function(objId){var name=objId+'_style';if($App.NAB[name])delete $App.NAB[name];};$scope.GetObjectInfo=function(objId,info){if($App.NAB[objId]){return $App.NAB[objId].css(info);}return $("#"+objId).css(info);};$scope.SetObjectHTML=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].html(code);return;}var e=document.getElementById(objId);e.innerHTML=code;$compile(e)($scope);};$scope.GetObjectHTML=function(objId){if($App.NAB[objId]){return $App.NAB[objId].html();;}return document.getElementById(objId).innerHTML;};$scope.SetObjectAttribute=function(objId,AttrName,AttrValue){if(AttrName=="src"){AttrName="ng-src";}if($App.NAB[objId]){$App.NAB[objId].attr(AttrName,AttrValue);return;}$("#"+objId).attr(AttrName,AttrValue);var e=document.getElementById(objId);$compile(e)($scope);};$scope.GetObjectAttribute=function(objId,AttrName){if($App.NAB[objId]){return $App.NAB[objId].attr(AttrName);}return $("#"+objId).attr(AttrName);};$scope.SetObjectText=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].text(code);return;}var e=document.getElementById(objId);e.innerText=code;$compile(e)($scope);};$scope.GetObjectText=function(objId){if($App.NAB[objId]){return $App.NAB[objId].text();}return document.getElementById(objId).innerText;};$scope.DuplicateObject=function(objId,objName,containerId){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");var e=document.getElementById(containerId);$compile(e)($scope);};$scope.AnimateObjectCSS=function(objId,cssData,duration,delay,easing,callbackfn){if($App.NAB[objId]){$App.NAB[objId].delay(delay).animate(cssData,duration,easing,callbackfn);}else{$("#"+objId).delay(delay).animate(cssData,duration,easing,callbackfn);}};$scope.SetObjectCSS=function(objId,cssData){if($App.NAB[objId]){$App.NAB[objId].css(cssData);}else{$("#"+objId).css(cssData);}};$scope.CheckCollision=function(objId1,objId2){var x1=$("#"+objId1).offset().left;var y1=$("#"+objId1).offset().top;var h1=$("#"+objId1).outerHeight(true);var w1=$("#"+objId1).outerWidth(true);var b1=y1+h1;var r1=x1+w1;var x2=$("#"+objId2).offset().left;var y2=$("#"+objId2).offset().top;var h2=$("#"+objId2).outerHeight(true);var w2=$("#"+objId2).outerWidth(true);var b2=y2+h2;var r2=x2+w2;if(b1<y2||y1>b2||r1<x2||x1>r2){return false;}else{return true;}};$scope.CheckFullCollision=function(objId1,objId2){var r1=document.getElementById(rectone);var r2=document.getElementById(recttwo);var r1bb=r1.getBoundingClientRect();var r2bb=r2.getBoundingClientRect();var r1x=r1bb.x;var r1w=r1bb.width;var r1y=r1bb.y;var r1h=r1bb.height;var r2x=r2bb.x;var r2w=r2bb.width;var r2y=r2bb.y;var r2h=r2bb.height;if(r1x+1>=r2x&&r1y+1>=r2y&&r1x+r1w-1<=r2x+r2w&&r1y+r1h-1<=r2y+r2h){return true;}else{return false;}};function fixUnit(s){var t=s.toString();var parts=t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);return(parts[2])?t:parts[1]+'px';}$scope.SetObjectBounds=function(objId,l,t,w,h){if($App.NAB[objId]){var e=$App.NAB[objId];}else{var e=document.getElementById(objId);}if(w){w=fixUnit(w);e.style.width=w;$scope.SetObjectStyle(objId,'width',w);};if(h){h=fixUnit(h);e.style.height=h;$scope.SetObjectStyle(objId,'height',h);};if(l){l=fixUnit(l);e.style.left=l;$scope.SetObjectStyle(objId,'left',l);};if(t){t=fixUnit(t);e.style.top=t;$scope.SetObjectStyle(objId,'top',t);};};$scope.MoveObject=function(objId,left,top){if($App.NAB[objId]){$App.NAB[objId].css("left",left);$App.NAB[objId].css("top",top);}else{$scope.SetObjectBounds(objId,left,top);}};$scope.ObjectToFront=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().appendTo(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().appendTo(theParent);}};$scope.ObjectToBack=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().prependTo(theParent);}else if($("#"+objId).parent().prop("tagName")=="svg"){theParent=$("#"+objId).parent().children().first();$("#"+objId).detach().insertAfter(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().prependTo(theParent);}};$scope.SizeObject=function(objId,width,height){if($App.NAB[objId]){w=fixUnit(width);h=fixUnit(height);$App.NAB[objId].css("width",w);$App.NAB[objId].css("height",h);}else{$scope.SetObjectBounds(objId,null,null,width,height);}};$scope.RotateObject=function(objId,deg){if($App.NAB[objId]){$App.NAB[objId].css("webkitTransform","rotate("+deg+"deg)");$App.NAB[objId].css("mozTransform","rotate("+deg+"deg)");$App.NAB[objId].css("msTransform","rotate("+deg+"deg)");$App.NAB[objId].css("oTransform","rotate("+deg+"deg)");$App.NAB[objId].css("transform","rotate("+deg+"deg)");}else{var e=document.getElementById(objId);e.style.webkitTransform='rotate('+deg+'deg)';e.style.mozTransform='rotate('+deg+'deg)';e.style.msTransform='rotate('+deg+'deg)';e.style.oTransform='rotate('+deg+'deg)';e.style.transform='rotate('+deg+'deg)';};};$scope.ListBoxSort=function(objId){if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};$("#"+objId+" option").filter(function(){return!this.value||$.trim(this.value).length==0||$.trim(this.text).length==0;}).remove();var options=$("#"+objId+" option");var arr=options.map(function(_,o){return{t:$(o).text(),v:o.value};}).get();arr.sort(function(o1,o2){return o1.t>o2.t?1:o1.t<o2.t?-1:0;});options.each(function(i,o){o.value=arr[i].v;$(o).text(arr[i].t);});if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};};$scope.ListBoxMoveItem=function(listID,direction){var listbox=document.getElementById(listID);var selIndex=listbox.selectedIndex;if(-1==selIndex){return;}var increment=-1;if(direction=='up'){if(selIndex==1){return;}else{increment=-1;}}else{increment=1;}if((selIndex+increment)<0||(selIndex+increment)>(listbox.options.length-1)){return;}var selValue=listbox.options[selIndex].value;var selText=listbox.options[selIndex].text;listbox.options[selIndex].value=listbox.options[selIndex+increment].value
listbox.options[selIndex].text=listbox.options[selIndex+increment].text
listbox.options[selIndex+increment].value=selValue;listbox.options[selIndex+increment].text=selText;listbox.selectedIndex=selIndex+increment;};$scope.OpenDialog=function(dlgId){var modalInstance=$modal.open({templateUrl:dlgId,controller:dlgId+'_Ctrl',scope:$scope,size:'sm',backdrop:'static',animation:true});};$scope.AlertBox=function(dlgTitle,dlgMsg,dlgKind,callbackFn){var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-primary" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.MessageBox=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,callbackFn){var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-primary" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.SerializeForm=function(formId){var form=document.getElementById(formId);if(!form||form.nodeName!=="FORM")return;var i,j,s,field,m,q=[];for(i=0;i<form.elements.length;i++){field=form.elements[i];if(field.name==="")continue;switch(field.nodeName){case'INPUT':switch(field.type){case'text':case'hidden':case'password':case'number':q.push(field.name+"="+encodeURIComponent(field.value));break;case'checkbox':if(angular.isElement(field)){m=angular.element(field).controller('ngModel');if(m){q.push(field.name+"="+encodeURIComponent(m.$modelValue));break;}}q.push(field.name+"="+encodeURIComponent(field.checked));break;case'radio':if(field.checked){q.push(field.name+"="+encodeURIComponent(field.value));}break;case'file':break;}break;case'TEXTAREA':q.push(field.name+"="+encodeURIComponent(field.value));break;case'SELECT':switch(field.type){case'select-one':q.push(field.name+"="+encodeURIComponent(field.value));break;case'select-multiple':s='';for(j=field.options.length-1;j>=0;j=j-1){if(field.options[j].selected){s+=','+encodeURIComponent(field.options[j].value);}}if(s.length>0)q.push(field.name+"="+s.substr(1));break;}break;}}return q.join("&");};$scope.SubmitForm=function(form,url,method,submitFn,successFn,failFn){var ok=true;if(submitFn){ok=submitFn();}if(ok&&form&&url&&method){var f=$scope.SerializeForm(form);$http({method:method,url:url,data:f,responseType:"text",headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function(response){if(successFn)successFn(response.data,response.status);},function(response){if(failFn)failFn(response.data,response.status);});}};$scope.FormSubmit=function(formulario,url){var neoApp=angular.element(document.getElementById("ng-view")).scope();var fnsubmit=neoApp[formulario+"_submit"];var fnsuccess=neoApp[formulario+"_success"];var fnfail=neoApp[formulario+"_fail"];neoApp.SubmitForm(formulario,url,'POST',fnsubmit,fnsuccess,fnfail);};$scope.FormReset=function(formulario){$("#"+formulario).trigger("reset");};$scope.SetCompVar=function(varname,varvalue){varname2="";vararray=varname.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname2]=varvalue;};$scope.GetCompVar=function(varname,composedvar){varname2="";vararray=composedvar.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname]=$App[varname2];};$scope.ArraySuffle=function(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue;}return array;};$scope.LoadGoogleFont=function(fontName){$("head").append("<link href='https://fonts.googleapis.com/css?family="+fontName+"' rel='stylesheet' type='text/css'>");};$scope.LocalFileToVar=function(inputFileName,resultVar,tipo){$App.NAB.temp=resultVar;var realInputFileName=$("#"+inputFileName).prop("for");var files=$('#'+realInputFileName).prop("files");for(var i=0,f;f=files[i];i++){var reader=new FileReader();reader.onload=(function(theFile,resultVar,callBackFunction){return function(e,resultVar){varName=$App.NAB.temp;$App[varName]=e.target.result;};})(f);if(tipo=="text"){reader.readAsText(f);}else if(tipo=="binary"){reader.readAsBinaryString(f);}else{reader.readAsArrayBuffer(f);}};};$scope.ResizeDesktopWindow=function(theWidth,theHeight){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){window.resizeTo(theWidth,theHeight);}};$scope.FitAppToScreen=function(coverScreen,verticalAlign,horizontalAlign){$scope.AppPosition(verticalAlign,horizontalAlign);var ha=horizontalAlign.toUpperCase();var va=verticalAlign.toUpperCase();if(va=="MIDDLE"){va="CENTER"};fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]});fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]},function(transform){$App.NAB.AppScale=transform.scale});};$scope.IsInstalled=function(){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){return true;}else{return false;}};$scope.CenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px");$("body").css("bottom","0px");$("body").css("left","0px");$("body").css("right","0px");$("body").css("margin","auto");};$scope.TopCenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px!important");$("body").css("left","0px");$("body").css("right","0px");$("body").css("bottom","auto");$("body").css("margin","auto");};$scope.ScaleApp=function(thezoom){$App.NAB.AppScale=thezoom;$("#ng-app").css("transform-origin","50% 50%");$("#ng-app").css("transform","scale("+thezoom+","+thezoom+")");};$scope.AppPosition=function(vertical,horizontal){$('body').css("position","absolute");if(vertical=="top"){$('body').css("top","0px");$('body').css("bottom","auto");}else if(vertical=="bottom"){$('body').css("bottom","0px");$('body').css("top","auto");}else{$('body').css("bottom","0px");$('body').css("top","0px");}if(horizontal=="left"){$('body').css("left","0px");$('body').css("right","auto");}else if(horizontal=="right"){$('body').css("left","auto");$('body').css("right","0px");}else{$('body').css("left","0px");$('body').css("right","0px");}$('body').css("margin","auto");};$scope.SetResponsivePages=function(plarge,pmedium,psmall,pxsmall){if(matchMedia){const largedisp=window.matchMedia("(min-width: 1025px)");const mediumdisp=window.matchMedia("(min-width: 768px) and (max-width: 1024px)");const smalldisp=window.matchMedia("(min-width: 481px) and (max-width: 767px)");const verysmalldisp=window.matchMedia("(min-width: 320px) and (max-width: 480px)");funciones=angular.element(document.getElementById("ng-view")).scope();$("body").css("width","100%");$("body").css("height","100%");$("body").css("overflow-x","hidden");$("body").css("overflow-y","auto");largedisp.addListener(WidthChangeLarge);WidthChangeLarge(largedisp);mediumdisp.addListener(WidthChangeMedium);WidthChangeMedium(mediumdisp);smalldisp.addListener(WidthChangeSmall);WidthChangeSmall(smalldisp);verysmalldisp.addListener(WidthChangeVerySmall);WidthChangeVerySmall(verysmalldisp);function WidthChangeLarge(largedisp){if(largedisp.matches){funciones.GotoPage(plarge);}};function WidthChangeMedium(mediumdisp){if(mediumdisp.matches){funciones.GotoPage(pmedium);}};function WidthChangeSmall(smalldisp){if(smalldisp.matches){funciones.GotoPage(psmall);}};function WidthChangeVerySmall(verysmalldisp){if(verysmalldisp.matches){funciones.GotoPage(pxsmall);}};}};$scope.AppBackgroundColor=function(thecolor){$("html").css("background",thecolor);};$scope.AppBackgroundImage=function(imagen){ruta=$("#"+imagen).attr('src');$("html").css('background-image','url('+ruta+' )');$("html").css('background-repeat','no-repeat');$("html").css('background-position','center center');$("html").css('background-attachment','fixed');$("html").css("-webkit-background-size","cover");$("html").css("-moz-background-size","cover");$("html").css("-o-background-size","cover");$("html").css("background-size","cover");};$scope.ObjDisableSelection=function(objectname){$("#"+objectname).css("-webkit-touch-callout","none");$("#"+objectname).css("-webkit-user-select","none");$("#"+objectname).css("-khtml-user-select","none");$("#"+objectname).css("-moz-user-select","none");$("#"+objectname).css("-ms-user-select","none");$("#"+objectname).css("user-select","none");};$scope.DisableSelection=function(){$("*").css("-webkit-touch-callout","none");$("*").css("-webkit-user-select","none");$("*").css("-khtml-user-select","none");$("*").css("-moz-user-select","none");$("*").css("-ms-user-select","none");$("*").css("user-select","none");};$scope.GetUrlParameter=function(param){url=window.location.href;var queryString=url?url.split('?')[1]:window.location.search.slice(1);var obj={};if(queryString){queryString=queryString.split('#')[0];var arr=queryString.split('&');for(var i=0;i<arr.length;i++){var a=arr[i].split('=');var paramName=a[0];var paramValue=typeof(a[1])==='undefined'?true:a[1];if(typeof paramValue==='string')paramValue=paramValue;if(paramName.match(/\[(\d+)?\]$/)){var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/)){var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}else{obj[key].push(paramValue);}}else{if(!obj[paramName]){obj[paramName]=paramValue;}else if(obj[paramName]&&typeof obj[paramName]==='string'){obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}else{obj[paramName].push(paramValue);}}}}return obj[param];};$scope.csvToJSON=function(mycsv,separator,jsonObject){var lines=$App[mycsv].split("\n");var result=[];var headers=lines[0].split(separator);for(var i=1;i<lines.length;i++){var obj={};var currentline=lines[i].split(separator);for(var j=0;j<headers.length;j++){obj[headers[j]]=currentline[j];}result.push(obj);}$App[jsonObject]=result;};$scope.CheckInternetConnection=function(url,timeout,successFn,errorFn){$.ajax({url:url,timeout:timeout,cache:false,success:function(){if(successFn!=undefined){successFn();}},error:function(){if(errorFn!=undefined){errorFn();}},});};$scope.SetRelativePosition=function(objectname,vertical,horizontal){$("#"+objectname).css("position","absolute");if(vertical=="top"){$("#"+objectname).css("top","0px");$("#"+objectname).css("bottom","auto");}else if(vertical=="bottom"){$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","auto");}else{$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","0px");}if(horizontal=="left"){$("#"+objectname).css("left","0px");$("#"+objectname).css("right","auto");}else if(horizontal=="right"){$("#"+objectname).css("left","auto");$("#"+objectname).css("right","0px");}else{$("#"+objectname).css("left","0px");$("#"+objectname).css("right","0px");}$("#"+objectname).css("margin","auto");};$scope.WatchVar=function(varName,fn){if($App.NAB.$Watches[varName]){if($App.NAB.$Watches[varName].deRegFn)$App.NAB.$Watches[varName].deRegFn();delete $App.NAB.$Watches[varName];};if(fn){$App.NAB.$Watches[varName]={id:varName,deRegFn:undefined};$App.NAB.$Watches[varName].deRegFn=$scope.$watch(varName,function(newVal,oldVal){if(oldVal!==newVal)fn(newVal,oldVal);});};};$scope.TimerStart=function(objId,ms){if($App.NAB.$Timers[objId]){if(!angular.isDefined($App.NAB.$Timers[objId].promise)){$App.NAB.$Timers[objId].stime=Date.now();$App.NAB.$Timers[objId].promise=$interval($App.NAB.$Timers[objId].fn,ms||1000);}}else throw'A timer named "'+objId+'" does not exist.';};$scope.TimerStop=function(objId){if($App.NAB.$Timers[objId]){if(angular.isDefined($App.NAB.$Timers[objId].promise)){$interval.cancel($App.NAB.$Timers[objId].promise);$App.NAB.$Timers[objId].promise=undefined;}}else throw'A timer named "'+objId+'" does not exist.';};$scope._DeleteSound=function(sname){if($App.NAB.$Audio[sname]){$App.NAB.$Audio[sname].player.pause();delete $App.NAB.$Audio[sname].player;delete $App.NAB.$Audio[sname];return true;}return false;};$scope.PlaySound=function(fname,loop){var sname=ExtractFileName(fname).toLowerCase();if($App.NAB.$Audio[sname])throw'A sound named "'+sname+'" is already playing.';var devicePlatform=(typeof device!=='undefined'&&device.platform)?device.platform:null;if(typeof Audio!=="undefined"&&devicePlatform===null){obj={id:sname,kind:"audio",player:new Audio(fname)};obj.player.addEventListener("ended",function(){$scope._DeleteSound(sname);});}else if(devicePlatform){if(devicePlatform==='Android'){if(!IsUrl(fname))fname='/android_asset/www/'+fname;}obj={id:sname,kind:"media",player:new Media(fname,function onSuccess(){$scope._DeleteSound(sname);},function onError(e){console.log("Error playing sound: "+JSON.stringify(e));$scope._DeleteSound(sname);})};}else throw'Sound API unavailable.';$App.NAB.$Audio[sname]=obj;if(obj.kind==="audio"){obj.player.loop=loop;obj.player.play();}else obj.player.play({numberOfLoops:loop});};$scope.StopSound=function(fname){if(!fname||fname.length===0){for(var id in $App.NAB.$Audio)$scope._DeleteSound(id);}else{var sname=ExtractFileName(fname).toLowerCase();if(!$scope._DeleteSound(sname))throw'There is no playing sound named "'+sname+'"';}};$scope.CreateVideoPlayer=function(objId,fname,controls,autoplay,looping,muted){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}if(muted){addmuted="muted";}else{addmuted="";}htmlstring='<video id="'+objId+'Video" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+' '+addmuted+'><source src="'+fname+'" type="video/mp4"></video>';$("#"+objId).html(htmlstring);};$scope.OnVideoEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Video"]){$App.NAB[objId+"Video"].on(eventName,subroutine);return;}$("#"+objId+"Video").on(eventName,subroutine);};$scope.CreateAudioPlayer=function(objId,fname,controls,autoplay,looping){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}htmlstring='<audio id="'+objId+'Audio" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+'><source src="'+fname+'" type="audio/mp3"></audio>';$("#"+objId).html(htmlstring);};$scope.OnAudioEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Audio"]){$App.NAB[objId+"Audio"].on(eventName,subroutine);return;}$("#"+objId+"Audio").on(eventName,subroutine);};$scope.SoundBeep=function(){var snd=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();};var fit=function(){"use strict";function t(t){return t.toUpperCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function n(){return(new Date).getTime()}function i(t,e){for(var n=[],i=0,r=t.length;r>i;i++)n[i]=e(t[i]);return n}function r(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function o(e){if(!d)for(var n,i=H(C.body),r=w,o=0,a=T.length;a>o&&(d=T[o],n=d+r,!(n in i))&&(d=d.replace(/^(\w)/,t),n=d+r,!(n in i));o++);return d+e}function a(t){var e=H(t),n=e[o(w)].replace(/[a-z()]/gi,"").split(",");if(n.length<6)return[1,0,0,1,0,0];for(var i=0;6>i;i++)n[i]=parseFloat(n[i]);return n}function f(t,e){var n=a(e);n[0]=t.scale,n[3]=t.scale,n[4]+=t.tx,n[5]+=t.ty;var r=i(n,function(t){return t.toFixed(6)});e.style[o(m)]="0 0",e.style[o(w)]="matrix("+r.join(",")+")"}function s(t,e){var n=H(e),i=parseFloat(n.left)||0,r=parseFloat(n.top)||0;"static"===n.position&&(e.style.position="relative"),e.style.left=i+t.tx+b,e.style.top=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function l(t,e){var n=H(e),i=parseFloat(n.marginLeft)||0,r=parseFloat(n.marginTop)||0;e.style.marginLeft=i+t.tx+b,e.style.marginTop=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function h(t,e){e.height*=t.scale,e.width*=t.scale,e.x+=t.tx,e.y+=t.ty}function u(t){if(t.nodeType&&1==t.nodeType){var n=t.getBoundingClientRect();t={height:t.offsetHeight,width:t.offsetWidth,x:n.left,y:n.top}}return!e(t.x)&&e(t.left)&&(t.x=t.left),!e(t.y)&&e(t.top)&&(t.y=t.top),t}function c(){var t=n(),e=t-y;if(x>=e)clearInterval(v),v=setTimeout(c,x-e);else{for(var i=0,r=M.length;r>i;i++)M[i]();y=t}}function g(t,e,n,i,r){var o=u(t),a=u(e),s=0===o.width?R:o.width,l=0===o.height?P:o.height,c=0===a.width?I:a.width,g=0===a.height?P:a.height;R=s,B=l,I=c,P=g;var p=c/s,d=g/l,y=s/l,v=c/g,x=n.cover?d:p,m=n.cover?p:d,w=y>=v?x:m,T=s*w,O=l*w,F=n.hAlign==E?.5*(T-c):n.hAlign==L?T-c:0,b=n.vAlign==E?.5*(O-g):n.vAlign==A?O-g:0;return r=r||{},r.tx=a.x-F-o.x,r.ty=a.y-b-o.y,r.x=a.x-F-o.x*w,r.y=a.y-b-o.y*w,r.height=o.height*w,r.width=o.width*w,r.scale=w,i?i(r,t):n.apply&&(i="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?f:h)(r,t),r}function p(t,e,n,i){if(!t||!e)throw"You must supply a target and a container";"function"==typeof n&&(i=n,n={}),n=r(n||{},N);var o=g(t,e,n,i);return n.watch&&(M.length||(z.addEventListener?(z.addEventListener("resize",c),z.addEventListener("orientationchange",c)):(z.attachEvent("onresize",c),z.attachEvent("onorientationchange",c))),o.trigger=function(){g(t,e,n,i,o)},o.on=function(t){var e=M.indexOf(o.trigger);~e||M.push(o.trigger),t||o.trigger()},o.off=function(){var t=M.indexOf(o.trigger);~t&&M.splice(t,1)},o.on(!0)),o}var d,y,v,x=50,m="TransformOrigin",w="Transform",T="moz ms o webkit".split(" "),E="center",A="bottom",L="right",O="left",F="top",b="px",z=window||self,C=document,H=z.getComputedStyle,M=[],N={hAlign:E,vAlign:E,watch:!1,cover:!1,apply:!0};Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]==t)return e;return-1});var R,B,I,P;return r(p,{watching:M,defaults:N,cssTransform:f,cssPosition:s,cssMargin:l,CENTER:E,BOTTOM:A,RIGHT:L,LEFT:O,TOP:F})}();"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=fit),exports.fit=fit);(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});$scope.EnterFullScreen=function(){$(document).fullScreen(true);};$scope.ExitFullScreen=function(){$(document).fullScreen(false);};$scope.ObjectEnterFullScreen=function(ObjId){$("#"+ObjId).fullScreen(true);};$scope.ObjectExitFullScreen=function(ObjId){$("#"+ObjId).fullScreen(false);};var neoscript;$scope.AppOnKeyDown=function(callbackFn){$("body").keydown(function(evt){callbackFn(evt.which);});};(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});$scope.VarToFile=function(datavar,filename){var blob=new Blob([datavar],{type:"text/plain;charset=utf-8"});saveAs(blob,filename);};!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],i=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],j={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},k=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],l={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},m={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},n={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},o={},p={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},q={1:!0},r=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(var b=0;b<a.length;b++){var c=a[b].token.length,d=-1;if(c<r.length)for(var e=0;e<r[c].length;e++)if(a[b].token===r[c][e]){d=g.indexOf(r[c][e]);break}d===-1?(g.push(a[b].token),k.push(a[b].type),r.length<=a[b].token.length&&(r[a[b].token.length]=[]),r[a[b].token.length].push(a[b].token),i.push(a[b].value),h.push(a[b].show)):(g[d]=a[b].token,k[d]=a[b].type,i[d]=a[b].value,h[d]=a[b].show)}},f.lex=function(a,b){"use strict";var c,s,t,u,v={value:f.math.changeSign,type:0,pre:21,show:"-"},w={value:")",show:")",type:5,pre:0},x={value:"(",type:4,pre:0,show:"("},y=[x],z=[],A=a,B=0,C=l,D=0,E=o,F="";"undefined"!=typeof b&&f.addToken(b);var G={};for(s=0;s<A.length;s++)if(" "!==A[s]){for(c="",t=A.length-s>r.length-2?r.length-1:A.length-s;t>0;t--)for(u=0;u<r[t].length;u++)e(A,r[t][u],s,t)&&(c=r[t][u],u=r[t].length,t=0);if(s+=c.length-1,""===c)throw new f.Exception("Can't understand after "+A.slice(s));var H,I=g.indexOf(c),J=c,K=k[I],L=i[I],M=j[K],N=h[I],O=y[y.length-1];for(H=z.length;H--&&0===z[H];)if([0,2,3,5,9,11,12,13].indexOf(K)!==-1){if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);y.push(w),C=m,E=p,d(z,-1).pop()}if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);if(E[K]===!0&&(K=2,L=f.math.mul,N="&times;",M=3,s-=c.length),G={value:L,type:K,pre:M,show:N},0===K)C=l,E=o,d(z,2).push(2),y.push(G),y.push(x);else if(1===K)1===O.type?(O.value+=L,d(z,1)):y.push(G),C=m,E=n;else if(2===K)C=l,E=o,d(z,2),y.push(G);else if(3===K)y.push(G),C=m,E=p;else if(4===K)B+=z.length,z=[],D++,C=l,E=o,y.push(G);else if(5===K){if(!D)throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");for(;B--;)y.push(w);B=0,D--,C=m,E=p,y.push(G)}else if(6===K){if(O.hasDec)throw new f.Exception("Two decimals are not allowed in one number");1!==O.type&&(O={value:0,type:1,pre:0},y.push(O),d(z,-1)),C=q,d(z,1),E=o,O.value+=L,O.hasDec=!0}else 7===K&&(C=m,E=p,d(z,1),y.push(G));8===K?(C=l,E=o,d(z,4).push(4),y.push(G),y.push(x)):9===K?(9===O.type?O.value===f.math.add?(O.value=L,O.show=N,d(z,1)):O.value===f.math.sub&&"-"===N&&(O.value=f.math.add,O.show="+",d(z,1)):5!==O.type&&7!==O.type&&1!==O.type&&3!==O.type&&13!==O.type?"-"===J&&(C=l,E=o,d(z,2).push(2),y.push(v),y.push(x)):(y.push(G),d(z,2)),C=l,E=o):10===K?(C=l,E=o,d(z,2),y.push(G)):11===K?(C=l,E=o,y.push(G)):12===K?(C=l,E=o,d(z,6).push(6),y.push(G),y.push(x)):13===K&&(C=m,E=p,y.push(G)),d(z,-1),F=c}for(H=z.length;H--&&0===z[H];)y.push(w),d(z,-1).pop();if(C[5]!==!0)throw new f.Exception("complete the expression");for(;D--;)y.push(w);return y.push(w),new f(y)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NaN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.Exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":parseFloat(f[0].value.toFixed(15))},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});$scope.Calculate=function(formula,decimals){var numero=mexp.eval(formula);if(decimals!=-1){potencia=Math.pow(10,decimals);numero=Math.round(numero*potencia)/potencia;}return numero;};$(document).mousemove(function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.pageX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.pageY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.MouseX=Math.round(x);$App.NAB.MouseY=Math.round(y);});$(document).on("touchmove",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});$(document).on("touchstart",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});
$App.NAB={PageList:["inicio","operaciones_fracciones","suma","resta","multiplicacion","division","t_suma_1","t_suma_2","t_suma_3","t_suma_4","t_suma_5","t_suma_resultado","t_resta_1","t_resta_2","t_resta_3","t_resta_4","t_resta_5","t_resta_resultado","t_multiplicacion_1","t_multiplicacion_2","t_multiplicacion_3","t_multiplicacion_4","t_multiplicacion_5","t_multiplicacion_resultado","t_division_1","t_division_2","t_division_3","t_division_4","t_division_5","t_division_resultado","t_combi_1","t_combi_2","t_combi_3","t_combi_4","t_combi_5","t_combi_resultado"],PageEnterEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageCount:36,PageExitEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageNumber:1,AppScale:1,PageID:"",Hour:"",Hour24:"",Minute:"",Second:"",Time:"",Time24:"",DateShort:"",DateLong:"",DateFull:"",Month:"",MonthNum:"",WeekNum:"",Day:"",DayNum:"",Year:"",ClientWidth:$window.innerWidth,ClientHeight:$window.innerHeight,WindowWidth:$window.outerWidth,WindowHeight:$window.outerHeight,Orientation:$scope.GetOrientation(),OperatingSystem:"",$Watches:{},$Timers:{},$Audio:{}};$scope.__doUpdate=function(){var Now=new Date();$App.NAB.Hour=$filter("date")(Now,"h");$App.NAB.Hour24=$filter("date")(Now,"H");$App.NAB.Minute=$filter("date")(Now,"mm");$App.NAB.Second=$filter("date")(Now,"ss");$App.NAB.Time=$filter("date")(Now,"mediumTime");$App.NAB.Time24=$filter("date")(Now,"H:mm:ss");$App.NAB.DateShort=$filter("date")(Now,"shortDate");$App.NAB.DateLong=$filter("date")(Now,"longDate");$App.NAB.DateFull=$filter("date")(Now,"fullDate");$App.NAB.Month=$filter("date")(Now,"MMMM");$App.NAB.MonthNum=$filter("date")(Now,"M");$App.NAB.WeekNum=$filter("date")(Now,"w");$App.NAB.Day=$filter("date")(Now,"EEEE");$App.NAB.DayNum=$filter("date")(Now,"d");$App.NAB.Year=$filter("date")(Now,"yyyy");};$scope.__doOrientationChange=function(){$App.NAB.Orientation=$scope.GetOrientation();};$scope.__doResize=function(){$App.NAB.ClientWidth=$window.innerWidth;$App.NAB.ClientHeight=$window.innerHeight;$App.NAB.WindowWidth=$window.outerWidth;$App.NAB.WindowHeight=$window.outerHeight;};$scope.__init=function(){angular.element($window).bind("orientationchange.app",function(){$timeout($scope.__doOrientationChange);});angular.element($window).bind("resize.app",function(){$timeout($scope.__doResize);});$interval($scope.__doUpdate,1000);$App.NAB.OperatingSystem=GetPlatform();$scope.__doUpdate();};
$scope.t_suma_1_pageenter = function() {$App.cuenta_suma = 1;
$App.cont_suma = 0;
$App.cont_suma_e = 0;
$App.nota_suma = 0;};
$scope.t_resta_1_pageenter = function() {$App.cuenta_resta = 1;
$App.cont_resta = 0;
$App.cont_resta_e = 0;
$App.nota_resta = 0;};
$scope.t_multiplicacion_1_pageenter = function() {$App.cuenta_multi = 1;
$App.cont_multi = 0;
$App.cont_multi_e = 0;
$App.nota_multi = 0;};
$scope.t_division_1_pageenter = function() {$App.cuenta_divi = 1;
$App.cont_divi = 0;
$App.cont_divi_e = 0;
$App.nota_divi = 0;};
$scope.t_combi_1_pageenter = function() {$App.cuenta_combi = 1;
$App.cont_combi = 0;
$App.cont_combi_e = 0;
$App.nota_combi = 0;};
document.addEventListener("deviceready", function(){
$scope.__init();
});
});NeoApp.controller("App_DlgCtrl",function($scope,$rootScope,$modalInstance,$filter,$window,$animate){$scope.CloseDialog=function(){$modalInstance.close();};$scope.CloseDialogBtn=function(btnNum){$modalInstance.close(btnNum);};});
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};NeoApp.directive('timer',function(){return{restrict:'E',replace:false,transclude:false,link:function(scope,element,attributes){if(attributes.autostop){scope.$on('$destroy',function(){scope.$parent.TimerStop(attributes.id);});};if(attributes.autostart)scope.$parent.TimerStart(attributes.id,attributes.interval);}};});NeoApp.directive('slider',['$window',function($window){return{restrict:'E',replace:true,transclude:true,require:'?ngModel',scope:{value:"=ngModel",min:"=",max:"=",disabled:'=ngDisabled',onChange:"&",onChanging:"&"},compile:function(element,attributes){element.addClass('neoapp-slider');var html='';if(attributes.trackimage){html+='<img class="track-img" src="'+attributes.trackimage+'"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='/>';}else{html+='<div class="track"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='><div class="track-left';if(attributes.kind)html+=' track-left-'+attributes.kind;html+='"></div>';};html+='</div><button class="thumb';if(attributes.thumbimage)html+=' thumb-img';if(attributes.kind)html+=' thumb-'+attributes.kind;html+='"';if(attributes.thumbwidth||attributes.thumbimage){html+=' style="';if(attributes.thumbwidth)html+='width:'+attributes.thumbwidth;if(attributes.thumbwidth&&attributes.thumbimage)html+=';';if(attributes.thumbimage)html+="background-image:url('"+attributes.thumbimage+"')";html+='"';};html+=' ng-style="NAB.'+attributes.id+'_style"';html+=' ng-transclude></button>';element.html(html);return linkFn;}};function linkFn($scope,element,attributes,ngModel){var mouseDown=false,track=attributes.trackimage?element.find('.track-img'):element.find('.track'),thumb=element.find('.thumb'),trackLeft=element.find('.track-left'),elemLeft,vMin=isNaN(parseFloat($scope.min))?0:parseFloat($scope.min),vMax=isNaN(parseFloat($scope.max))?100:parseFloat($scope.max),xOffs,dbOnChanging=($scope.onChanging)?debounce(function(){$scope.onChanging();},100):null;if(vMax<=vMin)vMax=vMin+1;var value=isNaN(parseFloat($scope.value))?vMin:parseFloat($scope.value);function positionThumb(){var basePos=((value-vMin)/(vMax-vMin))*(track.width()-thumb.innerWidth());thumb.css('left',basePos);if(trackLeft)trackLeft.css('width',basePos);};function updateValue(){if(ngModel&&!isNaN(parseFloat($scope.value))){var v=$scope.value;value=Math.max(vMin,Math.min(Math.floor(v),vMax));$scope.value=value;}else{value=Math.max(vMin,Math.min(Math.floor(value),vMax));};positionThumb();};function mouseCoords(event){if(event.type=='touchstart'||event.type=='touchmove'||event.type=='touchend'||event.type=='touchcancel'){var touch=event.originalEvent.touches[0]||event.originalEvent.changedTouches[0];return{x:touch.pageX,y:touch.pageY};}else{return{x:event.pageX,y:event.pageY};};};thumb.on('mousedown touchstart',function(event){if(!element.attr('disabled')){mouseDown=true;elemLeft=element.position().left;xOffs=mouseCoords(event).x-thumb.position().left-elemLeft;$(document).one('mouseup touchend ontouchcancel',function(event){if($scope.onChange)$scope.onChange();mouseDown=false;return false;});return false;};});element.on('mousemove touchmove',function(event){if(mouseDown){var xPos=mouseCoords(event).x-elemLeft-xOffs;var v=((xPos/(track.width()-thumb.innerWidth()))*(vMax-vMin))+vMin;v=Math.max(vMin,Math.min(Math.floor(v),vMax));if(value!=v){value=v;positionThumb();if(ngModel){$scope.value=value;if($scope.onChanging)$scope.onChanging();$scope.$apply();};if($scope.onChanging)dbOnChanging();};return false;};});angular.element($window).on('resize.'+element.id,function(){positionThumb();});if(ngModel){$scope.$watch('value',function(){if(!mouseDown){updateValue();};});};if(angular.isObject($scope.max)){$scope.$watch('max',function(){vMax=+$scope.max||100;updateValue();});};if(angular.isObject($scope.min)){$scope.$watch('min',function(){vMin=+$scope.min||0;updateValue();});};$scope.$watch('disabled',function(newVal){element.find('*').attr('disabled',newVal||false);});$scope.$on('$destroy',function(){angular.element($window).off('resize.'+element.id);});};}]);
NeoApp.controller("inicio_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 1;
$App.NAB.PageID = "inicio";
$scope.Image87_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
});
NeoApp.controller("operaciones_fracciones_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 2;
$App.NAB.PageID = "operaciones_fracciones";
$scope.PushButton7_click = function() {Exit("");};
$scope.Image80_click = function() {$scope.GotoPage( "suma" );};
$scope.Image81_click = function() {$scope.GotoPage( "resta" );};
$scope.Image82_click = function() {$scope.GotoPage( "multiplicacion" );};
$scope.Image83_click = function() {$scope.GotoPage( "division" );};
$scope.Image84_click = function() {$scope.GotoPage( "t_combi_1" );};
$scope.Headline31_click = function() {$scope.GotoPage( "suma" );};
$scope.Headline32_click = function() {$scope.GotoPage( "resta" );};
$scope.Headline33_click = function() {$scope.GotoPage( "multiplicacion" );};
$scope.Headline34_click = function() {$scope.GotoPage( "division" );};
$scope.Headline35_click = function() {$scope.GotoPage( "actividades" );};
});
NeoApp.controller("suma_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 3;
$App.NAB.PageID = "suma";
$scope.Image11_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image16_click = function() {$scope.GotoPage( "t_suma_1" );};
});
NeoApp.controller("resta_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 4;
$App.NAB.PageID = "resta";
$scope.Image12_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image21_click = function() {$scope.GotoPage( "t_resta_1" );};
});
NeoApp.controller("multiplicacion_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 5;
$App.NAB.PageID = "multiplicacion";
$scope.Image13_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image22_click = function() {$scope.GotoPage( "t_multiplicacion_1" );};
});
NeoApp.controller("division_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 6;
$App.NAB.PageID = "division";
$scope.Image14_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image23_click = function() {$scope.GotoPage( "t_division_1" );};
});
NeoApp.controller("t_suma_1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 7;
$App.NAB.PageID = "t_suma_1";
$scope.Image17_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.comprobar_click = function() {$App.cuenta_suma = $scope.Calculate($App.cuenta_suma+" +1",0);
if ($App.n1 == "10" && $App.d1 == "13") {
$App.cont_suma = $scope.Calculate($App.cont_suma+" +1",0);
$App.nota_suma = $scope.Calculate($App.cont_suma+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_2" );
} else {
$App.cont_suma_e = $scope.Calculate($App.cont_suma_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_2" );
};};
});
NeoApp.controller("t_suma_2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 8;
$App.NAB.PageID = "t_suma_2";
$scope.Image25_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton6_click = function() {$App.cuenta_suma = $scope.Calculate($App.cuenta_suma+" +1",0);
if ($App.n2 == "23" && $App.d2 == "20") {
$App.cont_suma = $scope.Calculate($App.cont_suma+" +1",0);
$App.nota_suma = $scope.Calculate($App.cont_suma+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_3" );
} else {
$App.cont_suma_e = $scope.Calculate($App.cont_suma_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_3" );
};};
});
NeoApp.controller("t_suma_3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 9;
$App.NAB.PageID = "t_suma_3";
$scope.Image27_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton8_click = function() {$App.cuenta_suma = $scope.Calculate($App.cuenta_suma+" +1",0);
if ($App.n3 == "25" && $App.d3 == "12") {
$App.cont_suma = $scope.Calculate($App.cont_suma+" +1",0);
$App.nota_suma = $scope.Calculate($App.cont_suma+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_4" );
} else {
$App.cont_suma_e = $scope.Calculate($App.cont_suma_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_4" );
};};
});
NeoApp.controller("t_suma_4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 10;
$App.NAB.PageID = "t_suma_4";
$scope.Image31_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton10_click = function() {$App.cuenta_suma = $scope.Calculate($App.cuenta_suma+" +1",0);
if ($App.n4 == "47" && $App.d4 == "24") {
$App.cont_suma = $scope.Calculate($App.cont_suma+" +1",0);
$App.nota_suma = $scope.Calculate($App.cont_suma+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_5" );
} else {
$App.cont_suma_e = $scope.Calculate($App.cont_suma_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_5" );
};};
});
NeoApp.controller("t_suma_5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 11;
$App.NAB.PageID = "t_suma_5";
$scope.Image35_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton12_click = function() {if ($App.n5 == "7" && $App.d5 == "5") {
$App.cont_suma = $scope.Calculate($App.cont_suma+" +1",0);
$App.nota_suma = $scope.Calculate($App.cont_suma+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_resultado" );
} else {
$App.cont_suma_e = $scope.Calculate($App.cont_suma_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_suma_resultado" );
};};
});
NeoApp.controller("t_suma_resultado_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 12;
$App.NAB.PageID = "t_suma_resultado";
$scope.Image32_click = function() {$scope.GotoPage( "operaciones_fracciones" );
$App.n1 = "";
$App.d1 = "";
$App.n2 = "";
$App.d2 = "";
$App.n3 = "";
$App.d3 = "";
$App.n4 = "";
$App.d4 = "";
$App.n5 = "";
$App.d5 = "";};
});
NeoApp.controller("t_resta_1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 13;
$App.NAB.PageID = "t_resta_1";
$scope.Image18_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image8_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton9_click = function() {$App.cuenta_resta = $scope.Calculate($App.cuenta_resta+" +1",0);
if ($App.rn1 == "1" && $App.rd1 == "4") {
$App.cont_resta = $scope.Calculate($App.cont_resta+" +1",0);
$App.nota_resta = $scope.Calculate($App.cont_resta+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_2" );
} else {
$App.cont_resta_e = $scope.Calculate($App.cont_resta_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_2" );
};};
});
NeoApp.controller("t_resta_2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 14;
$App.NAB.PageID = "t_resta_2";
$scope.Image38_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image39_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton11_click = function() {$App.cuenta_resta = $scope.Calculate($App.cuenta_resta+" +1",0);
if ($App.rn2 == "27" && $App.rd2 == "35") {
$App.cont_resta = $scope.Calculate($App.cont_resta+" +1",0);
$App.nota_resta = $scope.Calculate($App.cont_resta+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_3" );
} else {
$App.cont_resta_e = $scope.Calculate($App.cont_resta_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_3" );
};};
});
NeoApp.controller("t_resta_3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 15;
$App.NAB.PageID = "t_resta_3";
$scope.Image41_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image42_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton13_click = function() {$App.cuenta_resta = $scope.Calculate($App.cuenta_resta+" +1",0);
if ($App.rn3 == "-11" && $App.rd3 == "9") {
$App.cont_resta = $scope.Calculate($App.cont_resta+" +1",0);
$App.nota_resta = $scope.Calculate($App.cont_resta+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_4" );
} else {
$App.cont_resta_e = $scope.Calculate($App.cont_resta_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_4" );
};};
});
NeoApp.controller("t_resta_4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 16;
$App.NAB.PageID = "t_resta_4";
$scope.Image44_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image45_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton14_click = function() {$App.cuenta_resta = $scope.Calculate($App.cuenta_resta+" +1",0);
if ($App.rn4 == "-1" && $App.rd4 == "20") {
$App.cont_resta = $scope.Calculate($App.cont_resta+" +1",0);
$App.nota_resta = $scope.Calculate($App.cont_resta+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_5" );
} else {
$App.cont_resta_e = $scope.Calculate($App.cont_resta_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_5" );
};};
});
NeoApp.controller("t_resta_5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 17;
$App.NAB.PageID = "t_resta_5";
$scope.Image47_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image48_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton15_click = function() {$App.cuenta_resta = $scope.Calculate($App.cuenta_resta+" +1",0);
if ($App.rn5 == "-59" && $App.rd5 == "44") {
$App.cont_resta = $scope.Calculate($App.cont_resta+" +1",0);
$App.nota_resta = $scope.Calculate($App.cont_resta+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_resultado" );
} else {
$App.cont_resta_e = $scope.Calculate($App.cont_resta_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_resta_resultado" );
};};
});
NeoApp.controller("t_resta_resultado_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 18;
$App.NAB.PageID = "t_resta_resultado";
$scope.Image34_click = function() {$scope.GotoPage( "operaciones_fracciones" );
$App.rn1 = "";
$App.rd1 = "";
$App.rn2 = "";
$App.rd2 = "";
$App.rn3 = "";
$App.rd3 = "";
$App.rn4 = "";
$App.rd4 = "";
$App.rn5 = "";
$App.rd5 = "";};
});
NeoApp.controller("t_multiplicacion_1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 19;
$App.NAB.PageID = "t_multiplicacion_1";
$scope.Image19_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image49_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton16_click = function() {$App.cuenta_multi = $scope.Calculate($App.cuenta_multi+" +1",0);
if ($App.mn1 == "8" && $App.md1 == "15") {
$App.cont_multi = $scope.Calculate($App.cont_multi+" +1",0);
$App.nota_multi = $scope.Calculate($App.cont_multi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_2" );
} else {
$App.cont_multi_e = $scope.Calculate($App.cont_multi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_2" );
};};
});
NeoApp.controller("t_multiplicacion_2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 20;
$App.NAB.PageID = "t_multiplicacion_2";
$scope.Image53_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image54_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton17_click = function() {$App.cuenta_multi = $scope.Calculate($App.cuenta_multi+" +1",0);
if ($App.mn2 == "-1" && $App.md2 == "7") {
$App.cont_multi = $scope.Calculate($App.cont_multi+" +1",0);
$App.nota_multi = $scope.Calculate($App.cont_multi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_3" );
} else {
$App.cont_multi_e = $scope.Calculate($App.cont_multi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_3" );
};};
});
NeoApp.controller("t_multiplicacion_3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 21;
$App.NAB.PageID = "t_multiplicacion_3";
$scope.Image56_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image57_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton18_click = function() {$App.cuenta_multi = $scope.Calculate($App.cuenta_multi+" +1",0);
if ($App.mn3 == "9" && $App.md3 == "10") {
$App.cont_multi = $scope.Calculate($App.cont_multi+" +1",0);
$App.nota_multi = $scope.Calculate($App.cont_multi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_4" );
} else {
$App.cont_multi_e = $scope.Calculate($App.cont_multi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_4" );
};};
});
NeoApp.controller("t_multiplicacion_4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 22;
$App.NAB.PageID = "t_multiplicacion_4";
$scope.Image59_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image60_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton19_click = function() {$App.cuenta_multi = $scope.Calculate($App.cuenta_multi+" +1",0);
if ($App.mn4 == "7" && $App.md4 == "15") {
$App.cont_multi = $scope.Calculate($App.cont_multi+" +1",0);
$App.nota_multi = $scope.Calculate($App.cont_multi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_5" );
} else {
$App.cont_multi_e = $scope.Calculate($App.cont_multi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_5" );
};};
});
NeoApp.controller("t_multiplicacion_5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 23;
$App.NAB.PageID = "t_multiplicacion_5";
$scope.Image62_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image63_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton20_click = function() {$App.cuenta_multi = $scope.Calculate($App.cuenta_multi+" +1",0);
if ($App.mn5 == "-1" && $App.md5 == "14") {
$App.cont_multi = $scope.Calculate($App.cont_multi+" +1",0);
$App.nota_multi = $scope.Calculate($App.cont_multi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_resultado" );
} else {
$App.cont_multi_e = $scope.Calculate($App.cont_multi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_multiplicacion_resultado" );
};};
});
NeoApp.controller("t_multiplicacion_resultado_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 24;
$App.NAB.PageID = "t_multiplicacion_resultado";
$scope.Image52_click = function() {$scope.GotoPage( "operaciones_fracciones" );
$App.mn1 = "";
$App.md1 = "";
$App.mn2 = "";
$App.md2 = "";
$App.mn3 = "";
$App.md3 = "";
$App.mn4 = "";
$App.md4 = "";
$App.mn5 = "";
$App.md5 = "";};
});
NeoApp.controller("t_division_1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 25;
$App.NAB.PageID = "t_division_1";
$scope.Image20_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image64_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton21_click = function() {$App.cuenta_divi = $scope.Calculate($App.cuenta_divi+" +1",0);
if ($App.dn1 == "10" && $App.dd1 == "21") {
$App.cont_divi = $scope.Calculate($App.cont_divi+" +1",0);
$App.nota_divi = $scope.Calculate($App.cont_divi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_division_2" );
} else {
$App.cont_divi_e = $scope.Calculate($App.cont_divi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_division_2" );
};};
});
NeoApp.controller("t_division_2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 26;
$App.NAB.PageID = "t_division_2";
$scope.Image68_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image69_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton22_click = function() {$App.cuenta_divi = $scope.Calculate($App.cuenta_divi+" +1",0);
if ($App.dn2 == "-18" && $App.dd2 == "49") {
$App.cont_divi = $scope.Calculate($App.cont_divi+" +1",0);
$App.nota_divi = $scope.Calculate($App.cont_divi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_division_3" );
} else {
$App.cont_divi_e = $scope.Calculate($App.cont_divi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_division_3" );
};};
});
NeoApp.controller("t_division_3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 27;
$App.NAB.PageID = "t_division_3";
$scope.Image71_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image72_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton23_click = function() {$App.cuenta_divi = $scope.Calculate($App.cuenta_divi+" +1",0);
if ($App.dn3 == "96" && $App.dd3 == "5") {
$App.cont_divi = $scope.Calculate($App.cont_divi+" +1",0);
$App.nota_divi = $scope.Calculate($App.cont_divi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_division_4" );
} else {
$App.cont_divi_e = $scope.Calculate($App.cont_divi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_division_4" );
};};
});
NeoApp.controller("t_division_4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 28;
$App.NAB.PageID = "t_division_4";
$scope.Image74_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image75_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton24_click = function() {$App.cuenta_divi = $scope.Calculate($App.cuenta_divi+" +1",0);
if ($App.dn4 == "-10" && $App.dd4 == "9") {
$App.cont_divi = $scope.Calculate($App.cont_divi+" +1",0);
$App.nota_divi = $scope.Calculate($App.cont_divi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_division_5" );
} else {
$App.cont_divi_e = $scope.Calculate($App.cont_divi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_division_5" );
};};
});
NeoApp.controller("t_division_5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 29;
$App.NAB.PageID = "t_division_5";
$scope.Image77_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image78_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton25_click = function() {$App.cuenta_divi = $scope.Calculate($App.cuenta_divi+" +1",0);
if ($App.dn5 == "3" && $App.dd5 == "7") {
$App.cont_divi = $scope.Calculate($App.cont_divi+" +1",0);
$App.nota_divi = $scope.Calculate($App.cont_divi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_division_resultado" );
} else {
$App.cont_divi_e = $scope.Calculate($App.cont_divi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_division_resultado" );
};};
});
NeoApp.controller("t_division_resultado_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 30;
$App.NAB.PageID = "t_division_resultado";
$scope.Image67_click = function() {$scope.GotoPage( "operaciones_fracciones" );
$App.dn1 = "";
$App.dd1 = "";
$App.dn2 = "";
$App.dd2 = "";
$App.dn3 = "";
$App.dd3 = "";
$App.dn4 = "";
$App.dd4 = "";
$App.dn5 = "";
$App.dd5 = "";};
});
NeoApp.controller("t_combi_1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 31;
$App.NAB.PageID = "t_combi_1";
$scope.Image88_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image89_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton1_click = function() {$App.cuenta_combi = $scope.Calculate($App.cuenta_combi+" +1",0);
if ($App.cn1 == "5" && $App.cd1 == "2") {
$App.cont_combi = $scope.Calculate($App.cont_combi+" +1",0);
$App.nota_combi = $scope.Calculate($App.cont_combi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_2" );
} else {
$App.cont_combi_e = $scope.Calculate($App.cont_combi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_2" );
};};
});
NeoApp.controller("t_combi_2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 32;
$App.NAB.PageID = "t_combi_2";
$scope.Image91_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image92_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton2_click = function() {$App.cuenta_combi = $scope.Calculate($App.cuenta_combi+" +1",0);
if ($App.cn2 == "29" && $App.cd2 == "30") {
$App.cont_combi = $scope.Calculate($App.cont_combi+" +1",0);
$App.nota_combi = $scope.Calculate($App.cont_combi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_3" );
} else {
$App.cont_combi_e = $scope.Calculate($App.cont_combi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_3" );
};};
});
NeoApp.controller("t_combi_3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 33;
$App.NAB.PageID = "t_combi_3";
$scope.Image94_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image95_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton3_click = function() {$App.cuenta_combi = $scope.Calculate($App.cuenta_combi+" +1",0);
if ($App.cn3 == "13" && $App.cd3 == "7") {
$App.cont_combi = $scope.Calculate($App.cont_combi+" +1",0);
$App.nota_combi = $scope.Calculate($App.cont_combi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_4" );
} else {
$App.cont_combi_e = $scope.Calculate($App.cont_combi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_4" );
};};
});
NeoApp.controller("t_combi_4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 34;
$App.NAB.PageID = "t_combi_4";
$scope.Image97_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image98_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton4_click = function() {$App.cuenta_combi = $scope.Calculate($App.cuenta_combi+" +1",0);
if ($App.cn4 == "-7" && $App.cd4 == "8") {
$App.cont_combi = $scope.Calculate($App.cont_combi+" +1",0);
$App.nota_combi = $scope.Calculate($App.cont_combi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_5" );
} else {
$App.cont_combi_e = $scope.Calculate($App.cont_combi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_5" );
};};
});
NeoApp.controller("t_combi_5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 35;
$App.NAB.PageID = "t_combi_5";
$scope.Image100_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.Image101_click = function() {$scope.GotoPage( "operaciones_fracciones" );};
$scope.PushButton5_click = function() {$App.cuenta_combi = $scope.Calculate($App.cuenta_combi+" +1",0);
if ($App.cn5 == "-32" && $App.cd5 == "15") {
$App.cont_combi = $scope.Calculate($App.cont_combi+" +1",0);
$App.nota_combi = $scope.Calculate($App.cont_combi+"*2",0);
$scope.AlertBox("Corrección","¡Muy bien!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_resultado" );
} else {
$App.cont_combi_e = $scope.Calculate($App.cont_combi_e+" +1",0);
$scope.AlertBox("Corrección","¡Error!","primary",$scope.Ok );
$scope.GotoPage( "t_combi_resultado" );
};};
});
NeoApp.controller("t_combi_resultado_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 36;
$App.NAB.PageID = "t_combi_resultado";
$scope.Image103_click = function() {$scope.GotoPage( "operaciones_fracciones" );
$App.cn1 = "";
$App.cd1 = "";
$App.cn2 = "";
$App.cd2 = "";
$App.cn3 = "";
$App.cd3 = "";
$App.cn4 = "";
$App.cd4 = "";
$App.cn5 = "";
$App.cd5 = "";};
});
NeoApp.controller("NewDialog_Ctrl", function($scope,$rootScope,$modalInstance,$filter,$window) {
 $scope.CloseDialog = function() {
  $modalInstance.close();
 };
});

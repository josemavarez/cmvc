function abre_calendario(frm,name,e,home,admin)
{
	if (e != null && (e.keyCode==9 || e.tabKey)) { return true; }
	
	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name;
	if(admin != null){argumentos += '&admin=1';}
	var href = home + "common/calendar/calendario.html?" + argumentos;

	var araY=200;
	var araX=200;
	if (e != null)
	{ araX = e.screenX; araY = e.screenY - 150; }	

	var w=window.open(href,"selector","width=170,height=200,left=" + araX + ",top=" + araY);
	w.focus();
	return false;
}


function abre_time_picker(frm,name,e,home,admin)
{
	if (e != null && (e.keyCode==9 || e.tabKey)) { return true; }

	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name;
	if(admin != null){argumentos += '&admin=1';}
	var href = home + "common/time_picker/time_picker.html?" + argumentos;
	
	var araY=200;
	var araX=200;
	if (e != null)
	{
		if (document.all)
		{ araY=event.y - document.body.scrollTop; araX=event.x - document.body.scrollLeft; }
		else
		{ araX = e.screenX; araY = e.screenY - 150; }
	}	
	
	var w=window.open(href,"selector","width=200,height=150,left=" + araX + ",top=" + araY);
	w.focus();
	return false;
}


function abre_datetime_picker(frm,name,e,home,admin)
{
	if (e != null && (e.keyCode==9 || e.tabKey)) { return true; }

	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name;
	if(admin != null){argumentos += '&admin=1';}
	var href = home + "common/datetime_picker/datetime_picker.html?" + argumentos;
	
	var araY=200;
	var araX=200;
	if (e != null)
	{
		if (document.all)
		{ araY=event.y - document.body.scrollTop; araX=event.x - document.body.scrollLeft; }
		else
		{ araX = e.screenX; araY = e.screenY - 150; }
	}	

	var w=window.open(href,"selector","width=200,height=250,left=" + araX + ",top=" + araY + ",status=1");
	w.focus();
	return false;
}

function abre_remote_html_editor(frm,name,home,admin)
{
	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name;
	if(admin != null){argumentos += '&admin=1';}
	var href = home + "common/remote_html/editor.html?" + argumentos;
	var w=window.open(href,"remote_html_editor",
	  			  "width=480,height=245,left=200,top=60");
	w.focus();
	return false;
}

function abre_params_flash(frm,name,atr_params,home,admin)
{
	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name + "&params="+ atr_params;
	if(admin != null){argumentos += '&admin=1';}
	var href = home + "common/flash/editor.html?" + argumentos;
	var w=window.open(href,"params_flash","width=375,height=400,left=200,top=60");
	w.focus();
	return false;
}

function abre_html_editor(frm,name,ancho,alto,idvista,atributo,source,links,home,admin)
{
	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name + "&source=" + source +
			"&ebd_links=" + links;
	if(admin != null){argumentos += '&admin=1';}

	if (idvista != null && idvista > 0)
		argumentos += "&usar_vista=" + idvista;
	
	if (atributo != null && atributo.length > 0)
		argumentos += "&usar_atributo=" + atributo;

	var href = home + "common/html_editor/html_editor.html?"
				+ argumentos;
	var width=850;
	var height=600;

//	if (ancho != null && ancho > 100) width=ancho;
//	if (alto != null && alto > 100) height=alto;
	
	var w=window.open(href, "html_editor",
				"width=" + width + ",height=" + height + ",top=50,left=50,resizable=1,status=1");
	w.focus();
	return false;
}

function abre_new_html_editor(frm,name,ancho,alto,idvista,atributo,source,links,home,admin)
{
	var form_name = frm;
	if (document.all && frm.attributes)
	{ form_name = frm.attributes('name').value; }
	else if (frm.getAttribute)
	{ form_name = frm.getAttribute('name'); }

	if (home == null) { home = "/"; }
	var argumentos = "form_name=" + form_name + "&name=" + name + "&source=" + source +
			"&ebd_links=" + links;

	if(admin != null){argumentos += '&admin=1';}

	if (idvista != null && idvista > 0)
		argumentos += "&usar_vista=" + idvista;
	
	if (atributo != null && atributo.length > 0)
		argumentos += "&usar_atributo=" + atributo;

	var width=800;
	var height=550;

	if (ancho != null && ancho > 100) width=ancho;
	if (alto != null && alto > 100) height=alto;

	argumentos += "&ancho=" + width;
	argumentos += "&alto=" + height;
	width+=50;
	height+=50;
	var href = home + "common/new_html_editor/new_html_editor.html?"
				+ argumentos;
	
	var w=window.open(href, "html_editor",
				"width=" + width + ",height=" + height + ",top=50,left=50,resizable=1,status=1");
	w.focus();
	return false;
}


function abre_agregar_comentarios (id_objeto,es_relacion)
{
	if (id_objeto != null ){
		var href = "ver_comentarios.html?id="+id_objeto+"&es_relacion="+es_relacion ;
		var w=window.open(href,'opciones_editor','left=200,top=100,width=600,height=450,resizable=no,scrollbars=no');
		w.focus();
	}
	return false;
}


function abre_object_picker(home,type,form_name,name,type_adicional,name_adicional,callback)
{
	var width=350;
	
	var argumentos = 'type='+type+'&form_name='+form_name+'&name='+name;
	if (name_adicional != null && type_adicional != null)
	{
		argumentos += '&type_adicional='+type_adicional+'&name_adicional='+name_adicional;
		width=580;
	}
	if(callback != null)
	{
		argumentos += '&callback='+callback;	
	}
	var w=window.open(home+"common/object_picker/object_picker.html?"+argumentos,"object_picker","width="+width+",height=360,top=200,left=200");
	w.focus();
	return false;
}


function eBD_print(url)
{
	window.open(url,'imprimir','width=1,height=1,toolbar=0,directories=0,menubar=0,status=0,resizable=0,location=0,scrollbars=0,copyhistory=0,top=9000,left=9000');
}


function obrir(pag,amp,alc,dalt,esquerra,nom,toolbar,directories,menubar,status,resizable,location,scrollbars,copyhistory)
{
/*
	pag			PAGINA K HA D'OBRIR, no hay defecto debe pasarse por parametro
	amp			AMPLADA DE LA FINESTRA, defecto => 800
	alc			ALCADA DE LA FINESTRA, defecto => 600
	dalt			DISTANCIA DL TOP, defecto => 0
	esquerra		DISTANCIA D L'ESKERRA, defecto => 0
	nom			NOM DE LA FINESTRA, defecto => finestra
	toolbar		SI VOLS LA BARRA D'EINES, defecto => 1 k es 'si'
	directories		SI VOLS LOS FAVORITOS, defecto => 1 k es 'si'
	menubar		SI VOLS LA BARRA DLS MENUS, defecto => 1 k es 'si'
	status		SI VOLS LA BARRA D'STATUS, defecto => 1 k es 'si'
	resizable		SI VOLS K SIGUI ESCALABLE, defecto => 1 k es 'si'
	location		SI VOLS LA BARRA DE DIRECCIO, defecto => 1 k es 'si'
	scrollbars		SI VOLS SCROLLBARS, defecto => yes
	copyhistory		SI VOLS COPIA EL HISTORY D LA FINESTRA MARE, defecto => 1 k es 'si'
*/

	if(!(amp)){amp=screen.availWidth-15;}
	if(!(alc)){alc=screen.availHeight-25;}
	if(dalt == ''){dalt=0;}
	if(nom == ''){nom='finestra';}
	if(esquerra == ''){esquerra=1;}
	if(toolbar != 0){toolbar=1;}
	if(directories != 0){directories=1;}
	if(menubar != 0){menubar=1;}
	if(status != 0){status=1;}
	if(resizable != 0){resizable=1;}
	if(location != 0){location=1;}
	if(scrollbars != 'no'){scrollbars='yes';}
	if(copyhistory != 0){copyhistory=1;}
	finestra=eval("window.open('"+pag+"','"+nom+"','width="+amp+",height="+alc+",toolbar="+toolbar+",directories="+directories+",menubar="+menubar+",status="+status+",resizable="+resizable+",location="+location+",scrollbars="+scrollbars+",copyhistory="+copyhistory+",top="+dalt+",left="+esquerra+"')");
	finestra.focus();
	return false;
}

var resumen_calendario_activo=null;
function muestra_resumen_calendario(event,id)
{
	if (resumen_calendario_activo != null && resumen_calendario_activo.style != null)
	{ resumen_calendario_activo.style.visibility='hidden'; }
	
	var obj = document.getElementById(id);
	if (obj != null && obj.style != null)
	{
		resumen_calendario_activo=obj;
		obj.style.visibility='visible';
	}
}

function oculta_resumen_calendario(event,id)
{
	if (event == null) { event = window.event; }
	var obj = document.getElementById(id);
	if (obj != null)
	{
		var x = event.clientX;
		var y = event.clientY;
		
		var x0 = obj.offsetLeft - document.body.scrollLeft;
		var y0 = obj.offsetTop - document.body.scrollTop;
		var width = obj.clientWidth;
		var height = obj.clientHeight;		
	
		if ( x <= x0+2 || x >= x0+width || y <= y0+2 || y >= y0+height)
		{
		  obj.style.visibility='hidden';
		  resumen_calendario_activo=null;
		}
	}
}

function ocultaToolTip_formu(id)
{
	var obj = document.getElementById(id);
	if (obj != null)
	{
		obj.style.visibility='hidden';
	}
}

function muestraToolTip_formu(id)
{
	var x = event.x + document.body.scrollLeft + 5;
	var y = event.y + document.body.scrollTop + 5;
	
	var obj = document.getElementById(id);
	if (obj != null)
	{
		obj.style.left=x;
		obj.style.top=y;
		obj.style.visibility='visible';
	}
}

function quitar_div(tabla)
{
	var total_div=eval("total_div_"+tabla);
	eval('document.leyenda.ver_'+tabla+'.checked=false');
	if(total_div>0)
	{
		fer='hidden';
		if(eval('DivFill0_'+tabla+'.style.visibility') == 'hidden')
		{
			fer='visible';
			eval('document.leyenda.ver_'+tabla+'.checked=true');
		}
		else{eval('document.leyenda.ver_'+tabla+'.checked=false');}
		for(i=0;i<total_div;i++){eval('DivFill'+i+'_'+tabla+'.style.visibility = "'+fer+'"');}
	}

}
function canvi_url(query_string){document.location.href=query_string;}

function connect_chatroom(id,intro_nickname,error_nickname,conectando)
{	
	var b=false;
    var frm = document.getElementById("form_chat_"+id);
	if (frm == null) { return; }
	if (eval("document.chat"+id+"_active")) { return; }
	
	var nick = frm.nickname.value;
	if (nick != null && nick.length > 0)
	{ b=true; }
	else
	{
		var salir=false;
		while(!salir)
		{
			if (nick = prompt(intro_nickname))
			{ 
				if (nick.length < 20)
				{ frm.nickname.value=nick; b=true; salir=true; }
				else
				{
					alert(error_nickname);
				}
			}
			else
			{ salir=true; }
		}
	}
	if (b)
	{
		frm.message.value=conectando+'...';
		frm.action="/handlers/chat/login.html";
		frm.submit();
	}
}

function loginError(msg,id,nickname,descontecado,error_conexion)
{
	eval("document.chat"+id+"_active=false;");

    var frm = document.getElementById("form_chat_"+id);
	if (frm == null) { return; }

	frm.nickname.value=nickname;
	frm.message.value='-- '+desconectado+' --';
	alert(error_conexion+'\\n' + msg);
}

function loginOk(id)
{
    var frm = document.getElementById("form_chat_"+id);
	if (frm == null) { return; }
	
	eval("document.chat"+id+"_active=true;");

	frm.action="/handlers/chat/post.html";
	frm.message.disabled=false;
	frm.message.value='';
	frm.submit();
		
	var nickname=frm.nickname.value;
	
    var ifrm = document.getElementById("chatpost_"+id);
	if (ifrm != null)
	{ ifrm.src="/handlers/chat/post.html?id="+id; }

    ifrm = document.getElementById("chatdata_"+id);
	if (ifrm != null)
	{ ifrm.src="/handlers/chat/data.html?id="+id + "&nickname=" + nickname; }

	frm.message.focus();
}

function disconnect_chatroom(id,desconectado,nickname)
{
    var frm = document.getElementById("form_chat_"+id);
	if (frm == null) { return; }

	eval("document.chat"+id+"_active=false;");
	
	frm.message.value='-- '+desconectado+' --';
	frm.nickname.value=nickname;
	frm.message.disabled=true;
}

function go_private(username,id)
{
    var frm = document.getElementById("form_chat_"+id);
	if (frm == null) { return; }
	if (!eval("document.chat"+id+"_active")) { return; }
	
	var nickname = frm.nickname.value;
	var window_name = 'private_room_' + id + '_' + nickname + '_' + username
	
	var href = '/handlers/chat/private_room.html?id=' + id + '&nickname=' + frm.nickname.value + '&private_user=' + username;
	var w = window.open(href,window_name,'width=$pwidth,height=$pheight');
	
	w.focus();
}

var ajaxCaller = {

  shouldDebug: false,
  shouldEscapeVars: false,
  shouldMakeHeaderMap: true,

  calls : new Array(),
  pendingResponseCount : 0,

   /**************************************************************************
      PUBLIC METHODS
   *************************************************************************/

  getXML: function(url, callbackFunction) {
    this.get(url, null, callbackFunction, true, null);
  },

  getPlainText: function(url, callbackFunction) {
    this.get(url, null, callbackFunction, false, null);
  },

  postForPlainText: function(url, vars, callbackFunction, encodevars) {
    this.postVars(url, vars, null, callbackFunction, false, null, encodevars);
  },

  postForXML: function(url, vars, callbackFunction, encodevars) {
    this.postVars(url, vars, null, callbackFunction, true, null, encodevars);
  },

  get: function(url, urlVars, callbackFunction, expectingXML, callingContext) {
    this._callServer(url, urlVars, callbackFunction, expectingXML,
                    callingContext, "GET", null, null, null);
  },

  postVars:
    function(url, bodyVars, optionalURLVars, callbackFunction, expectingXML,
             callingContext, encodevars) {
             
		if (encodevars)
		{
			for (n in bodyVars) { bodyVars[n]=encodeURIComponent(bodyVars[n]); }
		}    
		this._callServer(url, optionalURLVars, callbackFunction, expectingXML,
                      callingContext, "POST", bodyVars, null, null);
  },

  postBody:
    function(url, optionalURLVars, callbackFunction, expectingXML,
             callingContext, bodyType, body) {
      this._callServer(url, optionalURLVars, callbackFunction, expectingXML,
                      callingContext, "POST", null, bodyType, body);
  },

  putBody:
    function(url, optionalURLVars, callbackFunction, expectingXML,
             callingContext, bodyType, body) {
      this._callServer(url, optionalURLVars, callbackFunction, expectingXML,
                      callingContext, "PUT", null, bodyType, body);
  },

  options:
    function(url, optionalURLVars, callbackFunction, expectingXML,
             callingContext, bodyType, body) {
      this._callServer(url, optionalURLVars, callbackFunction, expectingXML,
                      callingContext, "OPTIONS", null, bodyType, body);
  },

  trace:
    function(url, optionalURLVars, callbackFunction, expectingXML,
             callingContext, bodyType, body) {
      this._debug("trace");
      this._callServer(url, optionalURLVars, callbackFunction, expectingXML,
                      callingContext, "TRACE", null, bodyType, body);
  },

  deleteIt: function(url, urlVars, callbackFunction,
                     expectingXML, callingContext) {
    this._callServer(url, urlVars, callbackFunction, expectingXML,
                    callingContext, "DELETE", null, null, null);
  },

  head: function(url, urlVars, callbackFunction, expectingXML, callingContext)
  {
    this._callServer(url, urlVars, callbackFunction, expectingXML,
                    callingContext, "HEAD", null, null, null);
  },

  /**************************************************************************
     PRIVATE METHODS
  *************************************************************************/

  _callServer: function(url, urlVars, callbackFunction, expectingXML,
                       callingContext, requestMethod, bodyVars,
                       explicitBodyType, explicitBody) {

    this._debug("_callServer() called. About to request URL\n"
                + "call key: [" + this.calls.length + "]\n"
                + "url: [" + url + "]\n"
                + "callback function: [" + callbackFunction + "]\n"
                + "treat response as xml?: [" + expectingXML + "]\n"
                + "Request method?: [" + requestMethod + "]\n"
                + "calling context: [" + callingContext + "]\n"
                + "explicit body type: [" + explicitBodyType + "]\n"
                + "explicit body: [" + explicitBody + "]\n"
              );


    var xReq = this._createXMLHttpRequest();
    xReq.onreadystatechange = function() {
      if (document != null && ajaxCaller != null)
      { ajaxCaller._onResponseStateChange(call); }
    }

    var call = {xReq: xReq,
                callbackFunction: callbackFunction,
                expectingXML: expectingXML,
                callingContext: callingContext,
                url: url};

    if (urlVars!=null) {
      var urlVarsString = this._createHTTPVarSpec(urlVars);
      if (urlVarsString.length > 0) { // TODO check if appending with & instead
        url += "?" + urlVarsString;
      }
    }

    xReq.open(requestMethod, url, true);

    if (   requestMethod=="GET"
        || requestMethod=="HEAD"
        || requestMethod=="DELETE") {
      this._debug("Body-less request to URL " + url);
      xReq.send(null);
      return;
    }

    if (   requestMethod=="POST"
        || requestMethod=="PUT"
        || requestMethod=="OPTIONS"
        || requestMethod=="TRACE") {
      var bodyType = null;
      var body = null;
      if (explicitBodyType==null) { // It's a form
        bodyType = 'application/x-www-form-urlencoded; charset=UTF-8';
        body = this._createHTTPVarSpec(bodyVars);
      } else {
        bodyType = explicitBodyType;
        body = explicitBody;
      }
      this._debug("Content-Type: [" + bodyType + "]\nBody: [" + body + "].");
      xReq.setRequestHeader('Content-Type',  bodyType);
      xReq.send(body);
      return;
    }

    this._debug("ERROR: Unknown Request Method: " + requestMethod);


  },

  // The callback of xmlHttpRequest is a dynamically-generated function which
  // immediately calls this function.
  _onResponseStateChange: function(call) {

    var xReq = call.xReq;

    if (xReq.readyState < 4) { //Still waiting
      return;
    }

    if (xReq.readyState == 4) { //Transmit to actual callback
      this._debug("Call " 
                + " with context [" + call.callingContext+"]"
                + " to " + call.url + " has returned.");
      var callbackFunction = call.callbackFunction;
      if (!callbackFunction) { // Maybe still loading, e.g. in another JS file
        setTimeout(function() {
          _onResponseStateChange(call);
        }, 100);
      }
     
      var content = call.expectingXML ? xReq.responseXML : xReq.responseText;
      var responseHeaders = xReq.getAllResponseHeaders();
      var headersForCaller = this.shouldMakeHeaderMap ?
        this._createHeaderMap(responseHeaders) : responseHeaders;
      callbackFunction(content, headersForCaller, call.callingContext, xReq.status);
    }

    call = null; // Technically the responsibility of GC
    this.pendingResponseCount--;

  },

  // Browser-agnostic factory function
  _createXMLHttpRequest: function() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      return new ActiveXObject('Microsoft.XMLHTTP')
    } else {
      _error("Could not create XMLHttpRequest on this browser");
      return null;
    }
  },

  _createHTTPVarSpec: function(vars) {
      var varsString = "";
      for( key in vars ) {
        var value = vars[key];
        if(typeof(vars[key]) != 'function')
        {
        	if (this.shouldEscapeVars) {
        		var escapePlusRE =  new RegExp("\\\+");
        		value = value.replace(escapePlusRE, "%2B");
        	}
        	varsString += '&' + key + '=' + value;
        }
      }
      if (varsString.length > 0) {
        varsString = varsString.substring(1); // chomp initial '&'
      }
      this._debug("Built var String: " + varsString)
      return varsString;
   },

  /* Creates associative array from header type to header */
  _createHeaderMap: function(headersText) {
    var extractedHeaders = headersText.split("\n");
    delete extractedHeaders[extractedHeaders.length]; // Del blank line at end
    var headerMap = new Array();
    for (var i=0; i<extractedHeaders.length-2; i++) {
      var head = extractedHeaders[i];
      var fieldNameEnding = head.indexOf(":");
      var field = head.substring(0, fieldNameEnding);
      var value = head.substring(fieldNameEnding + 2, head.length);
      value = value.replace(/\s$/, "");
      headerMap[field] = value;
    }
    return headerMap;
  },

  _debug: function(message) {
      if (this.shouldDebug) {
        alert("AjaxJS Message:\n\n" + message);
      }
  },

  _error: function(message) {
      if (this.shouldDebug) {
        alert("AjaxJS ERROR:\n\n" + message);
      }
  }

};

var eBDSection = {

  calls : new Array(),
  
   /**************************************************************************
      PUBLIC METHODS
   *************************************************************************/

  show: function(url, callbackFunction)
  {
    var i = this.calls.length;
    this.calls[i] = callbackFunction;
    if (url.charAt(0) != '?') { url = '?' + url; }
    ajaxCaller.get('/_ajax/Section.show' + url, null, this._getResponse, true, i);
  },

  reload: function(id,params)
  {
	var callb = function(html) { eBDSection.setContent(id,html); }
	this.show(params,callb);
  },

  setContent: function(id,html)
  {
	var obj=document.getElementById('content_section_'+id);
	if (obj != null)
	{ this.setDOMContent(obj,html); }
  },

  setDOMContent: function(dom, html)
  {
    // set html content
    dom.innerHTML = html;

    // create an empty div
    var dummy = document.createElement('div');
    if (dummy.parentNode != null) { dummy.parentNode.removeChild(dummy); }

    // replace STYLE block by DIV's, to force browser create a childNodes
    var text = html.replace(/<style/gi,'<div class="custom-style-block"');
    text = text.replace(/<\/style>/gi,'</div>');

    // replace LINK block by HR's, to force browser create a childNodes
    text = text.replace(/<link/gi,'<hr class="custom-style-block"');
    //text = text.replace(/<\/style>/gi,'</div>');

    // add a "renderizable" node first, to make IE create ALL following script nodes 
    text = '<hr>' + text;
    
    // fill in the new div  
    dummy.innerHTML = text;

    var script = new Object();
    script.files = new Array();
    script.blocks = new Array();

    // process all created Nodes (recursive), looking for SCRIPT, STYLE and LINK
    for (var i=0, len=dummy.childNodes.length; i<len; i++) {
        var node = dummy.childNodes[i];
        if (node != null) { this._processChildNode(dom, node, script); }
    }
    
    // add all script files to the document head and eval all scripts blocks (after downloading all files) 
    this._processScripts(script);    
  },


  /**************************************************************************
     PRIVATE METHODS
  *************************************************************************/

  _getResponse: function(xml,headers,context)
  {
    if (xml != null)
    {
        var callback = eBDSection.calls[context];
        var html = xml.getElementsByTagName("body")[0].firstChild.nodeValue;
        if (callback != null)
        { callback(html); }
    }
  },

  _processChildNode: function(dom, node, script)
  {    
    if (node.tagName == 'DIV' && node.className == 'custom-style-block')
    {
        var content = node.innerHTML;
        if (content != null && content.length > 0)
        {
            // Create a new STYLE node inside the DOM node
            var ss = document.createElement('style');
            ss.setAttribute("type", "text/css");
            if (ss.styleSheet)
            { ss.styleSheet.cssText = content; } // IE only
            else
            { var tt = document.createTextNode(content); ss.appendChild(tt); } // the world
            dom.appendChild(ss);
        }
    }
    else if (node.tagName == 'HR' && node.className == 'custom-style-block' && node.rel == 'stylesheet')
    { 
        if (node.href != null)
        {
            // Create a new LINK node inside the DOM node
            var ss = document.createElement('link');
            ss.setAttribute("rel", "stylesheet");
            ss.href = node.href;
            dom.appendChild(ss);
        }
    }
    else if (node.tagName == 'SCRIPT')
    {
        if (node.src != null && node.src.length > 0)
        { script.files.push(node.src); }            // We will load this SCRIPT file later
        else
        { script.blocks.push(node.innerHTML); }     // We will evaluate this SCRIPT block later
    }
    else
    {
        // Process all child nodes in OTHER cases
        for (var i=0, len=node.childNodes.length; i<len; i++)
        {
            var child = node.childNodes[i];
            if (child != null)
            { this._processChildNode(dom, child, script); }
        }
    }
  },
  
  
  _processScripts: function(script)
  {
    var loading=false;
    while (!loading && script.files.length > 0)
    {
        var src = script.files.shift();
        if (!this._scriptLoaded(src))
        {
            loading=true;
            
            var head = document.getElementsByTagName("head")[0];
            var node = document.createElement("script");
            node.src = src;
    
            // Attach handlers for all browsers
            var done = false;
            node.onload = node.onreadystatechange = function() {
                if ( !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") )
                {
                    done = true;
                    // Handle memory leak in IE
                    node.onload = node.onreadystatechange = null;
                    eBDSection._processScripts(script);
                }
            };

            head.appendChild(node);
        }
    }
    
    if (!loading)
    {
        // All script files have been loaded. Now we evaluate all script blocks
        while (script.blocks.length > 0)
        {
            var code = script.blocks.shift();
            code = code.replace(/<!--/,'// <!--');
            
            if (window.execScript)
            { window.execScript(code); }  //ie  
            else
            { window.eval(code); }   //others                    
        }
    }
  },
  
  _scriptLoaded: function(src)
  {
    var loaded=false;
    var head = document.getElementsByTagName("head")[0];
    
    for (var i=0, len=head.childNodes.length; i<len && !loaded; i++)
    {
        var child = head.childNodes[i];
        if (child != null && child.tagName == 'SCRIPT')
        {
            if (child.src != null && child.src == src)
            { loaded=true; }
        }
    }
    return loaded;
  }

};


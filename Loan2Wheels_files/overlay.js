var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

google.maps.__gjsload__('overlay', function(_){var Is=function(a){this.h=a},Rka=function(){},Js=function(a){a.Zn=a.Zn||new Rka;return a.Zn},Ska=function(a){this.La=new _.ci(function(){var b=a.Zn;if(a.getPanes()){if(a.getProjection()){if(!b.bn&&a.onAdd)a.onAdd();b.bn=!0;a.draw()}}else{if(b.bn)if(a.onRemove)a.onRemove();else a.remove();b.bn=!1}},0)},Tka=function(a,b){function c(){return _.di(e.La)}var d=Js(a),e=d.Sl;e||(e=d.Sl=new Ska(a));_.cb(d.Wa||[],_.E.removeListener);var f=d.Va=d.Va||new _.jr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Cr=d.Cr||new Is(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Wa=[_.E.addListener(a,"panes_changed",c),_.E.addListener(g,"zoom_changed",c),_.E.addListener(g,"offset_changed",c),_.E.addListener(b,"projection_changed",c),_.E.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.jf&&_.fg(b,"Ox")},Xka=function(a){if(a){var b=a.getMap();if(Uka(a)!==b&&b&&b instanceof _.jf){var c=b.__gm;c.overlayLayer?a.__gmop=new Vka(b,a,c.overlayLayer):c.j.then(function(d){d=d.Xa;var e=new Ks(b,d);d.ib(e);c.overlayLayer=e;Wka(a);Xka(a)})}}},Wka=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.l.Rf(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},Uka=function(a){return(a=a.__gmop)?a.map:null},Vka=function(a,
b,c){this.map=a;this.h=b;this.l=c;this.j=!1;_.fg(this.map,"Ox");c.vf(this)},Yka=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},Ks=function(a,b){this.m=a;this.l=b;this.h=null;this.j=[]};_.B(Is,_.F);Is.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Zd(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var Ls={};_.B(Ska,_.F);Ls.vf=function(a){if(a){var b=a.getMap();(Js(a).er||null)!==b&&(b&&Tka(a,b),Js(a).er=b)}};Ls.Rf=function(a){var b=Js(a),c=b.Va;c&&c.unbindAll();(c=b.Cr)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Wa&&_.cb(b.Wa,_.E.removeListener);b.Wa=null;b.Sl&&(b.Sl.La.Gd(),b.Sl=null);delete Js(a).er};var Ms={};Vka.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};Ks.prototype.dispose=function(){};Ks.prototype.yc=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.ln(this.m,this.l,function(){});k.yc(a,b,c,d,e,f,g,h);a=_.x(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,Yka(b,k),b.draw()};Ks.prototype.vf=function(a){this.j.push(a);this.h&&Yka(a,this.h);this.l.refresh()};Ks.prototype.Rf=function(a){_.nb(this.j,a)};Ms.vf=Xka;Ms.Rf=Wka;_.Te("overlay",{lp:function(a){if(a){(0,Ls.Rf)(a);(0,Ms.Rf)(a);var b=a.getMap();b&&(b instanceof _.jf?(0,Ms.vf)(a):(0,Ls.vf)(a))}},preventMapHitsFrom:function(a){_.Pn(a,{onClick:function(b){return _.un(b.event)},ud:function(b){return _.rn(b)},zh:function(b){return _.sn(b)},Td:function(b){return _.sn(b)},Bd:function(b){return _.tn(b)}}).wi(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Xe);a.addEventListener("contextmenu",_.Xe);a.addEventListener("dblclick",_.Xe);a.addEventListener("mousedown",
_.Xe);a.addEventListener("mousemove",_.Xe);a.addEventListener("MSPointerDown",_.Xe);a.addEventListener("pointerdown",_.Xe);a.addEventListener("touchstart",_.Xe);a.addEventListener("wheel",_.Xe)}});});


}
/*
     FILE ARCHIVED ON 07:25:28 Mar 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:53:35 Feb 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.066
  cdx.remote: 0.114
  esindex: 0.015
  LoadShardBlock: 177.583 (6)
  PetaboxLoader3.datanode: 212.355 (8)
  load_resource: 459.026 (2)
  PetaboxLoader3.resolve: 351.152 (2)
*/
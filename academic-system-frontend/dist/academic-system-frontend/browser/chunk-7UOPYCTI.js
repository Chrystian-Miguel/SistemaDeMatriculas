import{a as ne,b as $e,c as qe,f as Ke,g as Ge,i as Xe,j as Ye}from"./chunk-32XNBPSG.js";import{Aa as J,Ba as g,Ca as y,Cb as We,Da as me,F as I,Ja as h,L as P,M as $,Na as ee,O as a,Oa as te,Pa as O,Qa as he,Ra as pe,Rb as Ve,S as fe,Sa as b,Sb as Qe,T as Ne,Ta as S,U as Ae,V as Pe,W as Be,Xa as ze,Ya as U,Yb as re,Za as W,_a as He,aa as Y,ba as k,ca as T,fa as C,g as A,h as Me,ha as q,hb as v,ia as E,j as Fe,k as Ee,ma as B,mb as Le,n as ue,oa as M,p as Oe,pa as z,pb as je,qa as d,r as X,sa as m,sb as Ue,ta as Z,tb as V,ub as F,uc as Ze,vb as ie,w as Ie,xa as H,ya as L,za as j}from"./chunk-NKIWEW56.js";var ut=[[["caption"]],[["colgroup"],["col"]],"*"],ft=["caption","colgroup, col","*"];function mt(i,s){i&1&&O(0,2)}function ht(i,s){i&1&&(g(0,"thead",0),h(1,1),y(),g(2,"tbody",0),h(3,2)(4,3),y(),g(5,"tfoot",0),h(6,4),y())}function pt(i,s){i&1&&h(0,1)(1,2)(2,3)(3,4)}var x=new $("CDK_TABLE");var ae=(()=>{class i{template=a(E);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),le=(()=>{class i{template=a(E);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),it=(()=>{class i{template=a(E);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),Q=(()=>{class i{_table=a(x,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,r){if(t&1&&he(r,ae,5)(r,le,5)(r,it,5),t&2){let o;b(o=S())&&(n.cell=o.first),b(o=S())&&(n.headerCell=o.first),b(o=S())&&(n.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",F],stickyEnd:[2,"stickyEnd","stickyEnd",F]}})}return i})(),se=class{constructor(s,e){e.nativeElement.classList.add(...s._columnCssClassName)}},nt=(()=>{class i extends se{constructor(){super(a(Q),a(T))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[m]})}return i})();var rt=(()=>{class i extends se{constructor(){let e=a(Q),t=a(T);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[m]})}return i})();var ge=(()=>{class i{template=a(E);_differs=a(V);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof G?e.headerCell.template:this instanceof ye?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,features:[Y]})}return i})(),G=(()=>{class i extends ge{_table=a(x,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(a(E),a(V))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",F]},features:[m,Y]})}return i})(),ye=(()=>{class i extends ge{_table=a(x,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(a(E),a(V))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",F]},features:[m,Y]})}return i})(),ce=(()=>{class i extends ge{_table=a(x,{optional:!0});when;constructor(){super(a(E),a(V))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[m]})}return i})(),N=(()=>{class i{_viewContainer=a(B);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),we=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&h(0,0)},dependencies:[N],encapsulation:2})}return i})();var Ce=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&h(0,0)},dependencies:[N],encapsulation:2})}return i})(),de=(()=>{class i{templateRef=a(E);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),Je=["top","bottom","left","right"],_e=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(s=>this._updateCachedSizes(s)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(s,e,t=!0,n=!0,r,o,l){this._isNativeHtmlTable=s,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=r,this._positionListener=o,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(s,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(s);let t=[];for(let n of s)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));q({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(s,e,t,n=!0,r=!0){if(!s.length||!this._isBrowser||!(e.some(R=>R)||t.some(R=>R))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=s[0],l=o.children.length,c=this.direction==="rtl",u=c?"right":"left",f=c?"left":"right",D=e.lastIndexOf(!0),p=t.indexOf(!0),_,Se,xe;r&&this._updateStickyColumnReplayQueue({rows:[...s],stickyStartStates:[...e],stickyEndStates:[...t]}),q({earlyRead:()=>{_=this._getCellWidths(o,n),Se=this._getStickyStartColumnPositions(_,e),xe=this._getStickyEndColumnPositions(_,t)},write:()=>{for(let R of s)for(let w=0;w<l;w++){let Te=R.children[w];e[w]&&this._addStickyStyle(Te,u,Se[w],w===D),t[w]&&this._addStickyStyle(Te,f,xe[w],w===p)}this._positionListener&&_.some(R=>!!R)&&(this._positionListener.stickyColumnsUpdated({sizes:D===-1?[]:_.slice(0,D+1).map((R,w)=>e[w]?R:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:_.slice(p).map((R,w)=>t[w+p]?R:null).reverse()}))}},{injector:this._tableInjector})}stickRows(s,e,t){if(!this._isBrowser)return;let n=t==="bottom"?s.slice().reverse():s,r=t==="bottom"?e.slice().reverse():e,o=[],l=[],c=[];q({earlyRead:()=>{for(let u=0,f=0;u<n.length;u++){if(!r[u])continue;o[u]=f;let D=n[u];c[u]=this._isNativeHtmlTable?Array.from(D.children):[D];let p=this._retrieveElementSize(D).height;f+=p,l[u]=p}},write:()=>{let u=r.lastIndexOf(!0);for(let f=0;f<n.length;f++){if(!r[f])continue;let D=o[f],p=f===u;for(let _ of c[f])this._addStickyStyle(_,t,D,p)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:o,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:o,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(s,e){this._isNativeHtmlTable&&q({write:()=>{let t=s.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(s,e){if(!s.classList.contains(this._stickCellCss))return;for(let n of e)s.style[n]="",s.classList.remove(this._borderCellCss[n]);Je.some(n=>e.indexOf(n)===-1&&s.style[n])?s.style.zIndex=this._getCalculatedZIndex(s):(s.style.zIndex="",this._needsPositionStickyOnElement&&(s.style.position=""),s.classList.remove(this._stickCellCss))}_addStickyStyle(s,e,t,n){s.classList.add(this._stickCellCss),n&&s.classList.add(this._borderCellCss[e]),s.style[e]=`${t}px`,s.style.zIndex=this._getCalculatedZIndex(s),this._needsPositionStickyOnElement&&(s.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(s){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of Je)s.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(s,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=s.children;for(let r=0;r<n.length;r++){let o=n[r];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(s,e){let t=[],n=0;for(let r=0;r<s.length;r++)e[r]&&(t[r]=n,n+=s[r]);return t}_getStickyEndColumnPositions(s,e){let t=[],n=0;for(let r=s.length;r>0;r--)e[r]&&(t[r]=n,n+=s[r]);return t}_retrieveElementSize(s){let e=this._elemSizeCache.get(s);if(e)return e;let t=s.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(s,n),this._resizeObserver.observe(s,{box:"border-box"})),n}_updateStickyColumnReplayQueue(s){this._removeFromStickyColumnReplayQueue(s.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(s)}_removeFromStickyColumnReplayQueue(s){let e=new Set(s);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(s){let e=!1;for(let t of s){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&_t(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function _t(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(s=>i.classList.contains(s))}var K=new $("STICKY_POSITIONING_LISTENER");var De=(()=>{class i{viewContainer=a(B);elementRef=a(T);constructor(){let e=a(x);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","rowOutlet",""]]})}return i})(),ve=(()=>{class i{viewContainer=a(B);elementRef=a(T);constructor(){let e=a(x);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),Re=(()=>{class i{viewContainer=a(B);elementRef=a(T);constructor(){let e=a(x);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),ke=(()=>{class i{viewContainer=a(B);elementRef=a(T);constructor(){let e=a(x);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),be=(()=>{class i{_differs=a(V);_changeDetectorRef=a(Ue);_elementRef=a(T);_dir=a(Ve,{optional:!0});_platform=a(Qe);_viewRepeater;_viewportRuler=a(Ke);_injector=a(Ae);_virtualScrollViewport=a(Ge,{optional:!0,host:!0});_positionListener=a(K,{optional:!0})||a(K,{optional:!0,skipSelf:!0});_document=a(Pe);_data;_renderedRange;_onDestroy=new A;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new A;_footerRowStickyUpdates=new A;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new A;_dataStream=new A;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Be;viewChange=new Me({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){a(new je("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(I(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new qe:new Ye,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),ne(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,r,o)=>this._getEmbeddedViewArgs(n.item,o),n=>n.item.data,n=>{n.operation===$e.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let r=t.get(n.currentIndex);r.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=et(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=et(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,o)=>{this._addStickyColumnStyles([r],this._headerRowDefs[o])}),this._rowDefs.forEach(r=>{let o=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&o.push(t[l]);this._addStickyColumnStyles(o,r)}),n.forEach((r,o)=>{this._addStickyColumnStyles([r],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let o=this._data[r],l=this._getRenderRowsForData(o,r,n.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let c=0;c<l.length;c++){let u=l[c],f=this._cachedRenderRowsMap.get(u.data);f.has(u.rowDef)?f.get(u.rowDef).push(u):f.set(u.rowDef,[u]),e.push(u)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(o=>{let l=n&&n.has(o)?n.get(o):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),oe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=oe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=oe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=oe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,l)=>{let c=!!l.getColumnsDiff();return o||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||n||r}_switchDataSource(e){this._data=[],ne(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;ne(this.dataSource)?e=this.dataSource.connect(this):Oe(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=ue(this.dataSource)),this._renderChangeSubscription=X([e,this.viewChange]).pipe(I(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),r=n.map(l=>l.sticky),o=n.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let r=e.viewContainer.get(n);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;r&&n.push(r)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,r={$implicit:e.data};return{templateRef:n.template,context:r,index:t}}_renderRow(e,t,n,r={}){let o=e.viewContainer.createEmbeddedView(t.template,r,n);return this._renderCellTemplateForItem(t,r),o}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))N.mostRecentCellOutlet&&N.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let o=e.get(t).context;o.count=n,o.first=t===0,o.last=t===n-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new _e(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:ue()).pipe(I(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Ee:Fe;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ie(0,t),I(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,r)=>this._measureRangeSize(n,r)}),X([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(I(this._onDestroy)).subscribe(([n,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let l=r.elements[o];if(l){let c=r.offsets[o],u=n!==0?Math.max(n-c,c):-c;for(let f of l)f.style.top=`${-u}px`}}}),X([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(I(this._onDestroy)).subscribe(([n,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let l=r.elements[o];if(l)for(let c of l)c.style.bottom=`${n+r.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let r=n.createEmbeddedView(e.templateRef),o=r.rootNodes[0];if(r.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let l=o.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let n=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let o=e.start-n.start,l=e.end-e.start,c,u;for(let p=0;p<l;p++){let _=r.get(p+o);if(_&&_.rootNodes.length){c=u=_.rootNodes[0];break}}for(let p=l-1;p>-1;p--){let _=r.get(p+o);if(_&&_.rootNodes.length){u=_.rootNodes[_.rootNodes.length-1];break}}let f=c?.getBoundingClientRect?.(),D=u?.getBoundingClientRect?.();return f&&D?D.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,r){if(t&1&&he(r,de,5)(r,Q,5)(r,ce,5)(r,G,5)(r,ye,5),t&2){let o;b(o=S())&&(n._noDataRow=o.first),b(o=S())&&(n._contentColumnDefs=o),b(o=S())&&(n._contentRowDefs=o),b(o=S())&&(n._contentHeaderRowDefs=o),b(o=S())&&(n._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){t&2&&W("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",F],fixedLayout:[2,"fixedLayout","fixedLayout",F],recycleRows:[2,"recycleRows","recycleRows",F]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[v([{provide:x,useExisting:i},{provide:K,useValue:null}])],ngContentSelectors:ft,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(te(ut),O(0),O(1,1),L(2,mt,1,0),L(3,ht,7,0)(4,pt,4,0)),t&2&&(C(2),j(n._isServer?2:-1),C(),j(n._isNativeHtmlTable?3:4))},dependencies:[ve,De,ke,Re],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function oe(i,s){return i.concat(Array.from(s))}function et(i,s){let e=s.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n==="TABLE")break;t=t.parentNode}return null}var ot=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=P({imports:[Xe]})}return i})();var gt=[[["caption"]],[["colgroup"],["col"]],"*"],yt=["caption","colgroup, col","*"];function wt(i,s){i&1&&O(0,2)}function Ct(i,s){i&1&&(g(0,"thead",0),h(1,1),y(),g(2,"tbody",2),h(3,3)(4,4),y(),g(5,"tfoot",0),h(6,5),y())}function Dt(i,s){i&1&&h(0,1)(1,3)(2,4)(3,5)}var ri=(()=>{class i extends be{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,n){t&2&&W("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[v([{provide:be,useExisting:i},{provide:x,useExisting:i},{provide:K,useValue:null}]),m],ngContentSelectors:yt,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(te(gt),O(0),O(1,1),L(2,wt,1,0),L(3,Ct,7,0)(4,Dt,4,0)),t&2&&(C(2),j(n._isServer?2:-1),C(),j(n._isNativeHtmlTable?3:4))},dependencies:[ve,De,ke,Re],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),oi=(()=>{class i extends ae{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["","matCellDef",""]],features:[v([{provide:ae,useExisting:i}]),m]})}return i})(),si=(()=>{class i extends le{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["","matHeaderCellDef",""]],features:[v([{provide:le,useExisting:i}]),m]})}return i})();var ai=(()=>{class i extends Q{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[v([{provide:Q,useExisting:i}]),m]})}return i})(),li=(()=>{class i extends nt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[m]})}return i})();var ci=(()=>{class i extends rt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[m]})}return i})();var di=(()=>{class i extends G{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",F]},features:[v([{provide:G,useExisting:i}]),m]})}return i})();var ui=(()=>{class i extends ce{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275dir=d({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[v([{provide:ce,useExisting:i}]),m]})}return i})(),fi=(()=>{class i extends we{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[v([{provide:we,useExisting:i}]),m],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&h(0,0)},dependencies:[N],encapsulation:2})}return i})();var mi=(()=>{class i extends Ce{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[v([{provide:Ce,useExisting:i}]),m],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&h(0,0)},dependencies:[N],encapsulation:2})}return i})(),hi=(()=>{class i extends de{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["ng-template","matNoDataRow",""]],features:[v([{provide:de,useExisting:i}]),m]})}return i})();var pi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=P({imports:[ot,re]})}return i})();var vt=["determinateSpinner"];function Rt(i,s){if(i&1&&(fe(),g(0,"svg",11),me(1,"circle",12),y()),i&2){let e=ee();H("viewBox",e._viewBox()),C(),U("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),H("r",e._circleRadius())}}var kt=new $("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:st})}),st=100,bt=10,xi=(()=>{class i{_elementRef=a(T);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=a(kt),t=Ze(),n=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=st;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-bt)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,n){if(t&1&&pe(vt,5),t&2){let r;b(r=S())&&(n._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,n){t&2&&(H("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),He("mat-"+n.color),U("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),W("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",ie],diameter:[2,"diameter","diameter",ie],strokeWidth:[2,"strokeWidth","strokeWidth",ie]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,n){if(t&1&&(Z(0,Rt,2,8,"ng-template",null,0,Le),g(2,"div",2,1),fe(),g(4,"svg",3),me(5,"circle",4),y()(),Ne(),g(6,"div",5)(7,"div",6)(8,"div",7),h(9,8),y(),g(10,"div",9),h(11,8),y(),g(12,"div",10),h(13,8),y()()()),t&2){let r=ze(1);C(4),H("viewBox",n._viewBox()),C(),U("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),H("r",n._circleRadius()),C(4),J("ngTemplateOutlet",r),C(2),J("ngTemplateOutlet",r),C(2),J("ngTemplateOutlet",r)}},dependencies:[We],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ti=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=P({imports:[re]})}return i})();export{ri as a,oi as b,si as c,ai as d,li as e,ci as f,di as g,ui as h,fi as i,mi as j,hi as k,pi as l,xi as m,Ti as n};

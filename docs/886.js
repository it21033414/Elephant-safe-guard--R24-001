"use strict";(self.webpackChunktestApp=self.webpackChunktestApp||[]).push([[886],{7886:(C,i,t)=>{t.r(i),t.d(i,{AuthenticationModule:()=>A});var s=t(6075),h=t(6610),v=t(6182),d=t(643),u=t(4587),m=t(3422),g=t(2221),r=t(7222),f=t(7153),p=t(2932),a=t(2978),c=t(5272),S=t(8478);const y=[{path:"",children:[{path:"login",component:(()=>{class n{constructor(e,o,l){this._Router=e,this._JwtService=o,this._LocalStorageHandleService=l}ngOnInit(){this._Router.navigateByUrl("/dashboard"),this._JwtService.saveToken("11111"),this._LocalStorageHandleService.saveItem({name:"user_id",value:"111111"}),this._Router.navigateByUrl("/dashboard")}static{this.\u0275fac=function(o){return new(o||n)(a.rXU(s.Ix),a.rXU(c.b),a.rXU(S.C))}}static{this.\u0275cmp=a.VBU({type:n,selectors:[["app-login"]],decls:1,vars:0,template:function(o,l){1&o&&a.EFF(0,"loading..\n")},styles:[".logo[_ngcontent-%COMP%]{max-width:21rem}@media (max-width: 576px){.logo[_ngcontent-%COMP%]{max-width:14rem}}"]})}}return n})(),canActivate:[(()=>{class n{constructor(e,o){this.router=e,this._JwtService=o}canActivate(e,o){return!this._JwtService.getToken()||(this.router.navigateByUrl("/dashboard"),!1)}static{this.\u0275fac=function(o){return new(o||n)(a.KVO(s.Ix),a.KVO(c.b))}}static{this.\u0275prov=a.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()]}]}];let A=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=a.$C({type:n})}static{this.\u0275inj=a.G2t({imports:[h.MD,s.iI.forChild(y),v.m_,d.Hu,u.fS,m.g7,g.Hl,r.YN,r.X1,f.X4.pick(p)]})}}return n})()}}]);
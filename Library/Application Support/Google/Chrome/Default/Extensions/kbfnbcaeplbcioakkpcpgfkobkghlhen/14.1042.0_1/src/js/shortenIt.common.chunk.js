(self.webpackChunk=self.webpackChunk||[]).push([[7272],{51972:(e,t,i)=>{i.d(t,{O:()=>Z});var s=i(57050),r=i(35214),a=i(40327),n=i(54483),o=i(31820),d=i(35108),l=i(77176),u=i(40151),c=i(2834),m=i(55415),p=i(22232),h=i(5114),v=i(94435),S=i(27378),f=i(30763),g=i(7046),A=i(21474),y=i(3656),I=i(28706),C=i(26027),b=i(15646),w=i(74754),R=i(66346),k=i(76974),_=i(5739),q=i(16314),E=i(35501),F=i(35630),T=i(32585);const x=v.UI.Node.make((({state:e,notify:t})=>{const i=S.useContext(f.m.Context);return S.createElement(_.F.Fragment,null,e.pipe(l.U((e=>(0,s.zG)(e.details,h.fold((()=>S.createElement("div",null)),(()=>S.createElement(g.zx.Tertiary,{key:"toggle-more",name:(0,R.hC)(e.visualState,i),title:(0,R.hC)(e.visualState,i),onClick:I.hz(t({type:b.eI.Kind.startTransitionTo,id:e.id,transition:{type:C.X.isCardOpen(e.visualState)?"focused":"expanded",clockwise:!0}}))},C.X.isCardOpen(e.visualState)?S.createElement(A.JO.Arrow,{key:"more",className:T.lessIcon}):S.createElement(A.JO.QuestionMark,{key:"expand"}),(0,R.hC)(e.visualState,i)))))))))})),U=v.UI.Node.make((({notify:e})=>S.createElement(g.zx.Tertiary,{name:"dismiss",title:"Dismiss",onClick:I.hz(e({type:q.Dy.ignoreButtonClick}))},S.createElement(A.JO.Ignore,null)))),O=v.UI.Node.make((({state:e})=>S.createElement(_.F.Fragment,null,e.pipe(l.U((e=>(0,s.zG)(e.details,h.fold(s.gn,(t=>S.createElement(R.G3,{key:"card-actions-details",visualState:e.visualState,className:T.more},S.createElement(y.XY,{className:T.minimalDescription,...w.y.renderToHtml(t)}))))))))))),z=v.UI.Node.make((({notify:e})=>S.createElement(g.zx.Flat,{className:T.feedbackFooter,name:"attention-score-card-open-feedback-form",onClick:I.hz(e({type:q.Dy.feedbackButtonClick}))},S.createElement("span",null,"Anything we can improve?"),S.createElement(A.JO.OpenFeedbackFormArrow,null)))),B=v.UI.Node.make((({state:e,notify:t})=>S.createElement(_.F.Fragment,null,e.pipe(l.U((e=>S.createElement(g.zx.Primary,{name:"readersAttentionItem-view-more",onClick:I.hz(t({type:q.Dy.viewMoreButtonClick,item:e})),className:T.viewMoreButton},"See suggestions"))))))),N=v.UI.Knot.make(v.UI.Grid.make((({slots:e})=>S.createElement(_.F.div,{className:F.card,"data-name":"attention-score-card-full"},e.header,S.createElement(_.F.div,{className:T.cardBody},e.content,e.details,S.createElement("div",{className:T.actions},e.viewMoreButton)),S.createElement(_.F.div,{className:T.actionsFooter},e.expandButton,e.dismissButton),e.feedbackFooter))),{header:(0,E.h)("full"),content:E.r,details:O,expandButton:x,dismissButton:U,viewMoreButton:B,feedbackFooter:z}),G=e=>v.Z.composeKnot({header:()=>e,content:()=>e.pipe(l.U((e=>({attentionScore:e.attentionScore,description:e.description})))),details:()=>e,expandButton:()=>e,dismissButton:()=>k.of(null),viewMoreButton:v.Z.fromSideEffect(s.Q1,e),feedbackFooter:()=>k.of(null)});var D=i(12187),P=i(65060),M=i(11510);const Q=v.UI.Knot.make(v.UI.Grid.make((({slots:e,notify:t})=>S.createElement(_.F.div,{"data-name":"attention-score-card-mini",onClick:I.hz(t({type:q.Dy.miniCardClick,id:P.g.id})),...(0,D.Sh)(F.card,M.miniCard)},e.header))),{header:(0,E.h)("mini")}),X=e=>v.Z.composeKnot({root:v.Z.fromSideEffect(s.Q1,null),header:()=>e});var H;!function(e){const t=v.UI.Union.make("kind",{mini:Q,full:N,hidden:v.UI.Node.empty}),i=e=>({mini:X(e.pipe(l.U((e=>({title:e.view.title,attentionScore:e.view.attentionScore,density:e.density}))))),full:G(e.pipe(l.U(m.ei("view")))),hidden:()=>u.E}),r=n.G.make(t);function a(e){switch(e){case"added":case"rendered":return"mini";case"focused":case"expanded":return"full";case"hidden":case"removed":return"hidden";case"presuccess":case"success":case"feedback_form":case"muted":throw new Error(`${e} is not supported for ReadersAttentionCard`);default:(0,p.vE)(e)}}e.Card=v.UI.Node.make((({state:e,notify:t})=>v.UI.mount(r,(0,s.zG)(o.g.flow(e.pipe(l.U(m.ei("view"))),(0,s.zG)((e=>v.Z.composeUnion(i(e),(()=>e.pipe(l.U((e=>({kind:a(e.view.visualState.transition.type)})))))))(e),v.Z.extendActions(c.b((e=>t(e.action.action)())))),(e=>v.Z.composeUnion(i(e),(()=>e.pipe(l.U((e=>({kind:(0,s.zG)(e.view.visualState.from,h.fold((()=>"mini"),a))})))))))(e),m.ei("id"),d.CE.toOption(d.a)),o.g.extend((e=>t(e)()))))))}(H||(H={}));var W=i(48521),L=i(16892);const V=e=>t=>({...t,positionState:e}),j=e=>t=>({...t,visualState:e});var Z,K=i(66896),Y=i(52741),$=i(7910),J=i(49978),ee=i(84974),te=i(98752),ie=i(17594),se=i(91549),re=i(20594),ae=i(86775),ne=i(77610),oe=i(15215),de=i(70100),le=i(47306),ue=i(35416),ce=i(25975),me=i(8125),pe=i(83078),he=i(73975),ve=i(45701),Se=i(31881);!function(e){function t(e,t,i,s,r){return ue.nL.Items.mapper((e=>e.kind),{[C.X.Kind]:e,[se.R.Kind]:t,[de.X.kind]:i,[le.J.kind]:s,[P.g.kind]:r})}function i(e){return e.kind===C.X.Kind}function n(e){return e.kind===se.R.Kind}function o(e){return i(e)&&ne.C.isEthicalAIItem(e)}function d(e){return n(e)&&ne.C.isEthicalAIItem(e)}function l(e,i){return{viewState:(s,r)=>t((t=>({view:t,isLastCard:s,kind:"alertCard",visibleViewportHeight:e(r)})),(t=>({view:t,isLastCard:s,kind:"alertsBundle",visibleViewportHeight:e(r)})),(e=>({view:e,kind:"checklistItemEmpty"})),(t=>({view:t,kind:"checklistItemWithAlerts",isLastCard:s,visibleViewportHeight:e(r)})),(e=>({density:i()===K.R.SpecialId.AllAlerts?"normal":"compact",view:e,kind:"readersAttentionItem"})))}}e.isSelectableWithAlertItem=(0,me.Kg)(i,n,oe.d.isChecklistItemWithAlerts),e.getActiveItemWithAlert=ue.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.getActiveAlignableItem=ue.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.getActiveFocusableItem=ue.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.checksFeedItemsMapper=t,e.isAlertCard=i,e.isAlertsBundle=n,e.isEthicalAIAlertCard=o,e.isEthicalAIAlertsBundle=d,e.defaultOrd=(0,r.fold)(ve.getMonoid())([(0,a.pipe)(ve.ordBoolean,ve.contramap((0,me.ff)(o))),(0,a.pipe)(ve.ordBoolean,ve.contramap(P.m)),ve.fromCompare(((e,t)=>i(e)&&i(t)?C.X.ord.compare(e,t):0))]),e.bundlesOrd=(0,r.fold)(ve.getMonoid())([(0,a.pipe)(ve.ordBoolean,ve.contramap((0,me.ff)(d))),(0,a.pipe)(ve.ordBoolean,ve.contramap(P.m)),ve.fromCompare(((e,t)=>n(e)&&n(t)?se.R.ord.compare(e,t):0))]),e.item=e=>Se.UI.Union.make("kind",{alertCard:Y.p.Card(e),alertsBundle:J.Q.Card(e),checklistItemEmpty:ee.z.Card(e),checklistItemWithAlerts:te.fw.Card(e),readersAttentionItem:H.Card}),e.viewState=l,e.createCardListFlow=e=>(0,$.sJ)((t=>(0,a.pipe)(e,pe.bw((e=>e.actions.next(t.action)))))),e.listItemOrd=e=>ve.contramap((e=>e.cell.item.view))(e).compare;const u={equals:(e,t)=>e.kind===t.kind&&L.s.eqById.equals(e,t)},c=(e,t,i,s,r)=>({equals:(a,n)=>{const o={[C.X.Kind]:e,[se.R.Kind]:t,[de.X.kind]:i,[le.J.kind]:s,[P.g.kind]:r};return u.equals(a,n)&&function(e,t){return(i,s)=>t[e(i)].equals(i,s)}((e=>e.kind),o)(a,n)}}),m=(0,r.fold)(he.uZ())([W.o.eq,L.s.verticalPositionEq,u]);function p(e,i){const s=C.X.Capabilities.getChangePosition(e);return{changePosition:e=>t(s.changePosition(e),se.R.changePosition(e),de.X.changePositionState(e),i.changePositionState(e),V(e))}}function v(e,i,s){const r=C.X.Capabilities.getAnimatable(e),a=se.R.Capabilities.getAnimatable(s);return{completeTransition:e=>{return t(r.completeTransition(e),a.completeTransition(e),de.X.completeTransition(e),i.completeTransition(e),(s=e,e=>({...e,visualState:W.o.VisualState.complete(e.visualState,s)})));var s},transitionTo:e=>t(r.transitionTo(e),a.transitionTo(e),de.X.transitionTo(e),i.transitionTo(e),(e=>t=>({...t,visualState:W.o.VisualState.to(t.visualState,e)}))(e)),changeVisualState:e=>t(r.changeVisualState(e),a.changeVisualState(e),de.X.changeVisualState(e),i.changeVisualState(e),j(e))}}function S(e,i,r,n,o){const d=se.R.getCardHydrator(o),l=se.R.getSelect(r,n,d),u=se.R.getSelectByAlert(r,n,d),c=C.X.Capabilities.getSelect(e);return{select:(e,r,n)=>t(c.select(e,r,n),l(e,r),de.X.select(e),i.selectFirstAlert((0,s.MZ)(e),r),function(e,t){return i=>{const r=(0,a.pipe)(e,h.map((e=>t.compare(i,e)>0)),h.getOrElse(s.W8)),n=(0,a.pipe)(e,h.exists((e=>e.id===i.id))),o=n&&C.X.isCardOpen(i.visualState)?"expanded":"focused",d=(0,a.pipe)(e,h.fold((()=>W.o.VisualState.initial({type:o,clockwise:r})),(e=>W.o.VisualState.to(i.visualState,{type:o,clockwise:r}))));return(0,a.pipe)(i,n?s.yR:V(L.s.PositionState.invalidateHeight(i.positionState)),j(d))}}(e,r)),selectByAlert:(e,r,a,n)=>t(c.selectByAlert(e,r,a,n),u(r,e,a),de.X.select(e),i.selectByAlert(r,(0,s.MZ)(e),a),s.yR),unselect:(e,r)=>t(c.unselect((0,s.MZ)(e),r),se.R.unselect((0,s.MZ)(e),r),de.X.unselect(e),i.unselect((0,s.MZ)(e),r),function(e,t){return i=>{const r=(0,a.pipe)(e,h.map((e=>t.compare(i,e)>0)),h.getOrElse(s.W8)),n=(0,a.pipe)(e,h.exists((e=>e.id===i.id)));return(0,a.pipe)(i,n?s.yR:V(L.s.PositionState.invalidateHeight(i.positionState)),W.o.isHidden(i)?s.yR:j(W.o.VisualState.to(i.visualState,{type:"rendered",clockwise:r})))}}(e,r))}}function f(e,r,a,o,d,l){return{removeAlertFromItem:(u,c)=>t((t=>C.X.Capabilities.getRemoveAlerts(e,c.itemsOrd)(u,ue.In.getActiveItemOfType(i)(c))(t)),(e=>se.R.Capabilities.getRemoveAlertsCapability(o,d,l,c.itemsOrd)(u,ue.In.getActiveItemOfType(n)(c))(e)),s.yR,(e=>ae.G.getRemoveAlert(r,a,o).removeAlertFromItem(u,c)(e)),s.yR)}}function g(e,i,r,a){const n=C.X.Capabilities.getRemove(e);return{remove:(e,o)=>t(n.remove(e,o),(t=>e(t)?se.R.Capabilities.getRemove(r,a)([t.activeAlert],o(t))(t):t),s.yR,(t=>e(t)?i.removeAlerts(t.alerts,o(t))(t):t),s.yR)}}function A(e,i,r,a){const n=C.X.Capabilities.getUpdateWithAlert(e),o=se.R.Capabilities.getUpdatableWithAlertsCapability(i,a);return{updateWithAlerts:e=>t(n.updateWithAlerts(e),o(e),s.yR,r.updateWith(e),s.yR)}}e.equatable={structEq:c(C.X.eq,se.R.eq,de.X.eq,le.J.eq,P.g.eq),idEq:c(u,u,u,u,u),visualStateEq:c(m,m,m,m,m)},e.changePosition=p,e.disposable={isScheduledToDispose:t((e=>ne.C.willBeDisposed(e,e.removedAlertsIds)),(e=>ne.C.willBeDisposed(e,e.removedAlertsIds)),s.jv,(e=>ne.C.willBeDisposed(e,e.removedAlertsIds)),s.jv)},e.hidable={isHidden:t(W.o.isHidden,W.o.isHidden,W.o.isHidden,W.o.isHidden,W.o.isHidden)},e.animatableItem=v,e.hasAlertsQueries={isSelectableByAlert:e=>t(ne.C.hasAlert(e.alert.id),ne.C.hasAlert(e.alert.id),s.jv,ne.C.hasAlert(e.alert.id),s.jv),hasAlert:e=>t(ne.C.hasAlert(e),ne.C.hasAlert(e),s.jv,ne.C.hasAlert(e),s.jv),hasActiveAlert:t((e=>h.some(e.activeAlert)),(e=>h.some(e.activeAlert)),(()=>h.none),(e=>h.some(e.activeAlert)),(()=>h.none))},e.changePositionStrategyQueries={useReferenceHeightOnRemove:t(s.jv,s.jv,s.jv,s.W8,s.jv)},e.select=S,e.removeAlert=f,e.remove=g,e.updateWithAlert=A,e.releaseAlert=(t,i,s,r,a,n)=>ce.v.Capabilities.getAlertReleaser({...f(t,i,s,r,a,n),...e.disposable}),e.unselectable=(e,t,i,s,r)=>ce.v.Capabilities.getUnselectable(ue.In.getActiveItem,S(e,t,i,s,r)),e.selectableByAlert=(t,i,s,r,a)=>ce.v.Capabilities.getSelectableByAlert(ue.In.getActiveItem,{...e.hasAlertsQueries,...S(t,i,s,r,a),...ce.v.Capabilities.getHasChecksFeed()}),e.selectableById=(e,t,i,s,r)=>ce.v.Capabilities.getSelectableById(ue.In.getActiveItem,S(e,t,i,s,r)),e.updateMeta=()=>({updateMeta:ce.v.Capabilities.getMetaUpdatable().updateMeta}),e.animatableFeed=(e,t,i,s,r,a)=>ce.v.Capabilities.getAnimatable(e,{...f(e,t,i,s,r,a),...v(e,t,a),...ce.v.Capabilities.getHasChecksFeed()}),e.hasPriorityToggle=(t,i,s)=>ce.v.WithPriority.getHasPriorityToggle({...v(t,i,s),...e.hasAlertsQueries,...e.disposable});const y=t=>["focused","expanded"].includes(t.visualState.transition.type)&&!e.disposable.isScheduledToDispose(t);function I(e,i){const s=re.Mq.getCardSelections(i);return{nextAlert:t(s.nextAlert,s.nextAlert,(()=>h.none),e.nextAlert,(()=>h.none)),prevAlert:t(s.prevAlert,s.prevAlert,(()=>h.none),e.prevAlert,(()=>h.none))}}function b(){return{updateUserInput:e=>t(C.X.updateUserInput(e),se.R.changeUserInput(e),s.yR,s.yR,s.yR)}}e.alignable={isValidToAlign:t(y,y,s.jv,y,s.jv)},e.alertIterator=I,e.itemReleaser=(e,t,i)=>ae.G.getItemReleaser(e,t,i,ce.v.Capabilities.getItemReleaser()),e.hasAlerts=ce.v.Capabilities.getHasAlerts,e.getDefaultNextAlertItemFilter=t=>(0,me.W9)(e.isSelectableWithAlertItem,(i=>!e.disposable.isScheduledToDispose(i)&&(0,a.pipe)(i,e.hasAlertsQueries.hasActiveAlert,h.map((e=>t.isRegistered(e.id))),h.getOrElse(s.jv)))),e.hasUserInput=b,e.priorityTest=(0,me.W9)(i,(e=>ie.$.isPriority(e.activeAlert))),e.verifiable=()=>ce.v.Capabilities.getVerifiable(e.disposable),e.cloneable=()=>{const e=L.s.Capabilities.getPojoCloneable().clone;return{clone:t(C.X.Capabilities.getCloneable().clone,e,e,e,e)}},e.getCapabilities=function(t,i,r,a,n,o,d,u=(0,s.a9)(h.none),c=re.IG.Default){return{...l(u,d),...e.disposable,...e.hidable,...e.equatable,...b(),...e.cloneable(),...p(t,r),...v(t,r,n),...S(t,r,a,c,n),...g(t,r,c,n),...f(t,r,o,a,c,n),...A(t,i,r,n),...e.hasAlertsQueries,...e.changePositionStrategyQueries,...e.alignable,...e.releaseAlert(t,r,o,a,c,n),...e.unselectable(t,r,a,c,n),...e.selectableByAlert(t,r,a,c,n),...e.selectableById(t,r,a,c,n),...e.updateMeta(t),...e.animatableFeed(t,r,o,a,c,n),...e.hasPriorityToggle(t,r,n),...e.itemReleaser(r,o,a),...e.verifiable(),...e.cloneable(),...e.hasAlerts(I(r,a),e.hasAlertsQueries,(()=>e.getDefaultNextAlertItemFilter(a)))}}}(Z||(Z={}))},65060:(e,t,i)=>{i.d(t,{g:()=>s,m:()=>m});var s,r=i(57050),a=i(26653),n=i(36156),o=i(16892),d=i(48521),l=i(4890),u=i(73975),c=i(5114);function m(e){return e.id===s.id}!function(e){e.id="ReadersAttentionItemId",e.kind="ReadersAttentionItem",e.eq=u.f7(((e,t)=>e.hashCode()===t.hashCode()&&o.s.PositionState.eq.equals(e.positionState,t.positionState)&&d.o.VisualState.eq.equals(e.visualState,t.visualState))),e.hashCodeOwnFields=e=>(0,n.NO)({title:e.title,description:e.description,details:(0,r.zG)(e.details,c.fold((()=>"none"),(e=>`some(${e})`))),attentionScore:a.T.prism.reverseGet(e.attentionScore)}),e.hashCode=e.hashCodeOwnFields,e.create=function(t,i,s){return{id:e.id,kind:e.kind,renderOptions:{...l.j.defaultOptions,layoutDensity:l.j.Density.minimal},positionState:i,visualState:s,title:t.title,description:t.description,details:t.details,attentionScore:t.attentionScore,equals(t){return e.eq.equals(this,t)},hashCode(){return e.hashCode(this)}}}}(s||(s={}))},16314:(e,t,i)=>{var s;function r(e){return e.type===s.miniCardClick}function a(e){return e.type===s.ignoreButtonClick}function n(e){return e.type===s.viewMoreButtonClick}function o(e){return e.type===s.feedbackButtonClick}i.d(t,{Dy:()=>s,Vl:()=>r,l9:()=>a,Q:()=>n,RJ:()=>o}),function(e){e.miniCardClick="readersAttentionItemMiniCardClick",e.ignoreButtonClick="readersAttentionItemIgnoreButtonClick",e.viewMoreButtonClick="readersAttentionItemViewMoreButtonClick",e.feedbackButtonClick="readersAttentionItemFeedbackButtonClick"}(s||(s={}))},35501:(e,t,i)=>{i.d(t,{h:()=>h,r:()=>v});var s=i(27378),r=i(63847),a=i(3656),n=i(77176),o=i(26653),d=i(8125),l=i(5739),u=i(12187),c=i(94435),m=i(35630);const p=({progress:e})=>s.createElement(l.F.Fragment,null,e.pipe(n.U((e=>s.createElement(r.P,{percentage:o.g.prism.reverseGet(e),colorType:r.P.ColorType.neoBlue,iconSize:r.P.IconSize.extraSmall,theme:{radialProgressBar:m.circleProgress,radialProgressText:m.circleText}}))))),h=e=>c.UI.Node.make((({view:t})=>s.createElement(l.F.div,{...(0,u.Sh)(m.header,t("density").pipe(n.U((e=>"normal"===e)),n.U((0,d.RN)(m.normal,m.compact))))},s.createElement("div",{className:m.progressIcon},s.createElement(p,{progress:t("attentionScore").pipe(n.U(o.g.fromRatio))})),s.createElement(a.XY,{...(0,u.Sh)(m.title,"full"===e?m.full:void 0)},t("title"))))),v=c.UI.Node.make((({view:e})=>s.createElement(s.Fragment,null,s.createElement("div",{className:m.progressContainer,"data-name":"attention-score-progress-bar"},s.createElement(l.F.div,{className:m.progressBar,style:{width:e("attentionScore").pipe(n.U(o.g.fromRatio),n.U(o.g.prism.reverseGet),n.U((e=>`${e}%`)))}},s.createElement(a.XY,{className:m.progressValue,"data-name":"attention-score-progress-value"},e("attentionScore").pipe(n.U(o.g.fromRatio),n.U(o.g.prism.reverseGet),n.U((e=>`${e}%`)))))),s.createElement(a.XY,{className:m.description},e("description")))))},17382:(e,t,i)=>{i.r(t),i.d(t,{ShortenItFeature:()=>pe});var s=i(57050),r=i(73975);new Set;function a(e){return function(t){for(var i,s=t.values(),r=!1;!r&&!(i=s.next()).done;)r=e(i.value);return r}}function n(e){return(0,s.ff)(a((0,s.ff)(e)))}function o(e){var t=d(e);return function(i,s){if(void 0===s){var r=o(e);return function(e){return r(e,i)}}return n((function(e){return t(e,s)}))(i)}}function d(e){return function(t,i){if(void 0===i){var s=d(e);return function(e){return s(t,e)}}for(var r,a=i.values(),n=!1;!n&&!(r=a.next()).done;)n=e.equals(t,r.value);return n}}new Set;var l=function(e){var t=o(e);return(0,r.f7)((function(e,i){return t(e,i)&&t(i,e)}))};var u=function(e){return function(t){for(var i=t.length,s=new Set,r=d(e),a=0;a<i;a++){var n=t[a];r(n,s)||s.add(n)}return s}},c=i(51972),m=i(84966),p=i(40018),h=i(79227),v=i(66896),S=i(4390),f=i(19751),g=i(98403),A=i(60797),y=i(14601),I=i(44586),C=i(32952),b=i(77176),w=i(24209),R=i(76974),k=i(41398),_=i(66310),q=i(13444),E=i(80900),F=i(598),T=i(78674),x=i(38194),U=i(85985),O=i(28043),z=i(17594),B=i(77610),N=i(35416),G=i(83078),D=i(5114),P=i(71249),M=i(38983);var Q=i(95572),X=i(90361),H=i(74850),W=i(5817),L=i(2844),V=i(93508),j=i(67434),Z=i(17343);class K{constructor(e,t,i,r,a,n=(0,W.m9)(1)){this._requestAwaitService=t,this._textChangeBufferEmpty=i,this._capiCheckingState=r,this._capiReadyState=a,this._logger=H.Y.create("ShortenItRequestQueue"),this._subs=new y.w,this._enqueuedAlertIds=new C.xQ,this._typingIdle=M.h.create(!0),this._flushScheduled=M.h.create(!1),this._readyToRequest=L.aj([this._capiCheckingState,this._capiReadyState,this._textChangeBufferEmpty]).pipe(b.U((([e,t,i])=>e===Q.Hq.idle&&t===Q.kQ.firstTextCheckCompleted&&i)),O.x()),this.state=this._enqueuedAlertIds.pipe(b.U((e=>({alertId:e,kind:"alertId"}))),_.w((e=>L.aj([this._readyToRequest,this._typingIdle]).pipe(b.U((([e,t])=>({readyToRequest:e,typingIdle:t,kind:"status"}))),V.O(e)))),j.R(((e,t)=>"status"===t.kind&&t.typingIdle&&e.buffer.size>0?t.readyToRequest?{buffer:new Set,output:new Set(e.buffer)}:(this._flushScheduled.set(!0),{buffer:e.buffer,output:new Set}):"alertId"===t.kind?{buffer:new Set([...e.buffer,...t.alertId]),output:new Set}:{buffer:e.buffer,output:new Set}),{buffer:new Set,output:new Set}),b.U((e=>e.output)),U.h((e=>e.size>0))),this._subs.add((0,s.zG)(e.contentChanges.async,U.h((e=>e.changes.length>0)),_.w((()=>E.H(n).pipe(Z.h(!0),V.O(!1)))),V.O(!0)).subscribe(g.wW(this._typingIdle))),this._subs.add(this._textChangeBufferEmpty.subscribe((e=>{e&&this._flushScheduled.set(!1)}))),this._subs.add(this._flushScheduled.pipe(U.h(X.fQ)).subscribe((()=>{this._textChangeBufferEmpty.get()||(this._logger.debug("flushing changes"),this._requestAwaitService.addRequest(Promise.resolve()))})))}enqueue(e){this._enqueuedAlertIds.next(e)}dispose(){this._subs.unsubscribe()}}var Y,$=i(17404),J=i(23063),ee=i(8125),te=i(22232);!function(e){e.isReceived=function(e){return"summaryReceived"===e.kind},e.isNotFound=function(e){return"summaryNotFound"===e.kind}}(Y||(Y={}));class ie{constructor(e,t,i=H.Y.create("ShortenItRequestState")){this._alertProcessor=e,this._textObserver=t,this.logger=i,this._subs=new y.w,this._requestState=new Map,this._requestStateChanged=new C.xQ,this.summaryNotFound=this._requestStateChanged.pipe(U.h((e=>{var t;return"summaryNotFound"===(null===(t=this._requestState.get(e))||void 0===t?void 0:t.kind)}))),this.notFoundAfterTextChanged=this._requestStateChanged.pipe(U.h((e=>{var t;return"summaryNotFoundAfterTextChanged"===(null===(t=this._requestState.get(e))||void 0===t?void 0:t.kind)}))),this.responseReceived=this._requestStateChanged.pipe(b.U((e=>(0,s.zG)(D.fromNullable(this._requestState.get(e)),D.filter((0,ee.Kg)(Y.isNotFound,Y.isReceived)),D.map((t=>({id:e,...t})))))),A.oA),this._trackSummaryReceived(),this._trackTextChanges(),this._subs.add(this._requestStateChanged.pipe(b.U((e=>({id:e,event:this._requestState.get(e)}))),U.h((e=>!!e.event))).subscribe((({id:e,event:t})=>{const{kind:s,...r}=t;i.trace(`${s} - alert #${e}`,r)})))}get(e){return this._requestState.get(e)}_trackTextChanges(){this._subs.add(this._textObserver.contentChanges.async.subscribe((e=>{if(!e.deltaChange.isEmpty){const e=Array.from(this._requestState.entries()).filter((e=>e[1].kind===p.vQ.SummaryState.requestSent));for(const[t,i]of e)this._requestState.set(t,{...i,textChanged:!0}),this._requestStateChanged.next(t)}})))}onCAPISessionStarted(){this._requestState.clear()}requestFinished(e){const t=this._requestState.get(e);"summaryReceived"!==(null==t?void 0:t.kind)&&((null==t?void 0:t.kind)===p.vQ.SummaryState.requestSent&&t.textChanged?(this._requestState.set(e,{kind:"summaryNotFoundAfterTextChanged",...se(this._requestState.get(e))}),this._requestStateChanged.next(e)):(this._requestState.set(e,{kind:"summaryNotFound",...se(this._requestState.get(e))}),this._requestStateChanged.next(e)))}requestEnqueued(e){const t=this._requestState.get(e);t&&"requestEnqueued"===t.kind||(this._requestState.set(e,{kind:"requestEnqueued",timestamp:performance.now(),retries:"summaryNotFoundAfterTextChanged"===(null==t?void 0:t.kind)?t.retries.concat({requestLatency:t.requestLatency,delayBeforeRequestSubmitted:t.delayBeforeRequestSubmitted}):[]}),this._requestStateChanged.next(e))}requestSubmitted(e){const t=this._requestState.get(e);this._requestState.set(e,{kind:p.vQ.SummaryState.requestSent,timestamp:performance.now(),textChanged:!1,delayBeforeRequestSubmitted:(0,s.zG)(D.fromNullable(this._requestState.get(e)),D.fold((()=>0),re)),retries:"requestEnqueued"===(null==t?void 0:t.kind)?t.retries:[]}),this._requestStateChanged.next(e)}_trackSummaryReceived(){const e=this._alertProcessor.alerts.state.pipe(b.U((0,s.ls)(Object.values,Array.from,P.hX($.SW.isShortenItAlertWithSummary))),J.q(1)),t=this._alertProcessor.alerts.changes.pipe(b.U((e=>e.addedAlerts.concat(e.updatedAlerts).filter($.SW.isShortenItAlertWithSummary))));this._subs.add(w.T(e,t).subscribe((e=>{e.forEach((e=>{const t=e.id,i={kind:"summaryReceived",...se(this._requestState.get(t))};this._requestState.set(t,i),this._requestStateChanged.next(t)}))})))}dispose(){this._subs.unsubscribe()}}function se(e){return{delayBeforeRequestSubmitted:(0,s.zG)(D.fromNullable(e),D.fold((()=>0),re)),requestLatency:(0,s.zG)(D.fromNullable(e),D.fold((()=>0),ae)),retries:(0,s.zG)(D.fromNullable(e),D.fold((()=>[]),(e=>e.retries)))}}function re(e){switch(e.kind){case"requestEnqueued":return performance.now()-e.timestamp;case"requestSent":case"summaryReceived":case"summaryNotFound":case"summaryNotFoundAfterTextChanged":return e.delayBeforeRequestSubmitted;default:(0,te.vE)(e)}}function ae(e){switch(e.kind){case"requestSent":return performance.now()-e.timestamp;case"summaryReceived":case"summaryNotFound":return e.requestLatency;case"requestEnqueued":return 0;case"summaryNotFoundAfterTextChanged":return e.requestLatency;default:(0,te.vE)(e)}}var ne=i(26653),oe=i(15646),de=i(16118),le=i(85321);function ue(e,t,i,s){switch(t.kind){case"summaryResponseReceived":e.shortenItResponseReceived(t.capiAlertId,t.cardActiveDuration,t.delayBeforeRequestSubmitted,s,t.requestLatency,i,t.summaryFound);break;case"summaryShow":e.shortenItSummaryShow(t.alertId,t.capiAlertId,t.compressionRatio,s,t.sentenceCount,t.wordCount,t.numEditsDismissedSinceAlertReceived,t.numEditsOnAlertReceived,t.numEditsOnCardOpen,t.numEditsReviewedSinceAlertReceived,i,t.reason);break;case"summaryHide":e.shortenItSummaryHide(t.alertId,t.capiAlertId,t.compressionRatio,s,t.reason,t.sentenceCount,t.wordCount,t.numEditsDismissedSinceAlertReceived,t.numEditsDismissedSinceCardOpen,t.numEditsOnAlertReceived,t.numEditsOnCardOpen,t.numEditsReviewedSinceAlertReceived,t.numEditsReviewedSinceCardOpen,i);break;case"summaryLoadingShow":e.shortenItSummaryLoadingShow(t.alertId,t.capiAlertId,s,t.sentenceCount,t.wordCount,i);break;case"summaryLoadingHide":e.shortenItSummaryLoadingHide(t.alertId,t.capiAlertId,s,t.reason,t.sentenceCount,t.wordCount,t.duration,i);break;case"summaryNotFoundShow":e.shortenItSummaryNotFoundShow(t.alertId,t.capiAlertId,s,t.sentenceCount,t.wordCount,i,t.reason);break;case"summaryNotFoundHide":e.shortenItSummaryNotFoundHide(t.alertId,t.capiAlertId,s,t.reason,t.sentenceCount,t.wordCount,i);break;default:(0,te.vE)(t)}}function ce(e){switch(e){case p.vQ.SummaryState.notRequested:case p.vQ.SummaryState.requestSent:case p.vQ.SummaryState.invalidated:return"AILoadingCard";case p.vQ.SummaryState.received:return"summaryCard";case p.vQ.SummaryState.notFound:return"errorCard";default:(0,te.vE)(e)}}class me{constructor(e,t,i){this._gnar=e,this._getSessionUuid=t,this._getDomainCategory=i}trackShortenItResponses(e,t){return e.pipe(k.M(t),b.U((([e,t])=>{const i=(0,s.zG)(t,D.filter((t=>t.id===e.id)),D.fold((()=>0),(e=>performance.now()-e.timeFocused))),r=e.delayBeforeRequestSubmitted+e.retries.reduce(((e,t)=>e+t.delayBeforeRequestSubmitted),0),a=e.requestLatency+e.retries.reduce(((e,t)=>e+t.requestLatency),0);return{kind:"summaryResponseReceived",capiAlertId:e.id,summaryFound:"summaryReceived"===e.kind||"summaryNotFound"!==e.kind&&(0,te.vE)(e),cardActiveDuration:i,requestLatency:a,delayBeforeRequestSubmitted:r}}))).subscribe((e=>ue(this._gnar,e,(0,s.zG)(this._getSessionUuid(),D.getOrElse((()=>""))),this._getDomainCategory())))}initAssistantTracking(e,t,i,a){const n=new y.w,o=new Map,d=new Map;return n.add(function(e,t){return e.pipe(U.h((0,ee.Kg)(oe.lY.isAlertIgnoreAction,oe.lY.isAlertApplyAction)),b.U((e=>(0,s.zG)(t.getById(e.alertId),D.filter(p.bZ.isShortenIt),D.map((()=>e))))),A.oA)}(e,t).subscribe((e=>{switch(e.type){case oe.lY.Type.alertIgnore:o.set(e.alertId,"dismissed");break;case oe.lY.Type.alertApply:o.set(e.alertId,"accepted");break;default:(0,te.vE)(e)}}))),n.add(e.pipe(U.h((0,ee.Kg)(oe.ut.isReviewEdit,oe.ut.isDismissEdit))).subscribe((e=>{const t=d.get(e.alertId)||{editsReviewedSinceCardOpen:new Set,editsDismissedSinceCardOpen:new Set,editsReviewedSinceAlertReceived:new Set,editsDismissedSinceAlertReceived:new Set};switch(e.type){case oe.lY.Type.shortenItReviewEdit:d.set(e.alertId,{...t,editsReviewedSinceCardOpen:new Set(t.editsReviewedSinceCardOpen).add(e.group),editsReviewedSinceAlertReceived:new Set(t.editsReviewedSinceAlertReceived).add(e.group)});break;case oe.lY.Type.shortenItDismissEdit:d.set(e.alertId,{...t,editsDismissedSinceCardOpen:new Set(t.editsDismissedSinceCardOpen).add(e.group),editsDismissedSinceAlertReceived:new Set(t.editsDismissedSinceAlertReceived).add(e.group)});break;default:(0,te.vE)(e)}}))),n.add(function(e,t,i,a,n){return w.T(t.pipe(b.U(D.some)),i.pipe(Z.h(D.none))).pipe(b.U(D.chain((t=>N.nL.hasItems(t)?(0,s.zG)(c.O.getActiveItemWithAlert(t.currentLens),D.filter(B.C.isShortenItItem),D.map((e=>e.activeAlert)),D.chain((t=>(0,s.zG)(e.getById(t.id),D.chain(p.bZ.getRawId),D.map((e=>({alert:t,rawAlertId:e}))))))):D.none))),f.$f(D.getEq(r.Uz((e=>({id:e.alert.id,activeView:ce(e.alert.summaryState)})))(r.MW({id:r.yv,activeView:r.yv})))),V.O(D.none),de.G(),j.R((({focusTimestamp:e},[t,i])=>{const r=(0,s.zG)(t,D.map((e=>e.alert.id)),D.fold(s.jv,(e=>(0,s.zG)(i,D.map((e=>e.alert.id)),G.FX(e))))),o=(0,s.zG)(i,D.map((e=>e.alert.summaryState)),G.FX(p.vQ.SummaryState.received)),d=(0,s.zG)(i,D.map((e=>e.alert.summaryState)),G.FX(p.vQ.SummaryState.notFound)),l=[];return(0,s.zG)(t,G.bw((t=>{const i=t.alert.summaryState===p.vQ.SummaryState.received,u=t.alert.summaryState===p.vQ.SummaryState.notFound,c=D.toNullable(a(t.alert.id))||"unfocused";if(u)(0,te.kG)("accepted"!==c,"Can't accept a ShortenIt alert that timed-out"),l.push({kind:"summaryNotFoundHide",alertId:t.alert.id,reason:c,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount,capiAlertId:t.rawAlertId});else if(i){const e=n(t.alert.id);l.push({kind:"summaryHide",alertId:t.alert.id,capiAlertId:t.rawAlertId,reason:c,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount,compressionRatio:ne.T.unwrap(t.alert.compressionRatio),numEditsReviewedSinceCardOpen:(0,s.zG)(e,D.fold((()=>0),(e=>e.editsReviewedSinceCardOpen.size))),numEditsDismissedSinceCardOpen:(0,s.zG)(e,D.fold((()=>0),(e=>e.editsDismissedSinceCardOpen.size))),numEditsDismissedSinceAlertReceived:(0,s.zG)(e,D.fold((()=>0),(e=>e.editsDismissedSinceAlertReceived.size))),numEditsReviewedSinceAlertReceived:(0,s.zG)(e,D.fold((()=>0),(e=>e.editsReviewedSinceAlertReceived.size))),numEditsOnAlertReceived:t.alert.transformGroups.size,numEditsOnCardOpen:t.alert.transformGroups.size-(0,s.zG)(e,D.fold((()=>0),(e=>e.editsDismissedSinceAlertReceived.size-e.editsDismissedSinceCardOpen.size)))})}else(0,te.kG)("accepted"!==c,"Can't accept a loading ShortenIt alert"),l.push({kind:"summaryLoadingHide",alertId:t.alert.id,capiAlertId:t.rawAlertId,reason:o&&r?"summaryReceived":d&&r?"timeoutReceived":c,duration:performance.now()-e,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount})}))),(0,s.zG)(i,G.bw((e=>{if(d)l.push({kind:"summaryNotFoundShow",alertId:e.alert.id,capiAlertId:e.rawAlertId,reason:r?"timeoutReceived":"focused",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount});else if(o){const t=n(e.alert.id);l.push({kind:"summaryShow",alertId:e.alert.id,capiAlertId:e.rawAlertId,reason:r?"summaryReceived":"focused",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount,compressionRatio:ne.T.unwrap(e.alert.compressionRatio),numEditsOnAlertReceived:e.alert.transformGroups.size,numEditsOnCardOpen:e.alert.transformGroups.size-e.alert.dismissedTransformGroups.size,numEditsDismissedSinceAlertReceived:(0,s.zG)(t,D.fold((()=>0),(e=>e.editsDismissedSinceAlertReceived.size))),numEditsReviewedSinceAlertReceived:(0,s.zG)(t,D.fold((()=>0),(e=>e.editsReviewedSinceAlertReceived.size)))})}else l.push({kind:"summaryLoadingShow",alertId:e.alert.id,capiAlertId:e.rawAlertId,sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount})}))),{events:l,focusTimestamp:performance.now()}}),{events:[],focusTimestamp:performance.now()}),b.U((e=>e.events)),le.zg(s.yR))}(t,i.pipe(q.g(100)),a,(e=>D.fromNullable(o.get(e))),(e=>D.fromNullable(d.get(e)))).subscribe((e=>{if(ue(this._gnar,e,(0,s.zG)(this._getSessionUuid(),D.getOrElse((()=>""))),this._getDomainCategory()),"summaryHide"===e.kind){const t=d.get(e.alertId)||{editsReviewedSinceCardOpen:new Set,editsDismissedSinceCardOpen:new Set,editsReviewedSinceAlertReceived:new Set,editsDismissedSinceAlertReceived:new Set};d.set(e.alertId,{...t,editsReviewedSinceCardOpen:new Set,editsDismissedSinceCardOpen:new Set})}}))),n}}class pe{constructor(e){this._params=e,this._subs=new y.w,this._activeShortenItCapiAlertId=M.h.create(D.none),this._requestState=new ie(this._params.alertProcessor,this._params.textObserver),this._gnarTracking=new me(this._params.gnar,this._params.getSessionUuid,this._params.getDomainCategory),this._subs.add(this._params.capiReadyState.subscribe((e=>{e&&this._requestState.onCAPISessionStarted()}))),this._subs.add(this._gnarTracking.trackShortenItResponses(this._requestState.responseReceived,this._activeShortenItCapiAlertId))}get addStateToRawAlertTransformer(){return e=>{if(m.wQ.isShortenIt(e)){const t=this._requestState.get(e.id),i=t&&function(e){switch(e){case"requestEnqueued":case"summaryNotFoundAfterTextChanged":return;case"requestSent":return p.vQ.SummaryState.requestSent;case"summaryReceived":return p.vQ.SummaryState.received;case"summaryNotFound":return p.vQ.SummaryState.notFound;default:(0,te.vE)(e)}}(t.kind);return i?{...e,extra_properties:{...e.extra_properties,shorten_it_alert_state:{summaryState:i}}}:e}return e}}onShortenItFinished(e){this._requestState.requestFinished(e)}initAssistantSession(e,t,i,a,n){return new I.y((()=>{const o=new y.w,d=new C.xQ,S=new K(this._params.textObserver,this._params.requestAwaitService,this._params.textChangeBufferEmpty,this._params.capiCheckingState,this._params.capiReadyState),I=i.pipe(b.U((e=>(0,s.zG)(D.fromPredicate(N.nL.hasItems)(e),D.map((e=>e.currentLens)),D.chain(c.O.getActiveItemWithAlert)))));this._subs.add(I.pipe(b.U((0,s.ls)(D.filter(B.C.isShortenItItem),D.chain((e=>t.getById(e.activeAlert.id))),D.chain(p.bZ.getRawId))),f.$f(D.getEq(r.yv)),b.U(D.map((e=>({id:e,timeFocused:performance.now()}))))).subscribe(g.wW(this._activeShortenItCapiAlertId))),o.add(w.T(function(e,t){const i=E.H(500).pipe(F.c(e),T.b(100),b.U((e=>{const i=e.currentLens.id===v.R.SpecialId.PredictionTakeaways,r=function*(e,t){if(!N.nL.hasItems(t)||D.isNone(t.currentLens.cardIndex)||0===t.currentLens.items.size)return;const i=t.currentLens.items,r=t.currentLens.cardIndex.value,a=(0,s.zG)(i.getAt(r),D.filter(B.C.isWithAlertsItem),D.map((t=>t.alerts.map(((e,i)=>({alert:e,distanceToActiveAlertInItem:Math.abs(i-t.activeAlertIndex),distanceToActiveItemInFeed:0,isActiveAlert:i===t.activeAlertIndex}))).filter((t=>e(t.alert))))),D.getOrElse((()=>[])),(e=>e.sort(((e,t)=>e.distanceToActiveAlertInItem-t.distanceToActiveAlertInItem))));for(const e of a)yield e;let n=r-1,o=r+1,d=n<0,l=o>=i.size;for(;!d||!l;){const t=l?[]:(0,s.zG)(i.findFrom(B.C.isWithAlertsItem,o),D.filter((e=>e.index>=o)),D.fold((()=>(l=!0,[])),(t=>{o=t.index+1,l=l||o>=i.size;const s=t.value;return s.alerts.filter(e).map(((e,i)=>({alert:e,distanceToActiveItemInFeed:Math.abs(t.index-r),distanceToActiveAlertInItem:Math.abs(i-s.activeAlertIndex),isActiveAlert:!1}))).filter((t=>e(t.alert)))}))),a=d?[]:(0,s.zG)(i.findRightFrom(B.C.isWithAlertsItem,n),D.filter((e=>e.index<=n)),D.fold((()=>(d=!0,[])),(t=>{n=t.index-1,d=d||n<0;const i=t.value;return i.alerts.filter(e).map(((e,s)=>({alert:e,distanceToActiveItemInFeed:Math.abs(t.index-r),distanceToActiveAlertInItem:Math.abs(s-i.activeAlertIndex),isActiveAlert:!1}))).filter((t=>e(t.alert)))}))),u=t.concat(a).sort(((e,t)=>e.distanceToActiveItemInFeed-t.distanceToActiveItemInFeed));for(const e of u)yield e}}(z.$.isShortenIt,e),a={active:null,nonActive:[]};for(const e of r)if(e.isActiveAlert)a.active=e.alert;else{if(i&&e.distanceToActiveAlertInItem>t.activeItemRadius||!i&&e.distanceToActiveItemInFeed>t.activeItemRadius)break;a.nonActive.push(e.alert)}return a})),x.B()),a=i.pipe(b.U((e=>e.active)),U.h((e=>!!e)),O.x(((e,t)=>e.id===t.id&&e.summaryState===t.summaryState)),U.h(Se),b.U((e=>new Set([e.id])))),n=i.pipe(b.U((e=>e.nonActive)),O.x(((e,t)=>l(he).equals(u(he)(e),u(he)(t)))),b.U((0,s.ls)(P.hX(Se),P.ke(t.maxPrefetchRequestsWithinRadius),P.UI((e=>e.id)),u(r.yv))),f.$f(l(r.yv)));return w.T(a,n).pipe(U.h((e=>e.size>0)))}(i,this._params.prefetchOptions),this._requestState.notFoundAfterTextChanged.pipe(ve(n),A.cp((e=>R.of(new Set([e])))))).subscribe((e=>{for(const i of e)(0,s.zG)(t.getById(i),D.chain(p.bZ.getRawId),G.bw((e=>this._requestState.requestEnqueued(e))));S.enqueue(e)}))),o.add(S.state.subscribe((e=>{for(const i of e)a.sendShortenItSummaryRequest(i),(0,s.zG)(t.getById(i),D.chain(p.bZ.getRawId),G.bw((e=>this._requestState.requestSubmitted(e))))}))),o.add(this._requestState.summaryNotFound.pipe(ve(n),A.oA).subscribe((e=>a.shortenItSummaryNotFound(e))));const M=I.pipe(b.U(D.map((e=>e.activeAlert.id))));return o.add(this._requestState.summaryNotFound.pipe(ve(n),A.oA,k.M(M),_.w((([e,t])=>(0,s.zG)(t,D.exists((t=>e===t)))?R.of(e).pipe(q.g(1500)):R.of(e)))).subscribe((e=>a.applyFeedback(e,{kind:m.PZ.HIDE,subtype:h.J.getSubTypeFromLens(i.get().currentLens.id)},p.l$.api)))),o.add(this._gnarTracking.initAssistantTracking(e,t,i,d)),()=>{d.next(),o.unsubscribe(),S.dispose()}}))}dispose(){this._subs.unsubscribe(),this._requestState.dispose()}}const he=r.Uz((e=>null==e?void 0:e.id))(r.w4);function ve(e){return b.U((t=>(0,s.zG)(e.get(),S.p.find((e=>(0,s.zG)(p.bZ.getRawId(e.alert),G.FX(t)))),D.map((e=>e.alert.id)))))}function Se(e){return e.summaryState===p.vQ.SummaryState.notRequested||e.summaryState===p.vQ.SummaryState.invalidated}},35630:e=>{e.exports={circleProgress:"_1npo5",circleText:"_3muDd",card:"AAT_T",header:"_3k6P5",compact:"_1Efs0",normal:"_2_T8O",progressIcon:"_3lupT",title:"_1U6tn",full:"_24i7N",progressContainer:"TH-Um",progressBar:"_1Tzvc",progressValue:"_1Ck8G",description:"_4m_YN"}},32585:e=>{e.exports={cardBody:"_1qMrW",description:"_3g_X-",actions:"G0xen",lessIcon:"_3HhMd",minimalDescription:"srN6O",actionsFooter:"_11uNl",feedbackFooter:"_2PAOt",viewMoreButton:"_1CGEL"}},11510:e=>{e.exports={miniCard:"_2FMyP"}}}]);
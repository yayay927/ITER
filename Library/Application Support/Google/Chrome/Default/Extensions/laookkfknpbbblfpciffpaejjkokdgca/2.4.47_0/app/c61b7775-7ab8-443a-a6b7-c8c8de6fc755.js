var fn_addin=function(d,o,t){var l=l||{};l.styles=l.styles||{},l.commands=l.commands||{},l.dependencies=t||l.dependencies||{},l.styles.style=function(){},l.views=l.views||{},l.collect=l.collect||{},l.models=l.models||{},l.templates=l.templates||{},l.info={addin:"c61b7775-7ab8-443a-a6b7-c8c8de6fc755",dependencies:["settings"],id:"settings_trello",commands:["settings.panels.trello.config"]},d.console.log(d.elapsed()+": "+l.info.id+" started"),l.templates=l.templates||{},l.templates.boards_available=Handlebars.template({1:function(t,e,n,a){var s,i,o=e.helperMissing,l="function",r=this.escapeExpression;return'        <li data-board-id="'+r(typeof(i=null!=(i=e.id||(null!=t?t.id:t))?i:o)==l?i.call(t,{name:"id",hash:{},data:a}):i)+'" class="connect-board"><span class="board-icon">'+(null!=(s=e.if.call(t,null!=t?t.icon_url:t,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.noop,data:a}))?s:"")+"</span> "+r(typeof(i=null!=(i=e.board_name||(null!=t?t.board_name:t))?i:o)==l?i.call(t,{name:"board_name",hash:{},data:a}):i)+'\n        <span class="u--right"><span class="status"></span></span></li>\n'},2:function(t,e,n,a){var s;return'<img class="todo-list-icon" src="'+this.escapeExpression("function"==typeof(s=null!=(s=e.icon_url||(null!=t?t.icon_url:t))?s:e.helperMissing)?s.call(t,{name:"icon_url",hash:{},data:a}):s)+'">'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,i;return"<h5>"+this.escapeExpression("function"==typeof(i=null!=(i=e.organization_name||(null!=t?t.organization_name:t))?i:e.helperMissing)?i.call(t,{name:"organization_name",hash:{},data:a}):i)+'</h5>\n<ul class="settings-list provider-list add-provider">\n'+(null!=(s=e.each.call(t,null!=t?t.boards:t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?s:"")+"</ul>"},useData:!0}),l.templates.boards_connected=Handlebars.template({1:function(t,e,n,a){var s,i,o=e.helperMissing,l="function",r=this.escapeExpression;return'\t<li data-board-id="'+r(typeof(i=null!=(i=e.id||(null!=t?t.id:t))?i:o)==l?i.call(t,{name:"id",hash:{},data:a}):i)+'" class="has-board-id">\n\t\t<span class="u--flex-grow">\n\t\t\t<span class="board-icon">'+(null!=(s=e.if.call(t,null!=t?t.icon_url:t,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.noop,data:a}))?s:"")+r(typeof(i=null!=(i=e.board_name||(null!=t?t.board_name:t))?i:o)==l?i.call(t,{name:"board_name",hash:{},data:a}):i)+'</span>\n\t\t</span>\n\t\t<span class="settings-list-right">\n\t\t\t<span class="provider-actions">\n\t\t\t\t<span class="provider-action disconnect-board">Disconnect</span>\n\t\t\t</span>\n\t\t\t<span class="status">Connected</span>\n\t\t</span>\n\t</li>\n'},2:function(t,e,n,a){var s;return'<img class="todo-list-icon" src="'+this.escapeExpression("function"==typeof(s=null!=(s=e.icon_url||(null!=t?t.icon_url:t))?s:e.helperMissing)?s.call(t,{name:"icon_url",hash:{},data:a}):s)+'">'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,i;return"<h5>"+this.escapeExpression("function"==typeof(i=null!=(i=e.organization_name||(null!=t?t.organization_name:t))?i:e.helperMissing)?i.call(t,{name:"organization_name",hash:{},data:a}):i)+'</h5>\n<ul class="settings-list provider-list connected-providers">\n'+(null!=(s=e.each.call(t,null!=t?t.boards:t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?s:"")+"</ul>\n"},useData:!0}),l.templates.main=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){return'<div class="settings-detail-header">\n\t<span class="icon-wrapper back" title="Back"><i class="icon icon-left"></i></span>\n\t<h3><img src="https://az814671.vo.msecnd.net/logos/trello-blue-128.png"> Trello</h3>\n\t<p class="description">Choose the boards you\'d like to use in Momentum</p>\n</div>\n\n<h4 id="connected-boards-header">Connected Boards</h4>\n\n<div id="connected-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n<p class="empty">No Trello boards connected yet. Add a Board to get started!</p>\n\n<button class="button show-form toggle-form">Add Board</button>\n\n<div class="form" style="display: none;">\n\t<h4>Add Board</h4>\n\t<p class="all-connected">Congratulations, you\'re fully connected!</p>\n\t<div id="available-providers" class="provider-list-wrapper"><span class="loading"><i class="loading-icon"></i>Loading...</span></div>\n\t<div class="suggest-integration">\n\t\t<h5>Suggestions for this integration?</h5>\n\t\t<p>\x3c!--We\'d love to hear what other services you use.<br>--\x3e\n\t\t\t<a href="https://momentumdash.com/contact">Make a suggestion</a></p>\n\t</div>\n</div>\n\n<div class="settings-connect"></div>\n'},useData:!0}),l.styles=l.styles||{},l.styles.style=function(){var t=document.createElement("style");t.type="text/css",t.innerHTML=".settings-trello .form{margin-top:25px}",document.getElementsByTagName("head")[0].appendChild(t)};var e=l.dependencies.settings;return l.views.Main=e.views.SettingsPanel.extend({attributes:{id:"settings-trello",class:"settings-view settings-trello"},template:l.templates.main,panelid:"trello",events:{"click .connect-board":"connectBoard","click .disconnect-board":"disconnectBoard","click #connect-button":"connectTodoProvider","click .toggle-form":"toggleForm","click .back":"clickedBack"},initialize:function(){var e=this;this.collection=new d.collect.Settings,this.collection.url=d.globals.urlRootApi+"settings/todo/providers/5",this.collection.parse=function(t){return e.collection.lastResponse=t,e.collection.organizations=_.chain(e.collection.lastResponse.available_boards).map(function(t){if(t.organization_id)return{id:t.organization_id,name:t.organization_name}}).uniq(function(t){return t?t.id:null}).omit(_.isUndefined).omit(_.isNull).sortBy("name").value(),t.connected_boards},this.listenTo(this.collection,"reset",this.collectionReset),this.listenTo(d.models.customization,"change",this.customizationChanged),this.refreshData()},render:function(){return this.$el.html(this.template({})),this.$connect=this.$(".settings-connect")[0],this.$settingsTrello=this.$(".settings-trello")[0],this.$("#connected-boards-header").hide(),this},collectionReset:function(){this.populateConnectedBoards(),this.populateAvailableBoards()},refreshData:function(){this.collection.fetch({reset:!0})},disconnectBoard:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=o(t.delegatedTarget).closest(".has-board-id"),n=e.data("board-id");if(n){o(t.delegatedTarget).hide(),e.find(".status").html('<span class="loading disconnecting-board"><i class="loading-icon"></i>Disconnecting...</span>');var r=this;this.authAttempts=0;var a=d.globals.urlRootApi+"settings/todo/providers/5",s={operation:"disconnect_board",board_id:n};o.ajax({type:"POST",contentType:"application/json",url:a,data:JSON.stringify(s)}).done(function(t){if(t.status&&"authRequired"==t.status){if(t.authorizationUrl&&r.authAttempts<2){r.authAttempts++;var e=t.winWidth?t.winWidth:600,n=t.winHeight?t.winHeight:510,a=t.windowFeatures?t.windowFeatures:"titlebar,resizable,toolbar,status",s=window.screen.width/2-e/2,i=window.screen.height/2-n/2,o=window.open(t.authorizationUrl,"MomentumAuthWindow",a+",left="+s+",top="+i+",width="+e+",height="+n),l=setInterval(function(){o.closed&&(clearInterval(l),r.$connect.hide(),r.$settingsTrello.css("display","block"),r.$el.find(".pop-body").scrollTop(0),r.refreshData(),d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"1"}))},250)}}else t.status&&"success"==t.status&&d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"1"}),r.$el.find(".pop-body").scrollTop(0),r.refreshData()}).fail(function(){r.$el.find(".pop-body").scrollTop(0),r.refreshData()})}},connectBoard:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=o(t.delegatedTarget).data("board-id");if(e){o(t.delegatedTarget).find(".status").html('<span class="loading"><i class="loading-icon"></i>Connecting...</span>');var r=this;this.authAttempts=0;var n=d.globals.urlRootApi+"settings/todo/providers/5",c={operation:"connect_board",board_id:e};o.ajax({type:"POST",contentType:"application/json",url:n,data:JSON.stringify(c)}).done(function(t){if(t.status&&"authRequired"==t.status){if(t.authorizationUrl&&r.authAttempts<2){r.authAttempts++;var e=t.winWidth?t.winWidth:600,n=t.winHeight?t.winHeight:510,a=t.windowFeatures?t.windowFeatures:"titlebar,resizable,toolbar,status",s=window.screen.width/2-e/2,i=window.screen.height/2-n/2,o=window.open(t.authorizationUrl,"MomentumAuthWindow",a+",left="+s+",top="+i+",width="+e+",height="+n),l=setInterval(function(){o.closed&&(clearInterval(l),r.$connect.hide(),r.$settingsTrello.css("display","block"),r.$el.find(".pop-body").scrollTop(0),r.refreshData(),d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"5-"+c.board_id}))},250)}}else t.status&&"success"==t.status&&(r.$el.find(".pop-body").scrollTop(0),r.refreshData(),d.commandManager.execute("settings.todo.provider.change",null,{provider_id:"5-"+c.board_id}))}).fail(function(){})}},clickedBack:function(t){t&&(t.stopPropagation(),t.preventDefault()),d.commandManager.execute("settings.display",null,{section:"todo"})},populateConnectedBoards:function(){var t=o(this.$("#connected-providers")[0]),e=l.templates.boards_connected({organization_name:"",boards:this.collection.toJSON()});t.html(e),this.collection.length<1?(this.$(".show-form").hide(),this.$("#connected-boards-header").hide(),this.$(".form").css("display","block"),this.$(".empty").css("display","block"),t.hide()):(t.css("display","block"),this.$(".empty").hide(),this.$("#connected-boards-header").css("display","block"))},populateAvailableBoards:function(){var a=this,s=o(this.$("#available-providers")[0]);s.html("");var t=_.chain(a.collection.lastResponse.available_boards).where({starred:!0}).sortBy("board_name").value();if(t&&0<t.length){var e=l.templates.boards_available({organization_name:"Starred Boards",boards:t});s.append(e)}var n=_.chain(a.collection.lastResponse.available_boards).filter(function(t){return null!=t.dateLastActivity}).sortBy("dateLastActivity").reverse().first(5).value();if(n&&0<n.length){e=l.templates.boards_available({organization_name:"Recent Boards",boards:n});s.append(e)}var i=_.chain(a.collection.lastResponse.available_boards).filter(function(t){return!t.organization_id}).sortBy("board_name").value();if(i&&0<i.length){e=l.templates.boards_available({organization_name:"My Boards",boards:i});s.append(e)}_.each(a.collection.organizations,function(t){var e=_.chain(a.collection.lastResponse.available_boards).where({organization_id:t.id}).sortBy("board_name").value();if(e&&0<e.length){var n=l.templates.boards_available({organization_name:t.name,boards:e});s.append(n)}}),0==this.collection.lastResponse.available_boards.length?(this.$(".all-connected").css("display","block"),this.$("#available-providers").hide()):(this.$(".all-connected").hide(),this.$("#available-providers").css("display","block"))},toggleForm:function(){this.$(".show-form").mToggle("inline-block"),this.$(".form").mToggle("block")}}),d.commandManager&&d.commandManager.registerCommand("settings.panels.trello.config",function(){return l.styleLoaded||(l.styleLoaded=!0,l.styles.style()),new l.views.Main}),l};m.addinManager&&m.addinManager.registerAddinFn("c61b7775-7ab8-443a-a6b7-c8c8de6fc755",fn_addin);
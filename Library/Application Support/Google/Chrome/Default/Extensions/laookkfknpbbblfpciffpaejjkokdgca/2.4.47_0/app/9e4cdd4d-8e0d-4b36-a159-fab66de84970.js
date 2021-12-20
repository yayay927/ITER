var fn_addin=function(i,e,t){var s=s||{};return s.styles=s.styles||{},s.commands=s.commands||{},s.dependencies=t||s.dependencies||{},s.styles.style=function(){},s.views=s.views||{},s.collect=s.collect||{},s.models=s.models||{},s.templates=s.templates||{},s.info={addin:"9e4cdd4d-8e0d-4b36-a159-fab66de84970",id:"settings_common"},i.console.log(i.elapsed()+": "+s.info.id+" started"),s.models.SettingsManager=Backbone.Model.extend({initialize:function(){this.listenTo(i,"settings:register:nav",this.registerNavItem),this.listenTo(i,"settings:register:subnav",this.registerSubNavItem),this.listenTo(i,"settings:register:panel",this.registerPanel),window.addEventListener("storage",function(e){"loggedOut"!=e.key&&"loggedIn"!=e.key||window.location.reload()}),this.registerStockCommandSources()},stockNavItems:null,navItems:[],secondaryNavItems:[],panelItems:[],registerNavItem:function(e){return this.stockNavItems||this.populateStockNavItems(),!this.addOrReplaceIfOverride(this.navItems,e)&&(!this.addOrReplaceIfOverride(this.stockNavItems.navItems,e)&&(this.navItems.push(e),!0))},registerPanel:function(e){return!this.addOrReplaceIfOverride(this.panelItems,e)&&(this.panelItems.push(e),!0)},registerSubNavItem:function(e){return this.stockNavItems||this.populateStockNavItems(),!this.addOrReplaceIfOverride(this.secondaryNavItems,e)&&(!this.addOrReplaceIfOverride(this.stockNavItems.secondaryNavItems,e)&&(this.secondaryNavItems.push(e),!0))},addOrReplaceIfOverride:function(e,t,s){var i=s||{id:t.id},n=_.findWhere(e,i);return!!n&&(t.override&&(e.splice(e.indexOf(n),1),e.push(t)),!0)},registerNavItems:function(e){var t=this,s=!1;e&&(e.nav&&_.each(e.nav,function(e){t.registerNavItem(e)&&(s=!0)}),e.subNav&&_.each(e.subNav,function(e){t.registerSubNavItem(e)&&(s=!0)}),e.panels&&_.each(e.panels,function(e){t.registerPanel(e)}),s&&this.trigger("navItemsChanged"))},getNavItems:function(){return this.populateStockNavItems(),{navItems:_.chain(this.stockNavItems.navItems).union(this.navItems).sortBy("position").value(),secondaryNavItems:_.chain(this.stockNavItems.secondaryNavItems).union(this.secondaryNavItems).sortBy("position").value()}},getPanelItems:function(){return this.panelItems},registerStockCommandSources:function(){this.registerPanel({id:"trello",section:"todo",cmd:"settings.panels.trello.config"})},populateStockNavItems:function(){var e=i.conditionalFeatures.featureEnabled("plus");if(!this.stockNavItems){var t=[{id:"general",title:"General",cmd:"settings.panels.general",position:10},{id:"todo",title:"Todo",cmd:"settings.panels.todo",position:20},{id:"mantra-settings",title:"Mantras",cmd:"settings.panels.mantras",position:30},{id:"background-settings",title:"Photos",cmd:"settings.panels.backgrounds",position:40},{id:"quote-settings",title:"Quotes",cmd:"settings.panels.quotes",position:50}];i.utils.isTouchDevice()||t.push({id:"bookmark-settings",title:i.utils.bookmarksNotSupported()?"Links":"Links & Bookmarks",cmd:"settings.panels.bookmarks",position:70}),t.push({id:"balance",title:"Balance",cmd:"settings.panels.balance",position:80});var s=[{id:"help",title:"Help",cmd:"settings.panels.help",position:10},{id:"about",title:"About",cmd:"settings.panels.about",position:30}];e||"Safari"===i.globals.platform||s.push({id:"upgrade",title:"Upgrade to Plus",cmd:"upsell.upgrade",cmdOnly:!0,options:{source:"nav-upgrade-plus"},position:40}),this.stockNavItems={navItems:t,secondaryNavItems:s}}},infinispin:function(){var e=localStorage.getItem("infinispin");return e=!!e&&JSON.parse(e)},toggleInfinispin:function(){var e=!this.infinispin();return localStorage.setItem("infinispin",e),e}}),i.settingsManager=new s.models.SettingsManager,s};m.addinManager&&m.addinManager.registerAddinFn("9e4cdd4d-8e0d-4b36-a159-fab66de84970",fn_addin);
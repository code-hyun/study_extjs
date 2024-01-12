Ext.application({
    extend: 'Study.Application',
    
    name: 'Study',

    requires: [
        // 'Study.*'
        'Study.view.main.Main',
        'Study.view.sidebar.SideNavigationTabs',
        'Study.store.TtsStatus',
        'Study.store.SttStatus',
        'Study.store.RequireType',
        'Study.view.servicelog.ResultSelect',
        'Study.view.servicelog.ResultSelectViewModel',
        'Study.view.servicelog.ResultCount',
        'Study.view.serviceLog.serviceLogPanel',
        'Study.view.serviceLog.voicePanel',
        'Study.store.Header',
        'Study.model.Header',
        'Study.view.servicelog.SttCount',
        'Study.view.servicelog.TtsCount',
        'Study.view.toolbar.BasicToolbar',
        'Study.view.toolbar.BasicToolbarController',
        // 'Study.view.toolbar.BasicToolbarViewModel'
    ],

    // mainView: 'Study.view.main.Main'
});

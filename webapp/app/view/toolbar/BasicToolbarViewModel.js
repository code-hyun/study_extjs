Ext.define('Study.view.toolbar.BasicToolbarViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.toolbarviewmodel',

    data: {
        clickedButtonId: null,
        requireType: null,
        status: null,
        tidText: null,
        fromTime: null,
        toTime: null,
        date: null
    }

    
});

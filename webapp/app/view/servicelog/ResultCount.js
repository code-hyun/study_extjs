/* 
    View
    사용자 인터페이스
*/

Ext.define('Study.view.servicelog.ResultCount', {
    extend: 'Ext.panel.Panel',
    title: "ccVR status Count",
    xtype: 'resultcount',
    region: 'south',
    bodyPadding: 5,
    flex: 1,
    items:[{
        itemId:'count',
    }]
    
})

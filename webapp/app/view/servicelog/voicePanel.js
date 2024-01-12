/* 
    View
    사용자 인터페이스
*/

Ext.define('Study.view.serviceLog.voicePanel', {
    extend: 'Ext.panel.Panel', 
    xtype: 'voicePanel',
    region: 'center',
    margin: "20 10 10 10",
    layout: 'fit',
    titleAlign: 'center',
    items:[{
        xtype: 'tbtext',
        margin: '50 5 5 5',
        text: 'TEST PAGE',
        style : {
            fontSize : '100px',
            color : 'red'
        }
    }]
})
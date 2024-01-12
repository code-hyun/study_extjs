/* 
    View
    사용자 인터페이스
*/
Ext.define('Study.view.servicelog.TtsCount', {
    extend: 'Ext.panel.Panel',
    xtype: 'tts_count',
    region: 'south',
    bodyPadding: 5,
    flex: 1,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    items: [
        {
            xtype: 'label',
            text: 'Total:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'totalField',
            width: 150,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '0:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status0Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '30:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status30Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '60:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status60Field',
            width: 60,  
            margin: '0 20 0 0'
        }
    ]
})
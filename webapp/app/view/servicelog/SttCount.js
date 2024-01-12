/* 
    View
    사용자 인터페이스
*/
Ext.define('Study.view.servicelog.SttCount', {
    extend: 'Ext.panel.Panel',
    xtype: 'stt_count',
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
            text: '00:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status00Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '02:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status02Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '03:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status03Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '05:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status05Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '98:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status98Field',
            width: 60,  
            margin: '0 20 0 0'
        },
        {
            xtype: 'label',
            text: '99:',
            margin: '0 10 0 0'
        },
        {
            xtype: 'textfield',
            value: '0',
            itemId: 'status99Field',
            width: 60,  
            margin: '0 20 0 0'
        },
    ]
})
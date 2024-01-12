var getId = null;
var clickedButtonId = null;

Ext.define('Study.view.toolbar.BasicToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    controller: 'toolbarController',
    xtype: 'basic-toolbar',
    id : 'toolbarId',
    defaults: {
        margin: '1,1,1,1'
    },
    items: [
        {
            xtype: 'button',
            itemId: 'opr',
            style: {
                backgroundColor: 'white',
            },
            text: '운영계',
            handler: 'updateButtonStyles'

        }, 
        {
            xtype: 'button',
            itemId: 'dev',
            text: '검증계',
            style: {
                backgroundColor: 'white'
            },
            handler: 'updateButtonStyles'   
        },
        {
            xtype: 'button',
            itemId: 'pre',
            text: '선행계',
            style: {
                backgroundColor: 'white'
            },
            handler: 'updateButtonStyles'

        }, {
            xtype: 'tbtext',
            margin: '10 10 10 50',
            text: 'require-type : '
        }, {
            // RequireType
            xtype: 'combobox',
            itemId: 'requireType',
            width: 120,
            store: {
                type: 'requiretype'
            },
            queryMode: 'local',
            
            displayField: 'type',
            valueField: 'value',
            editable: false,
            listeners:{
                select : 'select'
            },
        },
        {
            xtype: 'tbtext',
            margin: '5 5 5 5',
            text: 'Date : '
        }, {
            xtype: 'panel',
            items: [{
                itemId: 'date',
                margin: '5 20 5 0',
                xtype: 'datefield',
                value: new Date(),
                format: 'Y/m/d'
            }]
        }, {
            xtype: 'button',
            text: 'Time',
            itemId : 'timeBt',
            
            handler: 'timeBt'
            
        }, {
            xtype: 'button',
            text: 'Header',
            itemId :'headerBt',
            
            handler: 'headerBt' 
        }, {
            xtype: 'button',
            text: 'Only Status Count',
            itemId : 'statusBt',
            handler: 'statusBt'         
        }
        , {
            xtype: 'panel',
            layout: 'hbox',
            items: [{
                xtype: 'timefield',
                itemId: 'time1',
                minValue: '00:00',
                maxValue: '23:59',
                increment: 1,
                width: 110,
                hidden : true,
                format : 'H:i',
                value: '00:00'
            }, {
                xtype: 'timefield',
                itemId: 'time2',
                minValue: '00:00',
                maxValue: '23:59',
                increment: 1,
                hidden : true,
                width: 110,
                format : 'H:i',
                value: '23:59'
            }]
        }, {
            id : 'headerComb',
            hidden : true,
            xtype: 'combobox',
            store : {
                type:'headerstore',
            },
            queryMode : 'local',
            width : '130px',
            displayField: 'headerName',
            valueField: 'headerValue',
            editable: false,
        },{
            id : 'header_text',
            xtype : 'textfield',
            hidden : true,
        },{
            xtype : 'tbtext',
            itemId : 'status_title',
            text : 'status',
        },{
            xtype : 'panel',
            layout : 'hbox',
            itemId : 'status',
            items:[
                {
                    xtype: 'combobox',
                    width: 80,
                    itemId : 'stt_status',
                    store: {
                        type: 'sttstore'
                    },
                    queryMode: 'local',
                    displayField: 'statusName',
                    valueField: 'statusValue',
                    editable: false,
                    hidden: true,
                    value : '',
                },{
                    xtype: 'combobox',
                    width: 80,
                    itemId : 'tts_status',
                    store: {
                        type: 'ttsstore'
                    },
                    queryMode: 'local',
                    displayField: 'statusName',
                    valueField: 'statusValue',
                    editable: false,
                    hidden: true,
                    value : '',
                }
            ]
        },{
            xtype: 'button',
            text: '조회',
            padding: 10,
            handler: 'ajaxFunction'
        }
    ]
});

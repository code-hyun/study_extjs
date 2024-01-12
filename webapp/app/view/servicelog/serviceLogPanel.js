/* 
    View
    사용자 인터페이스
*/

Ext.define('Study.view.serviceLog.serviceLogPanel', {
    extend: 'Ext.panel.Panel', 
    xtype: 'serviceLogPanel',
    region: 'center',
    margin: "20 10 10 10",
    layout: 'fit',
    
   

    items: [{
        title:'서비스 로그 조회',
        titleAlign: 'center',
        xtype: 'panel',
        layout: 'vbox',
        defaults: {
            width: '100%'
        },
        items: [{
            title: '조회조건',
            bodyPadding: 5,
            padding: '5 0 0 0',
            layout: 'fit',
            items: [{
                width: '100%',
                xtype: 'basic-toolbar'
            }]
        },{
            xtype : 'panel',
            layout : 'hbox',
            flex : 5,
            default : {
                width : '100%'
            },
            items : [{
                xtype: 'panel',
                padding : '1 1 1 1',
                defaults: {
                    width: '100%',
                },
                flex :2,
                items: [{
                    align:'center',
                    xtype: 'resultselect',
                },],
                
            },{
                flex :1,
                padding : '1 5 10 10',
                xtype : 'panel',
                title : 'Result_Data',
                height : '100%',
                border : 'solid 20px',
                items : {
                    xtype : 'textarea',
                    width : '100%',
                    height : '100%',
                    itemId : 'resultData',
                    fieldStyle: 'font-size: 20px;',
                    value : '',
                }
            }]

        },{
            // 결과 Count
            xtype: 'resultcount',
           
        }]
    }
    ]
}
);


/* 
    View
    사용자 인터페이스
*/

Ext.define('Study.view.servicelog.ResultSelect', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultselect',
        layout: 'vbox',
            // bodyPadding: 5,
            defaults: {
                width: '100%',
            },
        // flex: 5, 
        items: [{
            height: 600,
            region: 'north',
            title: 'session log',
            xtype: 'grid',
            id : 'gridId',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 2})
            ],
            flex: 4,
            bodyStyle: 'background-color: #FFFFFF;',
            viewModel :{
                type: 'resultselectviewmodel'
            },
            bind: '{resultSelectStore}',
            listeners: {
                itemclick: function(view, record) {
                    var resultData = record.get('result_data');
                    var resultDataPanel = this.up('serviceLogPanel').down('#resultData');
                    resultDataPanel.setValue(resultData);
                }
            },
            
            columns: [
                { text: 'DATE', dataIndex: 'st_time', flex: 2, editor : {xtype : 'textarea', allowBlank: false}, renderer : columnRender},
                { text: 'TID', dataIndex: 'tid', flex: 2, editor : {xtype : 'textarea', allowBlank: false}, renderer :columnRender },
                { text: 'NADID', dataIndex: 'nadid', flex: 2, editor : {xtype : 'textarea', allowBlank: false}, renderer : columnRender},
                { text: 'REQ_TYPE', dataIndex: 'req_type', flex: 1, renderer : columnRender},
                { text: 'SERVER', dataIndex: 'host_name', flex: 2, renderer : columnRender},
                { text: 'STATUS', dataIndex: 'res_status', flex: 1, renderer :columnRender  },
                { text: 'ASR_CNT', dataIndex: 'asr_conn_cnt', flex: 1, renderer :columnRender },
                { text: 'WORK_TIME', dataIndex: 'work_time', flex: 1, renderer :columnRender },
                { text: 'RESULT_DATA', dataIndex: 'result_data', flex: 1, editor : {xtype : 'textarea', allowBlank: false}, hidden : true},
                ]
            }]
      }
    )

function columnRender(value){
    return '<div style="font-size: 17px; height: 30px; line-height: 30px; text-align: center;">' + value + '</div>';
}

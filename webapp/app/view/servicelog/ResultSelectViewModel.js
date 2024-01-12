/* 
    ViewModel
    모델과 뷰 사이의 중재자 역할, 모델에는 뷰에 표시할 데이터의 필드가 표시
    데이터 객체를 관리하는 클래스, 
*/

Ext.define('Study.view.servicelog.ResultSelectViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resultselectviewmodel',
    stores: {
        resultSelectStore: {
            fields: ['date', 'tid', 'nadid', 'req_type', 'host_name','asr_conn_cnt', 'res_status', 'work_time', 'result_data' ],
            data: [] ,
        }
    }
});
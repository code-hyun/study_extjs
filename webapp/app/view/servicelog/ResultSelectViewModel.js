/* 
    ViewModel
    �𵨰� �� ������ ������ ����, �𵨿��� �信 ǥ���� �������� �ʵ尡 ǥ��
    ������ ��ü�� �����ϴ� Ŭ����, 
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
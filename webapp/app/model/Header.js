/* 
    Model Ŭ����
    �����͸� ǥ���ϱ� ���� Ʋ, �����ͺ��̽��� table�� �ϴ��� ����
    ���̺��� ó���� �����͸� �ٷ� �� �ִ� Ŭ����

*/
Ext.define('Study.model.Header', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'tid', type: 'string'},
        {name: 'vin', type: 'string'},
        {name: 'nadid', type: 'string'},
        {name: 'brand', type: 'string'},
        {name: 'vsrw_value', type: 'string'},
        {name: 'avnplatform', type: 'string'},
        {name: 'vehiclecode', type: 'string'},
        {name: 'vehiclename', type: 'string'},
    ]
});

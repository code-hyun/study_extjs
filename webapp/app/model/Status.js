/* 
    Model Ŭ����
    �����͸� ǥ���ϱ� ���� Ʋ, �����ͺ��̽��� table�� �ϴ��� ����
    ���̺��� ó���� �����͸� �ٷ� �� �ִ� Ŭ����

*/
Ext.define('Study.model.Status', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'statusValue', type: 'string'},
        {name: 'statusName', type: 'string'}
    ]
});
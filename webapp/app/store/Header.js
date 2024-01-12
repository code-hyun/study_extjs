/* 
    Store
    ���� �ν��Ͻ����� ��� �����̳�
 */
Ext.define('Study.store.Header', {
    extend: 'Ext.data.Store',
    alias: 'store.headerstore',  
    requires: ['Study.model.Header'],  // ���� ����
    model: 'Study.model.Header',  // ���� ����
    data: [
        {headerValue: 'tid', headerName: 'tid'},
        {headerValue: 'vin', headerName: 'vin'},
        {headerValue: 'brand', headerName: 'brand'},
        {headerValue: 'nadid', headerName: 'nadid'},
        {headerValue: 'vsrw_value', headerName: 'vsrw_value'},
        {headerValue: 'avnplatform', headerName: 'avnplatform'},
        {headerValue: 'vehiclecode', headerName: 'vehiclecode'},
        {headerValue: 'vehiclename', headerName: 'vehiclename'},
    ],
    autoLoad: true
});
    
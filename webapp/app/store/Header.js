/* 
    Store
    모델의 인스턴스들을 담는 컨테이너
 */
Ext.define('Study.store.Header', {
    extend: 'Ext.data.Store',
    alias: 'store.headerstore',  
    requires: ['Study.model.Header'],  // 모델을 참조
    model: 'Study.model.Header',  // 모델을 연결
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
    
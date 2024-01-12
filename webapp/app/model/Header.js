/* 
    Model 클래스
    데이터를 표현하기 위한 틀, 데이터베이스의 table과 일대일 매핑
    테이블에서 처리할 데이터를 다룰 수 있는 클래스

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

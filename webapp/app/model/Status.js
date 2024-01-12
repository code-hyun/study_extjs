/* 
    Model 클래스
    데이터를 표현하기 위한 틀, 데이터베이스의 table과 일대일 매핑
    테이블에서 처리할 데이터를 다룰 수 있는 클래스

*/
Ext.define('Study.model.Status', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'statusValue', type: 'string'},
        {name: 'statusName', type: 'string'}
    ]
});
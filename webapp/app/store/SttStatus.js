/* 
    Store
    모델의 인스턴스들을 담는 컨테이너
 */

Ext.define('Study.store.SttStatus', {
    extend: 'Ext.data.Store',
    alias: 'store.sttstore',  
    requires: ['Study.model.Status'],  // 모델을 참조
    model: 'Study.model.Status',  // 모델을 연결
    data: [
        {statusValue: '', statusName: '전체'},
        {statusValue: '00', statusName: '00'},
        {statusValue: '02', statusName: '02'},
        {statusValue: '03', statusName: '03'},
        {statusValue: '05', statusName: '05'},
        {statusValue: '98', statusName: '98'},
        {statusValue: '99', statusName: '99'}
    ],
    autoLoad: true
});

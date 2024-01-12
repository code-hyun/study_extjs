/* 
    Store
    모델의 인스턴스들을 담는 컨테이너
 */

Ext.define('Study.store.TtsStatus', {
    extend: 'Ext.data.Store',
    alias: 'store.ttsstore',  
    requires: ['Study.model.Status'],  // 모델을 참조
    model: 'Study.model.Status',  // 모델을 연결
    data: [
        {statusValue: '', statusName: '전체'},
        {statusValue: '0', statusName: '0'},
        {statusValue: '30', statusName: '30'},
        {statusValue: '60', statusName: '60'},
    ],
    autoLoad: true
});

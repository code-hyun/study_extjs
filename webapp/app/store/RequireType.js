/* 
    Store
    모델의 인스턴스들을 담는 컨테이너
 */

Ext.define('Study.store.RequireType', {
    extend: 'Ext.data.Store',
    alias: 'store.requiretype',
    requires: ['Study.model.RequireType'],
    model: 'Study.model.RequireType',
    data: [
        { type: 'STREAM', value: 'STREAM'},
        { type: 'TTS', value: 'TTS'}
    ],
    autoLoad: true
});
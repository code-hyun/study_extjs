/* 
    Store
    ���� �ν��Ͻ����� ��� �����̳�
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
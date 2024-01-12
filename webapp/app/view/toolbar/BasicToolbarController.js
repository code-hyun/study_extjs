Ext.define('Study.view.toolbar.BasicToolbarController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.toolbarController',

    updateButtonStyles: function(clickedButton, itemId) {
        var toolbar = clickedButton.up('toolbar'); // 현재 툴바
        toolbar.items.each(function(button) {
            if (button.xtype === 'button' && button.itemId !== itemId) {
                button.setStyle('background-color', 'white');
            }
        });
    
        clickedButton.setStyle('background-color', 'red');
        clickedButton.setStyle('color', 'white');
        clickedButtonId = itemId;
        console.log(clickedButtonId)
    },
    select: function(combo, record, eOpts) {
        let selectValue = combo.getValue(); 
        let toolbar = Ext.ComponentQuery.query('#toolbarId')[0];
        let status = toolbar.down('#status');
        let stt_status = status.down('#stt_status');
        let tts_status = status.down('#tts_status')
        let panel = Ext.ComponentQuery.query('resultcount')[0]; 
        let resultCount = panel.down('#count')
        resultCount.removeAll(true);

        if (selectValue == 'STREAM') {
            resultCount.add({
                xtype: 'stt_count'
            });
            stt_status.setVisible(true);
            tts_status.setVisible(false);
        } else if (selectValue == 'TTS') {
            resultCount.add({
                xtype: 'tts_count'
            });
            stt_status.setVisible(false);
            tts_status.setVisible(true);
        }
        resultCount.updateLayout(); 
    },

    timeBt : function () {
        let toolbar = Ext.ComponentQuery.query('#toolbarId')[0];
        toolbar.down('#time1').setVisible(true);
        toolbar.down('#time2').setVisible(true);
        toolbar.down('#headerComb').setVisible(false);
        toolbar.down('#header_text').setVisible(false);
        toolbar.down('#headerComb').setValue('');
        toolbar.down('#header_text').setValue('');
        toolbar.down('#status').setVisible(true);
        toolbar.down('#status_title').setVisible(true);
        getId = 'timeBt';
        console.log(getId);
    },

    headerBt : function(){
        let toolbar = Ext.ComponentQuery.query('#toolbarId')[0];
        toolbar.down('#headerComb').setVisible(true);
        toolbar.down('#header_text').setVisible(true);
        toolbar.down('#time1').setVisible(false);
        toolbar.down('#time2').setVisible(false);
        toolbar.down('#time1').setValue('00:00');
        toolbar.down('#time2').setValue('23:59');
        toolbar.down('#status').setVisible(true);
        toolbar.down('#status_title').setVisible(true);
        getId = 'headerBt';
        console.log(getId);
    },

    statusBt : function(){
        let toolbar = Ext.ComponentQuery.query('#toolbarId')[0];
        toolbar.down('#headerComb').setVisible(false);
        toolbar.down('#header_text').setVisible(false);
        toolbar.down('#headerComb').setValue('');
        toolbar.down('#header_text').setValue('');
        toolbar.down('#time1').setVisible(false);
        toolbar.down('#time2').setVisible(false);
        toolbar.down('#time1').setValue('00:00');
        toolbar.down('#time2').setValue('23:59');
        toolbar.down('#status').setVisible(false);
        toolbar.down('#status').down('#stt_status').setValue('');
        toolbar.down('#status').down('#tts_status').setValue('');
        toolbar.down('#status_title').setVisible(false);
        getId = 'statusBt'
        console.log(getId);
    },
    
    ajaxFunction : function() {
        var grid =  Ext.ComponentQuery.query('#gridId')[0] // 그리드 참조
        let toolbar = Ext.ComponentQuery.query('#toolbarId')[0];
        // Ajax 요청 로직
        try {
            var requireType = toolbar.down('#requireType').getValue();
            var status = toolbar.down('#status');
            var headerComb = toolbar.down('#headerComb').getValue();
            var header_text = toolbar.down('#header_text').getValue();
            var fromTime = toolbar.down('#time1').getValue();
            var toTime = toolbar.down('#time2').getValue();
            
            var fromTimeFormat = Ext.Date.format(fromTime, 'H:i')
            var toTimeFormat = Ext.Date.format(toTime, 'H:i')
            
            var date = toolbar.down('#date').getValue();
            var jsonData = {
                'status' : requireType == 'STREAM' ? status.down('#stt_status').getValue(): status.down('#tts_status').getValue(),
                'requireType' : requireType,
                'header' : headerComb,
                'header_text' : header_text,
                'fromTime' : fromTimeFormat,
                'toTime' : toTimeFormat,
                'date' : date,
                'clickedButtonId': clickedButtonId,
                'onlyStatus' : getId
            }
            console.log(jsonData)
            grid.getStore().removeAll();
            
            Ext.Ajax.request({
                url: 'http://localhost:3000/select',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                params :jsonData,
                success: function (response) {
                    console.log(response.responseText)
                    const resultPanel = Ext.ComponentQuery.query('resultcount')[0];
                    var responseData = Ext.decode(response.responseText);
                    if(jsonData.requireType === 'STREAM'){
                        resultPanel.down('#totalField').setValue(responseData.totalCount);
                        // [status]가 없을 경우 0 
                        resultPanel.down('#status00Field').setValue(responseData.counts['00'] || 0);
                        resultPanel.down('#status02Field').setValue(responseData.counts['02'] || 0);
                        resultPanel.down('#status03Field').setValue(responseData.counts['03'] || 0);
                        resultPanel.down('#status05Field').setValue(responseData.counts['05'] || 0);
                        resultPanel.down('#status98Field').setValue(responseData.counts['98'] || 0);
                        resultPanel.down('#status99Field').setValue(responseData.counts['99'] || 0);
                    }else{
                        resultPanel.down('#totalField').setValue(responseData.totalCount);
                        resultPanel.down('#status0Field').setValue(responseData.counts['0'] || 0);
                        resultPanel.down('#status30Field').setValue(responseData.counts['30'] || 0);
                        resultPanel.down('#status60Field').setValue(responseData.counts['60'] || 0);
                    }
                    console.log(responseData.data)
                    grid.getStore().loadData(responseData.data);
                
                },
                failure: function () {
                    Ext.Msg.alert('Error', 'Failed to load data.');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});

    

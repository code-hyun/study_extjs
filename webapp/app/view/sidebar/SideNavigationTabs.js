/* 
    View
    사용자 인터페이스
*/
Ext.define('Study.view.sidebar.SideNavigationTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'side-navigation-tabs',
    ui: 'navigation',
    titlePosition:1,
    layout: 'fit',
    tabPosition: 'left',
    header : {
        layout : 'stretchmax',
        title: {
            text : 'ccVR Tool',
            flex : 0,
        },
    },
    tabBarHeaderPosition: 1,
    tabRotation: 0,
    titleRotation:0,
    responsiveConfig : {
        tall : {
            headerPosition : 'top'
        },
        wide : {
            headerPosition : 'left'
        }
    },
    tabBar: {
        layout: {
            align: 'stretch',
            overflowHandler : 'none'
        },
        flex: 1
    },
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            // height : '80px',
            // textAlign: 'center',
            responsiveConfig : {
                wide: {
                    iconAlign : 'left',
                    textAlign : 'left',
                },
                tall : {
                    iconAlign : 'top',
                    textAlign : 'center',
                    width : 150
                }
            }
        }
    },
    items: [{
        iconCls: 'x-fa fa-search',
        title: '서비스 로그 조회',
        xtype:'serviceLogPanel',
        
    },{
        iconCls: 'x-fa fa-cog',
        title: '사이드바 테스트',
        xtype:'voicePanel'
        
    },{
        iconCls: 'x-fa fa-cog',
        title: '사이드바 테스트',
        xtype:'voicePanel'
    },{
        iconCls: 'x-fa fa-cog',
        title: '사이드바 테스트',
        xtype:'voicePanel'
    }]
});

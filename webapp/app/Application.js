// 기존의 Study.Application 정의
Ext.define('Study.Application', {
  extend: 'Ext.app.Application',
  name: 'Study',
//   stores: [/* 'Study.store.Log', *//* 'Study.store.Status' */], // 스토어 추가
//   controllers : ['Study.view.toolbar.BasicToolbarController'],
  launch: function () {
      Ext.create("Study.view.main.Main", {
          fullscreen: true 
      });
  },
  onAppUpdate: function () {
      Ext.Msg.confirm("업데이트알림", "프로그램이업데이트되었습니다", function (choice) {
          if (choice === "yes") {
              window.location.reload();
          }
      });
  }
});

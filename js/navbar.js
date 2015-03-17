 var myApp = new Framework7();
 
var $$ = Dom7;
     function myFunction(){
       
         
         var buttons = [
        {
            text: 'Question',
            onClick: function () {
                myApp.alert('Question');
            }
        },
        {
            text: 'Response',
            onClick: function () {
                myApp.alert('Response');
            }
        },
             {
            text: 'Groups',
            onClick: function () {
                myApp.alert('Groups');
            }
        },
        {
            text: 'Cancel',
            color: 'red',
            onClick: function () {
                myApp.alert('Cancel');
            }
        },
    ];
    myApp.actions(buttons);
     
     }
define(["jquery"], function($){
    function download(){
        $.ajax({
            url: "../data/index.json",
            success: function(data){
                var slideArr = data.sideNav;
                for(var i = 0; i < slideArr.length; i++){
                    var childArr = slideArr[i].child;
                    for(var j = 0; j < childArr.length; j++){
                        // alert(childArr[j].title);
                    }                
                } 
            },
            error: function(msg){
                console.log(msg);
            }
        })
    }

    return {
        download: download
    }
})
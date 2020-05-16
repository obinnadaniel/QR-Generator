$("#Generate").click(()=>{
    var api="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    var text=$("#input-text").val();
    var url=api+text;
    $("#display-qr").attr("src", url);
  });
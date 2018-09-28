window.onload=function ()
{
  var aPic= document.querySelector("#pic");
  var aNext=document.querySelector("#btn p.btn-left");
  var aPre=document.querySelector("#btn p.btn-right");
  aPre.onclick = function()
  {
    aPre_pic();
  };
  aNext.onclick = function()
  {
    aNext_pic();
  };
  function aPre_pic()
  {
    var newLeft = parseInt(aPic.style.left)-790;
    aPic.style.Left=newLeft + 'px';
  }
  function aNext_pic()
  {
    var newLeft=parseInt(aPic.style.left)+790;
    aPic.style.Left=newLeft + 'px';
  }
  setInterval(function(){
    aNext_pic();
  },500);
};

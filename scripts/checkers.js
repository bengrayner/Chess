
function onClick(hNum, vNum)
{
    alert('hNum is: ' + hNum + ', vNum is: ' +vNum);
}



$('.cell').on('click', function(){
    var $this = $(this);
    var hNum = $this.data('hNum');
    var vNum = $this.data('vNum');
    onClick(hNum, vNum);
});
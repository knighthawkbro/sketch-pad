var DEFAULT_SIZE = 16;
function createGrid(size){
    var $container = $('.container');
    for (var i = 0; i < size; i++) {
        var row = '';
            for (var j = 0; j < size; j++) {
                row += '<div class="square"></div>';
            }
        row += '<div class="clear"></div>';
        $container.append(row);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function(){
    createGrid(DEFAULT_SIZE);
    
    $('#clear').click(function(){
        //$('.hovered').removeClass('hovered');
        var size = prompt("Please enter new size for the square", 16);
        $('.container').empty();
        if (size == 0) {
            createGrid(DEFAULT_SIZE);
        } else {
            createGrid(size);
        }
        
        $('.square').hover(function(){
            $(this).addClass('hovered');
        });
    });
    
    //$('#random');
    //$('#opacity');
    
    $('.square').hover(function(){
        $(this).addClass('hovered');
    });
});
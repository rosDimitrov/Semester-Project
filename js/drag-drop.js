$(function () {

   $(".edit-button").click(function(){
        $(".outter-editor").toggle();
       
   });
    
    $(".back-to-reality").click(function(){
       $(".outter-editor").toggle();
    });   
});

//Drag Events 
$(function () {

    var square1 = 0,
        square1c2 = 0,
        square1c3 = 0,
        square1c4 = 0,
        square1c5 = 0,
        square1c6 = 0,
        square1c7 = 0,
        square1c8 = 0,
        square1c9 = 0;

    $(".draggable").draggable({
        start: function () {},
        drag: function () {
            //            console.log("dragging");
        },
        stop: function () {
            var currentlyDroppedCellLeft = Math.ceil($(this).position().left),
                currentlyDroppedCellTop = Math.ceil($(this).position().top),
                c1Left = Math.ceil($("#c1").position().left),
                c1Top = Math.ceil($("#c1").position().top),
                c2Left = Math.ceil($("#c2").position().left),
                c2Top = Math.ceil($("#c2").position().top),
                c3Left = Math.ceil($("#c3").position().left),
                c3Top = Math.ceil($("#c3").position().top),
                c4Left = Math.ceil($("#c4").position().left),
                c4Top = Math.ceil($("#c4").position().top),
                c5Left = Math.ceil($("#c5").position().left),
                c5Top = Math.ceil($("#c5").position().top),
                c6Left = Math.ceil($("#c6").position().left),
                c6Top = Math.ceil($("#c6").position().top),
                c7Left = Math.ceil($("#c7").position().left),
                c7Top = Math.ceil($("#c7").position().top),
                c8Left = Math.ceil($("#c8").position().left),
                c8Top = Math.ceil($("#c8").position().top),
                c9Left = Math.ceil($("#c9").position().left),
                c9Top = Math.ceil($("#c9").position().top);


            if ((currentlyDroppedCellLeft - c1Left + 1 == 0 || currentlyDroppedCellLeft - c1Left == 0 || currentlyDroppedCellLeft - c1Left - 1 == 0) && (currentlyDroppedCellTop - c1Top == 0 || currentlyDroppedCellTop - c1Top - 1 == 0 || currentlyDroppedCellTop - c1Top + 1 == 0)) {
//                square1=$(this).css("background-image");
                square1 = (this.id); // or get the background image;       
                alert(square1);
//                alert("We have a match c1 " + square1);
            } 
            else if ((currentlyDroppedCellLeft - c2Left + 1 == 0 || currentlyDroppedCellLeft - c2Left == 0 || currentlyDroppedCellLeft - c2Left - 1 == 0) && (currentlyDroppedCellTop - c2Top == 0 || currentlyDroppedCellTop - c2Top - 1 == 0 || currentlyDroppedCellTop - c2Top + 1 == 0)) {
                alert("We have a match c2");
                alert("SQuare 1 " + square1);
            } 
            else if ((currentlyDroppedCellLeft - c3Left + 1 == 0 || currentlyDroppedCellLeft - c3Left == 0 || currentlyDroppedCellLeft - c3Left - 1 == 0) && (currentlyDroppedCellTop - c3Top == 0 || currentlyDroppedCellTop - c3Top - 1 == 0 || currentlyDroppedCellTop - c3Top + 1 == 0)) {
                alert("We have a match c3");
            } else if ((currentlyDroppedCellLeft - c4Left + 1 == 0 || currentlyDroppedCellLeft - c4Left == 0 || currentlyDroppedCellLeft - c4Left - 1 == 0) && (currentlyDroppedCellTop - c4Top == 0 || currentlyDroppedCellTop - c4Top - 1 == 0 || currentlyDroppedCellTop - c4Top + 1 == 0)) {
                alert("We have a match c4");
            } else if ((currentlyDroppedCellLeft - c5Left + 1 == 0 || currentlyDroppedCellLeft - c5Left == 0 || currentlyDroppedCellLeft - c5Left - 1 == 0) && (currentlyDroppedCellTop - c5Top == 0 || currentlyDroppedCellTop - c5Top - 1 == 0 || currentlyDroppedCellTop - c5Top + 1 == 0)) {
                alert("We have a match c5");
            } else if ((currentlyDroppedCellLeft - c6Left + 1 == 0 || currentlyDroppedCellLeft - c6Left == 0 || currentlyDroppedCellLeft - c6Left - 1 == 0) && (currentlyDroppedCellTop - c6Top == 0 || currentlyDroppedCellTop - c6Top - 1 == 0 || currentlyDroppedCellTop - c6Top + 1 == 0)) {
                alert("We have a match c6");
            } else if ((currentlyDroppedCellLeft - c7Left + 1 == 0 || currentlyDroppedCellLeft - c7Left == 0 || currentlyDroppedCellLeft - c7Left - 1 == 0) && (currentlyDroppedCellTop - c7Top == 0 || currentlyDroppedCellTop - c7Top - 1 == 0 || currentlyDroppedCellTop - c7Top + 1 == 0)) {
                alert("We have a match c7");
            } else if ((currentlyDroppedCellLeft - c8Left + 1 == 0 || currentlyDroppedCellLeft - c8Left == 0 || currentlyDroppedCellLeft - c8Left - 1 == 0) && (currentlyDroppedCellTop - c8Top == 0 || currentlyDroppedCellTop - c8Top - 1 == 0 || currentlyDroppedCellTop - c8Top + 1 == 0)) {
                alert("We have a match c8");
            } else if ((currentlyDroppedCellLeft - c9Left + 1 == 0 || currentlyDroppedCellLeft - c9Left == 0 || currentlyDroppedCellLeft - c9Left - 1 == 0) && (currentlyDroppedCellTop - c9Top == 0 || currentlyDroppedCellTop - c9Top - 1 == 0 || currentlyDroppedCellTop - c9Top + 1 == 0)) {
                alert("We have a match c9");
            }




            //            alert(aTop);
            //            alert(bTop);
            console.log("stopped");
            //            console.log($(this).position().left);
            //            console.log($(this).attr('id'));
            //                    if($(this).position().left>20){
            //                            $(this).draggable({ revert: true });
            //
            //                    }
        }
    });
});



//Draggable
$(".draggable").draggable({
    snap: ".grid-cell",
    snapMode: "inner",
    //helper: "clone",
    opacity: 0.7,
    cursor: "move",
    cursorAt: {
        top: 50,
        left: 50
    },
    containment: "#editor-frame",
    scroll: false,
});

//Dropable
//Dropable
$(".droppable").droppable({
    activeClass: "square-drag",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
        $(this)
            .addClass("ui-state-highlight");
    }
});
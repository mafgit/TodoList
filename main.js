$(document).ready(function(){

    $("#navadd").click(function(){
    if($("#navadd").text() == "Add") {
        $("#todos").slideUp();
        $("#addtodo").slideDown();
        $("#navadd").text("Back");
    }

    else {
        $("#addtodo").slideUp();
        $("#addtodo").fadeOut();
        $("#todos").slideDown();
        $("#navadd").text("Add");
    }
    });
    var idno = 0;

    $('#addtodo button').click(function(){
        var add = true;
        var heading = document.getElementById("heading");
        var description = document.getElementById("description");
        var time = document.getElementById("time");
        var priority = document.getElementById("priority");

        var arr = [heading, description, time, priority];
        $.each(arr, function(i, data){
            if (data.value == "") {
                $(data).css('border-color','orangered');
                
                add = false;
            }
        })

        if (add == true) {
            idno++;
            ($('<div class="todo notdone" id="todo_'+ idno +'"><div/>')).appendTo($('#todos'));
            ($('<div class="options"><div/>')).appendTo($('.todo:last'));
            ($('<div class="details"><div/>')).appendTo($('.todo:last'));
            ($('<input type="checkbox" id="check_'+idno+'" class="check">')).appendTo($('.todo:last .options'));
            ($('<span class="remove" id="del_'+ idno +'"><i class="fas fa-trash-alt"></i></span>')).appendTo($('.todo:last .options'));
            ($('<h2>'+ heading.value +'</h2>')).appendTo($('.todo:last .details'));
            ($('<p>' + description.value + '</p>')).appendTo($('.todo:last .details'));
            ($('<p class="time">' + time.value + '</p>')).appendTo($('.todo:last'));

            $("#addtodo").slideUp();
            $("#todos").slideDown();
            $("#navadd").text("Add");

            if (priority.value == "High") {
                $('.todo:last').addClass("high");
                $('.todo:last').css({'background-color': 'orangered', 'color': 'white'});
            }
            else if (priority.value == "Low") {
                $('.todo:last').addClass("low");
                $('.todo:last').css({'background-color': 'rgba(5, 138, 5, 0.767)', 'color': 'white'});
            }
            else if (priority.value == "Medium") {
                $('.todo:last').addClass("medium");
            }
        }

    });

    $('#todos').on('click', '.remove', function(){
        var delIndex = this.id.split("_")[1];
        $('#todo_' + delIndex).slideUp();
    });

    $('#todos').on('click', '.check', function(){
        var checkIndex = this.id.split("_")[1];
        $('#todo_' + checkIndex).toggleClass('done');
        $('#todo_' + checkIndex).toggleClass('notdone');
    });

    $('#filter').click(function(){
        $('#filterdiv').slideToggle();
    });

    $('#filterpage').change(function(){
        if ($('#filterpage').val() == "High") {
            $('.high').fadeIn();
            $('.medium, .low').fadeOut();
        }
        else if ($('#filterpage').val() == "Medium") {
            $('.medium').fadeIn();
            $('.high, .low').fadeOut();
        }
        else if ($('#filterpage').val() == "Low") {
            $('.low').fadeIn();
            $('.medium, .high').fadeOut();
        }
        else if ($('#filterpage').val() == "No Filter") {
            $('.medium, .low, .high').fadeIn();
        }
        else if ($('#filterpage').val() == "Done") {
            $('.medium, .low, .high').fadeOut();
            $('.done').fadeIn();
        }
        else if ($('#filterpage').val() == "Not Done") {
            $('.done').fadeOut();
            $('.notdone').fadeIn();
        }
        
    });
})


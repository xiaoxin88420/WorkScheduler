//put the current time on the header
let timenow = moment().format('llll')
document.getElementById('currentDay').append(timenow)

$(document).ready(function (){

    $(".saveBtn").click(function() {
        let value = $(this).siblings(".description").val()
        console.log(value)
        let time = $(this).parents().attr("id")
        console.log(time)

        localStorage.setItem(time, value)

    for (let i=9; i<18; i++){
        $('#${i}.description').val(localStorage.getItem(i))
    }        

    // $("#9 .description").val(localStorage.getItem("9"))
    // $("#10 .description").val(localStorage.getItem("10"))
    // $("#11 .description").val(localStorage.getItem("11"))
    // $("#12 .description").val(localStorage.getItem("12"))
    // $("#13 .description").val(localStorage.getItem("13"))
    // $("#14 .description").val(localStorage.getItem("14"))
    // $("#15 .description").val(localStorage.getItem("15"))
    // $("#16 .description").val(localStorage.getItem("16"))
    // $("#17 .description").val(localStorage.getItem("17"))

    })


    let currentHour = parseInt(moment().format("H"))

    $(".time-block").each(function () {
       let timeBlock = parseInt($(this).attr("id"))
        if(timeBlock === currentHour){
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }

    })


})



//capture the current hour from moment.js
// let currentHour = parseInt(moment().format('H'))
// $(document).ready( function (){

//     $('.saveBtn').click(function(){
//         let value = $(this).siblings('.description').val()
//         console.log(value)
//         let time = $(this).parents().attr('id')
//         console.log(time)
//         localStorage.setItem(time,value)
//     })
    

    //If the upper sentence doesn't work... I'll use a dummy method...
    // $("#9 .description").val(localStorage.getItem("9"))
    // $("#10 .description").val(localStorage.getItem("10"))
    // $("#11 .description").val(localStorage.getItem("11"))
    // $("#12 .description").val(localStorage.getItem("12"))
    // $("#13 .description").val(localStorage.getItem("13"))
    // $("#14 .description").val(localStorage.getItem("14"))
    // $("#15 .description").val(localStorage.getItem("15"))
    // $("#16 .description").val(localStorage.getItem("16"))
    // $("#17 .description").val(localStorage.getItem("17"))

    //set current hour color to red and so on
//     $('.time-block').each(function() {
//         let color = parseInt($(this).attr('id'))
//             if(color === currentHour) {
//                 $(this).addClass('present')
//             }   else if (color < currentHour) {
//                 $(this).addClass('past')
//             }   else {
//                 $(this).addClass('future')
//             }
//     })  

// })











// for (let i=0; i<9; i++) {
//     let addClass = document.getElementsByClassName('col-8')[i]
//     let hour = parseInt(addClass.id)
//     if ( hour === currentHour){
//         addClass.classList.add('present')
//     } else if ( hour < currentHour) {
//         addClass.classList.add('past')
//     } else {
//         addClass.classList.add('future')
//     }
// }



//put the current time on the header
let timenow = moment().format('llll')
document.getElementById('currentDay').append(timenow)

//set current hour color to red and so on
// let currentHour = parseInt(moment().format('H'))
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

$(document).ready( function (){

    $('.saveBtn').click(function(){
        let value = $(this).siblings('.description').val()
        let time = $(this).parent().attr('id')
        localStorage.setItem(time,value)
    })





})
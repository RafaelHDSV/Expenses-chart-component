let columnDays = document.querySelectorAll('.column')
let amountDays = document.querySelectorAll('.amount')
let biggest = 0

for (let i = 0; i < columnDays.length; i++) {
    columnDays[i].addEventListener('mouseover', () => {
        amountDays[i].style.display = 'flex'
    })

    columnDays[i].addEventListener('mouseout', () => {
        amountDays[i].style.display = 'none'
    })
}

fetch('data.json').then((response) => {
    response.json().then((days) => {
        for (let i = 0; i < amountDays.length; i++) {
            amountDays[i].innerHTML = `$ ${days[i].amount}`
            columnDays[i].style.height = `${(days[i].amount) / 5}rem`
        }
    })
})
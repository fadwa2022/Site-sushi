/* creat table */
let prix = [8.00, 5.00, 6.00, 10.96, 11.96,10.60,10.96,5.96,7.60];
let nom =["GYOZA – Raviolis grillés(6p)","Nêms aux poulet(4p)","Nêms aux crevettes(4p)","GYOZA – Raviolis grillés(6p)","Nêms aux poulet(4p)","Nêms aux crevettes(4p)","GYOZA – Raviolis grillés(6p)","Nêms aux poulet(4p)","Nêms aux crevettes(4p)"];
totalPrice = 0
let prixButtons = document.querySelectorAll('.prix');
prixButtons.forEach(function(button) {
    button.addEventListener('click', function(e){
        e.preventDefault();
        let id = button.getAttribute('id');
        let span = document.createElement('span')
        let name = document.createElement('div')
        let price = document.createElement('div')
        price.style.marginLeft = '100px'
        name.textContent = nom[id]
        price.textContent = prix[id].toFixed(2) + '$'
        span.append(name, price)
        span.classList.add('surimi')
        let total = document.querySelector('.totalPrice')
        let mamenu = document.querySelector('.mamenu')
        console.log(total);
        mamenu.append(span)
        let totalElement = total.querySelector('.price')
        totalPrice += prix[id]
        totalElement.textContent = totalPrice.toFixed(2)+ '$'

    })
})
function myFunction(){
    alert("commande confirmée")
}





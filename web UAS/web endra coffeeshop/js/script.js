let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function pesankopi()
{
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nohp = document.getElementById("phone").value;
    var namakopi = document.getElementById("coffee").value;
    var alamat = document.getElementById("alamat").value;
    if(validation()){
        document.getElementById("form_id").submit();
        alert("Pesanan anda telah kami terima, silahkan tunggu konfirmasi dari kami");
    }
}

function validation()
{
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nohp = document.getElementById("phone").value;
    var namakopi = document.getElementById("coffee").value;
    var alamat = document.getElementById("alamat").value;
    if(nama === '' || email === '' || nohp === '' || namakopi === '' || alamat === '')
    {
        alert("Semua data harus diisi");
        return false;
    }
    else{
        return true;
    }
}
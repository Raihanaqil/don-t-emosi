
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = 'hih.html';
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "https://api.whatsapp.com/send?phone=6287812185208&text=Thankyou%20(isi%20pesan%20mu)";
    },82000)
}


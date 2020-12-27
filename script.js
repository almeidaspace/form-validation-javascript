function validate() {
    var name = document.getElementById('name');
    var subject = document.getElementById('subject');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var pesan_error = document.getElementById('pesan_error');

    // var text;

    if (name.value.length < 5) {
        name.style.borderColor = "red";
        pesan_error.style.padding = "8px";
        pesan_error.innerHTML = "Masukkan Nama dengan benar";
        return false;
    } else if (subject.value.length < 5) {
        subject.style.borderColor = "red";
        pesan_error.style.padding = "8px";
        pesan_error.innerHTML = "Masukkan Subject dengan benar";
        return false;
    } else if (phone.value.length < 10) {
        subject.style.borderColor = "red";
        pesan_error.style.padding = "8px";
        pesan_error.innerHTML = "Masukkan Nomor Telepon dengan benar";
        return false;
    } else if (email.value.indexOf("@") == -1 || email.value.length < 5) {
        subject.style.borderColor = "red";
        pesan_error.style.padding = "8px";
        pesan_error.innerHTML = "Masukkan Email yg valid";
        return false;
    } else if(message.value.length < 30) {
        message.style.borderColor = "red";
        pesan_error.style.padding = "8px";
        pesan_error.innerHTML = "Masukkan pesan anda dengan benar";
        return false;
    }
    alert("form sukses");
    return true;
}
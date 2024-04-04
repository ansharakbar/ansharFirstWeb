function submitHandler() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let massage = document.getElementById("massage").value;
    let subject = document.getElementById("subject").value;

    if (name =="") {
        return alert ("please entered your name!");
    }
    else if (email =="") {
        return alert ("please entered your email!");
    }else if (phone =="") {
        return alert ("please entered your phone number!");
    }else if (massage =="") {
        return alert ("please entered your massage!");
    }
    else if (subject === "none") {
         return alert("Please select a subject!");
    }

    const data = {
        name, email, phone, subject, massage
    }

    const yourEmail = "ansharakbar72@gmail.com"

    let a = document.createElement("a");
    a.href = ` https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${massage}`
    a.click();

    console.log(data)
}

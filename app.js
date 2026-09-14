let form = document.querySelector("form");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let myForm = new FormData(e.target)

//User Age ucun olan hisse
    console.log(myForm.get("user-age"));

//Mail ucun olan hisse
    if (!myForm.get("user-email").includes("@"))
        console.log("Mail yazilis yanlisdir!");
    else
        console.log(myForm.get("user-email"));

//Password ucun olan hisse
    if (myForm.get("user-password").length > 5)
        console.log("Giris Icaze Verildi!");
    else 
        console.log("Giris Qadagandir!");
})









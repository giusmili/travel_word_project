document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    //objet
    const User_travel = {
        btn_submit: document.querySelector('input[type="submit"]'),
        date_input_from: document.getElementsByName("from"),
        date_input_to: document.getElementsByName("to")
    };

    //tester 
    User_travel.btn_submit.addEventListener("click", e => {
        e.preventDefault();
        User_travel.date_input_from[0].value && User_travel.date_input_to[0].value ? Swal.fire('Good job!', 'You clicked the button!', 'success') : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    });
});
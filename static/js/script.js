// setTimeout(function() {
//             location.reload();
//         }, 5000);

//Profile photo show
document.addEventListener('DOMContentLoaded',function(){
    const imageUpload = document.getElementById('inputGroupFile02');
    const profileImage = document.getElementById('profile-image');

    imageUpload.addEventListener('change', function(e){
        const file = e.target.files [0];
        if (file){
            const reader = new FileReader();
            reader.onload = function(e){
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});

//reveal password script
document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const checkbox = document.getElementById('flexCheckDefault');

    checkbox.addEventListener('change', function(){
        if (checkbox.checked){
            passwordField.type = 'text';
            confirmPasswordField.type = 'text';
        }else{
            passwordField.type = 'password';
            confirmPasswordField.type = 'password'
        }
    });
});
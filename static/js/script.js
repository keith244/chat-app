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

document.addEventListener ('DOMContentLoaded', () =>{

    const fileInput = document.getElementById('inputGroupFile02');
    const profileContainer = document.querySelector('.profile-image');

    fileInput.addEventListener('change', function(){
        let pic = document.getElementById('profile-image');

        if (this.files && this.files[0]){

            profileContainer.classList.add ('loading');
            const reader = new FileReader();

            reader.onload = function(e){
                pic.src = e.target.result;
                pic.style.display = 'block';

                pic.onload = function(){
                    profileContainer.classList.remove('loading');

                    setTimeout(()=> {
                        profileContainer.classList.add('visible');
                    },50);
                }
            }

            reader.readAsDataURL (this.files[0]);
        } else {
            pic.classList.remove('visible');
            setTimeout(() => {
                pic.style.display = 'none';
            }, 500); 
        }
    });
});


// function profilePic() {
//     let pic = document.getElementById('profile-image');
//     let input = document.getElementById('inputGroupFile02').addEventListener('change', profilePic);
    
//     if (input.files && input.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pic.src = e.target.result; 
//             pic.style.display = 'block'; 
//             console.log('Success')
//         }
//         reader.readAsDataURL(input.files[0]); 
//     } else {
//         pic.style.display = 'none'; 
//         console.log('hey there')
//     }
// }
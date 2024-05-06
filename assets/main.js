/* increasing Number  */
let nums = document.querySelectorAll('.num');
let increasingNumbersSection = document.querySelector('.increasingNumbers');
let welcomeToINNERSection = document.querySelector('.welcomeToINNER');
let servicesSection = document.getElementById('ourService').children;

console.log(servicesSection);
let increasingStarted = false;

window.onscroll = function () {
    if (increasingStarted == false && window.scrollY > increasingNumbersSection.offsetTop + 400) {
        increasingStarted = true;
        nums.forEach((num) => {
            num.textContent = 0;

            let updateNums = () => setTimeout(() => {
                let newValue = num.getAttribute('data-val');
                let currentValue = +(parseInt(num.textContent));
                let increment = newValue / 50;
                if (currentValue < newValue) {
                    num.textContent = Math.ceil(currentValue + increment) + " +";
                    setTimeout(updateNums, 20);
                }
            }, 1);

            updateNums();

        });//forEach

    }//if
    /*  animation for welcomeToINNER section */
    if (window.scrollY > welcomeToINNERSection.offsetTop + 700) {
        welcomeToINNERSection.style.animation = 'moveToLeft 1s';
    }
}
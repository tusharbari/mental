
    function toggleLoginForm() {
        var loginForm = document.getElementById("login-form");
        var signUpForm = document.getElementById("signup-form");

        if (loginForm.style.display === "none" || !loginForm.style.display) {
            loginForm.style.display = "block";
            signUpForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            signUpForm.style.display = "block";
        }
        document.addEventListener("DOMContentLoaded", function () {
        var navLinks = document.querySelectorAll("nav ul li a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                var targetId = this.getAttribute("href").substring(1);
                var targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: "smooth" });
            });
        });
    });
    }
    function openCounselingPage() {
        // Replace 'counseling.html' with the URL of your counseling page
        window.open('indextest.html', '_blank');
    }

    function openSupportGroupsPage() {
        // Replace 'supportgroups.html' with the URL of your support groups page
        window.open('supportgroups.html', '_blank');
    }

    function openSelfCareResourcesPage() {
        // Replace 'selfcareresources.html' with the URL of your self-care resources page
        window.open('selfcareresources.html', '_blank');
    }
// login button part
$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})
const checkboxes = document.querySelectorAll('.customCheckBoxInput');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Get the associated link's href attribute
        const linkHref = this.nextElementSibling.querySelector('a').getAttribute('href');
        
        // Open the link in a new tab/window
        if (this.checked) {
            window.open(linkHref, '_blank');
        }
    });
});

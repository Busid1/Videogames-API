//Shows and disable user login form
const loginContainer = document.querySelector(".userLogin-container");
const closeLogin = document.getElementById("close-icon");
const userIcon = document.getElementById("user-icon");
const body = document.querySelector("body");

userIcon.onclick = () => {
    loginContainer.style.display = "block";
    body.style.overflow = "hidden";
}

closeLogin.onclick = () => {
    loginContainer.style.display = "none"
    body.style.overflow = "visible";
}

// Shows search-input when its clicked search-icon
const searchIcon = document.getElementById("search-icon");
const closeBar = document.getElementById("close-searchBar");
const searchBarBox = document.querySelector(".searchBar-box");
const searchBar = document.querySelector(".search-bar");
const navBarItem = document.querySelectorAll(".nav-item");

searchIcon.onclick = () => {
    searchBar.style.opacity = 1;
    searchBarBox.style.width = "300px";
    searchBar.style.width = "100%";
    searchIcon.style.display = "none";
    navBarItem.forEach(li => {
        li.style.display = "none";
    });
    closeBar.style.opacity = 1;
    searchBar.focus();
}

closeBar.onclick = () => {
    searchBar.style.opacity = 0;
    searchBar.style.width = "0";
    searchIcon.style.display = "block";
    setTimeout(() => {
        navBarItem.forEach(li => {
            li.style.display = "block";
        });
        closeBar.style.opacity = 0;
        searchBarBox.style.width = "40px";
    }, 200)
}

//Adds a title to the 'info' button
let arr = [];
let gameTitle = document.querySelectorAll(".card-title").forEach(title => {
    arr.push(title.textContent)
});

let infoBtn = document.querySelectorAll("#info-btn");
infoBtn.forEach((title, index) => {
    title.setAttribute("data-bs-title", arr[index]);
});

//Adds content to the 'info' button
let lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, eveniet quia eius asperiores culpa a ullam autem in totam veniam molestias dicta debitis. Nulla hic sunt enim dignissimos eligendi deleniti!"
infoBtn.forEach((content) => {
    content.setAttribute("data-bs-content", lorem);
})

let pushCart = document.getElementById("push-cart");
let addCartAlert = document.getElementById("addCart-game-alert");

let cartBtn = document.querySelectorAll("#cart-btn").forEach((cart, i) => {
    cart.setAttribute("data-id", i);
    cart.onclick = () => {
        //Adds +1 to cart count when the 'add to cart' button is clicked
        pushCart.innerText++;
        let cartId = cart.getAttribute("data-id")
        //Shows an alert message when the 'add to cart' button is clicked
        addCartAlert.style.display = "flex";
        setTimeout(function () {
            cart.style.display = "none";
        }, 750);

        document.querySelectorAll("#delete-btn").forEach((delet, i) => {
            delet.setAttribute("data-id", i);
            let deletId = delet.getAttribute("data-id")
            if (cartId === deletId) {
                setTimeout(function () {
                    delet.style.display = "block";
                }, 750);
                delet.onclick = () => {
                    cart.style.display = "block";
                    delet.style.display = "none";
                    pushCart.innerText--;
                }
            }
        })

        setTimeout(function () {
            addCartAlert.style.display = "none";
        }, 2000)
    }
});


//Shows a cookie window on page reload
let cookiesModal = document.getElementById("cookies-modal");
let closeCookies = document.getElementById("close-cookies");
let acceptCookies = document.getElementById("accept-cookies");
let jumpscare = document.getElementById("jumpscare");

// window.addEventListener("load", ()=>{
//     cookiesModal.style.display = "block";
// })


//Closes the cookie window when the 'close' button is clicked
closeCookies.onclick = () => {
    cookiesModal.style.display = "none";
    jumpscare.style.display = "block";
    setTimeout(() => {
        jumpscare.style.display = "none";
    }, 2000);
}


//Closes the cookie window when the 'accept' button is clicked
acceptCookies.onclick = () => {
    cookiesModal.style.display = "none";
}


//Bootstrap code to work the popover correctly
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
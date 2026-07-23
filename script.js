const header = document.getElementById("header");

header.innerHTML = `

<div class="top-header">

    <div class="logo">

        <a href="index.html">
            <img src="${website.logo.image}" alt="${website.logo.alt}">
        </a>

    </div>

    <div class="right-menu">

        <a href="${website.headerButtons.notification.link}" class="icon">
            ${website.headerButtons.notification.text}
        </a>

        <a href="${website.headerButtons.login.link}" class="icon">
            ${website.headerButtons.login.text}
        </a>

        <div class="language">

            <button>EN</button>
            <button>AL</button>

        </div>

    </div>

</div>

`;

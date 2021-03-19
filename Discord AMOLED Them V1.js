// ==UserScript==
// @name Discord AMOLED Theme
// @version 1.0.0
// @author JustTheo
// @namespace http://tampermonkey.net/
// @run-at document-start
// @include https://discord.com/*
// @description dark theme
// ==/UserScript==

(function() {
let css = `


.appMount-3lHmkl {
    background-image: url(https://media.discordapp.net/attachments/810707389962911804/822484547433660476/Black_Box.png?width=1168&height=701);
    background-color: rgba(0, 0, 0, .5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.theme-dark {
    --background-primary: rgba(0, 0, 0, .5);
    --background-secondary: rgba(0, 0, 0, .5);
    --background-tertiary: rgba(0, 0, 0, .5);
    --deprecated-panel-background: rgba(0, 0, 0, .5);
    --channeltextarea-background: rgba(0, 0, 0, .5);
    --background-secondary-alt: rgba(0, 0, 0, .5);

}
.theme-dark .container-1D34oG {
    background-color: rgba(0, 0, 0, .5)
}
.theme-dark .inset-3sAvek {
    background-color: rgba(0, 0, 0, .5);
}
.theme-dark .outer-1AjyKL.active-1xchHY, .theme-dark .outer-1AjyKL.interactive-3B9GmY:hover {
    background-color: rgba(0, 0, 0, .5)
}
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
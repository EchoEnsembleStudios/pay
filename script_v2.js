/* ==========================================================
   EchoPay Premium v1
   Echo Ensemble Studios
========================================================== */

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

async function copyText(text) {

    try {

        if (navigator.clipboard && window.isSecureContext) {

            await navigator.clipboard.writeText(text);

        } else {

            const textArea = document.createElement("textarea");

            textArea.value = text;

            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";

            document.body.appendChild(textArea);

            textArea.focus();
            textArea.select();

            document.execCommand("copy");

            textArea.remove();

        }

        showToast("✓ Copied to clipboard");

    } catch (err) {

        showToast("Unable to copy");

    }

}

document.addEventListener("DOMContentLoaded", () => {

    //----------------------------------------------------
    // Copy Cards Animation
    //----------------------------------------------------

    const copyCards = document.querySelectorAll(".copy-card");

    copyCards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(0.98)";

            setTimeout(() => {

                card.style.transform = "";

            }, 120);

        });

    });

    //----------------------------------------------------
    // Button Touch Effect
    //----------------------------------------------------

    const buttons = document.querySelectorAll(".pay-button, .contact-btn");

    buttons.forEach(btn => {

        btn.addEventListener("touchstart", () => {

            btn.style.opacity = "0.9";

        });

        btn.addEventListener("touchend", () => {

            btn.style.opacity = "1";

        });

    });

    //----------------------------------------------------
    // Logo Fade Animation
    //----------------------------------------------------

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.style.opacity = "0";
        logo.style.transform = "translateY(-15px)";

        setTimeout(() => {

            logo.style.transition = "all .7s ease";

            logo.style.opacity = "1";
            logo.style.transform = "translateY(0px)";

        }, 150);

    }

    //----------------------------------------------------
    // Fade-in Cards
    //----------------------------------------------------

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "all .6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, 250 + (index * 180));

    });

    //----------------------------------------------------
    // QR Zoom
    //----------------------------------------------------

    const qr = document.querySelector(".qr-image");

    if (qr) {

        qr.addEventListener("click", () => {

            qr.classList.toggle("zoom");

        });

    }

});
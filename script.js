// Initialize Lucide Icons

    lucide.createIcons();

    // Mobile Menu Toggle

    const menuBtn = document.getElementById('mobile-menu-btn');

    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {

      mobileMenu.classList.toggle('hidden');

    });

    // Close mobile menu on click link

    document.querySelectorAll('#mobile-menu a').forEach(link => {

      link.addEventListener('click', () => {

        mobileMenu.classList.add('hidden');

      });

    });

    // Copy to Clipboard Function

    function copyToClipboard(text) {

      navigator.clipboard.writeText(text).then(() => {

        const toast = document.getElementById('toast');

        const toastText = document.getElementById('toast-text');

        toastText.innerText = \`คัดลอก: ${text}\`;

        toast.classList.remove('translate-y-24', 'opacity-0');

        setTimeout(() => {

          toast.classList.add('translate-y-24', 'opacity-0');

        }, 2500);

      });

    }

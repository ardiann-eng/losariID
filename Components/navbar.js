class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: #1e3a8a;
                    color: white;
                    padding: 1.5rem 2rem;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo img {
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                }
.nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: opacity 0.3s;
                }
                .nav-links a:hover {
                    opacity: 0.8;
                }
                .contact-btn {
                    background-color: #3b82f6;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    transition: background-color 0.3s;
                }
                .contact-btn:hover {
                    background-color: #2563eb;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: #1e3a8a;
                        flex-direction: column;
                        padding: 1rem 2rem;
                        gap: 1rem;
                    }
                    .nav-links.active {
                        display: flex;
                    }
                    .contact-btn {
                        width: 100%;
                        text-align: center;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="/" class="logo flex items-center gap-2">
                        <img src="logo.png" alt="Losari Digital Logo" class="h-8 w-8">
                        <span>LOSARI DIGITAL</span>
                    </a>
<button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                    <div class="nav-links">
                        <a href="https://apps.losari.or.id/">Software</a>
                        <a href="#mentorship">Konsultasi</a>
                        <a href="#mentor">Mentor</a>
                        <a href="#faq">FAQ</a>
                        <a href="https://losari.or.id/mod/page/view.php?id=80" class="contact-btn">Hubungi Admin</a>
                    </div>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle
        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            mobileBtn.innerHTML = isOpen ? '<i data-feather="x"></i>' : '<i data-feather="menu"></i>';
            feather.replace();
        });

        this.shadowRoot.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                const el = document.querySelector(target);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    try { history.pushState(null, '', target); } catch {}
                }
                navLinks.classList.remove('active');
                mobileBtn.innerHTML = '<i data-feather="menu"></i>';
                feather.replace();
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);

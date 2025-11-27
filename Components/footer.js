class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1e3a8a;
                    color: white;
                    padding: 3rem 2rem;
                    text-align: center;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    text-align: left;
                }
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .footer-logo img {
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                }
.footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .footer-links a {
                    color: #93c5fd;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-links a:hover {
                    color: white;
                }
                .footer-bottom {
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #3b82f6;
                    text-align: center;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-top: 1rem;
                }
                .social-links a {
                    color: white;
                    background-color: rgba(255, 255, 255, 0.1);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s, transform 0.3s;
                }
                .social-links a:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                        text-align: center;
                        gap: 1.5rem;
                    }
                    .footer-links {
                        align-items: center;
                    }
                    footer {
                        padding: 2rem 1rem;
                    }
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div>
                        <div class="footer-logo flex items-center gap-2">
                            <img src="logo.png" alt="Losari Digital Logo" class="h-8 w-8">
                            <span>LOSARI DIGITAL</span>
                        </div>
<p>Solusi statistik akademik untuk mahasiswa dan peneliti.</p>
                        <div class="social-links mt-4">
                            <a href="https://instagram.com" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-2v9H10V9h4"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2c1.71.42 8.59.42 8.59.42s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"></path>
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                                </svg>
                            </a>
                            <a href="https://wa.me/6285395621456" aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16.54 7.46a7.5 7.5 0 1 0-12.53 8.16L3 21l5.54-1a7.5 7.5 0 0 0 8-12.54z"></path>
                                    <path d="M7 10.2c.5 1 1.6 2.2 2.8 2.8l.7-.7c.2-.2.6-.3.8-.1l1.7.8c.2.1.4.4.3.7l-.4 1.4c-.1.3-.4.5-.7.6-.9.2-2.4-.1-3.8-1.5-1.3-1.3-1.7-2.8-1.5-3.8.1-.3.3-.6.6-.7l1.4-.4c.3-.1.6.1.7.3l.3.7z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Produk</h3>
                        <div class="footer-links">
                            <a href="losari.or.id">Statistik Dasar</a>
                            <a href="losari.or.id">SEM-PLS</a>
                            <a href="losari.or.id">Analisis Kualitatif</a>
                            <a href="losari.or.id">Paket Lengkap</a>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Layanan</h3>
                        <div class="footer-links">
                            <a href="#">Konsultasi Statistik</a>
                            <a href="#">Bimbingan Skripsi</a>
                            <a href="#">Review Jurnal</a>
                            <a href="https://losari.or.id/course/index.php?categoryid=11">Workshop</a>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Perusahaan</h3>
                        <div class="footer-links">
                            <a href="#">Tentang Kami</a>
                            <a href="#">Kebijakan Privasi</a>
                            <a href="#">Syarat & Ketentuan</a>
                            <a href="#">Karir</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Losari Digital. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);

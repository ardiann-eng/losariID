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
                    transition: background-color 0.3s;
                }
                .social-links a:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .footer-links {
                        align-items: center;
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
                            <a href="#"><i data-feather="instagram"></i></a>
                            <a href="#"><i data-feather="facebook"></i></a>
                            <a href="#"><i data-feather="linkedin"></i></a>
                            <a href="#"><i data-feather="youtube"></i></a>
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

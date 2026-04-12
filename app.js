<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Collection | Orvexa Studio</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@200;300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="style.css">

    <style>
        /* Specific Styles for Services Page */
        .services-hero {
            height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(to bottom, rgba(13,13,13,0.8), var(--primary)),
                        url('https://images.unsplash.com/photo-1512690196222-7c7d299002e6?auto=format&fit=crop&q=80');
            background-size: cover;
            background-position: center;
        }

        .service-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
            margin-top: -100px; /* Overlap effect for luxury look */
            position: relative;
            z-index: 10;
        }

        .service-card {
            background: #151515;
            padding: 50px;
            border: 1px solid var(--glass);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 2px;
            background: var(--accent);
            transform: scaleX(0);
            transition: transform 0.6s var(--ease);
            transform-origin: right;
        }

        .service-card:hover::before {
            transform: scaleX(1);
            transform-origin: left;
        }

        .service-card:hover {
            transform: translateY(-10px);
            background: #1a1a1a;
            border-color: rgba(212, 175, 55, 0.3);
        }

        .service-price {
            font-family: var(--font-serif);
            color: var(--accent);
            font-size: 1.5rem;
            display: block;
            margin-bottom: 20px;
        }

        .service-card h4 {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            margin-bottom: 15px;
            letter-spacing: 1px;
        }

        .service-card p {
            color: var(--text-muted);
            font-size: 0.9rem;
            margin-bottom: 30px;
        }

        .service-features {
            list-style: none;
            padding: 0;
            margin-bottom: 30px;
        }

        .service-features li {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            color: #ccc;
            display: flex;
            align-items: center;
        }

        .service-features li::before {
            content: "—";
            margin-right: 10px;
            color: var(--accent);
        }
    </style>
</head>
<body class="luxury-theme">

    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <nav class="navbar scrolled"> <div class="nav-container">
            <a href="index.html" class="logo">ORVEXA<span>STUDIO</span></a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html" class="active">Services</a></li>
                <li><a href="booking.html" class="nav-cta">Reserve</a></li>
            </ul>
        </div>
    </nav>

    <header class="services-hero">
        <div class="container" data-aos="fade-up">
            <span class="gold-label">THE MENU</span>
            <h1 class="hero-title">Signature Experience</h1>
        </div>
    </header>

    <section class="services-list">
        <div class="container">
            <div class="service-grid">
                
                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <span class="service-price">$85+</span>
                    <h4>Architectural Cut</h4>
                    <p>A precision-engineered haircut tailored to your facial structure and hair growth patterns.</p>
                    <ul class="service-features">
                        <li>Consultation & Analysis</li>
                        <li>Signature Wash</li>
                        <li>Structural Sculpting</li>
                        <li>Elite Finish</li>
                    </ul>
                    <a href="booking.html" class="btn-primary magnetic" style="padding: 15px 30px; font-size: 0.6rem;">Book Now</a>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                    <span class="service-price">$60+</span>
                    <h4>The Royal Shave</h4>
                    <p>Traditional straight-razor shave featuring hot towel therapy and premium apothecary oils.</p>
                    <ul class="service-features">
                        <li>Hot Towel Prep</li>
                        <li>Straight Razor Precision</li>
                        <li>Post-Shave Massage</li>
                        <li>Cold Compress Finish</li>
                    </ul>
                    <a href="booking.html" class="btn-primary magnetic" style="padding: 15px 30px; font-size: 0.6rem;">Book Now</a>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                    <span class="service-price">$150+</span>
                    <h4>Executive Bundle</h4>
                    <p>The ultimate grooming package for the modern visionary. Full transformation service.</p>
                    <ul class="service-features">
                        <li>Master Sculpting</li>
                        <li>Beard Architecture</li>
                        <li>Skin Detox Treatment</li>
                        <li>Private Suite Access</li>
                    </ul>
                    <a href="booking.html" class="btn-primary magnetic" style="padding: 15px 30px; font-size: 0.6rem;">Book Now</a>
                </div>

            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-wrap">
            <h2 class="footer-logo">ORVEXA</h2>
            <p class="copyright">&copy; 2026 Orvexa Studio. Private Sanctuary.</p>
        </div>
    </footer>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script type="module" src="app.js"></script>
</body>
</html>

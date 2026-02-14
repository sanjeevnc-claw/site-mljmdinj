export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitZen - Yoga, CrossFit & Meditation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 0;
            text-align: center;
            position: relative;
        }
        
        .header-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 200px;
        }
        
        .header h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }
        
        .header p {
            font-size: 1.3rem;
            opacity: 0.95;
            margin-bottom: 2rem;
        }
        
        .nav {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem 0;
            border-radius: 50px;
            margin: 0 2rem;
        }
        
        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
        
        .nav a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            transition: all 0.3s ease;
            white-space: nowrap;
        }
        
        .nav a:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .classes {
            padding: 5rem 0;
            background: #f8f9fa;
        }
        
        .classes h2 {
            text-align: center;
            font-size: 2.8rem;
            margin-bottom: 4rem;
            color: #333;
            font-weight: bold;
        }
        
        .class-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            align-items: stretch;
        }
        
        .class-card {
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            text-align: center;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            min-height: 300px;
        }
        
        .class-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .class-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .class-card h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #333;
            font-weight: bold;
        }
        
        .class-card p {
            color: #666;
            margin-bottom: 2rem;
            flex-grow: 1;
            display: flex;
            align-items: center;
            text-align: center;
            line-height: 1.6;
        }
        
        .btn {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 30px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            font-size: 1rem;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        .about {
            padding: 5rem 0;
            text-align: center;
        }
        
        .about-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .about h2 {
            font-size: 2.8rem;
            margin-bottom: 2.5rem;
            color: #333;
            font-weight: bold;
        }
        
        .about p {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.8;
            text-align: center;
        }
        
        .contact {
            background: #333;
            color: white;
            padding: 4rem 0;
        }
        
        .contact-content {
            text-align: center;
        }
        
        .contact h2 {
            margin-bottom: 3rem;
            font-size: 2.5rem;
            font-weight: bold;
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 3rem;
            margin: 3rem 0;
            align-items: start;
        }
        
        .contact-item {
            text-align: center;
            padding: 1rem;
        }
        
        .contact-item h4 {
            margin-bottom: 1rem;
            color: #667eea;
            font-size: 1.3rem;
            font-weight: bold;
        }
        
        .contact-item p {
            line-height: 1.6;
            font-size: 1.1rem;
        }
        
        .cta-section {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #555;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2.5rem;
            }
            
            .header p {
                font-size: 1.1rem;
            }
            
            .nav {
                margin: 0 1rem;
                padding: 1rem 0;
            }
            
            .nav ul {
                flex-direction: column;
                gap: 1rem;
            }
            
            .class-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .classes h2,
            .about h2 {
                font-size: 2.2rem;
            }
            
            .contact-info {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }
        
        @media (max-width: 480px) {
            .container {
                padding: 0 1rem;
            }
            
            .header {
                padding: 2rem 0;
            }
            
            .classes,
            .about {
                padding: 3rem 0;
            }
            
            .class-card {
                padding: 2rem;
                min-height: 280px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1>FitZen</h1>
                <p>Transform Your Body, Mind & Spirit</p>
                <nav class="nav">
                    <ul>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#membership">Membership</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section id="classes" class="classes">
        <div class="container">
            <h2>Our Classes</h2>
            <div class="class-grid">
                <div class="class-card">
                    <div class="class-icon">🧘‍♀️</div>
                    <h3>Yoga</h3>
                    <p>Find balance and flexibility through our various yoga styles - from gentle Hatha to dynamic Vinyasa flow.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
                
                <div class="class-card">
                    <div class="class-icon">💪</div>
                    <h3>CrossFit</h3>
                    <p>High-intensity functional fitness workouts that build strength, endurance, and community spirit.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
                
                <div class="class-card">
                    <div class="class-icon">🧘‍♂️</div>
                    <h3>Meditation</h3>
                    <p>Cultivate mindfulness and inner peace with guided meditation sessions for all experience levels.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <h2>About FitZen</h2>
                <p>At FitZen, we believe fitness is more than just physical exercise. Our unique approach combines the strength-building power of CrossFit, the flexibility and balance of yoga, and the mental clarity of meditation. Whether you're looking to build muscle, find inner peace, or improve overall wellness, our experienced instructors will guide you on your journey to becoming the best version of yourself.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <h2>Visit Us Today</h2>
                <div class="contact-info">
                    <div class="contact-item">
                        <h4>Address</h4>
                        <p>123 Wellness Way<br>Fitness City, FC 12345</p>
                    </div>
                    <div class="contact-item">
                        <h4>Phone</h4>
                        <p>(555) 123-YOGA</p>
                    </div>
                    <div class="contact-item">
                        <h4>Hours</h4>
                        <p>Mon-Fri: 5AM-10PM<br>Weekends: 6AM-8PM</p>
                    </div>
                    <div class="contact-item">
                        <h4>Email</h4>
                        <p>hello@fitzenGym.com</p>
                    </div>
                </div>
                <div class="cta-section">
                    <a href="#" class="btn">Start Your Free Trial</a>
                </div>
            </div>
        </div>
    </section>
</body>
</html>` }} />
  );
}
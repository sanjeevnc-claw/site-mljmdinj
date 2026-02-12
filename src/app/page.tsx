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
            padding: 2rem 0;
            text-align: center;
        }
        
        .header h1 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .nav {
            background: rgba(255,255,255,0.1);
            padding: 1rem 0;
            margin-top: 2rem;
        }
        
        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .nav li {
            margin: 0 2rem;
        }
        
        .nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            transition: background 0.3s;
        }
        
        .nav a:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .classes {
            padding: 4rem 0;
            background: #f8f9fa;
        }
        
        .classes h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #333;
        }
        
        .class-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .class-card {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .class-card:hover {
            transform: translateY(-5px);
        }
        
        .class-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .yoga { background: linear-gradient(135deg, #667eea, #764ba2); }
        .crossfit { background: linear-gradient(135deg, #f093fb, #f5576c); }
        .meditation { background: linear-gradient(135deg, #4facfe, #00f2fe); }
        
        .class-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #333;
        }
        
        .class-card p {
            color: #666;
            margin-bottom: 1.5rem;
        }
        
        .btn {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .about {
            padding: 4rem 0;
            text-align: center;
        }
        
        .about h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #333;
        }
        
        .about p {
            font-size: 1.1rem;
            color: #666;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .contact {
            background: #333;
            color: white;
            padding: 3rem 0;
            text-align: center;
        }
        
        .contact h2 {
            margin-bottom: 2rem;
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .contact-item h4 {
            margin-bottom: 0.5rem;
            color: #667eea;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            .nav li {
                margin: 0.5rem 0;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
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
            <h2>About FitZen</h2>
            <p>At FitZen, we believe fitness is more than just physical exercise. Our unique approach combines the strength-building power of CrossFit, the flexibility and balance of yoga, and the mental clarity of meditation. Whether you're looking to build muscle, find inner peace, or improve overall wellness, our experienced instructors will guide you on your journey to becoming the best version of yourself.</p>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
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
            <div style="margin-top: 2rem;">
                <a href="#" class="btn">Start Your Free Trial</a>
            </div>
        </div>
    </section>
</body>
</html>` }} />
  );
}
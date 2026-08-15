'use client';

export default function Home() {
  return (
    <div className="matrix-bg min-h-screen bg-black text-green-400">
      <div className="scanlines"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 border-b-2 border-green-400 p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold glow">GEORGEPRIOR.INFO</h1>
          <ul className="flex gap-8 text-sm font-mono list-none">
            <li>
              <a href="#about" className="hover:glow">
                [ABOUT]
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:glow">
                [PROJECTS]
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:glow">
                [CONTACT]
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative z-10">
        

          

          

          <div className="flex gap-4 justify-center">
            <a href="#projects" className="neon-btn">
              VIEW PROJECTS
            </a>
            <a href="https://github.com/LeGeoorge" target="_blank" rel="noopener noreferrer" className="neon-btn">
              GITHUB
            </a>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10 border-t-2 border-green-400">
        <div className="max-w-6xl mx-auto">
         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="terminal-card">
              <p className="text-green-400 font-bold mb-4">[EDUCATION]</p>
              <p className="text-green-300 leading-relaxed">
                MEng Aerospace Engineering from UWE Bristol. Specialization in automation, 
                control systems, and embedded firmware development. Strong background in 
                aerodynamics, mechanical design and LEAN methodology.
              </p>
            </div>


            <div className="terminal-card">
              <p className="text-green-400 font-bold mb-4">[SKILLS]</p>
              <div className="text-green-300 font-mono text-sm space-y-1">
                <p>└─ Hardware: ESP32 | Arduino | KiCad</p>
                <p>└─ Automation: IoT | Apify | Scripting</p>
                <p>└─ CAD: Fusion 360 | AutoCAD | Mechanical Design</p>
				<p>└─ Software: MATLAB | C++ | Python</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10 border-t-2 border-green-400">
        <div className="max-w-6xl mx-auto">
          <h3 className="section-title">PROJECTS</h3>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="terminal-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    WIRELESS WIND TUNNEL TURNTABLE
                  </h4>
                  <p className="text-green-400/70 text-sm">[MEng Capstone Project]</p>
                </div>
                <span className="text-green-400 text-xs font-mono">2025-2026</span>
              </div>

              <p className="text-green-300 mb-4">
                ESP32-based yaw control system for aerodynamic testing. Dual microcontroller 
                wireless communication (ESP-NOW), custom KiCad PCB, closed-loop stepper motor 
                control with CL42T-V41 driver. GT2 belt reduction mechanism for precision 
                positioning.
              </p>

              <div className="code-block text-xs mb-4">
                <p><u><b>SYSTEM SPECS</b></u></p>
                <p className="mt-2">Architecture: Dual ESP32 | Wireless | ESP-NOW</p>
                <p>Motor: NEMA17 Stepper | CL42T-V41 Driver</p>
                <p>PCB: Custom KiCad Design | Manufacturing: JLCPCB</p>
                <p>Firmware: C++ </p>
				<p>200+ Engineering Hours</p>
              </div>

              <div className="flex gap-2 flex-wrap mb-4">
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">ESP32</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">KiCad</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">C++</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">PCB_DESIGN</span>
              </div>

              <a href="https://github.com/LeGeoorge/Wind-Tunnel-Turntable_Project" className="text-green-400 hover:glow text-sm font-mono">
                [GIT REPO]
              </a>
			  
			  <a href="/Reports/capstone-report.pdf" target="_blank" className="text-green-400 hover:glow text-sm font-mono">
                [FULL REPORT]
              </a>
            </div>


            {/* Project 2 */}
            <div className="terminal-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    ROTARY ENCODER SYSTEM
                  </h4>
                  <p className="text-green-400/70 text-sm">[Hobby Electronics]</p>
                </div>
                <span className="text-green-400 text-xs font-mono">v2.1</span>
              </div>

              <p className="text-green-300 mb-4">
                Embedded systems project using ESP32 with optical sensors (TCST2103) and 
                28BYJ-48 stepper motor for precision rotational feedback. Sensor testing 
                and validation. Upgraded to TCST1103 after fault analysis.
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">Embedded</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">Hardware</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">ESP32</span>
              </div>

              <a href="#" className="text-green-400 hover:glow text-sm font-mono">
                
              </a>
            </div>

            {/* Project 3 */}
            <div className="terminal-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    AUTOMATED JOB SEARCH PIPELINE
                  </h4>
                  <p className="text-green-400/70 text-sm">[Automation Tool]</p>
                </div>
                <span className="text-green-400 text-xs font-mono">PROD</span>
              </div>

              <p className="text-green-300 mb-4">
                Automated LinkedIn job scraper using Apify. AI-based fit scoring with 
                Claude integration. Results exported to ranked Excel sheets. Filters 
                Cardiff-area graduate roles. Optimized for single-run efficiency to 
                minimize API credits.
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">Automation</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">Python</span>
                <span className="border border-green-400 px-3 py-1 text-xs font-mono">Apify</span>
              </div>

            
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10 border-t-2 border-green-400">
        <div className="max-w-6xl mx-auto text-center font-mono">
          <h3 className="section-title">CONTACT</h3>

          <div className="code-block mb-8 max-w-2xl mx-auto">
            <p className="mt-4">Location: Cardiff, Wales</p>
            <p>Status: SEEKING GRADUATE ROLES</p>
			<p>Email: george.prior00@gmail.com</p>
			<p>Phone: +44 7487 598334</p>

  
          </div>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="mailto:george.prior00@gmail.com" className="neon-btn-filled">
              EMAIL
            </a>
            <a href="https://github.com/LeGeoorge" target="_blank" rel="noopener noreferrer" className="neon-btn">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/02-george-prior/" target="_blank" rel="noopener noreferrer" className="neon-btn">
              LINKEDIN
            </a>
          </div>

       
        </div>
      </section>

      {/* Terminal cursor effect */}
      <style jsx>{`
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
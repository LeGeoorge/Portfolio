'use client';

export default function Home() {
  return (
    <div className="matrix-bg min-h-screen bg-black text-green-400">
      <div className="scanlines"></div>

      {/* Navigation */}
      

      {/* Top Section */}
      <section className="pt-40 pb-20 px-4 relative z-10">
        
		  <p style={{fontSize: '2rem', textAlign: 'center', padding: '1rem', marginBottom: '-2.5rem'}} className="text-2xl font-bold text-green-400">HIRE</p>	
          <p style={{fontSize: '6rem', textAlign: 'center'}} className="text-2xl font-bold text-green-400">GEORGE PRIOR</p>

          
		  <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="mailto:george.prior00@gmail.com" target="_blank" rel="noopener noreferrer" className="neon-btn">
              EMAIL
            </a>
			<a href="https://www.linkedin.com/in/02-george-prior/" target="_blank" rel="noopener noreferrer" className="neon-btn">
              LINKEDIN
            </a>
            <a href="https://github.com/LeGeoorge" target="_blank" rel="noopener noreferrer" className="neon-btn">
              GITHUB
            </a>
			<a href="#projects" className="neon-btn">
              VIEW PROJECTS
            </a>
          </div>
      
</section>
{/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10 border-t-2 border-green-400">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="terminal-card">
              <div>
                <h4 className="text-2xl font-bold text-green-400">[EDUCATION]</h4>
                <div className="flex justify-between items-start mb-2 gap-4">
                  <p className="text-green-400/70 text-sm">
                    MEng Aerospace Engineering from UWE Bristol.
                  </p>
                  <p style={{marginRight: '0.7rem'}}className="text-green-400/70 whitespace-nowrap !text-xs">Graduated June 2026 with merit</p>
                </div>
                <p>
                  Specialisation in automation, 
                  control systems, and embedded firmware development. Strong background in 
                  aerodynamics, mechanical design and LEAN methodology.
                </p>
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
                    [WIRELESS WIND TUNNEL TURNTABLE 1/4 SCALE PROOF-OF-CONCEPT]
                  </h4>
                  <p className="text-green-400/70 text-sm"><u>MEng Capstone Project - Individual Report</u></p>
                </div>
                <span className="text-green-400 text-xs font-mono">2025-2026</span>
              </div>

              <p className="text-green-300 mb-4">
                ESP32-based yaw and pitch control system for aerodynamic testing. Dual microcontroller 
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
			
			<div style={{display: 'flex', gap: '10rem'}} className="mb-4 ml-8">		
			<img src="/pics/cs-cad-render-iso.png" alt="Turntable Engineering Drawing" className="w-8/20 mb-4 border border-green-400" />  
			<img src="/pics/cs-cad-render-side.png" alt="Turntable Engineering Drawing" className="w-453/1000 mb-4 border border-green-400" />
			</div>
			
			<div className="code-block mb-4">
                <p><u><b>PERFORMANCE RESULTS</b></u></p>
                <p className="mt-2">Angular Resolution: 1° ✓ (Target: 1°)</p>
                <p>Positional Accuracy: validated at ±0.5° (Target: ±0.3° - required higher resolution testing method to verify)</p>
                <p>Operating Range: 360° ✓ (Target: 360°)</p>
                <p>Max Speed: 20°/s ✓ (Target: ≤10°/s) [EXCEEDED]</p>
                <p>Wireless Control: Implemented ✓</p>
				<p>Oscillation Mode: Implemented ✓</p>
                <p>Automatic Homing: Implemented ✓</p>
			</div>

              <a href="https://github.com/LeGeoorge/Wind-Tunnel-Turntable_Project" className="text-green-400 hover:glow text-sm font-mono">
                [GIT REPO]
              </a>
			  
			  <a href="/Reports/capstone-report.pdf" target="_blank" className="text-green-400 hover:glow text-sm font-mono">
                [FULL REPORT]
              </a>
            </div>

            {/* Project 2 - LEAN */}
            <div className="terminal-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    [CONTINUOUS IMPROVEMENT AND WASTE ANALYSIS FOR FLYSCREEN PRODUCTION USING LEAN THINKING]
                  </h4>
                  <p className="text-green-400/70 text-sm"><u>Principles of LEAN Engineering</u></p>
                </div>
                <span className="text-green-400 text-xs font-mono">2025</span>
              </div>

              <p className="text-green-300 mb-4">
                Continuous improvement and waste analysis for mixed-model production. Current-state value stream mapping identified bottlenecks (cleaning stage), unevenness (welding unreliability at 75%), and high WIP from batch-push scheduling. Future-state design proposed using SMED, Kanban supermarkets, Heijunka, Poka-Yoke, standard work and visual management to reduce lead times and support product variation.
              </p>

              <div className="code-block text-xs mb-4">
                <p><u><b>LEAN TOOLS APPLIED</b></u></p>
                <p className="mt-2">Value Stream Mapping (Current & Future State)</p>
                <p>Waste Analysis: Muda, Mura, Muri</p>
                <p>SMED: Reduce changeover times</p>
                <p>Kanban Pull System with Supermarkets</p>
                <p>Heijunka: Level production scheduling</p>
                <p>Poka-Yoke: Error-proofing mechanisms</p>
                <p>Jidoka: Built-in quality control</p>
                <p>Standard Work & Visual Management</p>
              </div>

              <div className="code-block text-xs mb-4">
                <p><u><b>KEY OUTCOMES</b></u></p>
                <p className="mt-2">Designed pull-based system replacing weekly push schedule</p>
                <p>Recommendations would reduce WIP and improved flow stability</p>
                <p>Recommedations aimed to help stabilise welding process</p>
                <p>Future-state design allowed mixed-model production with four product variants</p>
                <p>Eliminated batch-driven scheduling disruption</p>
              </div>

              <a href="/Reports/lean-report.pdf" target="_blank" className="text-green-400 hover:glow text-sm font-mono">
                [FULL REPORT]
              </a>
            </div>

            {/* Project 3 - Advanced Manufacturing */}
            <div className="terminal-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    [MANUFACTURING ROUTE ASSESSMENT FOR A LANDING GEAR DOOR HINGE]
                  </h4>
                  <p className="text-green-400/70 text-sm"><u>Advanced Manufacturing</u></p>
                </div>
                <span className="text-green-400 text-xs font-mono">2025</span>
              </div>

              <p className="text-green-300 mb-4">
                Feasibility study comparing conventional CNC machining vs additive manufacturing (AM) for aerospace landing gear door hinge. Evaluated component function, material performance, certification requirements, environmental impact and implementation considerations. Conducted structured SWOT analysis to assess adoption viability for fatigue-loaded aircraft component.
              </p>

              <div className="code-block text-xs mb-4">
                <p><u><b>ASSESSMENT SCOPE</b></u></p>
                <p className="mt-2">Component: Landing Gear Door Hinge (fatigue-loaded)</p>
                <p>Conventional Route: CNC machining from wrought Al/Steel alloys</p>
                <p>Alternative Route: Metal additive manufacturing (PBF/DED)</p>
                <p>Evaluation Criteria: Certification maturity, material performance, cost, sustainability, lead time</p>
              </div>

              <div className="code-block text-xs mb-4">
                <p><u><b>KEY FINDINGS</b></u></p>
                <p className="mt-2">✓ Conventional machining: High certification maturity, predictable fatigue behavior</p>
                <p>✓ AM advantages: Material efficiency, geometric freedom, weight optimization</p>
                <p>✗ AM constraints: Fatigue performance variability, extensive qualification (↑cost/time)</p>
                <p>✗ Hybrid required: Precision machining still needed for critical interfaces</p>
                <p>Recommendation: Retain machining for mature components; adopt AM for future design iterations</p>
              </div>

              <a href="/Reports/am-report.pdf" target="_blank" className="text-green-400 hover:glow text-sm font-mono">
                [FULL REPORT]
              </a>
            </div>

            {/* Project 4 - Dissertation */}
                        
            <div className="terminal-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    [LASER METAL DEPOSITION PARAMETER HARDNESS EFFECTS STUDY]
                  </h4>
                  <p className="text-green-400/70 text-sm"><u>Year 3 Dissertation</u></p>
                </div>
                <span className="text-green-400 text-xs font-mono">2025</span>
              </div>

              <p className="text-green-300 mb-4">
                Experimental investigation of laser metal deposition (LMD) on nickel-based IN718 superalloy. Designed and executed factorial experiments using Taguchi L12 array to evaluate six process parameters (laser power, powder flow, nozzle flow, step spacing, feed rate, specific energy) and their effects on deposit hardness using Vickers microhardness testing.
              </p>

              <div className="code-block text-xs mb-4">
                <p><u><b>EXPERIMENTAL APPROACH</b></u></p>
                <p className="mt-2">Material: IN718 Nickel Superalloy</p>
                <p>Test Method: Vickers Microhardness (HV3) per ISO 6507-1:2023</p>
                <p>Design: Taguchi L12 Orthogonal Array (12 samples, 6 parameters)</p>
                <p>Analysis: ANOVA, 95% confidence intervals, spatial contour mapping</p>
                <p>Total Indentations: 772 across 12 samples</p>
              </div>

              <div className="code-block text-xs mb-4">
                <p><u><b>KEY FINDINGS</b></u></p>
                <p className="mt-2">Deposit Hardness: 258-277 HV (mean 266.5 HV)</p>
                <p>Substrate Hardness: 601-634 HV (mean 621.5 HV)</p>
                <p>Significant Parameters: Specific energy, powder flow rate, nozzle flow rate (p &lt; 0.05)</p>
                <p>Spatial Variation: Hardness distribution mapped via MATLAB contour analysis</p>
                <p>Parameter Interactions: Modified Taguchi design enabled identification despite confounding parameters</p>
              </div>

              <a href="/Reports/diss.pdf" target="_blank" className="text-green-400 hover:glow text-sm font-mono">
                [FULL DISSERTATION]
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10 border-t-2 border-green-400">
        <div className="max-w-6xl mx-auto text-center font-mono">
          <h3 className="section-title">CONTACT</h3>

          <div className="code-block mb-8 max-w-2xl mx-auto">
            <p>Seeking graduate roles in any engineering discipline</p>
			<p className="mt-4">Currently located in Cardiff, open to relocation</p>           
			<p>Email: george.prior00@gmail.com</p>
			<p style={{paddingRight: '2.65rem'}}>Secondary: georgeprior02@gmail.com</p>
			<p>Phone: +44 7487 598334</p>

  
          </div>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="mailto:george.prior00@gmail.com" target="_blank" rel="noopener noreferrer" className="neon-btn">
              EMAIL
            </a>
			<a href="https://www.linkedin.com/in/02-george-prior/" target="_blank" rel="noopener noreferrer" className="neon-btn">
              LINKEDIN
            </a>
            <a href="https://github.com/LeGeoorge" target="_blank" rel="noopener noreferrer" className="neon-btn">
              GITHUB
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
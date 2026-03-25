import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience as Frontend Developer
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>NxtGen Services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Co-Founder, NxtGen Services
               My professional journey began in 2025, and I now serve as a Co-Founder at NxtGen Services. I specialize in delivering high-impact live projects, helping businesses grow through modern digital solutions.
               Visit us at: www.nxtgenservices.in
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Full Stack Developer</h4>
                <h5> Nivaranest Website</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              During my internship, I was responsible for the end-to-end frontend development of the official Nivaranest website. Utilizing a modern stack of HTML, CSS, JavaScript, and React, I transformed design concepts into a high-performance, responsive web application. This project was a definitive step in my journey, allowing me to master the art of building scalable user interfaces before transitioning into my leadership role at NxtGen Services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently focused on building scalable, production-grade applications using NestJS and Angular. From intricate CRM solutions to end-to-end e-commerce platforms, I specialize in developing automated systems that solve complex business challenges through high-performance engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

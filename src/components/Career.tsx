import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead</h4>
                <h5>Inframail · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Team Lead and Support Engineer since Aug 2024. Lead support for
              1,000+ customers, cut churn by 25.5%, and partner with the
              founders on feature work that the team can ship.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead</h4>
                <h5>Hineni · Remote</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Frontend lead, Aug 2024 – Jun 2026. Built Hineni’s real-time
              audition platform: live meetings, audition workflows, and
              post-audition voting for thousands of concurrent users, with
              low-latency collaboration for producers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack</h4>
                <h5>Allo · Remote</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Sep 2023 – Apr 2024. Built a Slack-like product with React,
              Next.js, Tailwind CSS, TypeScript, and Django. Page load improved
              25%, engagement 20%, bounce fell 15%, and server response time
              dropped 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack</h4>
                <h5>Contract · Remote</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Sep 2023 – Aug 2024. Rewrote a React and Node JavaScript codebase
              in TypeScript. Maintenance effort fell 30%, errors fell 20%, and
              page loads got more than 50% faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

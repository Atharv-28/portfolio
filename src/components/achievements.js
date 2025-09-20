import React, { useState, useEffect } from "react";
import AchievementsList from "../utils/achievementsList";
import "../styles/achievements.css";

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", ...new Set(AchievementsList.map(item => item.category))];

  const filteredAchievements = selectedCategory === "All" 
    ? AchievementsList 
    : AchievementsList.filter(item => item.category === selectedCategory);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <div id="achievements" className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2>🏆 Achievements & Competitions</h2>
          <p>Showcasing my journey through various competitions and recognitions</p>
        </div>

        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading achievements...</p>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="achievements-grid">
              {filteredAchievements.map((achievement, index) => (
                <div 
                  key={achievement.id} 
                  className="achievement-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(achievement)}
                >
              <div className="achievement-badge">
                <span className="achievement-icon">{achievement.icon}</span>
                <span className="achievement-status">{achievement.status}</span>
              </div>
              
              <div className="achievement-image">
                <img 
                  src={achievement.certificateImage} 
                  alt={`${achievement.competitionName} Certificate`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder-image" style={{ display: 'none' }}>
                  <div className="placeholder-content">
                    <span className="placeholder-icon">🏆</span>
                    <span className="placeholder-text">Certificate</span>
                  </div>
                </div>
                <div className="image-overlay">
                  <span>View Certificate</span>
                </div>
              </div>

              <div className="achievement-content">
                <div className="achievement-header-card">
                  <h3>{achievement.competitionName}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                
                <div className="achievement-rank">
                  <span className="rank-badge">{achievement.rank}</span>
                </div>

                <p className="achievement-description">{achievement.description}</p>

                <div className="skills-container">
                  <h4>Skills Demonstrated:</h4>
                  <div className="skills-tags">
                    {achievement.skillsRequired.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="achievement-category">
                  <span>{achievement.category}</span>
                </div>
              </div>
            </div>
          ))}
            </div>

            {/* Modal for Certificate View */}
            {selectedAchievement && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={closeModal}>✕</button>
                  <div className="modal-image">
                    <img 
                      src={selectedAchievement.certificateImage} 
                      alt={`${selectedAchievement.competitionName} Certificate`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="modal-placeholder-image" style={{ display: 'none' }}>
                      <div className="modal-placeholder-content">
                        <span className="modal-placeholder-icon">🏆</span>
                        <span className="modal-placeholder-text">Certificate Coming Soon</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-details">
                    <h3>{selectedAchievement.competitionName}</h3>
                    <p className="modal-rank">{selectedAchievement.rank} • {selectedAchievement.year}</p>
                    <p className="modal-description">{selectedAchievement.description}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Achievements;

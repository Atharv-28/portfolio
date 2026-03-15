import { useEffect, useRef, useState } from 'react';
import '../styles/logoloop.css';

const LogoLoop = ({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className = '',
  style = {}
}) => {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isVertical = direction === 'up' || direction === 'down';

  // Animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate velocity based on direction
    const getVelocity = () => {
      const mag = Math.abs(speed);
      const dir = isVertical ? (direction === 'up' ? 1 : -1) : (direction === 'left' ? 1 : -1);
      return mag * dir * (speed < 0 ? -1 : 1);
    };

    let offset = 0;
    let velocity = getVelocity();
    let lastTime = performance.now();
    let rafId;

    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Smooth velocity transition
      const targetVel = isHovered && pauseOnHover ? hoverSpeed : getVelocity();
      velocity += (targetVel - velocity) * Math.min(delta * 4, 1);

      offset += velocity * delta;

      // Get sequence width for seamless loop
      const firstList = track.querySelector('.logoloop__list');
      const size = isVertical ? firstList?.offsetHeight || 0 : firstList?.offsetWidth || 0;
      
      if (size > 0) {
        offset = ((offset % size) + size) % size;
        track.style.transform = isVertical 
          ? `translate3d(0, ${-offset}px, 0)` 
          : `translate3d(${-offset}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [speed, direction, isHovered, pauseOnHover, hoverSpeed, isVertical]);

  // Render logo item
  const renderLogo = (item, idx) => {
    const isNode = 'node' in item;
    const content = isNode ? (
      <span className="logoloop__node">{item.node}</span>
    ) : (
      <img src={item.src} alt={item.alt || ''} title={item.title} loading="lazy" draggable={false} />
    );

    const contentWithTitle = (
      <div className="logoloop__content">
        {content}
        {item.title && <div className="logoloop__title">{item.title}</div>}
      </div>
    );

    return (
      <li className="logoloop__item" key={idx}>
        {item.href ? (
          <a className="logoloop__link" href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.title}>
            {contentWithTitle}
          </a>
        ) : contentWithTitle}
      </li>
    );
  };

  const classes = [
    'logoloop',
    isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
    fadeOut && 'logoloop--fade',
    scaleOnHover && 'logoloop--scale-hover',
    className
  ].filter(Boolean).join(' ');

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
    ...style
  };

  // Create 3 copies for seamless loop
  const lists = Array(3).fill(null).map((_, i) => (
    <ul className="logoloop__list" key={i}>
      {logos.map((logo, idx) => renderLogo(logo, `${i}-${idx}`))}
    </ul>
  ));

  return (
    <div className={classes} style={containerStyle} role="region" aria-label={ariaLabel}>
      <div 
        className="logoloop__track" 
        ref={trackRef}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      >
        {lists}
      </div>
    </div>
  );
};

export default LogoLoop;

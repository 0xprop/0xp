import React, { useState, useEffect } from 'react';
import styles from '../styles/RectanglesIcon.module.css';

export default function RectanglesIcon({ isAnimated }) {
    const [visibleRects, setVisibleRects] = useState([]);
    const [hoveredSet, setHoveredSet] = useState(null);
    const spacing = 20;
    const rectWidth = 140;
    const totalWidth = (rectWidth * 7) + (spacing * 6);

    const rectangleSets = [
        { primary: "#B5E7FA", secondary: "#DFF6FF" },
        { primary: "#FFC693", secondary: "#FF8947" },
        { primary: "#E2E0FF", secondary: "#BCBBFF" },
        { primary: "#FFD631", secondary: "#FFF7AE" },
        { primary: "#63BBB6", secondary: "#9DEBE7" },
        { primary: "#48ABFF", secondary: "#A9E7FF" },
        { primary: "#F24900", secondary: "#FF8947" }
    ];

    useEffect(() => {
        if (isAnimated) {
            rectangleSets.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleRects(prev => [...prev, index]);
                }, index * 200);
            });
        }
    }, [isAnimated]);

    return (
        <div className={styles.svgContainer}>
            <svg width="100%" height="182" viewBox={`0 0 ${totalWidth} 182`} preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
                {rectangleSets.map((colors, index) => (
                    <g 
                        key={index} 
                        className={`${styles.rectangleSet} ${visibleRects.includes(index) ? styles.visible : ''}`}
                        style={{
                            transform: `translateX(${index * (rectWidth + spacing)}px)`,
                            transitionDelay: `${index * 0.02}s`
                        }}
                        onMouseEnter={() => setHoveredSet(index)}
                        onMouseLeave={() => setHoveredSet(null)}
                    >
                        <rect width={rectWidth} height="182" fill={hoveredSet === index ? colors.secondary : colors.primary} />
                        <rect x={rectWidth/2} width={rectWidth/2} height="182" fill={hoveredSet === index ? colors.primary : colors.secondary} />
                        <rect x={rectWidth/4} y="45.5" width={rectWidth/2} height="91" fill={hoveredSet === index ? colors.primary : colors.secondary} />
                        <rect x={rectWidth/2} y="45.5" width={rectWidth/4} height="91" fill={hoveredSet === index ? colors.secondary : colors.primary} />
                    </g>
                ))}
            </svg>
        </div>
    );
}
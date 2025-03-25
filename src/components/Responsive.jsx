import  { useRef, useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


const ResponsiveCarousel = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const categoriesList = ["Trending","Music","Films","Live","Gaming","category","News","Sports","Learning","Trending","Music","Films","Live","Gaming","category",
    "News","Sports","Learning","Trending","Music","Films","Live","Gaming","category","News","Sports","Learning", ]

  // Mesurer la largeur du conteneur et la largeur d'un élément dès le montage et lors d'un resize
  useEffect(() => {
    const measureSizes = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        const firstItem = containerRef.current.querySelector('.carousel-item');
        if (firstItem) {
          // Inclut la marge droite dans le calcul
          const computedStyle = window.getComputedStyle(firstItem);
          const marginRight = parseFloat(computedStyle.marginRight) || 0;
          setItemWidth(firstItem.offsetWidth + marginRight);
        }
      }
    };

    measureSizes();
    window.addEventListener('resize', measureSizes);
    return () => window.removeEventListener('resize', measureSizes);
  }, []);

  // Calcule le nombre d'éléments visibles et définit la distance de défilement
  const handleScroll = (direction) => {
    // Nombre d'éléments entièrement visibles dans le conteneur
    const itemsVisible = Math.floor(containerWidth / itemWidth);
    const scrollAmount = itemsVisible * itemWidth;

    if (direction === 'LEFT') {
      setScrollPosition(prev => Math.max(prev - scrollAmount, 0));
    } else if (direction === 'RIGHT') {
      const maxScroll = categoriesList.length * itemWidth - containerWidth;
      setScrollPosition(prev => Math.min(prev + scrollAmount, maxScroll));
    }
  };

  return (
    <div className="relative flex items-center">

            {scrollPosition > 0 && (
        <button
          onClick={() => handleScroll("LEFT")}
          className="p-1  rounded-full absolute z-10 font-bold flex items-center justify-center text-sm bg-black text-white"
        >
          <RiArrowLeftSLine />
        </button>
      )}
      <div
        ref={containerRef}
        className="carousel-container"
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          transform: `translateX(-${scrollPosition}px)`,
          transition: 'transform 0.3s ease'
        }}
      >
        {categoriesList.map((category, index) => (
          <div
            key={index}
            className="carousel-item text-center   lowercase cursor-pointer h-7 bg-white/20  px-3 mb-[1px] rounded-lg hover:bg-white/50"
            style={{
              display: 'inline-block',
              marginRight: '10px',
              textAlign: 'center', 
                      }}
          >
            {category}
          </div>
        ))}
      </div>
      {scrollPosition < categoriesList.length * itemWidth - containerWidth && (
        <button
          onClick={() => handleScroll("RIGHT")}
          className="p-1 rounded-full border  z-10 font-bold flex items-center justify-center text-sm"
        >
          <RiArrowRightSLine />
        </button>
      )}
    </div>
  );
};

export default ResponsiveCarousel;
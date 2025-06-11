export default function Home() {
  const { isDarkMode } = useDarkMode();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time

    // Optional: Wait for images to load
    const preloadImages = () => {
      const images = ['/images/bg-night.png', '/images/bg2-day.jpg'];
      let loadedCount = 0;
      
      images.forEach(src => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            // All images loaded
            setTimeout(() => setLoading(false), 1000);
          }
        };
        img.src = src;
      });
    };

    // Uncomment this line if you want to wait for background images
    // preloadImages();

    return () => clearTimeout(timer);
  }, []);
}
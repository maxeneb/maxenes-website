import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { playClickSound } from '../../utils/playClickSound';

const BackgroundMusic = ({ 
  src, 
  volume = 0.3, 
  autoPlay = true,
  className = "",
  showControls = true 
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(volume);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = currentVolume;
    audio.loop = true;

    // Auto play if enabled (note: many browsers block autoplay)
    if (autoPlay) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Auto-play was prevented:", error);
          });
      }
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [autoPlay, currentVolume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Play failed:", error);
          });
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = currentVolume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setCurrentVolume(newVolume);
    
    const audio = audioRef.current;
    if (audio && !isMuted) {
      audio.volume = newVolume;
    }
  };

  if (!showControls) {
    return (
      <audio
        ref={audioRef}
        src={src}
        loop
        style={{ display: 'none' }}
      />
    );
  }

  return (
    <div className={`fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30 ${className}`}>
      <audio
        ref={audioRef}
        src={src}
        loop
        style={{ display: 'none' }}
      />
      
      {/* Mobile Layout - Only Play/Pause Button */}
      <div className="flex items-center gap-3 md:hidden p-2">
        <button
          onClick={() => {
                      togglePlay(),
                      playClickSound()}
                    }
          className="cursor-pointer p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-cream" />
          ) : (
            <Play className="w-4 h-4 text-cream" />
          )}
        </button>
      </div>

      {/* Desktop Layout - Full Controls */}
      <div className="hidden md:flex items-center gap-3 p-3">
        {/* Play/Pause Button */}
        <button
          onClick={() => {
                      togglePlay(),
                      playClickSound()}
                    }
          className="cursor-pointer p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-cream" />
          ) : (
            <Play className="w-4 h-4 text-cream" />
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={() => {
                      toggleMute(),
                      playClickSound()}
                    }
          className="cursor-pointer p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-cream" />
          ) : (
            <Volume2 className="w-4 h-4 text-cream" />
          )}
        </button>

        {/* Volume Slider */}
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : currentVolume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-white/5 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #AAB796 ${(isMuted ? 0 : currentVolume) * 100}%, #ffffff30 ${(isMuted ? 0 : currentVolume) * 100}%)`
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #AAB796;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #AAB796;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default BackgroundMusic;
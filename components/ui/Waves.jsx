import React from 'react'
import Wave from 'react-wavify'
import { useDarkMode } from '../../app/contexts/DarkModeContext'

const Waves = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Wave 
      fill="url(#waveGradient)"
      paused={false}
      style={{ display: 'flex' }}
      options={{
        height: 1,
        amplitude: 20,
        speed: 0.2,
        points: 2
      }}
    >

      <defs>
        <linearGradient id="waveGradient" gradientTransform="rotate(90)">
          {isDarkMode ? (
            <>
              <stop offset="10%" stopColor="#B6D48C" />
              <stop offset="90%" stopColor="#677954" />
            </>
          ) : (
            // Light mode gradient - original sage colors
            <>
              <stop offset="10%" stopColor="#B6D48C"/>
              <stop offset="90%" stopColor="#677954" />
            </>
          )}
        </linearGradient>
      </defs>
    </Wave>
  )
}

export default Waves;
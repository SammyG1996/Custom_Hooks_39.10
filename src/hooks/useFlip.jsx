import React, {useState} from 'react'

/**
 * Custom Hook allows for new card
 */
const useFlip = (state=true) => {
    const [isFacingUp, setIsFacingUp] = useState(state);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard]
}

export default useFlip
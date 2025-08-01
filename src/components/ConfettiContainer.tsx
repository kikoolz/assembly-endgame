import Confetti from "react-confetti"
import type {JSX} from 'react'


export default function ConfettiContainer({ isGameWon }):JSX.Element | null {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}
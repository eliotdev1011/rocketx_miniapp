import { cn } from "../../utils";

const ArrowRight = ( { className, handleClick} ) => {
    return (
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" className={cn("",className)} onClick = {handleClick} >
            <path d="M8.62158 8.00684C8.62158 8.11198 8.59945 8.21159 8.55518 8.30566C8.51644 
                8.39421 8.45833 8.47721 8.38086 8.55469L1.80664 14.9878C1.65723 15.1372 1.47461 
                15.2119 1.25879 15.2119C1.12044 15.2119 0.993164 15.1787 0.876953 15.1123C0.760742 
                15.0459 0.669434 14.9546 0.603027 14.8384C0.536621 14.7277 0.503418 14.6004 0.503418 
                14.4565C0.503418 14.2518 0.575358 14.0719 0.719238 13.917L6.76221 8.00684L0.719238 
                2.09668C0.575358 1.94173 0.503418 1.76188 0.503418 1.55713C0.503418 1.41325 0.536621 
                1.28597 0.603027 1.17529C0.669434 1.05908 0.760742 0.967773 0.876953 0.901367C0.993164 
                0.834961 1.12044 0.801758 1.25879 0.801758C1.47461 0.801758 1.65723 0.873698 1.80664 1.01758L8.38086 
                7.45898C8.45833 7.53646 8.51644 7.62223 8.55518 7.71631C8.59945 7.80485 8.62158 7.90169 8.62158 8.00684Z" 
                fill="white"/>
        </svg>
    )
}

export default ArrowRight;
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useEtapeScrollFill(etapeZoneRef, progressRef) {
    useEffect(() => {
        if (!etapeZoneRef.current || !progressRef.current) return

        gsap.to(progressRef.current, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: etapeZoneRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })
    }, [])
}
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useBodyAnimations(heroRef, navRef, etapeZoneRef) {

    useEffect(() => {

        if (!heroRef.current || !navRef.current || !etapeZoneRef.current) return

        gsap.fromTo(
            navRef.current,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "bottom top",
                    endTrigger: etapeZoneRef.current,
                    end: "bottom top",
                    toggleActions: "play reverse play reverse"
                }
            }
        )

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }

    }, [])
}
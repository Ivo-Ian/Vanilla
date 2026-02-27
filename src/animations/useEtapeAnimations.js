export function useEtapeAnimations(containerRef, imageRef) {

    useEffect(() => {

        const steps = containerRef.current.querySelectorAll(".natural-step")
        const dots = document.querySelectorAll(".etape-progress .dot")

        steps.forEach((step, index) => {

            ScrollTrigger.create({
                trigger: step,
                start: "top center",
                onEnter: () => {
                    imageRef.current.querySelector("img").src =
                        step.dataset.image

                    dots.forEach(d => d.classList.remove("active"))
                    dots[index].classList.add("active")
                }
            })

        })

    }, [])
}
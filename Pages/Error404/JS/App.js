function Error404Wrap() {
    $("body").css({ pointerEvents: "all" }),
        gsap
            .timeline()
            .from("#Error404Wrap nav #logo a", { opacity: 0, y: "100%", ease: "power3.out", duration: 2.2 }, 2.7)
            .from("#Error404Wrap nav #listitems li a", { opacity: 0, y: "100%", ease: "power3.out", duration: 2.2, stagger: "0.2" }, 2.7)
            .from("#Error404Wrap #social a span", { opacity: 0, y: "100%", ease: "power3.out", duration: 2.2, stagger: "0.2" }, 2.7)
            .from("#Error404Wrap #codeby p", { opacity: 0, y: "100%", ease: "power3.out", duration: 2.2, stagger: "0.2" }, 2.7)
            .to("#Error404Wrap", { opacity: 1 }, 0)
            .from("#Error404Wrap section h3 span", { opacity: 0, y: "100%", ease: "power4.out", duration: 2.2 }, 0)
            .from("#Error404Wrap #GoBack span", { opacity: 0, y: "100%", ease: "power4.out", duration: 2.2 }, 1.5);
}
window.onload = () => {
    Error404Wrap();
};

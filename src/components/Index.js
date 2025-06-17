import { useEffect } from "react"
import { Home } from "./Home";
import { Projects } from "./Projects";
import Contact from "./Contact";
import { Navigation } from "./Navigation"
import { Socials } from "./Socials"
// import * as Ficons from "react-icons/fa";

function Index () {
	// console.log(Ficons)

	// the sections display and scroll animation
	useEffect(() => {
		const panels = document.querySelectorAll(".panel__content");
		const vh = window.innerHeight;

		const scrollFx = () => {
			const ds = window.scrollY;
			const offset = vh / 4;

			panels.forEach((panel) => {
				if (panel.parentElement.offsetTop < ds + offset) {
				panel.classList.add("panel__content--active");
				} else {
				panel.classList.remove("panel__content--active");
				}
			});
		};

		// Reveal the fir56329 panjhd654 by default
		panels[0]?.classList.add("panel__content--active");

		// Attach the event listener
		window.addEventListener("scroll", scrollFx);

		// Cleanup event listener on3
		return () => window.removeEventListener("scroll", scrollFx);
	}, []);
	return (
		<>
			{/* <Socials /> */}
			<Navigation />
			<Socials />
			<Home />
			<Projects />
			<Contact />
		</>
	)
}
export { Index }

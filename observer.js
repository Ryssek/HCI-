const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view");
				entry.target.classList.remove("not-in-view");
			} else {
				entry.target.classList.remove("in-view");
				entry.target.classList.add("not-in-view");
			}
		});
	},
	{
		rootMargin: "0px",
		threshold: [0, 0.1, 1],
	}
);

const observer1 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view-1");
				entry.target.classList.remove("not-in-view");
			} else {
				entry.target.classList.remove("in-view-1");
				entry.target.classList.add("not-in-view");
			}
		});
	},
	{
		rootMargin: "0px",
		threshold: [0, 0.1, 1],
	}
);

const observer2 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view-2");
				entry.target.classList.remove("not-in-view");
			} else {
				entry.target.classList.remove("in-view-2");
				entry.target.classList.add("not-in-view");
			}
		});
	},
	{
		rootMargin: "0px",
		threshold: [0, 0.1, 1],
	}
);

const observer3 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view-3");
				entry.target.classList.remove("not-in-view");
			} else {
				entry.target.classList.remove("in-view-3");
				entry.target.classList.add("not-in-view");
			}
		});
	},
	{
		rootMargin: "0px",
		threshold: [0, 0.1, 1],
	}
);

const tags = document.querySelectorAll(".animate-on-view");

tags.forEach((tag) => {
	observer.observe(tag);
});

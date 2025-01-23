export const handleSmoothScroll = (e, id, closeSidebar) => {
    e.preventDefault();

    // Close the sidebar if a close function is provided
    if (closeSidebar) {
        closeSidebar();
    }

    setTimeout(() => {
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', `#${id}`);
            }
        }
    }, 300); // Adjust the delay to match the sidebar closing animation time
};

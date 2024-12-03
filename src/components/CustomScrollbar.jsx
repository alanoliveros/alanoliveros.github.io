import { useEffect, useRef } from "react";

const CustomScrollbar = () => {
    const thumbRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const updateScrollbar = () => {
            const thumb = thumbRef.current;
            const docHeight = document.documentElement.scrollHeight;
            const viewHeight = window.innerHeight;
            const scrollTop = window.scrollY;

            // Calculate the thumb's height and top position
            const thumbHeight = (viewHeight / docHeight) * 100;
            const thumbTop = (scrollTop / docHeight) * 100;

            // Apply CSS variables
            thumb.style.setProperty("--scrollbar-height", `${thumbHeight}%`);
            thumb.style.setProperty("--scrollbar-top", `${thumbTop}%`);
        };

        const handleDrag = (e) => {
            if (!isDragging) return;
            const viewHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const trackTop = trackRef.current.getBoundingClientRect().top;

            const newScrollTop = ((e.clientY - trackTop) / viewHeight) * docHeight;
            window.scrollTo(0, newScrollTop);
        };

        let isDragging = false;

        const handleMouseDown = () => {
            isDragging = true;
            document.body.classList.add("is-dragging");
        };

        const handleMouseUp = () => {
            isDragging = false;
            document.body.classList.remove("is-dragging");
        };

        const thumb = thumbRef.current;

        // Add event listeners
        window.addEventListener("scroll", updateScrollbar);
        window.addEventListener("resize", updateScrollbar);
        thumb.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleDrag);

        // Initialize scrollbar
        updateScrollbar();

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener("scroll", updateScrollbar);
            window.removeEventListener("resize", updateScrollbar);
            thumb.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleDrag);
        };
    }, []);

    return (
        <div className="site-scrollbar">
            <div ref={trackRef} className="site-scrollbar__track"></div>
            <div ref={thumbRef} className="site-scrollbar__thumb"></div>
        </div>
    );
};

export default CustomScrollbar;

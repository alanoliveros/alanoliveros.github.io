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



//body::-webkit-scrollbar {
//  display: none;
//}
//
//body {
//  overflow: auto;
//}
//
//
//$border-width: 1rem;
//
//
//
//.site-scrollbar {
//  position: fixed;
//  top: 0;
//  right: 0;
//  z-index: 20;
//  width: $border-width;
//  height: 100%;
//  scale: 1 1;
//  transition: scale .5s cubic-bezier(.215,.61,.355,1);
//  will-change: scale;
//}
//
//@media only screen and (max-width: 767px) and (orientation: landscape),
//only screen and (max-width: 576px) {
//  .site-scrollbar {
//    $border-width: .5rem;
//  }
//}
//
//.site-scrollbar__track {
//  position: absolute;
//  top: 0;
//  left: 0;
//  z-index: 2;
//  width: 100%;
//  height: 100%;
//  background-color: transparent;
//  pointer-events: none;
//}
//
//
//
//.site-scrollbar__thumb {
//  position: absolute;
//  top: 0;
//  left: 50%;
//  z-index: 3;
//  width: calc($border-width * .5);
//  height: var(--scrollbar-height, 0);
//  cursor: grab;
//  translate: -50% var(--scrollbar-top) 0;
//  scale: 1 1;
//  transition: scale .2s cubic-bezier(.215,.61,.355,1), opacity .07s linear;
//  will-change: opacity, scale, transform;
//}
//
//.is-transitioning .site-scrollbar__thumb {
//  scale: 0 1;
//}
//
//.site-scrollbar__thumb:before {
//  position: absolute;
//  top: calc($border-width * -1);
//  left: calc(50% - $border-width * .5);
//  width: $border-width;
//  height: calc(100% + $border-width);
//  content: "";
//}
//
//.site-scrollbar__thumb:after {
//  position: absolute;
//  top: $border-width;
//  bottom: $border-width;
//  left: 50%;
//  width: 100%;
//  height: auto;
//  background-color: theme-color(color-primary);
//  border-radius: inherit;
//  translate: -50% 0 0;
//  transition: width .1s cubic-bezier(.215,.61,.355,1), background-color .1s cubic-bezier(.215,.61,.355,1);
//  content: "";
//  will-change: background, width;
//}
//
//.site-scrollbar__thumb:hover:after {
//  width: calc($border-width - 2px);
//}
//
//.site-scrollbar.is-dragging,
//.site-scrollbar.is-dragging .site-scrollbar__thumb {
//  cursor: grabbing;
//}
//
//.site-scrollbar.is-dragging .site-scrollbar__thumb:after {
//  width: calc($border-width - 2px);
//  background-color: theme-color(color-white);
//}
//
//html.is-scroll-blocked .site-scrollbar {
//  scale: 0 1;
//}


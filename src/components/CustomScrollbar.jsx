import { useEffect, useRef } from 'react';

const CustomScrollbar = () => {
    const scrollbarRef = useRef(null);
    const thumbRef = useRef(null);
    const isDragging = useRef(false);
    const dragStart = useRef({
        y: 0,
        scroll: 0,
    });

    useEffect(() => {
        const el = scrollbarRef.current;
        const thumb = thumbRef.current;

        // Function to update the scrollbar
        const setScrollbar = () => {
            const scrollbarHeight = (window.innerHeight / document.body.scrollHeight) * window.innerHeight;
            const scrollbarTop = window.scrollY / (document.body.scrollHeight - window.innerHeight) * (window.innerHeight - scrollbarHeight);

            el.style.setProperty('--scrollbar-height', `${scrollbarHeight}px`);
            el.style.setProperty('--scrollbar-top', `${scrollbarTop}px`);
        };

        // Bind events
        const onDragStart = (e) => {
            isDragging.current = true;
            dragStart.current.y = e.clientY || e.touches[0].clientY;
            dragStart.current.scroll = window.scrollY;

            el.classList.add('is-dragging');
            e.preventDefault();
        };

        const onDragMove = (e) => {
            if (!isDragging.current) return;

            const y = e.clientY || e.touches[0].clientY;
            const deltaY = (y - dragStart.current.y) / window.innerHeight;

            // Calculate the scroll position based on the thumb's movement
            let scrollPosition = (dragStart.current.scroll + deltaY) * (document.body.scrollHeight - window.innerHeight);

            // Clamp the scroll position to ensure it's within bounds
            scrollPosition = Math.max(0, Math.min(scrollPosition, document.body.scrollHeight - window.innerHeight));

            // Scroll the window to the new position
            window.scrollTo(0, scrollPosition);

            e.preventDefault();
        };

        const onDragEnd = (e) => {
            if (!isDragging.current) return;

            isDragging.current = false;
            el.classList.remove('is-dragging');
            e.preventDefault();
        };

        // Listen to events
        window.addEventListener('resize', setScrollbar);
        window.addEventListener('scroll', setScrollbar);
        document.addEventListener('mousemove', onDragMove, { passive: false });
        document.addEventListener('touchmove', onDragMove, { passive: false });
        document.addEventListener('mouseup', onDragEnd, { passive: false });
        document.addEventListener('touchend', onDragEnd, { passive: false });
        thumb.addEventListener('mousedown', onDragStart, { passive: false });
        thumb.addEventListener('touchstart', onDragStart, { passive: false });

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', setScrollbar);
            window.removeEventListener('scroll', setScrollbar);
            document.removeEventListener('mousemove', onDragMove);
            document.removeEventListener('touchmove', onDragMove);
            document.removeEventListener('mouseup', onDragEnd);
            document.removeEventListener('touchend', onDragEnd);
            thumb.removeEventListener('mousedown', onDragStart);
            thumb.removeEventListener('touchstart', onDragStart);
        };
    }, []);

    return (
        <div className="site-scrollbar" ref={scrollbarRef}>
            <div className="site-scrollbar__track"></div>
            <div className="site-scrollbar__thumb js-thumb" ref={thumbRef}></div>
        </div>
    );
};

export default CustomScrollbar;

import { useRef, useEffect, RefObject } from "react";

/**
 * Custom hook that enables click-and-drag scrolling for horizontal carousels
 * @param scrollRef - Ref to the scrollable container element
 * @returns Object with isDragging state (useful for preventing clicks)
 */
export function useDragScroll(scrollRef: RefObject<HTMLElement>) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      // Only handle left mouse button
      if (e.button !== 0) return;

      isDragging.current = true;
      startX.current = e.pageX - element.offsetLeft;
      scrollLeft.current = element.scrollLeft;
      lastX.current = e.pageX;
      lastTime.current = Date.now();
      velocity.current = 0;

      // Change cursor
      element.style.cursor = "grabbing";
      element.style.userSelect = "none";

      // Cancel any ongoing momentum
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      e.preventDefault();

      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Scroll speed multiplier
      element.scrollLeft = scrollLeft.current - walk;

      // Calculate velocity for momentum
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        velocity.current = (e.pageX - lastX.current) / dt;
      }
      lastX.current = e.pageX;
      lastTime.current = now;
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;

      isDragging.current = false;
      element.style.cursor = "grab";
      element.style.userSelect = "";

      // Apply momentum/inertia
      const momentumScroll = () => {
        if (Math.abs(velocity.current) > 0.1) {
          element.scrollLeft -= velocity.current * 16; // 16ms per frame
          velocity.current *= 0.95; // Friction
          animationFrame.current = requestAnimationFrame(momentumScroll);
        }
      };

      if (Math.abs(velocity.current) > 0.5) {
        momentumScroll();
      }
    };

    const handleMouseLeave = () => {
      if (isDragging.current) {
        handleMouseUp();
      }
    };

    // Prevent click events when dragging
    const handleClick = (e: MouseEvent) => {
      if (Math.abs(velocity.current) > 0.5) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Set initial cursor
    element.style.cursor = "grab";

    // Add event listeners
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("click", handleClick, true);

    return () => {
      element.style.cursor = "";
      element.style.userSelect = "";
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("click", handleClick, true);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [scrollRef]);

  return { isDragging: isDragging.current };
}

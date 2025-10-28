// - Imports --------------------------------------------------------
import { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------------------------------
// useSectionSpy
// -------------------------------------------------------------------------------------------------
//
// Custom React hook that tracks which section of a scrollable container
// is currently visible ("active"). Useful for highlighting navigation links
// as the user scrolls through different sections.
//
// Usage:
// const { activeSection, register } = useSectionSpy(containerRef, { ...options });
//
// Each section element should include: data-section="sectionKey" and ref={register('sectionKey')}
// -------------------------------------------------------------------------------------------------

export function useSectionSpy(
	rootRef,
	{
		rootMargin = '30px 0px -70% 0px', // Defines the top & bottom margins of the visible area
		threshold = 0.01,                  // How much of a section must be visible to trigger
		initial = 'about',                 // Default active section
		onChange,                          // Optional callback: fired when active section changes
	} = {}
) {

	// - State --------------------------------------------------------
	const [active, setActive] = useState(initial); // Current active section key
	const elements = useRef(new Map());            // Stores all observed sections (key -> element)

	// - Register function --------------------------------------------
	// Called when a section mounts/unmounts to link its element to its key.
	const register = useCallback((key) => (el) => {
		if (el) elements.current.set(key, el);       // Add element to map
		else elements.current.delete(key);           // Remove element if unmounted
	}, []);

	// - Observer setup ------------------------------------------------
	useEffect(() => {
		if (!rootRef.current) return; // Abort if container ref isn't ready

		// Create IntersectionObserver to track which section is visible
		const observer = new IntersectionObserver((entries) => {

			// Filter entries that are currently visible (isIntersecting)
			const hit = entries
				.filter((e) => e.isIntersecting)
				// Sort by top position (closest to top of viewport)
				.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

			// If a section is visible, update active state
			if (hit) {
				const key = hit.target.dataset.section;

				setActive((prev) => {
					if (prev !== key) onChange?.(key); // Trigger callback only if section changed
					return key;
				});
			}
		}, {
			root: rootRef.current, // The scrollable container element
			rootMargin,
			threshold,
		});

		// Observe all registered elements
		elements.current.forEach((el) => observer.observe(el));

		// Set the initial section on mount
		setActive((prev) => {
			onChange?.(prev);
			return prev;
		});

		// Cleanup on unmount
		return () => observer.disconnect();

	}, [rootRef, rootMargin, threshold, onChange]);

	// - Return --------------------------------------------------------
	// activeSection → currently visible section
	// register → function to attach refs to section elements
	return { activeSection: active, register };
}

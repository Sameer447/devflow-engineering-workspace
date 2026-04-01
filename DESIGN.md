# Design System Strategy: The Architectural Precision Document

## 1. Overview & Creative North Star
**The Creative North Star: "The Orchestrated Flow"**

This design system moves beyond the utility of a standard project management tool and enters the realm of a high-end development environment. We are not just building "blue boxes"; we are creating a workspace that mirrors the mental model of a senior engineer: precise, rhythmic, and distraction-free. 

To break the "template" look, we utilize **Intentional Asymmetry**. Navigation is anchored with a rigid 240px sidebar, but the canvas area uses expansive whitespace and staggered content modules to prevent visual fatigue. We replace heavy-handed structural lines with **Tonal Depth**, treating the UI as an editorial layout where hierarchy is dictated by typography and background shifts rather than containers.

---

## 2. Colors & Surface Architecture

### The Palette
The core of the experience is built on the interplay between the deep Indigo Primary and a sophisticated range of cool Neutrals.

*   **Primary Hub:** Use `primary` (#3B309E) for high-intent actions. Use `primary_container` (#534AB7) for active states that require presence without overpowering the content.
*   **Surface Hierarchy:** We utilize a "Stacking" logic.
    *   **Level 0 (Base):** `surface` (#F9F9FD) - The foundation.
    *   **Level 1 (Sections):** `surface_container_low` (#F3F3F7) - Used for sidebar or secondary navigation panels.
    *   **Level 2 (Active Canvas):** `surface_container_lowest` (#FFFFFF) - Reserved for the primary focus area or active cards.

### The "No-Line" Rule
Standard UI relies on borders to separate sections. This design system prohibits 1px solid borders for structural sectioning. Instead, boundaries must be defined through background shifts. A task list should sit on `surface_container_lowest`, while the dashboard background remains `surface`. This creates a cleaner, "limitless" feel.

### The "Glass & Gradient" Rule
To add soul to the "Modern" requirement:
*   **Floating Elements:** Modals and popovers should use a semi-transparent `surface_container_lowest` with a `backdrop-blur` (20px) to allow the underlying workflow to bleed through.
*   **Signature Textures:** For primary CTAs, use a subtle linear gradient from `primary` (#3B309E) to `primary_container` (#534AB7) at a 135-degree angle. This adds a slight "lift" that flat hex codes cannot achieve.

---

## 3. Typography: The Editorial Engine

We use a high-contrast scale to create an authoritative, editorial feel. By pairing the utilitarian **Inter** with the technical **JetBrains Mono**, we signal that this is a tool for builders.

*   **Display & Headlines:** Use `display-md` (2.75rem) for empty states or dashboard welcomes. Tighten the tracking (-0.02em) to make it feel intentional.
*   **Technical Context:** Use `JetBrains Mono` for IDs, commit hashes, or code snippets using the `label-md` or `body-sm` scale.
*   **The Hierarchy Goal:** Titles should feel significant. A `headline-sm` title on a `surface` background provides enough gravity that secondary borders become unnecessary.

---

## 4. Elevation & Depth: Tonal Layering

We avoid traditional "Drop Shadows" which can make a UI feel dated and muddy.

*   **The Layering Principle:** Instead of a shadow, place a `surface_container_highest` (#E2E2E6) element behind a `surface_container_lowest` (#FFFFFF) card to create a 1px "visual offset" that feels architectural.
*   **Ambient Shadows:** If a floating element (like a context menu) requires lift, use a multi-layered shadow: 
    *   `box-shadow: 0 4px 6px -1px rgba(59, 48, 158, 0.04), 0 10px 15px -3px rgba(59, 48, 158, 0.08);`
    *   *Note: The shadow is tinted with the Primary color to maintain tonal harmony.*
*   **The Ghost Border:** If a container needs a border for accessibility (e.g., in Dark Mode or high-contrast views), use `outline_variant` at 20% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** 36px height, 8px radius. Gradient fill (`primary` to `primary_container`). 
*   **Secondary:** 36px height, 8px radius. `surface_container_high` background with `on_surface` text. No border.
*   **Tertiary/Ghost:** No background. `primary` text. Focus state uses a `primary_fixed` background.

### Input Fields
*   **Style:** 38px height, 8px radius. 
*   **State:** Default uses `surface_container_high`. On focus, transition background to `surface_container_lowest` and apply a 1px `primary` ghost border.

### Cards & Lists (The List Rule)
*   **Forbid Dividers:** Do not use horizontal lines between list items. Use 1.75rem (`8` on the spacing scale) of vertical whitespace or a subtle background hover state (`surface_container_low`).
*   **Dev-Specific: The Status Chip:** 
    *   Use a "Dot + Label" pattern. The dot uses the semantic tokens (`success`, `error`, etc.), while the chip background is a 10% opacity version of the same color.

### Key Custom Component: The "Threaded Task"
A nested card component using the `surface_container` tiers. The parent task is `surface_container_lowest`, and sub-tasks are nested within a `surface_container_low` indent, creating a "drilled-down" physical metaphor.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use `JetBrains Mono` for any data that is generated by a machine (dates, IDs, counts).
*   **Do** use negative space as a separator. If in doubt, increase padding rather than adding a line.
*   **Do** align all text to the 0.2rem rhythmic grid for a "Developer-Grade" precision look.

### Don’t
*   **Don’t** use pure black (#000000) for text. Use `on_surface` (#1A1C1F) to maintain the premium, soft-black aesthetic.
*   **Don’t** use the `DEFAULT` (4px) radius for large containers; reserve `lg` (16px) or `xl` (0.75rem) for main dashboard cards to soften the technical edge of the app.
*   **Don’t** use standard "Warning" yellows. Use the sophisticated `tertiary` (#683500) tones to keep the palette professional and muted.
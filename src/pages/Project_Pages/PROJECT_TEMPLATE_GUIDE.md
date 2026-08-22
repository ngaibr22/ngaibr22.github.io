# Project Page Template Guide

This guide explains how to create new project pages using the reusable `ProjectPageTemplate` component.

## Quick Start

1. Create a new folder in `/src/pages/Project_Pages/` with your project name (e.g., `FR3YA`, `LOKI`)
2. Create an `index.js` file inside that folder
3. Define your project data and pass it to `ProjectPageTemplate`
4. Add the route to `/src/app/routes.js`

## Template Structure

```jsx
import React from "react";
import "./style.css";
import { ProjectPageTemplate } from "../ProjectPageTemplate";

export const YourProjectName = () => {
  const projectData = {
    projectTitle: "Project Name",
    metaDescription: "SEO friendly description of your project",
    blockDiagram: {
      img: "https://path.to.image/diagram.png",
      alt: "Block Diagram Description",
    },
    systemArchitecture: {
      title: "System Architecture",
      description: "Main description of your system...",
      specs: [
        {
          title: "Frequency Range",
          content: "X - Y GHz",
        },
        {
          title: "Key Features",
          content: (
            <>
              <strong>Feature 1:</strong> Description
              <br />
              <strong>Feature 2:</strong> Description
            </>
          ),
        },
      ],
    },
    performanceHighlights: [
      "Highlight 1",
      "Highlight 2",
      "Highlight 3",
    ],
    schematics: [
      {
        img: "schematic_1.png",
        title: "Stage 1",
        description: "Description of stage 1",
      },
      {
        img: "schematic_2.png",
        title: "Stage 2",
        description: "Description of stage 2",
      },
    ],
    schematicsDescription: "Explore the individual building blocks...",
  };

  return <ProjectPageTemplate projectData={projectData} />;
};
```

## Data Fields Explained

### projectTitle
- String that appears as the main heading
- Also used in the page `<title>` tag

### metaDescription
- SEO description for search engines
- Appears in meta tags

### blockDiagram
- `img`: URL or path to your block diagram image
- `alt`: Alternative text for accessibility

### systemArchitecture
- `title`: Heading for this section (usually "System Architecture")
- `description`: Main paragraph describing your system
- `specs`: Array of specification items
  - Each spec has `title` and `content` (can be string or JSX)

### performanceHighlights
- Array of strings, each one becomes a bullet point

### schematics
- Array of schematic objects
- Each has `img`, `title`, and `description`

### schematicsDescription
- Descriptive text that appears above the schematics gallery

## Example: FR3YA Project

```jsx
import React from "react";
import "./style.css";
import { ProjectPageTemplate } from "../ProjectPageTemplate";

export const FR3YA = () => {
  const projectData = {
    projectTitle: "FR3YA Receiver",
    metaDescription: "FR3YA: A 24 GHz Vector-Modulated Phase Shifter RFIC",
    blockDiagram: {
      img: "https://via.placeholder.com/900x300?text=FR3YA+Block+Diagram",
      alt: "FR3YA Block Diagram",
    },
    systemArchitecture: {
      title: "System Architecture",
      description: "FR3YA is a fully integrated 24 GHz vector-modulated phase shifter RFIC...",
      specs: [
        {
          title: "Frequency",
          content: "24 GHz",
        },
        {
          title: "Key Stages",
          content: (
            <>
              <strong>Input Buffer:</strong> Signal conditioning
              <br />
              <strong>Phase Shifter:</strong> Vector modulation
            </>
          ),
        },
      ],
    },
    performanceHighlights: [
      "24 GHz operation",
      "Vector phase shifting",
      "Low power consumption",
    ],
    schematics: [
      {
        img: "fr3ya_schematic_1.png",
        title: "Input Stage",
        description: "Input buffering and conditioning",
      },
    ],
    schematicsDescription: "Explore the individual stages of FR3YA...",
  };

  return <ProjectPageTemplate projectData={projectData} />;
};
```

## Adding Routes

Update `/src/app/routes.js`:

```jsx
import { YourProjectName } from "../pages/Project_Pages/YourProjectName";

// Inside Routes component:
<Route path="/project/yourprojectname" element={<YourProjectName />} />
```

## Styling

Each project folder can have its own `style.css` file for custom styling. The template uses common CSS classes:
- `.block_diagram_container` - Wraps the block diagram image
- `.system_specs` - Wraps specification items
- `.schematics_gallery` - Grid of schematic cards
- `.performance_list` - List of performance highlights

## Features

✅ Back button navigation to portfolio  
✅ Responsive Bootstrap layout  
✅ SEO-friendly Helmet integration  
✅ Reusable for all projects  
✅ Easy to customize content without touching component logic

# Senior Engineering Guide: Patterns & Workflows

## 1. Core Design Patterns
This codebase relies on established software design patterns to ensure scalability and maintainability. We prioritize **Composition over Inheritance** and **Configuration over Convention**.

### A. The "Renderer" Pattern (Factory + Strategy)
*   **Location**: `src/views/Renderer.tsx`
*   **Concept**: The `Renderer` acts as a **Factory**. It takes a `type` string (the "Strategy") and dynamic `data`, and instantiates the correct React Component.
*   **Why**: This decouples the JSON configuration from the implementation. The JSON doesn't need to know *how* a `HeroBanner` is built, only that it *needs* one.
*   **Code Example**:
    ```tsx
    // The "Factory" maps types to components
    const ComponentMap = {
      HeroBanner: React.lazy(() => import('./hero/HeroBanner')),
      ContactUs: React.lazy(() => import('./contact/ContactUs')),
    };
    ```

### B. The Composite Pattern (Recursive UI)
*   **Location**: `App.tsx` -> `Renderer.tsx`
*   **Concept**: The App renders a list of `Sections`. A `Section` can contain other components.
*   **Why**: It allows us to build complex pages from simple building blocks (atoms/molecules) without complex nesting logic.

### C. The Facade Pattern (Data Hooks)
*   **Location**: `src/hooks/useWebsiteData.ts`
*   **Concept**: This hook acts as a **Facade** for the data layer. The UI components do not know if data comes from a local JSON, a REST API, or GraphQL. They just consume the `Section[]` array.
*   **Why**: It allows us to swap the backend (e.g., from JSON files to a CMS) without refactoring a single UI component.

---

## 2. Workflow: Adding New Code

### Scenario A: Adding a New Section Type (e.g., "PricingTable")

1.  **Define Interface (`src/modal/Section.ts`)**:
    Add the data contract. Strict typing is mandatory.
    ```typescript
    export type PricingTable = {
      id: string;
      plans: { name: string; price: string; features: string[] }[];
    }
    // Update the main Section interface
    data: {
       pricingTable?: PricingTable;
       // ...
    }
    ```

2.  **Create Component (`src/views/pricing/PricingTable.tsx`)**:
    Build the UI. It must be stateless and accept `data` as props.
    ```tsx
    const PricingTable: React.FC<{ data: PricingTable }> = ({ data }) => {
       return <div>...</div>;
    };
    ```

3.  **Register in Factory (`src/views/Renderer.tsx`)**:
    Map the new type string to the component.
    ```tsx
    const sectionsMap = {
       // ... existing
       PricingTable: React.lazy(() => import('./pricing/PricingTable')),
    };
    ```

4.  **Use in JSON (`src/@local-db/client.json`)**:
    ```json
    {
       "type": "PricingTable",
       "data": { "plans": [...] }
    }
    ```

### Scenario B: Adding a Global Feature (e.g., "Dark Mode Toggle")

1.  **Modify Theme Provider (`src/themes/ThemeProvider.tsx`)**:
    Wrap the application in the new context/logic.
2.  **Update Config (`Base.json`)**:
    Add configuration flags if the feature is optional per client.
    ```json
    "theme": { "allowToggle": true }
    ```

---

## 3. Best Practices & Invariants

1.  **Immutable Props**: Components should never mutate their input `data`.
2.  **JSON Purity**: JSON files should contain **Data** only, never logic. If you find yourself writing `isMobile ? ...` in JSON, you are doing it wrong. That logic belongs in the Component or Hook.
3.  **Fail Gracefully**: If a specific section fails to render (e.g., missing data), the `Renderer` should catch it and render `null` (or a fallback) rather than crashing the entire App. `ErrorBoundary` is wrapped at the top level.

## 4. Performance Considerations
*   **Lazy Loading**: Always use `React.lazy` for new Section types. This ensures that a client who doesn't use "PricingTable" never downloads the code for it.
*   **Memoization**: Use `React.memo` for list items (Cards) to prevent re-renders when parent state changes.

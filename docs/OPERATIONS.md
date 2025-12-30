# Enterprise Operations Manual

## 1. Repository Management
*   **Main Branch**: `main`. Always production-ready. Protected branch (require PR reviews).
*   **Feature Branches**: `feature/feature-name` (e.g., `feature/dark-mode`).
*   **Content Updates**: `content/domain-name` (e.g., `content/gayatrilodge-update`).

## 2. CI/CD Pipeline (Recommended)
 To achieve MNC-level reliability, we recommend a GitHub Actions pipeline:
1.  **On Push**:
    *   `npm run lint` (Static Code Analysis)
    *   `npm test` (Unit Testing)
2.  **On Merge to Main**:
    *   `npm run build` (Production Build)
    *   **Deploy**: Auto-deploy to Vercel/Netlify.

## 3. Incident Response Guide
### Scenario A: "My site is blank!"
1.  **Check Console**: Is there a JSON parsing error?
2.  **Verify Config**: Did a trailing comma break the JSON? (Use a JSON validator).
3.  **Fallback**: The system is designed to show a `Loader` or `ErrorPage` rather than crashing entirely.

### Scenario B: "Wrong content showing up!"
1.  **Check Domain Mapping**: Verify `src/hooks/useWebsiteData.ts`.
2.  **Check Isolation**: Ensure `path` properties in JSON are correct (`path: "index"` vs `path: "all"`).

## 4. Onboarding New Clients
**Process (SLA: < 30 Mins)**:
1.  **Clone Base**: Copy `src/@local-db/base.json` -> `src/@local-db/newclient.json`.
2.  **Asset Collection**: Gather Logo, Hero Image, Text.
3.  **Data Entry**: Populate the JSON.
4.  **Register**: Add entry to `useWebsiteData.ts` mapping.
5.  **Deploy**: Git Push.

## 5. Security Protocols
*   **No Hardcoding**: Never put API keys in the code. Use `.env`.
*   **Sanitization**: The `Renderer` should escape HTML content to prevent XSS (Cross-Site Scripting), though React handles this by default.

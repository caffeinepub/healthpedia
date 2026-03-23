# HealthPedia

## Current State
New project — no existing implementation.

## Requested Changes (Diff)

### Add
- Public health and diseases knowledge website
- Disease database with categories: Common Diseases and Serious/Rare Diseases
- Search functionality to find diseases by name or keywords
- Disease detail pages with: Overview, Symptoms, Causes, Treatment, Prevention, FAQs
- Featured disease cards on homepage
- Health & Wellness section
- A-Z disease listing
- Admin ability to add/edit/delete diseases (with authorization)

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Backend: Disease records with name, category, overview, symptoms, causes, treatment, prevention, tags
2. Backend: CRUD for diseases (admin-gated), public read queries, search by name/keyword, filter by category
3. Backend: Seed with sample diseases (common + serious/rare)
4. Frontend: Homepage with hero search, category strip, featured cards, health news section
5. Frontend: Search results page
6. Frontend: Disease detail page with sidebar navigation (Symptoms, Causes, Treatment, Prevention)
7. Frontend: A-Z disease listing page
8. Frontend: Admin panel for managing disease entries
9. Authorization component for admin role

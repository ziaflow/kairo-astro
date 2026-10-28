# Content migration

This change transfers the existing homepage and About content into the shared design, retains the 13 service routes, and preserves the five published article slugs. Category and tag archives are included. Unsupported claims have been removed from service and homepage copy. Template customer and journal pages are excluded.

Image attribution is recorded in image-sources.md. The static route audit is recorded in static-proof.json.

## Validation

The build, Astro checks, and six contact handler tests pass. Static checks cover the current public sitemap, page headings, metadata, local links, and image paths.

Mobile and desktop browser review remains incomplete. Live form persistence, downstream messaging, consent behavior, and booking/reply exits must be verified before release. A successful local build does not establish those outcomes.

The default build stays excluded from indexing. Enable indexing only for a reviewed production build. Existing content drafts remain unchanged.

# Portfolio Audit Report: Charles Kimuyu

## 1. Current Tech Stack
- **Architecture**: Single-file static HTML (no build system, no framework)
- **Styling**: Inline CSS (~570 lines), no preprocessor, limited design tokens
- **JavaScript**: Vanilla JS (3 lines for footer year only)
- **Assets**: Referenced via relative `assets/` folder (not present in upload)
- **Fonts**: System fallback stack (`'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`)
- **No component system, no code splitting, no optimization**

## 2. Current Page Structure
Single-page scroll experience with 10 sections:
1. Header/Navigation (sticky)
2. Hero (with video background)
3. About
4. What I Do (services)
5. Skills
6. Projects (7 projects)
7. Education (2 entries)
8. Certifications (3 entries)
9. Contact
10. Footer

## 3. Reusable Components
**None.** The site is entirely bespoke HTML/CSS with no component abstraction. Every section is hand-coded with duplicated patterns (cards, grids, headings).

## 4. Styling Approach
- CSS custom properties limited to 2 color variables
- No spacing scale, no typography scale
- No consistent border-radius or shadow system
- Manual responsive breakpoint at 768px only
- No dark mode or theme switching

---

## 5. Weak Sections (Detailed)

### Hero Section
- **Headline is generic**: "Turning Data Into Actionable Insights" is overused, doesn't differentiate
- **No value proposition**: Doesn't state who you help or what outcome you deliver
- **Video background has no fallback**: If video fails to load, section appears broken
- **CTA buttons are visually equal**: No clear primary action hierarchy
- **No credibility signals above the fold**: No "CFA Charterholder" badge, no location, no experience indicator

### About Section
- **Wall of text**: 3 long paragraphs without visual breaks or scannable elements
- **No key stats**: Missing metrics (years of experience, projects completed, CFA levels)
- **No visual hierarchy**: Paragraphs are visually identical
- **Photo relies on external asset**: Will break if `assets/EOSR2915.JPG` is unavailable

### Services ("What I Do")
- **No icons or visuals**: Text-only cards are harder to scan
- **Card descriptions are too long**: More like paragraphs than service summaries
- **No clear CTA per service**: "Learn more" or "See example project" missing

### Skills Section
- **No proficiency indicators**: Can't tell if you're beginner or expert in each skill
- **8 cards is overwhelming**: No categorization (Finance, Data, Tools)
- **Intro text is a tag list**: Redundant with the cards below

### Projects Section
- **No categorization/filtering**: All 7 projects shown at once
- **Project images will break**: Referenced from `assets/` folder which isn't uploaded
- **Cards are inconsistent sizes**: Some projects have 2 paragraphs, others have 3
- **No "featured" project**: Equal weight to all projects reduces impact
- **CTA per project is weak**: "View Project" is generic
- **No live demo links**: Only GitHub links (recruiters may not click through)

### Education Section
- ** CFA description is weak**: "Intensive program covering..." is generic
- **No verification links**: CFA Institute profile, university transcript links missing
- **Cards lack visual distinction**: Same style as other sections

### Certifications Section
- **No verification badges**: No clickable credential IDs or certificate links
- **Missing certifications**: Python, Power BI, Financial Modeling certs lack authority signals
- **Dates are vague**: "2023", "2024" without months

### Contact Section
- **Emojis as icons**: 💼 🐙 📧 are unprofessional for executive audience
- **No contact form**: Forces email-only outreach
- **No calendar/scheduling link**: Friction for booking a call
- **No location or timezone**: Important for international recruiters

### Navigation
- **No mobile hamburger menu**: Links shrink to 0.9rem on mobile, will wrap poorly
- **No active section indicator**: User doesn't know where they are on the page
- **No scroll progress indicator**
- **Logo isn't a link**: Only has click handler, no semantic `<a>` tag

### Footer
- **Minimal**: Only copyright
- **Missing**: Quick links, social links, back-to-top button

---

## 6. Broken or Inconsistent UI
- **Project cards have left padding issue**: `.project-content` has `padding-right` only on desktop, inconsistent
- **Skill cards text-align: left while section heading is center**: Visual disconnect
- **Contact gradient is different from hero overlay**: No color consistency system
- **Emoji icons render differently across devices/OS**: No control over appearance
- **No focus styles defined**: Keyboard navigation is invisible
- **No hover state on nav links**: Only opacity change, no underline or background

## 7. Poor Mobile Responsiveness
- **Single breakpoint at 768px only**: Tablet (769px-1024px) gets desktop layout
- **Navigation links shrink to 0.9rem**: Illegible on small screens, will wrap to 2 lines
- **Hero padding reduces**: But font sizes don't scale proportionally
- **About grid stacks to 1 column**: Good, but text remains centered (harder to read)
- **Project image heights fixed**: 220px may crop important visuals
- **No touch-friendly tap targets**: Buttons and links may be too small on mobile
- **No landscape orientation handling**

## 8. Weak Copy
- **Hero headline**: Generic, not differentiated
- **Hero subhead**: Tool list ("Python | SQL | Excel...") rather than outcome-focused
- **About section**: Too verbose, uses passive voice ("I sit at the intersection...")
- **Project descriptions**: Use passive voice, bury the impact
- **Contact CTA**: Weak ("Let's Connect" vs "Start a Project")
- **No power words**: Missing terms like "drive", "deliver", "optimize", "transform"

## 9. Missing Credibility Signals
- **No testimonials or recommendations**
- **No client/company logos**
- **No metrics**: "X projects delivered", "Y years experience"
- **No awards or recognition**
- **No speaking engagements or publications**
- **No "As featured in" section**
- **CFA achievement not prominent enough**: Should be a badge/ribbon

## 10. Missing Conversion Elements
- **No clear primary CTA**: "View My Work", "Get In Touch", "Download CV" compete equally
- **No email capture or newsletter**
- **No scheduling/calendar link (Calendly, etc.)**
- **No "Available for work" indicator**
- **No project inquiry form**
- **No LinkedIn/GitHub prominence**: Hidden in contact section only
- **No analytics or tracking setup**

---

## 11. SEO & Metadata Gaps
- **No meta description**
- **No Open Graph tags** (Facebook/LinkedIn sharing)
- **No Twitter Card tags**
- **No structured data** (Schema.org Person, CreativeWork)
- **No canonical URL**
- **No robots meta**
- **No sitemap reference**
- **No preload hints for critical assets**

## 12. Accessibility Issues
- **No skip-to-content link**
- **No focus-visible styles**
- **No reduced-motion support**
- **Video background has no `aria-label` or pause control**
- **Color contrast not verified**: Blue on white may fail WCAG AA
- **No semantic HTML structure**: `<section>` tags exist but no `<main>`, `<article>`
- **Heading hierarchy**: Not verified (multiple h2s without proper nesting)

## 13. Performance Concerns
- **Video background**: Large file, autoplay, no poster image
- **No lazy loading**: All images load immediately
- **No resource hints**: No preconnect, preload, or prefetch
- **No image optimization**: Full-size images likely being served
- **No CSS optimization**: ~570 lines of unused/duplicate potential
- **No caching strategy**

---

## Recommended New Structure

```
1. Navigation (sticky, mobile hamburger, active section indicator)
2. Hero (value prop, credibility badges, primary/secondary CTAs)
3. About (key stats, concise bio, photo, CFA badge)
4. Services (4 service cards with icons, short descriptions)
5. Skills (categorized with proficiency bars)
6. Featured Projects (3 highlighted, filterable by category)
7. All Projects (remaining 4, expandable)
8. Experience/Credibility (timeline, metrics, CFA callout)
9. Education & Certifications (combined, with verification links)
10. Contact (form, social links, availability status)
11. Footer (links, social, back-to-top, copyright)
```

## Priority Improvements
| Priority | Improvement | Impact |
|----------|-------------|--------|
| Critical | Fix mobile navigation | Usability |
| Critical | Add project images/fallbacks | Visual integrity |
| Critical | Improve hero copy + CTA hierarchy | Conversion |
| High | Add scroll animations | Premium feel |
| High | Add skill proficiency indicators | Credibility |
| High | Add SEO metadata | Discoverability |
| High | Improve About section readability | Engagement |
| Medium | Add contact form | Conversion |
| Medium | Add accessibility features | Inclusion |
| Medium | Add structured data | SEO |
| Low | Dark mode | Nice-to-have |

# Shri Kadasiddheshwar Public School (SKPS), Hukkeri
## Client Content & Data Input Requirements Guide

This document lists all the custom assets, text copy, stats, links, and documents that need to be provided by the school administration (the client) to replace the current placeholder content and complete the site build.

---

### Table of Contents
1. [Global Header & Navigation](#1-global-header--navigation)
2. [Hero Banner Section](#2-hero-banner-section)
3. [Key Performance Indicators (Stats Row)](#3-key-performance-indicators-stats-row)
4. [About Us Section](#4-about-us-section)
5. [School Life Section](#5-school-life-section)
6. [Floating Announcement & Quick Links Marquee](#6-floating-announcement--quick-links-marquee)
7. [News & Events Gallery & Ticker](#7-news--events-gallery--ticker)
8. [Under Construction / Launch Page](#8-under-construction--launch-page)
9. [Missing Global Elements (Recommendations)](#9-missing-global-elements-recommendations)

---

### 1. Global Header & Navigation
*Located in [layout.tsx](app/layout.tsx)*

These elements appear at the very top of every page.

| Data Item | Current Placeholder Value | Input Type | Required Specification / Recommendation |
| :--- | :--- | :--- | :--- |
| **Navbar Brand Logo** | `/navbarlogo.png` | Image File | A high-quality logo of the school (preferably transparent PNG). Recommended height: `64px`. |
| **School Name Title** | `"Shri Kadasiddheshwar Public School"` | Plain Text | Formal name of the institution for SEO indexing and headers. |
| **Location Subtitle** | `"Hukkeri"` | Plain Text | Branch, location, or affiliation subtitle. |
| **Navbar Menu Links** | Home, About Us, Admissions, News & Events, Bulletin, Contact Us | Links (URLs) | Target destinations for each menu button. If external pages exist or other routes are built (e.g. `/about`, `/contact`), specify the URLs. |
| **Search Functionality** | Anchor target `#` | System Config | Clarification on whether a search system is required, or if this button should trigger a search overlay/input. |

---

### 2. Hero Banner Section
*Located in [page.tsx (Lines 6-107)](app/page.tsx)*

The first impression banner of the home page.

| Data Item | Current Placeholder Value | Input Type | Required Specification / Recommendation |
| :--- | :--- | :--- | :--- |
| **Hero Banner Image** | `/banner1.png` | Image File | High-resolution hero shot of the school building, campus, or active students.<br>• **Desktop:** `1920x600px` (or `16:5` ratio). Keep text/face safe-zones away from the bottom-left curve.<br>• **Mobile:** `800x800px` (or `1:1` ratio). |
| **Curved Swoosh Crest Logo** | `/favicon_io/bg_removed_logo.png` | Image File | Transparent circular crest logo of the school. Fits in the white curved swoosh. |
| **Hero Brand Tagline / Logo Text** | `/HEROD.png` | Image File | High-resolution styled text asset showing the school name or primary tagline that overlays the desktop swoosh. Recommended transparent PNG. |

---

### 3. Key Performance Indicators (Stats Row)
*Located in [page.tsx (Lines 109-155)](app/page.tsx)*

A numerical grid highlighting the school's achievements.

| Stat Name | Current Stat Counter | Current Label Text | Input Type |
| :--- | :--- | :--- | :--- |
| **Stat 1: Student Count** | `1,000+` | `Students` | Number + Text |
| **Stat 2: Staff Count** | `50+` | `Expert Staff` | Number + Text |
| **Stat 3: Results Success** | `100%` | `Results` | Number + Text |
| **Stat 4: Campuses / Focus** | `1` | `Dynamic Campus` | Number + Text |

---

### 4. About Us Section
*Located in [page.tsx (Lines 157-237)](app/page.tsx)*

A brief introduction section welcoming users to the site.

| Data Item | Current Placeholder Value | Input Type | Required Specification / Recommendation |
| :--- | :--- | :--- | :--- |
| **Section Tagline** | `"About Us"` | Plain Text | Short uppercase category label. |
| **Main Section Headline** | `"A Legacy of Learning, A Future of Discovery."` | Plain Text | 2-line catchy headline. |
| **Introduction Copy** | `"Shri Kadasiddheshwar Public School (SKPS) has been a pioneer in education in Hukkeri, shaping future leaders..."` | Rich Text / Paragraph | A ~3-4 sentence welcoming description of the school, its values, history, and mission. |
| **"View More" Link** | Target URL `#` | Link (URL) | Destination page where users can read the detailed history (e.g. `/about-us` or a PDF document). |
| **Background Watermark Text** | `"SKPS"` | Plain Text | Styled giant visual watermark text overlaying the background orbs. |

---

### 5. School Life Section
*Located in [page.tsx (Lines 239-311)](app/page.tsx)*

Premium banner focusing on student experience and active life on campus.

| Data Item | Current Placeholder Value | Input Type | Required Specification / Recommendation |
| :--- | :--- | :--- | :--- |
| **Background Photo** | `/section-2/BG.png` | Image File | High-quality background image of the campus or classroom. Sized to fit `1920x800px` (object-cover). |
| **Student Foreground Photo 1** | `/section-2/student.png` | Image File | Cut-out (transparent background) image of a younger student holding a pencil. Sits on the left side of the visual area. |
| **Student Foreground Photo 2** | `/section-2/student1.png` | Image File | Cut-out (transparent background) image of a student with a backpack. Sits on the right side. |
| **Section Tagline** | `"School Life At SKPS"` | Plain Text | Uppercase section tracker label. |
| **Main Cursive Headline** | `"Where young minds become Future Ready"` | Plain Text | Primary text + cursive script emphasis. |
| **Short Description** | `"A refined school environment built around joyful learning, disciplined routines, creative exposure..."` | Paragraph | A 1-2 sentence description summarizing life on campus. |
| **"Discover School Life" Link** | Target URL `#` | Link (URL) | Destination URL for the primary gallery or school activities page. |

---

### 6. Floating Announcement & Quick Links Marquee
*Located in [page.tsx (Lines 313-355)](app/page.tsx)*

A scrolling banner containing quick links to announcements or documents.

| Item Link Name | Current Target Placeholder | Input Type | Required Asset / URL Link |
| :--- | :--- | :--- | :--- |
| **2026-27 Fees** | `#` | Link / Document | Fee structure PDF file or page URL. |
| **Notification** | `#` | Link / Document | Latest official announcements page. |
| **Syllabus** | `#` | Link / Document | Curriculum download links or page. |
| **Bus Routes** | `#` | Link / Document | Transport details PDF or page. |
| **Brochure-2026** | `#` | Link / Document | School marketing brochure PDF. |
| **NIRF** | `#` | Link / Document | NIRF accreditation page or certification files. |
| **Admissions Open** | `#` | Link / Page | Registration form or online application portal. |

---

### 7. News & Events Gallery & Ticker
*Located in [page.tsx (Lines 357-495)](app/page.tsx)*

Represents current announcements, event photo galleries, and news tickers.

| Data Item | Current Placeholder Value | Input Type | Required Specification / Recommendation |
| :--- | :--- | :--- | :--- |
| **Events Styled Title Image** | `/section-4/events.png` | Image File | Custom stylized title word graphics (e.g. outline styling of "Events"). |
| **Gallery Circle Image 1** | Unsplash photo (`Convocation Ceremony`) | Image File | Photo showing school graduation, academics, or formal events. Dimensions: `600x600px` (square cropped). |
| **Gallery Circle Image 2** | Unsplash photo (`Guest Speakers`) | Image File | Photo of classroom activities, seminars, or cultural assemblies. Dimensions: `600x600px` (square cropped). |
| **Gallery Circle Image 3** | Unsplash photo (`Sports Team`) | Image File | Photo of sports, athletics, or outdoor campus activities. Dimensions: `600x600px` (square cropped). |
| **Gallery Circle 4 Target** | `"Explore"` | Link (URL) | Target link destination when users click the gradient "Explore" circle. |
| **Short Summary Copy** | `"Shri Kadasiddheshwar Public School is committed to fostering academic excellence, creative expression..."` | Paragraph | Summary copy describing updates, press highlights, or event engagement. |
| **Ticker Event 025** | Title: `"SKPS Welcomes New Academic Session"`<br>Date: `"December 13, 2025"` | Text + Date | Headline of recent/upcoming announcement. |
| **Ticker Event 026** | Title: `"SKPS Annual Sports Meet 2026"`<br>Date: `"January 20, 2026"` | Text + Date | Headline of recent/upcoming announcement. |
| **Ticker Event 027** | Title: `"SKPS Inter-School Science Exhibition"`<br>Date: `"February 15, 2026"` | Text + Date | Headline of recent/upcoming announcement. |
| **Ticker Event 028** | Title: `"SKPS Cultural Fest & Alumni Meet"`<br>Date: `"March 05, 2026"` | Text + Date | Headline of recent/upcoming announcement. |

---

### 8. Under Construction / Launch Page
*Located in [under-construction/page.tsx](app/under-construction/page.tsx)*

The landing page indicating work is in progress.

| Data Item | Current Placeholder Value | Input Type | Required Specification / Recommendation |
| :--- | :--- | :--- | :--- |
| **Banner Notice** | `"We're building something new — launching soon."` | Plain Text | Short top alert notice. |
| **Headline** | `"Website Under Construction"` | Plain Text | Main page heading. |
| **Body Copy** | `"We're working hard to bring you a great experience. Please check back soon."` | Paragraph | Detail message explaining the maintenance state. |

---

### 9. Missing Global Elements (Recommendations)
During the codebase review, it was identified that some standard school website components are currently omitted. The client should prepare content for these should they wish to implement them:

1. **Global Footer:**
   - **Contact Information:** Official mailing address, phone numbers (administrative, admissions), and email addresses.
   - **Affiliation Data:** Board affiliation details (e.g. CBSE affiliation number, registration codes).
   - **Quick Links:** Sitemap directory, terms of service, privacy policy, and developer credits.
   - **Social Links:** Links to official Facebook, Instagram, YouTube, or Twitter pages.
2. **Admissions Page Content:**
   - Detailed application guidelines, age eligibility charts, required documents checklist, online application portal link.
3. **Faculty Directory:**
   - Names, qualifications, roles, and profiles of key administrative staff (e.g. Principal's message, management committee).
4. **Mandatory Disclosures:**
   - Academic calendars, PTA committee details, safety certificates (fire, sanitation, building safety), and book list disclosures (standard CBSE requirement).

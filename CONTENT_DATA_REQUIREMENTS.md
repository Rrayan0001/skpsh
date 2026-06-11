# Shri Kadasiddheshwar Public School (SKPS), Hukkeri
## Website Content & Data Requirements List

This guide serves as a complete content checklist for the school administration (the client). It is organized section by section according to the codebase. It specifies exactly what data fields (headings, labels, paragraphs, counters, and document links) are required to replace the general placeholder content and customize the site for SKPS Hukkeri.

---

## Table of Contents
1. [Global Header & Navigation](#1-global-header--navigation)
2. [Hero Slider Section](#2-hero-slider-section)
3. [Key Performance Indicators (Stats Counters)](#3-key-performance-indicators-stats-counters)
4. [About Us Section](#4-about-us-section)
5. [School Life Highlight Section](#5-school-life-highlight-section)
6. [Floating Quick Links Marquee](#6-floating-quick-links-marquee)
7. [News & Events Gallery & Description](#7-news--events-gallery--description)
8. [Upcoming Events Scrolling Ticker](#8-upcoming-events-scrolling-ticker)
9. [Campus Life Photo Grid & Celebrations](#9-campus-life-photo-grid--celebrations)
10. [Global Footer Section](#10-global-footer-section)
11. [Website Under Construction Page](#11-website-under-construction-page)

---

### 1. Global Header & Navigation
*Code Location: [layout.tsx (Lines 43-131)](file:///Users/mrrayan07/Desktop/SK_School/app/layout.tsx#L43-L131)*

The header navigation appears on top of every page. The client needs to confirm the branding text and navigation routes.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **School Name / Brand Title** | Main school name displayed in the navbar. | `"Shri Kadasiddheshwar Public School"` | `"Shri Kadasiddheshwar Public School"` |
| **Location Subtitle** | Subtext under the main school name indicating the branch or location. | `"Hukkeri"` | `"Hukkeri"` (or `"Yamkanmardi Branch"` if applicable) |
| **Navbar Menu Item 1** | Primary navigation link. | `"Home"` | `"Home"` (leads to `/`) |
| **Navbar Menu Item 2** | Link to general school information. | `"About Us"` | `"About Us"` (can link to `/about` or page anchor) |
| **Navbar Menu Item 3** | Link to admission forms and procedures. | `"Admissions"` | `"Admissions"` (can link to `/admissions` or page anchor) |
| **Navbar Menu Item 4** | Link to galleries and announcements. | `"News & Events"` | `"News & Events"` (can link to `/news-events`) |
| **Navbar Menu Item 5** | Link to CBSE mandatory disclosures and forms. | `"Mandatory Disclosure"` | `"CBSE Disclosures"` or `"Mandatory Disclosures"` |
| **Navbar Menu Item 6** | Link to school office contacts and query forms. | `"Contact Us"` | `"Contact Us"` (can link to `/contact`) |

---

### 2. Hero Slider Section
*Code Location: [page.tsx (Lines 5-24, 43-158)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L5-L24)*

The hero banner displays a rotating gallery. While images are already handled, the descriptive text tags (alt tags) and tagline text overlays must be finalized.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Banner 1 Descriptive Text** | Image accessibility and fallback text description. | `"Shri Kadasiddheshwar Public School banner"` | `"Main administrative building and front garden landscape of SKPS Hukkeri"` |
| **Banner 2 Descriptive Text** | Image accessibility and fallback text description. | `"Shri Kadasiddheshwar Public School banner two"` | `"SKPS students conducting experiments in the secondary science laboratory"` |
| **Banner 3 Descriptive Text** | Image accessibility and fallback text description. | `"Shri Kadasiddheshwar Public School banner three"` | `"A group of elementary school students reading books in the SKPS library"` |
| **Desktop Brand Tagline / Overlay Text** | The tagline or core values text laid over the desktop curve. | Loads text image `/herosection/HEROD.png` | `"Shri Kadasiddheshwar Public School — Yamkanmardi Road, Hukkeri"` or `"Nurturing Excellence, Inspiring Leadership"` |

---

### 3. Key Performance Indicators (Stats Counters)
*Code Location: [page.tsx (Lines 160-206)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L160-L206)*

A section highlights key school achievements and statistics in a prominent grid row.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Stat 1 Counter** | Numeric or text statistic for student strength. | `"1,000+"` | `"1,200+"` |
| **Stat 1 Label** | Label text under Stat 1 counter. | `"Students"` | `"Enrolled Students"` |
| **Stat 2 Counter** | Numeric or text statistic for teaching faculty strength. | `"50+"` | `"65"` |
| **Stat 2 Label** | Label text under Stat 2 counter. | `"Expert Staff"` | `"Experienced Educators"` |
| **Stat 3 Counter** | Academic success rate indicator. | `"100%"` | `"100%"` |
| **Stat 3 Label** | Label text under Stat 3 counter. | `"Results"` | `"CBSE Board Success Rate"` |
| **Stat 4 Counter** | Details of campus size, structure, or branches. | `"1"` | `"4-Acre"` or `"23"` |
| **Stat 4 Label** | Label text under Stat 4 counter. | `"Dynamic Campus"` | `"Modern Green Campus"` or `"Smart Classrooms"` |

---

### 4. About Us Section
*Code Location: [page.tsx (Lines 208-289)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L208-L289)*

An introductory welcome statement showing the school's identity, history, and vision.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Section Tagline** | The small uppercase text label preceding the main header. | `"About Us"` | `"Welcome to SKPS Hukkeri"` |
| **Main Section Headline** | The primary eye-catching headline of the section (2 lines). | `"A Legacy of Learning, A Future of Discovery."` | `"Empowering Minds, Inspiring Character & Shaping Futures."` |
| **Welcome / Introduction Paragraph** | Main welcoming text. A ~3-4 sentence paragraph describing the school's mission, standard curriculum, and focus on holistic education. | `"Shri Kadasiddheshwar Public School (SKPS) has been a pioneer in education in Hukkeri, shaping future leaders and innovators. With a strong foundation in academic excellence and holistic development, we continue to push boundaries to provide quality education focused on character, curiosity, and community engagement..."` | `"Established in 2003, Shri Kadasiddheshwar Public School (SKPS), Hukkeri is dedicated to providing high-quality education under the CBSE curriculum. We focus on intellectual development, moral strength, and physical fitness to nurture responsible citizens. Through state-of-the-art facilities and student-centric learning methods, we guide our students to excel in academics, sports, and creative fields."` |
| **View More Button Text & URL** | Call to action button text and destination link. | Button: `"VIEW MORE"`<br>Link: `#` | Button: `"EXPLORE OUR HISTORY"` or `"READ PRINCIPAL'S MESSAGE"` <br>Link: `/about` or `/about-us.pdf` |
| **Watermark Text** | The giant translucent outline watermark text in the background. | `"SKPS"` | `"SKPS"` |

---

### 5. School Life Highlight Section
*Code Location: [page.tsx (Lines 290-363)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L290-L363)*

A premium overlay banner emphasizing student life, co-curricular highlights, and general metrics.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Section Tagline** | Small uppercase tag label on the top left. | `"School Life At SKPS"` | `"VIBRANT STUDENT LIFE"` |
| **Main Header (Regular Text)** | First part of the main section headline. | `"Where young minds become"` | `"Empowering children to become"` |
| **Cursive Emphasis Text** | Bottom stylized handwritten cursive portion of the main headline. | `"Future Ready"` | `"Lifelong Learners"` or `"Leaders of Tomorrow"` |
| **Short Description Paragraph** | A 1-2 sentence description of life on campus, routine, and discipline. | `"A refined school environment built around joyful learning, disciplined routines, creative exposure, and the confidence every child deserves."` | `"A nurturing school environment built on values, joyful learning, sports discipline, and artistic exposure, helping every child discover their true potential."` |
| **Internal Metric 1** | Student strength highlight. | `1000+ Students` | `1200+ Confident Students` |
| **Internal Metric 2** | Faculty highlight. | `50+ Faculty` | `65+ Caring Educators` |
| **Internal Metric 3** | Results highlight. | `100% Results` | `100% Excellence Rate` |
| **Discover Button Text & URL** | Main call-to-action button and redirect target. | Button: `"Discover school life"` <br>Link: `#` | Button: `"DISCOVER SCHOOL LIFE"` or `"EXPLORE ACTIVITIES"` <br>Link: `/school-life` or `/campus-gallery` |

---

### 6. Floating Quick Links Marquee
*Code Location: [page.tsx (Lines 364-406)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L364-L406)*

A scrolling link banner showing vital school files and portal links. The administration needs to supply real PDF document files or web addresses for these links.

| Item No. | Quick Link Display Title | Target Document / URL Requirement | Example Resource Link |
| :--- | :--- | :--- | :--- |
| **Link 1** | `"2026-27 Fees"` | Official PDF outlining fee structure for the new school year. | `/docs/skps_fee_structure_2026_27.pdf` |
| **Link 2** | `"Notification"` | Latest school circular or announcements page. | `/news-events/circulars` |
| **Link 3** | `"Syllabus"` | Curriculum index or CBSE syllabus downloads page. | `/docs/syllabus_academic_2026.pdf` |
| **Link 4** | `"Bus Routes"` | School bus route list and pick-up/drop timing sheet. | `/docs/school_transportation_routes.pdf` |
| **Link 5** | `"Brochure-2026"` | Official school marketing and informational prospectus brochure. | `/docs/skps_admission_brochure_2026.pdf` |
| **Link 6** | `"NIRF"` / `"CBSE Disclosures"` | Mandatory CBSE disclosure document or accreditation records. | `/docs/cbse_mandatory_public_disclosure.pdf` |
| **Link 7** | `"Admissions Open"` | External registration portal or internal query form. | `/admissions/application-form` |

---

### 7. News & Events Gallery & Description
*Code Location: [page.tsx (Lines 408-456, 458-513)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L408-L456)*

Shows upcoming circulars and quick gallery items.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Main Section Heading** | Title for the updates block. | `"News & Events"` | `"Academic News & Events"` |
| **Section Summary Paragraph** | Short summary paragraph detailing educational programmes and commitment to student development. | `"Shri Kadasiddheshwar Public School is committed to fostering academic excellence, creative expression, and strong community values. We offer a diverse set of programmes and activities that help students grow intellectually, socially, and emotionally..."` | `"Keep up-to-date with our active school community. At SKPS, we celebrate academic breakthroughs, community service, sports trophies, and the vibrant creative milestones achieved by our students and staff throughout the session."` |
| **Gallery Circle 1 Alt Tag** | Descriptive label for photo bubble 1. | `"Convocation Ceremony"` | `"High school students tossing caps at the Annual Convocation Ceremony"` |
| **Gallery Circle 2 Alt Tag** | Descriptive label for photo bubble 2. | `"Guest Speakers"` | `"Principal welcoming guest lecturer at the SKPS Educational Seminar"` |
| **Gallery Circle 3 Alt Tag** | Descriptive label for photo bubble 3. | `"Sports Team"` | `"SKPS Under-16 Football team celebrating victory in the district tournament"` |
| **Explore Circle URL** | Destination of the interactive "Explore" circle. | Link: `#` | Link: `/gallery` or `/news-events/archives` |

---

### 8. Upcoming Events Scrolling Ticker
*Code Location: [page.tsx (Lines 480-508)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L480-L508)*

A horizontal ticker displaying upcoming schedules. The client needs to supply 4 real events with official dates.

| Event No. | Event ID Code | Event Title Text | Event Target Date |
| :--- | :--- | :--- | :--- |
| **Event 1** | `"025"` | `"SKPS Welcomes New Academic Session"` | `"December 13, 2025"` (or e.g. `"June 15, 2026"`) |
| **Event 2** | `"026"` | `"SKPS Annual Sports Meet 2026"` | `"January 20, 2026"` (or e.g. `"November 10, 2026"`) |
| **Event 3** | `"027"` | `"SKPS Inter-School Science Exhibition"` | `"February 15, 2026"` (or e.g. `"December 05, 2026"`) |
| **Event 4** | `"028"` | `"SKPS Cultural Fest & Alumni Meet"` | `"March 05, 2026"` (or e.g. `"January 18, 2027"`) |

---

### 9. Campus Life Photo Grid & Celebrations
*Code Location: [page.tsx (Lines 515-644)](file:///Users/mrrayan07/Desktop/SK_School/app/page.tsx#L515-L644)*

An editorial asymmetrical photo grid highlighting festivals, assemblies, and celebrations on campus.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Section Tagline** | Tiny uppercase label on the top left. | `"Campus Life"` | `"CAMPUS LIFE & VALUES"` |
| **Section Headline** | Main heading of the grid section. | `"Life at SKPS"` | `"Learning, Celebrating & Growing"` |
| **Section Header Paragraph** | General description of extracurriculars, national events, and morals. | `"At Shri Kadasiddheshwar Public School, Hukkeri, education goes beyond academics to embrace our rich cultural heritage and moral foundations. Through festive celebrations like Ganesh Chaturthi and national programs, we instill deep-rooted values..."` | `"At SKPS Hukkeri, we prioritize building strong moral values, national pride, and respect for our cultural heritage. From grand national day programs to traditional festivities, our campus serves as a platform for holistic value-based learning."` |
| **Gallery View More URL** | Link for the "View Full Gallery" button. | Link: `/under-construction` | Link: `/gallery` or `/campus-life` |
| **Grid Item 1: Tag / Label** | Small tag overlaying Image 1. | `"Annual Celebration"` | `"Annual Function"` |
| **Grid Item 1: Title** | Headline overlaying Image 1. | `"Teachers' Day Ceremony"` | `"Teachers' Day Celebration"` |
| **Grid Item 1: Description** | Copy overlaying Image 1. | `"Students honor their mentors with heartfelt presentations and spoken-word tributes on the school stage."` | `"Our student council organizes special stage dramas, dances, and gratitude speeches to honor the dedication of our teaching staff."` |
| **Grid Item 2: Tag / Label** | Small tag overlaying Image 2. | `"National Programme"` | `"Independence Day"` |
| **Grid Item 2: Title** | Headline overlaying Image 2. | `"Azadi Ka Amrit Mahotsav"` | `"79th Independence Day Celebrations"` |
| **Grid Item 2: Description** | Copy overlaying Image 2. | `"The entire school community assembles to celebrate India's independence milestone with pride and patriotism."` | `"Students present patriotic songs, parade drills, and traditional regional dances in the main assembly yard, honoring our freedom fighters."` |
| **Grid Item 3: Tag & Title** | Small overlay text for Image 3. | Tag: `"Gratitude"` <br>Title: `"Honouring Our Guides"` | Tag: `"Moral Education"` <br>Title: `"Respecting Elders & Gurus"` |
| **Grid Item 4: Tag & Title** | Small overlay text for Image 4. | Tag: `"Discipline"` <br>Title: `"Morning Assembly"` | Tag: `"School Discipline"` <br>Title: `"Daily Morning Assembly"` |
| **Grid Item 5: Tag & Title** | Small overlay text for Image 5. | Tag: `"Values"` <br>Title: `"Morning Prayer"` | Tag: `"Inner Peace"` <br>Title: `"Daily Meditation & Prayer"` |
| **Grid Item 6: Tag / Label** | Small tag overlaying bottom wide Image. | `"Cultural Festival"` | `"Festival Celebration"` |
| **Grid Item 6: Title** | Headline overlaying bottom wide Image. | `"Ganesh Chaturthi Celebrations"` | `"Ganesh Chaturthi Celebrations"` |
| **Grid Item 6: Description** | Copy overlaying bottom wide Image. | `"Community dignitaries join our school family to celebrate Ganesh Chaturthi, fostering cultural pride and unity among students."` | `"The school installs Lord Ganesha's clay idol on campus, conducting traditional prayers and educational sessions explaining the cultural significance of the festival."` |

---

### 10. Global Footer Section
*Code Location: [layout.tsx (Lines 137-330)](file:///Users/mrrayan07/Desktop/SK_School/app/layout.tsx#L137-L330)*

Located on every page bottom. Contains contact info, legal badges, social links, and working hours.

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **School Branding Subtitle** | Brand location text. | `"Public School, Hukkeri"` | `"Public School, Hukkeri (Yamkanmardi Road)"` |
| **Description Copy** | A brief 2-sentence school overview. | `"Affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Shri Kadasiddheshwar Public School is dedicated to fostering academic excellence, character development, and holistic growth in Hukkeri, Karnataka."` | `"Affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Shri Kadasiddheshwar Public School is committed to creating an environment that fosters critical thinking, moral uprightness, and physical fitness in Hukkeri."` |
| **Credential Badge 1** | School's CBSE affiliation code. | `"CBSE Affiliation: 830385"` | `"CBSE Affiliation No: 830385"` |
| **Credential Badge 2** | School's board index code. | `"School Code: 45314"` | `"CBSE School Code: 45314"` |
| **Credential Badge 3** | Establishment year. | `"Est. 2003"` | `"Established: 2003"` |
| **Admissions Office Address** | Physical address of the main administration. | `"Hukkeri, Belagavi, KA — 591309"` | `"Kadasiddheshwar Nagar, Yamkanmardi Road, Hukkeri, Belagavi District, Karnataka — 591309"` |
| **Admissions Phone Number** | Official phone number (active hours). | `"+91 8333-256567"` | `"+91 8333-256567"` (or mobile: `"+91 9448155255"`) |
| **Admissions Email** | Public email address. | `"office@skpshukkeri.edu.in"` | `"office@skpshukkeri.edu.in"` (or `"admissions@skpshukkeri.edu.in"`) |
| **Office Hours** | Opening hours for general inquiries. | `"Mon – Sat: 9:00 AM – 3:30 PM, Sunday: Closed"` | `"Monday – Saturday: 8:30 AM – 3:30 PM, Sunday: Closed"` |
| **Location Map Iframe** | The Google Maps embedded address. | Targets: `Shri Kadasiddheshwar Public School, Hukkeri` embed query. | Keep as is (iframe points directly to the real school location in Hukkeri). |
| **Google Maps Link** | Anchor tag to open maps in browser. | `"https://maps.google.com/?q=Shri%20Kadasiddheshwar%20Public%20School,%20Hukkeri"` | `"https://maps.google.com/?q=Shri%20Kadasiddheshwar%20Public%20School,%20Hukkeri"` |
| **Footer Copyright Notice** | Ownership info. | `"&copy; {Year} Shri Kadasiddheshwar Public School, Hukkeri. All rights reserved."` | `"&copy; 2026 Shri Kadasiddheshwar Public School, Hukkeri. All rights reserved."` |
| **Footer Affiliation Status** | Text details. | `"Affiliation Status: Permanent School Affiliation (Affiliated to CBSE, Delhi)"` | `"Affiliated to the Central Board of Secondary Education, New Delhi (Affiliation No. 830385)"` |
| **Social Links** | URL links for social profile pages. | Facebook, Instagram, and YouTube (currently pointing to placeholders like `facebook.com`). | - FB: `https://facebook.com/skpshukkeriofficial`<br>- IG: `https://instagram.com/skpshukkeriofficial`<br>- YT: `https://youtube.com/@skpshukkeri` |

---

### 11. Website Under Construction Page
*Code Location: [under-construction/page.tsx (Lines 11-59)](file:///Users/mrrayan07/Desktop/SK_School/app/under-construction/page.tsx#L11-L59)*

Used for routes that are still under development (like Admissions, About page, etc.).

| Requirement / Heading | Field Description | Current General Value | Example Real Data (SKPS Hukkeri) |
| :--- | :--- | :--- | :--- |
| **Top Alert Notification** | Scrolling text banner at the top of page. | `"We're building something new — launching soon."` | `"Notice: Academic details and portal uploads are currently updating."` |
| **Page Breadcrumb Tag** | Header label block. | `"Shri Kadasiddheshwar Public School, Hukkeri"` | `"Shri Kadasiddheshwar Public School, Hukkeri"` |
| **Main Headline** | Big centered page header. | `"Website Under Construction"` | `"Page Under Construction"` |
| **Main Description Copy** | Center instruction paragraph. | `"We're working hard to bring you a great experience. Please check back soon."` | `"Our team is currently updating class schedules, teacher directories, and downloadable syllabus forms. We will go live shortly."` |
| **Progress Subtext** | Progress bar subtext. | `"Updates are in progress."` | `"Updating databases..."` |

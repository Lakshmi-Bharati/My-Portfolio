export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDesc: string
  tech: string[]
  color: string
  gradient: string
  icon: string
  links: { label: string; href: string }[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'kokumi',
    title: 'Kokumi Manufacturing Portal',
    category: 'Vue.js / Frappe',
    description: 'Schema-driven dynamic UI workspace with nested BOM trees, version control workflows, and automated dropdown API resolution.',
    longDesc: 'Architected and built a custom JSON schema-driven dynamic UI rendering engine for Kokumi\'s ERP. Rather than hand-coding every view, the system dynamically parses DocType JSON configurations to generate full-fledged forms with tabs, collapsible sections, column breaks, and custom field validation. Features a nested BOM tree designer, dirty-state session recovery, and automated mapping of searchable dropdown lists (apiList.ts) for linked doctypes. Configured comprehensive Cypress E2E test suites for validating multi-page forms, drag-and-drop actions, and conditional validation scopes (depends_on).',
    tech: ['Vue.js 3', 'TypeScript', 'Pinia', 'Frappe / ERPNext', 'Python', 'MariaDB', 'Cypress E2E', 'REST API', 'Vite'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
    icon: '🏭',
    links: [],
    highlights: [
      'JSON schema-driven UI parser (schemaParser.ts) converting DocType definitions to forms',
      'Dynamic layouts supporting Tab Breaks, collapsible sections, and multi-column forms',
      'Centralized API dropdown mapper (apiList.ts) with custom SearchableDropdown widgets',
      'Session restoration guards and local storage dirty-state backup for interrupted inputs',
      'Nested BOM Tree designer with slide-out drawer interfaces and custom state composables',
      'Version control workflows (Save, Submit, Amend, Duplicate) with backend state sync',
      'Cypress E2E test scripts covering complex multi-page inputs and drag-and-drop behaviors',
    ]
  },
  {
    id: 'kcs-platform',
    title: 'Katalyst Consulting Services Platform',
    category: 'Multi-Tenant SaaS',
    description: 'Consolidated 5 corporate web domains into a single headless CMS & database instance—reducing database redundancy by 80%.',
    longDesc: 'Designed and deployed a highly scalable multi-tenant architecture utilizing a consolidated Directus CMS and PostgreSQL database to serve five distinct corporate brand frontends (including katalystcs.com, katalystcs.com.au, katalystcs.co.in, and alchmy.xyz). Engineered runtime tenant resolution via hostname mapping, and implemented an advanced content inheritance model (inherit_content_from) that merges master layout configurations with localized SEO metadata overrides. Designed dynamic regional filtering across 33 database collections (news, FAQs, banners) allowing global content fallback.',
    tech: ['Vue.js 3', 'Directus CMS', 'PostgreSQL', 'Docker Compose', 'Redis', 'Vite', 'Tailwind CSS'],
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    icon: '🏢',
    links: [
      { label: 'katalystcs.com', href: 'https://www.katalystcs.com/' },
      { label: 'katalystcs.com.au', href: 'https://www.katalystcs.com.au/' },
      { label: 'katalystcs.co.in', href: 'https://www.katalystcs.co.in/' },
      { label: 'alchmy.xyz', href: 'https://alchmy.xyz/' },
    ],
    highlights: [
      'Multi-tenant architecture serving 5 distinct domains from 1 consolidated Directus instance',
      'Reduced database redundancy by 80% and minimized overall hosting overhead',
      'Dynamic routing and runtime tenant resolution via hostname mapping (resolveCurrentSite)',
      'Advanced layout inheritance merging master content structures with localized SEO metadata',
      'Regional data filtering across 33 collections (FAQs, news, slides) using site-specific scopes',
      'Server deployment with Docker Compose, PostgreSQL schema migrations, and Redis caching',
    ]
  },
  {
    id: 'vtiger-namaskar',
    title: 'VTiger Namaskar (Task & Complaint SPA)',
    category: 'VTiger CRM / Vue.js',
    description: 'Real-time service request and complaint logging interface inside Vtiger CRM with cascading task types, SLA countdowns, and background audio alarm sirens.',
    longDesc: 'Created \'Namaskar\', a highly responsive single-page application (SPA) integrated inside Vtiger CRM for real-time task and complaint management. Designed cascading select inputs that dynamically route departments and task types, including room-specific schedulers for DND and Wakeup calls. Implemented a background scan worker that queries scheduled tasks every 30 seconds, alerts users through flashing modal countdowns, and plays a continuous emergency audio siren using the HTML5 Web Audio API (OscillatorNode) until silenced. Integrated custom SLA countdown timers and auto-resolution state triggers.',
    tech: ['Vue.js 2.7', 'VTiger CRM', 'vcap.js', 'Web Audio API', 'Bootstrap 5', 'Flatpickr', 'Chart.js'],
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    icon: '🔔',
    links: [],
    highlights: [
      'Cascading department and task select fields with automatic redirection routing',
      'Real-time task polling scans with flashing modals and continuous AudioContext sirens',
      'Visual SLA timers and status countdown indicators in a compact data listing',
      'DND call and Wakeup call schedulers with auto-resolve CRM PUT triggers upon expiration',
      'Historical timeline updates log grouping ModComments, ModTracker, emails, and SMS',
      'Role-based access locks restricting data views using employee email records lookup',
    ]
  },
  {
    id: 'vtiger-onboarding',
    title: 'VTiger HR Onboarding App',
    category: 'VTiger CRM / Vue.js',
    description: 'Dual-role onboarding tracker showing a dark timeline agenda for recruits and a visual stage stepper progress dashboard for HR admins.',
    longDesc: 'Developed a dual-role HR Onboarding SPA integrated into Vtiger CRM. For HR Administrators, it renders a recruitment metrics dashboard containing candidate progress grids, stage progress steppers (Requisition, Day 1, Day 2, Closed), and drag-and-drop meeting calendars. For new hires, it renders a custom, highly styled dark timeline agenda highlighting scheduled induction meetings and formalities. Features an automated background alarm overlay playing loop audio notifications when a meeting is starting, with auto-cancel safety timeouts.',
    tech: ['Vue.js 2.7', 'Vue Router', 'VTiger CRM', 'vcap.js', 'Chart.js', 'Bootstrap 5', 'Animate.css'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #812d8d 0%, #6b2175 100%)',
    icon: '🤝',
    links: [],
    highlights: [
      'Dual-role authorization routing distinct UIs for HR Admins vs. new recruits',
      'Visual onboarding stage stepper tracking candidate milestones from joining to closure',
      'Interactive time-grid calendar supporting drag-and-drop induction meeting scheduling',
      'Emotion survey logger capturing candidate mood metrics using dynamic emoji UI ratings',
      'Meeting alarm check overlays playing warning notification audio tracks on upcoming slots',
      'Automatic CRM meeting cancellations if the user fails to confirm within 5 minutes',
    ]
  },
  {
    id: 'vtiger-tracker',
    title: 'VTiger Project & Procurement Tracker',
    category: 'VTiger CRM / Vue.js',
    description: 'Phase-aware Gantt and Kanban board tracker managing Critical Path, Procurement, and Pre-Opening task categories conjoined with Vtiger Products & Assets.',
    longDesc: 'Engineered a dynamic, phase-aware Project Tracker SPA integrated with Vtiger CRM. The application tracks complex projects by separating them into Critical Path (CP), Procurement (PR), and Pre-Opening (PO) categories, locked behind route guards. Features a custom Gantt-style spreadsheet rendering conjoined progress cells across dynamically calculated weekly columns, and a double-API synced procurement list combining Vtiger Products and Assets with Kanban drag-and-drop boards, bulk editing, and Indian Rupee currency representation.',
    tech: ['Vue.js 2.7', 'Vue Router', 'VTiger CRM', 'vcap.js', 'Chart.js', 'Bootstrap 5'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    icon: '📈',
    links: [],
    highlights: [
      'Phase-aware chevrons (CP/PR/PO) with status-aware color fills and route protection guards',
      'Gantt-style weekly tracking spreadsheet with conjoined cells forming progress bars',
      'Dual API synchronization loading and mapping both Products and Assets in a single list',
      'Kanban drag-and-drop task boards dynamically updated using Vtiger PUT endpoints',
      'Audit trails viewer page (/updates) displaying ModTracker history with old vs new changes',
      'Sticky horizontal table scrolling fixed at the viewport bottom for ease of navigation',
    ]
  },

  {
    id: 'vtiger-audit',
    title: 'VTiger QA & Brand Audit App',
    category: 'VTiger CRM / Vue.js',
    description: 'Comprehensive QA reporting app with dynamic compliance score calculation, interactive media players, and client-side PDF compilation.',
    longDesc: 'Built an executive-level QA reporting and visualization dashboard integrated directly inside Vtiger CRM using a Vue.js frontend and the VCAP UI-API bridge. Features an overall aggregate view alongside department-specific breakdowns, compiling score dials with color progression, and dynamic Chart.js dashboards. Created interactive media players for inline auditor proofs (images and video attachments) and a complete document compiler (html2pdf.js) enabling users to search CRM directories, compose emails, and distribute automated audit reports as PDF attachments.',
    tech: ['Vue.js 2.7', 'VTiger CRM', 'vcap.js Bridge API', 'Chart.js', 'Bootstrap 5', 'html2pdf.js', 'Quill Editor', 'jQuery'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    icon: '📊',
    links: [],
    highlights: [
      'Circular compliance scoring dials with dynamic percentage evaluation logic and star ratings',
      'Aggregated reporting with top-performing departments bar charts using Chart.js',
      'Dynamic NC (Non-Compliance) ticketing logs pulling live CRM comment streams and email threads',
      'Custom media modals with theater playback overlays for auditor photo/video proofs',
      'Client-side PDF compiler (html2pdf.js) with custom page-breaking rules at table rows',
      'Embedded CRM mail compose suite to search users and send PDF reports as attachments',
      'Native CSS print stylesheets optimizing margins and hiding interactive navigation elements',
    ]
  },
  {
    id: 'matoshri-hospital',
    title: 'Matoshri Hospital Portal',
    category: 'Freelance / React.js',
    description: 'Patient-centric medical portal with online appointment booking, dynamic department grids, and interactive healthcare scheme directories.',
    longDesc: 'Designed and built a patient-facing web application for Matoshri Hospital in Nashik, India. Developed a responsive frontend using React.js and Vite. The portal features a dynamic appointment scheduling system, interactive modules displaying government and private healthcare schemes (such as MJPJAY and PM-JAY) with eligibility checklists, detailed departments profiles (ICU, Cardiology, etc.), and comprehensive diagnostic/health packages directories. Engineered clean form validation scopes for appointment submissions and optimized the layouts for high-performance mobile viewport access.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6)', 'CSS3', 'Form Validation', 'Framer Motion'],
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    icon: '🏥',
    links: [],
    highlights: [
      'Custom appointment scheduling form with step-based user inputs and data validations',
      'Interactive healthcare schemes index (MJPJAY, PM-JAY) explaining government benefits and documents checklist',
      'Dynamic departments grid showing medical specialties, consultant directories, and services descriptions',
      'Responsive healthcare packages and diagnostic pricing table with visual comparison cards',
      'High-performance asset bundling and SEO optimization achieving near-perfect Lighthouse scores',
    ]
  },
  {
    id: 'sourcing-platform',
    title: 'Sourcing & Procurement Platform',
    category: 'Full Stack (Spring Boot + React)',
    description: 'Real-time collaborative procurement platform for Buyers, Suppliers & Logistics — built with WebSockets & Spring Boot.',
    longDesc: 'Developed at Samvav Labs (Dec 2024 – Jun 2025). Connects Buyers, Suppliers, and Logistics for streamlined bid management. Features real-time WebSocket rank updates, RFI/RFP modules, and pricing tables.',
    tech: ['React.js', 'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'WebSocket', 'REST API', 'JPA'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    icon: '📦',
    links: [],
    highlights: [
      'Real-time WebSocket updates for rank and messaging',
      'Spring Boot backend with JPA/Hibernate & MySQL',
      'Dynamic UI: conditional tab navigation, lot-level interactions',
      'Content-based RFI/RFP, pricing tables, rank-based bidding with overtime logic',
      'File uploads, user-specific access control, JSON request/response handling',
      'Modular React.js components with stateful logic & form validations',
    ]
  },
]

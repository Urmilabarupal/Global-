import { Course, FacultyMember, NoticeItem, ResultItem, GalleryItem, InstituteSettings, AdmissionEnquiry } from '../types';

export const INITIAL_SETTINGS: InstituteSettings = {
  name: "Global Coaching Classes & Computer Education",
  hindiName: "ग्लोबल कोचिंग क्लासेज & कंप्यूटर एजुकेशन, अनूपगढ़",
  tagline: "ज्ञानम् परमं भूषणम् (Knowledge is the Supreme Ornament)",
  directorName: "बलराम नोखवाल",
  primaryPhone1: "94130-94840",
  primaryPhone2: "95094-46840",
  whatsappNumber: "9413094840",
  addressHindi: "गवर्नमेंट हॉस्पिटल के सामने, मेडिकल के पीछे, गणेश मंदिर के पास, दशहरा ग्राउंड के सामने, अनूपगढ़",
  addressEnglish: "Opposite Government Hospital, Behind Medical Store, Near Ganesh Mandir, Opposite Dussehra Ground, Anupgarh (Raj.) - 335701",
  newBatchDay: "सोमवार (Monday)",
  newBatchTime: "प्रातः 9:00 बजे से (9:00 AM)",
  testSeriesDays: "प्रत्येक सोमवार एवं बुधवार (Monday & Wednesday)",
  youtubeUrl: "https://www.youtube.com/@balramnokhwal",
  instagramUrl: "https://www.instagram.com/balramaph7",
  telegramUrl: "https://t.me/globalcoachinganupgarh",
};

export const INITIAL_COURSES: Course[] = [
  {
    id: "cet",
    name: "CET (Common Eligibility Test)",
    nameHindi: "Common Eligibility Test (12th & Graduate Level)",
    category: "Competitive Exams",
    shortDesc: "Complete targeted preparation for all Rajasthan State 12th & Graduate level clerical, constable, and ministerial service examinations.",
    eligibility: "12th Pass / Graduate",
    duration: "4 - 5 Months",
    batchTime: "9:00 AM Daily",
    badge: "Most Popular",
    badgeColor: "orange",
    features: [
      "Rajasthan GK, Geography, History, Art & Culture",
      "General Science, Practical Mathematics & Mental Reasoning",
      "Hindi Grammar & General English Fundamentals",
      "Weekly OMR-Based Mock Test Series",
      "Comprehensive Printed & Handwritten Study Modules"
    ],
    subjects: [
      "राजस्थान का सामान्य ज्ञान (इतिहास, कला-संस्कृति, भूगोल, राजव्यवस्था)",
      "दैनिक विज्ञान (General Science)",
      "तार्किक योग्यता एवं मानसिक क्षमता (Reasoning)",
      "प्रारंभिक गणित (Mathematics)",
      "सामान्य हिन्दी व्याकरण (General Hindi)",
      "General English",
      "कम्प्यूटर ज्ञान एवं सूचना प्रौद्योगिकी (Computer & IT)",
      "समसामयिक घटनाएं (Current Affairs)"
    ],
    preparationModes: [
      "प्रतिदिन 4-5 घंटे विषय विशेषज्ञ अध्यापकों द्वारा कक्षाएं",
      "प्रत्येक सोमवार एवं बुधवार OMR शीट आधारित टेस्ट सीरीज",
      "100% सिलेबस अनुरूप प्रिंटेड व हस्तलिखित नोट्स",
      "विगत वर्षों के प्रश्न पत्रों (PYQs) का विस्तृत समाधान",
      "कमजोर छात्रों हेतु विशेष डाउट काउंटर व मार्गदर्शन",
      "3 दिन की पूर्णतः निःशुल्क डेमो कक्षाएं"
    ],
    syllabusHighlights: [
      "राजस्थान इतिहास, कला, संस्कृति, साहित्य, परंपराएं व विरासत",
      "भारत एवं राजस्थान का भूगोल, जलवायु, नदियां व वनस्पति",
      "भारतीय संविधान की प्रकृति, मौलिक अधिकार, नीति निदेशक तत्व व राजस्थान की प्रशासनिक व्यवस्था",
      "दैनिक विज्ञान: भौतिक एवं रासायनिक परिवर्तन, धातु-अधातु, मानव शरीर व आनुवंशिकी",
      "तार्किक विवेचन एवं विश्लेषणात्मक योग्यता (Reasoning Shortcuts)",
      "संख्या पद्धति, प्रतिशत, लाभ-हानि, साधारण व चक्रवृद्धि ब्याज, समय-दूरी",
      "संधि, समास, उपसर्ग, प्रत्यय, पर्यायवाची, विलोम, शब्द व वाक्य शुद्धि",
      "Tenses, Voice, Narration, Articles, Prepositions & Technical Glossary"
    ]
  },
  {
    id: "reet-l1-l2",
    name: "REET (Level 1 & Level 2)",
    nameHindi: "3rd Grade Teacher Eligibility Examination",
    category: "Teaching Exams",
    shortDesc: "Comprehensive mentorship for Level 1 (Classes 1-5) and Level 2 (SST, Hindi, Science & Mathematics) with intensive pedagogy drills.",
    eligibility: "BSTC / D.El.Ed / B.Ed",
    duration: "5 - 6 Months",
    batchSchedule: "Monday to Saturday (9:00 AM to 2:00 PM)",
    batchTime: "9:00 AM Daily",
    badge: "Fresh Batch",
    badgeColor: "green",
    features: [
      "Child Development & Educational Psychology",
      "Language 1 & Language 2 (Hindi, Sanskrit / English)",
      "In-Depth Subject Specialization (SST / Maths & Science)",
      "Special Monday & Wednesday OMR Test Series",
      "Past 10 Years Solved Question Papers"
    ],
    subjects: [
      "Child Development & Educational Psychology (30 Marks)",
      "Language-I Hindi Grammar & Pedagogy (30 Marks)",
      "Language-II Sanskrit or English Grammar & Pedagogy (30 Marks)",
      "Environmental Studies (EVS - Level 1 - 30 Marks)",
      "Mathematics & Pedagogy (Maths - 30/60 Marks)",
      "Social Studies & Pedagogy (SST - Level 2 - 60 Marks)",
      "General Science & Pedagogy (Science - Level 2 - 30 Marks)"
    ],
    preparationModes: [
      "Separate dedicated batches for Level-1 (BSTC) and Level-2 (B.Ed SST & Science-Maths)",
      "Pedagogy & Child Psychology taught with concept-clarity tricks",
      "Regular Monday & Wednesday OMR-based mock tests with merit ranking",
      "Comprehensive solved paper drills from REET & Teacher exams (2011 to 2024)",
      "100% exam-aligned printed booklets and classroom lecture notes"
    ],
    syllabusHighlights: [
      "Growth & Development Concepts, Role of Heredity and Environment",
      "Learning Theories: Thorndike, Pavlov, Skinner, Kohler, Bandura, and Piaget",
      "Personality, Intelligence Models, Understanding Diverse Learners, and RTE Act 2009",
      "Unseen Prose Passages, Grammar, Language Skills (LSRW), and Remedial Teaching",
      "Sanskrit Grammar & Teaching Methods / English Pedagogy Principles",
      "Ancient Indian Civilizations, Maurya & Gupta Dynasties, Constitution & Geography",
      "Living Organisms, Human Physiology, Motion, Forces, Electricity, Acids, Bases & Salts"
    ]
  },
  {
    id: "ssc-gd-cgl",
    name: "SSC (GD, CGL, CHSL, MTS)",
    nameHindi: "Staff Selection Commission Examination",
    category: "Government Jobs",
    shortDesc: "Rigorous trick-based training for Central Armed Police Forces (GD Constable), CGL, CHSL, and MTS examinations.",
    eligibility: "10th / 12th / Graduate",
    duration: "4 - 6 Months",
    batchTime: "10:00 AM Daily",
    badge: "Recruitment Special",
    badgeColor: "red",
    features: [
      "Fast shortcut tricks for Quantitative Math & Logical Reasoning",
      "Indian History, Polity, Geography & Constitution",
      "Regular Current Affairs & Static GK Masterclasses",
      "CBT (Computer Based Test) Pattern Simulations",
      "Physical Fitness & Medical Assessment Guidance"
    ],
    subjects: [
      "General Intelligence & Logical Reasoning (40 Marks)",
      "General Knowledge & Static GK (40 Marks)",
      "Elementary Mathematics & Quantitative Aptitude (40 Marks)",
      "General Hindi or General English (40 Marks)",
      "Physical Efficiency (PET) & Physical Standard Test (PST) Orientation"
    ],
    preparationModes: [
      "30-second rapid calculation techniques for Quantitative Math & Reasoning",
      "Continuous mock practice aligned with CBT online examination patterns",
      "Every Monday & Wednesday OMR-based tests with strict time management drills",
      "Comprehensive analysis and solutions of past 10 years of SSC exam question papers",
      "Special guidance for GD Constable 5 km physical endurance run and medical standards"
    ],
    syllabusHighlights: [
      "Analogies, Classifications, Number & Letter Series, Coding-Decoding, Blood Relations",
      "Direction Sense, Seating Arrangements, Syllogisms, and Non-Verbal Figures",
      "Indian History, Geography, Constitution, Economy, Static GK & Current Affairs",
      "Percentages, Ratio & Proportion, Averages, Profit & Loss, Simple & Compound Interest, Time & Work",
      "Sentence Correction, Synonyms, Antonyms, Idioms, Phrases, and Vocabulary Mastery"
    ]
  },
  {
    id: "reet-mains",
    name: "3rd Grade Teacher Mains",
    nameHindi: "Primary & Upper Primary Teacher Mains Exam",
    category: "Teaching Exams",
    shortDesc: "Targeted strategy and intensive question-practice batch for Level 1 and Level 2 subject-wise recruitment exams.",
    eligibility: "REET Qualified",
    duration: "4 - 5 Months",
    batchTime: "9:00 AM Daily",
    badge: "Target Batch",
    badgeColor: "blue",
    features: [
      "Rajasthan GK & Educational Scenario",
      "RTE Act 2009 & Contemporary Educational Policies",
      "Detailed Analysis of Core School Subjects",
      "Teaching Methodologies & Information Technology",
      "State-Level Ranking Mock Tests"
    ],
    subjects: ["Rajasthan History & Culture", "Educational Scenario & RTE", "School Subjects", "Pedagogy", "Information Technology"]
  },
  {
    id: "grade-2-teacher",
    name: "Senior Teacher (2nd Grade)",
    nameHindi: "Senior Teacher Grade-II Recruitment",
    category: "Teaching Exams",
    shortDesc: "Complete syllabus coverage for Paper 1 (GK & GS) and Paper 2 (Social Science, Hindi, Maths & Science).",
    eligibility: "Graduation + B.Ed",
    duration: "5 - 6 Months",
    batchTime: "9:00 AM Daily",
    features: [
      "Paper 1: Rajasthan & Indian Geography, History, Polity",
      "Paper 2: Graduate-Level In-Depth Subject Mastery",
      "Educational Psychology & Classroom Pedagogy",
      "Topic-Wise Tests & Full-Length Model Papers"
    ],
    subjects: ["General Knowledge & Educational Psychology", "Subject Paper (SST / Hindi / Maths & Science)"]
  },
  {
    id: "school-lecturer",
    name: "School Lecturer (1st Grade)",
    nameHindi: "School Lecturer Grade-I (PGT)",
    category: "Teaching Exams",
    shortDesc: "Preparation for Paper 1 (General Studies & Educational Management) and Paper 2 (Geography, History, Political Science, Hindi).",
    eligibility: "Post Graduate + B.Ed",
    duration: "6 Months",
    batchTime: "1:00 PM Daily",
    features: [
      "Educational Management & School Administration in Rajasthan",
      "Indian History & Rajasthan Culture",
      "General Science, Mathematics & Statistics",
      "Comprehensive Subject Specialization Teaching"
    ],
    subjects: ["Paper-1 General Studies", "School Management", "Paper-2 Subject Specialization"]
  },
  {
    id: "rajasthan-police",
    name: "Rajasthan Police Constable & SI",
    nameHindi: "Constable & Sub-Inspector Recruitment",
    category: "Government Jobs",
    shortDesc: "Complete syllabus for written examination including Reasoning, Computer Fundamentals, Laws regarding Women & Children, and Rajasthan GK.",
    eligibility: "12th Pass / Graduate",
    duration: "3 - 4 Months",
    batchTime: "8:30 AM Daily",
    badge: "Uniform Special",
    badgeColor: "yellow",
    features: [
      "Computer Fundamentals & Reasoning Ability",
      "General Knowledge, Science & Current Events",
      "Legal Provisions for Crimes Against Women & Children",
      "Weekly OMR-Based Test Drills",
      "Physical Fitness & Running Guidance"
    ],
    subjects: ["Reasoning & Computers", "Rajasthan GK", "General Science & Current Affairs", "Laws on Women & Children"]
  },
  {
    id: "delhi-police",
    name: "Delhi Police Constable",
    nameHindi: "Delhi Police Executive Constable (SSC)",
    category: "Government Jobs",
    shortDesc: "Dedicated target batch for Delhi Police recruitment exam conducted by the Staff Selection Commission.",
    eligibility: "12th Pass + Driving License",
    duration: "3 - 4 Months",
    batchTime: "10:30 AM Daily",
    features: [
      "In-depth GK & Current Affairs practice",
      "Reasoning & Numerical Aptitude shortcut techniques",
      "Computer Fundamentals, MS Excel & Word modules",
      "Previous year question paper based mock tests"
    ],
    subjects: ["General Knowledge", "Reasoning", "Mathematics", "Computer Fundamentals"]
  },
  {
    id: "patwari",
    name: "Rajasthan Patwari",
    nameHindi: "Rajasthan Revenue Board Patwari Exam",
    category: "Government Jobs",
    shortDesc: "Complete package covering General Studies, Mathematics, Reasoning, Hindi, English, and Computers for Patwari recruitment.",
    eligibility: "Graduate + RS-CIT Computer Diploma",
    duration: "4 Months",
    batchTime: "9:00 AM Daily",
    features: [
      "General Science; History, Polity & Geography of India",
      "Geography, History, Culture and Polity of Rajasthan",
      "General English & Hindi Vocabulary and Grammar",
      "Mental Ability, Reasoning & Basic Numeracy",
      "Basic Computer & RS-CIT Syllabus Alignment"
    ],
    subjects: ["General Knowledge", "Rajasthan Special", "General Hindi & English", "Mental Ability & Maths", "Computer Literacy"]
  },
  {
    id: "railway-exams",
    name: "Railway (NTPC, Group D, ALP, RPF)",
    nameHindi: "Railway Recruitment Board (RRB) Examinations",
    category: "Government Jobs",
    shortDesc: "Focused coaching for RRB NTPC, Group D, Assistant Loco Pilot (ALP), Technician, and RPF Constable / SI.",
    eligibility: "10th / ITI / 12th / Graduate",
    duration: "4 - 5 Months",
    batchTime: "11:00 AM Daily",
    features: [
      "Special focus on General Science (Physics, Chemistry, Biology)",
      "Shortcut calculation tricks for Mathematics & Reasoning",
      "General Awareness & Year-Round Current Affairs",
      "Online Computer Based Test (CBT) practice sets"
    ],
    subjects: ["General Science", "Mathematics", "General Intelligence & Reasoning", "General Awareness"]
  },
  {
    id: "vdo-gram-sevak",
    name: "Gram Vikas Adhikari (VDO)",
    nameHindi: "Village Development Officer Recruitment",
    category: "Government Jobs",
    shortDesc: "Structured preparation for Rural Development and Panchayati Raj Department VDO direct recruitment exam.",
    eligibility: "Graduate + Computer Diploma",
    duration: "4 Months",
    batchTime: "9:00 AM Daily",
    features: [
      "Current Affairs, Geography & Natural Resources",
      "Agriculture & Economic Development in India and Rajasthan",
      "History & Culture, Basic Mental Ability",
      "Reasoning, English, Hindi and Mathematics",
      "Administrative setup at State, District, Tehsil & Panchayat levels"
    ],
    subjects: ["Geography & Resources", "Agriculture & Economy", "History & Culture", "Reasoning & Math", "Administrative Setup"]
  },
  {
    id: "lab-assistant",
    name: "Laboratory Assistant",
    nameHindi: "Lab Assistant (Science & Geography)",
    category: "Government Jobs",
    shortDesc: "Specialized coaching for science and geography aspirants preparing for Secondary & College Education recruitment.",
    eligibility: "12th Science (Biology / Maths / Agri) / Geography",
    duration: "4 Months",
    batchTime: "12:00 PM Daily",
    features: [
      "Paper-1: Rajasthan General Knowledge, Geography, History, Culture",
      "Paper-2: NCERT-based Physics, Chemistry & Biology modules",
      "Simplified conceptual teaching of practical principles",
      "Chapter-wise regular mock tests"
    ],
    subjects: ["Rajasthan General Knowledge", "Physics", "Chemistry", "Biology"]
  },
  {
    id: "ras-pre",
    name: "RAS Foundation & Prelims",
    nameHindi: "Rajasthan Administrative Service (Prelims)",
    category: "Competitive Exams",
    shortDesc: "Foundation and preliminary examination preparation batch building deep conceptual clarity for administrative services.",
    eligibility: "Graduation (Final Year / Completed)",
    duration: "8 - 10 Months",
    batchTime: "8:00 AM Daily",
    badge: "Foundation",
    badgeColor: "blue",
    features: [
      "History, Art, Culture, Literature & Heritage of Rajasthan",
      "Geography of India and the World, Indian Constitution & Polity",
      "Political and Administrative System of Rajasthan",
      "Economic Concepts, Indian and Rajasthan Economy",
      "Science & Technology and Logical Reasoning"
    ],
    subjects: ["Rajasthan General Knowledge", "Indian Constitution & Polity", "Geography & Environment", "Economy", "Science & Tech"]
  },
  {
    id: "pre-bstc",
    name: "Pre D.El.Ed / Pre BSTC",
    nameHindi: "Pre D.El.Ed Teacher Entrance Exam",
    category: "School Exams",
    shortDesc: "Post-12th teacher training entrance preparation to secure top ranks and home-district college allotments.",
    eligibility: "12th Appearing / Passed",
    duration: "2 - 3 Months",
    batchTime: "9:00 AM Daily",
    features: [
      "Mental Ability & Logical Reasoning",
      "General Awareness of Rajasthan",
      "Teaching Aptitude & Child Orientation",
      "Language Proficiency: English & Hindi / Sanskrit"
    ],
    subjects: ["Mental Ability", "Rajasthan General Knowledge", "Teaching Aptitude", "Hindi / Sanskrit", "English"]
  },
  {
    id: "ldc-junior-assistant",
    name: "LDC / Junior Assistant",
    nameHindi: "High Court & RSMSSB Junior Assistant",
    category: "Government Jobs",
    shortDesc: "Complete written examination and on-campus typing test preparation for Rajasthan High Court and RSMSSB LDC.",
    eligibility: "12th + RS-CIT",
    duration: "3 - 4 Months",
    batchTime: "10:00 AM Daily",
    features: [
      "General Hindi Grammar (Rules, Prefixes, Suffixes, Corrections)",
      "General English Grammar & Essential Vocabulary",
      "Rajasthan General Knowledge & Current Affairs",
      "In-house Hindi and English Computer Typing Laboratory"
    ],
    subjects: ["General Hindi", "General English", "Rajasthan GK", "Everyday Science & Math"]
  },
  {
    id: "defence-gd",
    name: "Defence (Army GD, Clerk, Tradesman)",
    nameHindi: "Army Agniveer & Defence Recruitment",
    category: "Government Jobs",
    shortDesc: "Rigorous training for Army Agniveer GD, Clerk, Tradesman, and Air Force exams by seasoned mentors.",
    eligibility: "10th / 12th Pass",
    duration: "3 Months",
    batchTime: "8:00 AM Daily",
    features: [
      "General Knowledge, General Science & Practical Arithmetic",
      "Regular model test drills based on Army GD pattern",
      "Physical fitness, running & medical assessment tips",
      "Disciplined military-style training routine"
    ],
    subjects: ["General Knowledge", "General Science", "Basic Maths", "Logical Reasoning"]
  },
  {
    id: "pti-preparation",
    name: "Physical Teacher (PTI 1st & 2nd Paper)",
    nameHindi: "Physical Training Instructor (PTI)",
    category: "Teaching Exams",
    shortDesc: "Authentic preparation for PTI recruitment Paper 1 (General Knowledge) and Paper 2 (Physical Education Principles).",
    eligibility: "C.P.Ed / D.P.Ed / B.P.Ed",
    duration: "4 Months",
    batchTime: "9:30 AM Daily",
    features: [
      "History, Principles & Foundation of Physical Education",
      "Anatomy, Physiology & Kinesiology",
      "Sports Psychology, Yoga & Physical Fitness",
      "Rajasthan GK, History & Contemporary Affairs"
    ],
    subjects: ["Paper 1 General Knowledge", "Paper 2 Physical Education Concepts & Sports Rules"]
  },
  {
    id: "set-net-jrf",
    name: "SET / UGC NET / JRF",
    nameHindi: "National & State Eligibility Test (UGC NET / SET)",
    category: "Teaching Exams",
    shortDesc: "Higher education eligibility and Assistant Professor test preparation covering Paper-1 and core subjects.",
    eligibility: "Master's Degree (55% Min)",
    duration: "5 Months",
    batchTime: "2:00 PM Daily",
    features: [
      "Teaching & Research Aptitude",
      "Information and Communication Technology (ICT)",
      "People, Development and Environment",
      "Higher Education System in India"
    ],
    subjects: ["Teaching Aptitude", "Research Methodology", "Comprehension & ICT", "Higher Education"]
  },
  {
    id: "rscit-computer",
    name: "RS-CIT Computer Education",
    nameHindi: "Rajasthan State Certificate in IT (RKCL Approved)",
    category: "Computer Education",
    shortDesc: "Official RKCL-certified computer diploma mandatory for all Rajasthan government competitive exams (Patwari, LDC, Police, etc.).",
    eligibility: "10th Pass",
    duration: "3 Months (132 Hours)",
    batchTime: "Flexible Batches (8:00 AM to 6:00 PM)",
    badge: "RKCL Authorized",
    badgeColor: "green",
    features: [
      "Computer Fundamentals, Windows 10/11, File Management",
      "MS Office Suite: Word, Excel (Formulas & Data), PowerPoint",
      "Internet, Cyber Security, Government Portals (SSO, e-Mitra)",
      "Official RKCL study material & online iLearn assessments",
      "Certificate recognized across all Rajasthan Government departments"
    ],
    subjects: [
      "Computer Fundamentals & Windows 10/11 Architecture",
      "Microsoft Word (Document Formatting, Layout & Mail Merge)",
      "Microsoft Excel (Formulas, Pivot Tables, Charts & Analysis)",
      "Microsoft PowerPoint (Slide Design, Transitions & Animations)",
      "Internet, Email, Online Security & Digital Payments (UPI/NetBanking)",
      "Cyber Security Awareness & Information Technology Act",
      "Rajasthan State Digital Portals (SSO ID, e-Mitra, Jan Aadhaar & DigiLocker)"
    ],
    preparationModes: [
      "Dedicated high-speed PC for every individual student (1 Student = 1 PC)",
      "Authorized RKCL syllabus curriculum and online iLearn internal assessments",
      "Exhaustive OMR and objective question bank targeting 95%+ examination scores",
      "Personalized hands-on mentoring by certified IT instructors"
    ],
    syllabusHighlights: [
      "Computer Hardware, Operating Systems, Input/Output Devices, and Memory Storage",
      "Windows Management, File and Folder Directories, and Control Panel Configuration",
      "MS Word: Tables, Headers/Footers, Page Layouts, Paragraph Styles & Document Security",
      "MS Excel: Spreadsheets, Mathematical & Logical Formulas (SUM, AVERAGE, IF, VLOOKUP)",
      "MS PowerPoint: Slide Transitions, Custom Animations, Timing & Presentation Delivery",
      "SSO Portal Account Setup, Accessing State Services, e-Mitra Forms & Online Certificates"
    ]
  },
  {
    id: "typing-lab",
    name: "Hindi & English Typing Course",
    nameHindi: "Speed Typing Laboratory Training",
    category: "Computer Education",
    shortDesc: "Specialized speed typing drills for Rajasthan High Court, LDC, Junior Assistant, and SSC CHSL skill tests.",
    eligibility: "Any Student",
    duration: "2 - 3 Months",
    batchTime: "Flexible Hours",
    badge: "Speed Lab",
    badgeColor: "blue",
    features: [
      "Hindi Typing: KrutiDev 010 and Mangal (Inscript / Remington GAIL)",
      "English Typing: Touch Typing technique aiming for 35+ to 50+ WPM",
      "Exam-replica software with time-bound accuracy testing",
      "Dedicated PC for every student in air-cooled modern computer lab"
    ],
    subjects: [
      "Hindi Typing: KrutiDev 010 Font Mastery",
      "Hindi Typing: Mangal Inscript & Remington GAIL Layouts",
      "English Touch Typing: Home, Upper, Lower Rows & Number Pad",
      "Speed Building & Real-Time Accuracy Drills"
    ],
    preparationModes: [
      "Real-time exam software simulations with timer-based speed & accuracy evaluation",
      "Daily 1 to 2 hours of intensive hands-on typing practice",
      "Direct simulation drills tailored to Rajasthan High Court & LDC exam standards",
      "Air-conditioned modern typing lab with ergonomic keyboards"
    ],
    syllabusHighlights: [
      "Ergonomic Finger Placement on Home Row, Top Row, and Bottom Row",
      "Special Characters, Alt Codes, and Punctuation Mastery",
      "Speed Enhancement Drills: Progressing from 35 WPM to 50+ Words Per Minute",
      "Minimizing Backspace Usage while Maintaining 95%+ Net Accuracy"
    ]
  }
];

export const INITIAL_NOTICES: NoticeItem[] = [
  {
    id: "notice-1",
    title: "Fresh Batches Commencing Every Monday at 9:00 AM",
    date: "22 Sep 2026",
    category: "New Batch",
    description: "New classroom batches for CET (Common Eligibility Test), REET Level-1 & Level-2, Rajasthan Police, SSC, and Railway commence this Monday. Limited seats per batch; reserve your admission today.",
    isImportant: true,
    linkText: "Enrol Now"
  },
  {
    id: "notice-2",
    title: "Regular OMR Test Series: Every Monday & Wednesday",
    date: "20 Sep 2026",
    category: "Test Series",
    description: "OMR-based weekly test series conducted every Monday and Wednesday for all enrolled students. Answer keys and merit rank results are published on the notice board the same evening.",
    isImportant: true,
    linkText: "View Test Schedule"
  },
  {
    id: "notice-3",
    title: "RS-CIT Computer Course: Admissions Open (RKCL Authorized)",
    date: "18 Sep 2026",
    category: "New Batch",
    description: "Admissions open for the upcoming RKCL batch of RS-CIT, the essential government-certified IT course. 10th pass candidates can register at the institute counter with required documents.",
    isImportant: false,
    linkText: "Course Details"
  },
  {
    id: "notice-4",
    title: "Sunday Special Marathon Class: Educational Psychology & GK",
    date: "15 Sep 2026",
    category: "Exam Alert",
    description: "A 4-hour high-yield revision marathon on Child Development, Educational Pedagogy, and Rajasthan Art & Culture will be held this Sunday. All aspirants are advised to attend on time.",
    isImportant: false,
    linkText: "Read More"
  }
];

export const INITIAL_FACULTY: FacultyMember[] = [
  {
    id: "director-balram",
    name: "Balram Nokhwal",
    role: "Founder & Director",
    subject: "Competitive Exam Mentor & GS Specialist",
    experience: "10+ Years Teaching Experience",
    qualification: "M.A., B.Ed, UGC-NET Qualified",
    bio: "Renowned mentor and educator who has guided hundreds of aspirants from Anupgarh into government service. Acclaimed for disciplined pedagogy and precise exam trend analysis.",
    photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
    isDirector: true
  },
  {
    id: "faculty-rajasthan-gk",
    name: "Senior Faculty (Rajasthan GK)",
    role: "Subject Faculty",
    subject: "Rajasthan History, Art, Culture & Geography",
    experience: "8+ Years Experience",
    qualification: "M.A. History, B.Ed",
    bio: "Expert in teaching complete Rajasthan general knowledge through structured maps, mnemonics, and memorable shortcut concepts.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "faculty-maths-reasoning",
    name: "Quantitative Math & Reasoning Specialist",
    role: "Subject Faculty",
    subject: "Mathematics & Mental Ability",
    experience: "7+ Years Experience",
    qualification: "M.Sc. Mathematics",
    bio: "Specialist in zero-formula shortcut techniques that help aspirants solve complex arithmetic and reasoning problems in under 30 seconds for SSC, Railway, and CET.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "faculty-hindi-grammar",
    name: "Hindi Grammar & Pedagogy Specialist",
    role: "Subject Faculty",
    subject: "General Hindi & Language Teaching Methods",
    experience: "9+ Years Experience",
    qualification: "M.A. Hindi, Ph.D. Scholar",
    bio: "Flawless command over Hindi grammar rules, syntax corrections, vocabulary, and teaching methodologies for REET, Sub-Inspector, and High Court LDC.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "faculty-computer-education",
    name: "Computer Education & Typing Instructor",
    role: "Computer Faculty",
    subject: "RS-CIT, MS Office & High Court Typing",
    experience: "6+ Years Experience",
    qualification: "MCA, RKCL Certified Trainer",
    bio: "Proven track record of guiding students to 90%+ scores in RS-CIT and achieving 40+ WPM typing speed for High Court and RSMSSB examinations.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80"
  }
];

export const INITIAL_RESULTS: ResultItem[] = [
  {
    id: "res-1",
    studentName: "Verified Selected Aspirant",
    exam: "REET Level-1 Teacher Recruitment",
    year: "2024",
    result: "Final Selection (Appointed Teacher)",
    rank: "Merit List Qualified",
    rollNumber: "REET-784***12",
    verified: true,
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "res-2",
    studentName: "Verified Selected Aspirant",
    exam: "CET (Senior Secondary Level)",
    year: "2024",
    result: "Score: 218 / 300 Marks",
    rank: "Top 1% Percentile",
    rollNumber: "CET-902***44",
    verified: true,
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "res-3",
    studentName: "Verified Selected Aspirant",
    exam: "Rajasthan Police Constable",
    year: "2023",
    result: "Final Selection (Appointed Constable)",
    rank: "Anupgarh District / Bikaner Range",
    rollNumber: "RP-445***89",
    verified: true,
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "res-4",
    studentName: "Verified Selected Aspirant",
    exam: "Rajasthan Patwari Direct Recruitment",
    year: "2023",
    result: "Final Selection (Appointed Patwari)",
    rank: "State Merit Selected",
    rollNumber: "PAT-332***11",
    verified: true,
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80"
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Focused Classroom Learning Session",
    category: "Classroom",
    caption: "Aspirants preparing for competitive examinations in our quiet, disciplined, air-cooled classrooms.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    date: "Sep 2026"
  },
  {
    id: "gal-2",
    title: "Special Guest Visit: Naresh Kumar SI (CRPF)",
    category: "Events",
    caption: "Warm felicitation and motivational guidance session for students on the visit of Naresh Kumar SI (CRPF) to Global Coaching Classes & Computer Education.",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80",
    date: "Aug 2026"
  },
  {
    id: "gal-3",
    title: "Global Coaching Classes Campus & Flag Hoisting",
    category: "Institute Building",
    caption: "National Independence Day flag hoisting ceremony and staff-student assembly at the Anupgarh campus.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80",
    date: "15 Aug 2026"
  },
  {
    id: "gal-4",
    title: "Computer Laboratory: RS-CIT & Typing Practice",
    category: "Students",
    caption: "Students practicing on the RKCL RS-CIT curriculum and Hindi-English touch typing in our modern IT laboratory.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    date: "Jul 2026"
  },
  {
    id: "gal-5",
    title: "Weekly OMR Test Series Examination Hall",
    category: "Classroom",
    caption: "Disciplined exam hall atmosphere during the bi-weekly Monday and Wednesday OMR test evaluations.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    date: "Sep 2026"
  },
  {
    id: "gal-6",
    title: "Felicitation Ceremony for Selected Students",
    category: "Celebrations",
    caption: "Successful candidates who cleared government exams honored and felicitated by Director Balram Nokhwal.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    date: "Jun 2026"
  }
];

export const WHY_CHOOSE_US_FEATURES = [
  {
    icon: "GraduationCap",
    title: "Experienced Faculty",
    description: "Comprehensive teaching from fundamentals to advanced exam levels by seasoned educators specializing in competitive exams."
  },
  {
    icon: "ClipboardCheck",
    title: "Regular Test Series",
    description: "OMR sheet-based mock examinations every Monday and Wednesday, complete with merit rankings and detailed solutions."
  },
  {
    icon: "Video",
    title: "CCTV Surveillance & Security",
    description: "24x7 CCTV monitoring across the institute premises, guaranteeing discipline and a secure academic environment."
  },
  {
    icon: "Compass",
    title: "Serene & Disciplined Campus",
    description: "Opposite Government Hospital, behind Medical Store near Ganesh Mandir—offering quiet, distraction-free focus."
  },
  {
    icon: "BookOpen",
    title: "Quality Study Notes",
    description: "Meticulously prepared, error-free printed and handwritten modules aligned strictly with the latest examination syllabi."
  },
  {
    icon: "Target",
    title: "Exam-Centric Methodology",
    description: "Precision approach focused on previous 10-year question trends across CET, REET, SSC, Police, and Railway boards."
  },
  {
    icon: "Award",
    title: "Direct Mentorship",
    description: "Personal motivation sessions, exam anxiety mitigation, and time management coaching directly from Director Balram Nokhwal."
  },
  {
    icon: "HelpCircle",
    title: "Doubt Support & Counseling",
    description: "Dedicated post-class doubt clearing sessions where students get one-on-one assistance from subject teachers."
  }
];

export const INITIAL_ENQUIRIES: AdmissionEnquiry[] = [
  {
    id: "enq-101",
    studentName: "Rakesh Kumar",
    fatherName: "Mr. Ramlal",
    mobile: "9829012345",
    courseInterested: "CET (Common Eligibility Test)",
    message: "Seeking admission in the upcoming fresh CET Foundation batch starting Monday at 9:00 AM.",
    submittedAt: "2026-09-18T10:30:00.000Z",
    status: "New"
  },
  {
    id: "enq-102",
    studentName: "Suman Kaswan",
    fatherName: "Mr. Harphool Singh",
    mobile: "9460054321",
    courseInterested: "REET (Level 1 & Level 2)",
    message: "Requesting details regarding fee structure, batch schedule, and Wednesday test series for REET Level-2.",
    submittedAt: "2026-09-19T14:15:00.000Z",
    status: "Contacted"
  }
];

export interface PosterSubjectItem {
  name: string;
  nameEnglish: string;
  marksOrWeightage?: string;
  topics: string[];
}

export interface PosterExamPreparation {
  id: string;
  name: string;
  nameHindi: string;
  badge: string;
  badgeColor: 'orange' | 'green' | 'red' | 'blue' | 'purple' | 'emerald';
  slogan: string;
  eligibility: string;
  duration: string;
  batchSchedule: string;
  targetPosts: string[];
  subjects: PosterSubjectItem[];
  preparationTypes: string[];
  keyHighlights: string[];
}

export const POSTER_FACILITIES_5 = [
  {
    id: "test-series",
    titleHindi: "Regular OMR Test Series",
    titleEnglish: "Regular OMR Test Series",
    iconName: "ClipboardCheck",
    badge: "Every Mon & Wed",
    description: "Exact exam-replica OMR sheet-based test series with rapid turnaround evaluation, statewide merit ranking, and comprehensive detailed solution keys.",
    color: "from-blue-600 to-indigo-700",
    bgLight: "bg-blue-50 text-[#0c2b5e] border-blue-200"
  },
  {
    id: "cctv",
    titleHindi: "CCTV Surveillance",
    titleEnglish: "CCTV Surveillance",
    iconName: "Video",
    badge: "24x7 Campus Security",
    description: "Complete 24x7 high-definition CCTV coverage across all classrooms, corridors, and campus premises ensuring a strictly disciplined and safe learning environment.",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-900 border-amber-200"
  },
  {
    id: "faculty",
    titleHindi: "Experienced Specialist Faculty",
    titleEnglish: "Experienced Specialist Faculty",
    iconName: "GraduationCap",
    badge: "Subject Experts",
    description: "Dedicated subject matter experts for each discipline (General Science, Math, Logical Reasoning, GK, English, Hindi, and Child Psychology) with proven track records.",
    color: "from-emerald-600 to-green-700",
    bgLight: "bg-emerald-50 text-emerald-900 border-emerald-200"
  },
  {
    id: "environment",
    titleHindi: "Peaceful Study Environment",
    titleEnglish: "Peaceful Study Environment",
    iconName: "Compass",
    badge: "Air-Cooled Campus",
    description: "Peaceful, distraction-free campus located opposite Government Hospital, equipped with air-cooled classrooms and comfortable seating for deep study sessions.",
    color: "from-teal-600 to-cyan-700",
    bgLight: "bg-teal-50 text-teal-900 border-teal-200"
  },
  {
    id: "notes",
    titleHindi: "Printed Study Notes",
    titleEnglish: "Printed Study Notes",
    iconName: "BookOpen",
    badge: "100% Syllabus Aligned",
    description: "Concise handwritten formula sheets and premium printed classroom booklets completely aligned with the latest syllabus, eliminating need for external books.",
    color: "from-rose-600 to-red-700",
    bgLight: "bg-rose-50 text-rose-900 border-rose-200"
  }
];

export const POSTER_EXAM_PREPARATIONS: PosterExamPreparation[] = [
  {
    id: "cet",
    name: "CET",
    nameHindi: "Common Eligibility Test (Graduate & Senior Secondary)",
    badge: "Foundation & Target Batch",
    badgeColor: "orange",
    slogan: "Mandatory qualification gateway for Rajasthan Government civil & administrative recruitments",
    eligibility: "12th Standard Pass / Graduate Degree",
    duration: "4 - 5 Months",
    batchSchedule: "Fresh Batch Every Monday at 9:00 AM (4-5 Hours Daily)",
    targetPosts: [
      "Junior Assistant / Clerk Grade II",
      "Rajasthan Police Constable",
      "Patwari & Revenue Board",
      "Village Development Officer (VDO)",
      "Hostel Superintendent (Chatrawas Adhikshak)",
      "Forester & Forest Guard (Vanpal / Vanrakshak)",
      "Sub-Jailor & Platoon Commander"
    ],
    preparationTypes: [
      "4 to 5 Hours Daily Regular Subject-wise Classroom Lectures",
      "Special 30-second rapid shortcut tricks for Quantitative Math & Logical Reasoning",
      "Comprehensive Rajasthan History, Art, Culture, Geography & Administrative Systems",
      "Every Monday & Wednesday OMR-Based Test Series with Instant Merit Rankings",
      "Weekly Topic-wise Doubt Counters and Answer Writing Sessions",
      "Exhaustive Previous 10 Years Question Bank Analysis"
    ],
    keyHighlights: [
      "Separate dedicated streams for 12th Level and Graduate Level CET",
      "High-scoring focus on Computer Literacy, General Hindi & English Grammar",
      "Special emphasis on Rajasthan Government welfare schemes and economic review",
      "100% exam-oriented printed booklets with zero need for external market guides"
    ],
    subjects: [
      {
        name: "Rajasthan General Knowledge & Culture",
        nameEnglish: "Rajasthan History, Art, Culture, Literature & Geography",
        marksOrWeightage: "High Weightage (60-70 Marks)",
        topics: [
          "Ancient Civilizations: Kalibangan, Ahar, Ganeshwar, Balathal and Bairath",
          "Dynastic History of Rajasthan: Rajputs, Chauhans, Rathores, Sisodias, and Kachhwahas",
          "Folk Deities: Ramdevji, Tejaji, Pabuji, Gogaji, Mehaji, and Devnarayanji",
          "Folk Arts, Paintings (Mewar, Marwar, Kishangarh, Hadoti), and Handicrafts",
          "Forts, Palaces, Cenotaphs, Stepwells (Baoris), and Architectural Heritage",
          "Fairs, Festivals, Folk Dances (Ghoomar, Kalbelia, Gair), and Traditional Music Instruments",
          "1857 Revolt in Rajasthan, Tribal & Peasant Movements, and Prajamandal Agitations",
          "Integration of Rajasthan (7 Distinct Phases)",
          "Physical Geography: Thar Desert, Aravalli Ranges, Eastern Plains, Hadoti Plateau",
          "Drainage Systems, Rivers (Chambal, Banas, Luni), Lakes, Dams, and Water Conservation",
          "Climate Zones, Agro-Climatic Regions, Soil Classifications, and Vegetation",
          "Wildlife Sanctuaries, National Parks (Ranthambore, Sariska, Keoladeo), and Tiger Reserves",
          "Mineral Wealth, Renewable Energy (Solar, Wind), and Major Industrial Clusters"
        ]
      },
      {
        name: "Indian History, Polity & Economy",
        nameEnglish: "Indian National Movement, Constitution & Economic Survey",
        marksOrWeightage: "Medium Weightage (25-30 Marks)",
        topics: [
          "Indian National Movement: 1857 to 1947, Key Leaders & Mass Agitations",
          "Indian Constitution: Preamble, Fundamental Rights, Directive Principles, and Fundamental Duties",
          "Union Executive & Legislature: President, Prime Minister, Council of Ministers, Parliament",
          "Judiciary: Supreme Court and High Courts (Jurisdiction & Writ Powers)",
          "State Administration: Governor, Chief Minister, State Legislative Assembly, and Secretariat",
          "Panchayati Raj Institutions & 73rd / 74th Constitutional Amendments",
          "Election Commission, CAG, Union & State Public Service Commissions",
          "Indian Economy: Budget Highlights, Banking System, RBI, GST, and Inflation Trends"
        ]
      },
      {
        name: "Quantitative Aptitude & Mathematics",
        nameEnglish: "Elementary Mathematics & Fast Calculation Tricks",
        marksOrWeightage: "Core Scoring (30-40 Marks)",
        topics: [
          "Vedic Math Short Tricks: Fast Multiplications, Squares, Cubes, and Roots",
          "Percentages and Fractional Equivalents for Instant Problem Solving",
          "Ratio, Proportion, Partnership, and Mixture Alligations",
          "Profit, Loss, Discount, and Market Price Calculations",
          "Simple Interest & Compound Interest Formula-Free Shortcuts",
          "Averages, Weighted Averages, and Age-based Word Problems",
          "Time, Work, Efficiency, and Pipe & Cistern Problems",
          "Time, Speed, Distance, Trains, and Boats & Streams",
          "2D Mensuration: Areas & Perimeters of Circles, Triangles, Quadrilaterals",
          "3D Mensuration: Volume & Surface Area of Cubes, Cylinders, Cones, Spheres"
        ]
      },
      {
        name: "Logical Reasoning & Mental Ability",
        nameEnglish: "Verbal & Analytical Reasoning",
        marksOrWeightage: "Core Scoring (30-40 Marks)",
        topics: [
          "Analogy & Classification (Number, Letter & Word Based)",
          "Number Series, Alphabet Series, and Mixed Continuous Patterns",
          "Coding-Decoding (Letter Shift, Substitution, Matrix, and Symbol Coding)",
          "Blood Relations (Direct Relations, Decoded Family Trees, Pointing Questions)",
          "Direction and Distance Sense with Shadow Problems",
          "Linear and Circular Seating Arrangements",
          "Order and Ranking Comparisons",
          "Syllogisms and Venn Diagrams with Modern Deductive Rules",
          "Mathematical Operations and Missing Number Matrices",
          "Non-Verbal Reasoning: Mirror & Water Images, Paper Folding, Hidden Figures"
        ]
      },
      {
        name: "General Hindi Grammar",
        nameEnglish: "Standard Hindi Grammar & Linguistic Rules",
        marksOrWeightage: "High Scoring (20-30 Marks)",
        topics: [
          "Sandhi & Sandhi Vichhed (Swar, Vyanjan, and Visarga Sandhi)",
          "Samas & Samas Vigrah (Avyayibhav, Tatpurush, Karmadharaya, Dvigu, Dvandva, Bahuvrihi)",
          "Upsarg and Pratyay (Krit & Taddhit Pratyay)",
          "Paryayvachi (Synonyms) and Vilom Shabd (Antonyms)",
          "Anekarthak Shabd and Yugm Shabd (Homophones with distinct meanings)",
          "Vakyansh ke liye Ek Shabd (One Word Substitutions)",
          "Shabd Shuddhi (Spelling Corrections) and Vakya Shuddhi (Grammatical Syntax Errors)",
          "Vachya (Active, Passive, Impersonal) and Kriya (Sakarmak, Akarmak)",
          "Muhavare (Idioms) and Lokoktiyan (Proverbs) with contextual applications",
          "Paribhashik Shabdavali (Official Administrative Terminology in English & Hindi)"
        ]
      },
      {
        name: "General English",
        nameEnglish: "Functional English Grammar & Comprehension",
        marksOrWeightage: "Scoring (15-20 Marks)",
        topics: [
          "Tenses and Sequence of Tenses",
          "Active and Passive Voice (Rule-based transformation)",
          "Direct and Indirect Speech (Narration Rules)",
          "Articles (A, An, The) and Determiners",
          "Prepositions of Time, Place, and Direction",
          "Correction of Sentences (Subject-Verb Agreement, Modals, Pronouns)",
          "Synonyms, Antonyms, and One-Word Substitutes",
          "Idioms & Phrasal Verbs used in Government Exams",
          "Reading Comprehension: Answering questions from unseen passages"
        ]
      },
      {
        name: "Computer Fundamentals & IT",
        nameEnglish: "Information Technology & Office Applications",
        marksOrWeightage: "Technical (15-20 Marks)",
        topics: [
          "Computer Generations, CPU Architecture, Input/Output Devices, and Memory Types",
          "Operating Systems: Windows 10/11 Functions, File Extensions, and Shortcut Keys",
          "MS Word: Tables, Formatting, Mail Merge, Page Layouts, and Print Setup",
          "MS Excel: Formulas (SUM, AVERAGE, IF, COUNTIF), Charts, and Data Sorting",
          "MS PowerPoint: Animations, Slide Transitions, Master Slides",
          "Internet, Web Browsers, Search Engines, Email Protocols (SMTP, POP3, IMAP)",
          "Cyber Security, Viruses, Firewalls, Phishing, and IT Act Fundamentals"
        ]
      },
      {
        name: "Current Affairs & Everyday Science",
        nameEnglish: "National & State Happenings with Everyday Science",
        marksOrWeightage: "Dynamic (20-25 Marks)",
        topics: [
          "Rajasthan Current Affairs: Major Schemes, Flagship Programs, Appointments, Awards, Sports",
          "National & Global Summits, G20/BRICS Outcomes, Military Exercises, Space Missions (ISRO)",
          "Physical & Chemical Changes, Metals, Non-metals, Acids, Bases, Salts",
          "Human Anatomy: Circulatory, Digestive, Nervous, and Immune Systems",
          "Nutrients: Carbohydrates, Proteins, Fats, Vitamins, and Deficiency Diseases",
          "Environmental Ecology, Biodiversity, Food Chains, and Global Warming"
        ]
      }
    ]
  },
  {
    id: "reet",
    name: "REET",
    nameHindi: "Rajasthan Eligibility Examination for Teachers (Level 1 & Level 2)",
    badge: "Teaching Exam Special",
    badgeColor: "emerald",
    slogan: "Specialized conceptual coaching for Level-1 (BSTC) and Level-2 (B.Ed SST & Science-Maths)",
    eligibility: "BSTC / D.El.Ed (Level-1) or B.Ed / Graduation (Level-2)",
    duration: "4 - 6 Months",
    batchSchedule: "Fresh Batch Every Monday at 9:00 AM (Special Pedagogy Drills)",
    targetPosts: [
      "3rd Grade Teacher Level-1 (Primary Classes 1-5)",
      "3rd Grade Teacher Level-2 SST (Upper Primary Classes 6-8)",
      "3rd Grade Teacher Level-2 Science & Mathematics",
      "Special Education Teacher (Visually / Hearing Impaired)",
      "Sanskrit Department Primary & Upper Primary Teacher",
      "2nd Grade & 1st Grade Teacher Foundation"
    ],
    preparationTypes: [
      "Specialized Child Psychology & Pedagogy taught through illustrative real-world case studies",
      "Separate dedicated batches for Level-1 and Level-2 (SST vs Science-Maths streams)",
      "Rigorous practice of past REET and Teacher Recruitment question papers from 2011 to 2024",
      "Every Monday & Wednesday OMR-Based Test Series strictly following Board standards",
      "Special memory mnemonics for Sanskrit grammar rules and Hindi pedagogical principles",
      "NCERT & RBSE Textbook-aligned syllabus coverage from Class 6 to 10"
    ],
    keyHighlights: [
      "100% conceptual mastery of Child Development theories (Piaget, Vygotsky, Kohlberg)",
      "Exhaustive coverage of RTE Act 2009, NCF 2005, NEP 2020, and Action Research",
      "Handwritten summary sheets for rapid last-minute revision",
      "Comprehensive printed study modules with topic-wise question banks"
    ],
    subjects: [
      {
        name: "Child Development & Educational Psychology",
        nameEnglish: "Child Development, Learning Theories & Pedagogy",
        marksOrWeightage: "Mandatory Core (30 Marks / 30 Questions)",
        topics: [
          "Concept of Growth & Development, Principles of Child Development, Role of Heredity and Environment",
          "Theories of Cognitive Development: Jean Piaget, Lev Vygotsky, and Jerome Bruner",
          "Moral Development Theories: Lawrence Kohlberg and Carol Gilligan",
          "Learning Theories: Edward Thorndike (Trial & Error), Ivan Pavlov (Classical Conditioning), B.F. Skinner (Operant Conditioning), Wolfgang Kohler (Insight Learning), Albert Bandura (Social Learning)",
          "Transfer of Learning, Motivation and its Impact on Classroom Learning",
          "Individual Differences: Meaning, Types, and Factors Influencing Diverse Learners",
          "Understanding Special Children: Backward, Gifted, Creative, Disadvantaged, and Learning Disabled (Dyslexia, Dysgraphia, Dyscalculia)",
          "Adjustment & Defense Mechanisms: Rationalization, Compensation, Repression, Projection",
          "Theories of Intelligence: Spearman's Two-Factor, Thurston's Group Factor, Gardner's Multiple Intelligences, Sternberg's Triarchic Model",
          "Right to Free and Compulsory Education Act (RTE 2009) in complete detail",
          "National Curriculum Framework (NCF 2005) & National Education Policy (NEP 2020)",
          "Measurement & Evaluation: Formative and Summative Assessment, CCE (Continuous & Comprehensive Evaluation)",
          "Action Research: Objectives, Steps, and Educational Significance"
        ]
      },
      {
        name: "Language-I: Hindi Grammar & Pedagogy",
        nameEnglish: "Hindi Language, Grammar & Teaching Methods",
        marksOrWeightage: "Language Choice (30 Marks / 30 Questions)",
        topics: [
          "Unseen Prose Passages: Vocabulary, Sandhi, Samas, Gender (Ling), Number (Vachan), Case (Karak)",
          "Word Identification: Tatsam, Tadbhav, Deshaj, Videshi, Synonyms, and Antonyms",
          "Sentence Structure, Sentence Types (Saral, Sanyukt, Mishra), and Punctuation Rules",
          "Idioms (Muhavare) and Proverbs (Lokoktiyan) with real contextual meaning",
          "Principles and Methods of Language Teaching: Direct Method, Grammar-Translation Method, Bilingual Method",
          "Development of Language Skills: Listening, Speaking, Reading, and Writing (LSRW)",
          "Teaching Learning Materials (TLM): Audio-Visual aids, Textbooks, Multi-media resources",
          "Continuous and Comprehensive Evaluation (CCE) in Language Learning",
          "Diagnostic Testing and Remedial Teaching (Upcharatmak Shikshan) for language deficiencies"
        ]
      },
      {
        name: "Language-II: Sanskrit or English Pedagogy",
        nameEnglish: "Sanskrit Grammar & Pedagogy / English Language Pedagogy",
        marksOrWeightage: "Language Choice (30 Marks / 30 Questions)",
        topics: [
          "Sanskrit Unseen Passages: Shabda Roop (Rama, Hari, Guru, Lata, Nadi, Phal), Dhatu Roop (Lat, Lrit, Lang, Lot, Vidhiling Lakaras)",
          "Sandhi: Ach (Vowel), Hal (Consonant), Visarga Sandhi with Sutras",
          "Samas: Avyayibhav, Tatpurush, Karmadharaya, Dvigu, Dvandva, Bahuvrihi",
          "Pratyay: Kridanta (Ktvā, Lyap, Tumun), Taddhita (Matup, Inee), Stri Pratyay (Top, Gīp)",
          "Karak & Vibhakti: Case rules, sentence translation, and grammatical correction",
          "Maheshwara Sutras and Pronunciation Places (Uchcharan Sthana)",
          "Principles of Teaching Sanskrit / English as a Second Language",
          "Methods of Teaching: Bhandarkar Method, Structural Approach, Communicative Language Teaching (CLT)",
          "Remedial Teaching in Second Language Acquisition"
        ]
      },
      {
        name: "Environmental Studies (EVS - Level 1)",
        nameEnglish: "Environmental Science, Family & Ecology for Level 1",
        marksOrWeightage: "Level 1 Mandatory (30 Marks / 30 Questions)",
        topics: [
          "Family & Relations: Nuclear and Joint Families, Social Evils (Child Marriage, Dowry, Child Labour, Intoxication)",
          "Shelters: Types of Houses (Igloo, Stilt, Caravan), Cleanliness, Living Habits of Animals",
          "Our Profession: Agriculture, Animal Husbandry, Traditional Handicrafts of Rajasthan",
          "Public Places and Institutions: Schools, Hospitals, Post Offices, Police Stations, Panchayats",
          "Our Culture & Heritage: National Festivals, State Fairs, Monuments, Forts, Stepwells",
          "Transport and Communication: Road, Rail, Air, Waterways, Traffic Rules",
          "Personal Hygiene, Cleanliness, Health, Nutrition, and Common Communicable Diseases",
          "Plants & Animals: Parts of Plants, Photosynthesis, Flora and Fauna of Rajasthan",
          "Matter & Energy: States of Matter, Heat, Sources of Light, Renewable Energy Sources",
          "Concept and Scope of EVS, Environmental Ethics, Integration with Science and Social Studies",
          "Approaches of Presenting Concepts, Activities, Experiments, Practical Work, Discussion, CCE"
        ]
      },
      {
        name: "Mathematics & Teaching Methodology",
        nameEnglish: "Mathematics & Pedagogy for Level 1 & Level 2",
        marksOrWeightage: "Core Subject (30 or 60 Marks)",
        topics: [
          "Whole Numbers up to 1 Crore, Place Value, Face Value, Roman Numerals",
          "Fundamental Mathematical Operations: Addition, Subtraction, Multiplication, Division",
          "Fractions: Proper, Improper, Mixed, Equivalent Fractions, Comparison of Fractions",
          "Prime and Composite Numbers, Prime Factorization, LCM and HCF",
          "Unitary Method, Averages, Profit and Loss, Simple Interest",
          "Plane and Curved Surfaces, Geometrical Figures: Angles, Triangles, Quadrilaterals, Circles",
          "Length, Weight, Capacity, Time, Area and Perimeter of Rectangles and Squares",
          "Algebra: Algebraic Expressions, Linear Equations, Polynomials (for Level 2)",
          "Nature of Mathematics, Logical Thinking, Place of Mathematics in School Curriculum",
          "Language of Mathematics, Community Mathematics, Evaluation, Diagnostic and Remedial Teaching"
        ]
      },
      {
        name: "Social Studies & Science (Level 2 Streams)",
        nameEnglish: "SST Stream (60 Marks) or Science Stream (30 Marks)",
        marksOrWeightage: "Level 2 Specialization (60 Marks)",
        topics: [
          "SST: Indus Valley Civilization, Vedic Culture, Jainism & Buddhism, Mahajanapadas",
          "Maurya & Gupta Empires, Post-Gupta Period, Bhakti and Sufi Movements",
          "Mughal Administration, Architecture, Maratha Empire, British Rule in India",
          "Indian Constitution and Democracy, Parliament, President, Judiciary, Human Rights",
          "Geography of Earth and Rajasthan: Atmosphere, Hydrosphere, Internal Structure of Earth",
          "Science: Microorganisms, Human Body & Health, Animal Reproduction & Adolescence",
          "Force and Motion, Gravitation, Pressure, Sound, Light, Reflection and Refraction",
          "Electricity & Magnetism, Chemical Substances, Metals & Non-metals, Carbon & its Compounds"
        ]
      }
    ]
  },
  {
    id: "ssc",
    name: "SSC",
    nameHindi: "Staff Selection Commission (GD Constable, CGL, CHSL, MTS)",
    badge: "National Level Recruitment",
    badgeColor: "red",
    slogan: "High-speed shortcut techniques and CBT exam mastery for Central Armed Police Forces & Ministries",
    eligibility: "10th Standard / 12th Pass / Graduate Degree",
    duration: "4 - 6 Months",
    batchSchedule: "Fresh Batch Every Monday at 9:00 AM (Intensive Speed Drills)",
    targetPosts: [
      "SSC GD Constable (BSF, CISF, CRPF, SSB, ITBP, AR, SSF)",
      "SSC CGL (Inspector, Central Excise, Preventive Officer, ASO, Auditor)",
      "SSC CHSL (Lower Division Clerk, Postal Assistant, Data Entry Operator)",
      "SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC/CBN)",
      "Delhi Police Constable & Head Constable (Ministerial / AWO-TPO)",
      "Sub-Inspector in Central Armed Police Forces (CAPFs - CPO SI)"
    ],
    preparationTypes: [
      "30-second rapid calculation formulas for Quantitative Aptitude without pen-and-paper dependency",
      "Logical reasoning pattern decoding with step-by-step analytical shortcut algorithms",
      "Rigorous practice on Computer-Based Test (CBT) and OMR dual-format test simulators",
      "Regular Static General Knowledge and Current Affairs masterclasses",
      "Comprehensive solutions of last 10 years of SSC question papers with difficulty mapping",
      "Physical efficiency guidance for GD Constable: 5 km run endurance and medical criteria"
    ],
    keyHighlights: [
      "Special emphasis on non-verbal reasoning and spatial visualization",
      "Daily speed math calculation drills to optimize score within 60 minutes",
      "Regular Monday & Wednesday OMR test series with all-India percentile benchmarks",
      "Complete study materials including formula charts, vocabulary lists, and practice sets"
    ],
    subjects: [
      {
        name: "General Intelligence & Reasoning",
        nameEnglish: "Verbal, Non-Verbal & Analytical Reasoning",
        marksOrWeightage: "Core Scoring (20-25 Questions / 40-50 Marks)",
        topics: [
          "Analogies: Semantic, Symbolic/Number, and Figural Analogies",
          "Classification: Odd One Out from Words, Numbers, Letters, and Geometric Figures",
          "Series Completion: Number, Alphabet, and Alpha-numeric Continuous Patterns",
          "Coding and Decoding: Coding by Shifting, Substitution, Matrix, and Deciphering Message",
          "Blood Relations: Decoded Relationships, Pointing Puzzles, and Family Trees",
          "Direction and Distance: Angular Turns, Shadow Problems, and Multi-point Paths",
          "Order and Ranking: Position in Line, Shifting Positions, and Between Values",
          "Venn Diagrams and Syllogisms with Statement-Conclusion Deductions",
          "Seating Arrangements: Linear Facing North/South, Circular Inward/Outward",
          "Mathematical Operations: Interchange of Signs and Numbers, Balancing Equations",
          "Non-Verbal Reasoning: Paper Folding, Paper Cutting, Embedded Figures, Mirror and Water Images, Figure Series"
        ]
      },
      {
        name: "Elementary Mathematics & Quantitative Aptitude",
        nameEnglish: "Arithmetic, Algebra & Data Interpretation",
        marksOrWeightage: "Core Scoring (20-25 Questions / 40-50 Marks)",
        topics: [
          "Number Systems: Divisibility Rules, Unit Digits, Remainder Theorems, Factors",
          "LCM and HCF: Word Problems, Ratio-based HCF Questions, Bell Ringing Intervals",
          "Percentages: Fractional Conversions, Successive Percentage Changes, Population Problems",
          "Ratio and Proportion: Mean Proportional, Third/Fourth Proportional, Partnership Ratios",
          "Profit, Loss, and Discount: Dishonest Dealer Problems, Marked Price, Successive Discounts",
          "Simple Interest & Compound Interest: Half-yearly Compounding, Difference between SI & CI",
          "Averages: Cricket Averages, Replaced Member Problems, Weighted Average Formulas",
          "Time and Work: Work Efficiency, Men-Women-Children Equivalence, Wages Distribution",
          "Pipes and Cisterns: Alternate Taps, Leaks, and Tank Capacity Calculation",
          "Time, Speed, and Distance: Average Speed, Relative Speed, Train Crossing Stationary and Moving Objects",
          "Boats and Streams: Upstream, Downstream, and Still Water Speed Problems",
          "Mensuration: Surface Areas and Volumes of 2D and 3D Geometric Solids",
          "Basic Algebra and Data Interpretation: Bar Graphs, Pie Charts, and Tabular Sets"
        ]
      },
      {
        name: "General Knowledge & General Awareness",
        nameEnglish: "Static GK, Indian Polity, History & Current Affairs",
        marksOrWeightage: "Dynamic (20-25 Questions / 40-50 Marks)",
        topics: [
          "Indian History: Indus Valley, Vedic Age, Buddhism, Maurya, Gupta, Delhi Sultanate, Mughals, Freedom Struggle 1857-1947",
          "Indian Geography: Mountains, Passes, River Systems, Major Dams, Ports, National Parks, Biosphere Reserves",
          "Indian Constitution & Polity: Articles, Schedules, Fundamental Rights, President, Prime Minister, Parliament, Supreme Court",
          "Indian Economy: Five-Year Plans, NITI Aayog, Fiscal Policy, Inflation, Banking System, Key Economic Terms",
          "General Science: Physics (Mechanics, Optics), Chemistry (Periodic Table, Everyday Chemicals), Biology (Diseases, Human Systems)",
          "Static GK: Classical & Folk Dances of India, Musical Instruments & Maestros, National Festivals, Temples & Heritage Sites",
          "Sports & Awards: Olympics, Asian Games, World Cups, Bharat Ratna, Padma Awards, Nobel Laureates",
          "Current Affairs: National & International Summits, Defense Exercises, Space Missions, Appointments, Government Schemes"
        ]
      },
      {
        name: "General English or General Hindi",
        nameEnglish: "Linguistic Competence, Grammar & Vocabulary",
        marksOrWeightage: "High Scoring (20-25 Questions / 40-50 Marks)",
        topics: [
          "English: Spotting Errors (Subject-Verb Agreement, Prepositions, Tenses, Pronouns)",
          "English: Fill in the Blanks with appropriate vocabulary and grammatical connectors",
          "English: Synonyms, Antonyms, and Spelling/Misspelled Words Detection",
          "English: Idioms and Phrases with exact contextual meanings",
          "English: One-Word Substitutions and Cloze Test Passage Practice",
          "Hindi: Vartani Shuddhi (Spelling Accuracy) and Vakya Shuddhi (Sentence Syntax)",
          "Hindi: Vilom Shabd (Antonyms), Paryayvachi (Synonyms), and Vakyansh ke liye Ek Shabd",
          "Hindi: Muhavare and Lokoktiyan with sentence usage",
          "Hindi: Unseen Paragraph Comprehension and Cloze Test (Gadyansh)"
        ]
      },
      {
        name: "Physical Endurance & Medical Standards (PET/PST)",
        nameEnglish: "Physical Efficiency & Fitness Training Guidance",
        marksOrWeightage: "Qualifying Standard",
        topics: [
          "Male Physical Standards: Height (170 cm), Chest (80 cm unexpanded + 5 cm expansion)",
          "Female Physical Standards: Height (157 cm) with relaxed criteria for reserved categories",
          "Physical Efficiency Test: Male 5 km race in 24 minutes; Female 1.6 km race in 8.5 minutes",
          "Endurance Building Drills, Stamina Pacing, and Running Technique Optimization",
          "Medical Assessment Guidance: Vision Standards (6/6, 6/9), Knock Knees, Flat Foot, Color Blindness checks"
        ]
      }
    ]
  },
  {
    id: "computer",
    name: "Computer Education",
    nameHindi: "RS-CIT Diploma & Professional Speed Typing Lab",
    badge: "RKCL Authorized Center",
    badgeColor: "blue",
    slogan: "State-recognized computer certification and high-precision speed typing laboratory for competitive exams",
    eligibility: "Any Student / Job Aspirant",
    duration: "2 - 3 Months",
    batchSchedule: "Flexible Hourly Sessions from 8:00 AM to 6:00 PM Daily",
    targetPosts: [
      "Rajasthan High Court LDC / Clerk Grade II",
      "RSMSSB Junior Assistant / Secretariat Clerk",
      "Information Assistant (Suchna Sahayak / IA)",
      "SSC CHSL & CGL Skill / Data Entry Test",
      "All Rajasthan Government Employment Positions (Mandatory RS-CIT requirement)",
      "Banking & Corporate Office Computer Operator"
    ],
    preparationTypes: [
      "Dedicated 1 Student = 1 Workstation system allocation guaranteed throughout the course",
      "Official RKCL curriculum, regular iLearn internal assessments, and mock board tests",
      "Specialized typing software simulating Rajasthan High Court and RSSB real exam interfaces",
      "Timer-based typing drills measuring Words Per Minute (WPM), gross speed, and net accuracy",
      "Air-conditioned computer lab equipped with modern hardware and ergonomic keyboards",
      "Personalized mentoring by certified IT instructors with continuous speed tracking charts"
    ],
    keyHighlights: [
      "Targeted speed improvement from 35 WPM to 50+ WPM within 60 to 90 days",
      "Hindi typing on both KrutiDev 010 and Mangal Inscript / Remington GAIL layouts",
      "Mastery of special characters, Alt shortcut codes, and error-free typing habits",
      "Official RS-CIT certificate awarded directly by VMOU Kota and RKCL Jaipur"
    ],
    subjects: [
      {
        name: "RS-CIT: Computer Fundamentals & Windows 10/11",
        nameEnglish: "Hardware, Software, OS & File Operations",
        marksOrWeightage: "Module 1",
        topics: [
          "Introduction to Computers: Data, Information, Computer Characteristics, and Functional Architecture",
          "Generations of Computers, Supercomputers, Mainframe, Mini, and Microcomputers",
          "Input Devices: Keyboard, Mouse, Scanner, OCR, OMR, MICR, Barcode Reader, Biometric Sensors",
          "Output Devices: Monitors (CRT, LCD, LED), Printers (Impact, Inkjet, Laser), Plotters, Projectors",
          "Computer Memory: Primary (RAM, ROM, Cache) and Secondary Storage (HDD, SSD, Pen Drive, Optical Discs)",
          "Operating System Functions: File & Folder Management, Windows Explorer, Task Manager",
          "Control Panel Settings, Device Drivers, User Accounts, and Administrative Tools",
          "Essential Windows Shortcut Keys, Screen Capture, and System Optimization"
        ]
      },
      {
        name: "RS-CIT: Microsoft Office Productivity Suite",
        nameEnglish: "MS Word, MS Excel & MS PowerPoint Mastery",
        marksOrWeightage: "Module 2",
        topics: [
          "MS Word: Document Creation, Paragraph Formatting, Font Styling, Alignment, and Line Spacing",
          "MS Word: Tables, Header & Footer, Page Numbers, Watermarks, Page Borders, and Margins",
          "MS Word: Mail Merge (Creating Letters, Envelopes, and Labels connected to recipient lists)",
          "MS Excel: Workbook, Worksheets, Cell Referencing (Relative, Absolute, Mixed)",
          "MS Excel Formulas: Mathematical (SUM, PRODUCT), Statistical (AVERAGE, COUNT, MAX, MIN), Logical (IF, AND, OR)",
          "MS Excel: Sorting, Auto-Filter, Data Validation, Charts (Bar, Column, Pie, Line), and Print Area Setup",
          "MS PowerPoint: Slide Creation, Templates, Themes, Master Slides, SmartArt, and Shapes",
          "MS PowerPoint: Animations, Slide Transitions, Audio/Video Insertion, and Slide Show Controls"
        ]
      },
      {
        name: "RS-CIT: Internet, Cyber Security & Digital Portals",
        nameEnglish: "Digital Payments, Online Services & Citizen Portals",
        marksOrWeightage: "Module 3",
        topics: [
          "Internet Basics: ISP, IP Address, URL, DNS, Web Browsers, Search Engines, and Cloud Storage",
          "Electronic Mail (Email): Composing, Attachments, CC, BCC, Spam Filters, and Email Etiquette",
          "Digital Payment Systems: UPI (Unified Payments Interface), Net Banking, Debit/Credit Cards, Wallets, POS",
          "Rajasthan State Citizen Portals: SSO ID Creation, e-Mitra Services, Jan Aadhaar Card, Bhamashah",
          "DigiLocker, National Scholarship Portal (NSP), and Online Government Job Application Portals",
          "Cyber Threats: Malware, Viruses, Trojans, Ransomware, Phishing, Identity Theft",
          "Cyber Security Best Practices: Firewalls, Strong Passwords, Two-Factor Authentication (2FA), IT Act 2000"
        ]
      },
      {
        name: "Hindi Typing Laboratory (KrutiDev & Mangal)",
        nameEnglish: "High-Speed Hindi Typing for Government Exams",
        marksOrWeightage: "Practical Exam Skill",
        topics: [
          "KrutiDev 010 Font: Home Row, Upper Row, and Bottom Row Key Mapping and Finger Alignment",
          "KrutiDev 010: Half-characters (Halant consonants), Matras, and Special Character Combinations",
          "KrutiDev Alt Codes: Alt+0161 to Alt+0250 for special Sanskrit and Hindi conjuncts",
          "Mangal Font: Inscript Keyboard Layout (Standard Devanagari Typewriter Layout)",
          "Mangal Font: Remington GAIL Layout (Preferred for High Court LDC and RSMSSB typing tests)",
          "Backspace Minimization Drills to maintain 95%+ net accuracy under exam software conditions",
          "Timed Paragraph Tests (5-minute, 10-minute, and 15-minute speed simulations)"
        ]
      },
      {
        name: "English Touch Typing Laboratory",
        nameEnglish: "Precision English Typing for Speed Tests",
        marksOrWeightage: "Practical Exam Skill",
        topics: [
          "Ergonomic Touch Typing: Home Row (ASDF - JKL;), Top Row (QWERTY), and Bottom Row (ZXCVBNM)",
          "Number Row and Symbol Keys Touch Typing without looking at the keyboard",
          "Rhythmic Cadence and Speed Building Drills targeting 35 to 50+ Words Per Minute (WPM)",
          "Accuracy Drills: Word Error Rate (WER) reduction and backspace control",
          "Live Exam Software Simulations: High Court, SSC CHSL, and Junior Assistant Pattern Tests"
        ]
      }
    ]
  },
  {
    id: "police",
    name: "Rajasthan & Delhi Police",
    nameHindi: "Police Constable, RAC & Sub-Inspector (SI) Batch",
    badge: "Uniform Forces Special",
    badgeColor: "purple",
    slogan: "Rigorous written exam preparation combined with physical training endurance guidance",
    eligibility: "12th Pass (CET Qualified for Rajasthan Police) / Graduate (for SI)",
    duration: "3 - 5 Months",
    batchSchedule: "Fresh Batch Every Monday at 9:00 AM Daily (4 Hours Regular Classes)",
    targetPosts: [
      "Rajasthan Police Constable (General Duty - GD)",
      "Rajasthan Police RAC (Rajasthan Armed Constabulary)",
      "Rajasthan Police Constable (Telecommunications & Driver)",
      "Rajasthan Police Sub-Inspector (SI)",
      "Delhi Police Executive Constable (Male & Female)",
      "Central Industrial Security Force (CISF) & CRPF"
    ],
    preparationTypes: [
      "Intensive coverage of Rajasthan GK, History, Art, Culture, and Geography with memory tricks",
      "Special scoring modules for General Computer Knowledge and Reasoning Aptitude",
      "Complete dedicated coverage of Women & Child Safety Laws and Special Crime Acts",
      "Every Monday & Wednesday OMR-Based Test Series replicating official Rajasthan Police standards",
      "Physical Fitness and Endurance Guidance: 5 km run pacing, stamina building, and posture tips",
      "Weekly Current Affairs and Science capsule discussions"
    ],
    keyHighlights: [
      "100% exam-oriented printed classroom notes covering all four major sections",
      "Special short tricks for 30-second reasoning solutions to save critical exam time",
      "Complete analysis of past Rajasthan Police Constable and SI exam papers",
      "Free physical assessment and height/chest measurement checkup for students"
    ],
    subjects: [
      {
        name: "Reasoning Ability & Computer Literacy",
        nameEnglish: "Logical Reasoning & Basic Computer Knowledge",
        marksOrWeightage: "Section A: 60 Questions / 60 Marks",
        topics: [
          "Reasoning: Series Completion, Analogies, Odd One Out, Coding-Decoding, Blood Relations",
          "Reasoning: Direction Sense, Seating Arrangement, Order & Ranking, Venn Diagrams",
          "Reasoning: Clock and Calendar Problems, Dice & Cubes, Mathematical Operations",
          "Reasoning: Non-Verbal Shapes, Mirror Images, Water Images, Paper Folding, Hidden Patterns",
          "Computer: Fundamentals, Hardware, Input & Output Devices, Memory (RAM, ROM, Storage)",
          "Computer: Operating Systems (Windows 10/11), MS Office (Word, Excel, PowerPoint), File Management",
          "Computer: Internet, Browsers, Email, Cyber Security, Virus, Malware, and Shortcut Keys"
        ]
      },
      {
        name: "General Knowledge, Science & Current Affairs",
        nameEnglish: "National GK, General Science & Current Events",
        marksOrWeightage: "Section B: 35 Questions / 35 Marks",
        topics: [
          "General Science: Physics, Chemistry, Biology in daily life, Human Body, Nutrients, Common Diseases",
          "Indian History: Ancient Civilizations, Medieval Empires, 1857 Revolt, Freedom Movement",
          "Indian Geography: Rivers, Mountains, Climate, Forests, Minerals, and Agriculture",
          "Indian Constitution & Polity: Fundamental Rights, Duties, President, Parliament, Judiciary",
          "Current Affairs: National and International Events, Defense Exercises, Sports, Awards, Summits"
        ]
      },
      {
        name: "Crime Against Women & Children Laws",
        nameEnglish: "Legal Provisions & Government Safety Measures",
        marksOrWeightage: "Section C: 10 Questions / 10 Marks",
        topics: [
          "POCSO Act 2012 (Protection of Children from Sexual Offences) & Recent Amendments",
          "Protection of Women from Domestic Violence Act 2005",
          "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013",
          "Prohibition of Child Marriage Act 2006 & Dowry Prohibition Act 1961",
          "Relevant Sections of Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita related to Women & Children",
          "Government Portals & Helplines: 1090 Women Helpline, 1098 Childline, 112 Emergency Response"
        ]
      },
      {
        name: "Rajasthan History, Culture, Geography & Economy",
        nameEnglish: "Rajasthan General Knowledge Special Focus",
        marksOrWeightage: "Section D: 45 Questions / 45 Marks",
        topics: [
          "History of Rajasthan: Prominent Dynasties, Battles, Freedom Movement, Prajamandal Movements",
          "Art & Culture: Forts, Palaces, Temples, Haveli Architecture, Folk Deities (Lok Devta & Devis)",
          "Folk Fairs, Festivals, Folk Dances, Folk Music, Musical Instruments, Traditional Dresses & Ornaments",
          "Geography of Rajasthan: Physical Divisions, Rivers, Lakes, Climate, Forests, Wildlife Sanctuaries",
          "Economy of Rajasthan: Agriculture, Animal Husbandry, Mineral Wealth, Energy Projects, Welfare Schemes"
        ]
      },
      {
        name: "Physical Efficiency Test (PET) Guidance",
        nameEnglish: "Physical Standards & Endurance Running",
        marksOrWeightage: "Qualifying Standard",
        topics: [
          "Constable (GD/RAC) Male: 5 Kilometer Running in 25 Minutes (Full qualifying criteria)",
          "Constable (GD/RAC) Female: 5 Kilometer Running in 35 Minutes",
          "Physical Measurement Test (PST): Height (168 cm Male, 152 cm Female), Chest (81-86 cm for Male)",
          "Endurance Running Strategy: Breathing rhythm, stamina preservation, and hydration tips",
          "Medical Examination Standards: Color vision test, flat foot check, and knock knee assessment"
        ]
      }
    ]
  }
];

export type CourseCategory = 
  | 'All'
  | 'Competitive Exams'
  | 'Teaching Exams'
  | 'Government Jobs'
  | 'School Exams'
  | 'Computer Education';

export interface Course {
  id: string;
  name: string;
  nameHindi: string;
  category: CourseCategory;
  shortDesc: string;
  eligibility: string;
  duration: string;
  batchTime: string;
  batchSchedule?: string;
  badge?: string;
  badgeColor?: 'red' | 'yellow' | 'green' | 'blue' | 'orange';
  features: string[];
  subjects: string[];
  preparationModes?: string[];
  syllabusHighlights?: (string | { subject: string; topics: string[] })[];
  examPattern?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subject: string;
  experience: string;
  qualification?: string;
  bio: string;
  photoUrl?: string;
  isDirector?: boolean;
}

export interface ResultItem {
  id: string;
  studentName: string;
  exam: string;
  year: string;
  result: string;
  rank?: string;
  photoUrl?: string;
  rollNumber?: string;
  verified?: boolean;
  isVerified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Students' | 'Faculty' | 'Events' | 'Institute Building' | 'Celebrations';
  imageUrl: string;
  caption?: string;
  date?: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'New Batch' | 'Test Series' | 'Exam Alert' | 'General';
  description: string;
  isImportant?: boolean;
  linkText?: string;
}

export interface AdmissionEnquiry {
  id: string;
  studentName: string;
  fatherName?: string;
  mobile: string;
  mobileNumber?: string;
  altMobile?: string;
  email?: string;
  courseInterested: string;
  course?: string;
  examTarget?: string;
  qualification?: string;
  message?: string;
  submittedAt: string;
  createdAt?: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Admitted' | 'Archived';
}

export interface InstituteSettings {
  name: string;
  hindiName: string;
  tagline: string;
  directorName: string;
  primaryPhone1: string;
  primaryPhone2: string;
  whatsappNumber: string;
  addressHindi: string;
  addressEnglish: string;
  newBatchDay: string;
  newBatchTime: string;
  testSeriesDays: string;
  youtubeUrl: string;
  instagramUrl: string;
  telegramUrl: string;
}


export enum Grade {
  GRADE_10_11 = 'Grade 10–11',
  GRADE_12_13 = 'Grade 12–13'
}

export enum ClassType {
  GROUP = 'Group Class',
  INDIVIDUAL = 'Individual Class',
  ONLINE = 'Online Class'
}

export interface ApplicationFormData {
  studentName: string;
  grade: Grade;
  classType: ClassType;
  contactNumber: string;
  message: string;
}

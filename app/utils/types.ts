export interface programContent {
  header: string;
  description: string | null;
  courses: Array<{
    id: number;
    code: string;
    title: string;
    credits: number;
    preRequisite: string | null;
    type: string;
  }>;
}

import { Certification } from "./certification.model";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Skill } from "./skill.model";

export interface Resume {

  id: string;

  name: string;

  designation: string;

  summary: string;

  resumeUrl: string;

  experience: Experience[];

  education: Education[];

  certifications: Certification[];

  skills: Skill[];

}
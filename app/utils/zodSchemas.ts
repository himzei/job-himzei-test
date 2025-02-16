import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(2, "이름은 최소2글자 이상작성 해야 합니다."),
  location: z.string().min(1, "위치는 최소 1글자 이상 작성해야 합니다."),
  about: z.string().min(10, "최소 10글자 이상 작성해야 합니다."),
  logo: z.string().min(1, ""),
  website: z.string().url("Please enter valid url"),
  xAccount: z.string().optional(),
});

export const jobSeekerSchema = z.object({
  name: z.string().min(2, "2글자 이상 작성"),
  about: z.string().min(10, "10글자 이상 작성"),
  resume: z.string().min(1, "이력서를 업로드 해주세요"),
});

export const jobSchema = z.object({
  jobTitle: z.string().min(2, "2글자 이상 작성"),
  employmentType: z.string().min(1, "필수 입력사항"),
  location: z.string().min(1, "필수입력"),
  salaryFrom: z.number().min(1, "필수입력"),
  salaryTo: z.number().min(1, "필수입력"),
  jobDescription: z.string().min(1, "필수입력"),
  listingDuration: z.number().min(1, "필수입력"),

  benefits: z.array(z.string()).min(1, "필수입력"),
  companyName: z.string().min(1, "필수입력"),
  companyLocation: z.string().min(1, "필수입력"),
  companyAbout: z.string().min(10, "10글자 이상"),

  companyLogo: z.string().min(1, "필수입력"),

  companyWebsite: z.string().min(1, "필수입력"),
  companyXAccount: z.string().optional(),
});

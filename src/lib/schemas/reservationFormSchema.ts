import { z } from "zod";

export const reservationFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters long.")
    .max(100, "Full name must be less than 100 characters long."),
  countryCode: z.string().min(1, "Required."),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits.")
    .regex(/^\d+$/, "Phone number must contain only digits."),
  email: z.string().email("Invalid email address.").optional().nullable(),
  date: z.date({
    required_error: "Please select a date for your reservation.",
  }),
  timeSlot: z.enum(["morning", "evening"], {
    errorMap: () => {
      return { message: "Please select a valid time slot." };
    },
  }),
  service: z.enum(
    [
      "body_contouring",
      "face_neck_lift",
      "double_chin_liposuction",
      "rhinoplasty",
      "blepharoplasty",
      "brachioplasty",
      "thigh_lift",
      "breast_augmentation",
      "breast_reduction",
      "mastopexy",
      "gynecomastia",
      "abdominoplasty",
      "brazilian_butt",
      "fat_injection",
      "high_definition_liposuction",
      "mommy_makeover",
      "post_bariatric_procedures",
    ],
    {
      errorMap: () => {
        return { message: "Please select a valid service." };
      },
    }
  ),
});

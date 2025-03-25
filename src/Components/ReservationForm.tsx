"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reservationFormSchema } from "@/lib/schemas/reservationFormSchema";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { PhoneNumberInput, getFullPhoneNumber } from "./PhoneNumberInput";
import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";

type FormData = z.infer<typeof reservationFormSchema>;

export default function ReservationForm() {
  const { toast } = useToast();

  const [date, setDate] = useState<Date>();

  const form = useForm<FormData>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      fullName: "",
      countryCode: "EG",
      phone: "",
      email: "",
      timeSlot: "morning",
      service: "body_contouring",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const fullPhoneNumber = getFullPhoneNumber(data.countryCode, data.phone);

      const submissionData = {
        name: data.fullName,
        phone: fullPhoneNumber,
        email: data.email,
        date: data.date,
        time_slot: data.timeSlot,
        service: data.service,
      };
      console.log(submissionData);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Form submitted successfully!",
        variant: "default",
      });
      form.reset();
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const backendErrors = error.response.data;

        Object.keys(backendErrors).forEach((field) => {
          form.setError(field as keyof FormData, {
            type: "manual",
            message: backendErrors[field],
          });
        });
      } else {
        toast({
          title: "Failed",
          description: "There was an issue with the form. Please try again.",
          variant: "destructive",
        });
      }
    },
  });

  async function onSubmit(data: FormData) {
    mutation.mutate(data);
  }

  return (
    <Card className="relative w-full max-w-4xl mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Book an Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PhoneNumberInput control={form.control} />

            <FormField
              control={form.control}
              name="email"
              render={({ field: { value, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={value ?? ""}
                      {...fieldProps}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Appointment Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      date={field.value}
                      setDate={(newDate) => {
                        if (newDate) {
                          field.onChange(newDate);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="body_contouring">
                        Body Contouring
                      </SelectItem>
                      <SelectItem value="face_neck_lift">
                        Face and Neck Lift
                      </SelectItem>
                      <SelectItem value="double_chin_liposuction">
                        Double Chin Liposuction
                      </SelectItem>
                      <SelectItem value="rhinoplasty">Rhinoplasty</SelectItem>
                      <SelectItem value="blepharoplasty">
                        Blepharoplasty
                      </SelectItem>
                      <SelectItem value="brachioplasty">
                        Brachioplasty
                      </SelectItem>
                      <SelectItem value="thigh_lift">Thigh Lift</SelectItem>
                      <SelectItem value="breast_augmentation">
                        Breast Augmentation
                      </SelectItem>
                      <SelectItem value="breast_reduction">
                        Breast Reduction
                      </SelectItem>
                      <SelectItem value="mastopexy">Mastopexy</SelectItem>
                      <SelectItem value="gynecomastia">Gynecomastia</SelectItem>
                      <SelectItem value="abdominoplasty">
                        Abdominoplasty
                      </SelectItem>
                      <SelectItem value="brazilian_butt">
                        Brazilian Butt
                      </SelectItem>
                      <SelectItem value="fat_injection">
                        Fat Injection
                      </SelectItem>
                      <SelectItem value="high_definition_liposuction">
                        High Definition Liposuction
                      </SelectItem>
                      <SelectItem value="mommy_makeover">
                        Mommy Make Over
                      </SelectItem>
                      <SelectItem value="post_bariatric_procedures">
                        Post Bariatric Plastic Procedures
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Book Appointment"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

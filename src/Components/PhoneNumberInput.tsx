"use client";
import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
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
import { CircleFlag } from "react-circle-flags";
import { countries } from "country-data-list";

const countryOptions = countries.all
  .filter((country) => country.countryCallingCodes.length > 0 && country.alpha2)
  .sort((a, b) => a.name.localeCompare(b.name));

export function getFullPhoneNumber(
  countryCode: string,
  phoneNumber: string
): string {
  const selectedCountry = countryOptions.find(
    (country) => country.alpha2 === countryCode
  );
  const countryCallingCode = selectedCountry?.countryCallingCodes[0] || "";
  return `${countryCallingCode}${phoneNumber}`;
}

interface PhoneNumberInputProps {
  control: Control<any>;
}

export function PhoneNumberInput({ control }: PhoneNumberInputProps) {
  return (
    <FormField
      control={control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Phone Number</FormLabel>
          <div className="flex">
            <FormField
              control={control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-[90px] rounded-r-none border-r-0">
                        <div className="flex items-center space-x-2">
                          {field.value ? (
                            <>
                              <CircleFlag
                                countryCode={field.value.toLowerCase()}
                                height="16"
                                width="16"
                              />
                              <span className="text-xs">
                                {
                                  countryOptions.find(
                                    (country) => country.alpha2 === field.value
                                  )?.countryCallingCodes[0]
                                }
                              </span>
                            </>
                          ) : (
                            <SelectValue placeholder="Code" />
                          )}
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countryOptions.map((country) => (
                        <SelectItem key={country.alpha2} value={country.alpha2}>
                          <div className="flex items-center w-full">
                            <CircleFlag
                              countryCode={country.alpha2.toLowerCase()}
                              height="16"
                              width="16"
                              className="mr-2"
                            />
                            <span className="ml-2 flex-1 text-xs">
                              {country.name}
                            </span>
                            <span className="text-muted-foreground text-xs">
                              {country.countryCallingCodes[0]}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormControl>
              <Input
                placeholder="Enter your phone number"
                className="rounded-l-none w-full"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

"use client"
import React from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  CustomTextInput,
  TextInput,
  RadioInput,
  CustomRadioInput,
  SelectInput,
  CheckBoxesInput,
  CustomSelectInput
} from "./FormElements"
import { membership_catgories, branches } from "./data"

const formSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  fullName: z.string().min(1, "Name with initials is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contact: z.string().min(1, "Contact is required"),
  nic: z.string().min(1, "NIC is required"),
  gender: z.string().min(1, "Gender is required"),
  address: z.string().min(1, "Address is required"),
  branch: z.string().min(1, "Branch is required"),
  otherAffiliations: z.string().optional(),
  partOfExCo: z.string().min(1, "Yes or No is required"),
  membershipCategory: z.string().min(1, "Yes or No is required")
})

function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      firstName: "",
      lastName: "",
      contact: "",
      nic: "",
      gender: "",
      address: "",
      branch: "",
      otherAffiliations: "",
      partOfExCo: "",
      membershipCategory: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const exco = useWatch({ control: form.control, name: "partOfExCo" })
  console.log(exco)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <TextInput
          form={form}
          name="fullName"
          label="1. Name with Initials"
        ></TextInput>
        <TextInput
          form={form}
          name="firstName"
          label="2. First Name"
        ></TextInput>
        <TextInput form={form} name="lastName" label="3. Last Name"></TextInput>
        <TextInput form={form} name="email" label="4. Email"></TextInput>
        <TextInput
          form={form}
          name="contact"
          label="5. Contact Number"
          formDescription="Whatsapp Number (Ex : +94705608289) "
        ></TextInput>
        <TextInput form={form} name="nic" label="6. NIC Number"></TextInput>
        <RadioInput
          form={form}
          name="gender"
          label="6. Gender"
          selectItems={["Male", "Female", "Other"]}
          layout="Row"
        ></RadioInput>
        <CustomSelectInput
          form={form}
          selectItems={branches}
          name="branch"
          placeholder="Select a Membership Category"
          formDescription="Please mention the student branch affiliation you are volunteering, or you have volunteered."
        >
          <p>7. IEEE Student Branch Affiliation</p>
        </CustomSelectInput>
        <CustomRadioInput
          form={form}
          name="partOfExCo"
          selectItems={["Yes", "No"]}
        >
          <div>
            <p className="pb-4">
              8. Are you part of an{" "}
              <span className="font-semibold">Executive Committe</span>
            </p>
            <ol className="pl-4">
              <li>1. IEEE Sri Lanka Section</li>
              <li>2. IEEE Young Professionals Sri Lanka </li>
              <li>3. IEEE Women in Engineering Sri Lanka</li>
              <li>4. IEEE Sri Lanka Section SIGHT</li>
              <li>5. IEEE Technical Society Sri Lanka Chapter</li>
            </ol>
          </div>
        </CustomRadioInput>
        {exco === "Yes" && (
          <SelectInput
            form={form}
            selectItems={membership_catgories}
            name="membershipCategory"
            label="18. Membership Category"
            placeholder="Select a Membership Category"
          ></SelectInput>
        )}
        <div className="py-4">
          <button className="bg-primary-foreground text-black px-6 py-1 rounded">
            Submit
          </button>
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm

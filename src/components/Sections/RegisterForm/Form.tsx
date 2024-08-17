"use client"
import React, { useEffect, useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
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
import {
  membership_catgories,
  branches,
  exco_entities,
  participating_days,
  volunteering_entities,
  participation_years,
  thsirt_size
} from "./data"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"

const formSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  fullName: z.string().min(1, "Name with initials is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contact: z.string().min(1, "Contact is required"),
  nic: z.string().min(1, "NIC is required"),
  gender: z.string().min(1, "Gender is required"),
  branch: z.string().min(1, "Branch is required"),
  otherAffiliations: z.string().min(1, "Please state your affiliation."),
  partOfExCo: z.string().min(1, "Yes or No is required"),
  membershipNo: z.string().optional(),
  membershipCategory: z.string().min(1, "Please select a Membership Category."),
  currentExcoEntities: z
    .string()
    .array()
    .nonempty("Please select the Entity/Entities."),
  positions: z.string().min(1, "Please state a response."),
  joiningDays: z.string().min(1, "Please select Joining Days."),
  joiningOneDay: z.string().optional(),
  hasMembership: z.string().min(1, "Please select an option."),
  volunteeringEntities: z
    .string()
    .array()
    .nonempty("Please select the Entity/Entities."),
  volunteeringExperience: z.string().optional(),
  whatEncouraged: z.string().min(1, "Please state your answer."),
  previousParticipations: z
    .string()
    .array()
    .nonempty("Please select an option."),
  learn: z.string().min(1, "Please select an option."),
  tShirtSize: z.string().min(1, "Please select an option."),
  privacy: z.string().array().nonempty("Please agree to the policy."),
  consent: z.string().array().nonempty("Please agree to giving consent.")
})

function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //personal inoformation
      email: "",
      fullName: "",
      firstName: "",
      lastName: "",
      contact: "",
      nic: "",
      gender: "",
      branch: "",
      otherAffiliations: "",
      //for all
      partOfExCo: "",
      membershipNo: "",
      membershipCategory: "",
      //excetive committe details
      currentExcoEntities: [],
      positions: "",
      joiningDays: "",
      joiningOneDay: "",
      //Non exco membership details
      hasMembership: "",
      volunteeringEntities: [],
      volunteeringExperience: "",
      whatEncouraged: "",
      previousParticipations: [],
      learn: "",
      //delegatepack
      tShirtSize: "",
      //terms
      privacy: [],
      consent: []
    }
  })

  const { push } = useRouter()

  const [doubleChecked, setDoubleChecked] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!doubleChecked) {
      setDialogOpen(true)
      return 
    }

    console.log(values)
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values)
    })
    setSuccess(true)
    return true
  }

  if (JSON.stringify(form.formState.errors) !== "{}") {
    console.log("errors", form.formState.errors)
  }

  const exco = useWatch({ control: form.control, name: "partOfExCo" })
  const branch = useWatch({ control: form.control, name: "branch" })
  const joiningDays = useWatch({ control: form.control, name: "joiningDays" })

  useEffect(() => {
    if (branch !== "23. Other") {
      form.setValue("otherAffiliations", "N/A", { shouldValidate: true })
    } else {
      form.setValue("otherAffiliations", "", { shouldValidate: true })
    }
  }, [branch])

  const { isSubmitting, isSubmitted, isSubmitSuccessful } = form.formState
  console.log(form.formState)

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful })

  useEffect(() => {
    if (success) {
      push(`/register/confirm`)
    }
  }, [success])

  useEffect(() => {

    if (doubleChecked) {
      form.handleSubmit(onSubmit)()
    }

  }, [doubleChecked])

  useEffect(() => {
    const { setValue, reset, getValues } = form

    if (exco === "Yes") {
      reset({
        ...getValues(),
        positions: "",
        currentExcoEntities: [],
        joiningDays: "",
        joiningOneDay: "",
        volunteeringEntities: ["N/A"],
        volunteeringExperience: "N/A",
        whatEncouraged: "N/A",
        previousParticipations: ["N/A"],
        learn: "N/A"
      })
    }

    if (exco === "No") {
      reset({
        ...getValues(),
        positions: "N/A",
        currentExcoEntities: ["N/A"],
        joiningDays: "N/A",
        joiningOneDay: "N/A",
        volunteeringEntities: [],
        volunteeringExperience: "",
        whatEncouraged: "",
        previousParticipations: [],
        learn: ""
      })
    }
  }, [exco])

  useEffect(() => {
    if (joiningDays !== "One day only") {
      form.setValue("joiningOneDay", "N/A")
    }
  }, [joiningDays])

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 select-none"
        >
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
          <TextInput
            form={form}
            name="lastName"
            label="3. Last Name"
          ></TextInput>
          <TextInput form={form} name="email" label="4. Email"></TextInput>
          <TextInput
            form={form}
            name="contact"
            label="5. Contact Number (Whatsapp)"
            placeholder="Ex : +94705608289"
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
            placeholder="Choose"
            formDescription="Please mention the student branch affiliation you are volunteering, or you have volunteered."
          >
            <p>7. IEEE Student Branch Affiliation</p>
          </CustomSelectInput>
          {branch == "23. Other" && (
            <CustomTextInput
              form={form}
              name="otherAffiliations"
              textArea={true}
            >
              Please specify your affiliation (If you&apos;re not affiliated to
              any IEEE Student Branch, please provide the details.)
            </CustomTextInput>
          )}
          <CustomRadioInput
            form={form}
            name="hasMembership"
            selectItems={["Yes", "No"]}
          >
            <div>Do you have an active IEEE membership?</div>
          </CustomRadioInput>
          <CustomTextInput form={form} name="membershipNo" textArea={false}>
            <div className="pb-1">IEEE Membership Number</div>
            <p className="text-xs">
              Having an IEEE membership is not compulsory to be part of IEEE
              SLSYWC&apos;24. If you are not an IEEE member, please follow the
              attached link to{" "}
              <span className="font-bold">
                create an account without doing any payments.
              </span>{" "}
              <a
                href="https://bit.ly/3F3L6kf"
                target="_blank"
                className="underline"
              >
                (Click here to join IEEE)
              </a>
            </p>
          </CustomTextInput>
          <SelectInput
            form={form}
            selectItems={membership_catgories}
            name="membershipCategory"
            label="Membership Category"
            placeholder="Select a Membership Category"
          ></SelectInput>
          <CustomRadioInput
            form={form}
            name="partOfExCo"
            selectItems={["Yes", "No"]}
          >
            <div>
              <p className="pb-4">
                Are you part of an{" "}
                <span className="font-semibold">Executive Committee</span>
              </p>
              <ol className="pl-4 pb-4">
                <li>1. IEEE Sri Lanka Section</li>
                <li>2. IEEE Young Professionals Sri Lanka </li>
                <li>3. IEEE Women in Engineering Sri Lanka</li>
                <li>4. IEEE Sri Lanka Section SIGHT</li>
                <li>5. IEEE Technical Society Sri Lanka Chapter</li>
              </ol>
              <p>
                If Yes, Please Select &quot;
                <span className="font-bold">Yes</span>
                &quot;.
              </p>
              <p>
                Sub-Committee members of the above OUs, please select &quot;
                <span className="font-bold">No</span>&quot;.
              </p>
            </div>
          </CustomRadioInput>
          {exco === "Yes" && (
            <>
              <div className="font-bold text-lg">
                Executive Committee Details
              </div>
              <div className="font-bold text">
                A delegate fee of LKR ***** will be charged from all delegates
                participating in the IEEE SL SYW Congress 2024.
              </div>
              {/* <CustomTextInput form={form} name="membershipNo" textArea={false}>
              <div>Please provide your IEEE Membership Number.</div>
            </CustomTextInput>
            <SelectInput
              form={form}
              selectItems={membership_catgories}
              name="membershipCategory"
              label="Membership Category"
              placeholder="Select a Membership Category"
            ></SelectInput> */}
              <CheckBoxesInput
                form={form}
                checkItems={exco_entities}
                name="currentExcoEntities"
              >
                <div>
                  Select the entity/entities you are currently an Executive
                  Committee Member in
                </div>
              </CheckBoxesInput>
              <CustomTextInput form={form} name="positions" textArea={false}>
                <div className="pb-2">
                  Please state your position in the respective Ex-Com(s) you are
                  a part of.{" "}
                </div>
                <p className="text-xs">
                  If you are a member of an IEEE Sri Lanka Section Technical
                  Society Chapter, please mention the Technical Society as well
                </p>
              </CustomTextInput>
              <CustomSelectInput
                form={form}
                selectItems={[
                  "All 3 days",
                  "2 days (Stay on the night of September 14th only)",
                  "2 days (Stay on the night of September 15th only)",
                  "One day only"
                ]}
                name="joiningDays"
                placeholder="Select joining dates"
              >
                <p>
                  Please select the days you will be joining for IEEE
                  SLSYWC&apos;24:
                </p>
              </CustomSelectInput>
              {joiningDays == "One day only" && (
                <CustomRadioInput
                  form={form}
                  name="joiningOneDay"
                  selectItems={[
                    "September 14th",
                    "September 15th",
                    "September 16th"
                  ]}
                >
                  <div>
                    If you are joining for one day only, please specify the day.
                  </div>
                </CustomRadioInput>
              )}
            </>
          )}
          {exco === "No" && (
            <>
              <CheckBoxesInput
                form={form}
                name="volunteeringEntities"
                checkItems={volunteering_entities}
              >
                <div>
                  Select the entity/entities you are currently an volunteering
                  in
                </div>
              </CheckBoxesInput>
              <CustomTextInput
                form={form}
                textArea={true}
                name="volunteeringExperience"
              >
                <div>
                  Mention your IEEE accomplishments or volunteering experiences
                </div>
              </CustomTextInput>
              <div className="font-bold text-lg pb-4">
                IEEE SL SYW Congress 2024
              </div>

              <p className="pb-2">
                Only a selected number of participants will be entertained at
                the IEEE SL SYW Congress 2024. The following respective entities
                under the IEEE Sri Lanka Section will conduct the selection of
                delegates:
              </p>
              <ul className="list-disc pl-6">
                <li>IEEE Sri Lanka Section</li>
                <li>IEEE Sri Lanka Section Student Activities Committee</li>
                <li>IEEE Young Professionals Sri Lanka</li>
                <li>IEEE Women in Engineering Sri Lanka</li>
                <li>IEEE Sri Lanka Section SIGHT</li>
                <li>IEEE Sri Lanka Section Technical Society Chapters</li>
                <li>IEEE Student Branches</li>
              </ul>

              <p>
                Selected delegates are obligated to pay the delegate fee to
                participate in the IEEE SL SYW Congress 2024.
              </p>

              <ul className="font-semibold list-disc pl-6 space-y-1">
                <li>Delegate Fee will be valued at LKR ****.</li>
                <li>
                  If the Delegate has an ****** the delegate will be eligible
                  for a LKR 500/= discount. [Note: An IEEE SPS Student
                  Membership (Essential Package) costs USD 0.50 ~ LKR 170.00]
                </li>
                <li>
                  Please{" "}
                  <a
                    href="https://docs.google.com/document/d/1hxEehs2D3NhkTWAkt4zdSvNDf1_xAVEq5_c1MbOciSQ/edit?usp=sharing"
                    target="_blank"
                    className="underline"
                  >
                    Click Here
                  </a>
                  , to get a step-by-step tutorial on obtaining the IEEE SPS
                  Membership.
                </li>
              </ul>
              <CustomTextInput
                form={form}
                name="whatEncouraged"
                textArea={true}
              >
                <div>
                  We would like to know what encouraged you to take part in IEEE
                  SL SYW Congress 2024.
                </div>
              </CustomTextInput>
              <CheckBoxesInput
                form={form}
                name="previousParticipations"
                checkItems={participation_years}
              >
                <div>
                  If you have participated in previous years, select the years
                  you participated.
                </div>
              </CheckBoxesInput>
              <CustomRadioInput
                form={form}
                name="learn"
                selectItems={["Yes", "No"]}
              >
                <div>
                  Would you like to learn how to become a member of IEEE
                  Technical Societies?
                </div>
              </CustomRadioInput>
            </>
          )}

          {exco && (
            <>
              <div className="font-bold text-lg">Delegate Pack</div>
              <p>Delegate Pack Includes : </p>
              <ul className="list-disc pl-6">
                <li>T-Shirt</li>
                <li>File Cover</li>
                <li>Stickers etc.</li>
              </ul>
              <div>
                <div className="flex flex-col items-center my-6">
                  <p className="w-full mb-4 underline">T-shirt Design</p>
                  <img
                    src={`/assets/form/tshirt_design.jpg`}
                    alt=""
                    className="w-full md:h-96 md:w-auto rounded"
                  />
                </div>
                <div className="flex flex-col items-center my-6">
                  <p className="w-full mb-4 underline">Size Guide</p>
                  <img
                    src={`/assets/form/size_guide.jpg`}
                    alt=""
                    className="w-full md:h-96 md:w-auto"
                  />
                </div>
              </div>
              <SelectInput
                form={form}
                selectItems={thsirt_size}
                name="tShirtSize"
                label="T-shirt Size"
                placeholder="Select T-shirt Size"
              ></SelectInput>
            </>
          )}

          <div className="font-bold text-lg">Terms & Conditions</div>

          <CheckBoxesInput
            form={form}
            name="privacy"
            checkItems={[{ label: "I Agree.", id: "1" }]}
          >
            <div>
              Acceptance of IEEE policies is required to register for this
              event. By submitting your registration details, you acknowledge
              that you have read and are in agreement with the{" "}
              <a className="underline">IEEE privacy policy</a> and the{" "}
              <a className="underline">Terms and conditions of the event.</a>
            </div>
          </CheckBoxesInput>
          <CheckBoxesInput
            form={form}
            name="consent"
            checkItems={[{ label: "I Agree.", id: "1" }]}
          >
            <div>
              I give my consent for IEEE SL SYW Congress 2024 to share my
              information with partners.
            </div>
          </CheckBoxesInput>

          <div className="py-4">
            <button
              className="bg-primary-foreground text-black px-6 py-1 rounded w-24 flex justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <img
                  src={`/assets/form/loading_spinner.svg`}
                  alt=""
                  className="w-6 h-6"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </Form>
      <AlertDialog open={dialogOpen}>
        <AlertDialogContent className="bg-primary-background">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-primary-foreground">
              Confirm Form Submission
            </AlertDialogTitle>
            <AlertDialogDescription>
              You&apos;re about to submit your form. Please review all fields
              carefully to ensure accuracy.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pt-3">
            <AlertDialogCancel
              onClick={() => setDialogOpen(false)}
              className="text-primary-foreground rounded hover:text-primary-foreground"
            >
              Review Form
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setDoubleChecked(true)
                setDialogOpen(false)
              }}
              className="bg-primary-foreground text-primary-background rounded"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default RegisterForm

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const TextInput = ({
  form,
  name,
  label,
  formDescription
}: {
  form: any
  name: string
  label: string
  formDescription?: string
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex pr-4 pb-2">
            <FormLabel className="sm:w-56 flex items-center text-[1rem]">
              {label}
            </FormLabel>
            <p className="pl-2">:</p>
          </div>
          <FormControl className="sm:w-full">
            <Input {...field} />
          </FormControl>
        </div>
        <FormDescription>{formDescription}</FormDescription>
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

const CustomTextInput = ({
  form,
  name,
  children
}: {
  form: any
  name: string
  children: React.ReactNode
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="">
        <div className="flex flex-col">
          <div className="md:flex pr-4 pb-2">
            <FormLabel className="w-full text-[1rem]">{children}</FormLabel>
          </div>
          <FormControl className="sm:w-full">
            <Input {...field} />
          </FormControl>
        </div>
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

const SelectInput = ({
  form,
  name,
  label,
  selectItems,
  formDescription,
  placeholder
}: {
  form: any
  name: string
  label: string
  selectItems: string[]
  formDescription?: string
  placeholder: string
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex pr-4 pb-4 sm:pb-0">
            <FormLabel className="sm:w-56 flex items-center text-[1rem]">
              {label}
            </FormLabel>
            <FormDescription>{formDescription}</FormDescription>
            <p className="pl-2">:</p>
          </div>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="text-primary-foreground bg-primary-background rounded">
              {selectItems.map((item,i) => (
                <SelectItem value={item} key={i}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

const CustomSelectInput = ({
  form,
  name,
  children,
  selectItems,
  formDescription,
  placeholder
}: {
  form: any
  name: string
  children: React.ReactNode
  selectItems: string[]
  formDescription?: string
  placeholder: string
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <div className="flex flex-col">
          <div className="pb-4">
            <FormLabel className="w-full text-[1rem]">{children}</FormLabel>
            <FormDescription>{formDescription}</FormDescription>
          </div>
          <div className="max-w-[560px]">
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="text-primary-foreground bg-primary-background rounded">
                {selectItems.map((item,i) => (
                  <SelectItem className="text-left" value={item} key={i}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

const CheckBoxesInput = ({
  form,
  name,
  children,
  checkItems,
  formDescription
}: {
  form: any
  name: string
  children: React.ReactNode
  checkItems: { id: string; label: string }[]
  formDescription?: string
}) => (
  <FormField
    control={form.control}
    name={name}
    render={() => (
      <FormItem>
        <div className="mb-4">
          <FormLabel className="text-base">{children}</FormLabel>
          <FormDescription>{formDescription}</FormDescription>
        </div>
        {checkItems.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name="items"
            render={({ field }) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, item.id])
                          : field.onChange(
                              field.value?.filter(
                                (value: any) => value !== item.id
                              )
                            )
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              )
            }}
          />
        ))}
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

const RadioInput = ({
  form,
  name,
  label,
  selectItems,
  formDescription,
  layout
}: {
  form: any
  name: string
  label: string
  selectItems: string[]
  formDescription?: string
  layout: "Row" | "Col"
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 ">
          <div className="flex pr-4 pb-4 sm:pb-0">
            <FormLabel className="sm:w-56 flex items-center text-[1rem]">
              {label}
            </FormLabel>
            <p className="pl-2">:</p>
          </div>
          <div className="sm:w-full">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col"
              >
                <div
                  className={`flex ${
                    layout === "Col" ? "md:flex-col" : "flex-row"
                  } space-x-6`}
                >
                  {selectItems.map((item,i) => (
                    <FormItem className="flex items-center space-x-3 space-y-0" key={i}>
                      <FormControl>
                        <RadioGroupItem value={item} />
                      </FormControl>
                      <FormLabel className="font-normal">{item}</FormLabel>
                    </FormItem>
                  ))}
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

const CustomRadioInput = ({
  form,
  name,
  children,
  selectItems,
  formDescription
}: {
  form: any
  name: string
  children: React.ReactNode
  selectItems: string[]
  formDescription?: string
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem className="space-y-3">
        <div className="flex flex-col">
          <div className="md:flex pr-4">
            <FormLabel className="w-full text-[1rem]">{children}</FormLabel>
          </div>
          <div className="sm:w-full">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex pl-4 pt-4 space-y-1"
              >
                {selectItems.map((item,i) => (
                  <FormItem className="flex items-center space-x-3 space-y-0" key={i}>
                    <FormControl>
                      <RadioGroupItem value={item} />
                    </FormControl>
                    <FormLabel className="font-normal">{item}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <FormMessage className="pt-2 text-red-600" />
      </FormItem>
    )}
  />
)

export {
  CustomTextInput,
  TextInput,
  SelectInput,
  CustomSelectInput,
  CheckBoxesInput,
  RadioInput,
  CustomRadioInput
}

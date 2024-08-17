import React from "react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

function page() {
  return (
    <div className="max-w-[720px] mx-auto text-black">
      <div className="py-10">
        <div className="font-bold leading-6 mb-5">
          IEEE Sri Lanka Section Students | YP | WIE Congress 2024 Registration
          Form
          <div>
            <Badge className="bg-green-500">success</Badge>
          </div>
        </div>
        <div>
          <TextField label="Full Name" value="Pushpitha"/>
        </div>
      </div>
    </div>
  )
}

export default page

const TextField = ({ label, value } : { label : string, value : string}) => (
  <div className="flex justify-start items-center">
    <Label className="w-56">{label}</Label>
    <p className="px-2">:</p>
    <Input className="w-[420px] border-black" value={value} />
  </div>
)

"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { useState } from "react";
const ShopPageLeft = () => {
  const categories = [
    "All Essentilas",
    "Panjabi",
    "Jubba",
    "Attar",
    "Tupi",
    "Watches",
  ];
  const [checked, setChecked] = useState(false);
  return (
    <div className="hidden md:block">
      <div>
        <div className="flex-between pb-5">
          <span className="text-lg font-inter font-medium">Filter by</span>
          <p>Clear all</p>
        </div>
        <div className="border-t border-b py-5">
          <span className="text-lg font-inter font-medium">Category</span>
          <FieldSet className="mt-5">
            <FieldGroup className="gap-3">
              {categories.map((category, index) => (
                <Field key={index} orientation={"horizontal"}>
                  <Checkbox
                    id="finder-pref-9k2-hard-disks-ljj-checkbox"
                    name="finder-pref-9k2-hard-disks-ljj-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                    className="font-normal"
                  >
                    {category}
                  </FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </FieldSet>
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ShopPageLeft;

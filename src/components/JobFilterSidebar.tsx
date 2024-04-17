import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma";
import { jobTypes, locationTypes } from "@/lib/job-types";
import { Button } from "./ui/button";
import { jobFilterSchema, JobFilterValues } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { input, jobType, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(input && { input: input.trim() }),
    ...(jobType && { jobType }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

  console.log(input);

  redirect(`/?${searchParams.toString()}`);
}

interface JobFilterSidebarProps {
  defaultValues: JobFilterValues;
}

export default async function JobFilterSiderbar({
  defaultValues,
}: JobFilterSidebarProps) {
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background md:w-[260px]">
      <form action={filterJobs}>
        {/* Search */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2 p-4">
            <Label htmlFor="input">Search</Label>
            <Input
              id="input"
              name="input"
              placeholder="Title, Company, etc."
              defaultValue={defaultValues.input}
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col gap-2 p-4">
            <Label htmlFor="jobType">Job Type</Label>
            <Select
              id="jobType"
              name="jobType"
              defaultValue={defaultValues.jobType || ""}
            >
              <option>All Types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2 p-4">
            <Label htmlFor="location">Location</Label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">All Locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>

          {/* Remote Checkbox */}
          <div className="flex items-center gap-2 p-4">
            <input
              type="checkbox"
              name="remote"
              id="remote"
              className="scale-125 accent-black"
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor="remote">Remote jobs</Label>
          </div>

          {/* Submit Button */}
          <div className="p-4">
            <FormSubmitButton className="w-full">Filter Jobs</FormSubmitButton>
          </div>
        </div>
      </form>
    </aside>
  );
}

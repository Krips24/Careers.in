import { JobFilterValues } from "@/lib/validation";
import JobListItem from "./JobListItem";
import prisma from "@/lib/prisma";
import { Prisma, PrismaClient } from "@prisma/client";

interface jobResultsProps {
  filterValues: JobFilterValues;
}

export default async function JobResults({
  filterValues: { input, jobType, location, remote },
}: jobResultsProps) {
  const searchString = input
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  console.log(searchString);

  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  console.log(searchFilter);

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      jobType ? { type: jobType } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };

  console.log(where);

  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grow space-y-5">
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}

      {jobs.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filters.
        </p>
      )}
    </div>
  );
}

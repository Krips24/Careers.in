import JobFilterSiderbar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
import React from "react";

async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter">
          Job Openings
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>

      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSiderbar />
        <div className="grow space-y-5">
          {jobs.map((job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

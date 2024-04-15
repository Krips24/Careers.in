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
          Available Jobs
        </h1>
      </div>

      <section>
        <div className="space-y-5">
          {jobs.map((job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

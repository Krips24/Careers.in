import JobListItem from "@/components/JobListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });

  return (
    <main>
      <H1 className="text-center">Admin Dashboard</H1>
      <section className="flex flex-col gap-3 py-24">
        <div className="text-center">
          <h2 className="ml-6 text-lg font-bold">Unapproved jobs:</h2>
        </div>
        {unapprovedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <div className="text-center">
            <p className="ml-6 text-muted-foreground">No unapproved jobs.</p>
          </div>
        )}
      </section>
    </main>
  );
}

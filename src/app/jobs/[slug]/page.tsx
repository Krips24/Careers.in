import { cache } from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JobPage from "@/components/JobPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface pageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return job;
});

export async function generateStaticParams() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });
  return jobs.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: pageProps): Promise<Metadata> {
  const job = await getJob(slug);

  return {
    title: job.title,
  };
}

export default async function Page({ params: { slug } }: pageProps) {
  const job = await getJob(slug);

  const { applicationEmail, applicationUrl } = job;

  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl || "";

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside className="space-y-4 max-sm:space-x-4">
        <Button asChild className="bg-green-500 hover:bg-green-600">
          <Link href="/applicantForm" className="w-40 md:w-fit">
            Apply Now
          </Link>
        </Button>

        <Button asChild className="bg-red-500 hover:bg-red-600">
          <a href={`/admin/jobs/${job.slug}`} className="w-40 md:w-fit">
            Delete Job
          </a>
        </Button>
      </aside>
    </main>
  );
}

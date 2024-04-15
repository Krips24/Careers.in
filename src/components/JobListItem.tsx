import React from "react";
import Image from "next/image";
import { Job } from "@prisma/client";
import companyLogoPlaceHolder from "@/assets/tsalla-jobs-logo.png";
import {
  Banknote,
  Briefcase,
  BriefcaseIcon,
  Clock,
  Globe2,
  MapPin,
} from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";
interface JobListItemProps {
  job: Job;
}

const JobListItem = ({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) => {
  return (
    <div>
      <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
        <Image
          src={companyLogoUrl || companyLogoPlaceHolder}
          alt={"${companyName} logo"}
          width={80}
          height={80}
          className="self-center rounded-lg"
        />
        <div className="flex-grow space-y-3">
          <div>
            <h2 className="text-xl font-medium"> {title} </h2>
            <p className="text-muted-foreground"> {companyName} </p>
            <div>
              <div className="mt-4 text-muted-foreground">
                <p className="flex items-center gap-1.5 sm:hidden">
                  <Briefcase size={16} className="shrink-0" />
                  {type}
                </p>

                <p className="flex items-center gap-1.5">
                  <MapPin size={16} className="shrink-0" />
                  {locationType}
                </p>

                <p className="flex items-center gap-1.5">
                  <Globe2 size={16} className="shrink-0" />
                  {location || "Worldwide"}
                </p>

                <p className="flex items-center gap-1.5">
                  <Banknote size={16} className="shrink-0" />
                  {formatMoney(salary)}
                </p>

                <p className="flex items-center gap-1.5 sm:hidden">
                  <Clock size={16} className="shrink-0" />
                  {relativeDate(createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
          <Badge>{type}</Badge>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock size={16} />
            {relativeDate(createdAt)}
          </span>
        </div>
      </article>
    </div>
  );
};

export default JobListItem;

import { Mail, Phone, MapPin } from "lucide-react";
import ABOUT from "@/config/about";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-medium md:text-3xl text-black dark:text-white">
          Contact
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm max-w-md">
          Get in touch through the following channels.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href={`mailto:${ABOUT.socialLinks.email}`}
              className="text-md font-medium hover:underline"
            >
              {ABOUT.socialLinks.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a
              href={`tel:${ABOUT.mobile}`}
              className="text-md font-medium hover:underline"
            >
              {ABOUT.mobile}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-md font-medium">{ABOUT.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

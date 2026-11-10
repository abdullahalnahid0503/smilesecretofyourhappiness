import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import FilterChips from "@/components/common/FilterChips";
import JobCard from "@/components/cards/JobCard";
import FormField from "@/components/forms/FormField";
import FormSuccess from "@/components/forms/FormSuccess";
import { useForm } from "@/components/forms/useForm";
import { jobs, departments } from "@/data/jobs";
import { images } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";

const copy = {
  en: {
    title: "Work With Smile",
    sub: "We recruit across administration, programs, communications, finance, education, technology and more - as opportunities become available. Roles are posted here first.",
    open: "Open Positions",
    general: "Send Your CV",
    generalSub:
      "No suitable role right now? Send us your CV anyway. We keep applications for twelve months and reach out when something fits.",
    generalOption: "General Application",
  },

  bn: {
    title: "Smile-এর সাথে কাজ করুন",
    sub: "প্রশাসন, প্রোগ্রাম, যোগাযোগ, অর্থ, শিক্ষা, প্রযুক্তি ও অন্যান্য ক্ষেত্রে সুযোগ আসলে আমরা নিয়োগ দিই। পদগুলো প্রথমে এখানেই প্রকাশিত হয়।",
    open: "খোলা পদ",
    general: "আপনার সিভি পাঠান",
    generalSub:
      "এখন উপযুক্ত কোনো পদ নেই? তবুও সিভি পাঠান। আমরা বারো মাস আবেদন সংরক্ষণ করি এবং উপযুক্ত সুযোগে যোগাযোগ করি।",
    generalOption: "সাধারণ আবেদন",
  },
};

export default function Career() {
  const { t, tx, lang } = useLang();
  const c = copy[lang] || copy.en;

  const [dept, setDept] = useState("all");

  usePageMeta(t("nav.career"), c.sub);

  const form = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      position: "general",
      department: "",
      cv: "",
      coverLetter: "",
    },
    {
      fullName: "required",
      email: "email",
      phone: "required",
      cv: "required",
    },
  );

  const { values: v, errors: e, onChange, setValue } = form;

  const list = jobs.filter((j) => dept === "all" || j.department === dept);

  const usedDepts = departments.filter((d) =>
    jobs.some((j) => j.department === d),
  );

  const apply = (job) => {
    setValue("position", job.id);
    setValue("department", job.department);

    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* =========================================================
           CAREER FORM
           Keep all form controls visually consistent in dark mode
           ========================================================= */

        #apply input,
        #apply textarea,
        #apply select {
          outline: none !important;
        }

        #apply input:focus,
        #apply textarea:focus,
        #apply select:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        /* ---------------------------------------------------------
           PLACEHOLDERS
           --------------------------------------------------------- */

        #apply input::placeholder,
        #apply textarea::placeholder {
          opacity: 0.45;
        }

        .dark #apply input::placeholder,
        .dark #apply textarea::placeholder {
          opacity: 0.45;
        }

        /* ---------------------------------------------------------
           REMOVE BROWSER YELLOW/AUTO FOCUS EFFECTS
           --------------------------------------------------------- */

        #apply input:-webkit-autofill,
        #apply input:-webkit-autofill:hover,
        #apply input:-webkit-autofill:focus,
        #apply textarea:-webkit-autofill,
        #apply select:-webkit-autofill {
          -webkit-text-fill-color: inherit !important;
          transition: background-color 9999s ease-in-out 0s !important;
        }

        .dark #apply input:-webkit-autofill,
        .dark #apply input:-webkit-autofill:hover,
        .dark #apply input:-webkit-autofill:focus,
        .dark #apply textarea:-webkit-autofill,
        .dark #apply select:-webkit-autofill {
          -webkit-text-fill-color: #ffffff !important;
        }
      `}</style>

      {/* =========================================================
          HERO
          ========================================================= */}

      <PageHero
        eyebrow={t("nav.connect")}
        title={c.title}
        sub={c.sub}
        image={images.leadershipWorkshop}
        imageAlt="A team meeting"
      >
        <a href="#apply" className="btn-primary">
          {c.general}
          <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      {/* =========================================================
          OPEN POSITIONS
          ========================================================= */}

      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={t("nav.career")} title={c.open} />

            <FilterChips
              allLabel={t("common.all")}
              value={dept}
              onChange={setDept}
              options={usedDepts.map((d) => ({
                value: d,
                label: d,
              }))}
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {list.map((j, i) => (
              <Reveal key={j.id} delay={(i % 2) * 0.06} className="h-full">
                <JobCard job={j} onApply={apply} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION SECTION
          ========================================================= */}

      <section
        id="apply"
        className="bg-[#F5F5F5] py-20 dark:bg-[#111111] lg:py-28"
      >
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* LEFT CONTENT */}

          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={t("nav.career")}
              title={c.general}
              sub={c.generalSub}
            />
          </div>

          {/* RIGHT FORM */}

          <Reveal className="lg:col-span-7">
            {form.status === "success" ? (
              <FormSuccess onReset={form.reset} />
            ) : (
              <form
                onSubmit={form.submit}
                noValidate
                className="
                  card-hc
                  grid
                  gap-6
                  p-7
                  sm:grid-cols-2
                  sm:p-10
                "
              >
                {/* FULL NAME */}

                <FormField
                  label={t("form.fullName")}
                  name="fullName"
                  value={v.fullName}
                  onChange={onChange}
                  error={e.fullName}
                  required
                  className="sm:col-span-2"
                />

                {/* EMAIL */}

                <FormField
                  label={t("form.email")}
                  name="email"
                  type="email"
                  value={v.email}
                  onChange={onChange}
                  error={e.email}
                  required
                />

                {/* PHONE */}

                <FormField
                  label={t("form.phone")}
                  name="phone"
                  type="tel"
                  value={v.phone}
                  onChange={onChange}
                  error={e.phone}
                  required
                />

                {/* POSITION */}

                <FormField
                  label={t("form.position")}
                  name="position"
                  type="select"
                  value={v.position}
                  onChange={onChange}
                  options={[
                    {
                      value: "general",
                      label: c.generalOption,
                    },
                    ...jobs.map((j) => ({
                      value: j.id,
                      label: tx(j.title),
                    })),
                  ]}
                />

                {/* DEPARTMENT */}

                <FormField
                  label={lang === "bn" ? "বিভাগ" : "Department"}
                  name="department"
                  type="select"
                  value={v.department}
                  onChange={onChange}
                  options={[
                    {
                      value: "",
                      label: t("form.select"),
                    },
                    ...departments.map((d) => ({
                      value: d,
                      label: d,
                    })),
                  ]}
                />

                {/* CV */}

                <FormField
                  label={t("form.cv")}
                  name="cv"
                  type="text"
                  value={v.cv}
                  onChange={onChange}
                  error={e.cv}
                  required
                  placeholder="https://drive.google.com/…"
                  className="sm:col-span-2"
                />

                {/* COVER LETTER */}

                <FormField
                  label={t("form.coverLetter")}
                  name="coverLetter"
                  type="textarea"
                  value={v.coverLetter}
                  onChange={onChange}
                  className="sm:col-span-2"
                />

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={form.status === "submitting"}
                  className="
                    btn-dark
                    sm:col-span-2
                    disabled:opacity-60
                  "
                >
                  {form.status === "submitting"
                    ? t("common.submitting")
                    : t("common.submit")}

                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

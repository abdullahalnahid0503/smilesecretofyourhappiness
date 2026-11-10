import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Laptop, Check } from "lucide-react";

import PageHero from "@/components/common/PageHero";
import FormField from "@/components/forms/FormField";
import FormSuccess from "@/components/forms/FormSuccess";
import { useForm } from "@/components/forms/useForm";
import { images } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    title: "Become a Volunteer",
    sub: "Join on the field or remotely. Applications take about five minutes; we reply within a week.",
    onField: "On-Field Volunteer",
    onFieldDesc:
      "Distributions, camps, school visits and events in your branch area.",
    remote: "Remote Volunteer",
    remoteDesc:
      "Design, writing, research, social media, data and coordination from anywhere.",
    steps: ["About you", "How you want to help", "Your motivation"],
    interests: [
      "Education",
      "Humanitarian relief",
      "Environment",
      "Media & design",
      "Fundraising",
      "Events",
      "Technology",
      "Teaching",
    ],
    availability: [
      "Weekends",
      "Weekday evenings",
      "Flexible",
      "Emergencies only",
    ],
  },

  bn: {
    title: "স্বেচ্ছাসেবক হোন",
    sub: "মাঠে অথবা দূর থেকে যুক্ত হোন। আবেদনে প্রায় পাঁচ মিনিট লাগে; আমরা এক সপ্তাহের মধ্যে উত্তর দিই।",
    onField: "মাঠ পর্যায়ের স্বেচ্ছাসেবক",
    onFieldDesc:
      "আপনার শাখা এলাকায় বিতরণ, ক্যাম্প, বিদ্যালয় পরিদর্শন ও ইভেন্ট।",
    remote: "রিমোট স্বেচ্ছাসেবক",
    remoteDesc:
      "যেকোনো স্থান থেকে ডিজাইন, লেখা, গবেষণা, সোশ্যাল মিডিয়া, ডেটা ও সমন্বয়।",
    steps: ["আপনার সম্পর্কে", "কীভাবে সাহায্য করতে চান", "আপনার প্রেরণা"],
    interests: [
      "শিক্ষা",
      "মানবিক ত্রাণ",
      "পরিবেশ",
      "মিডিয়া ও ডিজাইন",
      "তহবিল সংগ্রহ",
      "ইভেন্ট",
      "প্রযুক্তি",
      "শিক্ষাদান",
    ],
    availability: [
      "সপ্তাহান্ত",
      "কর্মদিবসের সন্ধ্যা",
      "নমনীয়",
      "শুধু জরুরি অবস্থায়",
    ],
  },
};

const stepFields = [
  ["fullName", "email", "phone", "location", "age", "occupation"],
  ["volunteerType", "interests", "skills", "availability"],
  ["why", "consent"],
];

export default function Volunteer() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;

  const [step, setStep] = useState(0);

  usePageMeta(t("nav.volunteer"), c.sub);

  const form = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      age: "",
      occupation: "",
      volunteerType: "",
      interests: [],
      skills: "",
      availability: "",
      why: "",
      experience: "",
      consent: false,
    },
    {
      fullName: "required",
      email: "email",
      phone: "required",
      location: "required",
      age: "required",
      occupation: "required",
      volunteerType: "required",
      interests: "required",
      availability: "required",
      why: "required",
      consent: "consent",
    },
  );

  const { values: v, errors: e, onChange, setValue } = form;

  const next = () => {
    if (form.check(stepFields[step])) {
      setStep((s) => s + 1);
    }
  };

  const toggleInterest = (i) =>
    setValue(
      "interests",
      v.interests.includes(i)
        ? v.interests.filter((x) => x !== i)
        : [...v.interests, i],
    );

  const typeOptions = [
    {
      value: "on-field",
      label: t("form.onField"),
    },
    {
      value: "remote",
      label: t("form.remote"),
    },
    {
      value: "both",
      label: t("form.both"),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("nav.connect")}
        title={c.title}
        sub={c.sub}
        image={images.hero}
        imageAlt="Volunteers working together"
      />

      {/* Volunteer Type Cards */}
      <section className="pb-8">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {[
            {
              icon: MapPin,
              h: c.onField,
              p: c.onFieldDesc,
              val: "on-field",
            },
            {
              icon: Laptop,
              h: c.remote,
              p: c.remoteDesc,
              val: "remote",
            },
          ].map(({ icon: Icon, h, p, val }) => {
            const selected = v.volunteerType === val;

            return (
              <button
                key={val}
                type="button"
                onClick={() => {
                  setValue("volunteerType", val);
                  document
                    .getElementById("apply")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "card-hc flex items-start gap-5 p-7 text-left hover:shadow-[8px_8px_0_0_#FDE01A] dark:hover:shadow-[8px_8px_0_0_#FFFFFF]",
                  selected &&
                    "!bg-[#FDE01A] !text-black dark:!bg-[#FDE01A] dark:!text-black",
                )}
                aria-pressed={selected}
              >
                <span
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-black transition-colors",
                    selected ? "bg-black text-white" : "bg-white text-black",
                  )}
                >
                  <Icon className="h-7 w-7" />
                </span>

                <span>
                  <span className="block text-2xl font-extrabold text-black dark:text-black">
                    {h}
                  </span>

                  <span className="mt-1 block text-black/65 dark:text-black/65">
                    {p}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          {form.status === "success" ? (
            <FormSuccess
              onReset={() => {
                form.reset();
                setStep(0);
              }}
            />
          ) : (
            <>
              {/* Steps */}
              <div className="mb-8 flex items-center justify-center gap-3 sm:gap-6">
                {c.steps.map((s, i) => (
                  <React.Fragment key={s}>
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full border-2 border-black text-sm font-bold transition-all duration-300",
                          i < step
                            ? "bg-black text-white"
                            : i === step
                              ? "bg-[#FDE01A]"
                              : "bg-white text-black/40",
                        )}
                      >
                        {i < step ? (
                          <Check className="h-4 w-4" strokeWidth={3} />
                        ) : (
                          i + 1
                        )}
                      </span>

                      <span
                        className={cn(
                          "hidden text-xs font-semibold uppercase tracking-wider sm:block",
                          i === step ? "text-black" : "text-black/40",
                        )}
                      >
                        {s}
                      </span>
                    </div>

                    {i < c.steps.length - 1 && (
                      <span
                        className={cn(
                          "h-0.5 w-8 rounded-full transition-colors duration-300 sm:w-16",
                          i < step ? "bg-black" : "bg-black/15",
                        )}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Form */}
              <form
                onSubmit={form.submit}
                noValidate
                className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-black/10">
                  <motion.div
                    className="h-full bg-[#FDE01A]"
                    animate={{
                      width: `${((step + 1) / 3) * 100}%`,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="p-7 sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/55">
                    {t("common.step")} {step + 1} {t("common.of")} 3
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold">
                    {c.steps[step]}
                  </h2>

                  {/* STEP 1 */}
                  {step === 0 && (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <FormField
                        variant="boxed"
                        label={t("form.fullName")}
                        name="fullName"
                        value={v.fullName}
                        onChange={onChange}
                        error={e.fullName}
                        required
                        className="sm:col-span-2"
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.email")}
                        name="email"
                        type="email"
                        value={v.email}
                        onChange={onChange}
                        error={e.email}
                        required
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.phone")}
                        name="phone"
                        type="tel"
                        value={v.phone}
                        onChange={onChange}
                        error={e.phone}
                        required
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.location")}
                        name="location"
                        value={v.location}
                        onChange={onChange}
                        error={e.location}
                        required
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.age")}
                        name="age"
                        type="number"
                        value={v.age}
                        onChange={onChange}
                        error={e.age}
                        required
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.occupation")}
                        name="occupation"
                        value={v.occupation}
                        onChange={onChange}
                        error={e.occupation}
                        required
                        className="sm:col-span-2"
                      />
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 1 && (
                    <div className="mt-8 space-y-8">
                      <fieldset>
                        <legend className="text-sm font-semibold uppercase tracking-wider text-black/70">
                          {t("form.volunteerType")} *
                        </legend>

                        <div className="mt-3 grid gap-3 sm:grid-cols-3">
                          {typeOptions.map((o) => (
                            <button
                              key={o.value}
                              type="button"
                              onClick={() => setValue("volunteerType", o.value)}
                              aria-pressed={v.volunteerType === o.value}
                              className={cn(
                                "rounded-2xl border-2 border-black px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]",
                                v.volunteerType === o.value
                                  ? "bg-black text-white shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
                                  : "hover:bg-[#FDE01A]",
                              )}
                            >
                              {o.label}
                            </button>
                          ))}
                        </div>

                        {e.volunteerType && (
                          <p
                            className="mt-2 text-sm font-medium text-red-600"
                            role="alert"
                          >
                            {e.volunteerType}
                          </p>
                        )}
                      </fieldset>

                      <fieldset>
                        <legend className="text-sm font-semibold uppercase tracking-wider text-black/70">
                          {t("form.interests")} *
                        </legend>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {c.interests.map((i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => toggleInterest(i)}
                              aria-pressed={v.interests.includes(i)}
                              className={cn(
                                "rounded-full border-2 border-black px-4 py-1.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.96]",
                                v.interests.includes(i)
                                  ? "bg-[#FDE01A] shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                                  : "hover:bg-black/5",
                              )}
                            >
                              {i}
                            </button>
                          ))}
                        </div>

                        {e.interests && (
                          <p
                            className="mt-2 text-sm font-medium text-red-600"
                            role="alert"
                          >
                            {e.interests}
                          </p>
                        )}
                      </fieldset>

                      <FormField
                        variant="boxed"
                        label={t("form.skills")}
                        name="skills"
                        type="textarea"
                        value={v.skills}
                        onChange={onChange}
                        placeholder="e.g. Photography, teaching, first aid, Excel…"
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.availability")}
                        name="availability"
                        type="select"
                        value={v.availability}
                        onChange={onChange}
                        error={e.availability}
                        required
                        options={[
                          {
                            value: "",
                            label: t("form.select"),
                            disabled: true,
                          },
                          ...c.availability.map((a) => ({
                            value: a,
                            label: a,
                          })),
                        ]}
                      />
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step === 2 && (
                    <div className="mt-8 space-y-8">
                      <FormField
                        variant="boxed"
                        label={t("form.why")}
                        name="why"
                        type="textarea"
                        value={v.why}
                        onChange={onChange}
                        error={e.why}
                        required
                      />

                      <FormField
                        variant="boxed"
                        label={t("form.experience")}
                        name="experience"
                        type="textarea"
                        value={v.experience}
                        onChange={onChange}
                      />

                      <label className="flex items-start gap-3 rounded-2xl border-2 border-black/12 bg-[#F5F5F5] p-4 text-sm">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={v.consent}
                          onChange={onChange}
                          className="mt-1 h-5 w-5 shrink-0 accent-black"
                        />

                        <span>{t("form.consent")}</span>
                      </label>

                      {e.consent && (
                        <p
                          className="-mt-6 text-sm font-medium text-red-600"
                          role="alert"
                        >
                          {e.consent}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-10 flex items-center justify-between gap-3">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="btn-outline"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        {t("common.back")}
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 2 ? (
                      <button type="button" onClick={next} className="btn-dark">
                        {t("common.next")}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={form.status === "submitting"}
                        className="btn-primary disabled:opacity-60"
                      >
                        {form.status === "submitting"
                          ? t("common.submitting")
                          : t("common.submit")}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}

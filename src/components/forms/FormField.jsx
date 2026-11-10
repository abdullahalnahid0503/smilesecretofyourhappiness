import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * @typedef {Object} FormFieldOption
 * @property {string} value
 * @property {string} label
 * @property {boolean} [disabled]
 */

/**
 * @typedef {Object} FormFieldProps
 * @property {string} label
 * @property {string} name
 * @property {"text"|"email"|"tel"|"number"|"textarea"|"select"} [type]
 * @property {string} value
 * @property {(event: {target: {name: string, value: string}}) => void} onChange
 * @property {string} [error]
 * @property {FormFieldOption[]} [options]
 * @property {string} [placeholder]
 * @property {boolean} [required]
 * @property {string} [className]
 * @property {"line"|"boxed"} [variant]
 */

/**
 * @param {FormFieldProps} props
 */
export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  options = [],
  placeholder,
  required,
  className,
  variant = "line",
}) {
  const id = `f-${name}`;

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const base = cn(
    variant === "boxed" ? "field-input-boxed" : "field-input",
    error && "border-red-600",
  );

  const selectedOption = options.find((option) => option.value === value);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  /* Close dropdown with Escape */
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSelect = (option) => {
    if (option.disabled) return;

    onChange({
      target: {
        name,
        value: option.value,
      },
    });

    setOpen(false);
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-semibold uppercase tracking-wider text-black/70 dark:text-white/70",
          variant === "boxed" && "mb-2",
        )}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {/* TEXTAREA */}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          placeholder={placeholder}
          className={base}
          aria-invalid={!!error}
        />
      ) : type === "select" ? (
        /* CUSTOM SELECT */
        <div ref={dropdownRef} className="form-dropdown">
          {/* Trigger */}
          <button
            id={id}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-invalid={!!error}
            onClick={() => setOpen((current) => !current)}
            className={cn(
              "form-dropdown-trigger",
              variant === "boxed" && "field-input-boxed !border-b-0",
              error && "!border-red-600",
            )}
            data-open={open ? "true" : "false"}
          >
            <span
              className={cn(
                !selectedOption?.label && "text-black/45 dark:text-white/45",
              )}
            >
              {selectedOption?.label || placeholder || "Select"}
            </span>

            <ChevronDown
              aria-hidden="true"
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </button>

          {/* Dropdown */}
          {open && (
            <div
              role="listbox"
              aria-labelledby={id}
              className="form-dropdown-menu"
            >
              {options.map((option) => {
                const isSelected = option.value === value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    disabled={option.disabled}
                    onClick={() => handleSelect(option)}
                    className="form-dropdown-option"
                    data-selected={isSelected ? "true" : "false"}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* NORMAL INPUT */
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={base}
          aria-invalid={!!error}
        />
      )}

      {/* Error */}
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

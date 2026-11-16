interface IFormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email";
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}

const CONTROL_CLASSES =
  "w-full rounded bg-surface px-4 text-base text-foreground placeholder:text-foreground/90 outline-none focus-visible:ring-2 focus-visible:ring-accent aria-invalid:ring-2 aria-invalid:ring-red-400";

export function FormField({
  id,
  label,
  type = "text",
  multiline = false,
  placeholder,
  autoComplete,
  error,
}: IFormFieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    placeholder,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={6} className={`${CONTROL_CLASSES} resize-y py-3`} />
      ) : (
        <input {...shared} type={type} className={`${CONTROL_CLASSES} h-[52px]`} />
      )}
      {error && (
        <p id={errorId} className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

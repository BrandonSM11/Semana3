interface PropsBadge {
  label: string;
  status?: "success" | "warning" | "info" | "error" | "neutral";
  icon?: React.ReactNode;

}

export const Badgeee = ({label, status = "neutral", icon}: PropsBadge) => {
  const statusAll = {
    success: "components__status--success",
    warning: "components__status--warning",
    info: "components__status--info",
    error: "components__status--error",
    neutral: "components__status--neutral",
  };

  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded ${statusAll[status]}`}
    
    >
      {icon && <span className="text-sm">{icon}</span>}
      {label}
    </span>
  );
};



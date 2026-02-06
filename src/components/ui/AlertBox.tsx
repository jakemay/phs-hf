import { ReactNode } from "react";
import { AlertTriangle, Info, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
interface AlertBoxProps {
  type: "info" | "warning" | "danger" | "success";
  title?: string;
  children: ReactNode;
}
const alertStyles = {
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-900",
    icon: Info,
    iconColor: "text-blue-600"
  },
  warning: {
    container: "bg-amber-50 border-amber-200 text-amber-900",
    icon: AlertTriangle,
    iconColor: "text-amber-600"
  },
  danger: {
    container: "bg-red-50 border-red-200 text-red-900",
    icon: AlertCircle,
    iconColor: "text-red-600"
  },
  success: {
    container: "bg-green-50 border-green-200 text-green-900",
    icon: CheckCircle,
    iconColor: "text-green-600"
  }
};
const AlertBox = ({
  type,
  title,
  children
}: AlertBoxProps) => {
  const styles = alertStyles[type];
  const Icon = styles.icon;
  return;
};
export default AlertBox;
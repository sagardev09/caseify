import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
interface PhoneProps extends HTMLAttributes<HTMLDListElement> {
  imgSrc: String;
  dark?: boolean;
}

const Phone = ({ imgSrc, dark = false, className, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phoneimg"
      />
      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} className="object-cover" alt="" />
      </div>
    </div>
  );
};

export default Phone;

"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

function SheetContent({ className, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/20" />
      <DialogPrimitive.Content className={cn("fixed inset-y-0 left-0 z-50 w-[min(20rem,86vw)] border-r border-border bg-background p-4 shadow-lg outline-none", className)} {...props}>
        {children}
        <DialogPrimitive.Close className="absolute right-3 top-3 grid size-10 place-items-center rounded-lg text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring" aria-label="Close navigation">
          <X className="size-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={cn("sr-only", className)} {...props} />;
}

export { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger };

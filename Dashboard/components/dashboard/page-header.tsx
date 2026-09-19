import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function AddFoodDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button><Plus className="size-4" />Add food</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a food offer</DialogTitle>
          <DialogDescription>
            This preview uses mock data. New offers are not saved.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-5 flex justify-end"><DialogClose asChild><Button variant="outline">Got it</Button></DialogClose></div>
      </DialogContent>
    </Dialog>
  );
}

export function PageHeader({ title, description, action = false }: { title: string; description: string; action?: boolean }) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.025em] sm:text-[30px]">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {action ? <div className="shrink-0"><AddFoodDialog /></div> : null}
    </header>
  );
}

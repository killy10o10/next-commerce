"use client"
import { useState } from "react";

import { Store } from "@prisma/client"
import { useParams, useRouter } from "next/navigation";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({className, items = []}: StoreSwitcherProps) => {
  const [open, setOpen] = useState(false)
  const StoreModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItemes = items.map((item) => ({
    label: item.name,
    value: item.id
  }));

  const currentStore = formattedItemes.find(item => item.value === params.storeId)

  const onStoreSelect = (store: {value: string, label: string}) => {
    setOpen(false);
    router.push(`${store.value}`);
  }
  return (
   <>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          Current Store
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 mx-2">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store..." />
            <CommandEmpty>No store found</CommandEmpty>
            <CommandGroup heading="Stores">
              {}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
   </>
  )
}

export default StoreSwitcher

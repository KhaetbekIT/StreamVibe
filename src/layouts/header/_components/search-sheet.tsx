"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useOpenState } from "@/hooks/open-state.hook";

export const SearchSheet = () => {
	const { open, openChange } = useOpenState();
	return (
		<Sheet open={open} onOpenChange={openChange}>
			<Button
				className="text-white"
				color="none"
				onClick={() => openChange(true)}
			>
				<Search className="size-6" />
			</Button>
			<SheetContent className="space-y-5 w-2xl bg-white">
				<SheetHeader>
					<SheetTitle>Search results</SheetTitle>
					<SheetDescription>Search cinema and tv shows</SheetDescription>
				</SheetHeader>

				<SheetFooter>
					<Button className="text-black" color="black" variant={"icon"}>
						Search
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

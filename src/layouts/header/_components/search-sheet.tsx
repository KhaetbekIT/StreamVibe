"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
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
			<SheetContent closeClassName="text-white" className="space-y-5 w-2xl bg-black-10 ">
				<SheetHeader className="text-white">
					<SheetTitle>Search cinema</SheetTitle>
				</SheetHeader>

				<SheetFooter>
					<Button variant="button" color="red">
						<Search className="size-6" />
						<span>Search</span>
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

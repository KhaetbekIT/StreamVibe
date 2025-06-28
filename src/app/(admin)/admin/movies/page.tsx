import { PenLine, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { PageType } from "@/types/type";

const Page: PageType = () => {
	return (
		<section className="space-y-5">
			<div className="flex justify-between gap-2">
				<form className="flex gap-5 ">
					<Input type="search" placeholder="Search" className="w-96" />
					<Button type="submit">Search</Button>
				</form>

				<Button variant="outline">
					Create <Plus />
				</Button>
			</div>

			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>№</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Date/Time</TableHead>
						<TableHead>Category</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>2022-01-01</TableCell>
						<TableCell>Comedy</TableCell>
						<TableCell>$250.00</TableCell>
						<TableCell className="text-right space-x-2.5">
							<PenLine className="inline-block cursor-pointer hover:text-blue-500" />

							<Trash2 className="inline-block cursor-pointer hover:text-destructive" />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
};

export default Page;

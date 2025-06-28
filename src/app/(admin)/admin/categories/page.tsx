import { Trash2 } from "lucide-react";
import Link from "next/link";
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

const Page: PageType = async () => {
	return (
		<section className="space-y-5">
			<div className="flex justify-between gap-2">
				<form className="flex gap-5 ">
					<Input type="search" placeholder="Search" className="w-96" />
					<Button type="submit">Search</Button>
				</form>

				<Link
					href="/admin/categories/create"
					className="border px-2.5 py-1 rounded-md"
				>
					Create
				</Link>
			</div>

			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>№</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Date/Time</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>2022-01-01</TableCell>
						<TableCell>$250.00</TableCell>
						<TableCell className="text-right">
							<Trash2 className="inline-block cursor-pointer hover:text-destructive" />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
};

export default Page;

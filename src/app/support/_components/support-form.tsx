"use client";

import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const SupportForm = () => {
	return (
		<section className="pt-[115px]">
			<Container>
				<Groups className="flex-row gap-10">
					<div className="w-[533px] space-y-5">
						<h2 className="text-3xl font-bold text-white">
							Welcome to our support page!
						</h2>

						<p className="text-grey-60">
							We're here to help you with any problems you may be having with
							our product.
						</p>
					</div>

					<div className="flex-1 bg-black-06 border border-black-15 rounded-xl p-12">
						<form className="space-y-12 text-white">
							<Groups className="flex-row gap-12">
								<Groups className="flex-1">
									<Label htmlFor="firstName">First Name</Label>

									<Input
										className="border-black-15"
										id="firstName"
										placeholder="Enter First Name"
									/>
								</Groups>

								<Groups className="flex-1">
									<Label htmlFor="lastName">Last Name</Label>

									<Input
										className="border-black-15"
										id="lastName"
										placeholder="Enter Last Name"
									/>
								</Groups>
							</Groups>

							<Groups className="flex-row gap-12">
								<Groups className="flex-1">
									<Label htmlFor="email">Email</Label>

									<Input
										className="border-black-15"
										id="email"
										placeholder="Enter your Email"
										type="email"
									/>
								</Groups>

								<Groups className="flex-1">
									<Label htmlFor="phone">Phone Number</Label>

									<Select>
										<SelectTrigger className="w-full border-black-15">
											<SelectValue placeholder="Select a fruit" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="apple">Apple</SelectItem>
											<SelectItem value="banana">Banana</SelectItem>
											<SelectItem value="blueberry">Blueberry</SelectItem>
											<SelectItem value="grapes">Grapes</SelectItem>
											<SelectItem value="pineapple">Pineapple</SelectItem>
										</SelectContent>
									</Select>
								</Groups>
							</Groups>
						</form>
					</div>
				</Groups>
			</Container>
		</section>
	);
};

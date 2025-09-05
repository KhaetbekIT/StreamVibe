"use client";

import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const SupportForm = () => {
	return (
		<section id="form" className="pt-[115px]">
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

									<Groups className="flex-row items-center gap-3">
										<Select>
											<SelectTrigger className="w-32 min-h-[70px] border-black-15">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="apple">Apple</SelectItem>
												<SelectItem value="banana">Banana</SelectItem>
												<SelectItem value="blueberry">Blueberry</SelectItem>
												<SelectItem value="grapes">Grapes</SelectItem>
												<SelectItem value="pineapple">Pineapple</SelectItem>
											</SelectContent>
										</Select>

										<Input
											className="border-black-15"
											placeholder="Enter Phone Number"
											id="phone"
											type="number"
										/>
									</Groups>
								</Groups>
							</Groups>

							<Groups className="flex-1">
								<Label htmlFor="message">Message</Label>

								<Textarea
									className="border-black-15"
									id="message"
									placeholder="Enter your Message"
								/>
							</Groups>

							<Groups className="flex-row justify-between items-center">
								<Checkbox
									label={{
										htmlFor: "agree",
										children: <>I agree to the terms and conditions</>,
										className: "text-grey-60",
									}}
									checkbox={{ id: "agree" }}
									className="flex-row-reverse "
								/>

								<Button variant="button" color="red">
									Send Message
								</Button>
							</Groups>
						</form>
					</div>
				</Groups>
			</Container>
		</section>
	);
};

import { Logo } from "@/layout/_components/logo";
import type { PageType } from "@/types/type";
import { LoginForm } from "./_components/login-form";

const Page: PageType = async () => {
	return (
		<div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<div className="flex items-center gap-2 self-center font-medium">
					<Logo />
				</div>

				<LoginForm />
			</div>
		</div>
	);
};

export default Page;

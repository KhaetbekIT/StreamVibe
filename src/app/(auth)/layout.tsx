import type { Metadata } from "next";
import type { LayoutType } from "@/types/type";

export const metadata: Metadata = {
	title: "PlayOn | Auth",
	description: "Auth page of the application",
};

const AuthLayout: LayoutType = async ({ children }) => {
	return <body>{children}</body>;
};

export default AuthLayout;

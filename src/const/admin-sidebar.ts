import { IconCategory, IconMovie, IconNetwork } from "@tabler/icons-react";
import { Router } from "@/configs/router.config";

export const AdminSidebar = {
	user: {
		name: "User Name",
		email: "mJWYt@example.com",
		avatar: "/avatar.png",
	},
	navMain: [
		{
			title: "Socials",
			url: Router.admin.socials,
			icon: IconNetwork,
		},
		{
			title: "Categories",
			url: Router.admin.categories,
			icon: IconCategory,
		},
		{
			title: "Movies",
			url: Router.admin.movies,
			icon: IconMovie,
		},
	],
} as const;

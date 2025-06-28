import {
	IconCamera,
	IconCategory,
	IconFileAi,
	IconFileDescription,
	IconMovie,
	IconNetwork,
} from "@tabler/icons-react";
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
			url: "#",
			icon: IconMovie,
		},
	],
	navClouds: [
		{
			title: "Capture",
			icon: IconCamera,
			isActive: true,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
		{
			title: "Proposal",
			icon: IconFileDescription,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
		{
			title: "Prompts",
			icon: IconFileAi,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
	],
};

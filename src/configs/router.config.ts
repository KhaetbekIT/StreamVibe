export const Router = {
	pages: {
		home: "/",
		category: "/category",
		details: (id: number) => `/details/${id}`,
	},
	auth: {
		login: "/auth/login",
		register: "/auth/register",
		forgotPassword: "/auth/forgot-password",
	},
	socials: {
		github: "https://github.com/KhaetbekIT/PlayOn",
	},
} as const;

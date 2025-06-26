import type { Metadata } from "next";
import type { LayoutType } from "@/types/type";

export const metadata: Metadata = {
    title: "PlayOn | Admin",
    description: "Auth page of the application",
};

const AdminLayout: LayoutType = async ({ children }) => {
    return <body>{children}</body>;
};

export default AdminLayout;

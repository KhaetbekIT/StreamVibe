"use client";

import { useState } from "react";

export const useOpenState = () => {
	const [isOpen, setIsOpen] = useState(false);
	return { open: isOpen, openChange: setIsOpen };
};

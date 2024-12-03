'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

const ClientOnlyPortal: FC<{ children: React.ReactNode }> = ({ children }) => {
	const ref = useRef<HTMLElement | null>();
	const [mount, setMount] = useState(false);

	useEffect(() => {
		ref.current = document.getElementById('modal-container');
		setMount(true);
	}, []);

	return mount && ref.current ? createPortal(children, ref.current) : null;
};
export default ClientOnlyPortal;
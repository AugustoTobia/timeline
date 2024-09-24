"use client"
import { createContext, useContext, useState } from "react";
import { IContextState } from "common/types";

const baseEvents = [
	{
		id: 1,
		status: 'Ordered',
		date: '15/10/2020 10:30',
		icon: 'pi pi-shopping-cart',
		color: '#9C27B0',
		image: 'game-controller.jpg'
	},
	{
		id: 2,
		status: 'Processing',
		date: '15/10/2020 14:00',
		icon: 'pi pi-cog',
		color: '#673AB7'
	},
	{
		id: 3,
		status: 'Shipped',
		date: '15/10/2020 16:15',
		icon: 'pi pi-shopping-cart',
		color: '#FF9800'
	},
	{
		id: 4,
		status: 'Delivered',
		date: '16/10/2020 10:00',
		icon: 'pi pi-check',
		color: '#607D8B'
	}
]
export const AppContext = createContext<IContextState>({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	let [timelineState, setTimelineState] = useState<any>(baseEvents)

	return (
		<AppContext.Provider value={{ timelineState, setTimelineState }} >
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext);
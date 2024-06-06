import React from 'react'
import PortfolioEntry from './portfolioEntry/PortfolioEntry'
import { entries } from './entries'

const Portfolio = () => {

	return (
		<div className='flex w-full flex-wrap'>
			{
				entries.map(entry => {
					return <PortfolioEntry
						classname=''
						projectId={entry.projectId}
						key={entry.title}
						title={entry.title}
						description={entry.description}
						image={entry.image}
					/>
				})
			}
		</div>
	)
}

export default Portfolio
import React, {FC} from 'react'
import Divider from '../divider/divider'

const Footer: FC = () => {
	return (
		<div className='bg-grey-base w-full justify-self-end'>
			<Divider />
			<div className='flex items-center justify-center w-full p-2'>
				<h2>
					Contact
				</h2>
				<p>
					augustotobia@gmail.com
				</p>
			</div>

		</div>
	)
}

export default Footer
import { PortafolioEntryList } from '@/app/common/types'

import laMuerte from '../../common/images/la-muerte.png'
import laTorre from '../../common/images/la-torre.png'
import elLoco from '../../common/images/el-loco.png'
import persecucion from '../../common/images/persecucion.jpg'
import laInvocacion from '../../common/images/la-invocacion.jpg'
import grifo from '../../common/images/grifo.jpg'
import mute from '../../common/images/mute.jpg'

export const entries: PortafolioEntryList[] = [
	{
		image: [{ source: laMuerte, alt: 'a' }, { source: elLoco, alt: 'b' }, { source: laTorre, alt: 'c' }],
		title: 'La Muerte',
		description: 'Ilustracion para mazo de taron inspirado en folklore marino',
		projectId: '1'
	},

	{
		image: [{ source: persecucion, alt: 'a' },],
		title: 'entry 1',
		description: '',
		projectId: '2'

	},
	{
		image: [{ source: laInvocacion, alt: 'a' }],
		title: 'entry 1',
		description: 'blblblblbbbl',
		projectId: '3'

	},
	{
		image: [{ source: elLoco, alt: 'a' }],
		title: 'entry 1',
		description: 'blblblblbbbl',
		projectId: '4'

	},

	{
		image: [{ source: laTorre, alt: 'a' }],
		title: 'entry 1',
		description: '',
		projectId: '5'

	},
	{
		image: [{ source: grifo, alt: 'a' }],
		title: 'entry 1',
		description: 'blblblblbbbl',
		projectId: '6'

	},
	{
		image: [{ source: mute, alt: 'a' }],
		title: 'entry 1',
		description: 'blblblblbbbl',
		projectId: '7'

	},
]
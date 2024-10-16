import { v4 as uuid } from 'uuid';

import { ICard } from 'common/types';

import {
    Card,
    CustomTimeline,
    EventPopup,
    EventPreviewCard,
    TextInput,
} from 'components';

const mockedCard: ICard = {
    id: uuid(),
    name: 'Bob Bubbleboms',
    tag: 'character',
    description: 'A little gnome addicted to speed',
    relatedDates: [{ id: uuid(), title: 'Race on the great white' }],
    relatedCharacters: [{ id: uuid(), name: 'Sonrisas' }],
    relatedLocations: [
        { id: uuid(), name: 'The great salar' },
        { id: uuid(), name: 'The great salar' },
        { id: uuid(), name: 'The great salar' },
    ],
};

const mockedEvent = {
    id: uuid(),
    title: 'Some title',
    name: 'Race on the great white',
    description:
        '10/01/2024\nAugusto Tobia\nRosario, Santa Fe, Argentina\nDear Hiring Manager,\nI’ve always been a creator. For most of my life that was translated into the art of painting, always looking to solve each problem in a unique way. Now my life has redirected my efforts to the Developing field where my creativity and analytical mind can work together to make a good thing.\nOver my 4 years of experience I’ve learned a lot of soft and hard skills, talking and interpreting the needs of my coworkers. I’ve learned to apply a detail oriented eye to my work and to make it as easy to understand as possible. I enjoy having a well tested, well oiled product, which I also learned with my 2 biggest clients featuring over 80% coverage and dozens of other developers. \nI would love to use my skills to create something together and help your project evolve.\nSo thank you for your time reading this, I hope we get a chance to talk and learn about what you have in mind. \nSincerely',
    relatedDates: [{ id: uuid(), title: 'Race on the great white' }],
    relatedCharacters: [
        { id: uuid(), name: 'Sonrisas' },
        { id: uuid(), name: 'Bob bubbleboms' },
    ],
    relatedLocations: [
        { id: uuid(), name: 'The great salar' },
        { id: uuid(), name: 'The great salar' },
        { id: uuid(), name: 'The great salar' },
    ],
};

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* <CustomTimeline /> */}
            <div className="flex flex-col items-center justify-center m-5">
                {/* <Card {...mockedCard} /> */}
                {/* <EventPreviewCard {...mockedEvent} /> */}
                <EventPopup {...mockedEvent} />
                {/* <TextInput className='w-1/2 flex flex-col items-center justify-center' /> */}
            </div>
        </div>
    );
}

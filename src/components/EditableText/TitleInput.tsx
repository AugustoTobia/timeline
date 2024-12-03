'use client';

import React, { FC, useLayoutEffect, useMemo, useRef, useState } from 'react';

import HTMLReactParser from 'html-react-parser/lib/index';
import JoditEditor, { IJoditEditorProps, Jodit } from 'jodit-react';
import toast from 'react-hot-toast';
import { TiEdit, TiInputChecked } from 'react-icons/ti';

import { joditOptions } from 'common/consts';
import { ITextInput } from 'common/types';

const TitleInput: FC<ITextInput> = ({
	className = '',
	initialText = 'Start Typing!',
	semanticTag: Tag = 'div',
	overrideOptions,
	onBlur,
}) => {
	const editor = useRef(null);
	const [state, setState] = useState(false);

	// TODO - Jodit fires an error when destroying the modal component while editing it's content. I need to find an alternative.

	const config = useMemo<IJoditEditorProps['config']>(
		() => ({
			inline: true,
			defaultActionOnPaste: 'insert_as_text',
			beautifyHTML: true,
			defaultLineHeight: 1.5,
			enter: 'br',
			buttons: overrideOptions || joditOptions,
			buttonsMD: overrideOptions || joditOptions,
			buttonsSM: overrideOptions || joditOptions,
			buttonsXS: overrideOptions || joditOptions,
			statusbar: false,
			toolbar: false,
			toolbarInline: true,
			limitChars: 35,
			editorClassName: 'titleEditor text-center',
			allowResizeY: false,
			showXPathInStatusbar: false,
			hidePoweredByJodit: true,
			disablePlugins: 'add-new-line',
		}),
		[overrideOptions],
	);

	return (
		<div className={`${className}`}>
			<div className="flex flex-col">
				{state ? (
					<div className="flex items-end">
						<JoditEditor
							ref={editor}
							value={initialText}
							config={config}
							onBlur={(newContent) => {
								console.log('HI', newContent);
								onBlur(newContent);
							}}
						/>
						<button
							onClick={() => setState(!state)}
							className="flex"
						>
							<TiInputChecked
								size={'100%'}
								className="align-self-end w-[1.5rem]"
							/>
						</button>
					</div>
				) : (
					<div className="flex">
						<Tag className={`max-h-[100px] max-w-[500px] truncate`}>
							{HTMLReactParser(initialText)}
						</Tag>
						<button
							onClick={() => setState(!state)}
							className="ml-2 flex self-end"
						>
							<TiEdit
								size={'100%'}
								className="align-self-end w-[1.5rem]"
							/>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default TitleInput;
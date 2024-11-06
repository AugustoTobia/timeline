'use client';

import React, { FC, useMemo, useRef, useState } from 'react';

import HTMLReactParser from 'html-react-parser/lib/index';
import JoditEditor, { IJoditEditorProps } from 'jodit-react';
import { TiEdit, TiInputChecked } from 'react-icons/ti';

import { joditOptions } from 'common/consts';
import { ITextInput } from 'common/types';
import { useModalContext } from 'context/modalContext';

const TitleInput: FC<ITextInput> = ({
	className = '',
	initialText = 'Start Typing!',
	semanticTag: Tag = 'div',
	overrideOptions,
}) => {
	const editor = useRef(null);

	const { setModalData, modalData } = useModalContext();
	const [state, setState] = useState(false);

	const config = useMemo<IJoditEditorProps['config']>(
		() => ({
			readonly: false,
			placeholder: '',
			defaultActionOnPaste: 'insert_as_text',
			defaultLineHeight: 1.5,
			enter: 'br',
			buttons: overrideOptions || joditOptions,
			buttonsMD: overrideOptions || joditOptions,
			buttonsSM: overrideOptions || joditOptions,
			buttonsXS: overrideOptions || joditOptions,
			statusbar: false,
			maxWidth: 500,
			height: 50,
			minWidth: 200,
			minHeight: 50,
			sizeLG: 900,
			sizeMD: 700,
			sizeSM: 400,
			toolbar: false,
			limitChars: 100,
			className: 'min-h-[100px] h-[100px]',
			editorClassName: 'titleEditor text-center',
			allowResizeY: false,
			hidePoweredByJodit: true,
		}),
		[],
	);

	if (!modalData) return;

	const handleClick = () => {
		setState(!state);
	};

	return (
		<div className={`${className}`}>
			<div className="flex flex-col">
				{state ? (
					<div className="flex items-end">
						<JoditEditor
							ref={editor}
							value={modalData.title || initialText}
							config={config}
							onBlur={(newContent) =>
								setModalData({
									...modalData,
									title: newContent,
								})
							}
						/>
						<button
							onClick={handleClick}
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
							{modalData.title ? HTMLReactParser(modalData.title) : initialText}
						</Tag>
						<button
							onClick={handleClick}
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
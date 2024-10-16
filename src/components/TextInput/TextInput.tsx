'use client';

import React, {
    ElementType,
    FC,
    HTMLAttributes,
    useMemo,
    useRef,
    useState,
} from 'react';

import HTMLReactParser from 'html-react-parser/lib/index';
import JoditEditor, { IJoditEditorProps, Jodit } from 'jodit-react';
import { Card } from 'primereact/card';
import { TiEdit, TiInputChecked } from 'react-icons/ti';

import { joditOptions } from 'common/consts';

interface ITextInput {
    className?: string;
    initialText?: string;
    semanticTag?: ElementType;
    height?: number;
    width?: number;
    allowOverflow?: boolean;
    overrideOptions?: string;
}

const TextInput: FC<ITextInput> = ({
    className = '',
    initialText = 'Start Typing!',
    semanticTag: Tag = 'div',
    height,
    width,
    allowOverflow,
    overrideOptions,
}) => {
    const editor = useRef(null);
    const [state, setState] = useState({ editing: false, content: '' });
    console.log(width);

    const config = useMemo<IJoditEditorProps['config']>(
        () => ({
            readonly: false,
            placeholder: '',
            defaultActionOnPaste: 'insert_as_text',
            beautifyHTML: true,
            defaultLineHeight: 1.5,
            enter: 'br',
            buttons: overrideOptions || joditOptions,
            buttonsMD: overrideOptions || joditOptions,
            buttonsSM: overrideOptions || joditOptions,
            buttonsXS: overrideOptions || joditOptions,
            statusbar: false,
            width: width || 500,
            height: height || 200,
            sizeLG: 900,
            sizeMD: 700,
            sizeSM: 400,
            toolbarAdaptive: false,
        }),
        [],
    );

    const handleClick = () => {
        setState({ ...state, editing: !state.editing });
    };

    return (
        <div className={`${className}`}>
            <div className="flex flex-col">
                {state.editing ? (
                    <>
                        <JoditEditor
                            ref={editor}
                            value={state.content || initialText}
                            config={config}
                            onBlur={(newContent) =>
                                setState({ ...state, content: newContent })
                            }
                        />
                        <button onClick={handleClick} className="flex">
                            <TiInputChecked
                                size={'100%'}
                                className="w-[1.5rem] align-self-end"
                            />
                        </button>
                    </>
                ) : (
                    <div className="flex">
                        <Tag
                            className={`
								${height && `max-h-[${height}px] `}
								${width && `max-w-[${width}px] `}
								${allowOverflow ? 'overflow-y-scroll' : 'overflow-hidden'}
								`}
                        >
                            {state.content
                                ? HTMLReactParser(state.content)
                                : initialText}
                        </Tag>
                        <button
                            onClick={handleClick}
                            className="flex self-end ml-2"
                        >
                            <TiEdit
                                size={'100%'}
                                className="w-[1.5rem] align-self-end"
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextInput;

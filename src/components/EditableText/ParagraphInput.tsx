'use client';

import React, { FC, useMemo, useRef, useState } from 'react';

import HTMLReactParser from 'html-react-parser/lib/index';
import JoditEditor, { IJoditEditorProps, Jodit } from 'jodit-react';
import { TiEdit, TiInputChecked } from 'react-icons/ti';

import { joditOptions } from 'common/consts';
import { ITextInput } from 'common/types';
import { useModalContext } from 'context/modalContext';

const ParagraphInput: FC<ITextInput> = ({
  className = '',
  initialText = 'Start Typing!',
  semanticTag: Tag = 'div',
  overrideOptions,
}) => {
  const editor = useRef(null);

  const { setModalData, modalData } = useModalContext();
  const [state, setState] = useState(false);

  if (!modalData) return;
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
      width: 500,
      height: 200,
      minWidth: 200,
      minHeight: 100,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: false,
      indentMargin: 10,
      editorClassName: 'scrollbar',
    }),
    [],
  );

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className={`${className} m-2`}>
      <div className="flex flex-col">
        {state ? (
          <div className="flex items-end">
            <JoditEditor
              ref={editor}
              value={modalData.description || initialText}
              config={config}
              onBlur={(newContent) =>
                setModalData({
                  ...modalData,
                  description: newContent,
                })
              }
              className="scrollbar"
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
            <Tag
              className={`scrollbar max-h-[200px] max-w-[500px] overflow-y-scroll`}
            >
              {modalData.description
                ? HTMLReactParser(modalData.description)
                : initialText}
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

export default ParagraphInput;
import React from 'react';
import { Field, RichText, RichTextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SingleLine1: Field<string>;
  SingleLine2: Field<string>;
  MultiLine1: Field<string>;
  MultiLine2: Field<string>;
  RichText1: RichTextField;
  RichText2: RichTextField;
  Integer1: Field<string>;
  Integer2: Field<string>;
  Number1: Field<string>;
  Number2: Field<string>;
  DropList1: Field<string>;
  DropList2: Field<string>;
  DropLink1: Field<string>;
  DropLink2: Field<string>;
  DropTree1: Field<string>;
  DropTree2: Field<string>;
}

export type QAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: QAProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Comparison</span>
    </div>
  </div>
);

export const Default = (props: QAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return props.fields ? (
    <div
      className={`component qa-andre-1 ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className='container'>
        <p className='title'>Single Line</p>
        <div className="subtitle">
          <Text field={props.fields?.SingleLine1} />
        </div>
        <p className="subtitle">
          <Text field={props.fields?.SingleLine2} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Multi Line</p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine2} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Rich Text</p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText1} />
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText2} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Integer</p>
        <p className="subtitle">
          <Text field={props.fields?.Integer1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer2} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Number</p>
        <p className="subtitle">
          <Text field={props.fields?.Number1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number2} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Drop List</p>
        <p className="subtitle">
          <Text field={props.fields?.DropList1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList1} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Drop Link</p>
        <p className="subtitle">
          <Text field={props.fields?.DropLink1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropLink2} />
        </p>
      </div>

      <div className='container'>
        <p className='title'>Drop Tree</p>
        <p className="subtitle">
          <Text field={props.fields?.DropTree1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropTree2} />
        </p>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};

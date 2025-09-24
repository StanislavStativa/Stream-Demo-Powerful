import React, { JSX } from 'react';
import {
  Field,
  RichText,
  RichTextField,
  Text,
  Link,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

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
  MultiList1: Field<unknown>;
  MultiList2: Field<unknown>;
  MultiListSearch1: Field<unknown>;
  MultiListSearch2: Field<unknown>;
  TreeList1: Field<unknown>;
  TreeList2: Field<unknown>;
  MultiRootTreeList1: Field<unknown>;
  MultiRootTreeList2: Field<unknown>;
  CheckBox1: Field<string>;
  CheckBox2: Field<string>;
  CheckList1: Field<unknown>;
  CheckList2: Field<unknown>;
  TagList1: Field<unknown>;
  TagList2: Field<unknown>;
  Link1: LinkField;
  Link2: LinkField;
  DropList1: Field<string>;
  DropList2: Field<string>;
  DropLink1: Field<{ label: string }>;
  DropLink2: Field<{ label: string }>;
  DropTree1: Field<{ label: string }>;
  DropTree2: Field<{ label: string }>;
  DateTime1: Field<string>;
  DateTime2: Field<string>;
  Date1: Field<string>;
  Date2: Field<string>;
}

export type QAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: QAProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Default</span>
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
      <div className="container">
        <p className="title">
          <strong>Single Line</strong>
        </p>
        <div className="subtitle">
          <Text field={props.fields?.SingleLine1} />
        </div>
        <p className="subtitle">
          <Text field={props.fields?.SingleLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi Line</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Rich Text</strong>
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText1} />
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Integer</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Number</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop List</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Date</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Date1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Date2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Date Time</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DateTime1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DateTime2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Link</strong>
        </p>
        <p className="subtitle">{props.fields.DropLink1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink1.value)}</p>
        <p className="subtitle">{props.fields.DropLink2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Tree</strong>
        </p>
        <p className="subtitle">{props.fields.DropTree1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree1.value)}</p>
        <p className="subtitle">{props.fields.DropTree2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList1.value)
            ? props.fields.MultiList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList2.value)
            ? props.fields.MultiList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List Search</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch1.value)
            ? props.fields.MultiListSearch1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch2.value)
            ? props.fields.MultiListSearch2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList1.value)
            ? props.fields.TreeList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList2.value)
            ? props.fields.TreeList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multiroot Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList1.value)
            ? props.fields.MultiRootTreeList1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList2.value)
            ? props.fields.MultiRootTreeList2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Check Box</strong>
        </p>
        <p className="subtitle">{props.fields.CheckBox1.value.toString()}</p>
        <p className="subtitle">{props.fields.CheckBox2.value.toString()}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Check List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.CheckList1.value)
            ? props.fields.CheckList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.CheckList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.CheckList2.value)
            ? props.fields.CheckList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.CheckList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tag List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TagList1.value)
            ? props.fields.TagList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TagList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TagList2.value)
            ? props.fields.TagList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TagList2.value)}</p>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};

export const PrettierByAI = (props: QAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const fieldBlock = (title: string, content: JSX.Element) => (
    <div className="tile bg-gray-100 rounded-md shadow-md p-4 mb-4">
      <h3 className="tile-title text-lg font-bold mb-2">{title}</h3>
      <div>{content}</div>
    </div>
  );

  return props.fields ? (
    <div
      className={`component variant-grid ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fieldBlock(
          'Single Line Text',
          <>
            <Text field={props.fields?.SingleLine1} />
            <br />
            <Text field={props.fields?.SingleLine2} />
          </>
        )}
        {fieldBlock(
          'Multi Line Text',
          <>
            <Text field={props.fields?.MultiLine1} />
            <br />
            <Text field={props.fields?.MultiLine2} />
          </>
        )}
        {fieldBlock(
          'Rich Text',
          <>
            <RichText field={props.fields?.RichText1} />
            <RichText field={props.fields?.RichText2} />
          </>
        )}
        {fieldBlock(
          'Integer',
          <>
            <Text field={props.fields?.Integer1} />
            <br />
            <Text field={props.fields?.Integer2} />
          </>
        )}
        {fieldBlock(
          'Number',
          <>
            <Text field={props.fields?.Number1} />
            <br />
            <Text field={props.fields?.Number2} />
          </>
        )}
        {fieldBlock(
          'Date',
          <>
            <Text field={props.fields?.Date1} />
            <br />
            <Text field={props.fields?.Date2} />
          </>
        )}
        {fieldBlock(
          'Datetime',
          <>
            <Text field={props.fields?.DateTime1} />
            <br />
            <Text field={props.fields?.DateTime2} />
          </>
        )}
        {fieldBlock(
          'Multilist',
          <>
            {Array.isArray(props.fields.MultiList1.value) &&
              props.fields.MultiList1.value.map((item: { label: string }) => item.label).join(', ')}
            <br />
            {Array.isArray(props.fields.MultiList2.value) &&
              props.fields.MultiList2.value.map((item: { label: string }) => item.label).join(', ')}
          </>
        )}
        {fieldBlock(
          'Multilist with Search',
          <>
            {Array.isArray(props.fields.MultiListSearch1.value) &&
              props.fields.MultiListSearch1.value
                .map((item: { label: string }) => item.label)
                .join(', ')}
            <br />
            {Array.isArray(props.fields.MultiListSearch2.value) &&
              props.fields.MultiListSearch2.value
                .map((item: { label: string }) => item.label)
                .join(', ')}
          </>
        )}
        {fieldBlock(
          'Tree List',
          <>
            {Array.isArray(props.fields.TreeList1.value) &&
              props.fields.TreeList1.value.map((item: { label: string }) => item.label).join(', ')}
            <br />
            {Array.isArray(props.fields.TreeList2.value) &&
              props.fields.TreeList2.value.map((item: { label: string }) => item.label).join(', ')}
          </>
        )}
        {fieldBlock(
          'Multiroot Tree List',
          <>
            {Array.isArray(props.fields.MultiRootTreeList1.value) &&
              props.fields.MultiRootTreeList1.value
                .map((item: { label: string }) => item.label)
                .join(', ')}
            <br />
            {Array.isArray(props.fields.MultiRootTreeList2.value) &&
              props.fields.MultiRootTreeList2.value
                .map((item: { label: string }) => item.label)
                .join(', ')}
          </>
        )}
        {fieldBlock(
          'Checklist',
          <>
            {Array.isArray(props.fields.CheckList1.value) &&
              props.fields.CheckList1.value.map((item: { label: string }) => item.label).join(', ')}
            <br />
            {Array.isArray(props.fields.CheckList2.value) &&
              props.fields.CheckList2.value.map((item: { label: string }) => item.label).join(', ')}
          </>
        )}
        {fieldBlock(
          'Tag List',
          <>
            {Array.isArray(props.fields.TagList1.value) &&
              props.fields.TagList1.value.map((item: { label: string }) => item.label).join(', ')}
            <br />
            {Array.isArray(props.fields.TagList2.value) &&
              props.fields.TagList2.value.map((item: { label: string }) => item.label).join(', ')}
          </>
        )}
        {fieldBlock(
          'Checkbox',
          <>
            <Text field={props.fields.CheckBox1} />
            <br />
            <Text field={props.fields.CheckBox2} />
          </>
        )}
        {fieldBlock(
          'General Link',
          <>
            <Link field={props.fields.Link1}>{props.fields.Link1.value?.text || 'Link 1'}</Link>
            <br />
            <Link field={props.fields.Link2}>{props.fields.Link2.value?.text || 'Link 2'}</Link>
          </>
        )}
        {fieldBlock(
          'Droptree',
          <>
            <span>Tree 1: {props.fields.DropTree1?.value?.label}</span>
            <br />
            <span>Tree 2: {props.fields.DropTree2?.value?.label}</span>
          </>
        )}
        {fieldBlock(
          'Droplink',
          <>
            <span>Link 1: {props.fields.DropLink1?.value?.label}</span>
            <br />
            <span>Link 2: {props.fields.DropLink2?.value?.label}</span>
          </>
        )}
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
